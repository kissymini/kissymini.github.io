!(function(S, $) {

    describe('selector', function() {

        var tpl = [
            '<div id="J_Test">',
                '<p id="J_TestP">',
                    '<span class="J_TestSpan">',
                        '<a href="javascript:void(0);"></a>',
                    '</span>',
                    '<span class="J_TestSpan">',
                        '<a href="javascript:void(0);"></a>',
                    '</span>',
                    '<a class="J_TestA" href="javascript:void(0);"></a>',
                    '<em class="J_TestEm"></em>',
                '</p>',
            '</div>'
        ].join('');

        var doc = document,
            $a,
            $p,
            $span;

        beforeEach(function() {
            $('body').append(tpl);
            $a    = $('.J_TestA');
            $p    = $('.J_TestP');
            $span = $('.J_TestSpan');
        });

        afterEach(function() {
            $('#J_Test').remove();
        });

        describe('#query()', function() {

            it('支持ID选择器', function() {
                S.query('#J_TestP', doc)[0].id.should.equal('J_TestP');
                S.query('#J_TestP', doc).length.should.equal(1);
            });

            it('支持类选择器', function() {
                S.query('.J_TestSpan', doc)[0].className.should.equal('J_TestSpan');
                S.query('.J_TestSpan', doc).length.should.equal(2);
            });

            it('支持元素选择器', function() {
                S.query('a', doc.getElementById('J_Test'))[0].nodeName.should.equal('A');
                S.query('a', doc.getElementById('J_Test')).length.should.equal(3);
            });

            it('支持基本选择器 tag.cls', function() {
                S.query('a.J_TestA', doc)[0].nodeName.should.equal('A');
                S.query('a.J_TestA', doc).length.should.equal(1);
            });

            it('支持基本选择器 #id .cls', function() {
                S.query('#J_TestP .J_TestSpan', doc)[0].className.should.equal('J_TestSpan');
                S.query('#J_TestP .J_TestSpan', doc).length.should.equal(2);
            });

            it('支持基本选择器 #id tag', function() {
                S.query('#J_TestP a', doc)[0].nodeName.should.equal('A');
                S.query('#J_TestP a', doc).length.should.equal(3);
            });

            it('支持基本选择器 #id tag.cls', function() {
                S.query('#J_TestP a.J_TestA', doc)[0].nodeName.should.equal('A');
                S.query('#J_TestP a.J_TestA', doc).length.should.equal(1);
            });

            it('当 context === null 时，返回空的 Node 对象', function() {
                S.query('J_TestSelector', null).length.should.equal(0);
                S.Node.isNode(S.query('J_TestSelector', null)).should.equal(true);
            });

            it('当 context === undefined 时，缺省值为 document', function() {
                S.query('#J_TestP')[0].id.should.equal('J_TestP');
                S.query('#J_TestP').length.should.equal(1);
            });

        });

        describe('#all()', function() {

            it('支持文档片段', function() {
                var $node = $('<div><p id="J_TestP"><span></span></p><div>');
                $node.all('#J_TestP').length.should.equal(1);
                $node.all('span').length.should.equal(1);
            });

            it('支持逗号分隔', function() {
                $('.J_TestSpan, .J_TestSpan a', doc).length.should.equal(4);
                $('#J_TestP a, .J_TestSpan a', doc).length.should.equal(3);
                $('a, em', $('#J_TestP, .J_TestSpan')).length.should.equal(4);
            });

            it('支持 Node 集合对象', function() {
                var $p = $('#J_TestP');
                $($p[0].children).length.should.equal(4);
            });

        });

        describe('#one()', function() {

            it('支持文档片段', function() {
                var $node = $('<div><p id="J_TestP"><span id="J_TestSpan"></span></p><p><span></span></p><div>');
                $node.one('p')[0].id.should.equal('J_TestP');
                $node.one('span')[0].id.should.equal('J_TestSpan');
            });

            it('元素不存在时，返回 null', function() {
                expect($p.one('no-exist')).to.equal(null);
            });

            it('当 selector === undefined 时，返回 null', function() {
                expect($p.one()).to.equal(null);
            });

        });

    });

})(KISSY, KISSY.all);