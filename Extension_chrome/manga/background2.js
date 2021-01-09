chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.create({'url': "popup.html"});
	// console.log("click");
});

var stringNombre ={
	inicio:'></i> Capítulo ',
	fin: '</a>'
};
var stringLink ={
	inicio: 'https://lectortmo.com/view_uploads/',
	fin:'"'
};
var stringVisto ={
	inicio: '<span class="chapter-viewed-icon',
	fin: ' data-chapter="'
};

var stringInicio='<h2 class="group-color">Libros Siguiendo</h2>';
var stringPrimerLink ={
	inicio: '<a href=" ',
	fin: '"'
};
var stringImagen ={
	inicio: 'background-image: url(',
	fin: ')'
};
var stringTitulo ={
	inicio: '<h4 class="text-truncate" title="',
	fin: '"'
};
var stringTipo ={
	inicio: '<span class="book-type badge badge-',
	fin: '"'
};
var stringDemografia ={
	inicio: '<span class="demography ',
	fin: '"'
};

var nombres=[];
var links=[];
var vistos=[];
var index=0;
var nombreObtenido= "ERROR";
var linkObtenido = "";
var len;
var visto;
// var url = "https://lectortmo.com/library/manga/36989/Jujutsu-kaisen?orderDir=ASC";
var url = "https://lectortmo.com/profile/follow";

function obtenerNombre(response){
	var index1, index2, nombreObtenidoString;
	// console.log("name index " + index);
	index1 = response.indexOf(stringNombre.inicio,index)+stringNombre.inicio.length;
	index2 = response.indexOf(stringNombre.fin,index1);
	nombreObtenidoString = response.substring(index1,index2);
	nombreObtenido = nombreObtenidoString;
	index=index2;
	// console.log("name index " + index);
};

function obtenerLink(response){
	var index1, index2, videoEmdedString;
	// console.log("link index " + index);
	index1 = response.indexOf(stringLink.inicio,index) + stringLink.inicio.length;
	index2 = response.indexOf(stringLink.fin,index1);
	videoEmdedString = response.substring(index1,index2);
	linkObtenido = stringLink.inicio + videoEmdedString;
	index = index2;
	// console.log("link index " + index);
}

function obtenerVistos(response){
	var index1, index2, vistoString;
	// console.log("visto index " + index);
	index1 = response.indexOf(stringVisto.inicio,index) + stringVisto.inicio.length;
	index2 = response.indexOf(stringVisto.fin,index1);
	vistoString = response.substring(index1,index2);
	// console.log("antes "+visto);
	visto = vistoString;
	if (visto=="\"") {
		visto="no visto";
	}else{
		visto="Visto";
	}
	index=index2;
};


function analizar(response){
	var contador=0;
	nombres=[];
	links=[];
	vistos=[];
	// console.log("analizar"+index);
	for (var i = 0 ; i < len; i++) {
		if(i > index){
			break;
		}else{
			i=index;
			// console.log("i"+i);
			// console.log("analizar"+index);
			obtenerNombre(response);
			obtenerVistos(response);
			obtenerLink(response);
			if(i < index){
				links.push(linkObtenido);
				// console.log(nombres);
				nombres.push(nombreObtenido);
				vistos.push(visto);
				// console.log(visto);
			}
			contador+=1;
			// console.log(contador);
			// console.log("continue index " + index);
		}
	}
}

var contar=0;
function check(URL) {
	// console.log("hola");
	// console.log(contar);
	contar+=1;
	// console.log(contar);
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			len = xmlhttp.responseText.length;
			analizar(xmlhttp.responseText);
		};
	};
	xmlhttp.open("GET", URL, true);
	// xmlhttp.open("GET", url, true);
	xmlhttp.send(null);
	setTimeout(check,60000);
};
check(url);