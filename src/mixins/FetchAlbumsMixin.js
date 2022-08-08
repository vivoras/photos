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
import getAlbums from '../services/Albums.js'
import cancelableRequest from '../utils/CancelableRequest.js'

export default {
	name: 'FetchAlbumsMixin',

	data() {
		return {
			errorFetchingAlbums: null,
			loadingAlbums: false,
			cancelAlbumsRequest: () => { },
		}
	},

	async beforeMount() {
		this.fetchAlbums()
	},

	beforeDestroy() {
		this.cancelAlbumsRequest('Changed view')
	},

	computed: {
		...mapGetters([
			'albums',
		]),
	},

	methods: {
		async fetchAlbums() {
			if (this.loadingAlbums) {
				return
			}

			try {
				this.loadingAlbums = true
				this.errorFetchingAlbums = null

				const { request, cancel } = cancelableRequest(getAlbums)
				this.cancelAlbumsRequest = cancel

				const albums = await request()
				this.$store.dispatch('addAlbums', { albums })
				logger.debug(`Fetched ${albums.length} new files: `, albums)
			} catch (error) {
				if (error.response && error.response.status) {
					if (error.response.status === 404) {
						this.errorFetchingAlbums = 404
					} else {
						this.errorFetchingAlbums = error
					}
				}
				// cancelled request, moving on...
				console.error('Error fetching albums', error)
			} finally {
				this.cancelAlbumsRequest = () => { }
				this.loadingAlbums = false
			}
		},
	},
}
