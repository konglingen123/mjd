<?php
include("./config.php");
$phone = $_POST['phone'];
$pwd = $_POST['pwd'];

$sql = "insert into user (phone,pwd) values ('$phone','$pwd')";

$res = mysql_query($sql);
if ($res) {
    // 插入成功
    // code是后端自定义的，我们这里定义1成功，0失败
    echo json_encode(array(
        "code" => 1,
         "msg" => "注册成功"
    ));
} else {
    echo json_encode(array(
        "code" => 0,
       "msg" => "网络错误，请重试"
    ));
}
?>