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
        rules: {
            oldPsw:{
                required:true,
                rangelength:[6,20]
            },
            newPsw:{
                required:true,
                rangelength:[6,20]
            },
            confirmPsw:{
                required:true,
                equalTo:"#newPsw"
            },
        }
    });

})