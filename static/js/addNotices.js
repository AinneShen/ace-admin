/**
 * Created by 昏睡 on 2017/9/4.
 */
$(function(){
    var href = window.location.href,
        id = href.split("id=")[1];
    if(id){
        editNotice(id);
    }
    function editNotice(id){
        //通过id获取这一行数据
        //$.ajax({
        //    url:"",
        //    type:"post",
        //    data:{id:id},
        //    success:function(data){
        var data = {
            title:"关于规避诱导关注风险的通知",
            date:"2017-08-13",
            operator:"x'c'vb'vcbn",
            operatingTime:"2017-08-10 08:30",
            content:'<div style="line-height:1.8em;">各位小伙伴们，因最近有发生个别渠道公众号被封，提示诱导关注，现平台升级，将原来强制关注升级成 主动关注和强制关注（点击查看区别<br> <a href="http://mp.weixin.qq.com/s/X2CyVEOOG00JVWg1Weh0gg" target="_blank">http://mp.weixin.qq.com/s/X2CyVEOOG00JVWg1Weh0gg</a>  ）。各位小伙伴们推广的时候，可以尽量选择主动关注，这样可以避免风险，特别是已经有较多粉丝的服务号。具体设置：左边菜单-公众号设置-关注模式-主动关注。<br></div>'
        };
        $("#inputTitle").val(data.title);
        $("#inputDate").val(data.date);
        KindEditor.ready(function(K) {
            editor.html(data.content);
        })
        //    }
        //})
    }
    $("#inputDate").datetimepicker({
        format: 'YYYY-MM-DD',
        defaultDate: new Date()
    })
    $("#form").validate({
        errorPlacement: function(error, element) {
            error.appendTo(element.parent().next());
        },
        submitHandler:function(form){
            if(editor.html()==''){
                $("#inputArticle").parent().next().css("display","block");
                return;
            }else{
                $("#inputArticle").parent().next().css("display","none");
            }
            form.submit();
            window.location.href = "addNotices.html";
        },
        rules: {
            inputTitle:"required",
            inputDate:"required"
        }
    });

})