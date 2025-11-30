const app = require('express')();

const PORT = 8080;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.get('/fruits', (req, res) => {
  res.send('Displaying the list of fruits');
});
