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
			nbFetchedFiles: 0,
			doneFetchingFiles: false,
			cancelFilesRequest: () => { },
			semaphore: new SemaphoreWithPriority(30),
			semaphoreSymbol: null,
		}
	},

	beforeDestroy() {
		this.cancelFilesRequest('Changed view')
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
		 * @return {Promise<Array>} - The next batch of data depending on global offset.
		*/
		async fetchFiles(path = '', options = {}) {
			if (this.doneFetchingFiles || this.loadingFiles) {
				return []
			}

			try {
				this.errorFetchingFiles = null
				this.loadingFiles = true
				this.semaphoreSymbol = await this.semaphore.acquire(() => 0, 'fetchFiles')

				const { request, cancel } = cancelableRequest(getPhotos)
				this.cancelFilesRequest = cancel

				const numberOfImagesPerBatch = 1000

				// Load next batch of images
				const files = await request(path, {
					// We reuse already fetched files in the store when moving from one tab to another, but to make sure that we have all the files, we keep an internal counter (nbFetchedFiles).
					// Some files will be fetched twice, but we have less loading time when switching between tabs.
					firstResult: this.nbFetchedFiles,
					nbResults: numberOfImagesPerBatch,
					...options,
				})

				// If we get less files than requested that means we got to the end
				if (files.length !== numberOfImagesPerBatch) {
					this.doneFetchingFiles = true
				}

				this.nbFetchedFiles += files.length

				this.$store.dispatch('appendFiles', files)
				return files
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
				this.semaphore.release(this.semaphoreSymbol)
				this.semaphoreSymbol = null
			}

			return []
		},

		resetFetchFilesState() {
			this.doneFetchingFiles = false
			this.errorFetchingFiles = null
			this.loadingFiles = false
			// TODO: deprecate as it can leads to loading weirdness
			// Store timeline state locally
			this.nbFetchedFiles = 0
		},
	},
}
