let input = document.getElementById("input")
let expressionLast = document.getElementById("expression-last")

let calc_btn_class = document.getElementsByClassName("calc-btn");

let expression = "";
let expressionValue = 0;
let lastMathSymbol = "+";

let equalClicked = false;
let lastAns = 0;

for (let i = 0; i < calc_btn_class.length; i++) {
    const element = calc_btn_class[i];
    const value = element.getAttribute("data-value");

    element.addEventListener("click", () => {
        if (value != "=") {
            expression = expression + value;
            input.value = expression;

            if (equalClicked) {
                expressionLast.innerHTML = "Ans = " + lastAns;
                equalClicked = false;
            }

            if (value != "+" && value != "-" && value != "*") {
                if (lastMathSymbol == "+") {
                    expressionValue = expressionValue + parseFloat(value);
                } else if (lastMathSymbol == "-") {
                    expressionValue = expressionValue - parseFloat(value);
                }else if(lastMathSymbol == "*"){
                    expressionValue = expressionValue * parseFloat(value);
                }
            }else{
                lastMathSymbol = value;
            }
        } else {
            expressionLast.innerHTML = expression;
            input.value = expressionValue;

            equalClicked = true;
            lastAns = expressionValue;
            expression = "";
            expressionValue = 0;
        }
    });
}


// let input = document.getElementById("input")
// let expressionLast = document.getElementById("expression-last")

// let calc_btn_class = document.getElementsByClassName("calc-btn");

// let expression = "";
// let expressionValue = 0;

// let equalClicked = false;
// let lastAns = 0;

// for (let i = 0; i < calc_btn_class.length; i++) {
//     const element = calc_btn_class[i];
//     const value = element.getAttribute("data-value");

//     element.addEventListener("click", () => {
//         if (value != "=") {
//             expression = expression + value;
//             input.value = expression;

//             if (equalClicked) {
//                 expressionLast.innerHTML = "Ans = " + lastAns;
//                 equalClicked = false;
//             }
//         } else {
//             expressionValue = math.evaluate(expression);
//             expressionLast.innerHTML = expression;
//             input.value = expressionValue;

//             equalClicked = true;
//             lastAns = expressionValue;
//             expression = "";
//         }
//     });
// }