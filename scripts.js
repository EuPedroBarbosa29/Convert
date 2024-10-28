//Cotação de moedas
const USD = 5.71
const EUR = 6.17
const GBP = 7.41
//Obtendo elementos 
const form = document.querySelector('form');
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const footer = document.querySelector('main footer');
const description = document.getElementById('description');
const result = document.getElementById('result');


//Manipulando o input para receber somente números
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g 
    amount.value = amount.value.replace(hasCharactersRegex, "")

})

//capturando o evento de submit (enviar) do formulário. 
form.onsubmit = () => { 
    event.preventDefault();

    switch (currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
                break;

        case "EUR":
                convertCurrency(amount.value, EUR, "€")
                break;

         case "GBP":
                convertCurrency(amount.value, GBP, "£")
                break;

    }

}

//função para convertes a moeda
function convertCurrency(amount, price, symbol) {
    try {
        //Atualizando o conteúdo da moeda selecionada
     description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        //calcula o total
     let total = String(amount * price).replace(".",",")

        //Exibindo o total 
     result.textContent = `${total} Reais`
      
        // aplica a classe que exibe o footer para mostrar o resultado
        footer.classList.add("show-result")
    } catch (error) {
        //Remove a classe do footer removendo ele da tela.
        footer.classList.remove("show-result")

        console.log(error)
        alert("Não foi possível converter. Tente novamente.")
    }

}

//Formata a moeda em real brasileiro 
function formatCurrencyBRL (value) {
    //converte para numero para usar o toLocaleString
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL" 
    })
}

