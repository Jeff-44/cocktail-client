import express from "express";
import axios from "axios";


const app = express();
const port = 3000;
const API_URL = "https://www.thecocktaildb.com/api/json/v1/1";

app.use(express.static("public"));

app.get("/", async (req, res)=>{
   try {
    const retObj= await axios.get(API_URL + "/random.php");
    const result = retObj.data;
    console.log(result);
    res.render("index.ejs", {response: result.drinks[0]});
   } catch (error) {
    console.log(error.message);
    res.status(500);
   }
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});
