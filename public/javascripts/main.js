/**
 * Created by white on 16/3/17.
 */
var photots = $(".photos div");
var photoW;
var winH = $(window).height();
var winW = $(window).width();
var imgIndex;

$(function () {
    for (var i = 1; i <= 8; i++) {
        $("#img" + i).css({
            'background': 'url(images/main/mainImg/' + i + '.jpg) no-repeat',
            'background-position': 'center',
            'background-size': '100%'
        })
    }
    photoW = photots.width();
    photots.css("height", photoW + 'px');


    showText();
    $(".boxImg1").css({
        'background': 'url("images/main/mainImg/1.jpg")no-repeat',
        'background-size': '90%',
        'background-position': 'center'
    });


});


function showText() {
    var str = '';
    if (words.length > 5) {
        words.length = 5;
    } else {

    }
    for (var i = 0; i < words.length; i++) {
        str += '<div class="passBox"> ' +
            '<h4 data-id="' + i + '">' + words[i].title + '</h4> ' +
            '<h5> ' +
            '<span>' + words[i].addDate + '</span> ' +
            '<a href="javascript:;">' + words[i].types + '</a> <a href="javascript:;">white</a> ' +
            '</h5> ' +
            '<div class="boxImg boxImg' + i + '"></div>' +
            ' <p> ' + words[i].content + '</p> ' +
            ' <div class="clear"></div>' +
            '</div>     '
    }
    $(".passCon").html(str);

}

photots.on('click', function () {
    imgIndex = $(this).index();
    $(".fullScreen").fadeIn(300);
    $(".fullScreen img").attr('src', 'images/main/mainImg/' + (imgIndex + 1) + '.jpg');
    fullScreen();
});


//imgPosition
function fullScreen() {
    var fullImg = $(".fullScreen img");
    var fullImgH = fullImg.height();
    var fullImgW = fullImg.width();
    fullImg.css('top', (winH - fullImgH) / 2 + 'px');
    fullImg.css('left', (winW - fullImgW) / 2 + 'px');

}

//点击关闭fullImg
$(".fullScreen").on('click', function () {
    $(".fullScreen").fadeOut(100);
    $(".fullScreen img").attr('src', '');

});


//从txt获取文本
//    $.get('aaa.txt').success(function (content) {
//        console.log(content);
//         //content就为文件data.txt的文本内容了,最好保存成utf-8
//});


$(function () {
    $(".passBox h4").on('click', function () {
        var h4Num = $(this).attr("data-id");
        console.log(h4Num);
        window.location.href = 'http://hellowhite.cn/passages.html?pages=' + h4Num;
    });

});


//passages获取url参数
function GetStringValue() {
    String.prototype.getQueryString = function (name)//name 是URL的参数名字
    {
        var reg = new RegExp("(^|&|\\?)" + name + "=([^&]*)(&|$)"), r;
        if (r = this.match(reg)) return unescape(r[2]);
        return null;
    };
    var pagesNum = window.location.href.getQueryString("pages");
    for (var i = 0; i < words.length; i++) {
        if (i == pagesNum) {
            $("#title").html(words[i].title);
            $("#addDate").html(words[i].addDate);
            $("#types").html(words[i].types);
            $("#mainText").html(words[i].content);

        }

    }

}




console.log( $(window).height() + "---" + $(document).height()  );



