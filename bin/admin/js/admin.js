//tab栏
$('.menuTitles').click(function() {
    $(this).addClass('current').siblings().removeClass('current');
    $('.menuContents').eq($(this).index()).show().siblings().hide();
})
//获取本地存储
if(window.sessionStorage.getItem('nowAdmin')==null){
    $('.mask2').slideDown();
    // alert(1);
    setTimeout(function(){
        window.location.href='adminLogin.html';
    },3000)
} else{
    $('.admin').html('<i class="iconfont icon-guanliyuan"></i> 管理员:'+window.sessionStorage.getItem('nowAdmin'));
    $('.welcome').html(window.sessionStorage.getItem('nowAdmin'));
    $('.topRight').append('<li id="adminExit"><i class="iconfont icon-tuichu"></i> 退出</li>');
    $('#adminExit').click(function () {
        $('.mask').show();
        $('.yes').click(function () {
            window.sessionStorage.removeItem('nowAdmin');
            // alert('登出成功');
            window.location.href='adminLogin.html';
        })
        $('.cancel').click(function () {
            $('.mask').hide();
        })
    })
}
//上传书籍信息 需要判断文件是不是图片,文件大小是否过大
$('#uploadBtn').click(function () {
    // if($('#bookTitle').val()!='' && $('#bookImg')[0].files[0])!=null)
    // console.log($('#bookImgb')[0].files[0]);
    // console.log($('#bookInfoImg')[0].files[0]);
    if($('#bookImg')[0].files.length && $('#bookInfoImg')[0].files.length && $('#bookTitle').val().trim() && $('#bookInt').val().trim() && $('#presentPrice').val().trim() && $('#price').val().trim() && $('#bookSort').val()!='请选择' && $('#bookInfo').val().trim()){
        // FormData表单对象 通过formData文件存储到缓存中
        var formData=new FormData();
        formData.append('img',$('#bookImg')[0].files[0]);
        formData.append('imgbb',$('#bookInfoImg')[0].files[0]);
        formData.append('type','uploadBook');
        formData.append('title',$('#bookTitle').val());
        formData.append('introduction',$('#bookInt').val());
        formData.append('presentPrice',$('#presentPrice').val());
        formData.append('price',$('#price').val());
        formData.append('bookType',$('#bookSort').val());
        formData.append('bookInfo',$('#bookInfo').val());
        $.ajax({
            type: "POST",
            url: "../../src/book.php",
            data: formData,
            dataType: 'json', //规定传回的数据类型
            contentType:false, //内容格式 默认值为true
            processData:false, //序列化内容
            success: function(data) {
            },
            error: function() {
            }
        })
    } else{
        alert('请填写完整');

    }

})


// 书籍管理
$('.bookManagement').click(function () {
    $('#booktbody').empty();
    $.ajax({
        type: "POST",
        url: "../../src/book.php",
        data: { type: 'bookList'},
        //规定传回的数据类型
        dataType: 'json',
        success: function(data) {
            // console.log(data.data);
            // console.log(data.data[0].bookWeb_book_title);
            if(data.code=10040){
                for(var i=0;i<data.data.length;i++){
                    $('#booktbody').append('<tr><td>'+parseInt(i+1)+'</td><td><img src="../../src/'+data.data[i].bookWeb_book_Image+'"></td><td>'+data.data[i].bookWeb_book_title+'</td><td>'+data.data[i].bookWeb_book_type+'</td><td>'+data.data[i].bookWeb_book_presentPrice+'</td><td>'+data.data[i].bookWeb_book_price+'</td><td>'+data.data[i].bookWeb_book_intord+'</td><td><button class="delBook" index="'+data.data[i].bookWeb_book_id+'">删除</button></td></tr>');
                }
                // 删除书籍
                $('.delBook').click(function () {
                    // console.log($(this).parent().parent().index());
                    if(confirm('是否确认删除')){
                        $.ajax({
                            type: "POST",
                            url: "../../src/book.php",
                            data: { type: 'delBook', bookId:$(this).attr('index')},
                            //规定传回的数据类型
                            dataType: 'json',
                            success: function(data) {
                                console.log(data);
                                if (data.code == 10050) {
                                    alert(data.msg)
                                    $('.bookManagement').click();
                                } else {
                                    alert(data.msg);
                                }
                            },
                            error: function() {
                                alert('error')
                            }
                        })
                    }

                })
            } else{
                alert(data.msg);
            }


        },
        error: function() {
            alert('error')
        }
    })
})

//用户管理
$('.userManagement').click(function () {
    $.ajax({
        type: "POST",
        url: "../../src/book.php",
        data: { type: 'userList'},
        dataType: 'json',
        success: function(data) {
            if(data.code=10060){
                // console.log(data.data);
                $('#userTbody').empty();
                for(var i=0;i<data.data.length;i++){
                    if(data.data[i].bookWeb_user_status==0){
                        $('#userTbody').append('<tr><td>'+parseInt(i+1)+'</td><td>'+data.data[i].bookWeb_user_phone+'</td><td class="status" style="color: #5FB878">正常</td><td><input class="statusBtn" type="button" value="禁封" style="background-color: #5FB878" index='+parseInt(i)+' userIndex="'+data.data[i].bookWeb_user_id+'"></td></tr>');
                    } else if(data.data[i].bookWeb_user_status==1){
                        $('#userTbody').append('<tr><td>'+parseInt(i+1)+'</td><td>'+data.data[i].bookWeb_user_phone+'</td><td class="status" style="color: #d9534f">封禁</td><td><input class="statusBtn" type="button" style="background-color: #D9534F" value="解封" index='+parseInt(i)+' userIndex="'+data.data[i].bookWeb_user_id+'"></td></tr>');
                    }
                }
                // status();
                //用户账号状态修改
                statusChange(data.data);
            } else{
                alert(data.msg);
            }
        },
        error: function() {
            alert('error')
        }
    })
})
//监听.status内容改变
// function status() {
//     $('.status').bind('DOMNodeInserted', function(e) {
//         alert('无效操作');
//     });
// }

// 禁封按钮 0-禁封  1-解封
function statusChange(data){
    $('.statusBtn').click(function () {
        // var status;
        // if(data[$(this).attr('index')].bookWeb_user_status!=1 && data[$(this).attr('index')].bookWeb_user_status!=0){
        //     return alert('操作有误');
        // } else{
            if(confirm('是否'+$(this).val()+'该用户')){
                $.ajax({
                    type: "POST",
                    url: "../../src/book.php",
                    data: { type: 'statusChange',userId:$(this).attr('userIndex')},
                    dataType: 'json',
                    success: function(data) {
                        if (data.code == 10070) {
                            alert(data.msg)
                            $('.userManagement').click();
                        } else {
                            alert(data.msg);
                        }
                    },
                    error: function() {
                        alert('error')
                    }
                })
            }
        // }

    })
}


