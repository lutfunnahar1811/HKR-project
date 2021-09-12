const express = require('express');
const app = express();



app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) =>{
    // run your request.js script
    // when index.html makes the ajax call to www.yoursite.com/request, this runs
    // you can also require your request.js as a module (above) and call on that:
    res.sendFile("index.html"); // try res.json() if getList() returns an object or array
});
app.get("/api",(req,res)=>{
    res.send({
      display_name:"lutfa",
        age:32,

    });
})


// Connect to the db

app.listen(3000, ()=>{
    console.log("Running at Port" +3000);

});

