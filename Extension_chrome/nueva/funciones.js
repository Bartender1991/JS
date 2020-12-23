
var STRINGS ={
    a:'","width":336,"height":188}]},"title":{"runs":[{"text":"',
    b:'"gridVideoRenderer":{"videoId":"',
    c:'https://www.youtube.com/embed/'
};

var interval;
var url = "https://www.youtube.com/c/JavaDevOne/videos";
var videoName= "ERROR";
var embedLink = "";

var nombres=[];
var links=[];
var index=0;
var len;

function getEmbedLink(response){
    
    var index1, index2, videoEmdedString;

    index1 = response.indexOf(STRINGS.b,index)+STRINGS.b.length;
    index2 = response.indexOf('"',index1);
    videoEmdedString = response.substring(index1,index2);
    embedLink = STRINGS.c+videoEmdedString;
    
    index=index2;

}

function getVideoName(response){
    var index1, index2, videoNameString;

    index1 = response.indexOf(STRINGS.a,index)+STRINGS.a.length;
    index2 = response.indexOf('"',index1);
    videoNameString = response.substring(index1,index2);
    videoName = videoNameString;

    index=index2;
}

function analyze(response){
    for (var i = 0 ; i < len; i++) {
        if(i > index){
            break;
        }else{
            i=index;
            getEmbedLink(response);
            // console.log(index,embedLink);
            getVideoName(response);
            // console.log(index,videoName);
            // console.log(i,index);
            if(i < index){
                links.push(embedLink);
                nombres.push(videoName);
            }
        }
    }
    // console.log(nombres,links);
}

function check() {
    //*console.log(localStorage);
    //console.log(url);*//
    //Sif (localStorage.youtubechannel) {
    //  url = localStorage.youtubechannel;
    //};
    //*console.log(localStorage);*//
    var xmlhttp = new XMLHttpRequest();
    //*console.log(xmlhttp);*//
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            len = xmlhttp.responseText.length;

            analyze(xmlhttp.responseText);
        };
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send(null);
};
check();


