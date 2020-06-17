//2tab栏---------------------------------------------------------------
var titles = document.querySelectorAll('.rightBotTitles');
var rightBotMains = document.querySelectorAll('.rightBotMains');
for (var i = 0; i < titles.length; i++) {
    titles[i].setAttribute('index', i);
    titles[i].onmouseover = function() {
        for (var i = 0; i < titles.length; i++) {
            titles[i].className = 'rightBotTitles';
        }
        this.className = 'rightBotTitles titleCurrent'
        var index = this.getAttribute('index');
        for (var i = 0; i < rightBotMains.length; i++) {
            rightBotMains[i].style.display = 'none';
        }
        rightBotMains[index].style.display = 'block';
    }
}


//3轮播图------------------------------------------------------------------
var pos = 0;
var img = document.querySelectorAll('.bannerImg');
var box = document.querySelector('.mainCenterTop');
var left = document.querySelector('.arrow-l');
var right = document.querySelector('.arrow-r');
var ol = document.querySelector('.circle');
//鼠标经过事件
box.addEventListener('mouseover', function() {
    clearInterval(timer);
});
//鼠标离开事件
box.addEventListener('mouseout', function() {
    timer = setInterval(function() {
        right.click();
    }, 2000)
});
//生成小圆圈同时给小圆圈绑定点击事件
for (var i = 0; i < img.length; i++) {
    var li = document.createElement('li');
    li.setAttribute('index', i);
    li.innerHTML = i + 1;
    ol.appendChild(li);
    if (i === 0) {
        ol.children[0].className = 'current';
    };
    li.addEventListener('mouseover', function() {
        var index = this.getAttribute('index');
        pos = index;
        styleChange();
    })
};
//右按钮点击的事件
right.addEventListener('click', function() {
    pos++;
    if (pos >= img.length) {
        pos = 0;
    }
    styleChange();
});
//左按钮的点击事件
left.addEventListener('click', function() {
    if (pos === 0) {
        pos = img.length;
    }
    pos--;
    styleChange();
});

function styleChange() {
    for (var i = 0; i < img.length; i++) {
        ol.children[i].className = '';
        img[i].style.display = 'none';
    }
    ol.children[pos].className = 'current';
    img[pos].style.display = 'block';
};
//定时器
var timer = setInterval(function() {
    right.click();
}, 2000);



//请求书籍数据
// window.onload=function() {
    $.ajax({
        type:"POST",
        url:"../../src/book.php",
        data:{type:'bookInfo',bookType:'童书'},
        dataType:"JSON",
        success:function (data) {
            if(data.code==10080){
                console.log(data);
                $('#booksTabInfo').empty();
                for(var i=0;i<data.data.length;i++){
                    $('#booksTabInfo').append(`
                      <li class="bookDetaliPage" bookId="`+data.data[i].bookWeb_book_id+`">
                            <img src="../../src/`+data.data[i].bookWeb_book_Image+`">
                            <p class="goodsName"><span>`+data.data[i].bookWeb_book_title+`</span></p>
                            <p class="numlogo"><span>当当独家特供</span></p>
                            <p class="price">
                                <span class="newPrice">￥`+data.data[i].bookWeb_book_presentPrice+`</span>
                                <span class="oldPrice">￥`+data.data[i].bookWeb_book_price+`</span>
                            </p>
                        </li>
                    `)
                }
                getBookId();
            } else {
                alert(data.msg)
            }
        },
        error:function (err) {
            console.log(err)
        }
    })

//---------------------------------------------------------------
$('.mainBotTitles').mouseover(function() {
    $(this).addClass('titleCurrent');
    // var index = $(this).index();
    $("#mainBotInner .mianBotInners").eq($(this).index()).show().siblings().hide();
    $(this).siblings(".mainBotTitles").removeClass('titleCurrent');
    // var box=$("#mainBotInner .mianBotInners").eq($(this).index());
    var box;
    $.ajax({
        type:"POST",
        url:"../../src/book.php",
        data:{type:'bookInfo',bookType:$(this).html()},
        dataType:"JSON",
        success:function (data) {
            if(data.code==10080){
                // console.log(data);
                var boxName;
                if(data.data[0].bookWeb_book_type=='童书'){
                    boxName='#booksTabInfo';
                }else if(data.data[0].bookWeb_book_type=='励志'){
                    boxName='#lizhi';
                } else if(data.data[0].bookWeb_book_type=='文学'){
                    boxName='#wenxue'
                } else{
                    boxName='#kaoshi'
                }
                $(boxName).empty();
                for(var i=0;i<data.data.length;i++){
                    $(boxName).append(`
                      <li class="bookDetaliPage" bookId="`+data.data[i].bookWeb_book_id+`">
                            <img src="../../src/`+data.data[i].bookWeb_book_Image+`">
                            <p class="goodsName"><span>`+data.data[i].bookWeb_book_title+`</span></p>
                            <p class="numlogo"><span>当当独家特供</span></p>
                            <p class="price">
                                <span class="newPrice">￥`+data.data[i].bookWeb_book_presentPrice+`</span>
                                <span class="oldPrice">￥`+data.data[i].bookWeb_book_price+`</span>
                            </p>
                        </li>
                    `)
                }
                getBookId();

            } else {
                alert(data.msg)
            }
        },
        error:function (err) {
            console.log(err)
        }
    })


})


function getBookId() {
    $('.bookDetaliPage').click(function () {
        // console.log($(this).attr('bookId'));
        window.localStorage.setItem('bookId',$(this).attr('bookId'));
        window.location.href="bookPage.html";
        // window.open('bookPage.html')
    })
}
// }

// function uniqueTitle(data) {
//     var newArr = []
//     for (var i = 0; i < data.length; i++) {
//         if (newArr.indexOf(data[i].bookWeb_book_type)===-1) {
//             newArr.push(data[i].bookWeb_book_type)
//         }
//     }
//     return newArr
// }











//轮播图
// var banner = ['image/banner1.jpg', 'image/banner2.jpg', 'image/banner3.jpg', 'image/banner4.jpg']
// var img = document.querySelector('.banner');
// var box = document.querySelector('.mainCenterTop');
// var left = document.querySelector('.arrow-l');
// var right = document.querySelector('.arrow-r');
// var ol = document.querySelector('ol');
// // var play = 0;
// var next = 0;
// box.addEventListener('mouseenter', function() {
//     // left.style.display = 'block';
//     // right.style.display = 'block';
//     clearInterval(timer);
//     timer = null;
// });
// box.addEventListener('mouseleave', function() {
//     // left.style.display = 'none';
//     // right.style.display = 'none';
//     timer = setInterval(function() {
//         right.click();
//     }, 2000);
// })

// for (var i = 0; i < banner.length; i++) {
//     var li = document.createElement('li');
//     li.setAttribute('index', i);
//     li.innerHTML = i + 1;
//     ol.appendChild(li);
//     if (i === 0) {
//         ol.children[0].className = 'current';
//     }
//     li.addEventListener('mouseover', function() {
//         for (var i = 0; i < ol.children.length; i++) {
//             ol.children[i].className = '';
//         }
//         this.className = 'current';
//         var index = this.getAttribute('index');
//         // play = index; //定时器播放索引
//         next = index; //按钮索引
//         img.setAttribute('src', banner[index]);
//     })
// }
// // ol.children[0].className = 'current';
// //右边按钮的点击事件
// right.addEventListener('click', function() {
//         if (next === banner.length - 1) {
//             next = -1;
//         }
//         next++;
//         for (var i = 0; i < ol.children.length; i++) {
//             ol.children[i].className = '';
//         }
//         ol.children[next].className = 'current';
//         img.setAttribute('src', banner[next]);
//     })
//     //左边按钮的点击事件
// left.addEventListener('click', function() {
//     if (next === 0) {
//         next = banner.length;
//     }
//     next--;
//     for (var i = 0; i < ol.children.length; i++) {
//         ol.children[i].className = '';
//     }
//     ol.children[next].className = 'current';
//     img.setAttribute('src', banner[next]);

// })
// var timer = setInterval(function() {
//     right.click();
// }, 2000);

// function set() {
//     if (play >= banner.length) {
//         play = 0;
//     }
//     img.setAttribute('src', banner[play]);
//     for (var i = 0; i < ol.children.length; i++) {
//         ol.children[i].className = '';
//     }
//     ol.children[play].className = 'current';
//     play++;

// }







/*12.18 课堂练习
for (var i = 0; i < titles.length; i++) {
    titles[i].onclick = function() {
        var index = this.getAttribute('index');
        for (var i = 0; i < titles.length; i++) {
            titles[i].style.backgroundColor = ''
        }
        this.style.backgroundColor = 'gray'
    }
}

var num = document.querySelector('.number');
var sum = 1;
for (var i = 1; i <= 100; i++) {
    sum += i + ' ';
    if (i % 5 === 0) {
        sum += '<br/>';
    }
}
for (var i = 1; i <= 10; i++) {
    sum *= i;
}
num.innerHTML = sum;
*/