<!--
 - @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 -
 - @author John Molakvoæ <skjnldsv@protonmail.com>
 - @author Corentin Mors <medias@pixelswap.fr>
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
	<EmptyContent v-if="folder === undefined && !loadingFolder" class="empty-content-with-illustration">
		<template #icon>
			<!-- eslint-disable-next-line vue/no-v-html -->
			<span class="empty-content-illustration" v-html="FolderIllustration" />
		</template>
		{{ t('photos', 'This folder does not exist') }}
	</EmptyContent>
	<EmptyContent v-else-if="errorFetchingFolder">
		<template #icon>
			<AlertCircle />
		</template>
		{{ t('photos', 'An error occurred') }}
	</EmptyContent>

	<!-- Folder content -->
	<div v-else-if="!loadingFolder && folder !== undefined" class="folder">
		<div class="folder__name">
			{{ path === '/' ? 'Home' : path }}
		</div>

		<!-- Empty folder, should only happen via direct link -->
		<EmptyContent v-if="folderContent.fileIds.length === 0 && folderContent.folderIds.length === 0 && !loadingFolder"
			key="emptycontent">
			<template #icon>
				<!-- eslint-disable-next-line vue/no-v-html -->
				<span class="empty-content-illustration" v-html="EmptyBox" />
			</template>
			{{ t('photos', "This folder is empty!") }}
		</EmptyContent>

		<!-- Folder's folders -->
		<div class="folder__folders-list">
			<div v-if="folderContent.folderIds.length !== 0" class="folder__folders-list__title">
				{{ t('photos', 'Folders') }}
			</div>
			<div class="folder__folders-list__container" :class="{'folder__folders-list__container--nofiles': folderContent.fileIds.length === 0}">
				<Folder v-for="folderId in folderContent.folderIds"
					:key="folderId"
					:folder-id="folderId"
					class="folder__folders-list__container__link" />
			</div>
		</div>

		<!-- Folder's files -->
		<div class="folder__files-list">
			<div v-if="folderContent.fileIds.length !== 0" class="folder__files-list__title">
				{{ t('photos', 'Photos and videos') }}
			</div>
			<FilesListViewer v-if="folder !== undefined"
				:use-window="true"
				:file-ids="folderContent.fileIds"
				:loading="loadingFolder">
				<File slot-scope="{file, visibility}"
					:file="files[file.id]"
					:allow-selection="true"
					:selected="selection[file.id] === true"
					:visibility="visibility"
					:semaphore="semaphore"
					@click="openViewer"
					@select-toggled="onFileSelectToggle" />
			</FilesListViewer>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import getFolderContent from '../services/FolderContent.js'
import EmptyContent from '../components/EmptyContent.vue'
import FilesSelectionMixin from '../mixins/FilesSelectionMixin.js'
import cancelableRequest from '../utils/CancelableRequest.js'
import EmptyBox from '../assets/Illustrations/empty.svg'
import FolderIllustration from '../assets/Illustrations/folder.svg'
import FilesListViewer from '../components/FilesListViewer.vue'
import Folder from '../components/Folder.vue'
import File from '../components/File.vue'
import SemaphoreWithPriority from '../utils/semaphoreWithPriority.js'

export default {
	name: 'Folders',
	components: {
		EmptyContent,
		FilesListViewer,
		Folder,
		File,
	},

	mixins: [
		FilesSelectionMixin,
	],

	props: {
		path: {
			type: String,
			default: '/',
		},
		showShared: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		return {
			errorFetchingFolder: null,
			cancelRequest: () => {},
			loadingFolder: false,
			EmptyBox,
			FolderIllustration,
			semaphore: new SemaphoreWithPriority(30),
			fetchSemaphore: new SemaphoreWithPriority(1),
			semaphoreSymbol: null,
		}
	},

	computed: {
		...mapGetters([
			'files',
			'folders',
			'foldersContent',
			'paths',
		]),

		/** @return {object} */
		folder() {
			return this.folders[this.paths[this.path]]
		},

		/** @return {object} */
		folderContent() {
			return this.foldersContent[this.paths[this.path]]
		},
	},

	watch: {
		path() {
			this.fetchFolderContent()
		},
		showShared() {
			this.fetchFolderContent()
		},
	},

	async beforeMount() {
		this.fetchFolderContent()
	},

	beforeDestroy() {
		this.cancelRequest('Changed view')
	},

	methods: {
		...mapActions([
			'addFolder',
			'appendFiles',
		]),

		async fetchFolderContent() {
			// cancel any pending requests
			this.cancelRequest('Changed folder')

			// close any potential opened viewer & sidebar
			OCA.Viewer && OCA.Viewer.close && OCA.Viewer.close()
			OCA.Files && OCA.Files.Sidebar.close && OCA.Files.Sidebar.close()

			// if we don't already have some cached data let's show a loader
			if (!this.files[this.folderId] || !this.folders[this.folderId]) {
				this.loadingFolder = true
			}
			this.errorFetchingFolder = null

			// init cancellable request
			const { request, cancel } = cancelableRequest(getFolderContent)
			this.cancelRequest = cancel

			try {
				// get content and current folder info
				const { folder, folders, files } = await request(this.path, { shared: this.showShared })

				this.appendFiles(files)
				this.addFolder({
					folder,
					fileIds: files.map(file => file.fileid).map((fileId) => fileId.toString()),
					folderIds: folders.map(folder => folder.fileid).map((fileId) => fileId.toString()),
				})

				for (const f of folders) {
					this.addFolder({
						folder: f,
						fileIds: [],
						folderIds: [],
					})
				}
			} catch (error) {
				if (error.response?.status === 404) {
					this.errorFetchingFolder = 404
				} else if (error.code === 'ERR_CANCELED') {
					return []
				} else {
					this.errorFetchingFolder = error
				}
				// cancelled request, moving on...
				console.error('Error fetching folder data', error)
			} finally {
				// done loadingFolder even with errors
				this.loadingFolder = false
			}
		},

		openViewer(fileId) {
			const file = this.files[fileId]
			OCA.Viewer.open({
				path: file.filename,
				list: Object.values(this.folderContent.fileIds).map(fileId => this.files[fileId]),
				loadMore: file.loadMore ? async () => await file.loadMore(true) : () => [],
				canLoop: file.canLoop,
			})
		},
	},
}
</script>
<style lang="scss" scoped>
.folder {
	padding: 0 64px;

	&__name {
		display: flex;
		align-items: center;
		font-size: 24px;
		font-weight: bold;
		height: 60px;
	}

	&__folders-list {
		display: flex;
		flex-direction: column;
		width: 100%;

		&__title {
			font-size: 16px;
			font-weight: bold;
			margin-bottom: 16px;
		}

		&__container {
			display: flex;
			gap: 16px;
			overflow: scroll;
			// flex-direction: column;
			// width: 300px;
			// height: 700px;
			// transform-origin: right top;
			// transform:rotate(-90deg) translateY(-100px);

			&--nofiles {
				overflow: initial;
				flex-wrap: wrap;
			}

			// &__link {
				// height: 300px;
				// transform: rotate(90deg);
				// transform-origin: right top;
			// }
		}
	}

	&__files-list {
		margin-top: 32px;

		&__title {
			font-size: 16px;
			font-weight: bold;
			margin-bottom: 16px;
		}
	}
}
</style>
