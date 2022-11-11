alert("4 ta butun son berilgan shularning 3 tasi teng 4-tartib raqamini aniqlaydi")

document.write("A = 20 <br>")
document.write("B = 30 <br>")
document.write("C = 20 <br>")
document.write("D = 20 <br>")

const son1 = 20;
const son2 = 30;
const son3 = 20;
const son4 = 20;



if ((son2 == son1) == (son4 == son2)) {
  document.write("A va C va D sonlari bir-biriga teng<br>")
  document.write("B soni esa boshqacha")
}

else if ((son3 == son1) == (son2 == son3)) {
  document.write("B va C va A sonlari bir-biriga teng<br>")
  document.write("D soni esa boshqacha")
}

else if ((son3 == son2) == (son4 == son3)) {
  document.write("D va C va A sonlari bir-biriga teng<br>")
  document.write("B soni esa boshqacha")
}

else if ((son2 == son1) == (son4 == son1)) {
  document.write("B va D va A sonlari bir-biriga teng<br>")
  document.write("C soni esa boshqacha")
}
else if ((son3 == son1) == (son4 == son3)) {
  document.write("A va D va C sonlari bir-biriga teng<br>")
  document.write("B soni esa boshqacha")
}

else (
  document.write("Sizdan uzr so'raymiz bizda qandaydir xato yuz berdi")
)
