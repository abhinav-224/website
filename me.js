function checkButton(){

    if(document.getElementById('core').checked==true){
        window.location.href ="http://127.0.0.1:5500/ME/CORE.HTML"
    }
     else if(document.getElementById('askques').checked==true){
        window.location.href ="http://127.0.0.1:5500/ME/ASK.HTML"
    }
    else if(document.getElementById('strat').checked==true){
        window.location.href ="http://127.0.0.1:5500/CSE/PREP.HTML"
    }
    else if(document.getElementById('int').checked==true){
        window.location.href ="http://127.0.0.1:5500/ME/INT.HTML"
    }

    else{
        alert("PLEASE SELECT THE TYPE FIRST")
    }
    }