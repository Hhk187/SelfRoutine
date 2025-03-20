


fetch('https://selfroutine.alwaysdata.net/Api/database.php')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));


fetch('https://selfroutine.alwaysdata.net/Api/database.php', {
  method: 'GET',
  mode: 'no-cors'
  })
  .then(response => {
    console.log(response); // This will not contain body content
  })
  .catch(error => console.error(error));