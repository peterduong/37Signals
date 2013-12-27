var dayNames = new Array("Sunday","Monday","Tuesday","Wednesday", "Thursday","Friday","Saturday");
var now = new Date();
$(document).ready(function() {
	// Display the date in the navigation bar section
	$('#date').append("Happy " + dayNames[now.getDay()] + ".");
	
	$('#basecamp').hover(function(){$(".bc").css("display", "block");}, function(){$(".bc").css("display", "none");});
	$('#highrise').hover(function(){$(".hr").css("display", "block");}, function(){$(".hr").css("display", "none");});
	$('#campfire').hover(function(){$(".cf").css("display", "block");}, function(){$(".cf").css("display", "none");});
});