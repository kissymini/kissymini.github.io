KISSY.add(function(S, require, exports, module) {

	var A = require('./a');
	var B = require('./b');

	module.exports = {
		A:A.ok,
		B:B.ok
	};
});
