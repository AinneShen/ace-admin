/**
 * Created by ��˯ on 2017/9/4.
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
        //��������
        //����ɹ�֮��ˢ��ҳ��
        window.location.reload();
    })
})