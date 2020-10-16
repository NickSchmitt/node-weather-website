const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=ef81f9bea9248af7c8c01a00d06da041&query=${latitude},${longitude}&units=f`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees, and it feels like ${body.current.feelslike} degrees. The humidity is ${body.current.humidity}%.`
      );
    }
  });
};

module.exports = forecast;
