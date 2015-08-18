<?php

sleep(2);
echo $_REQUEST['callback'] . '(';

$str = "";

for($i=0;$i<5;$i++) {
    $color = rand(0,9) . rand(0,9) . rand(0,9);

    $tpl = <<<EEE
<a href="#" class="ws-wrap">
    <i class="thumb"><img src="http://img.la/{$color}/48x48" alt=""></i>
    <p class="title">折扣券满300减100</p>
    <p class="despt">限时5天 全场疯抢不限重</p>
    <i class="leftarrow"></i>
</a>
EEE;

    $str .= $tpl;
}


$ret = array(
    'status' => 1,
    'success' => 1,
    'data' => array(
        'isend' => false,
        'html' => $str
    )
);

echo json_encode($ret);

echo ')';
?>