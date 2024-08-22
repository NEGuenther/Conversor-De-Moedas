const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencySelectFrom = document.querySelector(".currency-select-from");
const imageChangeTo = document.querySelector(".imagemTo");
const imageChangeFrom = document.querySelector(".imagemFrom");
const textChangeTo = document.getElementById("text-change-to");
const textChangeFrom = document.getElementById("text-change-from");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    const rates = {
        dolar: 5.20,
        euro: 6.20,
        iene: 0.038,
        rupia: 0.065,
        real: 1.00 // Real como referência
    };

    const currencies = {
        realFrom: "BRL",
        dolarFrom: "USD",
        euroFrom: "EUR",
        ieneFrom: "JPY",
        rupiaFrom: "INR",
        realTo: "BRL",
        dolarTo: "USD",
        euroTo: "EUR",
        ieneTo: "JPY",
        rupiaTo: "INR"
    };

    const fromCurrency = currencySelectFrom.value.replace("From", "");
    const toCurrency = currencySelect.value.replace("To", "");

    // Formatar o valor inicial
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: currencies[currencySelectFrom.value]
    }).format(inputCurrencyValue);

    // Calcular o valor convertido
    const convertedValue = (inputCurrencyValue * rates[fromCurrency]) / rates[toCurrency];
    
    currencyValueConverted.innerHTML = new Intl.NumberFormat(currencies[currencySelect.value].locale, {
        style: "currency",
        currency: currencies[currencySelect.value]
    }).format(convertedValue);

    // Trocar as imagens e textos
    imageChangeFrom.src = `./assets/${fromCurrency}.png`;
    imageChangeTo.src = `./assets/${toCurrency}.png`;
    textChangeFrom.innerHTML = fromCurrency.charAt(0).toUpperCase() + fromCurrency.slice(1);
    textChangeTo.innerHTML = toCurrency.charAt(0).toUpperCase() + toCurrency.slice(1);
}

convertButton.addEventListener("click", convertValues);
