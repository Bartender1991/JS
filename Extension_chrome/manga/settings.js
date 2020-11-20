$(function(){
	var data;

	function getSaverChannel(){
		if (localStorage.youtubechannel){
			$("#youtubeLink").attr('placeholder',localStorage.youtubechannel);
		}
	setTimeout(getSaverChannel,1000);
	}getSaverChannel();

	function checkParameters(){
		if (data.length < 28) return "invalid URL";
		if (data.indexOf("video") == -1) data =data.replace(/\/featured/i,"")+"/videos";
		if (data.indexOf("youtube") == -1) return"Invalid URL";
		if (data.substring(data.length, data.length-6) != "videos") return "invalid URL";

		return true;
	}

	$("#submit").click(function(){
		$("#checkResponse").remove();
		data = $("#youtubeLink").val();
		var correct = checkParameters(data);
		if (correct == true ){
			localStorage.youtubechannel = data;
			$("body").append('<center><span id="checkResponse"><br><br><b>sucesfully saved</b></span></center>');
			$("#checkResponse").fadeOut(3500);
		}else{
			$("body").append('<center><span id="checkResponse"><br><br><b style="color:red !important">'+correct+' </b></span></center>');
		}
	});

});