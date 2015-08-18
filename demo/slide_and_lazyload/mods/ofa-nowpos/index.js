KISSY.add(function(S, Node){
    var $ = Node.all;

    function OfaNowPos(mod) {
        var select = $(mod).one('select'),
            name = select.attr('name');
        select.on('change', function(ev){
           location.replace(select.val());
        });
    }

    OfaNowPos.cselector = "ofa-nowpos";
    return OfaNowPos;
}, {
    requires: ["node"]
});