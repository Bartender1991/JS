var STRINGS ={
	a:'></i> Capítulo ',
	b:'https://lectortmo.com/view_uploads/',
	c:'<span class="chapter-viewed-icon '
};


var interval;
var url = "https://lectortmo.com/library/manga/36989/Jujutsu-kaisen?orderDir=ASC";
var videoName= "ERROR";
var embedLink = "";
var view ="";
var indexPrincipal=0;
var indexNombre=[];
var indexView=[];
var indexLink=[];


function getVideoName(response){
	var index1, index2, videoNameString;
	index1 = response.indexOf(STRINGS.a,indexPrincipal)+STRINGS.a.length;
	index2 = response.indexOf('</a>',index1)
	indexPrincipal=index2;
	videoNameString = response.substring(index1,index2);
	videoName = videoNameString;
	indexNombre.push(videoName);
}

function getView(response){
	var index1, index2, mangaView;
	index1 = response.indexOf(STRINGS.c,indexPrincipal)+STRINGS.c.length;
	index2 = response.indexOf('"',index1);
	indexPrincipal=index2;
	mangaView = response.substring(index1,index2);
	view = mangaView;
	return (view);
}

function getEmbedLink(response){
	var index1, index2, videoEmbedString;
	index1 = response.indexOf(STRINGS.b,indexPrincipal)+STRINGS.b.length;
	index2 = response.indexOf('"',index1);
	indexPrincipal=index2;
	videoEmbedString = response.substring(index1,index2);
	embedLink = STRINGS.b+videoEmbedString
}


function analyze(response){
	for (indexPrincipal ; response.length >= indexPrincipal; indexPrincipal++) {
		 getVideoName(response);
		// getView(response);
		// getEmbedLink(response);
		
	}	
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