$('#phoneSign').on('click',function () {
    var reg=/^1[0-9]{10}$/;
    // var regpsw=/^[a-zZ-z0-9,./]{6,16}$/;
    // if($('#phone').val().match(reg)==null&&$('#password').val().match(regpsw)==null)
    if($('#phone').val().match(reg)==null){
        console.log('账号输入错误');
    } else {
        // console.log('输入格式正确');
        $.ajax({
            type:"POST",
            url:"../../src/book.php",
            data:{type:'userLogin',phone:$('#phone').val(),password:$('#password').val()},
            //规定传回的数据类型
            dataType:'json',
            success:function(data) {
                if(data.code==10000){//登录成功时,将用户账号存入本地存储
                    // window.localStorage.setItem('nowUser',data.data);
                    alert(data.msg);
                    window.localStorage.setItem('nowUser',data.data);
                    // if(window.localStorage.getItem('page')){
                    //     history.back();
                    //     // location.reload();
                    //     window.localStorage.removeItem('page');
                    // }else{
                        window.location.href='index.html';
                    // }
                    // window.location.reload();
                } else{
                    alert(data.msg);
                }

            },
            error:function () {
                alert('error');
            }
        })
    }





})