/**
 * Created by shang on 16/5/29.
 */
$(function() {
    //fastclick插件
    FastClick.attach(document.body);
    $("body").on("click",'[data-dismiss="alert"]',function(){
        $(this).closest(".alert").fadeOut();
    })

    // 设计图宽度
    window['adaptive'].desinWidth = 640;
    // body 字体大小
    //window['adaptive'].baseFont = 18;

     // 显示最大宽度 可选
     window['adaptive'].maxWidth = 480;
     // rem值改变后执行方法 可选
    /*window['adaptive'].setRemCallback = function () {
     alert(1)
     }
     */
    // 初始化
    window['adaptive'].init();


    //音频播放方法定义
    function audioPlay(el){
        var eleAudio = el.children("audio").get(0);
        var $iconVoice = el.children(".icon-voice");
        eleAudio.play();
        $iconVoice.addClass("working");

        console.log(eleAudio.duration);//打印音频时长

        //音频播放完毕回调
        eleAudio.onended=function(){
            $iconVoice.removeClass("working");//移除播放gif效果
        }
    };

    $("body").on("click","[data-toggle='audio-btn']",function(){
        audioPlay($(this));//播放音频
    });

    //领域选择
    function toggleSlid() {
        var t = $(".side-menu-bar");
        t.toggleClass("open");
    };
    $("body").on("click", '[data-toggle="slid-btn"]', function() {
        toggleSlid();
    });

});