function saveCode() { //Doesn't add it to the directory, automatically saves upon key press
  var x = document.getElementById('code'); 
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem("save0", x.value);
    
  } else {
    document.getElementById("result").innerHTML = "Your browser does not support web storage!";
  }
}

function getPreviousCode() { //Doesn't add it to the directory, runs upon the body loads
  var x = document.getElementById('code');
  if (typeof(Storage) !== "undefined") {
    x.value = localStorage.getItem("save0");
  }
  else {
    document.getElementById("result").innerHTML = "Your browser does not support web storage!";
  }
}

function download(){
  var text = document.getElementById("code").value;
  text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
  var blob = new Blob([text], { type: "text/plain"});
  var anchor = document.createElement("a");
  anchor.download = "6502.txt";
  anchor.href = window.URL.createObjectURL(blob);
  anchor.target ="_blank";
  anchor.style.display = "none"; // just to be safe!
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}