let inputColor = document.querySelector("#bGColor");
inputColor.addEventListener("change", getBGColor);
function getBGColor(){
  let BGColor = inputColor.value;
  localStorage.setItem("BGColor", BGColor);
  makeChanges();
}

let inputTxtColor = document.querySelector("#txtColor");
inputTxtColor.addEventListener("change", getTxtColor);
function getTxtColor(){
  let TxtColor = inputTxtColor.value;
  localStorage.setItem("TxtColor", TxtColor);
  makeChanges();
}

let inputFontSize = document.querySelector("#fontSize");
inputFontSize.addEventListener("change", getFontSize);
function getFontSize(){
  let FontSize = inputFontSize.value;
  localStorage.setItem("FontSize", FontSize);
  makeChanges();
}

let inputTxtEspac = document.querySelector("#txtEspac");
inputTxtEspac.addEventListener("change", getTxtEspac);
function getTxtEspac(){
  let TxtEspac = inputTxtEspac.value;
  localStorage.setItem("TxtEspac", TxtEspac);
  makeChanges();
}

let inputFontType = document.querySelector("#fontType");
inputFontType.addEventListener("change", getFontType);
function getFontType(){
  let FontType = inputFontType.value;
  localStorage.setItem("FontType", FontType);
  makeChanges();
}

function makeChanges(){
document.getElementById("text-body").style.backgroundColor = localStorage.getItem("BGColor");
document.getElementById("text-body").style.color = localStorage.getItem("TxtColor");
document.getElementById("text-body").style.fontSize = localStorage.getItem("FontSize") + "em";
document.getElementById("text-body").style.lineHeight = localStorage.getItem("TxtEspac") + "em";
document.getElementById("text-body").style.fontFamily = localStorage.getItem("FontType");
}

makeChanges();