// Seleciona o botão de conversão na página HTML
const convertButton = document.querySelector(".convert-button");

// Seleciona os elementos HTML responsáveis por escolher as moedas de origem e destino
const currencySelect = document.querySelector(".currency-select");
const currencySelectFrom = document.querySelector(".currency-select-from");

// Seleciona os elementos de imagem que serão alterados de acordo com as moedas selecionadas
const imageChangeTo = document.querySelector(".imagemTo");
const imageChangeFrom = document.querySelector(".imagemFrom");

// Seleciona os elementos de texto que serão alterados de acordo com as moedas selecionadas
const textChangeTo = document.getElementById("text-change-to");
const textChangeFrom = document.getElementById("text-change-from");

// Função principal que realiza a conversão das moedas
function convertValues() {
    // Seleciona o valor inserido pelo usuário para conversão
    const inputCurrencyValue = document.querySelector(".input-currency").value;

    // Seleciona os elementos HTML que exibem os valores antes e depois da conversão
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    // Define as taxas de câmbio atuais em relação ao Real (BRL)
    const rates = {
        dolar: 5.20,   // Taxa de conversão do Dólar Americano
        euro: 6.20,    // Taxa de conversão do Euro
        iene: 0.038,   // Taxa de conversão do Iene Japonês
        rupia: 0.065,  // Taxa de conversão da Rupia Indiana
        real: 1.00     // Taxa de conversão do Real (referência)
    };

    // Define os códigos das moedas para a formatação do valor
    const currencies = {
        realFrom: "BRL",    // Real Brasileiro
        dolarFrom: "USD",   // Dólar Americano
        euroFrom: "EUR",    // Euro
        ieneFrom: "JPY",    // Iene Japonês
        rupiaFrom: "INR",   // Rupia Indiana
        realTo: "BRL",
        dolarTo: "USD",
        euroTo: "EUR",
        ieneTo: "JPY",
        rupiaTo: "INR"
    };

    // Identifica a moeda de origem e destino com base na seleção do usuário
    const fromCurrency = currencySelectFrom.value.replace("From", "");
    const toCurrency = currencySelect.value.replace("To", "");

    // Formata o valor inicial inserido pelo usuário na moeda de origem
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: currencies[currencySelectFrom.value] // Define a moeda correta para formatação
    }).format(inputCurrencyValue);

    // Realiza o cálculo da conversão utilizando as taxas definidas
    const convertedValue = (inputCurrencyValue * rates[fromCurrency]) / rates[toCurrency];
    
    // Formata e exibe o valor convertido na moeda de destino
    currencyValueConverted.innerHTML = new Intl.NumberFormat(currencies[currencySelect.value].locale, {
        style: "currency",
        currency: currencies[currencySelect.value] // Define a moeda correta para formatação
    }).format(convertedValue);

    // Atualiza as imagens e os textos na página com base nas moedas selecionadas
    imageChangeFrom.src = `./assets/${fromCurrency}.png`; // Atualiza a imagem da moeda de origem
    imageChangeTo.src = `./assets/${toCurrency}.png`;     // Atualiza a imagem da moeda de destino
    textChangeFrom.innerHTML = fromCurrency.charAt(0).toUpperCase() + fromCurrency.slice(1); // Atualiza o texto da moeda de origem
    textChangeTo.innerHTML = toCurrency.charAt(0).toUpperCase() + toCurrency.slice(1);       // Atualiza o texto da moeda de destino
}

// Adiciona um evento ao botão de conversão que chama a função convertValues quando clicado
convertButton.addEventListener("click", convertValues);
