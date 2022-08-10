<!--
 - @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 -
 - @author John Molakvoæ <skjnldsv@protonmail.com>
 - @author Corentin Mors <medias@pixelswap.fr>
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
	<router-link class="folder-cover" :to="`/folders/${folder.filename}`">
		<div class="folder-cover__previews">
			<template v-for="(fileId, index) in previewFiles">
				<img v-if="fileId !== 'placeholder'"
					:key="fileId"
					class="folder-cover__previews__preview"
					:src="fileId | imageSrc">
				<div v-if="fileId === 'placeholder'"
					:key="`placeholder-${index}`"
					class="folder-cover__previews__preview folder-cover__previews--placeholder" />
			</template>
		</div>
		<div class="folder-cover__name">
			{{ folder.basename }}
		</div>
	</router-link>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import { generateUrl } from '@nextcloud/router'

import getFolderContent from '../services/FolderContent.js'
import cancelableRequest from '../utils/CancelableRequest.js'

export default {
	name: 'Folder',

	filters: {
		/**
		 * @param fileId
		 * @return {string}
		 */
		imageSrc(fileId) {
			return generateUrl(`/core/preview?fileId=${fileId}&x=${512}&y=${512}&forceIcon=0&a=1`)
		},
	},

	inheritAttrs: false,

	props: {
		folderId: {
			type: String,
			required: true,
		},
	},

	data() {
		return {
			cancelRequest: null,
		}
	},

	computed: {
		// global lists
		...mapGetters([
			'files',
			'folders',
			'foldersContent',
		]),

		folder() {
			return this.folders[this.folderId]
		},

		folderContent() {
			return this.foldersContent[this.folderId]
		},

		folderFiles() {
			return this.folderContent.fileIds.map(fileId => this.files[fileId])
		},

		folderFolders() {
			return this.folderContent.folderIds.map(folderId => this.folders[folderId])
		},

		previewFiles() {
			let previewFiles = this.foldersContent[this.folderId].fileIds.slice(0, 4) // only get the 4 first images

			// If we didn't found any previews in the folder we try the next subfolder
			// We limit to one subfolder for performance concerns
			if (previewFiles.length === 0 && this.folderFolders.length > 0) {
				const firstChildFolderId = this.folderFolders[0].fileid

				if (this.foldersContent[firstChildFolderId].fileIds.length === 0) {
					this.fetchFolderContent(this.folders[firstChildFolderId].filename)
				}

				previewFiles = this.foldersContent[firstChildFolderId].fileIds.slice(0, 4) // only get the 4 first images
			}

			return [...previewFiles, ...(new Array(4 - previewFiles.length).fill('placeholder'))]
		},
	},

	async created() {
		if (this.folderFiles.length === 0) {
			await this.fetchFolderContent(this.folder.filename)
		}
	},

	beforeDestroy() {
		// cancel any pending requests
		if (this.cancelRequest) {
			this.cancelRequest('Navigated away')
		}
	},

	methods: {
		...mapActions([
			'addFolder',
			'appendFiles',
		]),

		async fetchFolderContent(folderPath) {
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
				const { folder, folders, files } = await request(folderPath, { shared: this.showShared })

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
	},
}
</script>

<style lang="scss" scoped>
.folder-cover {
	display:flex;
	flex-direction: column;
	border-radius: 12px;
	padding: 16px;

	&:hover {
		background: var(--color-background-dark);
	}

	&__previews {
		display:flex;
		flex-wrap: wrap;
		border-radius: 12px;
		overflow: hidden;
		width: 200px;
		height: 200px;
		background: var(--color-primary-light);

		&__preview {
			width: 100px;
			height: 100px;
			object-fit: cover;

			&--placeholder {
				background: var(--color-primary-light);
			}
		}
	}

	&__name {
		font-weight: bold;
		text-align: center;
		padding-top: 16px;
		padding-bottom: 24px;
		width: 180px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
}
</style>
