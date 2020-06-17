$('.loginBtn').on('click', function() {
    $.ajax({
        type: "POST",
        url: "../../src/book.php",
        data: { type: 'adminLogin', account: $('.account').val(), password: $('.password').val() },
        //规定传回的数据类型
        dataType: 'json',
        success: function(data) {
            console.log(data);
            if (data.code == 10020) {
                window.sessionStorage.setItem('nowAdmin', data.data);
                window.location.href = 'admin.html';
                // window.location.reload();
                alert(data.msg)
            } else {
                alert(data.msg);
            }
        },
        error: function() {
            alert('error')
        }
     })
})