//Asynchronius Javascript And XML
/*
    0===>Not Init
    1===>Init
    2===>Open
    3===>Process
    4===>Success

*/

function ajax(){
    if(XMLHttpRequest){
        var http = new XMLHttpRequest(); //1
    }else{
        console.log("Your Browser Not supported to AJAX")
    }
    http.open("get","https://api.github.com/search/users?q=rudresh"); //2
    http.send()//3
    http.onreadystatechange = function(){
        if(http.status == 200 && http.readyState == 4){
            console.log(http.responseText);
        }
    }
}

ajax();