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
	<!-- Errors handlers-->
	<EmptyContent v-if="errorFetchingAlbums">
		{{ t('photos', 'An error occurred') }}
	</EmptyContent>

	<!-- Album list -->
	<div v-else class="photos-albums">
		<div class="albums-header">
			<Button :aria-label="t('photo', 'Create a new album.')" @click="showAlbumCreationForm = true">
				<template #icon>
					<Plus />
				</template>
				{{ t('photo', 'New Album') }}
			</Button>

			<Loader v-if="loadingAlbums" />

			<Modal v-if="showAlbumCreationForm"
				:title="t('photos', 'New album')"
				@close="showAlbumCreationForm = false">
				<AlbumCreationForm @album-created="showAlbumCreationForm = false" />
			</Modal>
		</div>

		<div v-if="albums.length !== 0" class="albums-container">
			<AlbumCover v-for="album in albums"
				:key="album.id"
				class="album"
				:album-id="album.id" />
		</div>

		<!-- No albums -->
		<EmptyContent v-else-if="albums.length === 0 && !loadingAlbums" key="emptycontent" illustration-name="empty">
			{{ t('photos', 'No albums yet.') }}
		</EmptyContent>
	</div>
</template>

<script>
import Plus from 'vue-material-design-icons/Plus'

import { Button, Modal } from '@nextcloud/vue'

import FetchAlbumsMixin from '../mixins/FetchAlbumsMixin.js'
import AlbumCover from '../components/AlbumCover.vue'
import EmptyContent from '../components/EmptyContent.vue'
import AlbumCreationForm from '../components/AlbumCreationForm.vue'
import Loader from '../components/Loader.vue'

export default {
	name: 'Albums',
	components: {
		AlbumCover,
		EmptyContent,
		AlbumCreationForm,
		Loader,
		Modal,
		Button,
		Plus,
	},

	mixins: [
		FetchAlbumsMixin,
	],

	data() {
		return {
			showAlbumCreationForm: false,
		}
	},
}
</script>
<style lang="scss" scoped>
.photos-albums {
	height: 100%;
	display: flex;
	flex-direction: column;
	height: calc(100vh - var(--header-height));
	padding: 4px 64px;

	@media only screen and (max-width: 1200px) {
		padding: 4px 32px;
	}

	.albums-header {
		display: flex;
		min-height: 60px;
		align-items: center;

		button {
			margin-right: 32px;
		}
	}

	.albums-container {
		margin-top: 8px;
		padding-top: 24px;
		padding-bottom: 32px;
		flex-grow: 1;
		display: flex;
		flex-wrap: wrap;
		overflow: scroll;
		gap: 32px;
	}
}
</style>
