!(function(S, $) {

    describe('attr', function() {

        var tpl = [
            '<div id="J_Test">',
                '<a href="javascript:void(0);" style="border: 1px solid #DDD;background: #F7F7F7;"></a>',
                '<div id="J_TestDiv"></div>',
                '<input type="text" id="J_TestInput" readonly value="test-input-value" />',
                '<input type="radio" id="J_TestRadio" />',
                '<input type="radio" id="J_TestRadio_2" checked />',
                '<input type="checkbox" id="J_TestCheckbox" />',
                '<input type="checkbox" id="J_TestCheckbox_2" checked="checked" />',
                '<textarea id="J_TestTextarea">test-textarea-value</textarea>',
                '<select id="J_TestSelect">',
                    '<option>1</option>',
                    '<option>2</option>',
                    '<option>3</option>',
                '</select>',
                '<select id="J_TestSelect_2" multiple>',
                    '<option>1</option>',
                    '<option>2</option>',
                    '<option>3</option>',
                '</select>',
            '</div>'
        ].join('');

        var $a,
            $div,
            $input,
            $radio,
            $radio2,
            $checkbox,
            $checkbox2,
            $textarea,
            $select,
            $select2;

        beforeEach(function() {
            $('body').append(tpl);
            $a         = $('#J_Test a');
            $div       = $('#J_TestDiv');
            $input     = $('#J_TestInput');
            $radio     = $('#J_TestRadio');
            $radio2    = $('#J_TestRadio_2');
            $checkbox  = $('#J_TestCheckbox');
            $checkbox2 = $('#J_TestCheckbox_2');
            $textarea  = $('#J_TestTextarea');
            $select    = $('#J_TestSelect');
            $select2   = $('#J_TestSelect_2');
        });

        afterEach(function() {
            $('#J_Test').remove();
        });

        describe('#attr()', function() {

            it('支持 radio 标签', function() {
                expect($radio.attr('radio')).to.equal(undefined);
            });

            it('支持 style 属性', function() {
                $a.attr('style').should.be.a('string')
            });

            it('支持 readonly 属性', function() {
                $input.attr('readonly').should.equal('readonly');
            });

            it('支持 placeholder 属性', function() {
                $input.attr('placeholder', 'test-placeholder-value');
                $input.attr('placeholder').should.equal('test-placeholder-value');
                $input.attr('placeholder', '');
                $input.attr('placeholder').should.equal('');
            });

            it('属性不存在时，返回 undefined', function() {
                expect($input.attr('no-exist')).to.equal(undefined);
            });

        });

        describe('#val()', function() {

            it('支持 input 标签', function() {
                $input.val().should.equal('test-input-value');
            });

            it('支持 textarea 标签', function() {
                $textarea.val().should.equal('test-textarea-value');
            });

            it('支持 radio 标签', function() {
                // $radio.val().should.equal('on');
                // $radio2.val().should.equal('on');
            });

            it('支持 select 标签', function() {
                $select.val('3');
                $select.val().should.equal('3');
                $select2.val(['1', '3']);
                $select2.val().should.be.eql(['1', '3']);
            });

        });

        it('text', function() {
            $div.text('test-div-value');
            $div.text().should.equal('test-div-value');
            $div.html('<p>test</p><p>-div-</p><p>value</p>');
            $div.text().should.equal('test-div-value');
            $div.text(undefined).should.equal('test-div-value');
        });

        describe('#prop()', function() {

            it('设值正常', function() {
                $checkbox.prop('checked', true);
                $checkbox.prop('checked').should.be.true;
            });

            it('取值正常', function() {
                $checkbox2.prop('checked').should.be.true;
                expect($checkbox2.prop('no-exist')).to.equal(undefined);
                $checkbox2.hasProp('checked').should.be.true;
                $checkbox2.hasProp('no-exist').should.be.false;
            });

        });

    });

})(KISSY, KISSY.all);