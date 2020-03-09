const axios = require('axios');



const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=8152a1bd19fc4d7cb51254b31f69fa70&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima

}