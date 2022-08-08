/**
 * @copyright Copyright (c) 2019 Louis Chemineau <louis@chmn.me>
 *
 * @author Louis Chemineau <louis@chmn.me>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

import { mapGetters } from 'vuex'

import logger from '../services/logger.js'
import getPhotos from '../services/PhotoSearch.js'
import cancelableRequest from '../utils/CancelableRequest.js'
import SemaphoreWithPriority from '../utils/semaphoreWithPriority.js'

export default {
	name: 'FetchFilesMixin',

	data() {
		return {
			errorFetchingFiles: null,
			loadingFiles: false,
			doneFetchingFiles: false,
			cancelFilesRequest: () => { },
			semaphore: new SemaphoreWithPriority(30),
			fetchSemaphore: new SemaphoreWithPriority(1),
			semaphoreSymbol: null,
			fetchedFileIds: [],
		}
	},

	beforeDestroy() {
		if (this.cancelFilesRequest) {
			this.cancelFilesRequest('Changed view')
		}
	},

	beforeRouteLeave(from, to, next) {
		if (this.cancelFilesRequest) {
			this.cancelFilesRequest('Changed view')
		}

		this.resetFetchFilesState()
		return next()
	},

	computed: {
		...mapGetters([
			'files',
		]),
	},

	methods: {
		/**
		 * @param {string} path - Path to pass to getPhotos
		 * @param {object} options - Options to pass to getPhotos
		 * @return {Promise<string[]>} - The next batch of data depending on global offset.
		*/
		async fetchFiles(path = '', options = {}) {
			if (this.doneFetchingFiles || this.loadingFiles) {
				return []
			}

			const semaphoreSymbol = await this.semaphore.acquire(() => 0, 'fetchFiles')
			const fetchSemaphoreSymbol = await this.fetchSemaphore.acquire()

			try {
				this.errorFetchingFiles = null
				this.loadingFiles = true
				this.semaphoreSymbol = semaphoreSymbol

				const { request, cancel } = cancelableRequest(getPhotos)
				this.cancelFilesRequest = cancel

				const numberOfImagesPerBatch = 1000

				// Load next batch of images
				const fetchedFiles = await request(path, {
					firstResult: this.fetchedFileIds.length,
					nbResults: numberOfImagesPerBatch,
					...options,
				})

				// If we get less files than requested that means we got to the end
				if (fetchedFiles.length !== numberOfImagesPerBatch) {
					this.doneFetchingFiles = true
				}

				const fileIds = fetchedFiles.map(file => file.fileid).filter(fileId => !this.fetchedFileIds.includes(fileId)) // Filter to prevent duplicate fileId.
				this.fetchedFileIds.push(...fileIds)

				this.$store.dispatch('appendFiles', fetchedFiles)

				return fileIds
			} catch (error) {
				if (error.response && error.response.status) {
					if (error.response.status === 404) {
						this.errorFetchingFiles = 404
					} else {
						this.errorFetchingFiles = error
					}
				}

				// cancelled request, moving on...
				logger.error('Error fetching files', error)
			} finally {
				this.loadingFiles = false
				this.cancelFilesRequest = () => { }
				this.semaphore.release(semaphoreSymbol)
				this.fetchSemaphore.release(fetchSemaphoreSymbol)
			}

			return []
		},

		resetFetchFilesState() {
			this.doneFetchingFiles = false
			this.errorFetchingFiles = null
			this.loadingFiles = false
			this.fetchedFileIds = []
			this.cancelFilesRequest = () => { }
		},
	},
}
