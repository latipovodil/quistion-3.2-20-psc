alert("3 ta son kiritasiz yig'indisi eng katta bo'ladigan 2 ta sonni topadi");
var son1 = prompt("1-son")*1;
var son2 = prompt("2-son")*1;
var son3 = prompt("3-son")*1;




document.write("3 ta o'zingiz kiritgan raqamdan 2 ta eng kattasini qo'shganda:<br>")

if(son1 < son2 && son1 > son3){

  if (son1 > son2 && son1 > son3) {
    document.write(son1 + son1)
  }
  
  else if (son2 > son1 && son2 > son3) {
    document.write(son2 + son1)
  }
  
  else if (son3 > son1 && son3 > son2) {
    document.write(son3 + son1)
  }
  
  else (
    document.write("Xato")
  )
  
}

else if(son1 < son3 && son1 > son2){

  if (son1 > son2 && son1 > son3) {
   document.write(son1+son1 )
  }
  
  else if (son2 > son1 && son2 > son3) {
   document.write(son1+son2 )
  }
  
  else if (son3 > son1 && son3 > son2) {
   document.write(son1+son3 )
  }
  
  else (
    document.write("Xato")
  )
  
}

else if(son2 < son3 && son2 > son1){

  if (son1 > son2 && son1 > son3) {
    document.write(son2+son1)
  }
  
  else if (son2 > son1 && son2 > son3) {
    document.write(son2+son2)
  }
  
  else if (son3 > son1 && son3 > son2) {
    document.write(son2+son3)
  }
  
  else (
    document.write("Xato")
  )
  
}

else if(son2 < son1 && son2 > son3){

  if (son1 > son2 && son1 > son3) {
   document.write(son2+son1)
  }
  
  else if (son2 > son1 && son2 > son3) {
   document.write(son2+son2)
  }
  
  else if (son3 > son1 && son3 > son2) {
   document.write(son2+son3)
  }
  
  else (
    document.write("Xato")
  )
  
}

else if(son3 < son2 && son3 > son1){

  if (son1 > son2 && son1 > son3) {
   document.write(son3+son1)
  }
  
  else if (son2 > son1 && son2 > son3) {
   document.write(son3+son2)
  }
  
  else if (son3 > son1 && son3 > son2) {
   document.write(son3+son3)
  }
  
  else (
   document.write("Xato")
  )
  
}

else if(son3 < sn1 && son3 > son2){

  if (son1 > son2 && son1 > son3) {
   document.write(son3+son1)
  }
  
  else if (son2 > son1 && son2 > son3) {
   document.write(son3+son2)
  }
  
  else if (son3 > son1 && son3 > son2) {
   document.write(son3+son3)
  }
  
  else (
  document.write("Xato")
  )
  
}

else{
  documentwrite("<br> Hamma sonlar teng yoki xato yozilgan (harf yoki h.k)")
}










