alert("2 ta son kiritasiz agar A va B sonlari teng bo'lsa 0 chiqadi teng bo'lmasa qo'shiladi");
const son1 = prompt("A soni")*1;
const son2 = prompt("B soni")*1;
const umumiy = (son1+son2);
if (son1 > son2){
  document.write("A = " + umumiy + "<br>" + "B = " + umumiy)
}

else if(son1 < son2){
  document.write("A = " + umumiy + "<br>" + "B = " + umumiy)
}

else{
  document.write("A = " + (son1-son2) + "<br>" + "B = " + (son1-son2))
}
