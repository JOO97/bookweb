if(window.localStorage.getItem('nowUser')==null){
    $('.mask2').slideDown();
    // alert('非法操作,请先登录');
    setTimeout(function(){
        window.location.href='login.html';
    },3000)
}

//左侧菜单栏
$('#leftMainTitles li').click(function() {
    $(this).addClass('current').siblings().removeClass('current');
    $('.rightMains').eq($(this).index()).show().siblings().hide();
})


//点击“支付中心”, 获取用户余额
$('#rechargeBtn').click(function () {
    $.ajax({
        type:"POST",
        url:"../../src/book.php",
        data:{type:'userPage',user:window.localStorage.getItem('nowUser')},
        //规定传回的数据类型
        dataType:'json',
        success:function(data) {
            // console.log(data)
            if(data.code==10110){
                // $('.nameBox').html(data.data.bookWeb_user_phone);
                $('#myMoney').html('￥'+data.data.bookWeb_user_money);
            } else{
                alert(data.msg);
            }
        },
        error:function () {
            alert('error');
        }
    })
})


//充值
$('#moneyBtn').click(function () {
    var money = $('#getMoney').val();
    var moneyReg=/^[0-9]{1,6}$/;
    if(money.match(moneyReg)!=null && money!=0){
        if (confirm('是否充值'+money+'元')){
            $.ajax({
                type:"POST",
                url:"../../src/book.php",
                data:{type:'rechargeMoney',user:window.localStorage.getItem('nowUser'),money:money},
                dataType: 'json',
                success:function (data) {
                    alert(data.msg);
                    $('#myMoney').html('￥'+data.data.bookWeb_user_money);
                    $('#getMoney').val('');
                },
                error:function (data) {
                    alert(data.msg);
                }
            })
        }
    } else{
        alert('无效金额,充值金额为1~999999元');
    }
})

$('.myOrderTitle li').click(function() {
    $(this).addClass('select').siblings().removeClass('select');
    $('.myOrderContents').eq($(this).index()).show().siblings().hide();
    if($(this).index()==0){
        getAll();
    } else{
        getSelectedBook($(this).attr('index'))
    }
})


getAll()
//点击“我的订单”
$('#myOrderBtn').click(function () {
    getAll()
})

// function getList(index) {
//
// }
//flag = 0,1,2,3
function getSelectedBook(flag) {
    console.log(flag)
    var name=[{
        statusName:'未支付',
        btnName:'buyBtn',
        btnText:'支付'
    },{
        statusName:'已支付',
        btnName:'shouhuoBtn',
        btnText:'确认收货'
    },{
        statusName:'已收货',
        btnName:'commentBtn',
        btnText:'评价'
    },{
        statusName:'已评价',
        btnName:'deleteBtn',
        btnText:'删除订单'
    }
    ];
    $.ajax({
        type:"POST",
        url:"../../src/book.php",
        data:{type:'getOrderList',user:window.localStorage.getItem('nowUser'),orderStatus:flag},
        dataType: 'json',
        success:function (data) {
           if(data.code==10510){
               console.log(data)
               $('#goodList'+flag+'').empty()
               for (var i=0;i<data.data.length;i++){
                   $('#goodList'+flag+'').append(`
                     <li>
                       <span class="num">`+name[flag].statusName+`</span>
                       <img class="goodListImg" src="../../src/` + data.data[i].bookWeb_book_Image + `">
                       <p class="goodListTitle">` + data.data[i].bookWeb_book_title + `</p>
                       <p class="goodListPrice">总价:<span class="priceSpan">￥` + data.data[i].bookWeb_book_presentPrice + `</span></p>
                       <p class="orderInfo">订单编号:<span class="orderID">`+data.data[i].bookWeb_order_time+`</span>创建时间:<span class="orderTime">`+timestampToTime(parseInt(data.data[i].bookWeb_order_time))+`</span></p>
                       <button class="`+name[flag].btnName+`" id="` + data.data[i].bookWeb_order_id + `">`+name[flag].btnText+`</button>
                     </li>
                   `)
               }
               if(flag==0){
                   buyBook('select')
               }else{
                   statusChange($('#goodList'+flag+' button').attr('class'),flag);
               }
           }else {
               $('#goodList'+flag+'').html(`
                   <div class="none">
                      <img src="image/monkey.jpg" alt="">
                      <h2>您没有该类型的订单,回<a href="index.html">首页</a>逛逛~</h2>
                   </div>
               `)
           }
        },
        error:function (data) {
            alert(data.msg);
        }
    })
}

function statusChange(btnName,flag) {
    $('.'+btnName).click(function () {
        console.log($(this).attr('id'))
        console.log(flag)
        if(confirm('是否要'+ $(this).html()+'?')){
            $.ajax({
                type:"POST",
                url:"../../src/book.php",
                data:{type:'orderStatusChange',user:window.localStorage.getItem('nowUser'),orderId:$(this).attr('id')},
                dataType: 'json',
                success:function (data) {
                    alert(data.msg)
                    console.log(data)
                    getSelectedBook(flag)
                    getAll()
                },
                error:function (data) {
                    alert(data.msg);
                }
            })

        }

    })
}


function getAll() {
    $.ajax({
        type:"POST",
        url:"../../src/book.php",
        data:{type:'getOrderListAll',user:window.localStorage.getItem('nowUser')},
        dataType: 'json',
        success:function (data) {
            console.log(data)
            if(data.code==10310){
                $('#goodListALL').empty()
                for(var i=0;i<data.data.length;i++){
                    $('#goodListALL').append(`
                     <li>
                       <span class="num"></span>
                       <img class="goodListImg" src="../../src/` + data.data[i].bookWeb_book_Image + `">
                       <p class="goodListTitle">` + data.data[i].bookWeb_book_title + `</p>
                       <p class="goodListPrice">总价:<span class="priceSpan">￥` + data.data[i].bookWeb_book_presentPrice + `</span></p>
                       <p class="orderInfo">订单编号:<span class="orderID">`+data.data[i].bookWeb_order_time+`</span>创建时间:<span class="orderTime">`+timestampToTime(parseInt(data.data[i].bookWeb_order_time))+`</span></p>
                       <button id="` + data.data[i].bookWeb_order_id + `"></button>
                     </li>
                   `)
                    if(data.data[i].bookWeb_order_status==0){
                        $('#goodListALL li:eq('+i+') .num').html('未支付');
                        $('#goodListALL li:eq('+i+') button').addClass('buyBtn').html('支付')
                    } else if(data.data[i].bookWeb_order_status==1){
                        $('#goodListALL li:eq('+i+') .num').html('已支付')
                        $('#goodListALL li:eq('+i+') button').addClass('shouhuoBtn').html('确认收货')
                    } else if(data.data[i].bookWeb_order_status==2){
                        $('#goodListALL li:eq('+i+') .num').html('已收货');
                        $('#goodListALL li:eq('+i+') button').addClass('commentBtn').html('评价')
                    } else if(data.data[i].bookWeb_order_status==3){
                        $('#goodListALL li:eq('+i+') .num').html('已评价');
                        $('#goodListALL li:eq('+i+') button').addClass('deleteBtn').html('删除');
                    }
                }
                buyBook('all')

                    statusChange('shouhuoBtn',1)
                statusChange('commentBtn',2)
                statusChange('deleteBtn',3)


            } else{
                $('#goodListALL').html(`
                  <div class="none">
                     <img src="image/monkey.jpg" alt="">
                     <h2>您没有该类型的订单,回<a href="index.html">首页</a>逛逛~</h2>
                  </div>
                `)
            }
        },
        error:function (data) {
            alert(data.msg);
        }
    })
}

//购买
function buyBook(type) {
    $('.buyBtn').click(function () {
        if(confirm('是否要购买该商品?')){
            $.ajax({
                type:"POST",
                url:"../../src/book.php",
                data:{type:'payOrder',user:window.localStorage.getItem('nowUser'),orderId:$(this).attr('id')},
                dataType: 'json',
                success:function (data) {
                    if(data.code==10410){
                        alert(data.msg)
                        if(type=='all'){
                            getAll();
                        }else {
                            getSelectedBook(0)
                        }
                        getAll()
                    }else{
                        alert(data.msg)
                    }
                },
                error:function (data) {
                    alert(data.msg);
                }
            })

        }
    })
}


//订单状态标题栏的点击事件
// $('.myOrderTitle li').click(function() {
//     $(this).addClass('select').siblings().removeClass('select');
//     $('.myOrderContents').eq($(this).index()).show().siblings().hide();
//     var index=$(this).attr('index');
//     var statusName=['支付','确认收货','评论','删除'];
//     var btnName=['buyBtn','shouhuoBtn','commentBtn','deleteBtn']
//     var user=window.localStorage.getItem('nowUser');
//     if(index==-1){
//         box='#goodListAll'
//         myOrderBtn(box);
//     } else{
//         box='#goodList'+index;
//         $.ajax({
//             type:"POST",
//             url:"../../src/book.php",
//             data:{type:'getOrderList',user:user,orderStatus:index},
//             dataType: 'json',
//             success:function (data) {
//                 console.log(data.code)
//                 if (data.code==10311){
//                     console.log(data)
//                     $(box).html(`
//                   <div class="none">
//                      <img src="image/monkey.jpg" alt="">
//                      <h2>您没有该类型的订单,回<a href="index.html">首页</a>逛逛~</h2>
//                   </div>
//                 `)
//                 }else {
//                     $(box).empty();
//                     for(var i=0;i<data.data.length;i++) {
//                         $(box).append(`
//                  <li>
//                    <span class="num">` + parseInt(i + 1) + `</span>
//                    <img class="goodListImg" src="../../src/` + data.data[i].bookWeb_book_Image + `">
//                    <p class="goodListTitle">` + data.data[i].bookWeb_book_title + `</p>
//                    <p class="goodListPrice">总价:<span class="priceSpan">￥` + data.data[i].bookWeb_book_presentPrice + `</span></p>
//                    <p class="orderInfo">订单编号:<span class="orderID">`+data.data[i].bookWeb_order_time+`</span>创建时间:<span class="orderTime">`+timestampToTime(parseInt(data.data[i].bookWeb_order_time))+`</span></p>
//                    <button class="`+btnName[index]+`" id="` + data.data[i].bookWeb_order_id + `">`+statusName[index]+`</button>
//                  </li>
//                `)
//                     }
//                     orderStatusChange(btnName[index],user,index);
//                 }
//             },
//             error:function (data) {
//                 alert(data.msg);
//             }
//         })
//
//     }
//
// })




// myOrderBtn('#goodListALL');
// //点击“我的订单”
// $('#myOrderBtn').click(function () {
//     myOrderBtn('#goodListALL');
// })
// //获取"未支付"的订单数据
// function myOrderBtn(box){
//     $.ajax({
//         type:"POST",
//         url:"../../src/book.php",
//         data:{type:'getOrderList',user:window.localStorage.getItem('nowUser'),orderStatus:-1},
//         dataType: 'json',
//         success:function (data) {
//             console.log(data)
//             if (data.code==10313){
//                 console.log(data)
//                 $(box).html(`
//                   <div class="none">
//                      <img src="image/monkey.jpg" alt="">
//                      <h2>您没有该类型的订单,回<a href="index.html">首页</a>逛逛~</h2>
//                   </div>
//                 `)
//             }else{
//                 $(box).empty();
//                 for(var i=0;i<data.data.length;i++){
//                     $(box).append(`
//                   <li>
//                     <span class="num">`+parseInt(i+1)+`</span>
//                     <img class="goodListImg" src="../../src/`+data.data[i].bookWeb_book_Image+`">
//                     <p class="goodListTitle">`+data.data[i].bookWeb_book_title+`</p>
//                     <p class="goodListPrice">总价:<span class="priceSpan">￥`+data.data[i].bookWeb_book_presentPrice+`</span></p>
//                     <p class="orderInfo">订单编号:<span class="orderID">`+data.data[i].bookWeb_order_time+`</span>创建时间:<span class="orderTime">`+timestampToTime(parseInt(data.data[i].bookWeb_order_time))+`</span></p>
//                     <button id="`+data.data[i].bookWeb_order_id+`"></button>
//                   </li>
//                 `)
//
//                     if(data.data[i].bookWeb_order_status==0){
//                         $('#goodListALL li:eq('+i+') button').addClass('buyBtn').html('支付')
//                     } else if(data.data[i].bookWeb_order_status==1){
//                         $('#goodListALL li:eq('+i+') button').addClass('shouhuoBtn').html('确认收货')
//                     } else if(data.data[i].bookWeb_order_status==2){
//                         $('#goodListALL li:eq('+i+') button').addClass('commentBtn').html('评论')
//                     } else{
//                         $('#goodListALL li:eq('+i+') button').addClass('deleteBtn').html('删除')
//                     }
//                     orderStatusChange($('#goodListALL li:eq('+i+') button').attr('class'),window.localStorage.getItem('nowUser'),data.data[i].bookWeb_order_status)
//
//                 }
//             }
//         },
//         error:function (data) {
//             alert(data.msg);
//         }
//     })
// }



//订单操作
function orderStatusChange(btnName,user,num) {
  $('.'+btnName).click(function () {
      var id=$(this).attr('index');
      var box='.myOrderTitle li:eq('+num+')';
      // console.log(box);
      if(confirm('是否要"'+$(this).text()+'"')){
          $.ajax({
              type:"POST",
              url:"../../src/book.php",
              data:{type:'orderStatusChange',user:user,orderId:id},
              dataType: 'json',
              success:function (data) {
                  alert(data.msg);
                  // console.log(data);
                  $(box).click();
              },
              error:function (data) {
                  alert(data.msg);
              }
          })

      }
  })
}


//时间格式转换
function timestampToTime(time) {
    // console.log(time);
    var date = new Date(time);
    Y = date.getFullYear() + '-';
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    D = (date.getDate() < 10? '0'+date.getDate():date.getDate())+' ';
    h = (date.getHours() <10? '0'+date.getHours():date.getHours())+ ':';
    m = (date.getMinutes() < 10 ? '0'+(date.getMinutes()) : date.getMinutes()) + ':';
    s = (date.getSeconds() < 10 ? '0'+(date.getSeconds()) : date.getSeconds());
    return Y+M+D+h+m+s;
}