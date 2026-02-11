const axios = require("axios");

exports.getCurrentWeather = async (latitude, longitude) => {
  try {
    const res = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );

    return res.data.current_weather;
  } catch (err) {
    console.error("Weather API Error:", err.message);
    return null; 
  }
};
