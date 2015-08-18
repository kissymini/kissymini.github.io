<?php
sleep(1);
$callback = $_GET["callback"];

echo $callback.'({
        "result": true,
        "data": "jsonp1 data"
})';

?>
