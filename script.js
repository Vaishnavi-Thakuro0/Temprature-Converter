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

