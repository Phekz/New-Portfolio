const apiKey = 'FKKOVM8JB60N';

function getTimeByLocation() {
  navigator.geolocation.getCurrentPosition(async function(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const response = await fetch(`https://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=position&lat=${lat}&lng=${lon}`);
    const data = await response.json();

    if (data.status === "OK") {
      const localTime = new Date(data.formatted);
      const hours = String(localTime.getHours()).padStart(2, '0');
      const minutes = String(localTime.getMinutes()).padStart(2, '0');
      const seconds = String(localTime.getSeconds()).padStart(2, '0');

      document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    } else {
      document.getElementById('clock').textContent = 'Erro ao carregar o horário';
    }
  }, function(error) {
    console.log('Erro na geolocalização:', error);
    document.getElementById('clock').textContent = 'Erro ao obter localização';
  });
}

setInterval(getTimeByLocation, 1000);
getTimeByLocation();