function Login(){
    var done=0;
    var username=document.login.username.value;
    var password=document.login.password.value;
    var poire= document.getElementById("poire");
    var pomme= document.getElementById("pomme");

    if (username=="toi" && password=="toi") {
    window.location= "index.html" ;
    pomme.innerHTML = username + " Bienvenues =)";
    }

    else if(username !=="toi" && password !=="toi"){
        poire.innerHTML = "Erreur !";
        poire.style.color = "red";
        poire.style.textAlign = "center";
        poire.style.fontSize = "100px";

        }
        
    }