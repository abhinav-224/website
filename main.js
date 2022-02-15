


    

function checkButton(){

if(document.getElementById('CSE').checked==true){
    window.location.href ="http://127.0.0.1:5501/cse.html"
}
 else if(document.getElementById('ME').checked==true){
    window.location.href ="http://127.0.0.1:5500/me.html"
}
 else if(document.getElementById('ECE').checked==true){
    window.location.href ="http://127.0.0.1:5500/ece.html"
}
else{
    alert("PLEASE SELECT A BRANCH")
}
}


