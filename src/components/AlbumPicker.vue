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
	<div v-if="!showAlbumCreationForm" class="album-picker">
		<h2>
			{{ t('photo', 'Add to Album') }}
			<Loader v-if="loadingAlbums" class="loading-icon" />
		</h2>

		<div class="albums-container">
			<div v-for="album in albums"
				:key="album.id"
				class="album"
				@click="pickAlbum(album.id)">
				<img class="album__image" :src="album.cover | toCoverUrl">
				<div class="album__details">
					<div class="album__details__first-line">
						<b class="album__details__name">
							{{ album.name || "All" }}
						</b>
					</div>
					<div class="album__details__second-line">
						<!-- TODO: finish Shared count -->
						{{ n('photos', '%n item', '%n items', album.itemCount) }} ⸱ {{ n('photos', 'Share with %n user', 'Share with %n others', album.isShared) }}
					</div>
				</div>
			</div>
		</div>

		<Button :aria-label="t('photo', 'Create a new album.')"
			class="new-album-button"
			type="tertiary"
			@click="showAlbumCreationForm = true">
			<template #icon>
				<Plus />
			</template>
			{{ t('photo', 'Create new album') }}
		</Button>
	</div>

	<AlbumCreationForm v-else
		:display-back-button="true"
		:title="t('photos', 'New album')"
		@back="showAlbumCreationForm = false"
		@album-created="albumCreatedHandler" />
</template>

<script>
import Plus from 'vue-material-design-icons/Plus'

import { Button } from '@nextcloud/vue'
import { generateUrl } from '@nextcloud/router'

import FetchAlbumsMixin from '../mixins/FetchAlbumsMixin.js'
import AlbumCreationForm from '../components/AlbumCreationForm.vue'
import Loader from '../components/Loader.vue'

export default {
	name: 'AlbumPicker',

	components: {
		Button,
		AlbumCreationForm,
		Loader,
		Plus,
	},

	filters: {
		/**
		 * @param {string} fileId - The id of the file.
		 * @return {string}
		 */
		toCoverUrl(fileId) {
			return generateUrl(`/core/preview?fileId=${fileId}&x=${64}&y=${64}&forceIcon=0&a=1`)
		},
	},

	mixins: [
		FetchAlbumsMixin,
	],

	data() {
		return {
			showAlbumCreationForm: false,
		}
	},

	methods: {
		albumCreatedHandler() {
			this.showAlbumCreationForm = false
			this.fetchAlbums()
		},

		pickAlbum(albumId) {
			this.$emit('album-picked', albumId)
		},
	},
}
</script>

<style lang="scss" scoped>
.album-picker {
	padding: 32px;
	padding-top: 16px;

	h2 {
		display: flex;
		align-items: center;
		height: 60px;
		padding-left: 8px;

		.loading-icon {
			margin-left: 32px;
		}
	}

	.albums-container {
		min-height: 150px;
		max-height: 350px;
		overflow: scroll;
		padding-right: 8px;

		.album {
			display: flex;
			padding: 8px;
			border-radius: 8px;

			&, & * {
				cursor: pointer;
			}

			&:not(:last-child) {
				margin-bottom: 16px;
			}

			&:hover {
				background: var(--color-background-dark);
			}

			&__image {
				width: 50px;
				height: 50px;
				object-fit: none;
				border-radius: 4px;
				margin-right: 8px;
				background: var(--color-background-darker);
			}

			&__details {
				display: flex;
				flex-direction: column;

				&__second-line {
					color: var(--color-text-lighter);
				}
			}
		}
	}

	.new-album-button {
		margin-top: 32px;
	}
}
</style>
