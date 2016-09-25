<?php
header('Content-type:text/html; charset="utf-8"');
$url = "http://ai.taobao.com/rpc/get_index_cheaps.json?_tb_token_=jJYSXBpJWhCA&__ajax__=1&pid=mm_12811289_2424861_25696240&unid=&clk1=&pvid=200_10.103.29.191_256_1473385031518";
$content = file_get_contents($url);
echo $content;

?>