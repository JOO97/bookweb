<?php
    //php数组
    $array =array(1,2,3);
    print_r($array);
    echo '<br/>';
    $array2=array("name"=>'m',"age"=>"111","gender"=>'F');
    print_r($array2);
    echo($array2['name']);
    echo($array2['age']);
    echo($array2['gender']);


//    header("Content-type:text/html;charset=utf-8");
//$phone=$_POST['phone'];
//$psw=$_POST['password'];
//    //1 创建数据库对象 (主机地址,用户名,密码,数据库名,数据库端口号)
//    $sqlObj=new mysqli("127.0.0.1","root","root","CH191203","3306");
//    //监测数据库连接是否成功
////    if($sqlObj->connect_errno!=0){
////        echo "连接失败";
////    } else {
////        echo "连接成功";
////    }
//    //
////2.监测数据库连接是否成功
//   if(!$sqlObj){
//       echo "连接失败";
//   } else{
//       //连接成功
//       //3.声明sql语句
//       $sql ='SELECT * FROM bookWeb_user WHERE bookWeb_user_phone='.$phone.' AND bookWeb_user_psw='.$psw.';';
//       //4.sql对象运行sql语句
//       $result=$sqlObj->query($sql);
//       //fetch_assoc()解析单条数据
//       $info=$result->fetch_assoc();
//       if($info){
////           var_dump($info);
//           echo "登录成功";
//       } else{
//           echo "账号或密码错误";
//       }
//   }
//header("content-type:text/html; charset=utf-8");
//var_dump($_POST['phone']);
//var_dump($_POST['password']);
//if($_POST['phone']==111&&$_POST['password']==111){
//    echo '登录成功';
//} else{
//    echo '输入的手机号或密码有误';
//}
//print_r($_POST['phone']);
//print_r($_POST['password']);
//print_r($_GET);
//方法一：
//$num=floor($_GET['score']/10);
//if($_GET['score']<0||$_GET['score']>100){
//    echo '输入有误';
//} else{
//    switch ($num){
//        case 10:
//        case 9:
//            echo '等级为:优';
//            break;
//        case 8:
//            echo '等级为:良';
//            break;
//        case 7:
//            echo '等级为:中';
//            break;
//        case 6:
//            echo '等级为:及格';
//            break;
//        default: echo '等级为:不及格';
//
//    }
//}


//方法二
//switch (true){
//    case $_GET['score']<=100&&$_GET['score']>=90:
//        echo "优";
//        break;
//    case $_GET['score']>=80&&$_GET['score']<90:
//        echo "良";
//        break;
//    case $_GET['score']>=70&&$_GET['score']<80:
//        echo "中";
//        break;
//    case $_GET['score']>=60&&$_GET['score']<70:
//        echo "及格";
//        break;
//    case $_GET['score']>=0&&$_GET['score']<60:
//        echo "不及格";
//        break;
//    default:echo '输入有误';
//}



//echo $_GET;
//if($_GET['score']<60&&$_GET>0){
//    echo '不及格';
//} else if($_GET['score']<100){
//    echo '及格';
//}
//echo '<br/>';
//echo floor(95/10);

//<!--<!doctype html>-->
//<!--<html lang="en">-->
//<!--<head>-->
//<!--    <meta charset="UTF-8">-->
//<!--    <meta name="viewport"-->
//<!--          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">-->
//<!--    <meta http-equiv="X-UA-Compatible" content="ie=edge">-->
//<!--    <title>Document</title>-->
//<!--</head>-->
//<!--<body>-->
////$num=1;
//echo $num;
//echo '<br/>';
//$num1=1;
//$num2='2';
//echo $num1+$num2;
//echo '<br/>';
////字符串拼接
//echo $num1.$num2;
//echo '<br/>';
//for($i=1;$i<=100;$i++){
//    echo $i.' ';
//    if($i%10==0){
//        echo '<br/>';
//    }
//}
?>
