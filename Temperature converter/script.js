function convertTemperature() {
    const temperatureInput = document.getElementById("temperatureInput").value;
    const unitSelect = document.getElementById("unitSelect").value;
    const resultElement = document.getElementById("result");
    
    if (isNaN(temperatureInput)) {
        resultElement.textContent = "Please enter a valid number";
        return;
    }

    if (unitSelect === "celsius") {
        const fahrenheit = (temperatureInput * 9/5) + 32;
        resultElement.textContent = `${temperatureInput}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    } else {
        const celsius = (temperatureInput - 32) * 5/9;
        resultElement.textContent = `${temperatureInput}°F is equal to ${celsius.toFixed(2)}°C`;
    }
}
