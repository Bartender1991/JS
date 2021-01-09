chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.create({'url': "popup.html"});
	// console.log("click");
});

var STRINGS ={
	a:'></i> Capítulo ',
	aa:'</a>',
	b:'https://lectortmo.com/view_uploads/',
	bb:'"',
	c:'<span class="chapter-viewed-icon',
	cc:' data-chapter="'
};
var List ={
	url:'https://lectortmo.com/profile/follow',
	inicio:'<a href=" https://lectortmo.com/library/',
	fin:'">'
};

var lol ={
	url: 'https://lectortmo.com/library/manga/36989/Jujutsu-kaisen?orderDir=ASC'
};
var interval;
var url = "https://lectortmo.com/library/manga/36989/Jujutsu-kaisen?orderDir=ASC";
var videoName= "ERROR";
var embedLink = "";

var nombres=[];
var links=[];
var views=[];
var index=0;
var len;
var view;
function getVideoName(response){
	var index1, index2, videoNameString;
	// console.log("name index " + index);

	index1 = response.indexOf(STRINGS.a,index)+STRINGS.a.length;
	index2 = response.indexOf(STRINGS.aa,index1);
	videoNameString = response.substring(index1,index2);
	videoName = videoNameString;

	index=index2;
	// console.log("name index " + index);
}

function getEmbedLink(response){
	var index1, index2, videoEmdedString;
	// console.log("link index " + index);
	index1 = response.indexOf(STRINGS.b,index)+STRINGS.b.length;
	index2 = response.indexOf(STRINGS.bb,index1);
	videoEmdedString = response.substring(index1,index2);
	embedLink = STRINGS.b+videoEmdedString;
	
	index=index2;
	// console.log("link index " + index);
}


function getView(response){
	var index1, index2, mangaView;
	// console.log("view index " + index);
	index1 = response.indexOf(STRINGS.c,index)+STRINGS.c.length;
	index2 = response.indexOf(STRINGS.cc,index1);
	
	videoViewString = response.substring(index1,index2);
	// console.log("antes "+view);
	view = videoViewString;
	if (view=="\"") {
		view="no visto";
	}else{
		view="Visto";
	}


	index=index2;

	// console.log(view);
	// console.log("view index " + index);
}



function analyze(response){
	var contador=0;
	nombres=[];
	links=[];
	views=[];
	// console.log("analyze"+index);
	for (var i = 0 ; i < len; i++) {
		if(i > index){
			break;
		}else{
			i=index;
			// console.log("i"+i);
			// console.log("analyze"+index);

			getVideoName(response);
			getView(response);

			getEmbedLink(response);
			if(i < index){
				links.push(embedLink);
				// console.log(nombres);
				nombres.push(videoName);
				views.push(view);
				console.log(view);

			}

			contador+=1;
			// console.log(contador);
			// console.log("continue index " + index);
		}
	}
}
var contar=0;
function check(url) {
	console.log("hola");
	// console.log(contar);
	contar+=1;
	// console.log(contar);

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			len = xmlhttp.responseText.length;
			analyze(xmlhttp.responseText);
		};
	};
	// xmlhttp.open("GET", url, true);
	xmlhttp.open("GET", url, true);
	xmlhttp.send(null);
	setTimeout(check,5000);
};
check(lol.url);