window.onload = function () {
    var ot1 = document.getElementById("t1");
    var ot2 = document.getElementById("t2");
    var obox = document.getElementById("box");
    window.scrollTop = (0,0);
    var height1=  document.documentElement.clientHeight;
    ot1.style.height = height1+ "px";
    ot2.style.height = height1 + "px";
    obox.style.height = 2 * height1 + "px";
    ot2.style.top = height1 + "px";
    var v1 = 0;
    var scrollFunc=function(e){
        e=e || window.event;
        var t1=document.getElementById("wheelDelta");
        var t2=document.getElementById("detail");
        if(e.wheelDelta){//IE/Opera/Chrome
            v1 = e.wheelDelta;
        }else if(e.detail){//Firefox
            v1 = e.detail;
        }
    }
    /*注册事件*/
    if(document.addEventListener){
        document.addEventListener('DOMMouseScroll',scrollFunc,false);
    }//W3C

    window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome


    //禁用滚轮
    function disabledMouseWheel() {
        if (document.addEventListener) {
            document.addEventListener('DOMMouseScroll', scrollFunc, false);
        }//W3C
        window.onmousewheel = document.onmousewheel = scrollFunc;//IE/Opera/Chrome
    }
    disabledMouseWheel();

    window.onload=disabledMouseWheel;

    setInterval(f,10);
    var s = 0;
    function f() {
        disabledMouseWheel();
        if (v1 < 0) {
            s += 10;
            window.scrollTop(0, s);
        }
    }

}
