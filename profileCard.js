// =============================================Button====================================================
let button = document.querySelector('.btn');
// let div = document.querySelector('.right')


// buttonText.innerHTML = "Submit";
// button.addEventListener('click', function() {
//   if (buttonText.innerHTML !== "Submit") {
//     buttonText.innerHTML = "Submit";
//   } else if (buttonText.innerHTML === "Submit") {
//     buttonText.innerHTML = tickMark;
//   }
//   this.classList.toggle('button__circle');
// });
// ===================================================================================

button.addEventListener('click', update);


// ===============================function Update==============================================
function update(e){
  // ****************************************get input value*******************************************
  var name =  document.querySelector('#name').value
  var about = document.getElementById('about').value
  var adress = document.getElementById('address').value
  var phone = document.getElementById('phone').value
  var college = document.getElementById('college').value
  
  // ==============================================Update Inputted Value********************************************
  var n = document.getElementById('n')
  var a = document.getElementById('a')
  var ad = document.getElementById('ad')
  var p = document.getElementById('p')
  var c = document.getElementById('c')

  n.appendChild(document.createTextNode(`${name}`));
  a.appendChild(document.createTextNode(`${about}`));
  ad.appendChild(document.createTextNode(adress));
  p.appendChild(document.createTextNode(phone));
  c.appendChild(document.createTextNode(college));



  // ==================================Display None======================================
  document.querySelector('.right').className = "hide";
  document.querySelector('.image').className = "visible";
  document.querySelector('.screen').style.width = "auto";
  

}

            

 
  
