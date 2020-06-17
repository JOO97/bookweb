<?php
header("Content-type:image/jpeg,text/html;charset=utf-8");
//1 创建数据库对象 (主机地址,用户名,密码,数据库名,数据库端口号)
$sqlObj = new mysqli("127.0.0.1", "root", "root", "CH191203", "3306");
//监测数据库连接是否成功
//    if($sqlObj->connect_errno!=0){
//        echo "连接失败";
//    } else {
//        echo "连接成功";
//    }
//
//2.监测数据库连接是否成功
if (!$sqlObj) {
    echo "连接失败";
} else {
    //连接成功
    switch ($_POST['type']){
        case 'userLogin'://用户登录
            $phone = $_POST['phone'];
            $psw = $_POST['password'];
            //3.声明sql语句
            $sql = 'SELECT * FROM bookWeb_user WHERE bookWeb_user_phone="' . $phone . '" AND bookWeb_user_psw="' . $psw . '";';
            //4.sql对象运行sql语句
            $result = $sqlObj->query($sql);
            //fetch_assoc()解析单条数据
            $info = $result->fetch_assoc();
            if($info){
                if($info['bookWeb_user_status']==0){
                    echo json_encode(array("code"=>"10000","msg"=>"登陆成功","data"=>$phone));
                }else{
                    echo json_encode(array("code"=>"10001","msg"=>"您已被封号"));
                }
            } else{
                echo json_encode(array("code"=>"10002","msg"=>"账号或密码错误"));
            }
            break;
        case 'userEnroll'://用户注册
            $phone = $_POST['phone'];
            $psw = $_POST['password'];
            $sql = 'SELECT * FROM bookWeb_user WHERE bookWeb_user_phone="' . $phone . '" AND bookWeb_user_psw="' . $psw . '";';
            $result = $sqlObj->query($sql);
            $info = $result->fetch_assoc();
            if ($info) {
                echo json_encode(array("code"=>"10002","msg"=>"该手机号已注册过"));
            } else {
                $sql_insert='INSERT INTO bookweb_user(bookWeb_user_phone,bookWeb_user_psw) VALUES("' . $phone . '","' . $psw . '")';
                if ($sqlObj->query($sql_insert)) {
                    echo json_encode(array("code"=>"10003","msg"=>"注册成功"));
                } else {
                    echo json_encode(array("code"=>"10004","msg"=>"注册失败,请重新提交"));
                }
            };
            break;
        case 'adminLogin'://管理员登录
            $account = $_POST['account'];
            $psw = $_POST['password'];
            //3.声明sql语句
            $sql = 'SELECT * FROM bookWeb_admin WHERE bookWeb_admin_account="' . $account . '" AND bookWeb_admin_password="' . $psw . '";';
            //4.sql对象运行sql语句
            $result = $sqlObj->query($sql);
            //fetch_assoc()解析单条数据
            $info = $result->fetch_assoc();
            if ($info) {
                echo json_encode(array("code"=>"10020","msg"=>"登陆成功","data"=>$account));
            } else {
                echo json_encode(array("code"=>"10021","msg"=>"账号或密码错误"));
            };
            break;
        case 'uploadBook':
            $type= $_FILES['img']['type'];//获取文件类型
            $typebb= $_FILES['imgbb']['type'];
            $size= $_FILES['img']['size'];//获取文件大小
            $sizebb= $_FILES['imgbb']['size'];
            $tmpName=$_FILES['img']['tmp_name'];//获取文件的临时存储路径
            $tmpNamebb=$_FILES['imgbb']['tmp_name'];
            if ($type !='image/jpeg' || $typebb !='image/jpeg'){
                echo json_encode(array('code'=>'10031','msg'=>'文件类型错误'));
            } else if($size>=8388608 || $sizebb>=8388608){
                echo  json_encode(array('code'=>'10032','msg'=>'文件大小过大'));
            } else{
                $imgPath='images/bookImg/';
                //当文件夹路径不存在时,自动创建文件夹
                if(!file_exists($imgPath)){
                    mkdir($imgPath,'0754');
                }
                //设置图片文件路径  time()获取当前的时间戳
                $picUrl=$imgPath.time().'.jpg';
                $picUrlbb=$imgPath.time().'info.jpg';
                //移动文件 move_uploaded_file(原路径,目的路径) 缓存
                $result=move_uploaded_file($tmpName,$picUrl);
                $resultbb=move_uploaded_file($tmpNamebb,$picUrlbb);
                if($result && $resultbb){
                    $sql="INSERT INTO bookweb_book(bookWeb_book_title,bookWeb_book_intord,bookWeb_book_presentPrice,bookWeb_book_price,bookWeb_book_info,bookWeb_book_Image,bookWeb_book_type,bookWeb_book_Image_info) VALUES('".$_POST['title']."','".$_POST['introduction']."','".$_POST['presentPrice']."','".$_POST['price']."','".$_POST['bookInfo']."','".$picUrl."','".$_POST['bookType']."','".$picUrlbb."')";
                    $result=$sqlObj->query($sql);
                    if($result){
                       echo json_encode(array('code'=>10030,'msg'=>'上传成功'));
                    } else{
                       echo json_encode(array('code'=>10034,'msg'=>'上传失败'));
                    }
                }else{
                    echo json_encode(array('code'=>'10033','msg'=>'上传失败'));
                }
            }
            break;


        case 'bookList':
            $sql='SELECT bookWeb_book_id,bookWeb_book_Image,bookWeb_book_title,bookWeb_book_type,bookWeb_book_presentPrice,bookWeb_book_price,bookWeb_book_intord FROM bookweb_book';
            $result = $sqlObj->query($sql);
            //fetch_assoc()只查询一条数据
            //fetch_all(MYSQLI_ASSOC)查询多条数据
//            $info=mysqli_fetch_all($result);
            $arr = [];
            while ($row = mysqli_fetch_assoc($result)){
                $arr[] = $row;
            }
            if ($arr) {
                echo json_encode(array("code"=>"10040","msg"=>"请求成功","data"=>$arr));
            } else {
                echo json_encode(array("code"=>"10041","msg"=>"请求失败"));
            };
            break;
        case 'delBook':
            $bookId=$_POST['bookId'];
            $sql='DELETE FROM bookweb_book WHERE bookWeb_book_id = "'.$bookId.'";';
            $result = $sqlObj->query($sql);
            if ($result) {
                echo json_encode(array("code"=>"10050","msg"=>"删除成功"));
            } else {
                echo json_encode(array("code"=>"10051","msg"=>"删除失败"));
            };
            break;
        case 'userList':
            $sql='SELECT bookWeb_user_id,bookWeb_user_phone,bookWeb_user_status FROM bookweb_user;';
            $result=$sqlObj->query($sql);
            $arr = [];
            while ($row = mysqli_fetch_assoc($result)){
                $arr[] = $row;
            }
            if ($arr) {
                echo json_encode(array("code"=>"10060","msg"=>"请求用户信息成功","data"=>$arr));
            } else {
                echo json_encode(array("code"=>"10061","msg"=>"请求用户信息失败"));
            };
            break;
        case 'statusChange':
            $userId=$_POST['userId'];
            $sql='SELECT bookWeb_user_status FROM bookweb_user WHERE bookWeb_user_id="'.$userId.'";';
            $result=$sqlObj->query($sql);
            $info = $result->fetch_assoc();
            if($info['bookWeb_user_status']==0){
                $status=1;
            } else if($info['bookWeb_user_status']==1){
                $status=0;
            }
            $sql='UPDATE bookweb_user SET bookWeb_user_status="'.$status.'" WHERE bookWeb_user_id="'.$userId.'";';
            $result=$sqlObj->query($sql);
            if($result){
                echo json_encode(array("code"=>"10070","msg"=>"修改用户状态成功"));
            } else{
                echo json_encode(array("code"=>"10071","msg"=>"修改用户状态失败"));
            }
            break;
        case 'bookInfo':
            $sql='SELECT * FROM bookweb_book WHERE bookWeb_book_type ="'.$_POST['bookType'].'"LIMIT 10';
            $result = $sqlObj->query($sql);
            $arr = [];
            while ($row = mysqli_fetch_assoc($result)){
                $arr[] = $row;
            }
            if($arr){
                echo json_encode(array("code"=>"10080","msg"=>"获取书籍数据成功","data"=>$arr));
            } else{
                echo json_encode(array("code"=>"10082","msg"=>"获取书籍数据失败"));
            }
            break;
        case 'bookDetail':
            $sql='SELECT * FROM bookweb_book WHERE bookWeb_book_id="'.$_POST['bookId'].'";';
            $result = $sqlObj->query($sql);
            $info = $result->fetch_assoc();
            if($info){
                echo json_encode(array("code"=>"10090","msg"=>"获取书籍详情成功","data"=>$info));
            } else{
                echo json_encode(array("code"=>"10090","msg"=>"获取书籍详情失败"));
            }
            break;
        case 'createOrder':
            $sql='INSERT INTO bookweb_order(bookWeb_order_user_phone,bookWeb_order_good_id,bookWeb_order_time) VALUES("'.$_POST['user'].'","'.$_POST['book'].'","'.$_POST['time'].'");';
            $result = $sqlObj->query($sql);
            if ($result) {
                echo json_encode(array("code"=>"10100","msg"=>"生成订单成功"));
            } else {
                echo json_encode(array("code"=>"10101","msg"=>"订单生成失败"));
            };
            break;
        case 'userPage':
            $sql='SELECT bookWeb_user_phone,bookWeb_user_money FROM bookweb_user WHERE bookWeb_user_phone="'.$_POST['user'].'";';
            $result = $sqlObj->query($sql);
            $info = $result->fetch_assoc();
            if($info){
                echo json_encode(array("code"=>"10110","msg"=>"获取用户信息成功","data"=>$info));
            }else{
                echo json_encode(array("code"=>"10111","msg"=>"获取用户信息失败"));
            }
            break;
        case 'rechargeMoney':
            $sql='UPDATE bookweb_user SET bookWeb_user_money = bookweb_user.bookWeb_user_money+'.$_POST['money'].' WHERE bookWeb_user_phone="'.$_POST['user'].'";';
            $result=$sqlObj->query($sql);
            if($result){
                $sql='SELECT bookWeb_user_money FROM bookweb_user WHERE bookWeb_user_phone="'.$_POST['user'].'";';
                $result=$sqlObj->query($sql);
                $info=$result->fetch_assoc();
                if($info){
                    echo json_encode(array("code"=>"10210","msg"=>"充值成功","data"=>$info));
                }else{
                    echo json_encode(array("code"=>"10211","msg"=>"ERROR,请稍后再试!"));
                }
            } else{
                echo json_encode(array("code"=>"10212","msg"=>"充值失败"));
            }
            break;
            //获取订单列表
        case 'getOrderList':
            $phone=$_POST['user'];
            $status=$_POST['orderStatus'];

                $sql='select * from bookweb_book a,bookweb_order b where a.bookWeb_book_id=b.bookWeb_order_good_id AND b.bookWeb_order_user_phone="'.$phone.'" AND b.bookWeb_order_status="'.$status.'"';
//            $sql='select * from bookweb_book where bookWeb_book_id IN (SELECT bookWeb_order_good_id FROM bookweb_order WHERE bookWeb_order_user_phone="'.$phone.'" AND bookWeb_order_status="'.$status.'");';
                $result = $sqlObj->query($sql);
                $info = $result->fetch_all(MYSQLI_ASSOC);
                if($info){
                    echo json_encode(array("code"=>"10510","msg"=>"获取订单列表成功","data"=>$info));
                } else{
                    echo json_encode(array("code"=>"10511","msg"=>"暂无该类型订单"));
                }


            break;
        case 'orderStatusChange':
            $orderId=$_POST['orderId'];
            $sql='SELECT bookWeb_order_status FROM bookweb_order WHERE bookWeb_order_id = "'.$orderId.'";';
            $result=$sqlObj->query($sql);
            $info=$result->fetch_assoc();
            if($info['bookWeb_order_status']==1 || $info['bookWeb_order_status']==2){
                $sql1='UPDATE bookweb_order SET bookWeb_order_status=bookWeb_order_status+"1" WHERE bookWeb_order_id="'.$orderId.'";';
                $result=$sqlObj->query($sql1);
                if($result){
                    echo json_encode(array("code"=>"10415","msg"=>"操作成功"));
                } else{
                    echo json_encode(array("code"=>"10416","msg"=>"操作失败"));
                }
            } else if($info['bookWeb_order_status']==3){
                $sql='DELETE FROM bookweb_order WHERE bookWeb_order_id = "'.$orderId.'";';
                $result=$sqlObj->query($sql);
                if($result){
                    echo json_encode(array("code"=>"10417","msg"=>"删除订单成功"));
                } else{
                    echo json_encode(array("code"=>"10418","msg"=>"删除订单失败"));
                }
            } else{
                echo json_encode(array("code"=>"10419","msg"=>"无效操作"));
            }
            break;
//        case 'orderStatusChange1':
////            $phone=$_POST['user'];
//            $orderId=$_POST['orderId'];
//            $sql='SELECT bookWeb_order_status,bookWeb_order_good_id,bookWeb_order_user_phone FROM bookweb_order WHERE bookWeb_order_id="'.$orderId.'";';
//            $result=$sqlObj->query($sql);
//            $info=$result->fetch_assoc();
//            if($info){
//                $status=$info['bookWeb_order_status'];
//                $bookId=$info['bookWeb_order_good_id'];
//                $phone=$info['bookWeb_order_user_phone'];
//                if($status==0){
//                    $sql='SELECT bookWeb_user_money,bookWeb_book_presentPrice FROM bookweb_user a,bookweb_book b WHERE b.bookWeb_book_id="'.$bookId.'" AND a.bookWeb_user_phone="'.$phone.'"';
////                     echo $sql;
//                    $result=$sqlObj->query($sql);
//                    $info=$result->fetch_assoc();
//                    if($info['bookWeb_user_money']>=$info['bookWeb_book_presentPrice']){
//                        $sql='UPDATE bookweb_user SET bookWeb_user_money=bookWeb_user_money-"'.$info['bookWeb_book_presentPrice'].'" WHERE bookWeb_user_phone="'.$phone.'";';
//                        $sql2='UPDATE bookweb_order SET bookWeb_order_status=bookWeb_order_status+"1" WHERE bookWeb_order_id="'.$orderId.'";';
//                        $result=$sqlObj->query($sql);
//                        $result2=$sqlObj->query($sql2);
//                        if($result && $result2){
//                            echo json_encode(array("code"=>"10410","msg"=>"购买成功"));
//                        } else{
//                            echo json_encode(array("code"=>"10411","msg"=>"操作失败"));
//                        }
//                    }else{
//                        echo json_encode(array("code"=>"10412","msg"=>"购买失败!您的余额不足"));
//                    }
//                } else if($status==1 || $status==2){
//                    $sql='UPDATE bookweb_order SET bookWeb_order_status=bookWeb_order_status+"1" WHERE bookWeb_order_id="'.$orderId.'";';
//                    $result=$sqlObj->query($sql);
//                    if($result){
//                        echo json_encode(array("code"=>"10415","msg"=>"操作成功"));
//                    } else{
//                        echo json_encode(array("code"=>"10416","msg"=>"操作失败"));
//                    }
//                } else if($status==3){
//                    $sql='DELETE FROM bookweb_order WHERE bookWeb_order_id = "'.$orderId.'";';
//                    $result=$sqlObj->query($sql);
//                    if($result){
//                        echo json_encode(array("code"=>"10417","msg"=>"删除订单成功"));
//                    } else{
//                        echo json_encode(array("code"=>"10418","msg"=>"删除订单失败"));
//                    }
//                }
//            } else{
//                echo json_encode(array("code"=>"10415","msg"=>"无效操作"));
//            }
//            break;
        case 'getOrderListAll':
            $sql= 'SELECT B.bookWeb_book_Image,B.bookWeb_book_presentPrice,B.bookWeb_book_title,A.bookWeb_order_id,A.bookWeb_order_time,A.bookWeb_order_status FROM bookweb_order as A INNER JOIN bookweb_book as B ON A.bookWeb_order_good_id=B.bookWeb_book_id WHERE A.bookWeb_order_user_phone="'.$_POST['user'].'";';
            $result = $sqlObj->query($sql);
            $info = $result->fetch_all(MYSQLI_ASSOC);
            if($info){
                echo json_encode(array("code"=>"10310","msg"=>"获取订单列表成功","data"=>$info));
            } else{
                echo json_encode(array("code"=>"10311","msg"=>"暂无订单"));
            }
            break;
        case 'payOrder':
            $phone=$_POST['user'];
            $orderId=$_POST['orderId'];
            //1.获取用户余额
            $sql='SELECT bookWeb_user_money FROM bookweb_user WHERE bookWeb_user_phone="'.$phone.'"';
            $result = $sqlObj->query($sql);
            $info=$result->fetch_assoc();
            //2.获取商品价格
            $sql1='SELECT bookWeb_book_presentPrice FROM bookweb_book INNER JOIN bookweb_order ON bookWeb_order_good_id = bookWeb_book_id WHERE bookWeb_order_id = "'.$orderId.'";';
            $result1 = $sqlObj->query($sql1);
            $info1=$result1->fetch_assoc();
            //3.比较余额和书籍价格
            if($info['bookWeb_user_money']>=$info1['bookWeb_book_presentPrice']){
                //4.购买成功 修改订单状态,用户余额
                $sql2='UPDATE bookweb_order SET bookWeb_order_status=bookWeb_order_status+"1" WHERE bookWeb_order_id="'.$orderId.'";';
                $sql3='UPDATE bookweb_user SET bookWeb_user_money=bookWeb_user_money-"'.$info1['bookWeb_book_presentPrice'].'" WHERE bookWeb_user_phone="'.$phone.'";';
                $result2=$sqlObj->query($sql2);
                $result3=$sqlObj->query($sql3);
                if($result2 && $result3){
                    echo json_encode(array("code"=>"10410","msg"=>"购买成功"));
                } else{
                    echo json_encode(array("code"=>"10412","msg"=>"购买失败"));
                }
            } else{
                echo json_encode(array("code"=>"10411","msg"=>"余额不足,购买失败"));
            }
            break;
        default: echo '无效操作';
        break;
    }
}

?>




