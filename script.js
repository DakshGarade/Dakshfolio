function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
var arr = [];
function take() {
  var fullName = document.getElementById("inp_val").value;
  var email = document.getElementById("inp_val2").value;
  var expertise = document.getElementById("inp_val3").value;

  let inputObject = {
    Full_Name: fullName,
    Email: email,
    Expertise: expertise,
  };

  arr.push(inputObject);

  document.getElementById("inp_val").value = "";
  document.getElementById("inp_val2").value = "";
  document.getElementById("inp_val3").value = "";
for (let index = 0; index < arr.length; index++) {

  function saveToLocalStorage() {
    localStorage.setItem(`objectsData-${index}`, JSON.stringify(inputObject));
  }
var get =  localStorage.getItem(`objectsData-${index}`)
console.log(get);
}
  saveToLocalStorage();

  console.log(arr); // Display the array in the console
}

