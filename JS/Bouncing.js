/**
 * Created by Ashish Goyal on 2/20/2017.
 */
$(function () {

    $("#twitter_bounce").mouseenter(
        function () {
            $("#twitter").effect("bounce","slow");
        }
    )

    $("#facebook_bounce").mouseenter(
        function () {
            $("#facebook").effect("bounce","slow");
        }
    )
});