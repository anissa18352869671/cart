webpackJsonp([0],{

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(22)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(20),
  /* template */
  __webpack_require__(26),
  /* scopeId */
  "data-v-14780460",
  /* cssModules */
  null
)
Component.options.__file = "D:\\dingziling\\web\\cart\\views\\list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-14780460", Component.options)
  } else {
    hotAPI.reload("data-v-14780460", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    info: Object
  },
  data() {
    return {
      colors: {
        白色: "#ffffff",
        金色: "#dac272",
        蓝色: "#233472",
        红色: "#f2352e"
      }
    };
  },
  methods: {
    handleCart() {
      this.$store.commit("addCart", this.info.id);
    }
  }
});

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_product_vue__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_product_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_product_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//导入商品简介组件

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Product: __WEBPACK_IMPORTED_MODULE_0__components_product_vue___default.a
  },
  data() {
    return {
      //排序依据,可选值
      //sales(销量)
      //cost-desc(价格降序)
      //cost-asc(价格升序)
      order: "",
      filterBrand: "",
      filterColor: ""
    };
  },
  methods: {
    handleOrderDefault() {
      this.order = "";
    },
    handleOrderSales() {
      this.order = "sales";
    },
    handleOrderCost() {
      if (this.order === "cost-desc") {
        this.order = "cost-asc";
      } else {
        this.order = "cost-desc";
      }
    },
    handleFilterBrand(brand) {
      //单次点击选中，再次点击取消选中
      if (this.filterBrand === brand) {
        this.filterBrand = "";
      } else {
        this.filterBrand = brand;
      }
    },
    handleFilterColor(color) {
      //单次点击选中，再次点击取消选中
      if (this.filterColor === color) {
        this.filterColor = "";
      } else {
        this.filterColor = color;
      }
    }
  },
  computed: {
    list() {
      //从Vuex获取商品列表数据
      return this.$store.state.productList;
    },
    brands() {
      //从Vuex获取商品列表数据
      return this.$store.state.brands;
    },
    colors() {
      //从Vuex获取商品列表数据
      return this.$store.state.colors;
    },
    filteredList() {
      //复制原始数据
      let list = [...this.list];
      //todo按品牌过滤
      if (this.filterBrand !== "") {
        list = list.filter(item => item.brand === this.filterBrand);
      }
      //todo按颜色过滤
      if (this.filterColor !== "") {
        list = list.filter(item => item.color === this.filterColor);
      }

      //排序
      if (this.order !== "") {
        if (this.order === "sales") {
          list = list.sort((a, b) => b.sales - a.sales);
        } else if (this.order === "cost-desc") {
          list = list.sort((a, b) => b.cost - a.cost);
        } else if (this.order === "cost-asc") {
          list = list.sort((a, b) => a.cost - b.cost);
        }
      }
      return list;
    }
  },
  mounted() {
    //初始化时，通过Vuex的action请求数据
    this.$store.dispatch("getProductList");
  }
});

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(18),
  /* template */
  __webpack_require__(27),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\dingziling\\web\\cart\\components\\product.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] product.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-79eba6b2", Component.options)
  } else {
    hotAPI.reload("data-v-79eba6b2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.list.length),
      expression: "list.length"
    }]
  }, [_c('div', {
    staticClass: "list-control"
  }, [_c('div', {
    staticClass: "list-control-filter"
  }, [_c('span', [_vm._v("品牌:")]), _vm._v(" "), _vm._l((_vm.brands), function(item) {
    return _c('span', {
      staticClass: "list-control-filter-item",
      class: {
        on: item === _vm.filterBrand
      },
      on: {
        "click": function($event) {
          return _vm.handleFilterBrand(item)
        }
      }
    }, [_vm._v(_vm._s(item))])
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "list-control-filter"
  }, [_c('span', [_vm._v("颜色:")]), _vm._v(" "), _vm._l((_vm.colors), function(item) {
    return _c('span', {
      staticClass: "list-control-filter-item",
      class: {
        on: item === _vm.filterColor
      },
      on: {
        "click": function($event) {
          return _vm.handleFilterColor(item)
        }
      }
    }, [_vm._v(_vm._s(item))])
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "list-control-order"
  }, [_c('span', [_vm._v("排序:")]), _vm._v(" "), _c('span', {
    staticClass: "list-control-order-item",
    class: {
      on: _vm.order === ''
    },
    on: {
      "click": _vm.handleOrderDefault
    }
  }, [_vm._v("默认")]), _vm._v(" "), _c('span', {
    staticClass: "list-control-order-item",
    class: {
      on: _vm.order === 'sales'
    },
    on: {
      "click": _vm.handleOrderSales
    }
  }, [_vm._v("\n        销量\n        "), (_vm.order === 'sales') ? [_vm._v("↓")] : _vm._e()], 2), _vm._v(" "), _c('span', {
    staticClass: "list-control-order-item",
    class: {
      on: _vm.order.indexOf('cost') > -1
    },
    on: {
      "click": _vm.handleOrderCost
    }
  }, [_vm._v("\n        价格\n        "), (_vm.order === 'cost-asc') ? [_vm._v("↑")] : _vm._e(), _vm._v(" "), (_vm.order === 'cost-desc') ? [_vm._v("↓")] : _vm._e()], 2)])]), _vm._v(" "), _vm._l((_vm.filteredList), function(item) {
    return _c('Product', {
      key: item.id,
      attrs: {
        "info": item
      }
    })
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.filteredList.length),
      expression: "!filteredList.length"
    }],
    staticClass: "product-not-found"
  }, [_vm._v("暂无商品数据")])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-14780460", module.exports)
  }
}

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "product"
  }, [_c('router-link', {
    staticClass: "product-main",
    attrs: {
      "to": '/product/' + _vm.info.id
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.info.image
    }
  }), _vm._v(" "), _c('h4', [_vm._v(_vm._s(_vm.info.name))]), _vm._v(" "), _c('div', {
    staticClass: "product-color",
    style: ({
      background: _vm.colors[_vm.info]
    })
  }), _vm._v(" "), _c('div', {
    staticClass: "product-cost"
  }, [_vm._v("￥" + _vm._s(_vm.info.cost))]), _vm._v(" "), _c('div', {
    staticClass: "product-add-cart",
    on: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.handleCart($event)
      }
    }
  }, [_vm._v("加入购物车")])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-79eba6b2", module.exports)
  }
}

/***/ })

});