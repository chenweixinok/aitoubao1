<?php
header('Content-type:text/html; charset="utf-8"');
$url = "http://ai.taobao.com/rpc/getBrandWallList/json.htm?_tb_token_=6ZZFWKqKqup&__ajax__=1&pid=mm_12811289_2424861_25696240&unid=&clk1=";
$content = file_get_contents($url);
echo $content;

?>