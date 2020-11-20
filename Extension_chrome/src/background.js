var STRINGS ={
	a:'"title":{"runs":[{"text":"',
	// b:'{"items":[{"gridVideoRenderer":{"videoId":"',
	b:'"videoId":"',
	c:'https://www.youtube.com/embed/'
};

var interval;
var url = "https://www.youtube.com/c/JavaDevOne/videos";
var videoName= "ERROR";
var embedLink = "";

function getVideoName(response){
	var index1, index2, videoNameString;
	index1 = response.indexOf(STRINGS.a)+STRINGS.a.length;
	index2 = response.indexOf('"',index1)
	videoNameString = response.substring(index1,index2);
	videoName = videoNameString;
}

function getEmbedLink(response){
	var index1, index2, videoEmbedString;
	index1 = response.indexOf(STRINGS.b)+STRINGS.b.length;
	index2 = response.indexOf('"',index1);
	videoEmbedString = response.substring(index1,index2);
	embedLink = STRINGS.c+videoEmbedString;
}

function analyze(response){
	getVideoName(response);
	getEmbedLink(response);
}
function check() {
	if (localStorage.youtubechannel) {
		url = localStorage.youtubechannel;
	};
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			analyze(xmlhttp.responseText);
		};
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send(null);
	//*interval = setTimeout(check,2000);*//
};
check();