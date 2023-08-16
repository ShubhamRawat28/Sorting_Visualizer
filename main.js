/*The sidebar js*/
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
});
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("fa-bars", "fa-bars-progress"); 
  } else {
    closeBtn.classList.replace("fa-bars-progress", "fa-bars"); 
  }
}
/*The sidebar js*/

/*the controls and speed js*/
var con = document.getElementById("container");
var in_s = document.getElementById("arr_size");
var gen = document.getElementById("generate");
var time = document.getElementById("time_delay");
var arr = [];
var arr_sizes = [];
var size = in_s.value;
var margin_size;
gen.addEventListener("click", generate);
in_s.addEventListener("input", update_arraysize);
time.addEventListener("input", vis_speed);
var speed = 1000;
function vis_speed() {
  var array_speed = time.value;
  switch (parseInt(array_speed)) {
    case 1:
      speed = 1;
      break;
    case 2:
      speed = 10;
      break;
    case 3:
      speed = 100;
      break;
    case 4:
      speed = 1000;
      break;
    case 5:
      speed = 10000;
      break;
  }
  delay = 1000 / (Math.floor(size / 10) * speed);
}
var delay = 1000 / (Math.floor(size / 10) * speed);
function generate() {
  con.innerHTML = "";
  for (var i = 0; i < size; i++) {
    arr_sizes[i] = Math.floor(Math.random() * (in_s.max - in_s.min)) ;
    arr[i] = document.createElement("div");
    con.appendChild(arr[i]);
    margin_size = 0.1;
    arr[i].style =
      " margin:0% " +
      margin_size +
      "%; background-color:white; width:" +
      (100 / size - 2 * margin_size) +
      "%; height:" +
      arr_sizes[i] +
      "%;";
  }
}

window.onload = generate();
function update_arraysize() {
  size = in_s.value;
  generate();
}
async function sleep(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
function change_color(con, height, color) {
  con.style =
    " margin:0.1% " +
    margin_size +
    "%; width:" +
    (100 / size - 2 * margin_size) +
    "%; height:" +
    height +
    "%; background-color:" +
    color +
    ";";
}

function issort() {
  for (let i = 0; i < size - 1; i++) {
    if (arr_sizes[i] > arr_sizes[i + 1]) return false;
  }
  return true;
}

async function gotsorted() {
  for (var i = 0; i < size; i++) {
    await sleep(10);
    change_color(arr[i], arr_sizes[i], "green");
    change_color(arr[i], arr_sizes[i], "white");
  }
}
function disable_btn(){
  document.getElementById("generate").disabled=true;
  document.getElementById("sort").disabled=true;
  document.getElementById("arr_size").disabled=true;
  document.getElementById("time_delay").disabled=true;
}
function enable_btn(){
  document.getElementById("generate").disabled=false;
  document.getElementById("sort").disabled=false;
  document.getElementById("arr_size").disabled=false;
  document.getElementById("time_delay").disabled=false;
}