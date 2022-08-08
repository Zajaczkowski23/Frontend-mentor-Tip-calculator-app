const textBox = document.querySelector("#text-box");
const textBox2 = document.querySelector("#text-box2");
const custom = document.querySelector("#box-custom");
const reset = document.querySelector(".reset");
const tipPerson = document.querySelector(".tip-person");
const tipTotal = document.querySelector(".tip-total");
const tipButton = document.querySelectorAll(".box");
let tip;





function calculateTip(e) {
    tip = e.target.value;
    tip = parseFloat(tip / 100).toFixed(2);

    calculateBill();
}


function resetAll() {
    textBox.value = "0";
    textBox2.value = "0";
    custom.value = "Custom";
    tipPerson.textContent = "$0.00";
    tipTotal.textContent = "$0.00";
}

function calculateBill() {
    let billValue = textBox.value ;
    let numberOfPeople = textBox2.value;
    let total;
    let tipAll;
    let full;
    if (billValue > 0 && numberOfPeople > 0) {
        total = billValue / numberOfPeople;
        tipAll = total * tip;
        full = total + tipAll;

        if(tipAll > 0 && full > 0) {
            tipPerson.textContent = "$" + tipAll.toFixed(2);
            tipTotal.textContent = "$" + parseFloat(full).toFixed(2);
        } else {
            tipPerson.textContent = "$0.00";
            tipTotal.textContent = "$" + total;
        }
    } else if (numberOfPeople < 0) {
        tipPerson.textContent = "$0.00";
        tipTotal.textContent = "$0.00";
    }
}


tipButton.forEach(e => {
    e.addEventListener("click", calculateTip);
})

textBox.addEventListener("input", calculateBill);
textBox2.addEventListener("input", calculateBill);
custom.addEventListener("input", calculateTip);
reset.addEventListener("click", resetAll);





