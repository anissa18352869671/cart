webpackJsonp([2],{

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(24)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(19),
  /* template */
  __webpack_require__(29),
  /* scopeId */
  "data-v-b41a915c",
  /* cssModules */
  null
)
Component.options.__file = "D:\\dingziling\\web\\cart\\views\\cart.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] cart.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b41a915c", Component.options)
  } else {
    hotAPI.reload("data-v-b41a915c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 19:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data() {
    return {
      productList: __WEBPACK_IMPORTED_MODULE_0__product_js__["a" /* default */],
      promotionCode: "",
      promotion: 0
    };
  },
  computed: {
    cartList() {
      return this.$store.state.cartList;
    },
    productDictList() {
      const dict = {};
      this.productList.forEach(item => {
        dict[item.id] = item;
      });
      return dict;
    },
    countAll() {
      let count = 0;
      this.cartList.forEach(item => {
        count += item.count;
      });
      return count;
    },
    costAll() {
      let cost = 0;
      this.cartList.forEach(item => {
        cost += this.productDictList[item.id].cost * item.count;
      });
      return cost;
    }
  },
  methods: {
    handleCount(index, count) {
      if (count < 0 && this.cartList[index].count === 1) return;
      this.$store.commit("editCartCount", {
        id: this.cartList[index].id,
        count: count
      });
    },
    handleDelete(index) {
      this.$store.commit("deleteCart", this.cartList[index].id);
    },
    //验证优惠码
    handleCheckCode() {
      if (this.promotionCode === "") {
        window.alert("请输入优惠码");
        return;
      }

      if (this.promotionCode !== "anissa") {
        window.alert("优惠码验证失败！");
      } else {
        this.promotion = 500;
      }
    },
    //通知vuex，完成下单
    handleOrder() {
      this.$store.dispatch("buy").then(() => {
        window.alert("购买成功");
      });
    }
  }
});

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cart"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "cart-content"
  }, [_vm._l((_vm.cartList), function(item, index) {
    return _c('div', {
      staticClass: "cart-content-main"
    }, [_c('div', {
      staticClass: "cart-info"
    }, [_c('img', {
      attrs: {
        "src": _vm.productDictList[item.id].image,
        "alt": ""
      }
    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.productDictList[item.id].name))])]), _vm._v(" "), _c('div', {
      staticClass: "cart-price"
    }, [_vm._v("￥" + _vm._s(_vm.productDictList[item.id].cost))]), _vm._v(" "), _c('div', {
      staticClass: "cart-count"
    }, [_c('span', {
      staticClass: "cart-control-minus",
      on: {
        "click": function($event) {
          return _vm.handleCount(index, -1)
        }
      }
    }, [_vm._v("-")]), _vm._v("\n        " + _vm._s(item.count) + "\n        "), _c('span', {
      staticClass: "cart-control-add",
      on: {
        "click": function($event) {
          return _vm.handleCount(index, 1)
        }
      }
    }, [_vm._v("+")])]), _vm._v(" "), _c('div', {
      staticClass: "cart-cost"
    }, [_vm._v("￥" + _vm._s(_vm.productDictList[item.id].cost * item.count))]), _vm._v(" "), _c('div', {
      staticClass: "cart-delete"
    }, [_c('span', {
      staticClass: "cart-control-delete",
      on: {
        "click": function($event) {
          return _vm.handleDelete(index)
        }
      }
    }, [_vm._v("删除")])])])
  }), _vm._v(" "), (!_vm.cartList.length) ? _c('div', {
    staticClass: "cart-empty"
  }, [_vm._v("购物车为空")]) : _vm._e()], 2), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.cartList.length),
      expression: "cartList.length"
    }],
    staticClass: "cart-promotion"
  }, [_c('span', [_vm._v("使用优惠码:")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.promotionCode),
      expression: "promotionCode"
    }],
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.promotionCode)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.promotionCode = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "cart-control-promotion",
    on: {
      "click": _vm.handleCheckCode
    }
  }, [_vm._v("验证")])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.cartList.length),
      expression: "cartList.length"
    }],
    staticClass: "cart-footer"
  }, [_c('div', {
    staticClass: "cart-footer-desc"
  }, [_vm._v("\n      共计\n      "), _c('span', [_vm._v(_vm._s(_vm.countAll))]), _vm._v("件商品\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "cart-footer-desc"
  }, [_vm._v("\n      应付总额\n      "), _c('span', [_vm._v("￥" + _vm._s(_vm.costAll - _vm.promotion))]), _vm._v(" "), _c('br'), _vm._v(" "), (_vm.promotion) ? [_vm._v("\n        (优惠\n        "), _c('span', [_vm._v("￥" + _vm._s(_vm.promotion))]), _vm._v(")\n      ")] : _vm._e()], 2), _vm._v(" "), _c('div', {
    staticClass: "cart-footer-desc"
  }, [_c('div', {
    staticClass: "cart-control-order",
    on: {
      "click": _vm.handleOrder
    }
  }, [_vm._v("现在结算")])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cart-header"
  }, [_c('div', {
    staticClass: "cart-header-title"
  }, [_vm._v("购物清单")]), _vm._v(" "), _c('div', {
    staticClass: "cart-header-main"
  }, [_c('div', {
    staticClass: "cart-info"
  }, [_vm._v("商品信息")]), _vm._v(" "), _c('div', {
    staticClass: "cart-price"
  }, [_vm._v("单价")]), _vm._v(" "), _c('div', {
    staticClass: "cart-count"
  }, [_vm._v("数量")]), _vm._v(" "), _c('div', {
    staticClass: "cart-cost"
  }, [_vm._v("小计")]), _vm._v(" "), _c('div', {
    staticClass: "cart-delete"
  }, [_vm._v("删除")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b41a915c", module.exports)
  }
}

/***/ })

});