alert("2 ta son kiritasiz qaysi biri kattaligini aniqlaydi")
const son1 = prompt("1-son")
const son2 = prompt("2-son")

if (son1 > son2){
  document.write(son1 + " soni katta ya'ni 1-kiritilgan son katta")
}

else if (son1 < son2){
  document.write(son2 + " soni katta ya'ni 2-kiritilgan son katta")
}

else{
  document.write("Ikkala son bir-biriga teng")
}