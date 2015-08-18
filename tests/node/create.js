!(function(S, $) {

    describe('create', function() {

        var tpl = [
            '<div id="J_Test">',
                '<div id="J_TestDiv">',
                    '<p id="J_TestP_1" class="J_TestP"></p>',
                    '<p id="J_TestP_2" class="J_TestP"></p>',
                    '<p id="J_TestP_3" class="J_TestP"></p>',
                '</div>',
            '</div>'
        ].join('');

        var $p,
            $div;

        beforeEach(function() {
            $('body').append(tpl);
            $p   = $('.J_TestP');
            $div = $('#J_TestDiv');
        });

        afterEach(function() {
            $('#J_Test').remove();
        });

        it('create', function() {
            S.node.create().length.should.equal(0);
            S.node.create('').length.should.equal(0);
        });

        it('html', function() {
            $div.html('<p>Hello, world.</p><script>window.Global = 1;</script>');
			expect(window.Global).to.eql(1);
            $div.html().should.equal('<p>Hello, world.</p>');
            $div.html(undefined).should.equal('<p>Hello, world.</p>');
        });

        it('clone', function() {
            $('.J_TestP', $div.clone()).length.should.equal(0);
            $('.J_TestP', $div.clone(true)).length.should.equal(3);
        });

    });

})(KISSY, KISSY.all);
