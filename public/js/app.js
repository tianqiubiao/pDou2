/*
 * #news_about  媒体报道分页
 * #sell_money_list  定期理财feny
 * .money_item_list
 * #other_money_list 他人转让分页列表
 * */

var regex = /[\da-zA-Z]{6,20}/
//var phoneReg = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/;
var phoneReg = /^(1[3-5|7-8]\d)\d{8}$/;
var a = /^((13\d)|(14[4,7])|(15[^4,\D])|(17[0,6,7,8])|(18\d))(\d{8})$/;
var p = !/^([^\s'‘’]{6,12})$/;

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
                        console.log('1')
                        $(this).text('已签到');
                        $(this).attr("class", 'noqd')
                        $('#my_account_qd').css('display', 'block');
                        accountQianDao();
                        $('#true_qd').unbind('click');
                    })
function accountQianDao() {
    var timer = window.setTimeout(function () {
                                      $('#my_account_qd').css('display', 'none');
                                      window.location.href = 'account_qdxiangqing.html';
                                      window.clearTimeout(timer);
                                      accountQianDao = null;
                                  }, 3000)
}
/*弹出层*/
var a = null;
$('.sign').click(function () {
                     a = this.getAttribute('data-type');
                     $('.sign_on').css('display', 'block');
                     $('.sign_on').find('.' + a).css('display', 'block')

                 }
)
/*关闭弹出层*/
$('.sign_close').click(function (e) {
                           $('.sign_on').css('display', 'none');
                           $('.' + a).css('display', 'none');
                           a = null;
                       }
);

/*注册事件*/
$('.spanImg_seco').click(function () {
                             if ($(this).children()[0].alt === 'false') {
                                 $(this).children().css('display', 'block');
                                 $(this).children()[0].alt = 'true';
                                 var that = $(this);

                                 $('.true_sign_on').click(function () {
                                                              if (that.children('img')[0].alt === "true" && phoneReg.test($('#sing0').val())) {

                                                                  window.location.href = 'zhucechenggong.html';
                                                                  //发送请求
                                                              } else {
                                                                  alert('2')
                                                              }
                                                          }
                                 )
                             } else {
                                 $(this).children().css('display', 'none');
                                 $(this).children()[0].alt = 'false';
                                 $('.true_sign_on').unbind('click');
                             }
                         }
)

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
                        //passWord(that, a)

                    } else if (this.id === "sing2") {
                        var a = $('#passWT')
                        var that = $(this);
                        //passWord(that, a)
                    } else if (this.id === "sing3") {

                    } else if (this.id === "sing4") {

                    }
                }
)
function passWord(that, a) {

    if (that.val().length === 0) {
        a.html('请输入密码！')
    } else if (that.val().length <= 12 && that.val().length >= 6) {
        if (regex.test(that.val())) {
            a.html('密码不符合要求')
        } else {
            a.html('2')
        }
    } else if (!(that.val().length >= 6 && that.val().length <= 12)) {
        a.html('密码长度不符合！ ')
    } else if (a === $('#passWT')) {
        that.val() === $('#sing1').val() ? a.html('') : a.html('两次密码输入不一致！')
    } else {
        a.html('1')
    }
}
/*进入账户*/
$('#account_in').click(function () {
                           window.location.href = 'w-wodezhnghu.html'
                       }
)
function dataHref() {
    $("*[data-href]").click(function () {
                                var url = $(this).attr("data-href");
                                var target = $(this).attr("data-target");
                                if (url != "") {
                                    if (target == "_blank") {
                                        window.open(url, target);
                                        loading();
                                    } else if (target == "_self") {
                                        window.open(url, target);
                                        loading();
                                    } else if (target == "_parent") {
                                        window.open(url, target);
                                        loading();
                                    } else if (target == "_top") {
                                        window.open(url, target);
                                        loading();
                                    } else {
                                        window.location.href = url;
                                        loading();
                                    }
                                } else {
                                    return false;
                                }
                            }
    );
}
dataHref()

/*进度条*/
function bfb_deco() {
    $('.bfb_yuan').each(function () {
                            var that = $(this)
                            var yuanCenter = $(this).find('.yuan_center');
                            var yuanTop = $(this).find('.yuan_top')
                            var bfb_J = $(this).find('.bfb_J').get(0).innerText;
                            $(this).find('.height_yuan').css('height', a(bfb_J));
                            function a(bfb_J) {
                                switch (bfb_J) {
                                    case '已满标':
                                        border();
                                        that.find('.bfb_J').css('color', '#FFE98D');
                                        return '0%';
                                        break;
                                    case '已结束':
                                        return function () {
                                            that.css('border', '2px solid #eee');
                                            yuanCenter.css('background', '#ccc');
                                            yuanTop.css('background', '#eee')
                                            return '0'
                                        };
                                        break;
                                    case '还款中':
                                        border();
                                        return '0%';
                                        break;
                                    default:
                                        border();
                                        return (100 - parseInt(bfb_J)) + "%";
                                        break;
                                }
                                function border() {
                                    that.css('border', '2px solid #CDF0F5');
                                    yuanCenter.css('background', '#6ed3d6');
                                    yuanTop.css('background', '#CDF0F5')

                                }
                            }
                        }
    );
    $('.zr .lcFD').each(function () {
                            var reg = /^(\d||\d+)\/(\d||\d+)(份)$/
                            var bfb_J = $(this).find('.bfb_J').get(0).innerText;
                            var fang = $(this).find('.bfb_fang');
                            var fang_span = $(this).find('.weight_fang');
                            var lcFDF = $(this).find('.lcFDF');
                            var lcFDQ = $(this).find('.lcFDQ');
                            fang_span.css('', a());
                            function a() {
                                if (bfb_J === '已结束') {
                                    fang.css('border', '2px solid #eee');
                                    fang_span.css('background', '#ccc');
                                    lcFDF.css('display', 'none');
                                    lcFDQ.get(0).className = 'lcFDQ posrel';
                                    fang_span.css({'background': '#ccc', 'width': '100%'});
                                } else {
                                    if (reg.test(bfb_J)) {
                                        fang.css('border', '2px solid #CDF0F5');
                                        fang_span.css({
                                                          'background': '#6dd3d7',
                                                          'width': (reg.exec(bfb_J)[1] / reg.exec(bfb_J)[2]) * 100 + '%'
                                                      }
                                        );
                                    } else {
                                        lcFDF.css('display', 'none');
                                        lcFDQ.get(0).className = 'lcFDQ posrel';
                                    }

                                }
                            }
                        }
    )
    $('.moneyCenter .mCLi6').each(function () {
                                      var that = $(this);
                                      var mcLi7 = that.next('.mCLi7');
                                      var mcLi7Num = mcLi7.find('p').get(0).innerText;
                                      var mcLi6Height = that.find('sellHeight');

                                      var sell_height_num = that.find('.sellHeightNum').get(0).innerText;
                                      that.find('.sellHeight').css('height', function () {
                                                                       switch (mcLi7Num) {
                                                                           case '已满标':
                                                                               mcLi7.addClass('bgYellow');
                                                                               return '0';
                                                                               break;
                                                                           case '还款中':
                                                                               mcLi7.addClass('bgGrey');
                                                                               return '0';
                                                                               break;
                                                                           case '已结束':
                                                                               mcLi7.addClass('bgGrey');
                                                                               that.children().first().addClass('bgGrey').removeClass('bgGreen');
                                                                               return '0';
                                                                               break;
                                                                           default:
                                                                               mcLi7.addClass('bgPink');
                                                                               return (100 - parseInt(sell_height_num)) + "%";
                                                                               break;
                                                                       }
                                                                   }
                                      )
                                  }
    )
}
bfb_deco();
/*千分符*/
function splits(str) {
    var str2 = str.toString().split(".")[1]
    str2 = typeof (str2) === "undefined" ? '.00' : '.' + str2
    return str.toString().split(".")[0].split("").reverse().join("").replace(/(\d{3}(?!$))/g, "$1,").split('').reverse().join('') + str2;
}

/*分页控件*/
function Pages() {


}


/*退出*/
$('.clearCook').click(function () {
                          var date = new Date();

    date.setTime(date.getTime()-10000);

                          document.cookie="userId=828; expires="+date.toGMTString();
                          cookie = document.cookie;
                          for (var i = 0, length = cookie.length; i < length; i++) {
                              cookie[i]='';
                          }
console.log(cookie);
                          $('.top').get(1).style.display = 'none';
                          $('.top').get(0).style.display = 'block';
                      }
)































