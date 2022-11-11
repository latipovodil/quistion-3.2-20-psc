alert("2 ta son kiritsangiz tartibdan qat'iy nazar kichigini tartib raqamini ekranga chiqaradi")
const son1 = prompt("1-son")*1;
const son2 = prompt("2-son")*1;


if(son1 < son2){
  document.write("1-kiritilgan son kichik ya'ni: <br>" + son1)
}

else if(son1 > son2){
  document.write("2-kiritilgan son kichik ya'ni: <br>" + son2)
}

else{
  document.write("ikkala son bir-bitiga teng ya'ni: <br>" + son1 + " = " + son2)
}