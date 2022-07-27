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

import { createAlbum, deleteAlbum, addFileToAlbum, removeFileFromAlbum } from '../services/AlbumActions.js'
import Semaphore from '../utils/semaphoreWithPriority.js'

const state = {
	albums: {},
	albumsFiles: [],
}

const mutations = {
	/**
	 * Add albums to the album collection.
	 *
	 * @param {object} state vuex state
	 * @param {object} data destructuring object
	 * @param {Array} data.albums list of albums
	 */
	addAlbums(state, { albums }) {
		state.albums = {
			...state.albums,
			...albums.reduce((albums, album) => ({ ...albums, [album.id]: album }), {}),
		}
	},

	/**
	 * Remove albums from the album collection.
	 *
	 * @param {object} state vuex state
	 * @param {object} data destructuring object
	 * @param {Array} data.albumIds list of albums ids
	 */
	removeAlbums(state, { albumIds }) {
		albumIds.forEach(albumId => delete state.albums[albumId])
	},

	/**
	 * Add files to an album.
	 *
	 * @param {object} state vuex state
	 * @param {object} data destructuring object
	 * @param {string} data.albumId the album id
	 * @param {string[]} data.fileIdsToAdd list of files
	 */
	addFilesToAlbum(state, { albumId, fileIdsToAdd }) {
		const albumFiles = state.albumsFiles[albumId] || []
		state.albumsFiles = {
			...state.albumsFiles,
			[albumId]: [
				...albumFiles,
				...fileIdsToAdd.filter(fileId => !albumFiles.includes(fileId)), // Filter to prevent duplicate fileId.
			],
		}
	},

	/**
	 * Remove files to an album.
	 *
	 * @param {object} state vuex state
	 * @param {object} data destructuring object
	 * @param {string} data.albumId the album id
	 * @param {string[]} data.fileIdsToRemove list of files
	 */
	removeFilesFromAlbum(state, { albumId, fileIdsToRemove }) {
		state.albumsFiles = {
			...state.albumsFiles,
			[albumId]: state.albumsFiles[albumId].filter(fileId => !fileIdsToRemove.includes(fileId)),
		}
	},
}

const getters = {
	albums: state => state.albums,
	albumsFiles: state => state.albumsFiles,
}

const actions = {
	/**
	 * Update files and albums
	 *
	 * @param {object} context vuex context
	 * @param {object} data destructuring object
	 * @param {import('../services/Albums').Album[]} data.albums list of albums
	 */
	addAlbums(context, { albums }) {
		context.commit('addAlbums', { albums })
	},

	/**
	 * Add files to an album.
	 *
	 * @param {object} context vuex context
	 * @param {object} data destructuring object
	 * @param {string} data.albumId the album id
	 * @param {string[]} data.fileIdsToAdd list of files ids to add
	 */
	async addFilesToAlbum(context, { albumId, fileIdsToAdd }) {
		const semaphore = new Semaphore(5)

		context.commit('addFilesToAlbum', { albumId, fileIdsToAdd })

		const promises = fileIdsToAdd
			.map(async (fileId) => {
				const symbol = await semaphore.acquire()
				try {
					await addFileToAlbum(albumId, context.state.files[fileId].filename, context.files[fileId].basename)
				} catch (error) {
					console.error(error)
					context.commit('removeFilesFromAlbum', { albumId, fileIdsToRemove: [fileId] })
				} finally {
					semaphore.release(symbol)
				}
			})

		return Promise.all(promises)
	},

	/**
	 * Remove files to an album.
	 *
	 * @param {object} context vuex context
	 * @param {object} data destructuring object
	 * @param {string} data.albumId the album id
	 * @param {string[]} data.fileIdsToRemove list of files ids to remove
	 */
	async removeFilesFromAlbum(context, { albumId, fileIdsToRemove }) {
		const semaphore = new Semaphore(5)

		context.commit('removeFilesFromAlbum', { albumId, fileIdsToRemove })

		const promises = fileIdsToRemove
			.map(async (fileId) => {
				const symbol = await semaphore.acquire()
				try {
					await removeFileFromAlbum(albumId, context.state.files[fileId].basename)
				} catch (error) {
					console.error(error)
					context.commit('addFilesToAlbum', { albumId, fileIdsToAdd: [fileId] })
				} finally {
					semaphore.release(symbol)
				}
			})

		return Promise.all(promises)
	},

	/**
	 * Create an album.
	 *
	 * @param {object} context vuex context
	 * @param {object} data destructuring object
	 * @param {import('../services/Albums.js').Album} data.album the album
	 */
	async createAlbum(context, { album }) {
		try {
			await createAlbum(album)
			context.commit('addAlbums', { albums: [album] })
		} catch (error) {
			console.error(error)
		}
	},

	/**
	 * Delete an album.
	 *
	 * @param {object} context vuex context
	 * @param {object} data destructuring object
	 * @param {string} data.albumId the id of the album
	 */
	async deleteAlbum(context, { albumId }) {
		try {
			await deleteAlbum(albumId)
			context.commit('removeAlbums', { albumIds: [albumId] })
		} catch (error) {
			console.error(error)
		}
	},
}

export default { state, mutations, getters, actions }
