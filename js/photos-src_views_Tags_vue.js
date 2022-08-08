"use strict";
(self["webpackChunkphotos"] = self["webpackChunkphotos"] || []).push([["src_views_Tags_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Tag.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Tag.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _services_TaggedImages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/TaggedImages */ "./src/services/TaggedImages.js");
/* harmony import */ var _utils_CancelableRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/CancelableRequest */ "./src/utils/CancelableRequest.js");
/* harmony import */ var _FolderTagPreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FolderTagPreview */ "./src/components/FolderTagPreview.vue");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Tag',
  components: {
    FolderTagPreview: _FolderTagPreview__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  inheritAttrs: false,
  props: {
    item: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      cancelRequest: null
    };
  },

  computed: { // global lists
    ...(0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)(['files', 'tags']),

    // files list of the current folder
    folderContent() {
      return this.tags[this.item.injected.id].files;
    },

    fileList() {
      return this.folderContent ? this.folderContent.map(id => this.files[id]).filter(file => !!file).slice(0, 4) // only get the 4 first images
      : [];
    }

  },

  beforeDestroy() {
    // cancel any pending requests
    if (this.cancelRequest) {
      this.cancelRequest('Navigated away');
    }
  },

  async created() {
    // init cancellable request
    const {
      request,
      cancel
    } = (0,_utils_CancelableRequest__WEBPACK_IMPORTED_MODULE_1__["default"])(_services_TaggedImages__WEBPACK_IMPORTED_MODULE_0__["default"]);
    this.cancelRequest = cancel;

    try {
      // get data
      const files = await request(this.item.injected.id);
      this.$store.dispatch('updateTag', {
        id: this.item.injected.id,
        files
      });
      this.$store.dispatch('appendFiles', files);
    } catch (error) {
      if (error.response && error.response.status) {
        console.error('Failed to get folder content', this.item.injected.id, error.response);
      }
    } finally {
      this.cancelRequest = null;
    }
  }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Tags.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Tags.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_virtual_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-virtual-grid */ "./node_modules/vue-virtual-grid/dist/vue-virtual-grid.es.js");
/* harmony import */ var _services_SystemTags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/SystemTags */ "./src/services/SystemTags.js");
/* harmony import */ var _services_TaggedImages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/TaggedImages */ "./src/services/TaggedImages.js");
/* harmony import */ var _components_EmptyContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/EmptyContent */ "./src/components/EmptyContent.vue");
/* harmony import */ var _components_Tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Tag */ "./src/components/Tag.vue");
/* harmony import */ var _components_File__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/File */ "./src/components/File.vue");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Navigation */ "./src/components/Navigation.vue");
/* harmony import */ var _mixins_GridConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mixins/GridConfig */ "./src/mixins/GridConfig.js");
/* harmony import */ var _utils_CancelableRequest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/CancelableRequest */ "./src/utils/CancelableRequest.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Tags',
  components: {
    VirtualGrid: vue_virtual_grid__WEBPACK_IMPORTED_MODULE_0__["default"],
    EmptyContent: _components_EmptyContent__WEBPACK_IMPORTED_MODULE_3__["default"],
    Navigation: _components_Navigation__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  mixins: [_mixins_GridConfig__WEBPACK_IMPORTED_MODULE_7__["default"]],
  props: {
    rootTitle: {
      type: String,
      required: true
    },
    path: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      required: true
    },
    isRoot: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      error: null,
      cancelRequest: null
    };
  },

  computed: { // global lists
    ...(0,vuex__WEBPACK_IMPORTED_MODULE_9__.mapGetters)(['files', 'tags', 'tagsNames']),

    // current tag id from current path
    tagId() {
      return this.$store.getters.tagId(this.path);
    },

    // current tag
    tag() {
      return this.tags[this.tagId];
    },

    tagsList() {
      return Object.values(this.tagsNames).map(tagsId => this.tags[tagsId]);
    },

    // files list of the current tag
    fileList() {
      return this.tag && this.tag.files.map(id => this.files[id]).filter(file => !!file);
    },

    contentList() {
      if (this.isRoot) {
        return this.tagsList.flatMap(tag => {
          return tag.id === '' ? [] : [{
            id: `tag-${tag.id}`,
            injected: { ...tag
            },
            width: 256,
            height: 256,
            columnSpan: 1,
            renderComponent: _components_Tag__WEBPACK_IMPORTED_MODULE_4__["default"]
          }];
        });
      }

      return this.fileList.map(file => {
        return {
          id: `file-${file.fileid}`,
          injected: { ...file,
            list: this.fileList
          },
          width: 256,
          height: 256,
          columnSpan: 1,
          renderComponent: _components_File__WEBPACK_IMPORTED_MODULE_5__["default"]
        };
      });
    },

    isEmpty() {
      if (this.isRoot) {
        return Object.keys(this.tagsNames).length === 0;
      }

      return this.fileList.length === 0;
    }

  },
  watch: {
    async path() {
      // if we don't have the tag in the store yet,
      // we need to fetch the list first
      if (!this.tagId) {
        await this.fetchRootContent();
      } // if we're not in the root, we fetch the data


      if (!this.isRoot) {
        this.fetchContent();
      }
    }

  },

  beforeDestroy() {
    // cancel any pending requests
    if (this.cancelRequest) {
      this.cancelRequest('Navigated away');
    }
  },

  async beforeMount() {
    // if we don't have the tag in the store yet,
    // we need to fetch the list first
    if (!this.tagId) {
      await this.fetchRootContent();
    } // if we're not in the root, we fetch the data


    if (!this.isRoot) {
      this.fetchContent();
    }
  },

  methods: {
    async fetchRootContent() {
      // cancel any pending requests
      if (this.cancelRequest) {
        this.cancelRequest('Changed folder');
      } // close any potential opened viewer


      OCA.Viewer.close(); // if we don't already have some cached data let's show a loader

      if (!this.tags[this.tagId]) {
        this.$emit('update:loading', true);
      }

      this.error = null; // init cancellable request

      const {
        request,
        cancel
      } = (0,_utils_CancelableRequest__WEBPACK_IMPORTED_MODULE_8__["default"])(_services_SystemTags__WEBPACK_IMPORTED_MODULE_1__["default"]);
      this.cancelRequest = cancel;

      try {
        // fetch content
        const tags = await request();
        this.$store.dispatch('updateTags', tags);
      } catch (error) {
        console.error(error);
        this.error = true;
      } finally {
        // done loading
        this.$emit('update:loading', false);
        this.cancelRequest = null;
      }
    },

    async fetchContent() {
      // cancel any pending requests
      if (this.cancelRequest) {
        this.cancelRequest();
      } // close any potential opened viewer


      OCA.Viewer.close(); // if we don't already have some cached data let's show a loader

      if (!this.tags[this.tagId]) {
        this.$emit('update:loading', true);
      }

      this.error = null; // init cancellable request

      const {
        request,
        cancel
      } = (0,_utils_CancelableRequest__WEBPACK_IMPORTED_MODULE_8__["default"])(_services_TaggedImages__WEBPACK_IMPORTED_MODULE_2__["default"]);
      this.cancelRequest = cancel;

      try {
        // get data
        const files = await request(this.tagId);
        this.$store.dispatch('updateTag', {
          id: this.tagId,
          files
        });
        this.$store.dispatch('appendFiles', files);
      } catch (error) {
        console.error(error);
        this.error = true;
      } finally {
        // done loading
        this.$emit('update:loading', false);
        this.cancelRequest = null;
      }
    }

  }
});

/***/ }),

/***/ "./src/services/SystemTags.js":
/*!************************************!*\
  !*** ./src/services/SystemTags.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DavClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DavClient */ "./src/services/DavClient.js");
/* harmony import */ var _utils_fileUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/fileUtils */ "./src/utils/fileUtils.js");
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


/**
 * List system tags
 *
 * @param {string} path the path relative to the user root
 * @param {object} [options] optional options for axios
 * @return {Array} the file list
 */

/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(path) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const response = await _DavClient__WEBPACK_IMPORTED_MODULE_0__["default"].getDirectoryContents('/systemtags/', Object.assign({}, {
    data: `<?xml version="1.0"?>
			<d:propfind  xmlns:d="DAV:"
				xmlns:oc="http://owncloud.org/ns">
				<d:prop>
					<oc:id />
					<oc:display-name />
					<oc:user-visible />
					<oc:user-assignable />
					<oc:can-assign />
				</d:prop>
			</d:propfind>`,
    details: true
  }, options));
  return response.data.map(data => (0,_utils_fileUtils__WEBPACK_IMPORTED_MODULE_1__.genFileInfo)(data));
}

/***/ }),

/***/ "./src/services/TaggedImages.js":
/*!**************************************!*\
  !*** ./src/services/TaggedImages.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_fileUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/fileUtils */ "./src/utils/fileUtils.js");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.js");
/* harmony import */ var _DavRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DavRequest */ "./src/services/DavRequest.js");
/* harmony import */ var _AllowedMimes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AllowedMimes */ "./src/services/AllowedMimes.js");
/* harmony import */ var _DavClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DavClient */ "./src/services/DavClient.js");
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





/**
 * Get tagged files based on provided tag id
 *
 * @param {number} id the tag id to filter
 * @param {object} [options] optional options for axios
 * @return {Array} the file list
 */

/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(id) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  options = Object.assign({
    method: 'REPORT',
    data: `<?xml version="1.0"?>
			<oc:filter-files
				xmlns:d="DAV:"
				xmlns:oc="http://owncloud.org/ns"
				xmlns:nc="http://nextcloud.org/ns"
				xmlns:ocs="http://open-collaboration-services.org/ns">
				<d:prop>
					${_DavRequest__WEBPACK_IMPORTED_MODULE_2__.props}
				</d:prop>
				<oc:filter-rules>
					<oc:systemtag>${id}</oc:systemtag>
				</oc:filter-rules>
			</oc:filter-files>`,
    details: true
  }, options);
  const prefixPath = `/files/${(0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__.getCurrentUser)().uid}`;
  const response = await _DavClient__WEBPACK_IMPORTED_MODULE_4__["default"].getDirectoryContents(prefixPath, options);
  return response.data.map(data => (0,_utils_fileUtils__WEBPACK_IMPORTED_MODULE_0__.genFileInfo)(data)) // filter out unwanted mime because server REPORT service only support
  // hardcoded props and mime is not one of them
  // https://github.com/nextcloud/server/blob/5bf3d1bb384da56adbf205752be8f840aac3b0c5/apps/dav/lib/Connector/Sabre/FilesReportPlugin.php#L274
  .filter(file => file.mime && _AllowedMimes__WEBPACK_IMPORTED_MODULE_3__["default"].indexOf(file.mime) !== -1) // remove prefix path from full file path
  .map(data => Object.assign({}, data, {
    filename: data.filename.replace(prefixPath, '')
  }));
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Tags.vue?vue&type=style&index=0&id=730c32d3&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Tags.vue?vue&type=style&index=0&id=730c32d3&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license AGPL-3.0-or-later\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n@media (min-width: 0px) and (max-width: 400px) {\n.grid-container[data-v-730c32d3] {\n    padding: 0px 8px 256px 8px;\n}\n}\n@media (min-width: 400px) and (max-width: 700px) {\n.grid-container[data-v-730c32d3] {\n    padding: 0px 8px 256px 8px;\n}\n}\n@media (min-width: 700px) and (max-width: 1024px) {\n.grid-container[data-v-730c32d3] {\n    padding: 0px 44px 256px 44px;\n}\n}\n@media (min-width: 1024px) and (max-width: 1280px) {\n.grid-container[data-v-730c32d3] {\n    padding: 0px 44px 256px 44px;\n}\n}\n@media (min-width: 1280px) and (max-width: 1440px) {\n.grid-container[data-v-730c32d3] {\n    padding: 0px 66px 256px 66px;\n}\n}\n@media (min-width: 1440px) and (max-width: 1600px) {\n.grid-container[data-v-730c32d3] {\n    padding: 0px 66px 256px 66px;\n}\n}\n@media (min-width: 1600px) and (max-width: 2048px) {\n.grid-container[data-v-730c32d3] {\n    padding: 0px 66px 256px 66px;\n}\n}\n@media (min-width: 2048px) and (max-width: 2560px) {\n.grid-container[data-v-730c32d3] {\n    padding: 0px 88px 256px 88px;\n}\n}\n@media (min-width: 2560px) and (max-width: 3440px) {\n.grid-container[data-v-730c32d3] {\n    padding: 0px 88px 256px 88px;\n}\n}\n@media (min-width: 3440px) {\n.grid-container[data-v-730c32d3] {\n    padding: 0px 88px 256px 88px;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Tags.vue?vue&type=style&index=0&id=730c32d3&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Tags.vue?vue&type=style&index=0&id=730c32d3&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Tags_vue_vue_type_style_index_0_id_730c32d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tags.vue?vue&type=style&index=0&id=730c32d3&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Tags.vue?vue&type=style&index=0&id=730c32d3&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Tags_vue_vue_type_style_index_0_id_730c32d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Tags_vue_vue_type_style_index_0_id_730c32d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Tags_vue_vue_type_style_index_0_id_730c32d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Tags_vue_vue_type_style_index_0_id_730c32d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Tag.vue":
/*!********************************!*\
  !*** ./src/components/Tag.vue ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tag_vue_vue_type_template_id_bb7ceecc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tag.vue?vue&type=template&id=bb7ceecc& */ "./src/components/Tag.vue?vue&type=template&id=bb7ceecc&");
/* harmony import */ var _Tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tag.vue?vue&type=script&lang=js& */ "./src/components/Tag.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tag_vue_vue_type_template_id_bb7ceecc___WEBPACK_IMPORTED_MODULE_0__.render,
  _Tag_vue_vue_type_template_id_bb7ceecc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Tag.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/views/Tags.vue":
/*!****************************!*\
  !*** ./src/views/Tags.vue ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tags_vue_vue_type_template_id_730c32d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tags.vue?vue&type=template&id=730c32d3&scoped=true& */ "./src/views/Tags.vue?vue&type=template&id=730c32d3&scoped=true&");
/* harmony import */ var _Tags_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tags.vue?vue&type=script&lang=js& */ "./src/views/Tags.vue?vue&type=script&lang=js&");
/* harmony import */ var _Tags_vue_vue_type_style_index_0_id_730c32d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tags.vue?vue&type=style&index=0&id=730c32d3&lang=scss&scoped=true& */ "./src/views/Tags.vue?vue&type=style&index=0&id=730c32d3&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Tags_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tags_vue_vue_type_template_id_730c32d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Tags_vue_vue_type_template_id_730c32d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "730c32d3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/Tags.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/Tag.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./src/components/Tag.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tag.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Tag.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/Tags.vue?vue&type=script&lang=js&":
/*!*****************************************************!*\
  !*** ./src/views/Tags.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Tags_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tags.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Tags.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Tags_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/Tags.vue?vue&type=style&index=0&id=730c32d3&lang=scss&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./src/views/Tags.vue?vue&type=style&index=0&id=730c32d3&lang=scss&scoped=true& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Tags_vue_vue_type_style_index_0_id_730c32d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tags.vue?vue&type=style&index=0&id=730c32d3&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Tags.vue?vue&type=style&index=0&id=730c32d3&lang=scss&scoped=true&");


/***/ }),

/***/ "./src/components/Tag.vue?vue&type=template&id=bb7ceecc&":
/*!***************************************************************!*\
  !*** ./src/components/Tag.vue?vue&type=template&id=bb7ceecc& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_template_id_bb7ceecc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_template_id_bb7ceecc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_template_id_bb7ceecc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tag.vue?vue&type=template&id=bb7ceecc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Tag.vue?vue&type=template&id=bb7ceecc&");


/***/ }),

/***/ "./src/views/Tags.vue?vue&type=template&id=730c32d3&scoped=true&":
/*!***********************************************************************!*\
  !*** ./src/views/Tags.vue?vue&type=template&id=730c32d3&scoped=true& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tags_vue_vue_type_template_id_730c32d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tags_vue_vue_type_template_id_730c32d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tags_vue_vue_type_template_id_730c32d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tags.vue?vue&type=template&id=730c32d3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Tags.vue?vue&type=template&id=730c32d3&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Tag.vue?vue&type=template&id=bb7ceecc&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Tag.vue?vue&type=template&id=bb7ceecc& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("FolderTagPreview", {
    attrs: {
      id: _vm.item.injected.id,
      icon: "icon-tag",
      name: _vm.item.injected.displayName,
      path: _vm.item.injected.displayName,
      "file-list": _vm.fileList,
    },
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Tags.vue?vue&type=template&id=730c32d3&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Tags.vue?vue&type=template&id=730c32d3&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.error
    ? _c("EmptyContent", [
        _vm._v("\n\t" + _vm._s(_vm.t("photos", "An error occurred")) + "\n"),
      ])
    : !_vm.loading
    ? _c(
        "div",
        [
          _c("Navigation", {
            key: "navigation",
            attrs: {
              basename: _vm.path,
              filename: "/" + _vm.path,
              "root-title": _vm.rootTitle,
            },
          }),
          _vm._v(" "),
          _vm.isEmpty
            ? _c(
                "EmptyContent",
                {
                  key: "emptycontent",
                  attrs: { "illustration-name": "empty" },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "desc",
                        fn: function () {
                          return [
                            _vm._v(
                              "\n\t\t\t" +
                                _vm._s(
                                  _vm.t(
                                    "photos",
                                    "Photos with tags will show up here"
                                  )
                                ) +
                                "\n\t\t"
                            ),
                          ]
                        },
                        proxy: true,
                      },
                    ],
                    null,
                    false,
                    4132175345
                  ),
                },
                [
                  _vm._v(
                    "\n\t\t" + _vm._s(_vm.t("photos", "No tags yet")) + "\n\t\t"
                  ),
                ]
              )
            : _c(
                "div",
                { staticClass: "grid-container" },
                [
                  _c("VirtualGrid", {
                    ref: "virtualgrid",
                    attrs: {
                      items: _vm.contentList,
                      "get-column-count": function () {
                        return _vm.gridConfig.count
                      },
                      "get-grid-gap": function () {
                        return _vm.gridConfig.gap
                      },
                    },
                  }),
                ],
                1
              ),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=photos-src_views_Tags_vue.js.map?v=226a60b17b296d77b0c3