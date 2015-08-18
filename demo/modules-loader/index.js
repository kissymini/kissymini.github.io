/**
 * @fileoverview Test.
 * @author NoName
 */
/**
 * KISSY.use('../index',function(S,Test){
 *		new Test({参数列表});
 * });
 */
KISSY.add(function(S, require, exports, module) {

	// 引用 KISSY 内置 Node 模块
    var Node = require('node');
	var CustomModA = require('./custom-mod-a');
	var CustomModB = require('./custom-mod-b');

	module.exports = {
		init:function(){
			log(Node.valueOf());
			log(CustomModA.valueOf());
			log(CustomModB.valueOf());
			log('done!');
		}
	};
	
});

