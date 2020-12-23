var p = document.getElementById("test");
p.innerHTML+='<div class="card" id="idCard">'+
			'<img src="#" class="card-img-top" alt="">'+
			'<div class="card-body">'+
			'<h5 id="IdCardTitle" class="card-title">nombre'+
			'</h5><a id="link" href="link' +
			'">nombre'+
			'</a></div>'+
			'<div class="card-footer">'+
			'<small class="text-muted">visto</small></div></div><br>';
function videoLoader(name, link, view) {
	// console.log(name.length);
	console.log(view);
	// console.log("antes"+" "+i);
	for (var i = 0; i < name.length; i++) {
		var p = document.getElementById("test");
		// console.log("dentro del for"+" "+i);
		if (view[i]=="no visto") {
			console.log(name[i]);
			console.log(link[i]);
			console.log(view[i]);
			// console.log("dentro del if"+" "+i);
			p.innerHTML='<div class="card" id="idCard">'+
			'<img src="#" class="card-img-top" alt="">'+
			'<div class="card-body">'+
			'<h5 id="IdCardTitle" class="card-title">'+ name[i]+
			'</h5><a id="link" href="'+ link[i] + 
			'">'+ name[i]+
			'</a></div>'+
			'<div class="card-footer">'+
			'<small class="text-muted">'+view[i]+'</small></div></div><br>';
			// '<small class="text-muted"></small></div></div><br>';
			break;
		}
		indice=i
		// console.log("inidice" +" " +  indice);

	}
}
// var bg;
// var video;
var indice;



// videoLoader(bg.nombres, bg.links, bg.views);



$(function(){
	
	$("#IdCardTitle").click(function(e){
		
		alert(bg.views[indice]);

		bg.views[indice]="Visto";
		// e.preventDefault();
		// var href = $(this).attr('href');
		// console.log(href);
		// window.open(href,"newtab");

		alert(bg.views[indice]);
	});
	$("#lista a").click(function(e){
		e.preventDefault();
		var href = $(this).attr('href');
		console.log(href);
		window.open(href,"popup","width=640,height=360");
	});

	$("#settingsImg").click(function(e) {
		e.preventDefault();
		// window.open("settings.html","popup","width=800,height=500");
		window.open("settings.html","newtab");
	});
});

function check2() {
	var bg = chrome.extension.getBackgroundPage();
	var video = videoLoader(bg.nombres, bg.links, bg.views);
	// videoLoader(bg.nombres, bg.links, bg.views);
	// setTimeout(check2,5000);
	
};



var boton = document.getElementById("llamar");
boton.addEventListener('click',function(){
	check2();
});