const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;
// Route requires

app.use(express.static(path.join(__dirname, "client", "public")))
// Routes
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "public", "index.html"));
});

// Starting Server 
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
})
