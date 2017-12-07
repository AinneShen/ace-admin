/**
 * Created by »èË¯ on 2017/9/5.
 */
$(function(){
    $("#form").validate({
        errorPlacement: function(error, element) {
            error.appendTo(element.parent().next());
        },
        submitHandler:function(form){
            form.submit();
        },
        rules:{
            inputAccount:"required",
            inputName:"required"
        }
    });
})