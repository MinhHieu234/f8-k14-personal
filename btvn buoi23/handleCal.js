let a = "";
let b = "";
let oper = "";
const screenE = document.querySelector('.calculate-screen');
const calculate = (a, b, oper) => {
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);
    let result = "";
    switch (oper) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : "Lỗi chia 0";
            break;
        default:
            result = "Phép toán không hợp lệ";
    }
    return result;
}

const onclickBtn = (value) => {
    if (!isNaN(value) || value === ".") {
        if (oper === "") {
            a += value;
        } else {
            b += value;
        }
        screenE.textContent = a + oper + b;
    } else if (["+", "-", "*", "/"].includes(value)) {
        if (a !== "") {
            if (oper !== "" && b !== "") {
                const res = calculate(a, b, oper);
                a = res.toString();
                b = "";
            }
            oper = value;
            screenE.textContent = a + oper + b;
        }
    } else if (value === "=") {
        if (a !== "" && b !== "" && oper !== "") {
            const reset = calculate(a, b, oper);
            screenE.textContent = reset;
            a = reset.toString();
            b = "";
            oper = "";
        }
    } else if (value === "ac") {
        a = "";
        b = "";
        oper = "";
        screenE.textContent = "";
    }else if (value === "del") {
        if (b !== "") {
            b = b.slice(0, -1);
        } else if (oper !== "") {
            oper = "";
        } else if (a !== "") {
            a = a.slice(0, -1);
        }
        screenE.textContent = a + oper + b;
    }
    console.log({a, b, oper});
}
export {onclickBtn};
