//1底部 footerBg
var spans = document.querySelectorAll('.footerBg');
for (var i = 0; i < spans.length; i++) {
    var index = i * 52
    spans[i].style.backgroundPosition = '0 -' + index + 'px';
}
//获取本地存储
if(window.localStorage.getItem('nowUser')!=null){
    $('#userNameBox').html('欢迎光临当当,尊敬的 <a href="#"><span>'+window.localStorage.getItem('nowUser')+'</span></a> 会员 <a id="userExit">退出</a>');
    $('#userExit').click(function () {
        window.localStorage.removeItem('nowUser');
        alert('登出成功');
        //刷新页面
        window.location.href='index.html'
    })
}
