alert("3 ta butun son berilgan shularning 2 tasi teng 3-tartib raqamini aniqlaydi")

document.write("A = 20 <br>")
document.write("B = 30 <br>")
document.write("C = 20 <br>")

const son1 = 20;
const son2 = 30;
const son3 = 20;

if(son1 == son2){
  document.write("A va B sonlari bir-biriga teng<br>")
  document.write("C soni esa boshqacha")
}

else if(son1 == son3){
  document.write("A va C sonlari bir-biriga teng<br>")
  document.write("B soni esa boshqacha")
}

else if(son2 == son3){
  document.write("B va C sonlari bir-biriga teng<br>")
  document.write("A soni esa boshqacha")
}

else(
  document.write("Szdan uzr so'raymiz bizda qandaydir xato yuz berdi")
)
