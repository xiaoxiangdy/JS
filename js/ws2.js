window.onload=function () {


    /*简单的渐变
       var timer = setInterval(f,20);
       var val = 100;
       function f () {
           if(val>=0){
               var bg = document.getElementById("bg1");
               bg.style.opacity = val / 100;
               val--;
           }
       } */

    //游戏介绍栏滑动
    var ozuo = document.getElementById("zuo");
    var ot1 = document.getElementById("t1");
    var ot3 = document.getElementById("t3");
    var ot2 = document.getElementById("t2");
    var timer = null;
    var timer1 = null;
    var timer2 = null;
    var timer3 = null;
    ozuo.onclick = function () {
        window.open("wx3.html");
    }
    ozuo.onmouseover = function () {
        clearInterval(timer7);
        clearInterval(timer6);
        clearInterval(timer5);
        clearInterval(timer4);

        function s1() {

            if(ot2.offsetTop < -80){
                clearInterval(timer1);
            }else {
                var v = ot2.offsetTop;
                ot2.style.top=v - 2 + "px";
                f();
            }
        }
        var val = 100;
        function f () {
            if(val>=0){

                ot2.style.opacity = val / 100;
                val--;
            }
            if (ot2.style.opacity == 0){
                clearInterval(timer);
            }
        }

        function s2() {

            if(ot1.offsetTop < 76){
                clearInterval(timer2);
            }else {
                var v1 = ot1.offsetTop;
                ot1.style.top=v1 - 2 +"px";
            }
        }

        function s3() {

            if(ot3.offsetTop <100){
                clearInterval(timer3);
            }else{
                var v2 = ot3.offsetTop;
                ot3.style.top=v2 - 2 + "px";
            }
        }
        timer = setInterval(f,20);
        timer1 = setInterval(s1,1);
        timer2 = setInterval(s2,5);
        timer3 = setInterval(s3,5);

    }
    var timer7 = null;
    var timer4 = null;
    var timer5 = null;
    var timer6 = null;

    ozuo.onmouseout = function () {

        clearInterval(timer);
        clearInterval(timer1);
        clearInterval(timer2);
        clearInterval(timer3);
        function s1() {

            if(ot2.offsetTop > 56){
                clearInterval(timer4);
            }else {
                var v = ot2.offsetTop;
                ot2.style.top=v + 2 + "px";
                f();
            }
        }
        var val = 0;
        function f () {
            if(val<=100){

                ot2.style.opacity = val / 100;
                val++;
            }
            if(ot2.style.opacity == 1){
                clearInterval(timer);
            }
        }

        function s2() {

            if(ot1.offsetTop > 160){
                clearInterval(timer5);
            }else {
                var v1 = ot1.offsetTop;
                ot1.style.top=v1 + 2 +"px";
            }
        }

        function s3() {

            if(ot3.offsetTop >180){
                clearInterval(timer6);
            }else{
                var v2 = ot3.offsetTop;
                ot3.style.top=v2 + 2 + "px";
            }
        }

        timer7 = setInterval(f,20);
        timer4 = setInterval(s1,1);
        timer5 = setInterval(s2,5);
        timer6 = setInterval(s3,5);

    }

//图片的滚动轮播



    var gun = document.getElementById("gun");
    var oli = gun.getElementsByTagName("li");
    var dibu = document.getElementById("list");
    var oll = dibu.getElementsByTagName("li");
    var ig = null;
    var s1 = 1;
    var s = 0;
    var s2 = 0;
    var timer8 = null;
    var timer9 = setTimeout(lunbo2,3000);
    var timer10 = null;
    var timer11 = null;
    var timer12 = null;



    function lunbo2() {
        timer8= setInterval(lunbo,5);
    }


    for(var i = 0;i<oli.length;i++){
        ig = oli[i].getElementsByTagName("img")[0];
        ig.style.left = 799*i + "px";
    }

    function kzlunbo() {
        timer8 = setInterval(lunbo,5);
    }


    function lunbo() {

        if (s1 == 7) {
            s2=0;
            s1 = 1;
            s=0;
            for (var j = 0; j < 7; j++) {
                oll[j].className = "";
            }
            oll[0].className="on";
            timer10 = setInterval(huifu,1);
            clearInterval(timer8);
        }else{
            for (var i = 0; i < oli.length; i++) {

                ig = oli[i].getElementsByTagName("img")[0];
                ig.style.left = ig.offsetLeft - 17 + "px";
                s += 17;
                if (s == 799 * 7 * s1) {
                    for (var j = 0; j < 7; j++) {
                        oll[j].className = "";
                    }
                    oll[s1].className = "on";
                    clearInterval(timer8);
                    s1++;
                    timer11 = setTimeout(kzlunbo, 3000);
                    break;
                }
            }
        }
    }
    function huifu() {
        for(var i=0;i<oli.length;i++){
            ig = oli[i].getElementsByTagName("img")[0];
            ig.style.left = ig.offsetLeft + 47 + "px";
            s2+=47;
            if(s2 == 799 * 7 * 6){
                clearInterval(timer10);
                setTimeout(lunbo2,3000);
            }
        }
    }
    var otb = document.getElementById("taibai");
    var otx = document.getElementById("wudu");
    var ozw = document.getElementById("zhenwu");
    var ogb = document.getElementById("gaibang");
    var owd = document.getElementById("tianxiang");

    otb.onmouseover = function () {
        otb.style.overflow = "visible";
        otx.style.overflow = "hidden";
        ozw.style.overflow = "hidden";
        ogb.style.overflow = "hidden";
        owd.style.overflow = "hidden";

        otb.style.zIndex = 5;
        otx.style.zIndex = 4;
        ozw.style.zIndex = 3;
        ogb.style.zIndex = 2;
        owd.style.zIndex = 1;
    }

    otx.onmouseover = function () {
        otx.style.overflow = "visible";
        otb.style.overflow = "hidden";
        ozw.style.overflow = "hidden";
        ogb.style.overflow = "hidden";
        owd.style.overflow = "hidden";

        owd.style.zIndex = 1;
        ogb.style.zIndex = 2;
        ozw.style.zIndex = 3;
        otb.style.zIndex = 4;
        otx.style.zIndex = 5;
    }


    ozw.onmouseover = function () {
        ozw.style.overflow = "visible";
        otb.style.overflow = "hidden";
        otx.style.overflow = "hidden";
        ogb.style.overflow = "hidden";
        owd.style.overflow = "hidden";

        otb.style.zIndex = 3;
        otx.style.zIndex = 4;
        ozw.style.zIndex = 5;
        ogb.style.zIndex = 2;
        owd.style.zIndex = 1;
    }

    ogb.onmouseover = function () {
        ogb.style.overflow = "visible";
        otb.style.overflow = "hidden";
        ozw.style.overflow = "hidden";
        otx.style.overflow = "hidden";
        owd.style.overflow = "hidden";

        otb.style.zIndex = 2;
        otx.style.zIndex = 3;
        ozw.style.zIndex = 4;
        ogb.style.zIndex = 5;
        owd.style.zIndex = 1;
    }


    owd.onmouseover = function () {
        owd.style.overflow = "visible";
        otb.style.overflow = "hidden";
        ozw.style.overflow = "hidden";
        ogb.style.overflow = "hidden";
        otx.style.overflow = "hidden";

        otb.style.zIndex = 1;
        otx.style.zIndex = 2;
        ozw.style.zIndex = 3;
        ogb.style.zIndex = 4;
        owd.style.zIndex = 5;
    }






}
