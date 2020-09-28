function imprime(myValue) {
  window.addEventListener("keydown", function (event) {
    let str = event.key;
  }, true);


  myField = document.getElementById("entrada");
  if (myField.selectionStart || myField.selectionStart == "0") {
    var startPos = myField.selectionStart;
    var endPos = myField.selectionEnd;
    myField.value =
      myField.value.substring(0, startPos) +
      myValue.value +
      myField.value.substring(endPos, myField.value.length);
    console.log("a=", myField.value.substring(0, startPos));
    console.log("b=", myField.value);
    console.log("c=", myField.value.substring(endPos, myField.value.length));
  } else {
    myField.value += myValue.value;
  }
  myField.focus();
  myField.setSelectionRange(endPos + 1, endPos + 1);
}

function imprime2(myValue) {
  myField = document.getElementById("entrada");
  if (myField.selectionStart || myField.selectionStart == "0") {
    var startPos = myField.selectionStart;
    var endPos = myField.selectionEnd;
    myField.value =
      myField.value.substring(0, startPos) +
      myValue.value +
      myField.value.substring(endPos, myField.value.length);
    console.log("a=", myField.value.substring(0, startPos));
    console.log("b=", myField.value);
    console.log("c=", myField.value.substring(endPos, myField.value.length));
  } else {
    myField.value += myValue.value;
  }
  myField.focus();
  myField.setSelectionRange(endPos + 2, endPos + 2);
}
