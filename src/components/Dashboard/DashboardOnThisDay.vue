<!--
  - Copyright (c) 2020. The Nextcloud Bookmarks contributors.
  -
  - This file is licensed under the Affero General Public License version 3 or later. See the COPYING file.
  -->

<template>
	<div>
		<template v-if="items.length">
			<File :item="{injected: items[0]}" />
			<p class="subline">
				<a :href="moreUrl" class="button">{{ t('photos', 'More photos from this day') }}</a>
			</p>
		</template>
		<p v-else class="icon-loading" />
	</div>
</template>

<script>
import { generateUrl } from '@nextcloud/router'
import getPhotos from '../../services/PhotoSearch.js'
import { allMimes } from '../../services/AllowedMimes.js'
import File from '../File.vue'

const NUMBER_OF_IMAGES = 10

export default {
	name: 'DashboardOnThisDay',
	components: { File },
	data() {
		return {
			loading: true,
			items: [],
		}
	},
	computed: {
		moreUrl() {
			return generateUrl('/apps/photos/thisday')
		},
	},
	async created() {
		let files
		try {
			// Load next batch of images
			files = await getPhotos(false, {
				page: 0,
				perPage: NUMBER_OF_IMAGES,
				mimesType: allMimes,
				onThisDay: true,
			})
		} catch (e) {
			console.error(e)
			return
		}
		// eslint-disable-next-line no-console
		console.log(files)

		this.items = files.map(file => ({ ...file, mime: 'image' }))
		this.loading = false
	},
}
</script>
<style scoped>
.subline {
	text-align: center;
	margin-top: 20px;
}
</style>
