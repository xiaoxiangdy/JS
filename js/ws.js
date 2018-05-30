window.onload=function (){
    var wz = document.getElementById("wenzi1");
    var yzz = document.getElementById("yz");
    var timer = setInterval(s1,8);
    var timer2 = null;
    var timer3 = null;
    var i = 0;
    //艺术字
    function s1() {
        wz.style.width=wz.offsetWidth - 50 +"px";
        wz.style.height= wz.offsetHeight - 29+"px";
        wz.style.top=wz.offsetTop + 5 +"px";
        wz.style.left=wz.offsetLeft + 10 + "px";
        if(wz.offsetWidth<700){
            clearInterval(timer);
            timer2 = setInterval(s2,5);
            timer3 = setInterval(s3,5);
            i = 1;
        }
    }
    //叶子
    function s2() {
        yzz.style.top=yzz.offsetTop + 6 +"px";
        yzz.style.left=yzz.offsetLeft - 10 + "px";
        if(yzz.offsetLeft < 1700){
            clearInterval(timer2);
        }
    }
    //进入官网logo
    var tubiao = document.getElementById("tubiao");
        tubiao.onmousemove = function () {
            tubiao.style.background =  "url(images/common.png)0 260px";
        }
        tubiao.onmouseout = function () {
        tubiao.style.background =  "url(images/common.png)";
        }
    //进入官网移动
    function s3() {
        tubiao.style.opacity = 1;
        tubiao.style.top = tubiao.offsetTop - 10 + "px";
        if(tubiao.offsetTop < 580){
            clearInterval(timer3);
        }
    }
    tubiao.onclick = function () {
        window.open("wx2.html");
    }
}

