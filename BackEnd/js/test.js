


fetch("https://www.twitch.tv/mooda")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));;