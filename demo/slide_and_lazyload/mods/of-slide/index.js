KISSY.add(function(S, Node){
    var $ = Node.all;

    function OfSlide(mod) {
        var el = mod.getElementsByClassName('ws-flipsnap')[0],
            nav = mod.getElementsByClassName('ws-nav')[0],
            instance = Flipsnap(el, {
                distance: $(el).width(),
                transitionDuration: 350
            }),
            count = instance.maxPoint,
            moving = false,
            INTERVAL = 3000,
            timer1, timer2;
            
        function autoMove() {
            if(moving) {
                setTimeout(autoMove, INTERVAL);
                return;
            }
            loop();
            setTimeout(autoMove, INTERVAL);
        }

        function loop() {
            if(instance.hasNext()) {
                instance.toNext();
            }
            else {
                instance.moveToPoint(0);
            }
        }

        instance.element.addEventListener('fspointmove', function(){
            var index = instance.currentPoint;
            $(nav.children).removeClass("ws-selected");
            $(nav.children[index]).addClass("ws-selected");
        });
        instance.element.addEventListener('fstouchmove', function(){
            moving = true;
            // timer 用于改善「粘住」的问题
            clearTimeout(timer1);
            clearTimeout(timer2);
            timer1 = setTimeout(function(){
                loop();
            }, 500);
            timer2 = setTimeout(function(){
                moving = false;
            }, INTERVAL/2);
        }, false);
        instance.element.addEventListener('fstouchend', function(){
            clearTimeout(timer1);
        }, false);
        setTimeout(autoMove, INTERVAL);
    }

    OfSlide.cselector = "of-slide";
    return OfSlide;
}, {
    requires: ["node"]
});