var regpsw = /^[a-zA-Z][a-zA-Z0-9_-]{5,15}$/;//  /^[A-z][0-9]{6}$/
var reg = /^1[3|4|5|7|8]\d{9}$/;
var phoneSign = false;
var pswSign = false;
var psw2Sign = false;
$('#phone').focus(function () {
    $('.msgp').show().html('<i class="iconfont icon-tishi1"></i>请输入未注册过的手机号');
}).blur(function() {
    if (!reg.test($('#phone').val())){
        $('.msgp').html('<i class="iconfont icon-cuowu"></i>请输入正确的手机号').css('color','#E52222');
    } else{
        $('.msgp').html('<i class="iconfont icon-chenggong"></i>输入正确').css('color','#39BA36');
        phoneSign=true;
    }
})

$('#password').focus(function () {
    $('.msgpsw').show().html('<i class="iconfont icon-tishi1"></i>请输入以字母开头,由字母、数字、-、_组成的6~16位密码');
}).blur(function() {
        $('.msgpsw2').show();
        if($('#pswCon').val()=='' || $('#password').val()!=$('#pswCon').val()){
            $('.msgpsw2').html('<i class="iconfont icon-cuowu"></i>密码不一致').css('color','#E52222');
            psw2Sign=false;
        } else{
            $('.msgpsw2').html('<i class="iconfont icon-chenggong"></i>密码一致').css('color','#39BA36');
            psw2Sign=true;
        }
        if (!regpsw.test($('#password').val())){
        $('.msgpsw').html('<i class="iconfont icon-cuowu"></i>请输入正确的密码').css('color','#E52222');
            pswSign=false;
        } else{
            $('.msgpsw').html('<i class="iconfont icon-chenggong"></i>输入正确').css('color','#39BA36');
            pswSign=true;
        }
})

$('#pswCon').focus(function () {
    $('.msgpsw2').html('<i class="iconfont icon-tishi1"></i>请再次输入密码');
}).blur(function() {
    if ($('#pswCon').val()==''||$('#pswCon').val()!=$('#password').val()){
            $('.msgpsw2').html('<i class="iconfont icon-cuowu"></i>密码不一致').css('color','#E52222');
            psw2Sign=false;
    } else{
        $('.msgpsw2').html('<i class="iconfont icon-chenggong"></i>密码一致').css('color','#39BA36');
        psw2Sign=true;
    }
})
$('#enrollBtn').click(function () {
    if (phoneSign==true&&pswSign==true&&psw2Sign==true){
        $('#phoneSign').removeAttr("disabled");
        $.ajax({
        type: "POST",
        url: "../../src/book.php",
        data: { type: 'userEnroll', phone: $('#phone').val(), password: $('#password').val() },
        dataType:'json',
        success: function(data) {
            // console.log(JSON.parse(data));
            if(data.code==10003){
                alert(data.msg);
                window.location.href='login.html';
            } else{
                alert(data.msg);
            }

        },
        error: function() {}
        })
    } else{
        alert('请确认您的注册信息');
        $('#phoneSign').attr("disabled","disabled");
    }
})


// $('#enrollBtn').on('click', function() {
//     var regpsw = /^[a-zA-Z0-9_-]{6,16}$/;
//     var reg = /^1[3|4|5|7|8]\d{9}$/;
//     var phone = $('#phone').val();
//     var password = $('#password').val();
//     var pswCon = $('#pswCon').val();
//     if (!reg.test(phone)) {
//         alert('请输入正确的手机号');
//     } else if (!regpsw.test(password)) {
//         alert('请输入由大小写字母与数字组成6~16位密码');
//     } else if (pswCon != password) {
//         alert('两次密码输入不一致');
//     } else {
//         console.log('输入格式正确');
//         $.ajax({
//             type: "POST",
//             url: "../../src/book.php",
//             data: { type: 'userEnroll', phone: $('#phone').val(), password: $('#password').val() },
//             success: function(data) {
//                 alert(data);
//             },
//             error: function() {}
//         })
//     }
// })