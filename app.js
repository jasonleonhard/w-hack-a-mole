let wack = (id, value) => {
  updateScore(id, value)
}

var total = 0;
function updateScore(id, value) {
   document.getElementById(id).value = ++total;
   document.getElementById('total').innerHTML = document.getElementById(id).value
   console.log("mole:", id, 'total:', total)
}
