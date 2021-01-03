function colour(){
  let x = Math.floor(Math.random()* 13)

  if (x == 0){
    document.body.style.backgroundColor = "red";
    document.getElementById("hex").innerHTML = "#FF0000"
    document.getElementById("hex").style.color = "#000";
    document.body.style.transition = "all 2s";
   
  }else if(x == 1){
    document.body.style.backgroundColor = "blue";
    document.getElementById("hex").innerHTML = "#0000FF"
    document.getElementById("hex").style.color = "#ffffff";
    document.body.style.transition = "all 2s";
    return
  }else if(x == 2){
    document.body.style.backgroundColor = "green";
    document.getElementById("hex").innerHTML = "#008000"
    document.getElementById("hex").style.color = "#000";
    document.body.style.transition = "all 2s";
  }else if(x == 3){
    document.body.style.backgroundColor = "yellow";
    document.getElementById("hex").innerHTML = "#FFFF00"
    document.getElementById("hex").style.color = "#000";
    document.body.style.transition = "all 2s";
  }else if(x == 4){
    document.body.style.backgroundColor = "purple";
    document.getElementById("hex").innerHTML = "#800080"
    document.getElementById("hex").style.color = "#000";
    document.body.style.transition = "all 2s";
  } else if(x == 5){
    document.body.style.backgroundColor = "#FF1493";
    document.getElementById("hex").innerHTML = "#FF1493"
    document.getElementById("hex").style.color = "#000";
    document.body.style.transition = "all 2s";
  } else if(x == 6){
    document.body.style.backgroundColor = "Orange";
    document.getElementById("hex").innerHTML = "#FFA500"
    document.getElementById("hex").style.color = "#000";
    document.body.style.transition = "all 2s";
  }else if(x == 7){
    document.body.style.backgroundColor = "Brown";
    document.getElementById("hex").innerHTML = "#A52A2A"
    document.getElementById("hex").style.color = "#000";
    document.body.style.transition = "all 2s";
  } else if(x == 8){
    document.body.style.backgroundColor = "coral";
    document.getElementById("hex").innerHTML = "#FF7F50"
    document.getElementById("hex").style.color = "#000";
    document.body.style.transition = "all 2s";
  }else if(x == 9){
    document.body.style.backgroundColor = "#87ceeb";
    document.getElementById("hex").innerHTML = "#87CEEB"
    document.getElementById("hex").style.color = "#000";
    document.body.style.transition = "all 2s";
  }else if(x == 10){
    document.body.style.backgroundColor = "#02075D";
    document.getElementById("hex").innerHTML = "#02075D"
    document.getElementById("hex").style.color = "#ffffff";
    document.body.style.transition = "all 2s";
  }else if(x == 11){
    document.body.style.backgroundColor = "#32CD32";
    document.getElementById("hex").innerHTML = "#32CD32"
    document.getElementById("hex").style.color = "#000";
    document.body.style.transition = "all 2s";
  }else if(x == 12){
    document.body.style.backgroundColor = "#008080";
    document.getElementById("hex").innerHTML = "#008080"
    document.getElementById("hex").style.color = "#000";
    document.body.style.transition = "all 2s";
  }
}
