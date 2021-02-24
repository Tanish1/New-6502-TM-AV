function saveCode() { //Doesn't add it to the directory, automatically saves upon key press
  var x = document.getElementById('codeInp'); 
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem("save0", x.value);
    
  } else {
    document.getElementById("result").innerHTML = "Your browser does not support web storage!";
  }
}
function getPreviousCode() { //Doesn't add it to the directory, runs upon the body loads
  var x = document.getElementById('codeInp');
  if (typeof(Storage) !== "undefined") {
    x.value = localStorage.getItem("save0");
  }
  else {
    document.getElementById("result").innerHTML = "Your browser does not support web storage!";
  }
}


function saveCodeWD() { //WD is "With Directory"
  var x = document.getElementById('codeInp'); 
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem("save0", x.value);
    
  } else {
    document.getElementById("result").innerHTML = "Your browser does not support web storage!";
  }
}

function getPreviousCodeWD() { //WD is "With Directory"
  var x = document.getElementById('codeInp');
  if (typeof(Storage) !== "undefined") {
    x.value = localStorage.getItem("save0");
  }
  else {
    document.getElementById("result").innerHTML = "Your browser does not support web storage!";
  }
}
