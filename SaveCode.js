function saveCode() {
  var x = document.getElementById('codeInp'); 
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem("save0", x.value);
    
  } else {
    document.getElementById("result").innerHTML = "Your browser does not support web storage!";
  }
}
function getPreviousCode() {
  var x = document.getElementById('codeInp');
  if (typeof(Storage) !== "undefined") {
    x.value = localStorage.getItem("save0");
  }
  else {
    document.getElementById("result").innerHTML = "Your browser does not support web storage!";
  }
}
