window.onload = function(){
    document.body.style.opacity='1'
}

let tip_per_person = document.querySelector(".tip_per_person");
let total_tip = document.querySelector(".tip_total");
let bill = document.querySelector("#tipInput");
let people_number = document.querySelector("#peopleInput");
let zero_one = document.querySelector(".zero");
let zero_two = document.querySelector(".zero_two");
let reset = document.querySelector(".reset");

let tip_perc;
let tip_amount_per_person;
let tip_total;

let js_0 = document.querySelector(".js_0");
let js_1 = document.querySelector(".js_1");
let js_2 = document.querySelector(".js_2");
let js_3 = document.querySelector(".js_3");
let js_4 = document.querySelector(".js_4");
let custom = document.querySelector(".custom_inp");


function tipCalc() {

    if (!bill.value) {
        zero_one.style.visibility = "visible";
        bill.style.border = "solid";
        bill.style.borderColor = "rgb(190, 44, 44)";
    }
    if (!people_number.value) {
        zero_two.style.visibility = "visible";
        people_number.style.border = "solid"
        people_number.style.borderColor = "rgb(190, 44, 44)";
    } else {
        zero_one.style.visibility = "hidden";
        zero_two.style.visibility = "hidden";
        bill.style.borderColor = "none";
        people_number.style.borderColor = "none";

        tip_amount_per_person = (bill.value * tip_perc) / people_number.value;
        tip_per_person.innerHTML = "$" + tip_amount_per_person.toFixed(2);

        tip_total = bill.value * tip_perc;
        total_tip.innerHTML = "$" + tip_total.toFixed(2);
    }

    reset.style.backgroundColor = "rgb(38, 194, 173)"
};

function customCalc() {

    if (!bill.value) {
        zero_one.style.visibility = "visible";
        bill.style.border = "solid";
        bill.style.borderColor = "rgb(190, 44, 44)";
    }
    if (!people_number.value) {
        zero_two.style.visibility = "visible";
        people_number.style.border = "solid"
        people_number.style.borderColor = "rgb(190, 44, 44)";
    }
    if (bill.value !== 0 && people_number.value !== 0) {
        zero_one.style.visibility = "hidden";
        zero_two.style.visibility = "hidden";
        bill.style.borderColor = "none";
        people_number.style.borderColor = "none";

        tip_amount_per_person = (bill.value * tip_perc) / people_number.value;

        if (isNaN(tip_amount_per_person) || (!isFinite(tip_amount_per_person))) {

        } else {
            tip_per_person.innerHTML = "$" + tip_amount_per_person.toFixed(2);
        }

        tip_total = bill.value * tip_perc;
        total_tip.innerHTML = "$" + tip_total.toFixed(2);
    }

    if (bill.value == 0 && people_number.value !== 0) {
        zero_one.style.visibility = "visible";
        bill.style.border = "solid";
        bill.style.borderColor = "rgb(190, 44, 44)";

        bill.addEventListener("input", function () {
            zero_one.style.visibility = "hidden";
            bill.style.borderColor = "rgb(38, 194, 173)";

            tip_amount_per_person = (bill.value * tip_perc) / people_number.value;

            if (!isFinite(tip_amount_per_person)) {

            } else {
                tip_per_person.innerHTML = "$" + tip_amount_per_person.toFixed(2);
            }

            tip_total = bill.value * tip_perc;
            total_tip.innerHTML = "$" + tip_total.toFixed(2);
        })
    }

    if (bill.value !== 0 && people_number.value == 0) {
        zero_two.style.visibility = "visible";
        people_number.style.border = "solid"
        people_number.style.borderColor = "rgb(190, 44, 44)";

        people_number.addEventListener("input", function () {
            zero_two.style.visibility = "hidden";
            people_number.style.borderColor = "rgb(38, 194, 173)";

            tip_amount_per_person = (bill.value * tip_perc) / people_number.value;
            tip_per_person.innerHTML = "$" + tip_amount_per_person.toFixed(2);

            tip_total = bill.value * tip_perc;
            total_tip.innerHTML = "$" + tip_total.toFixed(2);

        })
    }
    reset.style.backgroundColor = "rgb(38, 194, 173)"
}


js_0.addEventListener("click", function (ev) {

    ev.preventDefault()

    tip_perc = 0.05;
    tipCalc();
    /*ACTIVE */ js_0.style.backgroundColor = "rgb(38, 194, 173)"
    js_1.style.backgroundColor = "rgb(0, 71, 75)";
    js_2.style.backgroundColor = "rgb(0, 71, 75)";
    js_3.style.backgroundColor = "rgb(0, 71, 75)";
    js_4.style.backgroundColor = "rgb(0, 71, 75)";
});

js_1.addEventListener("click", function (ev) {

    ev.preventDefault()

    tip_perc = 0.1;
    tipCalc();
    /*ACTIVE */ js_1.style.backgroundColor = "rgb(38, 194, 173)"
    js_0.style.backgroundColor = "rgb(0, 71, 75)";
    js_2.style.backgroundColor = "rgb(0, 71, 75)";
    js_3.style.backgroundColor = "rgb(0, 71, 75)";
    js_4.style.backgroundColor = "rgb(0, 71, 75)";
});

js_2.addEventListener("click", function (ev) {

    ev.preventDefault()

    tip_perc = 0.15;
    tipCalc();
    /*ACTIVE */ js_2.style.backgroundColor = "rgb(38, 194, 173)"
    js_0.style.backgroundColor = "rgb(0, 71, 75)";
    js_1.style.backgroundColor = "rgb(0, 71, 75)";
    js_3.style.backgroundColor = "rgb(0, 71, 75)";
    js_4.style.backgroundColor = "rgb(0, 71, 75)";
});

js_3.addEventListener("click", function (ev) {

    ev.preventDefault()

    tip_perc = 0.25;
    tipCalc();
    /*ACTIVE */ js_3.style.backgroundColor = "rgb(38, 194, 173)"
    js_0.style.backgroundColor = "rgb(0, 71, 75)";
    js_1.style.backgroundColor = "rgb(0, 71, 75)";
    js_2.style.backgroundColor = "rgb(0, 71, 75)";
    js_4.style.backgroundColor = "rgb(0, 71, 75)";
});

js_4.addEventListener("click", function (ev) {

    ev.preventDefault()

    tip_perc = 0.5;
    tipCalc();
    /*ACTIVE */ js_4.style.backgroundColor = "rgb(38, 194, 173)"
    js_0.style.backgroundColor = "rgb(0, 71, 75)";
    js_1.style.backgroundColor = "rgb(0, 71, 75)";
    js_2.style.backgroundColor = "rgb(0, 71, 75)";
    js_3.style.backgroundColor = "rgb(0, 71, 75)";
});


custom.addEventListener("click", function (ev) {
    ev.preventDefault()

    tip_perc = custom.value / 100;

    customCalc();


})

custom.addEventListener("input", function (ev) {
    ev.preventDefault()

    tip_perc = custom.value / 100;

    customCalc();

});

reset.addEventListener("click", function () {
    tip_per_person.innerHTML = "$0.00"
    total_tip.innerHTML = "$0.00"
    bill.value = "";
    people_number.value = "";
    tip_perc = "";
    custom.value = "";
    js_0.style.backgroundColor = "rgb(0, 71, 75)";
    js_1.style.backgroundColor = "rgb(0, 71, 75)";
    js_2.style.backgroundColor = "rgb(0, 71, 75)";
    js_3.style.backgroundColor = "rgb(0, 71, 75)";
    js_4.style.backgroundColor = "rgb(0, 71, 75)";
    reset.style.backgroundColor = "rgb(13, 104, 109)";
    zero_one.style.visibility = "hidden";
    zero_two.style.visibility = "hidden";
    bill.style.borderColor = "transparent";
    people_number.style.borderColor = "transparent";
})






























// bill.addEventListener("input", function(){


//     if (!bill.value) {
//         tip_per_person.innerHTML = "$0.00";
//     } else {
//         tip_per_person.innerHTML= "$" + bill.value;
//     }
// })

