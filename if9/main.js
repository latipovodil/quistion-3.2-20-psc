alert("2 ta son kiritasiz har qanday holatda ham A son B sondan kichik bo'ladi")
const son1 = prompt("A soni")
const son2 = prompt("B soni")




if (son1 < son2){
  document.write("A = " + son1 + "<br>B = " + son2)
}

else if (son2 < son1){
  document.write("A = " + son2 + "<br>B = " + son1)
}
else{
  document.write("A = " + son2*2 + "<br>B = " + son1)
}