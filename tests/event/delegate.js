/**
 * @module  delegation-spec
 * @author yiminghe@gmail.com
 */

/*
var Dom = require('dom');
var Event = require('event-dom');
var DomEventUtils = Event.Utils;
*/

var tpl = '';

S.IO({
    url: './event/delegate.html',
    async: false,
    success: function (d) {
        tpl = d;
    }
});

beforeEach(function () {
	$('body').prepend(S.Node(tpl));
});

afterEach(function () {
    // Dom.remove('#event-test-data');
	$('#event-test-data').remove();
});

describe("简单事件绑定", function() {
	it('点击事件回调正常触发', function(done) {
		S.Node('<div id="test-click-A"></div>').appendTo(S.one('body'));
		$('#test-click-A').on('click',function(e){
			done();
		});
		$('#test-click-A').fire('click');
	});
	it('双击事件回调正常触发', function(done) {
		S.Node('<div id="test-dbclick"></div>').appendTo(S.one('body'));
		$('#test-dbclick').on('dbclick',function(e){
			done();
		});
		$('#test-dbclick').fire('dbclick');
	});
	it('tap 事件回调正常触发', function(done) {
		S.Node('<div id="test-tap"></div>').appendTo(S.one('body'));
		$('#test-tap').on('tap',function(e){
			done();
		});
		$('#test-tap').fire('tap');
	});
});

describe('delegate中的this指向测试',function(){
	it('delegate 中的this指向测试',function(done){
		var cnt = 0;
		$('#i4').delegate('click', '.inner', function (e) {
			cnt ++;
			var target = e.target, currentTarget = e.currentTarget;
			expect(this.id).to.eql(currentTarget.id);
			expect(target.id).to.eql('click_button');
			/*
			$('#log').prepend("<div style='margin:5px;'>invoked : <br/> this.id=" + this.id + "<br/>event.target.id=" +
				target.id + "<br>event.currentTarget.id=" + currentTarget.id + "</div>");
				*/
		});
		$('#click_button').fire('click');
		expect(cnt).to.eql(2);//触发两次
		done();
	});
	
});

describe('delegate 基本行为', function () {

    it('should stop propagation correctly', function (done) {
        var ret = [];

        function test(e) {
            ret.push(e.target.id);
            ret.push(e.currentTarget.id);
            ret.push(this.id);
            e.stopPropagation();
        }

        S.Event.delegate('#test-delegate', 'click', '.xx', test);
        var b = $('#test-delegate-b');
        // support native dom event
        // simulateEvent(b.getDOMNode(), 'click');
		b.fire('click');
        async.series([
            waits(10),
            runs(function () {
                expect(ret + '').to.eql([b.attr('id'),
                    'test-delegate-inner',
                    'test-delegate-inner'
                ] + '');
            }),
            waits(10),
            runs(function () {
                expect(ret + '').to.eql([b.attr('id'),
                    'test-delegate-inner',
                    'test-delegate-inner'
                ] + '');
            }),
            runs(function () {
                S.Event.undelegate('#test-delegate', 'click', '.xx', test);
                ret = [];
                // support simulated event
                S.Event.fire(b, 'click');
				// simulateEvent(b.getDOMNode(), 'click');
            }),
            waits(10),
            runs(function () {
                expect(ret + '').to.eql([] + '');
            })
        ], done);
    });

    it('should prevent default correctly', function (done) {
        var ret = [];

        function test(e) {
            ret.push(e.target.id);
            ret.push(e.currentTarget.id);
            ret.push(this.id);
        }

        S.Event.delegate('#test-delegate', 'click', '.xx', test);
        var b = $('#test-delegate-b');
        // support native dom event

        simulateEvent(b.getDOMNode(), 'click');

        setTimeout(function () {
            expect(ret).to.eql([b.attr('id'),
                'test-delegate-inner',
                'test-delegate-inner',
                b.attr('id'),
                'test-delegate-outer',
                'test-delegate-outer'
            ]);
            done();
        }, 10);
    });
});
describe('delegate 和 on 混用情况下undelegate的正确性',function(){
    it('on和delegate混用时的undelegate的正确性', function (done) {
        var d = $('<div><button>xxxx</button></div>');
        document.body.appendChild(d.getDOMNode());
        var ret = [];

		function t(e) {
			ret.push(1);
		}

        async.series([
			waits(400),
			runs(function(){
				// 事件绑定的逻辑做了简化，事件冒泡顺序不再作强约定由内而外，而是根据绑定顺序来判断
				S.Event.on(d, 'click', function () {
					ret.push(9);
				});
				S.Event.delegate(d, 'click', 'button', t);
			}),
			waits(10),
			runs(function(){
				d.one('button').fire('click');
			}),
            waits(10),
            runs(function () {
                expect(ret).to.eql([9, 1]);
                ret = [];
            }),
            runs(function () {
                S.Event.undelegate(d, 'click', 'button', t);
                simulateEvent(d.one('button').getDOMNode(), 'click');
            }),
            waits(10),
            runs(function () {
                expect(ret).to.eql([9]);
            }),
            runs(function () {
                ret = [];
                S.Event.delegate(d, 'click', 'button', t);
                S.Event.undelegate(d, 'click', 'button');
                simulateEvent(d.one('button').getDOMNode(), 'click');
            }),
			waits(10),
            runs(function () {
                ret = [];
                S.Event.delegate(d, 'click', 'button', t);
                S.Event.undelegate(d, 'click');
                // simulateEvent(d.getDOMNode(), 'click');
				d.one('button').fire('click');
            }),
            waits(10),
            runs(function () {
                expect(ret).to.eql([9]);
            })
        ], done);
    });
	
});

