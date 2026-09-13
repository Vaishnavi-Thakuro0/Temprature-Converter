function celsiusToFahrenheit(celsius)
{
  var f;
  f=((9/5)*celsius)+32;
  return f;
}
function fahrenheitToCelsius(fahrenheit) 
{
  var c;
  c=5*((fahrenheit - 32)/9);
  return c;
}
function formatTemperature(value, unit)
{
  return value + " " + unit;
}

// const fahrenheit = celsiusToFahrenheit(25);
// console.log(formatTemperature(fahrenheit, 'F'));
// const celsius = fahrenheitToCelsius(68);
// console.log(formatTemperature(celsius, 'C'));
// const freezingFahrenheit = celsiusToFahrenheit(0);
// console.log(formatTemperature(freezingFahrenheit, 'F'));
// const freezingCelsius = fahrenheitToCelsius(32);
// console.log(formatTemperature(freezingCelsius, 'C'));
