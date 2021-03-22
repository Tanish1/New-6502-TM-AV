function saveCode() { //Doesn't add it to the directory, automatically saves upon key press
  var x = document.getElementById('code'); 
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem("save0", x.value);
    
  } else {
    document.getElementById("result").innerHTML = "Your browser does not support web storage!";
  }
}
