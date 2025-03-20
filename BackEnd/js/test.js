


fetch("https://selfroutine.alwaysdata.net/Api/database.php")
  .then(response => response.json())
  .then(data => console.log(data));