var STRINGS ={
	a:'<a id="video-title" class="yt-simple-endpoint style-scope ytd-grid-video-renderer"',
	b:'href="/watch?v="',
	C:'https://www.youtube.com/embed/'
};

var interval;
var url = "https://www.youtube.com/user/jotajotavm";
var videoName= "ERROR";
var embedLink = "";

function getVideoName(response){
	var index1, index2, index3, videoNameString;
	index1 = response.indexOf(STRINGS.a );
	//index1 = response.indexOf('<a id="video-title" class="yt-simple-endpoint style-scope ytd-grid-video-renderer"')
	index2 = response.indexOf(">",index1)+1;
	index3 = response.indexOf("</a>", index2);
	videoNameString = response.substring(index2,index3);
	videoName = videoNameString;
	if (localStorage.lastvideo)
	localStorage.lastvideo = videoName
}

function getEmbedLink(response){
	var index1, index2, videoNameString;
	index1 = response.indexOf(STRINGS.b)+STRINGS.b.length;
	index2 = response.indexOf('" "',index1);
	videoNameString = response.substring(index1,index2);
	videoName = STRINGS.c+videoNameString;
}

function analyze(response){
	getVideoName(response);
	getEmbedLink(response);
}
function check() {
	//*console.log(localStorage);
	//console.log(url);*//
	if (localStorage.youtubechannel) {
		url = localStorage.youtubechannel;
	};
	//*console.log(localStorage);*//
	var xmlhttp = new XMLHttpRequest();
	//*console.log(xmlhttp);*//
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