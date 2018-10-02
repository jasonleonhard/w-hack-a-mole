<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="style.css">
  <title>Wack-a-Mole</title>
</head>
<body>
  <div id="total_container">
    <b>Total:</b>
    <b id="total">0</b>
  </div>
  <div class="row">
    <div id="1" class="cell" onClick="wack(this.id,this.value)"></div>
    <div id="2" class="cell" onClick="wack(this.id,this.value)"></div>
    <div id="3" class="cell" onClick="wack(this.id,this.value)"></div>
  </div>
  <div class="row">
    <div id="4" class="cell" onClick="wack(this.id,this.value)"></div>
    <div id="5" class="cell" onClick="wack(this.id,this.value)"></div>
    <div id="6" class="cell" onClick="wack(this.id,this.value)"></div>
  </div>
  <div class="row">
    <div id="7" class="cell" onClick="wack(this.id,this.value)"></div>
    <div id="8" class="cell" onClick="wack(this.id,this.value)"></div>
    <div id="9" class="cell" onClick="wack(this.id,this.value)"></div>
  </div>
  <audio id="audio" src="wack.mp3" ></audio>
</body>
<script src="app.js"></script>
</html>
