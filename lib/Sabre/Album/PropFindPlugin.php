<?php

declare(strict_types=1);
/**
 * @copyright Copyright (c) 2022 Robin Appelman <robin@icewind.nl>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OCA\Photos\Sabre\Album;

use Sabre\DAV\INode;
use Sabre\DAV\PropFind;
use Sabre\DAV\Server;
use Sabre\DAV\ServerPlugin;
use OC\Metadata\IMetadataManager;
use OCP\IPreview;
use OCP\ITagManager;

class PropFindPlugin extends ServerPlugin {
	public const INTERNAL_FILEID_PROPERTYNAME = '{http://owncloud.org/ns}fileid';
	public const FILE_METADATA_SIZE = '{http://nextcloud.org/ns}file-metadata-size';
	public const HAS_PREVIEW_PROPERTYNAME = '{http://nextcloud.org/ns}has-preview';
	public const FAVORITE_PROPERTYNAME = '{http://owncloud.org/ns}favorite';
	public const DATE_RANGE_PROPERTYNAME = '{http://nextcloud.org/ns}dateRange';
	public const COVER_PROPERTYNAME = '{http://nextcloud.org/ns}cover';
	public const NBITEMS_PROPERTYNAME = '{http://nextcloud.org/ns}nbItems';
	public const LOCATION_PROPERTYNAME = '{http://nextcloud.org/ns}location';

	public const TAG_FAVORITE = '_$!<Favorite>!$_';

	private Server $server;

	public function initialize(Server $server) {
		$this->server = $server;

		$this->server->on('propFind', [$this, 'propFind']);
	}


	public function propFind(PropFind $propFind, INode $node) {
		if ($node instanceof AlbumPhoto) {
			$propFind->handle('{http://nextcloud.org/ns}file-name', function () use ($node) {
				return $node->getFile()->getName();
			});

			$propFind->handle(self::INTERNAL_FILEID_PROPERTYNAME, function () use ($node) {
				return $node->getFile()->getFileId();
			});

			$propFind->handle(self::FILE_METADATA_SIZE, function () use ($node) {
				$metadataManager = \OC::$server->get(IMetadataManager::class);
				$sizeMetadata = $metadataManager->fetchMetadataFor('size', [$node->getFileId()])[$node->getFileId()];
				return json_encode((object)$sizeMetadata->getMetadata());
			});

			$propFind->handle(self::HAS_PREVIEW_PROPERTYNAME, function () use ($node) {
				$previewManager = \OC::$server->get(IPreview::class);
				return json_encode($previewManager->isAvailable($node->getFileInfo()));
			});

			$propFind->handle(self::FAVORITE_PROPERTYNAME, function () use ($node) {
				$tagManager = \OC::$server->get(ITagManager::class);
				$tagger = $tagManager->load('files');
				$tags = $tagger->getTagsForObjects([$node->getFileId()]);

				if ($tags === false || empty($tags)) {
					return 0;
				} else {
					if (array_search(self::TAG_FAVORITE, current($tags)) !== false) {
						return 1;
					} else {
						return 0;
					}
				}
			});
		}

		if ($node instanceof AlbumRoot) {
			$propFind->handle(self::COVER_PROPERTYNAME, function () use ($node) {
				$children = $node->getChildren();

				if (count($children) > 0) {
					return $children[0]->getFileId();
				} else {
					return '';
				}
			});

			$propFind->handle(self::NBITEMS_PROPERTYNAME, function () use ($node) {
				return count($node->getChildren());
			});

			$propFind->handle(self::LOCATION_PROPERTYNAME, function () use ($node) {
				return '';
			});

			$propFind->handle(self::DATE_RANGE_PROPERTYNAME, function () use ($node) {
				return json_encode($node->getDateRange());
			});
		}
	}
}
