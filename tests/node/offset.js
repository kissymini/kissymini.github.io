!(function(S, $) {

    describe('traversal', function() {

        var tpl = [
            '<div id="J_Test">',
                '<a href="javascript:void(0);" class="J_TestA" style="position: absolute;top: 50px;left: 100px;"></a>',
                '<a href="javascript:void(0);" class="J_TestA"></a>',
                '<div id="J_TestDiv" style="width:100px; height:100px; overflow:scroll;">',
                    '<p id="J_TestP_1" class="J_TestP" style="width:300px; height:100px;">',
                    '</p>',
                    '<p id="J_TestP_2" class="J_TestP" style="width:300px; height:100px;">',
                    '</p>',
                    '<p id="J_TestP_3" class="J_TestP" style="width:300px; height:100px;">',
                    '</p>',
                '</div>',
            '</div>'
        ].join('');

        var $a,
            $p,
            $div,
            $win;

        beforeEach(function() {
            $('body').append(tpl);
            $a   = $('.J_TestA');
            $p   = $('.J_TestP');
            $div = $('#J_TestDiv');
            $win = $(window);
        });

        afterEach(function() {
            $('#J_Test').remove();
        });

        it('offset', function() {
            expect($('no-exist').offset()).to.equal(undefined);
            expect($a.offset().top).to.equal(50);
            expect($a.offset().left).to.equal(100);

            $a.offset({
                top : 100,
                left: 50
            });

            expect($a.item(0).css('top')).to.equal('100px');
            expect($a.item(0).css('position')).to.equal('absolute');
            expect($a.item(1).css('left')).to.equal('50px');
            expect($a.item(1).css('position')).to.equal('relative');
        });

        it('scrollTop', function() {
            $div.scrollTop(100);
            $div.scrollTop().should.equal(100);
        });

        it('scrollLeft', function() {
            $div.scrollLeft(100);
            $div.scrollLeft().should.equal(100);
        });

    });

})(KISSY, KISSY.all);