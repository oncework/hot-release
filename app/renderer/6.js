webpackJsonp([6],{

/***/ "./node_modules/css-loader/index.js?{\"modules\":false,\"importLoaders\":2,\"minimize\":true,\"sourceMap\":true}!./node_modules/less-loader/dist/cjs.js!./src/renderer/assets/styles/search.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".ant-card-body{padding:2px 10px!important}.ant-select-dropdown-menu{max-height:543px!important}.snippet-search{padding:10px;border-radius:4px;background:rgba(0,0,0,.25)!important}.snippet-search .ant-select-selection{background-color:hsla(0,0%,100%,.8)!important}.snippet-search .ant-card-body{padding:5px 12px!important}.snippet-search .select-item{cursor:pointer}.snippet-search .select-item .select-item-desc{color:\"rgba(0,0,0,.65)\";width:130;font-weight:400;text-overflow:ellipsis;white-space:nowrap;outline:none;overflow:hidden}.snippet-search .select-item .select-item-tag{float:right;background:#8a2be2}", "", {"version":3,"sources":["/code/once/once/src/renderer/assets/styles/search.less"],"names":[],"mappings":"AAAA,eACE,0BAA6B,CAC9B,AACD,0BACE,0BAA6B,CAC9B,AACD,gBACE,aAAc,AACd,kBAAmB,AACnB,oCAA2C,CAC5C,AACD,sCACE,6CAAsD,CACvD,AACD,+BACE,0BAA6B,CAC9B,AACD,6BACE,cAAgB,CACjB,AACD,+CACE,wBAAyB,AACzB,UAAW,AACX,gBAAiB,AACjB,uBAAwB,AACxB,mBAAoB,AACpB,aAAc,AACd,eAAiB,CAClB,AACD,8CACE,YAAa,AACb,kBAAuB,CACxB","file":"search.less","sourcesContent":[".ant-card-body {\n  padding: 2px 10px !important;\n}\n.ant-select-dropdown-menu {\n  max-height: 543px !important;\n}\n.snippet-search {\n  padding: 10px;\n  border-radius: 4px;\n  background: rgba(0, 0, 0, 0.25) !important;\n}\n.snippet-search .ant-select-selection {\n  background-color: rgba(255, 255, 255, 0.8) !important;\n}\n.snippet-search .ant-card-body {\n  padding: 5px 12px !important;\n}\n.snippet-search .select-item {\n  cursor: pointer;\n}\n.snippet-search .select-item .select-item-desc {\n  color: \"rgba(0,0,0,.65)\";\n  width: 130;\n  font-weight: 400;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  outline: none;\n  overflow: hidden;\n}\n.snippet-search .select-item .select-item-tag {\n  float: right;\n  background: blueviolet;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./src/renderer/assets/styles/search.less":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"modules\":false,\"importLoaders\":2,\"minimize\":true,\"sourceMap\":true}!./node_modules/less-loader/dist/cjs.js!./src/renderer/assets/styles/search.less");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--8-2!../../../../node_modules/less-loader/dist/cjs.js!./search.less", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js??ref--8-2!../../../../node_modules/less-loader/dist/cjs.js!./search.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});