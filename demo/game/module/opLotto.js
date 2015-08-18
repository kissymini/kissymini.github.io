KISSY.add(function(S){
	var $ = S.all;

	var opLotto = {
		init: function(){
			this.imgList = $('.img-list').all('li');
			this.length = this.imgList.length;
			this.startIndex = 0;
		},
		_run: function(index){
			var next = index + 1 === this.length ? 0 : index + 1;
			this.imgList.removeClass('active');
			this.imgList.item(next).addClass('active');
			this.startIndex = next;
		},
		start: function(){
			var self = this;
			self.timer = setInterval(function(){
				self._run(self.startIndex);
			}, 50);
		},
		pause: function(){
			this.timer && clearInterval(this.timer);
			this._animate(this.startIndex);
		},
		_animate: function(index) {
			var self = this;
			var selectedItem = self.imgList.item(index);
			var offsetTop = selectedItem.css('top');
			var offsetLeft = selectedItem.css('left');
			var cloneItem = selectedItem.one('img').clone().appendTo('.content');
			cloneItem.css({
				'width': '100px',
				'height': '100px',
				'position': 'absolute',
				'top': offsetTop,
				'left': offsetLeft,
				'border-radius': '50px'
			}).animate({
				'top': parseInt(offsetTop, 10) - 50
			}, 0.2, 'easeOut').animate({
				'top': 200,
				'left': 200,
				'opacity': 0
			}, 1, 'bounceOut', function() {
				cloneItem.remove();
				self._print(index);
			});
		},
		_print: function(index){
        var src = './assets/images/' + index + index + '.jpg';
				$('.detail').html('<img src="' + src + '" />').animate({
          'display': 'block',
          'opacity': 1
        });
		}
	};

	return opLotto;

}, {requires: ['anim']});