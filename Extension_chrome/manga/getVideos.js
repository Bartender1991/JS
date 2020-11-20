function videoLoader(name, url, view) {
	// document.write('<iframe class="link" src="'+url+'" frameborder="0" allowfullscreen style="::-webkit-scrollbar: none"></iframe>');
    document.write('<a href="'+url+'">'+name+' - '+view+'</a><br>');
}

var bg = chrome.extension.getBackgroundPage();
// var bgUrl = bg.embedLink;
// var bgView= bg.view;
// var video = new videoLoader(bg.videoName, bgUrl, bgView);

for (var i =0; bg.indexNombre.length >= i; i++) {
    console.log(bg.indexNombre[i])
}


$(function(){
	$(".link").click(function(e){
		e.preventDefault();
		window.open(bgUrl,"popup","width=800,height=450");
	});

	$("#settingsImg").click(function(e) {
		e.preventDefault();
		window.open("settings.html","popup","width=800,height=500");
	});
});