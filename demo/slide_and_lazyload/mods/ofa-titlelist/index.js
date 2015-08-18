KISSY.add(function(S, Node, IO, Event){
    var $ = S.Node.all;

    function OfaTitleList(mod) {
        mod = $(mod);
        var props = mod.attr('data-config');
        try {
            props = JSON.parse(props);
        }
        catch(err) {
            props = null;
        }
        if(!props || !props.ajax) return;

        var offset,
            body = $('body'),
            moreTip = $('<p class="loading-tip">点击加载更多</p>');

        moreTip.appendTo(mod);

        moreTip.on('click', function(){
            moreTip.text('正在很努力地加载中...');
            IO({
                type:"get",
                url: props.url,
                success: function(data){
                    if(data && data.success && data.data.html) {
                        mod.append(data.data.html);
                        moreTip.hide();
                    }
                    else {
                        moreTip.text('暂时没有更多优惠券了哦');
                    }
                },
                error: function(){
                    moreTip.text('系统出了点小差错，请稍后再试');
                },
                dataType: "jsonp"
            });

        });
    }

    OfaTitleList.cselector = "ofa-titlelist";
    return OfaTitleList;
}, {
    requires: ["node", "io", "event"]
});
