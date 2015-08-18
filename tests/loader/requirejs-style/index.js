KISSY.add('a',function(S) {
	return {
		ok:'A is ok'
	};
});

KISSY.add('b',{
	ok:'B is ok'
});

KISSY.add('test/loader/requirejs-style/index',['a','b','./c','./d'],function(S, require,exports,module){
	var A = require('a');
	var B = require('b');
	var C = require('./c');
	var D = require('./d');

	module.exports = {
		A:A.ok,
		B:B.ok,
		C:C.ok,
		D:D.ok
	};
	
});

