<!--
 - @copyright Copyright (c) 2022 Louis Chemineau <louis@chmn.me>
 -
 - @author Louis Chemineau <louis@chmn.me>
 -
 - @license AGPL-3.0-or-later
 -
 - This program is free software: you can redistribute it and/or modify
 - it under the terms of the GNU Affero General Public License as
 - published by the Free Software Foundation, either version 3 of the
 - License, or (at your option) any later version.
 -
 - This program is distributed in the hope that it will be useful,
 - but WITHOUT ANY WARRANTY; without even the implied warranty of
 - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 - GNU Affero General Public License for more details.
 -
 - You should have received a copy of the GNU Affero General Public License
 - along with this program. If not, see <http://www.gnu.org/licenses/>.
 -
 -->
<template>
	<!-- Errors handlers-->
	<EmptyContent v-if="errorFetchingFiles === 404" class="empty-content-with-illustration">
		<template #icon>
			<!-- eslint-disable-next-line vue/no-v-html -->
			<span class="empty-content-illustration" v-html="FolderIllustration" />
		</template>
		{{ t('photos', 'This album does not exist') }}
	</EmptyContent>
	<EmptyContent v-else-if="errorFetchingFiles || errorFetchingAlbums">
		<template #icon>
			<AlertCircle />
		</template>
		{{ t('photos', 'An error occurred') }}
	</EmptyContent>

	<div v-else class="album-container">
		<div class="album-header">
			<div class="album-header-left">
				<div class="album-title">
					<b v-if="album !== undefined" class="album-name">
						<!-- TODO: Remove "All" -->
						{{ album.name || "All" }}

					</b>
					<div v-if="album !== undefined" class="album-location">
						<MapMarker />{{ album.location }}
					</div>
				</div>

				<Loader v-if="(loadingAlbums || loadingFiles) && nbFetchedFiles !== 0" />
			</div>
			<div v-if="album !== undefined" class="album-actions">
				<Button v-if="album.itemCount !== 0"
					type="tertiary"
					:aria-label="t('photos', 'Add photos to this album')"
					@click="showAddPhotosModal = true">
					<template #icon>
						<Plus />
					</template>
				</Button>
				<Button type="tertiary" :aria-label="t('photos', 'Share this album')" @click="showShareModal = true">
					<template #icon>
						<ShareVariant />
					</template>
				</Button>
				<Actions :force-menu="true">
					<ActionButton :close-after-click="true"
						:title="t('photos', 'Delete album')"
						@click="deleteAlbum">
						<template #icon>
							<TrashCan />
						</template>
					</ActionButton>
					<ActionButton v-if="selection.length === 0"
						:close-after-click="true"
						:title="n('photos', 'Remove file from album', 'Remove files from album', selection.length)"
						@click="removeFilesFromAlbum(selectedFileIds)">
						<template #icon>
							<TrashCan />
						</template>
					</ActionButton>
				</Actions>
			</div>
		</div>

		<div v-if="album !== undefined && album.itemCount === 0 && !(loadingFiles || loadingAlbums)" class="empty-album">
			<EmptyContent>
				<template #icon>
					<ImagePlus />
				</template>
				<template #desc>
					{{ t('photos', "This album doesn't have any photos or videos yet!") }}
				</template>
			</EmptyContent>

			<Button class="empty-album__button"
				type="primary"
				:aria-label="t('photos', 'Add photos to this album')"
				@click="showAddPhotosModal = true">
				<template #icon>
					<Plus />
				</template>
				{{ t('photos', "Add") }}
			</Button>
		</div>

		<FilesListViewer v-if="album !== undefined"
			class="album-photos"
			:files-ids="albumFiles"
			:loading="(loadingFiles || loadingAlbums) && nbFetchedFiles !== 0"
			@need-content="fetchAlbumContent">
			<File slot-scope="{file, height, visibility}"
				:item="files[file.id]"
				:allow-selection="true"
				:selected="selection[file.id] === true"
				:style="{ width: `${height * file.ratio}px`, height: `${height}px`}"
				:visibility="visibility"
				:semaphore="semaphore"
				@click="openViewer"
				@select-toggled="onFileSelectToggle" />
		</FilesListViewer>

		<Modal v-if="showAddPhotosModal"
			size="large"
			:title="t('photos', 'Add photos to the album')"
			@close="showAddPhotosModal = false">
			<FilesPicker @files-picked="addFilesToAlbum" />
		</Modal>

		<Modal v-else-if="showShareModal"
			:title="t('photos', 'Share the album')"
			@close="showShareModal = false">
			<ShareAlbumForm @albumShared="showShareModal = false" />
		</Modal>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import MapMarker from 'vue-material-design-icons/MapMarker'
import ShareVariant from 'vue-material-design-icons/ShareVariant'
import Plus from 'vue-material-design-icons/Plus'
import TrashCan from 'vue-material-design-icons/TrashCan'
import ImagePlus from 'vue-material-design-icons/ImagePlus'
import AlertCircle from 'vue-material-design-icons/AlertCircle'
import { Actions, ActionButton, Button, Modal, EmptyContent } from '@nextcloud/vue'

import FetchAlbumsMixin from '../mixins/FetchAlbumsMixin.js'
import FetchFilesMixin from '../mixins/FetchFilesMixin.js'
import FilesSelectionMixin from '../mixins/FilesSelectionMixin.js'
import FilesListViewer from '../components/FilesListViewer.vue'
import File from '../components/File.vue'
import Loader from '../components/Loader.vue'
import FilesPicker from '../components/FilesPicker.vue'
import ShareAlbumForm from '../components/ShareAlbumForm.vue'
import FolderIllustration from '../assets/Illustrations/folder.svg'

export default {
	name: 'AlbumContent',
	components: {
		MapMarker,
		ShareVariant,
		Plus,
		TrashCan,
		ImagePlus,
		AlertCircle,
		FilesListViewer,
		File,
		EmptyContent,
		Loader,
		Actions,
		ActionButton,
		Button,
		Modal,
		FilesPicker,
		ShareAlbumForm,
	},

	mixins: [
		FetchAlbumsMixin,
		FetchFilesMixin,
		FilesSelectionMixin,
	],

	props: {
		albumId: {
			type: String,
			default: '/',
		},
	},

	data() {
		return {
			showAddPhotosModal: false,
			showShareModal: false,
			FolderIllustration,
		}
	},

	computed: {
		...mapGetters([
			'files',
			'albumsFiles',
		]),

		/**
		 * @return {string[]} The album information for the current albumId.
		 */
		album() {
			return this.albums[this.albumId]
		},

		/**
		 * @return {string[]} The list of files for the current albumId.
		 */
		albumFiles() {
			return this.albumsFiles[this.albumId] || []
		},
	},

	watch: {
		album() {
			this.fetchAlbumContent()
		},
	},

	methods: {
		async fetchAlbumContent() {
			const files = await this.fetchFiles(this.album.name)
			if (files.length > 0) {
				this.$store.commit('addFilesToAlbum', { albumId: this.albumId, fileIdsToAdd: files.map(file => file.fileid) })
			}
		},

		openViewer(fileId) {
			const file = this.files[fileId]
			OCA.Viewer.open({
				path: file.filename,
				list: this.albumFiles.map(fileId => this.files[fileId]).filter(file => !file.sectionHeader),
				loadMore: file.loadMore ? async () => await file.loadMore(true) : () => [],
				canLoop: file.canLoop,
			})
		},

		addFilesToAlbum(fileIds) {
			this.$store.dispatch('addFilesToAlbum', { albumId: this.albumId, fileIdsToAdd: fileIds })
			this.showAddPhotosModal = false
		},

		removeFilesFromAlbum(fileIds) {
			this.$store.dispatch('removeFilesFromAlbum', { albumId: this.albumId, fileIdsToAdd: fileIds })
		},

		// TODO: Check delete album.
		deleteAlbum() {
			this.$store.dispatch('deleteAlbum', { albumId: this.albumId })
		},
	},
}
</script>
<style lang="scss" scoped>
.album-container {
	height: calc(100vh - var(--header-height));
	display: flex;
	flex-direction: column;
	padding: 8px 64px;

	.empty-album {
		display: flex;
		flex-direction: column;
		align-items: center;

		&__button {
			margin-top: 32px;
		}
	}

	.album-header {
		display: flex;
		min-height: 60px;
		align-items: center;
		justify-content: space-between;

		.album-title {
			min-width: 300px;

			.album-location {
				margin-left: -4px;
				display: flex;
				color: var(--color-text-lighter);
			}
		}

		.album-actions {
			display: flex;
			align-items: baseline; // Else children will stretch in height as container is absolutely-positioned.

			button {
				margin-left: 16px;
			}
		}
	}

	.album-photos {
		margin-top: 16px;
		height: 100%;
		min-height: 0; // Prevent it from overflowing in a flex context.
	}
}

.empty-content-with-illustration ::v-deep .empty-content__icon {
	width: 200px;
	height: 200px;

	svg {
		width: 200px;
		height: 200px;
	}
}
</style>
