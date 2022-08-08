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
	<!-- Errors handlers -->
	<EmptyContent v-if="errorFetchingFiles">
		{{ t('photos', 'An error occurred') }}
	</EmptyContent>

	<div v-else class="timeline">
		<div class="timeline__header">
			<Actions v-if="selectedFileIds.length === 0"
				:force-title="true"
				:force-menu="true"
				:menu-title="t('photos', 'Add')"
				:primary="true">
				<Plus slot="icon" />
				<ActionButton :close-after-click="true" :title="t('photos', 'Upload media')" @click="openUploader">
					<FileUpload slot="icon" />
				</ActionButton>
				<ActionButton :close-after-click="true"
					:aria-label="t('photos', 'Create a new album')"
					:title="t('photos', 'Create new album')"
					@click="showAlbumCreationForm = true">
					<PlusBoxMultiple slot="icon" />
				</ActionButton>
			</Actions>

			<template v-else>
				<Button :close-after-click="true"
					type="primary"
					:aria-label="t('photos', 'Add selection to an album')"
					@click="showAlbumPicker = true">
					<template #icon>
						<Plus slot="icon" />
					</template>
					{{ t('photos', 'Add to album') }}
				</Button>
				<Actions>
					<ActionButton :close-after-click="true"
						:aria-label="t('photos', 'Download selection')"
						:title="t('photos', 'Download')"
						@click="downloadSelection">
						<DownloadOutline slot="icon" />
					</ActionButton>
					<ActionButton v-if="shouldFavorite"
						:close-after-click="true"
						:aria-label="t('photos', 'Mark selection as favorite')"
						:title="t('photos', 'Favorite')"
						@click="favoriteSelection">
						<Star slot="icon" />
					</ActionButton>
					<ActionButton v-else
						:close-after-click="true"
						:aria-label="t('photos', 'Remove selection from favorites')"
						:title="t('photos', 'Remove from favorites')"
						@click="unFavoriteSelection">
						<Star slot="icon" />
					</ActionButton>
					<ActionButton :close-after-click="true"
						:title="t('photos', 'Delete')"
						:aria-label="t('photos', 'Delete selection')"
						@click="deleteSelection">
						<TrashCan slot="icon" />
					</ActionButton>
				</Actions>
				<!-- HACK: Needed to make the above Actions work, no idea why be it is like that in the documentation. -->
				<Actions />
			</template>

			<Loader v-if="loadingCount > 0" key="loader" />

			<Modal v-if="showAlbumCreationForm"
				key="albumCreationForm"
				:title="t('photos', 'New album')"
				@close="showAlbumCreationForm = false">
				<AlbumCreationForm @album-created="showAlbumCreationForm = false" />
			</Modal>

			<Modal v-if="showAlbumPicker"
				key="albumPicker"
				:title="t('photos', 'Add to album')"
				@close="showAlbumPicker = false">
				<AlbumPicker @album-picked="addSelectionToAlbum" />
			</Modal>
		</div>

		<FilesListViewer ref="filesListViewer"
			class="timeline__file-list"
			:use-window="true"
			:file-ids-by-section="fileIdsByMonth"
			:sections="monthsList"
			:loading="loadingFiles"
			:empty-message="t('photos', 'No photos in here')"
			@need-content="getContent">
			<template slot-scope="{file, visibility}">
				<h3 v-if="file.sectionHeader"
					:id="`file-picker-section-header-${file.id}`"
					class="section-header">
					<b>{{ file.id | dateMonth }}</b>
					{{ file.id | dateYear }}
				</h3>
				<File v-else
					:item="files[file.id]"
					:allow-selection="true"
					:selected="selection[file.id] === true"
					:visibility="visibility"
					:semaphore="semaphore"
					@click="openViewer"
					@select-toggled="onFileSelectToggle" />
			</template>
		</FilesListViewer>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Plus from 'vue-material-design-icons/Plus'
import TrashCan from 'vue-material-design-icons/TrashCan'
import PlusBoxMultiple from 'vue-material-design-icons/PlusBoxMultiple'
import FileUpload from 'vue-material-design-icons/FileUpload'
import Star from 'vue-material-design-icons/Star'
import DownloadOutline from 'vue-material-design-icons/DownloadOutline'

import { Modal, Actions, ActionButton, Button } from '@nextcloud/vue'
import moment from '@nextcloud/moment'

import logger from '../services/logger.js'
import { allMimes } from '../services/AllowedMimes.js'
import FetchFilesMixin from '../mixins/FetchFilesMixin.js'
import FilesByMonthMixin from '../mixins/FilesByMonthMixin.js'
import FilesSelectionMixin from '../mixins/FilesSelectionMixin.js'
import FilesListViewer from '../components/FilesListViewer.vue'
import EmptyContent from '../components/EmptyContent.vue'
import File from '../components/File.vue'
import Loader from '../components/Loader.vue'
import AlbumCreationForm from '../components/AlbumCreationForm.vue'
import AlbumPicker from '../components/AlbumPicker.vue'

export default {
	name: 'Timeline',
	components: {
		EmptyContent,
		AlbumCreationForm,
		AlbumPicker,
		FilesListViewer,
		Loader,
		File,
		Modal,
		Actions,
		ActionButton,
		Button,
		Plus,
		TrashCan,
		FileUpload,
		PlusBoxMultiple,
		Star,
		DownloadOutline,
	},

	filters: {
		/**
		 * @param {string} date - In the following format: YYYYMM
		 */
		dateMonth(date) {
			return moment(date, 'YYYYMM').format('MMMM')
		},
		/**
		 * @param {string} date - In the following format: YYYYMM
		 */
		dateYear(date) {
			return moment(date, 'YYYYMM').format('YYYY')
		},
	},

	mixins: [
		FetchFilesMixin,
		FilesSelectionMixin,
		FilesByMonthMixin,
	],

	beforeRouteLeave(to, from, next) {
		window.scrollTo(0, 0)
		next()
	},

	props: {
		onlyFavorites: {
			type: Boolean,
			default: false,
		},
		mimesType: {
			type: Array,
			default: () => allMimes,
		},
		onThisDay: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		return {
			loadingCount: 0,
			showAlbumCreationForm: false,
			showAlbumPicker: false,
		}
	},

	computed: {
		...mapGetters([
			'files',
		]),

		/** @type {boolean} */
		shouldFavorite() {
			// Favorite all selection if at least one file is not on the favorites.
			return this.selectedFileIds.some((fileId) => this.$store.state.files.files[fileId].favorite === 0)
		},
	},

	methods: {
		...mapActions(['deleteFiles', 'toggleFavoriteForFiles', 'downloadFiles', 'addFilesToAlbum']),

		getContent() {
			this.fetchFiles('', {
				mimesType: this.mimesType,
				onThisDay: this.onThisDay,
				onlyFavorites: this.onlyFavorites,
			})
		},

		openViewer(fileId) {
			const file = this.files[fileId]
			OCA.Viewer.open({
				path: file.filename,
				list: Object.values(this.fileIdsByMonth).flat().map(fileId => this.files[fileId]),
				loadMore: file.loadMore ? async () => await file.loadMore(true) : () => [],
				canLoop: file.canLoop,
			})
		},

		openUploader() {
			// TODO: finish when implementing upload
		},

		async addSelectionToAlbum(albumName) {
			try {
				this.showAlbumPicker = false
				this.loadingCount++
				await this.addFilesToAlbum({ albumName, fileIdsToAdd: this.selectedFileIds })
			} catch (error) {
				logger.error(error)
			} finally {
				this.loadingCount--
			}
		},

		async favoriteSelection() {
			try {
				this.loadingCount++
				await this.toggleFavoriteForFiles({ fileIds: this.selectedFileIds, favoriteState: true })
			} catch (error) {
				logger.error(error)
			} finally {
				this.loadingCount--
			}
		},

		async unFavoriteSelection() {
			try {
				this.loadingCount++
				await this.toggleFavoriteForFiles({ fileIds: this.selectedFileIds, favoriteState: false })
			} catch (error) {
				logger.error(error)
			} finally {
				this.loadingCount--
			}
		},

		async deleteSelection() {
			try {
				this.loadingCount++
				// Need to store the file ids so it is not changed before the deleteFiles call.
				const files = this.selectedFileIds
				this.$emit('uncheck-items', files)
				await this.deleteFiles(files)
			} catch (error) {
				logger.error(error)
			} finally {
				this.loadingCount--
			}
		},

		async downloadSelection() {
			try {
				this.loadingCount++
				await this.downloadFiles(this.selectedFileIds)
			} catch (error) {
				logger.error(error)
			} finally {
				this.loadingCount--
			}
		},
	},
}
</script>
<style lang="scss" scoped>
.timeline {
	display: flex;
	flex-direction: column;
	padding: 4px 64px;

	&__header {
		display: flex;
		min-height: 60px;
		align-items: center;
		position: fixed;
		width: 100%;
		height: 60px;

		& > * {
			margin-right: 8px;
		}

		.loader {
			margin-left: 16px;
		}
	}

	&__file-list {
		margin-top: 60px;

		.section-header {
			padding: 24px 0 16px 0;
		}
	}
}
</style>
