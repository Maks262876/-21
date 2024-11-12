    function convertCurrency() {
            const amount = parseFloat(document.getElementById('amount').value);
            const currency = document.getElementById('currency').value;
            const rates = { USD: 1, EUR: 0.85, UAH: 27 };

            if (isNaN(amount) || amount <= 0) {
                document.getElementById('result').textContent = "Будь ласка, введіть коректну суму.";
                return;
            }
 
            const convertedAmount = amount * rates[currency];
            document.getElementById('result').textContent = `${amount} USD = ${convertedAmount.toFixed(2)} ${currency}`;
        }