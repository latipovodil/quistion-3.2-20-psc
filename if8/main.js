alert("2 ta son kiritsangiz tartibdan qat'iy nazar kattasini 1-ekranga chiqaradi")
const son1 = prompt("1-son")*1;
const son2 = prompt("2-son")*1;

if(son1 > son2){
  document.write(son1 + "<br>")
  document.write(son2 + "<br>")
}


else if (son1 < son2){
  document.write(son2 + "<br>")
  document.write(son1 + "<br>")
}

else{
  document.write(
    son1 + " = " + son2 
  )
}