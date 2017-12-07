/**
 * Created by 昏睡 on 2017/9/4.
 */
$(function(){
    $(".readyToPay").click(function(){
        var money = "&yen;21179",
            account = "6217009901234567890";
        $("#myModal").modal("show");
        $("#myModal .money").html(money);
        $("#myModal .account").html(account);
    })
    $("#sureToPay").click(function(){
        //发送请求
        //请求成功之后刷新页面
        window.location.reload();
    })
})