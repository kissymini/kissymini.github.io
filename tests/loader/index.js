!(function(S) {

	S.config({
		packages: [{
			name: 'test',
			path: './'
		},{
			name: 'h5-test',
			path: 'http://g.tbcdn.cn/trip/h5-test/0.3.4/'
		}]
	});

	describe('测试 Loader 基本功能', function() {

		it('抓取线上带模块名的 cjs 模块',function(done){

			S.config({
				packages:[
					{
						name:"m",
						path: 'http://g.alicdn.com/kissy/m/0.3.11/'
					}
				],
				modules:{
					'base':{
						alias:['m/base']
					},
				}
			});

			S.use('h5-test/pages/search/index',function(S,Search){

				(Search instanceof Function).should.equal(true);

				done();
			});
			
		});

		it('cjs 模块的 mudule.exports 传参和简单多脚本依赖',function(done){

			S.use('test/loader/exports/index',function(S,Export){
				Export.A.should.equal('A is ok');
				Export.B.should.equal('B & C is ok');

				done();
			});
			
		});

		it('cjs 模块的 return 传参和简单多脚本依赖',function(done){

			S.use('test/loader/passing-param/index',function(S,Export){
				Export.A.should.equal('A is ok');
				Export.B.should.equal('B & C is ok');

				done();
			});
			
		});

		it('kmd 模块的 return 传参和简单多脚本依赖',function(done){

			S.use('test/loader/requires/index',function(S,Export){
				Export.A.should.equal('A is ok');
				Export.B.should.equal('B & C is ok');

				done();
			});
			
		});

		it('KISSY.add 带名称的三种特殊写法',function(done){

			S.use('test/loader/requirejs-style/index',function(S,Export){
				Export.A.should.equal('A is ok');
				Export.B.should.equal('B is ok');
				Export.C.should.equal('C is ok');
				Export.D.should.equal('D is ok');

				done();
			});
		});

		it('KISSY.add 写立即执行的模块，用 use （异步）调用',function(done){

			S.add('custom-mod-a',function(S){
				return 'ok';
			});

			S.use('custom-mod-a',function(S,ModA){
				ModA.should.equal('ok');
				done();
			});
			
		});

		it('KISSY.add 写立即执行的模块，用 require （同步）调用',function(done){

			S.add('custom-mod-b',function(S){
				return 'ok';
			});

			S.require('custom-mod-b').should.equal('ok');
			done();
			
		});

		it('载入 CSS', function(done){
			S.use('test/loader/load-css/index',function(S){

				S.Node('<div id="test"></div>').appendTo(S.one('body'));
				S.one('#test').css('color').should.equal('rgb(255, 255, 255)');
				done();

			});
		});

		it('use 不带 group 载入模块', function(done){

			S.use('./loader/no-group/a',function(S,A){
				A.should.equal('A is ok');
				done();
			});
		});


		it('模块 alias',function(done){

			S.config({
				modules:{
					'alias-a':{
						alias:['./loader/alias/a']
					}
				}
			});

			S.use('alias-a',function(S,A){
				A.ok.should.equal('A is ok');
				done();
			});
			
		});

		it('同时 use 多个模块',function(done){

			S.use('./loader/no-group/a,./loader/no-group/b',function(S,A,B){
				A.should.equal('A is ok');
				B.should.equal('B is ok');
				done();
			});
			
		});

		it('同一个模块 use 多次，去冗余',function(done){
			// Use 多次，只有第一次起作用
			S.use('./loader/reload/a',function(S,A){
				S.use('./loader/reload/a',function(S,a){
					A.should.equal(1);
					a.should.equal(1);
					done();
				});
			});
		});

		// USE 和 Require 混用也是一样，只有第一次引用会 attach 模块内容
		it('同一个模块 require 多次，去冗余',function(done){
			// require 多次，只有第一次起作用
			S.use('./loader/reload/a',function(S){
				var A = S.require('./loader/reload/a');
				var a = S.require('./loader/reload/a');
				A.should.equal(1);
				a.should.equal(1);
				done();
			});
		});

		// require 和 use 的区别
		it('S.use 用来异步加载需要 attached 模块，不涉及网络 IO',function(done){
		
			S.add('my-mod-a',function(S){
				window.__my_mod_a = 1;
			});
			S.use('my-mod-a');
			expect(typeof window.__my_mod_a).to.eql('undefined');
			setTimeout(function(){
				window.__my_mod_a.should.equal(1);
				done();
			},300);

		});

		it('S.require 用来同步加载模块，不涉及网络 IO，用来载入已经 attached 的模块',function(done){
		
			S.add('my-mod-b',function(S){
				window.__my_mod_b = 1;
			});
			S.require('my-mod-b');
			expect(typeof window.__my_mod_b).to.eql('number');
			window.__my_mod_b.should.equal(1);
			done();

		});

	});




})(KISSY);
