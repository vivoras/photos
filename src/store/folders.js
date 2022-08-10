/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
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
import Vue from 'vue'

const state = {
	paths: {},
	folders: {},
	foldersContent: {},
}

const mutations = {
	/**
	 * Index folders paths and ids
	 *
	 * @param {object} state vuex state
	 * @param {object} data destructuring object
	 * @param {object} data.folder folder
	 * @param {string[]} data.folderIds list of file ids in the folder
	 * @param {string[]} data.fileIds list of folder ids in the folder
	 */
	addFolder(state, { folder, fileIds, folderIds }) {
		Vue.set(state.foldersContent, folder.fileid, { fileIds, folderIds })
		Vue.set(state.folders, folder.fileid, folder)
		Vue.set(state.paths, folder.filename, folder.fileid)
	},
}

const getters = {
	paths: state => state.paths,
	folders: state => state.folders,
	foldersContent: state => state.foldersContent,
}

const actions = {
	/**
	 * Update files and folders
	 *
	 * @param {object} context vuex context
	 * @param {object} data destructuring object
	 * @param {object} data.folder current folder id
	 * @param {string[]} data.fileIds current folder id
	 * @param {string[]} data.folderIds current folder id
	 */
	addFolder(context, { folder, fileIds, folderIds }) {
		context.commit('addFolder', { folder, fileIds, folderIds })
	},
}

export default { state, mutations, getters, actions }
