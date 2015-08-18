!(function(S, $) {

    describe('traversal', function() {

        var tpl = [
            '<div id="J_Test">',
                '<div id="J_TestDiv">',
                    '<p id="J_TestP_1" class="J_TestP">',
                        '<span id="J_TestSpan_1" class="J_TestSpan">',
                            '<a href="javascript:void(0);" class="J_TestA"></a>',
                        '</span>',
                        '测试文本',
                        '<span id="J_TestSpan_2" class="J_TestSpan">',
                            '<a href="javascript:void(0);" class="J_TestA"></a>',
                        '</span>',
                        '<span id="J_TestSpan_3" class="J_TestSpan">',
                            '<a href="javascript:void(0);" class="J_TestA"></a>',
                        '</span>',
                        '测试文本',
                        '<span id="J_TestSpan_4" class="J_TestSpan">',
                            '<a href="javascript:void(0);" class="J_TestA"></a>',
                        '</span>',
                    '</p>',
                    '<p id="J_TestP_2" class="J_TestP">',
                        '<span id="J_TestSpan_5" class="J_TestSpan">',
                            '<a href="javascript:void(0);" class="J_TestA"></a>',
                        '</span>',
                        '<span id="J_TestSpan_6" class="J_TestSpan">',
                            '<a href="javascript:void(0);" class="J_TestA"></a>',
                        '</span>',
                        '<span id="J_TestSpan_7" class="J_TestSpan">',
                            '<a href="javascript:void(0);" class="J_TestA"></a>',
                        '</span>',
                        '<span id="J_TestSpan_8" class="J_TestSpan">',
                            '<a href="javascript:void(0);" class="J_TestA"></a>',
                        '</span>',
                    '</p>',
                    '<p id="J_TestP_3" class="J_TestP"></p>',
                '</div>',
            '</div>'
        ].join('');

        var $a,
            $p,
            $div,
            $span,
            $span1,
            $span8;

        beforeEach(function() {
            $('body').append(tpl);
            $a     = $('.J_TestA');
            $p     = $('.J_TestP');
            $div   = $('#J_TestDiv');
            $span  = $('.J_TestSpan');
            $span1 = $('#J_TestSpan_1');
            $span8 = $('#J_TestSpan_8');
        });

        afterEach(function() {
            $('#J_Test').remove();
        });

        describe('#item()', function() {

            it('获取元素正常', function() {
                $p.item(0)[0].id.should.equal('J_TestP_1');
            });

            it('元素不存在时，返回 null', function() {
                expect($p.item(100)).to.equal(null);
            });

        });

        it('first', function() {
            $p.first()[0].id.should.equal('J_TestSpan_1');
            $p.first('#J_TestSpan_4')[0].id.should.equal('J_TestSpan_4');

            expect($p.first('no-exist')).to.equal(null);
        });

        it('last', function() {
            $p.last()[0].id.should.equal('J_TestSpan_4');
            $p.last('#J_TestSpan_1')[0].id.should.equal('J_TestSpan_1');

            expect($p.last('no-exist')).to.equal(null);
        });

        it('parent', function() {
            $a.parent().length.should.equal(1);
            $a.parent()[0].id.should.equal('J_TestSpan_1');

            $a.parent('p').length.should.equal(1);
            $a.parent('p')[0].id.should.equal('J_TestP_1');

            $a.parent('.J_TestSpan').length.should.equal(1);
            $a.parent('.J_TestSpan')[0].id.should.equal('J_TestSpan_1');

            $a.parent('p.J_TestP span').length.should.equal(1);
            $a.parent('p.J_TestP span')[0].id.should.equal('J_TestSpan_1');

            $a.parent([]).length.should.equal(6);
            $a.parent(['div']).length.should.equal(2);
            $a.parent(['div', 'p']).length.should.equal(3);
            $a.parent(['div', '#J_TestDiv']).length.should.equal(2);

            $('body').parent().length.should.equal(1);
            $('body').parent()[0].should.equal(document.documentElement);

            expect($a.parent('no-exist')).to.equal(null);
        });

        it('next', function() {
            $span1.next().length.should.equal(1);
            $span1.next()[0].id.should.equal('J_TestSpan_2');

            $span1.next('#J_TestSpan_4').length.should.equal(1);
            $span1.next('#J_TestSpan_4')[0].id.should.equal('J_TestSpan_4');

            expect($span1.next('no-exist')).to.equal(null);
        });

        it('prev', function() {
            $span8.prev().length.should.equal(1);
            $span8.prev()[0].id.should.equal('J_TestSpan_7');

            $span8.prev('#J_TestSpan_5').length.should.equal(1);
            $span8.prev('#J_TestSpan_5')[0].id.should.equal('J_TestSpan_5');

            expect($span8.prev('no-exist')).to.equal(null);
        });

        it('children', function() {
            $p.children().length.should.equal(4);
            $p.item(2).children().length.should.equal(0);
        });

        it('siblings', function() {
            $span.siblings().length.should.equal(3);
            $div.siblings().length.should.equal(0);
        });

        it('contents', function() {
            $p.contents().length.should.equal(6);
            $p.item(2).contents().length.should.equal(0);
        });

        it('contains', function() {
            $p.contains($p).should.equal(false);
            $p.contains($span).should.equal(true);
            $p.contains($span[4]).should.equal(false);
            $p.contains().should.equal(false);
        });
    });

})(KISSY, KISSY.all);