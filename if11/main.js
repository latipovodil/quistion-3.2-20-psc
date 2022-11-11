alert("2 ta son kiritasiz agar A va B sonlari teng bo'lsa 0 chiqadi teng bo'lmasa katttasini o'zlashtiradi");
const son1 = prompt("A soni")*1;
const son2 = prompt("B soni")*1;
const umumiy = (son1+son2);




if(son1 > son2){
  document.write("A = " + (son1) + "<br>" + "B = " + (son1))
}

else if(son2 > son1){
  document.write("A = " + son2 + "<br>" + "B = " + son2)
}



else{
  document.writ("A = " + 0 + "<br>" + "B = " + 0)
}