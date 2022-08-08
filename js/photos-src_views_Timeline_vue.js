(self["webpackChunkphotos"] = self["webpackChunkphotos"] || []).push([["src_views_Timeline_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AlbumPicker.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AlbumPicker.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_material_design_icons_Plus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-material-design-icons/Plus */ "./node_modules/vue-material-design-icons/Plus.vue");
/* harmony import */ var _nextcloud_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue */ "./node_modules/@nextcloud/vue/dist/ncvuecomponents.js");
/* harmony import */ var _nextcloud_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _mixins_FetchAlbumsMixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/FetchAlbumsMixin.js */ "./src/mixins/FetchAlbumsMixin.js");
/* harmony import */ var _AlbumForm_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AlbumForm.vue */ "./src/components/AlbumForm.vue");
/* harmony import */ var _components_Loader_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loader.vue */ "./src/components/Loader.vue");
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
  name: 'AlbumPicker',
  components: {
    Button: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_1__.Button,
    AlbumForm: _AlbumForm_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Loader: _components_Loader_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    Plus: vue_material_design_icons_Plus__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  filters: {
    /**
     * @param {string} fileId - The id of the file.
     * @return {string}
     */
    toCoverUrl(fileId) {
      return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateUrl)(`/core/preview?fileId=${fileId || 47515}&x=${64}&y=${64}&forceIcon=0&a=1`);
    }

  },
  mixins: [_mixins_FetchAlbumsMixin_js__WEBPACK_IMPORTED_MODULE_3__["default"]],

  data() {
    return {
      showAlbumCreationForm: false
    };
  },

  methods: {
    albumCreatedHandler() {
      this.showAlbumCreationForm = false;
      this.fetchAlbums();
    },

    pickAlbum(albumBaseName) {
      this.$emit('album-picked', albumBaseName);
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EmptyContent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EmptyContent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'EmptyContent',
  props: {
    illustrationName: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      illustration: ''
    };
  },

  computed: {
    /**
     * Does this component have an illustration
     *
     * @return {boolean}
     */
    haveIllustration() {
      return this.illustrationName !== '';
    },

    /**
     * Is the illustration loaded
     *
     * @return {boolean}
     */
    isLoaded() {
      if (!this.haveIllustration) {
        return true;
      }

      return this.illustration !== '';
    },

    /**
     * The component is ready if the illustration
     * is done loading or if there is none
     *
     * @return {boolean}
     */
    isReady() {
      return !this.haveIllustration || this.haveIllustration && this.isLoaded;
    }

  },

  /**
   * Fetch the new illustration as soon as it changes
   */
  watch: {
    illustrationName() {
      this.getIllustration();
    }

  },

  beforeMount() {
    this.getIllustration();
  },

  methods: {
    /**
     * Fetch the illustration as webpack chunk
     */
    async getIllustration() {
      this.illustration = '';

      if (this.illustrationName !== '') {
        try {
          const illustration = await __webpack_require__("./src/assets/Illustrations lazy recursive ^\\.\\/.*\\.svg$")(`./${this.illustrationName}.svg`);
          this.illustration = illustration.default;
        } catch (error) {
          console.error('Could not get the error illustration', error);
        }
      }
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_material_design_icons_Plus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-material-design-icons/Plus */ "./node_modules/vue-material-design-icons/Plus.vue");
/* harmony import */ var vue_material_design_icons_TrashCan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-material-design-icons/TrashCan */ "./node_modules/vue-material-design-icons/TrashCan.vue");
/* harmony import */ var vue_material_design_icons_PlusBoxMultiple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-material-design-icons/PlusBoxMultiple */ "./node_modules/vue-material-design-icons/PlusBoxMultiple.vue");
/* harmony import */ var vue_material_design_icons_FileUpload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-material-design-icons/FileUpload */ "./node_modules/vue-material-design-icons/FileUpload.vue");
/* harmony import */ var vue_material_design_icons_Star__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-material-design-icons/Star */ "./node_modules/vue-material-design-icons/Star.vue");
/* harmony import */ var vue_material_design_icons_DownloadOutline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-material-design-icons/DownloadOutline */ "./node_modules/vue-material-design-icons/DownloadOutline.vue");
/* harmony import */ var _nextcloud_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/vue */ "./node_modules/@nextcloud/vue/dist/ncvuecomponents.js");
/* harmony import */ var _nextcloud_vue__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _nextcloud_moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextcloud/moment */ "./node_modules/@nextcloud/moment/dist/index.js");
/* harmony import */ var _nextcloud_moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_logger_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/logger.js */ "./src/services/logger.js");
/* harmony import */ var _services_AllowedMimes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/AllowedMimes.js */ "./src/services/AllowedMimes.js");
/* harmony import */ var _mixins_FetchFilesMixin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../mixins/FetchFilesMixin.js */ "./src/mixins/FetchFilesMixin.js");
/* harmony import */ var _mixins_FilesByMonthMixin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../mixins/FilesByMonthMixin.js */ "./src/mixins/FilesByMonthMixin.js");
/* harmony import */ var _mixins_FilesSelectionMixin_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../mixins/FilesSelectionMixin.js */ "./src/mixins/FilesSelectionMixin.js");
/* harmony import */ var _components_FilesListViewer_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/FilesListViewer.vue */ "./src/components/FilesListViewer.vue");
/* harmony import */ var _components_EmptyContent_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/EmptyContent.vue */ "./src/components/EmptyContent.vue");
/* harmony import */ var _components_File_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/File.vue */ "./src/components/File.vue");
/* harmony import */ var _components_Loader_vue__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Loader.vue */ "./src/components/Loader.vue");
/* harmony import */ var _components_AlbumForm_vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/AlbumForm.vue */ "./src/components/AlbumForm.vue");
/* harmony import */ var _components_AlbumPicker_vue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/AlbumPicker.vue */ "./src/components/AlbumPicker.vue");
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
  name: 'Timeline',
  components: {
    EmptyContent: _components_EmptyContent_vue__WEBPACK_IMPORTED_MODULE_14__["default"],
    AlbumForm: _components_AlbumForm_vue__WEBPACK_IMPORTED_MODULE_17__["default"],
    AlbumPicker: _components_AlbumPicker_vue__WEBPACK_IMPORTED_MODULE_18__["default"],
    FilesListViewer: _components_FilesListViewer_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
    Loader: _components_Loader_vue__WEBPACK_IMPORTED_MODULE_16__["default"],
    File: _components_File_vue__WEBPACK_IMPORTED_MODULE_15__["default"],
    Modal: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_6__.Modal,
    Actions: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_6__.Actions,
    ActionButton: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_6__.ActionButton,
    Button: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_6__.Button,
    Plus: vue_material_design_icons_Plus__WEBPACK_IMPORTED_MODULE_0__["default"],
    TrashCan: vue_material_design_icons_TrashCan__WEBPACK_IMPORTED_MODULE_1__["default"],
    FileUpload: vue_material_design_icons_FileUpload__WEBPACK_IMPORTED_MODULE_3__["default"],
    PlusBoxMultiple: vue_material_design_icons_PlusBoxMultiple__WEBPACK_IMPORTED_MODULE_2__["default"],
    Star: vue_material_design_icons_Star__WEBPACK_IMPORTED_MODULE_4__["default"],
    DownloadOutline: vue_material_design_icons_DownloadOutline__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  filters: {
    /**
     * @param {string} date - In the following format: YYYYMM
     */
    dateMonth(date) {
      return _nextcloud_moment__WEBPACK_IMPORTED_MODULE_7___default()(date, 'YYYYMM').format('MMMM');
    },

    /**
     * @param {string} date - In the following format: YYYYMM
     */
    dateYear(date) {
      return _nextcloud_moment__WEBPACK_IMPORTED_MODULE_7___default()(date, 'YYYYMM').format('YYYY');
    }

  },
  mixins: [_mixins_FetchFilesMixin_js__WEBPACK_IMPORTED_MODULE_10__["default"], _mixins_FilesSelectionMixin_js__WEBPACK_IMPORTED_MODULE_12__["default"], _mixins_FilesByMonthMixin_js__WEBPACK_IMPORTED_MODULE_11__["default"]],

  beforeRouteLeave(to, from, next) {
    window.scrollTo(0, 0);
    next();
  },

  props: {
    onlyFavorites: {
      type: Boolean,
      default: false
    },
    mimesType: {
      type: Array,
      default: () => _services_AllowedMimes_js__WEBPACK_IMPORTED_MODULE_9__.allMimes
    },
    onThisDay: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      loadingCount: 0,
      showAlbumCreationForm: false,
      showAlbumPicker: false
    };
  },

  computed: { ...(0,vuex__WEBPACK_IMPORTED_MODULE_19__.mapGetters)(['files']),

    /** @type {boolean} */
    shouldFavorite() {
      // Favorite all selection if at least one file is not on the favorites.
      return this.selectedFileIds.some(fileId => this.$store.state.files.files[fileId].favorite === 0);
    }

  },
  methods: { ...(0,vuex__WEBPACK_IMPORTED_MODULE_19__.mapActions)(['deleteFiles', 'toggleFavoriteForFiles', 'downloadFiles', 'addFilesToAlbum']),

    getContent() {
      this.fetchFiles('', {
        mimesType: this.mimesType,
        onThisDay: this.onThisDay,
        onlyFavorites: this.onlyFavorites
      });
    },

    openViewer(fileId) {
      const file = this.files[fileId];
      OCA.Viewer.open({
        path: file.filename,
        list: Object.values(this.fileIdsByMonth).flat().map(fileId => this.files[fileId]),
        loadMore: file.loadMore ? async () => await file.loadMore(true) : () => [],
        canLoop: file.canLoop
      });
    },

    openUploader() {// TODO: finish when implementing upload
    },

    async addSelectionToAlbum(albumName) {
      try {
        this.showAlbumPicker = false;
        this.loadingCount++;
        await this.addFilesToAlbum({
          albumName,
          fileIdsToAdd: this.selectedFileIds
        });
      } catch (error) {
        _services_logger_js__WEBPACK_IMPORTED_MODULE_8__["default"].error(error);
      } finally {
        this.loadingCount--;
      }
    },

    async favoriteSelection() {
      try {
        this.loadingCount++;
        await this.toggleFavoriteForFiles({
          fileIds: this.selectedFileIds,
          favoriteState: true
        });
      } catch (error) {
        _services_logger_js__WEBPACK_IMPORTED_MODULE_8__["default"].error(error);
      } finally {
        this.loadingCount--;
      }
    },

    async unFavoriteSelection() {
      try {
        this.loadingCount++;
        await this.toggleFavoriteForFiles({
          fileIds: this.selectedFileIds,
          favoriteState: false
        });
      } catch (error) {
        _services_logger_js__WEBPACK_IMPORTED_MODULE_8__["default"].error(error);
      } finally {
        this.loadingCount--;
      }
    },

    async deleteSelection() {
      try {
        this.loadingCount++; // Need to store the file ids so it is not changed before the deleteFiles call.

        const files = this.selectedFileIds;
        this.$emit('uncheck-items', files);
        await this.deleteFiles(files);
      } catch (error) {
        _services_logger_js__WEBPACK_IMPORTED_MODULE_8__["default"].error(error);
      } finally {
        this.loadingCount--;
      }
    },

    async downloadSelection() {
      try {
        this.loadingCount++;
        await this.downloadFiles(this.selectedFileIds);
      } catch (error) {
        _services_logger_js__WEBPACK_IMPORTED_MODULE_8__["default"].error(error);
      } finally {
        this.loadingCount--;
      }
    }

  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AlbumPicker.vue?vue&type=style&index=0&id=bc6ea946&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AlbumPicker.vue?vue&type=style&index=0&id=bc6ea946&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, ".album-picker[data-v-bc6ea946] {\n  padding: 32px;\n  padding-top: 16px;\n}\n.album-picker h2[data-v-bc6ea946] {\n  display: flex;\n  align-items: center;\n  height: 60px;\n  padding-left: 8px;\n}\n.album-picker h2 .loading-icon[data-v-bc6ea946] {\n  margin-left: 32px;\n}\n.album-picker .albums-container[data-v-bc6ea946] {\n  min-height: 150px;\n  max-height: 350px;\n  overflow: scroll;\n  padding-right: 8px;\n}\n.album-picker .albums-container .album[data-v-bc6ea946] {\n  display: flex;\n  padding: 8px;\n  border-radius: 8px;\n}\n.album-picker .albums-container .album[data-v-bc6ea946], .album-picker .albums-container .album *[data-v-bc6ea946] {\n  cursor: pointer;\n}\n.album-picker .albums-container .album[data-v-bc6ea946]:not(:last-child) {\n  margin-bottom: 16px;\n}\n.album-picker .albums-container .album[data-v-bc6ea946]:hover {\n  background: var(--color-background-dark);\n}\n.album-picker .albums-container .album__image[data-v-bc6ea946] {\n  width: 50px;\n  height: 50px;\n  object-fit: none;\n  border-radius: 4px;\n  margin-right: 8px;\n  background: var(--color-background-darker);\n}\n.album-picker .albums-container .album__details[data-v-bc6ea946] {\n  display: flex;\n  flex-direction: column;\n}\n.album-picker .albums-container .album__details__second-line[data-v-bc6ea946] {\n  color: var(--color-text-lighter);\n}\n.album-picker .new-album-button[data-v-bc6ea946] {\n  margin-top: 32px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EmptyContent.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EmptyContent.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, ".emptycontent {\n  grid-column: 1/-1;\n  margin-top: 20vh;\n}\n.illustration {\n  min-width: 200px;\n  max-width: 15%;\n  width: 300px;\n  margin: auto;\n  margin-bottom: 20px;\n  position: relative;\n}\n.illustration svg {\n  width: 100%;\n  height: 100%;\n  max-height: 40vh;\n}\n.illustration [fill*=\"6c63ff\"] {\n  fill: var(--color-primary-element);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline.vue?vue&type=style&index=0&id=e945440a&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline.vue?vue&type=style&index=0&id=e945440a&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, ".timeline[data-v-e945440a] {\n  display: flex;\n  flex-direction: column;\n  padding: 4px 64px;\n}\n.timeline__header[data-v-e945440a] {\n  display: flex;\n  min-height: 60px;\n  align-items: center;\n  position: fixed;\n  width: 100%;\n  height: 60px;\n}\n.timeline__header > *[data-v-e945440a] {\n  margin-right: 8px;\n}\n.timeline__header .loader[data-v-e945440a] {\n  margin-left: 16px;\n}\n.timeline__file-list[data-v-e945440a] {\n  margin-top: 60px;\n}\n.timeline__file-list .section-header[data-v-e945440a] {\n  padding: 24px 0 16px 0;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AlbumPicker.vue?vue&type=style&index=0&id=bc6ea946&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AlbumPicker.vue?vue&type=style&index=0&id=bc6ea946&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbumPicker_vue_vue_type_style_index_0_id_bc6ea946_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AlbumPicker.vue?vue&type=style&index=0&id=bc6ea946&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AlbumPicker.vue?vue&type=style&index=0&id=bc6ea946&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbumPicker_vue_vue_type_style_index_0_id_bc6ea946_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbumPicker_vue_vue_type_style_index_0_id_bc6ea946_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbumPicker_vue_vue_type_style_index_0_id_bc6ea946_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbumPicker_vue_vue_type_style_index_0_id_bc6ea946_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EmptyContent.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EmptyContent.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmptyContent.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EmptyContent.vue?vue&type=style&index=0&lang=scss&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline.vue?vue&type=style&index=0&id=e945440a&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline.vue?vue&type=style&index=0&id=e945440a&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_style_index_0_id_e945440a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Timeline.vue?vue&type=style&index=0&id=e945440a&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline.vue?vue&type=style&index=0&id=e945440a&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_style_index_0_id_e945440a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_style_index_0_id_e945440a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_style_index_0_id_e945440a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_style_index_0_id_e945440a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/AlbumPicker.vue":
/*!****************************************!*\
  !*** ./src/components/AlbumPicker.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AlbumPicker_vue_vue_type_template_id_bc6ea946_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlbumPicker.vue?vue&type=template&id=bc6ea946&scoped=true& */ "./src/components/AlbumPicker.vue?vue&type=template&id=bc6ea946&scoped=true&");
/* harmony import */ var _AlbumPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlbumPicker.vue?vue&type=script&lang=js& */ "./src/components/AlbumPicker.vue?vue&type=script&lang=js&");
/* harmony import */ var _AlbumPicker_vue_vue_type_style_index_0_id_bc6ea946_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AlbumPicker.vue?vue&type=style&index=0&id=bc6ea946&lang=scss&scoped=true& */ "./src/components/AlbumPicker.vue?vue&type=style&index=0&id=bc6ea946&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AlbumPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AlbumPicker_vue_vue_type_template_id_bc6ea946_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AlbumPicker_vue_vue_type_template_id_bc6ea946_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "bc6ea946",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/AlbumPicker.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/EmptyContent.vue":
/*!*****************************************!*\
  !*** ./src/components/EmptyContent.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EmptyContent_vue_vue_type_template_id_6c3ea49c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmptyContent.vue?vue&type=template&id=6c3ea49c& */ "./src/components/EmptyContent.vue?vue&type=template&id=6c3ea49c&");
/* harmony import */ var _EmptyContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmptyContent.vue?vue&type=script&lang=js& */ "./src/components/EmptyContent.vue?vue&type=script&lang=js&");
/* harmony import */ var _EmptyContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmptyContent.vue?vue&type=style&index=0&lang=scss& */ "./src/components/EmptyContent.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EmptyContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmptyContent_vue_vue_type_template_id_6c3ea49c___WEBPACK_IMPORTED_MODULE_0__.render,
  _EmptyContent_vue_vue_type_template_id_6c3ea49c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/EmptyContent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/views/Timeline.vue":
/*!********************************!*\
  !*** ./src/views/Timeline.vue ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Timeline_vue_vue_type_template_id_e945440a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Timeline.vue?vue&type=template&id=e945440a&scoped=true& */ "./src/views/Timeline.vue?vue&type=template&id=e945440a&scoped=true&");
/* harmony import */ var _Timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Timeline.vue?vue&type=script&lang=js& */ "./src/views/Timeline.vue?vue&type=script&lang=js&");
/* harmony import */ var _Timeline_vue_vue_type_style_index_0_id_e945440a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Timeline.vue?vue&type=style&index=0&id=e945440a&lang=scss&scoped=true& */ "./src/views/Timeline.vue?vue&type=style&index=0&id=e945440a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Timeline_vue_vue_type_template_id_e945440a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Timeline_vue_vue_type_template_id_e945440a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e945440a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/Timeline.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/AlbumPicker.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/components/AlbumPicker.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbumPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AlbumPicker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AlbumPicker.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbumPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/EmptyContent.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./src/components/EmptyContent.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmptyContent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EmptyContent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/Timeline.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./src/views/Timeline.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Timeline.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/AlbumPicker.vue?vue&type=style&index=0&id=bc6ea946&lang=scss&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./src/components/AlbumPicker.vue?vue&type=style&index=0&id=bc6ea946&lang=scss&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbumPicker_vue_vue_type_style_index_0_id_bc6ea946_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AlbumPicker.vue?vue&type=style&index=0&id=bc6ea946&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AlbumPicker.vue?vue&type=style&index=0&id=bc6ea946&lang=scss&scoped=true&");


/***/ }),

/***/ "./src/components/EmptyContent.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************!*\
  !*** ./src/components/EmptyContent.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmptyContent.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EmptyContent.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./src/views/Timeline.vue?vue&type=style&index=0&id=e945440a&lang=scss&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./src/views/Timeline.vue?vue&type=style&index=0&id=e945440a&lang=scss&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_style_index_0_id_e945440a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Timeline.vue?vue&type=style&index=0&id=e945440a&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline.vue?vue&type=style&index=0&id=e945440a&lang=scss&scoped=true&");


/***/ }),

/***/ "./src/components/AlbumPicker.vue?vue&type=template&id=bc6ea946&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./src/components/AlbumPicker.vue?vue&type=template&id=bc6ea946&scoped=true& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbumPicker_vue_vue_type_template_id_bc6ea946_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbumPicker_vue_vue_type_template_id_bc6ea946_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbumPicker_vue_vue_type_template_id_bc6ea946_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AlbumPicker.vue?vue&type=template&id=bc6ea946&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AlbumPicker.vue?vue&type=template&id=bc6ea946&scoped=true&");


/***/ }),

/***/ "./src/components/EmptyContent.vue?vue&type=template&id=6c3ea49c&":
/*!************************************************************************!*\
  !*** ./src/components/EmptyContent.vue?vue&type=template&id=6c3ea49c& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyContent_vue_vue_type_template_id_6c3ea49c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyContent_vue_vue_type_template_id_6c3ea49c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyContent_vue_vue_type_template_id_6c3ea49c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmptyContent.vue?vue&type=template&id=6c3ea49c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EmptyContent.vue?vue&type=template&id=6c3ea49c&");


/***/ }),

/***/ "./src/views/Timeline.vue?vue&type=template&id=e945440a&scoped=true&":
/*!***************************************************************************!*\
  !*** ./src/views/Timeline.vue?vue&type=template&id=e945440a&scoped=true& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_template_id_e945440a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_template_id_e945440a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_template_id_e945440a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Timeline.vue?vue&type=template&id=e945440a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline.vue?vue&type=template&id=e945440a&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AlbumPicker.vue?vue&type=template&id=bc6ea946&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AlbumPicker.vue?vue&type=template&id=bc6ea946&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return !_vm.showAlbumCreationForm
    ? _c(
        "div",
        { staticClass: "album-picker" },
        [
          _c(
            "h2",
            [
              _vm._v(
                "\n\t\t" + _vm._s(_vm.t("photo", "Add to Album")) + "\n\t\t"
              ),
              _vm.loadingAlbums
                ? _c("Loader", { staticClass: "loading-icon" })
                : _vm._e(),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "albums-container" },
            _vm._l(_vm.albums, function (album) {
              return _c(
                "div",
                {
                  key: album.basename,
                  staticClass: "album",
                  on: {
                    click: function ($event) {
                      return _vm.pickAlbum(album.basename)
                    },
                  },
                },
                [
                  _c("img", {
                    staticClass: "album__image",
                    attrs: { src: _vm._f("toCoverUrl")(album.cover) },
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "album__details" }, [
                    _c("div", { staticClass: "album__details__first-line" }, [
                      _c("b", { staticClass: "album__details__name" }, [
                        _vm._v(
                          "\n\t\t\t\t\t\t" +
                            _vm._s(album.basename) +
                            "\n\t\t\t\t\t"
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "album__details__second-line" }, [
                      _vm._v(
                        "\n\t\t\t\t\t" +
                          _vm._s(
                            _vm.n("photos", "%n item", "%n items", album.size)
                          ) +
                          " ⸱ " +
                          _vm._s(
                            _vm.n(
                              "photos",
                              "Share with %n user",
                              "Share with %n others",
                              album.isShared
                            )
                          ) +
                          "\n\t\t\t\t"
                      ),
                    ]),
                  ]),
                ]
              )
            }),
            0
          ),
          _vm._v(" "),
          _c(
            "Button",
            {
              staticClass: "new-album-button",
              attrs: {
                "aria-label": _vm.t("photo", "Create a new album."),
                type: "tertiary",
              },
              on: {
                click: function ($event) {
                  _vm.showAlbumCreationForm = true
                },
              },
              scopedSlots: _vm._u(
                [
                  {
                    key: "icon",
                    fn: function () {
                      return [_c("Plus")]
                    },
                    proxy: true,
                  },
                ],
                null,
                false,
                1489515321
              ),
            },
            [
              _vm._v(
                "\n\t\t" + _vm._s(_vm.t("photo", "Create new album")) + "\n\t"
              ),
            ]
          ),
        ],
        1
      )
    : _c("AlbumForm", {
        attrs: {
          "display-back-button": true,
          title: _vm.t("photos", "New album"),
        },
        on: {
          back: function ($event) {
            _vm.showAlbumCreationForm = false
          },
          done: _vm.albumCreatedHandler,
        },
      })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EmptyContent.vue?vue&type=template&id=6c3ea49c&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EmptyContent.vue?vue&type=template&id=6c3ea49c& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.isReady
    ? _c("div", { staticClass: "emptycontent" }, [
        _vm.haveIllustration
          ? _c("div", {
              staticClass: "illustration",
              domProps: { innerHTML: _vm._s(_vm.illustration) },
            })
          : _c("div", { staticClass: "icon-error" }),
        _vm._v(" "),
        _c("h2", [_vm._t("default")], 2),
        _vm._v(" "),
        _c(
          "p",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.$slots.desc,
                expression: "$slots.desc",
              },
            ],
          },
          [_vm._t("desc")],
          2
        ),
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline.vue?vue&type=template&id=e945440a&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Timeline.vue?vue&type=template&id=e945440a&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.errorFetchingFiles
    ? _c("EmptyContent", [
        _vm._v("\n\t" + _vm._s(_vm.t("photos", "An error occurred")) + "\n"),
      ])
    : _c(
        "div",
        { staticClass: "timeline" },
        [
          _c(
            "div",
            { staticClass: "timeline__header" },
            [
              _vm.selectedFileIds.length === 0
                ? _c(
                    "Actions",
                    {
                      attrs: {
                        "force-title": true,
                        "force-menu": true,
                        "menu-title": _vm.t("photos", "Add"),
                        primary: true,
                      },
                    },
                    [
                      _c("Plus", { attrs: { slot: "icon" }, slot: "icon" }),
                      _vm._v(" "),
                      _c(
                        "ActionButton",
                        {
                          attrs: {
                            "close-after-click": true,
                            title: _vm.t("photos", "Upload media"),
                          },
                          on: { click: _vm.openUploader },
                        },
                        [
                          _c("FileUpload", {
                            attrs: { slot: "icon" },
                            slot: "icon",
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "ActionButton",
                        {
                          attrs: {
                            "close-after-click": true,
                            "aria-label": _vm.t("photos", "Create a new album"),
                            title: _vm.t("photos", "Create new album"),
                          },
                          on: {
                            click: function ($event) {
                              _vm.showAlbumCreationForm = true
                            },
                          },
                        },
                        [
                          _c("PlusBoxMultiple", {
                            attrs: { slot: "icon" },
                            slot: "icon",
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  )
                : [
                    _c(
                      "Button",
                      {
                        attrs: {
                          "close-after-click": true,
                          type: "primary",
                          "aria-label": _vm.t(
                            "photos",
                            "Add selection to an album"
                          ),
                        },
                        on: {
                          click: function ($event) {
                            _vm.showAlbumPicker = true
                          },
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "icon",
                            fn: function () {
                              return [
                                _c("Plus", {
                                  attrs: { slot: "icon" },
                                  slot: "icon",
                                }),
                              ]
                            },
                            proxy: true,
                          },
                        ]),
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t" +
                            _vm._s(_vm.t("photos", "Add to album")) +
                            "\n\t\t\t"
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "Actions",
                      [
                        _c(
                          "ActionButton",
                          {
                            attrs: {
                              "close-after-click": true,
                              "aria-label": _vm.t(
                                "photos",
                                "Download selection"
                              ),
                              title: _vm.t("photos", "Download"),
                            },
                            on: { click: _vm.downloadSelection },
                          },
                          [
                            _c("DownloadOutline", {
                              attrs: { slot: "icon" },
                              slot: "icon",
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm.shouldFavorite
                          ? _c(
                              "ActionButton",
                              {
                                attrs: {
                                  "close-after-click": true,
                                  "aria-label": _vm.t(
                                    "photos",
                                    "Mark selection as favorite"
                                  ),
                                  title: _vm.t("photos", "Favorite"),
                                },
                                on: { click: _vm.favoriteSelection },
                              },
                              [
                                _c("Star", {
                                  attrs: { slot: "icon" },
                                  slot: "icon",
                                }),
                              ],
                              1
                            )
                          : _c(
                              "ActionButton",
                              {
                                attrs: {
                                  "close-after-click": true,
                                  "aria-label": _vm.t(
                                    "photos",
                                    "Remove selection from favorites"
                                  ),
                                  title: _vm.t(
                                    "photos",
                                    "Remove from favorites"
                                  ),
                                },
                                on: { click: _vm.unFavoriteSelection },
                              },
                              [
                                _c("Star", {
                                  attrs: { slot: "icon" },
                                  slot: "icon",
                                }),
                              ],
                              1
                            ),
                        _vm._v(" "),
                        _c(
                          "ActionButton",
                          {
                            attrs: {
                              "close-after-click": true,
                              title: _vm.t("photos", "Delete"),
                              "aria-label": _vm.t("photos", "Delete selection"),
                            },
                            on: { click: _vm.deleteSelection },
                          },
                          [
                            _c("TrashCan", {
                              attrs: { slot: "icon" },
                              slot: "icon",
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("Actions"),
                  ],
              _vm._v(" "),
              _vm.loadingCount > 0 ? _c("Loader", { key: "loader" }) : _vm._e(),
            ],
            2
          ),
          _vm._v(" "),
          _c("FilesListViewer", {
            ref: "filesListViewer",
            staticClass: "timeline__file-list",
            attrs: {
              "use-window": true,
              "file-ids-by-section": _vm.fileIdsByMonth,
              sections: _vm.monthsList,
              loading: _vm.loadingFiles,
              "empty-message": _vm.t("photos", "No photos in here"),
            },
            on: { "need-content": _vm.getContent },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function (ref) {
                  var file = ref.file
                  var visibility = ref.visibility
                  return [
                    file.sectionHeader
                      ? _c(
                          "h3",
                          {
                            staticClass: "section-header",
                            attrs: {
                              id: "file-picker-section-header-" + file.id,
                            },
                          },
                          [
                            _c("b", [
                              _vm._v(_vm._s(_vm._f("dateMonth")(file.id))),
                            ]),
                            _vm._v(
                              "\n\t\t\t\t" +
                                _vm._s(_vm._f("dateYear")(file.id)) +
                                "\n\t\t\t"
                            ),
                          ]
                        )
                      : _c("File", {
                          attrs: {
                            item: _vm.files[file.id],
                            "allow-selection": true,
                            selected: _vm.selection[file.id] === true,
                            visibility: visibility,
                            semaphore: _vm.semaphore,
                          },
                          on: {
                            click: _vm.openViewer,
                            "select-toggled": _vm.onFileSelectToggle,
                          },
                        }),
                  ]
                },
              },
            ]),
          }),
          _vm._v(" "),
          _vm.showAlbumCreationForm
            ? _c(
                "Modal",
                {
                  key: "albumCreationForm",
                  attrs: { title: _vm.t("photos", "New album") },
                  on: {
                    close: function ($event) {
                      _vm.showAlbumCreationForm = false
                    },
                  },
                },
                [
                  _c("AlbumForm", {
                    on: {
                      "album-created": function ($event) {
                        _vm.showAlbumCreationForm = false
                      },
                    },
                  }),
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.showAlbumPicker
            ? _c(
                "Modal",
                {
                  key: "albumPicker",
                  attrs: { title: _vm.t("photos", "Add to album") },
                  on: {
                    close: function ($event) {
                      _vm.showAlbumPicker = false
                    },
                  },
                },
                [_c("AlbumPicker", { on: { done: _vm.addSelectionToAlbum } })],
                1
              )
            : _vm._e(),
        ],
        1
      )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/assets/Illustrations lazy recursive ^\\.\\/.*\\.svg$":
/*!***********************************************************************!*\
  !*** ./src/assets/Illustrations/ lazy ^\.\/.*\.svg$ namespace object ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./empty.svg": [
		"./src/assets/Illustrations/empty.svg",
		"src_assets_Illustrations_empty_svg"
	],
	"./folder.svg": [
		"./src/assets/Illustrations/folder.svg",
		"src_assets_Illustrations_folder_svg"
	],
	"./images.svg": [
		"./src/assets/Illustrations/images.svg",
		"src_assets_Illustrations_images_svg"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 1 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src/assets/Illustrations lazy recursive ^\\.\\/.*\\.svg$";
module.exports = webpackAsyncContext;

/***/ })

}]);
//# sourceMappingURL=photos-src_views_Timeline_vue.js.map?v=cdc15a9c7e0767c8cf43