KISSY.add('m/ringnav', function (S, Node, Base) {
    var EMPTY = '';
    var $ = Node.all;
	var PI = Math.PI;
	var ONE = PI / 180;

    function RingNavi(cfg) {
        var self = this;
        //调用父类构造函数
		if ( !(this instanceof RingNavi) ) {
			return new RingNavi(cfg);
		}
		self.trigger = S.one(cfg.trigger);
		self.items = self.trigger.all(cfg.items ? cfg.items : ".navitem");
		self.displayArea = cfg.displayArea || {"from": 180, "to": 270};
		self.expandWay = cfg.expandWay;
		self.expanded = cfg.expanded;
		self.easing = cfg.easing || "easeIn";
		self.toggle = cfg.toggle;
		self.radius = cfg.radius || 200;
		self.speed = cfg.speed || 0.2;
		self.delay = cfg.delay || 150;
		self.exStatus = false;
		self.timer = [];
		self.init();
        RingNavi.superclass.constructor.call(self, cfg);
    }

    S.extend(RingNavi, Base, /** @lends RingNavi.prototype*/{
		init: function() {
			var self = this;
			if ( self.expanded ) {
				self._setExpand();
			} else {
				self._setFold();
			}
			self._bindEvent();
		},
		_setExpand: function() {
			var self = this;
			var len = self.items.length;
			var step = ( self.displayArea.to - self.displayArea.from ) / (len - 1);
			var timer = 0;
			if ( self.expandWay === "stepByStep" ) {
				timer = self.delay;
			}
			self.exStatus = true;
			self.items.each(function(node, index){
				node.css("display", "block");

				var left = self.radius * Math.cos( (self.displayArea.from + index * step) * ONE );
				left = left > 0 ? Math.floor(left) : Math.ceil(left);
				var top = -self.radius * Math.sin( (self.displayArea.from + index * step) * ONE );
				top = top > 0 ? Math.floor(top) : Math.ceil(top);

				node.animate({
					"opacity": 1,
					"left": left,
					"top": top
				}, self.speed, self.easing, function(){});
			});
		},
		_setFold: function() {
			var self = this;
			self.exStatus = false;
			self.items.each(function(node, index){
				node.animate({
					"opacity": 0,
					"left": 0,
					"top": 0
				}, self.speed, self.easing, function(){
					node.css("display", "none");
				});
			});
		},
		_bindEvent: function() {
			var self = this;
			self.trigger.on("click", function(e){
				if ( self.toggle ) {
					if ( self.exStatus ) {
						self._setFold();
					} else {
						self._setExpand();
					}
				} else {
					self._setExpand();
				}
				e.preventDefault();
			});
		}
    }, {ATTRS : /** @lends RingNavi*/{

    }});
    return RingNavi;
}, {requires:['node', 'base', 'anim']});



