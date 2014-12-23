KISSY.add('m/slide',function(S, Node){
    var $ = Node.all;

    function OfSlide(mod) {
        var el = mod.getElementsByClassName('ws-flipsnap')[0],
            nav = mod.getElementsByClassName('ws-nav')[0],
            instance = Flipsnap(el, {
                distance: $(mod).width(),
                transitionDuration: 350
            }),
            count = instance.maxPoint,
            moving = false,
            INTERVAL = 3000;
            
        function autoMove() {
            if(moving) {
                setTimeout(autoMove, INTERVAL);
                return;
            }
            if(instance.hasNext()) {
                instance.toNext();
            }
            else {
                instance.moveToPoint(0);
            }
            setTimeout(autoMove, INTERVAL);
        }
        instance.element.addEventListener('fspointmove', function(){
            var index = instance.currentPoint;
            $(nav.children).removeClass("ws-selected");
            $(nav.children[index]).addClass("ws-selected");
        });
        instance.element.addEventListener('fstouchmove', function(){
            moving = true;
        }, false);
        instance.element.addEventListener('fstouchend', function(){
            setTimeout(function(){ moving = false; }, INTERVAL/2);
        }, false);
        setTimeout(autoMove, INTERVAL);

    }

    return OfSlide;
}, {
    requires: ["node"]
});
