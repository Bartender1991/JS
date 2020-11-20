function videoLoader(name, url) {
	document.write('<iframe class="link" src="'+url+'" frameborder="0" allowfullscreen></iframe>');
}

var bg = chrome.extension.getBackgroundPage();
var bgUrl = bg.embedLink;
var video = new videoLoader(bg.videoName, bgUrl);


console.log(bg);console.log(bgUrl);console.log(bg.videoName);console.log(video);

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