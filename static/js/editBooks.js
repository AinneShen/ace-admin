/**
 * Created by 昏睡 on 2017/9/4.
 */
$(function(){
    var href = window.location.href,
        id = href.split("id=")[1];
    if(id){
        editBooks(id);
    }
    function editBooks(id){
        //通过id获取这一行数据
        //$.ajax({
        //    url:"",
        //    type:"post",
        //    data:{id:id},
        //    success:function(data){
        var data = {
            novelName:"我的极品老婆",
            paidanCount:100,
            payChapter:10,
            novelStation:"天天",
            channel:"女频",
            newBook:false,
            intro:"小说简介。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。",
            novelChapter:[
                {title:"第一章",link:"xx.html"},
                {title:"第二章",link:"xx.html"}
            ],
            novelCover:"https://ommdq027l.qnssl.com/novels/14923344088576.jpg?imageView2/0/w/300/q/75"
        };

        $("#novelName").val(data.novelName);
        $("#paidanCount").val(data.paidanCount);
        $("#payChapter").val(data.payChapter);
        $("#novelStation").val(data.novelStation);
        $("#channel").val(data.channel);
        $("#newBook").attr("checked",data.newBook);
        $("#intro").val(data.intro);
        //    }
        //})
    }

    $("#form").validate({
        errorPlacement: function(error, element) {
            error.appendTo(element.parent().next());
        },
        submitHandler:function(form){
            form.submit();
        },
        rules: {
            novelName:"required",
            paidanCount:{
                required:true,
                number:true
            },
            payChapter:{
                required:true,
                number:true
            },
            intro:"required",
            novelChapter:"required",
            novelCover:"required"
        }
    });
})