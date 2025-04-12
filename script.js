const exchangeRates = {
    "USD": { "INR": 82.5, "EUR": 0.91, "GBP": 0.78, "USD": 1 },
    "INR": { "USD": 0.012, "EUR": 0.011, "GBP": 0.0095, "INR": 1 },
    "EUR": { "USD": 1.1, "INR": 90.2, "GBP": 0.86, "EUR": 1 },
    "GBP": { "USD": 1.28, "INR": 105.3, "EUR": 1.16, "GBP": 1 }
};

function convertCurrency() 
{
    let amount = document.getElementById("amount").value;
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;
    
    if (amount === "" || amount <= 0) 
    {
        alert("Please enter a valid amount.");
        return;
    }
    
    let convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
    document.getElementById("result").innerHTML = `Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency}`;
}