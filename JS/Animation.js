/**
 * Created by Ashish Goyal on 2/21/2017.
 */
$(function () {
    $("#tree-event").hover(
        function () {
            $("#tree-button").fadeIn("slow");
        },
        function () {
            $("#tree-button").fadeOut("slow");
        }
    );

    $("#smoke-event").hover(
        function () {
            $("#smoke-button").fadeIn("slow");
        },
        function () {
            $("#smoke-button").fadeOut("slow");
        }
    );

    $("#diya_painting-event").hover(
        function () {
            $("#diya_painting-button").fadeIn("slow");
        },
        function () {
            $("#diya_painting-button").fadeOut("slow");
        }
    );
});
