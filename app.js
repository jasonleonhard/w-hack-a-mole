// when whacked update score
let whack = (id) => {
  kill_mole(id)
}

// clicking a mole kills it, produces a sound, toggles the css class,
  // changes the value and updates the inner html
  // if no mole exists none is created on click
let total = 0;
let kill_mole = (id) => {
  // grab element by id and check if class mole exists
  let existance = document.getElementById(id)
  switch (existance.className) {
    case ("cell mole"): // "mole" exists
        play()
        existance.classList.toggle("mole");
        total = total + 100
        document.getElementById(id).value = total;
        document.getElementById('total').innerHTML = document.getElementById(id).value;
        break;
    case "cell":       // no "mole"
        total = total - 50
        document.getElementById(id).value = total;
        document.getElementById('total').innerHTML = document.getElementById(id).value
        break;
  }
  // console.log("mole:", id, 'total:', total)
}

// random number between start and stop (ie: 1 and x)
let rand_num = (stop) => {
  return Math.floor(Math.random() * stop) + 1
}

// given some id number, toggle css class to show/not show a mole
let toggle_mole = (id) => {
  let e = document.getElementById(id);
  if (e) {
    e.classList.toggle("mole");
  }
}

// if screen is full of moles game ends
let check_if_mole_party = () => {
  if (grab_array() > 4) { // game ends if 5 or more moles
    let total = document.getElementById("total").innerHTML

    // option 1: write over whole dom, not ideal
    document.write("                                \
      <div>                                         \
        <b style='color:grey; font-size:40px;'>     \
          FIN. Your final score is " + total + "!   \
        </b>                                        \
        <br/>                                       \
        <b style='color:grey; font-size:30px;'>     \
          Refresh to try again!                     \
        </b>                                        \
      </div>                                        \
    ")

    // option 2: pause execution
    // not ideal, still executes after clicking alert
    // alert("FIN! Your score is " + total)

    // option 3: WIP: IDEAL
    // throw and return don't seem to stop execution
    // throw new Error("FIN");
    // return "FIN"
    // return false
    // return
  }
  return
}

// count how many moles currently exist
let grab_array = () => {
  return document.getElementsByClassName('cell mole').length
}

// play audio when mole clicked
let play = () => {
  let audio = document.getElementById("audio");
  audio.play();
}

// recursive self executing function (ES5)
// toggle a mole (1 to 25)
// by a random number of seconds (0.001 to 1)
show_rand_mole = () => {
    var rand = rand_num(1000)
    setTimeout(function() {
        toggle_mole(rand_num(25))
        show_rand_mole();
        check_if_mole_party()
    }, rand);
}; // call on page load
show_rand_mole()
