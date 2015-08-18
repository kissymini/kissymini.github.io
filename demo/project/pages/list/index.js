/**
 * @fileoverview Test - Aaa.
 * @author 
 */
/**
 * KISSY.use('test/pages/aaa/index',function(S,Aaa){
 *		new Aaa();
 * });
 */
KISSY.add(function(S,Base) {

	var Aaa = Base.extend({
		initializer:function(){
			var self = this;

			// Your Code
			alert('ok');
		}
	},{
		ATTRS: {
			A:{
				value:'abc'
			}
		}
	});

	return Aaa;
	
},{
	requires:['base']	
});
