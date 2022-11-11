alert("3 ta son kiritasiz o'ratacha sonni aniqlab beradi (katta va kichik o'tasidagi sonnni)");
const son1 = prompt("1-son")*1;
const son2 = prompt("2-son")*1;
const son3 = prompt("3-son")*1;



if(son1 < son2 && son1 > son3){
  document.write("1-son o'rtachasi ya'ni 1-son = " + son1)
}

else if(son1 < son3 && son1 > son2){
  document.write("1-son o'rtachasi ya'ni 1-son = " + son1)
}

else if(son2 < son3 && son2 > son1){
  document.write("2-son o'rtachasi ya'ni 1-son = " + son2)
}

else if(son2 < son1 && son2 > son3){
  document.write("2-son o'rtachasi ya'ni 2-son = " + son2)
}

else if(son3 < son2 && son3 > son1){
  document.write("3-son o'rtachasi ya'ni 3-son = " + son3)
}

else if(son3 < son1 && son3 > son2){
  document.write("3-son o'rtachasi ya'ni 3-son = " + son3)
}

else{
  document.write("Hamma sonlar teng yoki xato yozilgan (harf yoki h.k)")
}

