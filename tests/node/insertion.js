!(function(S, $) {

    describe('insertion', function() {

        var tpl = [
            '<div id="J_Test">',
                '<p id="J_TestP_1" class="J_TestP">',
                    '<span id="J_TestSpan_1" class="J_TestSpan">',
                        '<a href="javascript:void(0);" class="J_TestA"></a>',
                    '</span>',
                    '<span id="J_TestSpan_2" class="J_TestSpan">',
                        '<a href="javascript:void(0);" class="J_TestA"></a>',
                    '</span>',
                    '<span id="J_TestSpan_3" class="J_TestSpan">',
                        '<a href="javascript:void(0);" class="J_TestA"></a>',
                    '</span>',
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
            '</div>'
        ].join('');

        var $a,
            $p,
            $p3,
            $span;

        beforeEach(function() {
            $('body').append(tpl);
            $a    = $('.J_TestA');
            $p    = $('.J_TestP');
            $p3   = $('#J_TestP_3');
            $span = $('.J_TestSpan');
        });

        afterEach(function() {
            $('#J_Test').remove();
        });

        describe('#append()', function() {

            it('支持字符类型', function() {
                $p3.append('Hello, world.');
                $p3.html().should.equal('Hello, world.');
            });

            it('支持数字类型', function() {
                $p3.append(1);
                $p3.html().should.equal('1');
            });

            it('支持 Node 类型', function() {
                $p3.append($a);
                $p3.children().length.should.equal($a.length);
            });

        });

        it('wrapAll', function() {
            $span.wrapAll('<div id="J_TestDiv"></div>');
            $('#J_TestDiv').children().length.should.equal(8);
            $('#J_TestDiv').children().item(0)[0].id.should.equal('J_TestSpan_1');
        });

        it('wrap', function() {
            $a.wrap('<em class="J_TestEm"></em>');
            $('.J_TestEm').length.should.equal(8);
            $('.J_TestEm').item(0).parent()[0].id.should.equal('J_TestSpan_1')
        });

        it('unwrap', function() {
            $a.unwrap();
            $a.parent()[0].id.should.equal('J_TestP_1');
            $('.J_TestSpan').length.should.equal(0);
        });

        it('wrapInner', function() {
            $p.wrapInner('<p class="J_TestPWrap"></p>');
            $('.J_TestPWrap').parent()[0].id.should.equal('J_TestP_1');
            $('.J_TestPWrap').children()[0].id.should.equal('J_TestSpan_1');
            $('.J_TestPWrap').item(2).children().length.should.equal(0);
        });

        it('replaceWith', function() {
            $a.replaceWith('<em class="J_TestEm"></em>');
            $('.J_TestEm').length.should.equal(8);
            $('.J_TestA').length.should.equal(0);
        });
    });

})(KISSY, KISSY.all);