$(document).ready(function(){
  $(".mo_view").css({"right": "-60%"}); /*μ²μμμΉ*/
	$(".close").hide();

	$(".mo_menu_btn").click(function () {
		$(".mo_view").stop(true, true).animate({"right": "0%"});
		$(".close").show();
	});

	$(".close").click(function () {
		$(".mo_view").stop(true, true).animate({"right": "-60%"});
		$(".close").hide();
	});
});