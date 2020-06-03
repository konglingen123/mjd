<?php
include("./config.php");
$phone = $_POST['phone'];

$sql = "select * from user where phone='$phone'";

$res = mysql_query($sql);
if ($res) {
    // 插入成功
    // code是后端自定义的，我们这里定义1成功，0失败
    echo json_encode(array(
	"code" => 0,
	"msg" => "该手机号码已经注册，请换其他手机号码"
       
    ));
} else {
    echo json_encode(array(
      "code" => 1,
      "msg" => "该手机号码未注册，可以进行注册"
    ));
}
?>