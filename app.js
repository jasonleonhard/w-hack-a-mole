// when wacked update score
let wack = (id) => {
  kill_mole(id)
}

// clicking a mole kills it, produces a sound, toggles the css class,
  // changes the value and updates the inner html
  // if no mole exists none is created on click
let total = 0;
let kill_mole = (id, value) => {
  // grab element by id and check if class mole exists
  let existance = document.getElementById(id)
  switch (existance.className) {
    case ("cell mole"):
        play()
        existance.classList.toggle("mole");
        // console.log('mole killed')
        total = total + 100
        document.getElementById(id).value = total;
        document.getElementById('total').innerHTML = document.getElementById(id).value;
        break;
    case "cell":
        // console.log('no mole')
        total = total - 50
        document.getElementById(id).value = total;
        document.getElementById('total').innerHTML = document.getElementById(id).value
        break;
  }
  // console.log("mole:", id, 'total:', total)
}

// random number between 1 and 25
let rand_num = () => {
  return Math.floor(Math.random() * 25) + 1
}

// given some id number, toggle css class to show/not show a mole
let toggle_mole = (id) => {
  let element = document.getElementById(id);
  element.classList.toggle("mole");
  // console.log(element.id)
}

// every second toggle a mole by a random number
let show_rand_mole = () => {
  setInterval(function(){
    toggle_mole(rand_num())
    check_if_mole_party()
  }, 1000);
}
show_rand_mole() // call on page load

let check_if_mole_party = () => {
  // console.log('party')
  if (document.getElementById(1).className  == "cell mole" &&
      document.getElementById(2).className  == "cell mole" &&
      document.getElementById(3).className  == "cell mole" &&
      document.getElementById(4).className  == "cell mole" &&
      document.getElementById(5).className  == "cell mole" &&
      document.getElementById(6).className  == "cell mole" &&
      document.getElementById(7).className  == "cell mole" &&
      document.getElementById(8).className  == "cell mole" &&
      document.getElementById(9).className  == "cell mole" &&
      document.getElementById(10).className == "cell mole" &&
      document.getElementById(11).className == "cell mole" &&
      document.getElementById(12).className == "cell mole" &&
      document.getElementById(13).className == "cell mole" &&
      document.getElementById(14).className == "cell mole" &&
      document.getElementById(15).className == "cell mole" &&
      document.getElementById(16).className == "cell mole" &&
      document.getElementById(17).className == "cell mole" &&
      document.getElementById(18).className == "cell mole" &&
      document.getElementById(19).className == "cell mole" &&
      document.getElementById(20).className == "cell mole" &&
      document.getElementById(21).className == "cell mole" &&
      document.getElementById(22).className == "cell mole" &&
      document.getElementById(23).className == "cell mole" &&
      document.getElementById(24).className == "cell mole" &&
      document.getElementById(25).className == "cell mole"
  ) {
    // break/quit/tally score/
    console.log('FIN')
    alert("FIN") // pause execution
  }
}


// play audio when mole clicked
let play = () => {
  let audio = document.getElementById("audio");
  audio.play();
}
