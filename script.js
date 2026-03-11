const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");

const currencyList = ["USD","INR","EUR","GBP","JPY","AUD","CAD","CNY"];

currencyList.forEach(currency => {
    let option1 = document.createElement("option");
    let option2 = document.createElement("option");

    option1.value = option2.value = currency;
    option1.text = option2.text = currency;

    fromCurrency.add(option1);
    toCurrency.add(option2);
});

fromCurrency.value = "USD";
toCurrency.value = "INR";


async function convertCurrency(){

    let amount = document.getElementById("amount").value;
    let from = fromCurrency.value;
    let to = toCurrency.value;

    if(amount===""){
        alert("Enter amount");
        return;
    }

    let url = `https://open.er-api.com/v6/latest/${from}`;

    let response = await fetch(url);
    let data = await response.json();

    let rate = data.rates[to];

    let result = (amount * rate).toFixed(2);

    document.getElementById("result").innerText =
        `${amount} ${from} = ${result} ${to}`;
}

document.getElementById("swapBtn").addEventListener("click", () => {

    let temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;

});