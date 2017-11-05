/**
 * Created by Ashish Goyal on 2/21/2017.
 */
$(function () {
    $(".recycling-holder").click(
        function () {
            $("#div-1-back,.fa-recycle").slideToggle("fast");
        }
    );
    $(".heartbeat-holder").click(
        function () {
            $("#div-2-back,.fa-heartbeat").slideToggle("fast");
        }
    );
    $(".empowerment-holder").click(
        function () {
            $("#div-3-back,.fa-intersex").slideToggle("fast");
        }
    );
    $(".awareness-holder").click(
        function () {
            $("#div-4-back,.fa-send-o").slideToggle("fast");
        }
    )
});