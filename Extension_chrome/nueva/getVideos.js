// getBackgroundPage() -> llama a la pagina definida en el manifest como background
// si queremos que se pasen mas archivos para ejecutar debemos de agregarlos en esa pag que es llamada
var bg = chrome.extension.getBackgroundPage();
var video = new videoLoader(bg.nombres, bg.links);

function videoLoader(name, link) {
	console.log(name + ' ' +link);
	for (var i = 0; i < name.length; i++) {
		var a = document.createElement("a");
		a.id = name[i];
		a.href = link[i];

		document.getElementById("lista").appendChild(a);
		var li = document.createElement("li");
		li.id = i;
		document.getElementById(a.id).appendChild(li);		
		document.getElementById(a.id).appendChild(li);		
		document.getElementById(i).textContent = a.id;

		var p = document.getElementById("test");
		var alink = document.createElement("a");
		p.innerHTML+='<div class="card" id="idCard">'+
			'<img src="#" class="card-img-top" alt="">'+
			'<div class="card-body">'+
			'<h5 id="IdCardTitle" class="card-title">'+a.id+
			'</h5><a href="'+ a.href + 
			'">'+a.id+
			'</a></div>'+
			'<div class="card-footer">'+
			'<small class="text-muted">Last updated 3 mins ago</small></div></div><br>';

	}
}


// $(function(){
// 	// $("#lista a").click(function(e){
// 	// 	e.preventDefault();
// 	// 	var href = $(this).attr('href');
// 	// 	console.log(href);
// 	// 	window.open(href,"popup","width=640,height=360");
// 	// });

// 	// $("#settingsImg").click(function(e) {
// 	// 	e.preventDefault();
// 	// 	window.open("settings.html","popup","width=800,height=500");
// 		// window.open("settings.html","newtab");
// 	});
// });