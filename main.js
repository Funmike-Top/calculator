// select the element we need

const displayMsg = document.querySelector(".result");
// important variable
let dotCount = false;
let oprCount = false;

// displayMsg.value = 200;

// number btn
function numberBtn(num) {
  displayMsg.value += num;
  oprCount = false;
}

// dot/point button

function dotBtn() {
  if (dotCount) {
    return;
  }
  displayMsg.value += ".";
  dotCount = true;
}
function oprBtn(opr) {
  if (oprCount) {
    return;
  }
  displayMsg.value += opr;
  oprCount = true;
  dotCount = false;
}

// calculation
// eval()

function calculateResult() {
  const result = eval(displayMsg.value);

  displayMsg.value = result;
}

// clear function
function clearResult() {
  displayMsg.value = 0;
  oprCount = false;
}

let checkPlusMinus = false;
function plusMinus() {
  if (!checkPlusMinus) {
    if (displayMsg.value.includes("+")) {
      displayMsg.value = displayMsg.value.replace("+", "-");
      checkPlusMinus = true;
      return;
    }
    displayMsg.value = `-${displayMsg.value}`;
    checkPlusMinus = true;
    return;
  }
  if (checkPlusMinus) {
    displayMsg.value = displayMsg.value.replace("-", "+");
    checkPlusMinus = false;
    return;
  }
}

function zeroBtn() {
  if (displayMsg.value === "0") {
    displayMsg.value = num;
    oprCount = false;
    return;
  }

  displayMsh.value += 0;
  oprCount = false;
}
