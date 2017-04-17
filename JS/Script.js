/**
 * Created by Ashish Goyal on 2/24/2017.
 */
$(function () {

    $("#submit").click(
        function () {
            var user,e,mes,sub;

            user = $("#user_name").val() ;
            e = $("#email").val();
            mes = $("#message").val();
            sub = $("#subject").val();

            $.get("/",
                {
                    /*user_name : user,
                    email: e,
                    message: mes,
                    subject: sub*/
                },function (data) {

                }
            )
                
        }
    )

});