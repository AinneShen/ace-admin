/**
 * Created by 昏睡 on 2017/9/5.
 */
$(function(){
    $("#addBooks").click(function(){
        window.location.href = "editBooks.html";
    })
    $(".edit").click(function(){
        window.location.href = "editBooks.html?id="+$(this).attr("data-id");
    })
    $(".delete").click(function(){
        $("#modal").modal("show");
        $("table tr").each(function(i,v){
            $(v).removeClass("deleting");
        })
        $(this).closest("tr").addClass("deleting");
    })
    $("#sureToDel").click(function(){
        //$.ajax({
        //    url:"",
        //    type:"post",
        //    data:{id:$(this).attr("data-id")},
        //    success:function(data){
        $("table .deleting td:last-child").html("已删除");
        $("table .deleting").addClass("deleted").removeClass("deleting");
        $("#modal").modal("hide");
        //    }
        //})
    })
})