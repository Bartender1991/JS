function videoLoader(name, link) {
	for (var i = 0; i < name.length; i++) {
		var a = document.createElement("a");
		a.id = name[i];
		a.href = link[i];
		document.getElementById("lista").appendChild(a);

		var li = document.createElement("li");
		li.id = i;
		document.getElementById(name[i]).appendChild(li);		
		
		document.getElementById(i).textContent = name[i];
	}
	//document.write('<iframe class="link" src="'+url+'" frameborder="0" allowfullscreen></iframe>');
}

var bg = chrome.extension.getBackgroundPage();
var video = new videoLoader(bg.nombres, bg.links);

$(function(){
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