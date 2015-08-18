!(function(S, $) {

    describe('class', function() {

        var tpl = [
            '<div id="J_Test">',
            '<a href="javascript:void(0);"></a>',
            '</div>'
        ].join('');

        var $a;

        beforeEach(function() {
            $('body').append(tpl);
            $a = $('#J_Test a');
        });

        afterEach(function() {
            $('#J_Test').remove();
        });

        it('addClass', function() {
            $a.addClass('link');
            $a.hasClass('link').should.be.true;
            $a.addClass('.link2 link3');
            $a.hasClass('link2').should.be.true;
            $a.hasClass('link3').should.be.true;
        });

        it('removeClass', function() {
            $a.addClass('link link2 link3 link4 link5');
            $a.removeClass('link');
            $a.hasClass('link').should.be.false;
            $a.removeClass('link2 link4');
            $a.removeClass('link3');
            $a[0].className.should.equal('link5');
        });

        it('toggleClass', function() {
            $a.addClass('link link2');
            $a.toggleClass('link2');
            $a.hasClass('link2').should.be.false;
            $a.toggleClass('.link2');
            $a.hasClass('link2').should.be.true;
            $a.toggleClass('.link2', true);
            $a.hasClass('link2').should.be.true;
            $a.toggleClass('.link2', false);
            $a.hasClass('link2').should.be.false;
        });

        it('hasClass', function() {
            $a.addClass('link link2');
            $a.hasClass('link').should.be.true;
            $a.hasClass('.link').should.be.true;
            $a.hasClass('link3').should.be.false;
            $a.hasClass('link link2').should.be.true;
            $a.hasClass('.link .link2').should.be.true;
            $a.hasClass('link link3').should.be.false;
            $a.hasClass('.link .link3').should.be.false;
        });

    });

})(KISSY, KISSY.all);