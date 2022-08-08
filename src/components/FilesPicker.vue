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
	<div class="file-picker">
		<div class="file-picker__content">
			<div class="file-picker__navigation">
				<div v-for="month in monthsList"
					:key="month"
					class="file-picker__navigation__month"
					:class="{selected: targetMonth === month}"
					@click="scrollTo(month)">
					{{ month | dateMonthAndYear }}
				</div>
			</div>
			<FilesListViewer class="file-picker__file-list"
				:file-ids-by-section="filesListByMonth"
				:sections="monthsList"
				:loading="loadingFiles && fetchedFileIds.length !== 0"
				:base-height="100"
				:section-header-height="50"
				:scroll-to-section="targetMonth"
				@need-content="fetchedFileIds">
				<template slot-scope="{file, height, visibility}">
					<h3 v-if="file.sectionHeader"
						:id="`file-picker-section-header-${file.id}`"
						:style="{ height: `${height}px`}"
						class="section-header">
						{{ file.id | dateMonthAndYear }}
					</h3>
					<File v-else
						:item="files[file.id]"
						:allow-selection="true"
						:selected="selection[file.id] === true"
						:visibility="visibility"
						:semaphore="semaphore"
						@select-toggled="onFileSelectToggle" />
				</template>
			</FilesListViewer>
		</div>
		<div class="file-picker__actions">
			<!-- TODO: Implement upload -->
			<Button type="tertiary">
				<template #icon>
					<Upload />
				</template>
				{{ t('photos', 'Upload from computer') }}
			</Button>
			<Button type="primary" @click="emitPickedEvent">
				<template #icon>
					<ImagePlus />
				</template>
				{{ t('photos', 'Add photos') }}
			</Button>
		</div>
	</div>
</template>

<script>
import ImagePlus from 'vue-material-design-icons/ImagePlus'
import Upload from 'vue-material-design-icons/Upload'
import moment from '@nextcloud/moment'
import { Button } from '@nextcloud/vue'

import FetchFilesMixin from '../mixins/FetchFilesMixin.js'
import FilesSelectionMixin from '../mixins/FilesSelectionMixin.js'
import FilesListViewer from './FilesListViewer.vue'
import File from './File.vue'

export default {
	name: 'FilesPicker',

	components: {
		ImagePlus,
		Upload,
		Button,
		FilesListViewer,
		File,
	},

	filters: {
		/**
		 * @param {string} date - In the following format: YYYYMM
		 */
		dateMonthAndYear(date) {
			return moment(date, 'YYYYMM').format('MMMM YYYY')
		},
	},

	mixins: [
		FetchFilesMixin,
		FilesSelectionMixin,
	],

	// TODO: add filter out ids
	props: {

	},

	data() {
		return {
			targetMonth: null,
		}
	},

	computed: {
		/**
		 * @return {string[]}
		 */
		filesListByMonth() {
			const filesByMonth = {}
			for (const fileId of Object.keys(this.files)) {
				const file = this.files[fileId]
				filesByMonth[file.month] = filesByMonth[file.month] ?? []
				filesByMonth[file.month].push(file.fileid)
			}

			// Sort files in sections.
			Object.keys(filesByMonth).forEach(month => filesByMonth[month].sort(this.sortFilesByTimestamp))

			return filesByMonth
		},

		/**
		 * @return {string[]}
		 */
		monthsList() {
			return Object
				.keys(this.filesListByMonth)
				.sort((month1, month2) => month1 > month2 ? -1 : 1)
		},
	},

	watch: {
		monthsList(value) {
			if (this.targetMonth === null) {
				this.targetMonth = value[0]
			}
		},
	},

	methods: {
		/**
		 * @param {string} fileId1 The first file ID
		 * @param {string} fileId2 The second file ID
		 * @return {-1 | 1}
		 */
		sortFilesByTimestamp(fileId1, fileId2) {
			return this.files[fileId1].timestamp > this.files[fileId2].timestamp ? -1 : 1
		},

		emitPickedEvent() {
			this.$emit('files-picked', this.selectedFileIds)
		},
	},
}
</script>

<style lang="scss" scoped>
.file-picker {
	display: flex;
	flex-direction: column;
	padding: 12px;

	&__content {
		display: flex;
		flex-grow: 1;
		height: 500px;
	}

	&__navigation {
		flex-basis: 200px;
		overflow: scroll;
		margin-right: 8px;
		padding-right: 8px;

		&__month {
			font-weight: bold;
			font-size: 16px;
			border-radius: 48px;
			padding: 8px 16px;
			margin: 4px 0;
			cursor: pointer;

			&:hover {
				background: var(--color-background-dark);
			}

			&.selected {
				background: var(--color-primary-element-lighter);
			}
		}
	}

	&__file-list {
		flex-grow: 1;
		min-width: 0;

		.section-header {
			font-weight: bold;
			font-size: 20px;
			padding: 8px 0 4px 0;
		}
	}

	&__actions {
		display: flex;
		justify-content: space-between;
		justify-items: center;
		padding-top: 16px;
	}
}

</style>
