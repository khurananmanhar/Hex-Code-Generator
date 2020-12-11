function colour(){
  let x = Math.floor(Math.random()* 9)

  if (x == 0){
    document.body.style.backgroundColor = "red";
    document.getElementById("hex").innerHTML = "#FF0000"
  }else if(x == 1){
    document.body.style.backgroundColor = "blue";
    document.getElementById("hex").innerHTML = "#0000FF"
  }else if(x == 2){
    document.body.style.backgroundColor = "green";
    document.getElementById("hex").innerHTML = "#008000"
  }else if(x == 3){
    document.body.style.backgroundColor = "yellow";
    document.getElementById("hex").innerHTML = "#FFFF00"
  }else if(x == 4){
    document.body.style.backgroundColor = "purple";
    document.getElementById("hex").innerHTML = "#800080"
  } else if(x == 5){
    document.body.style.backgroundColor = "#FF1493";
    document.getElementById("hex").innerHTML = "#FF1493"
  } else if(x == 6){
    document.body.style.backgroundColor = "Orange";
    document.getElementById("hex").innerHTML = "#FFA500"
  }else if(x == 7){
    document.body.style.backgroundColor = "Brown";
    document.getElementById("hex").innerHTML = "#A52A2A"
  } else if(x == 8){
    document.body.style.backgroundColor = "coral";
    document.getElementById("hex").innerHTML = "#FF7F50"
  }
}
