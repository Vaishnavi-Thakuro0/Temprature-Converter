# Temperature Converter

A temperature widget needs two conversion helpers and one formatting helper. Keep the math separate from the display text so each function has one clear job.

## Functions

- `celsiusToFahrenheit(celsius)` - convert Celsius to Fahrenheit and return the number.
- `fahrenheitToCelsius(fahrenheit)` - convert Fahrenheit to Celsius and return the number.
- `formatTemperature(value, unit)` - return display text such as "77 F" or "20 C".

## How to Run

1. Clone this repository.
2. Open `script.js` in a JavaScript environment such as Node.js or a browser console.
3. Pass the function `celsiusToFahrenheit(celsius)` or `fahrenheitToCelsius(fahrenheit)` into variable name `fahrenheit` and `celcius`;
4. Call the function `formatTemperature(value, unit)` with a variable, value.

## Project Page URL
https://roadmap.sh/projects/js-temperature-converter

## Example

```javascript
 const fahrenheit = celsiusToFahrenheit(25);
 console.log(formatTemperature(fahrenheit, 'F'));
 const celsius = fahrenheitToCelsius(68);
 console.log(formatTemperature(celsius, 'C'));
 const freezingFahrenheit = celsiusToFahrenheit(0);
 console.log(formatTemperature(freezingFahrenheit, 'F'));
 const freezingCelsius = fahrenheitToCelsius(32);
 console.log(formatTemperature(freezingCelsius, 'C'));
