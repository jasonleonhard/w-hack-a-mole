// when wacked update score
let wack = (id, value) => {
  play()
  updateScore(id, value)
}

// score total grabs current value and adds 1
var total = 0;
let updateScore = (id, value) => {
   document.getElementById(id).value = ++total;
   document.getElementById('total').innerHTML = document.getElementById(id).value
   console.log("mole:", id, 'total:', total)
}

// random number between 1 and 9
let rand_num = () => {
  return Math.floor(Math.random() * 9) + 1
}

// given some id number, toggle css class to show/not show a mole
let toggle_mole = (id) => {
  var element = document.getElementById(id);
  console.log(element.id)
  element.classList.toggle("mole");
}

// every second toggle a mole by a random number
let show_rand_mole = () => {
  setInterval(function(){
    toggle_mole(rand_num())
  }, 1000);
}
show_rand_mole() // call on page load

// play audio when mole clicked
play = () => {
   var audio = document.getElementById("audio");
   audio.play();
}
