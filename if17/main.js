alert("3 ta son kiritasiz o'sish yoki kamayish tartibida kiritsangiz 2ga ko'paytiriladi aka holda ishorasi o'zgaradi")

const son1 = prompt("A") * 1
const son2 = prompt("B") * 1
const son3 = prompt("C") * 1


if (son2 - son1 + son3 - son2 == 2) {
  document.write("A = " + (son1 * 2) + "<br>")
  document.write("B = " + (son2 * 2) + "<br>")
  document.write("C = " + (son3 * 2) + "<br>")
}

else if (((son1 - son2) + (son2 - son3)) == (2)) {
  document.write("A = " + (son1 * 2) + "<br>")
  document.write("B = " + (son2 * 2) + "<br>")
  document.write("C = " + (son3 * 2) + "<br>")
}

else {
  document.write("A = " + (son1 * -1) + "<br>")
  document.write("B = " + (son2 * -1) + "<br>")
  document.write("C = " + (son3 * -1) + "<br>")
}



