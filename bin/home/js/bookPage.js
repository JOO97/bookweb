//商品详情tab栏--------------------------------------
$('.bookMainBotTitles').click(function() {
    $(this).addClass('bookMainBotTitleCurrent').siblings().removeClass('bookMainBotTitleCurrent');
    $('.bookMainBotContents').eq($(this).index()).show().siblings().hide();
})

//评论tab栏------------------------------------------
$('.commentsTitles').click(function() {
    $(this).addClass('commentsCurrent').siblings().removeClass('commentsCurrent');
    $('.commentsContents').eq($(this).index()).show().siblings().hide();
})

//请求书籍详情
// alert(window.localStorage.getItem('bookId'));
$.ajax({
    type:"POST",
    url:"../../src/book.php",
    data:{type:'bookDetail',bookId:window.localStorage.getItem('bookId')},
    dataType:"JSON",
    success:function (data) {
        console.log(data);

        if(data.code==10090){
            $('.bookImg').empty();
            $('.booksInfo').empty();
            $('#bookWebInfo').empty();
            $('.booksDetailImgCon').empty();
            $('.bookImg').html(`
              <div class="mask"><img src="image/zoom_pup.png"></div>
              <img class="bookImgs" src="../../src/`+data.data.bookWeb_book_Image+`">
                    <div class="bigImg">
                        <img src="../../src/`+data.data.bookWeb_book_Image+`">
                    </div>
            `)
            $('.booksInfo').html(`
              <h1><img src="image/icon_ddzy.png">`+data.data.bookWeb_book_title+`</h1>
              <h2>`+data.data.bookWeb_book_intord+`</h2>
              <p class="bookPrice">
                 现价:￥<span class="newPrice">`+data.data.bookWeb_book_presentPrice+`</span> 
                 原价:￥<span class="oldPrice">`+data.data.bookWeb_book_price+`</span>
               </p>
            `)
            $('#bookWebInfo').html(data.data.bookWeb_book_info);
            $('.booksDetailImgCon').html('<img src="../../src/'+data.data.bookWeb_book_Image_info+'">')

        }else{
            alert(data.msg);
            window.location.href="index.html";
        }
    },
    error:function (err) {
        console.log(err)
    }
})



//创建订单
$('.buyBtn').click(function () {
    var nowUser=window.localStorage.getItem('nowUser');
    var nowBook=window.localStorage.getItem('bookId');
    var time=Date.parse(new Date());
    console.log(time);
    if (nowUser!=null){
        if(confirm('是否要购买')){
            $.ajax({
                type:"POST",
                url:"../../src/book.php",
                data:{type:'createOrder',book:nowBook,user:nowUser,time:time},
                dataType:"JSON",
                success:function (data) {
                    alert(data.msg);
                    console.log(data);
                    // alert('即将进入个人主页');
                    setTimeout(function(){
                        window.location.href='personal.html';
                    },1000)
                },
                error:function (err) {
                    console.log(err)
                }
            })
        }
    } else{
        if(confirm('请先登录')){
            window.location.href='login.html';
            window.localStorage.setItem('page','bookPage');
        }
    }

})




// $.ajax({
//     type:"POST",
//     url:"../../src/book.php",
//     data:{type:'bookInfo',bookType:$(this).html()},
//     dataType:"JSON",
//     success:function (data) {
//         if(data.code==10080){
//             // console.log(data);
//             var boxName;
//             if(data.data[0].bookWeb_book_type=='童书'){
//                 boxName='#booksTabInfo';
//             }else if(data.data[0].bookWeb_book_type=='励志'){
//                 boxName='#lizhi';
//             } else if(data.data[0].bookWeb_book_type=='文学'){
//                 boxName='#wenxue'
//             } else{
//                 boxName='#kaoshi'
//             }
//
//             // console.log($(box+'>ul'));
//             $(boxName).empty();
//             for(var i=0;i<data.data.length;i++){
//                 $(boxName).append(`
//                       <li>
//                             <img src="../../src/`+data.data[i].bookWeb_book_Image+`">
//                             <p class="goodsName"><span class="bookDetaliPage" bookId="`+data.data[i].bookWeb_book_id+`">`+data.data[i].bookWeb_book_title+`</span></p>
//                             <p class="numlogo"><span>当当独家特供</span></p>
//                             <p class="price">
//                                 <span class="newPrice">￥`+data.data[i].bookWeb_book_presentPrice+`</span>
//                                 <span class="oldPrice">￥`+data.data[i].bookWeb_book_price+`</span>
//                             </p>
//                         </li>
//                     `)
//             }
//             getBookId();
//
//         } else {
//             alert(data.msg)
//         }
//     },
//     error:function (err) {
//         console.log(err)
//     }
// })



//预览图片----------------------------------------------
$('.bookImg').mouseover(function() {
    $(this).children().show();
})
$('.bookImg').mouseout(function() {
    $(this).children('.mask').hide().siblings('.bigImg').hide();
    $(this).css('border', '0');
})
$('.bookImg').mousemove(function(e) {
    //获取鼠标在盒子内的坐标 页面坐标-盒子坐标
    $(this).css('border', '1px solid #000');
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    //mask的移动距离  鼠标在盒子内的坐标-盒子1/2宽度和高度
    var maskX = x - $('.mask').width() / 2;
    var maskY = y - $('.mask').height() / 2;
    //最大移动距离和最小移动距离
    var maskMax = $(this).width() - $('.mask').width();
    if (maskX <= 0) {
        maskX = 0;
    } else if (maskX >= maskMax) {
        maskX = maskMax;
    }
    if (maskY <= 0) {
        maskY = 0;
    } else if (maskY >= maskMax) {
        maskY = maskMax;
    }
    $('.mask').css({ 'left': maskX + 'px', 'top': maskY + 'px' });
    //大图片的最大移动距离 图片宽度-图片盒子的宽度
    var bigMax = $('.bigImg>img').width() - $('.bigImg').width();
    var bigX = maskX * bigMax / maskMax;
    var bigY = maskY * bigMax / maskMax;
    $('.bigImg>img').css({ 'left': -bigX + 'px', 'top': -bigY + 'px' });
})

