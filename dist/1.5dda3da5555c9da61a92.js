webpackJsonp([1],{

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(23)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(21),
  /* template */
  __webpack_require__(28),
  /* scopeId */
  "data-v-adec8fa6",
  /* cssModules */
  null
)
Component.options.__file = "D:\\dingziling\\web\\cart\\views\\product.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] product.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-adec8fa6", Component.options)
  } else {
    hotAPI.reload("data-v-adec8fa6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_js__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//导入本地数据

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      //获取路由中的参数
      id: parseInt(this.$route.params.id),
      product: null
    };
  },
  methods: {
    getProduct() {
      //真实环境通过ajax获取
      setTimeout(() => {
        this.product = __WEBPACK_IMPORTED_MODULE_0__product_js__["a" /* default */].find(item => item.id === this.id);
      }, 500);
    },
    handleAddToCart() {
      this.$store.commit("addCart", this.id);
    }
  },
  mounted() {
    //初始化时，请求数据
    this.getProduct();
  }
});

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.product) ? _c('div', [_c('div', {
    staticClass: "product"
  }, [_c('div', {
    staticClass: "product-image"
  }, [_c('img', {
    attrs: {
      "src": _vm.product.image,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "product-info"
  }, [_c('h1', {
    staticClass: "product-name"
  }, [_vm._v(_vm._s(_vm.product.name))]), _vm._v(" "), _c('div', {
    staticClass: "product-cost"
  }, [_vm._v("￥" + _vm._s(_vm.product.cost))]), _vm._v(" "), _c('div', {
    staticClass: "product-add-cart",
    on: {
      "click": _vm.handleAddToCart
    }
  }, [_vm._v("加入购物车")])])]), _vm._v(" "), _c('div', {
    staticClass: "product-desc"
  }, [_c('h2', [_vm._v("产品介绍")]), _vm._v(" "), _vm._l((10), function(n) {
    return _c('img', {
      attrs: {
        "src": '../images/goods/' + n + '.png',
        "alt": ""
      }
    })
  })], 2)]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-adec8fa6", module.exports)
  }
}

/***/ })

});