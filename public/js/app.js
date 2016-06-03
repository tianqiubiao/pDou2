/*
* #news_about  媒体报道分页
* #sell_money_list  定期理财feny
* .money_item_list
* #other_money_list 他人转让分页列表
* */

var regex = /[\da-zA-Z]{6,20}/
var phoneReg = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/;


/*
* a:点击id
* b:显示父级id
* c：显示元素
* d:点击颜色
*
* */

function code(a, b, c, d, e) {
    var ulList = document.getElementById(a), ulLists = ulList.getElementsByTagName(e);
    var divList = document.getElementById(b), divLists = divList.getElementsByClassName(c);
    ~function bindCard(far, son) {
        for (var i = 0, len = far.length; i < len; i++) {
            ~function (i) {
                far[i].onclick = function (e) {
                    e.stopPropagation()
                    e.returnValue = false;
                    for (var j = 0, len = son.length; j < len; j++) {
                        if (j === i) {
                            if (e.target === far[i]) {
                                $('#bandCard').css('display', 'block');
                                $('.my_account').css('display', 'none')
                            } else {
                                $('#bandCard').css('display', 'none');
                                $('.my_account').css('display', 'block')
                            }

                            far[i].className = d;
                            son[i].className = c + " navDis";

                            continue;
                        } else {

                            far[j].className = "  pointer ";
                            son[j].className = c;

                        }
                    }
                }
            }(i)
        }
    }(ulLists, divLists)
}

/*
* 理财点击切换
* */
itemList("money_item_list", 'bgOrange');
/*分页切换*/
itemList('fyList', 'fyListBg')
function itemList(list1, list2) {
    var fys = document.getElementsByClassName(list1)
    for (var o = 0, lengthA = fys.length; o < lengthA; o++) {
        fyList(fys[o], list2)
    }
}
function fyList(a, b) {
    $(a).find('li').click(function () {
                              var fyList = $(a).find('li');
                              for (var i = 0, len = fyList.length; i < len; i++) {
                                  if (this === fyList.get(i)) {
                                      fyList.get(i).className = b
                                  } else {
                                      fyList.get(i).className = ""

                                  }
                              }
                          }
    )
}


/*签到*/
$('#true_qd').click(function () {
                        var boole = document.getElementById('bool');
                        if (!boole.bool) {
                            boole.setAttribute('bool', 'true');
                        }

                        console.log(boole.bool)
                        if (!!(boole.bool = "true")) {
                            boole.setAttribute('bool', 'false');
                            $(this).text('已签到');
                            $(this).attr("class", 'noqd')
                            $('#my_account_qd').css('display', 'block');

                            accountQianDao();
                            $('#true_qd').unbind('click');
                            return;
                        }

                    })
function accountQianDao() {
    var timer = window.setTimeout(function () {
                                      $('#my_account01Top').css('display', 'none');
                                      $('#my_account01Foot').css('display', 'block');
                                      $('#my_account_qd').css('display', 'none');

                                      window.clearTimeout(timer);
                                      accountQianDao = null;
                                  }, 3000
    )
}
/*弹出登录框*/

$('.sign').click(function(){
    if($(this).text()==='登录'||'已有账号？马上登录'){
        $('.sign_on').css('display','block')
    }
})
/*弹出框*/
$('.sign_close').click(function(e){
   $('.sign_on').css('display','none')
})

/*注册事件*/
$('.trueDisplay>span').click(function () {
                                 if ($(this).children()[0].alt === 'false') {
                                     $(this).children().css('display', 'block');
                                     $(this).children()[0].alt = 'true';
                                     var that = $(this);
                                     $('.true_sign_on').click(function () {
                                                                  if (that.children()[0].alt === 'true' && phoneReg.test($(this).val())) {


                                                                      alert(1);
                                                                      //发送请求
                                                                  } else {
                                                                      alert('2')
                                                                  }
                                                              })
                                 } else {
                                     $(this).children().css('display', 'none');
                                     $(this).children()[0].alt = 'false';
                                     $('.true_sign_on').unbind('click');
                                 }
})

/*密码验证*/
$('input').blur(function (e) {
                    if (this.id === "sing0") {
                        if ($(this).val().length === 0) {
                            $('#worUesr').text('请输入手机号！')
                        } else if (!phoneReg.test($(this).val())) {
                            $('#worUesr').text('请输入正确手机号！')

                        } else {
                            $('#worUesr').text('')
                        }
                    } else if (this.id === "sing1") {
                        var that = $(this);
                        var a = $('#passW')
                        passWord(that, a)

                    } else if (this.id === "sing2") {
                        var a = $('#passWT')
                        var that = $(this);
                        passWord(that, a)
                    } else if (this.id === "sing3") {

                    } else if (this.id === "sing4") {

                    }
})
function passWord(that, a) {

    if (that.val().length === 0) {
        a.html('请输入密码！')
    } else if (that.val().length<=12 &&that.val().length>=6 ) {
        if (regex.test(that.val())) {
            a.html('密码不符合要求')
        }else {
            a.html('2')
        }
    }else if(! (that.val().length >= 6 && that.val().length <= 12)){
        a.html('密码长度不符合！ ')
    }else if (a === $('#passWT')) {
        that.val() === $('#sing1').val() ? a.html('') : a.html('两次密码输入不一致！')
    }else {
        a.html('1')
    }
}
/*进入账户*/
$('#account_in').click(function(){
    window.location.href='w-wodezhnghu.html'
})
