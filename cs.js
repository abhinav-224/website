function checkButton(){

    if(document.getElementById('coding').checked==true){
        window.location.href ="http://127.0.0.1:5500/CSE/CODE.HTML"
    }
     else if(document.getElementById('core').checked==true){
        window.location.href ="http://127.0.0.1:5500/CSE/CORE.HTML"
    }
     else if(document.getElementById('askques').checked==true){
        window.location.href ="http://127.0.0.1:5500/CSE/ASK.HTML"
    }
    else if(document.getElementById('strat').checked==true){
        window.location.href ="http://127.0.0.1:5500/CSE/PREP.HTML"
    }
    else if(document.getElementById('int').checked==true){
        window.location.href ="http://127.0.0.1:5500/CSE/INT.HTML"
    }

    else{
        alert("PLEASE SELECT THE TYPE FIRST")
    }
    }