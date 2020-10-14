let curr_result = "0"
let display = "0"
function init() {
  const val = document.querySelector(".calcbuttons")
  val.addEventListener("click", function(event) {
    if (isNaN(parseInt(event.target.innerText))) {
      calculatesymbol(event.target.innerText);
    }
    else {
      calculatenumber(event.target.innerText);
    }
  });


}

function calculatenumber(value){
  if (curr_result === "0") {
    curr_result = value;
  }
  else {
    curr_result += value;
  }
  rerender();
}

function calculatesymbol(symbol){
  if (symbol !== "="){
    display = ""
    curr_result = ""
    const result = document.querySelector(".topblack")
    result.innerText = display;
    result_now = parseInt(curr_result);
  }

}

function rerender() {
  const result = document.querySelector(".topblack")
  result.innerText = curr_result;
}

init()
console.log(curr_result)
