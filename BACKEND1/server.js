import express from 'express';

 import cors from 'cors';
app.use(cors()); 

const app = express();

app.get('/api/countries',(req,res)=>{
  const countries  = [ "India","USA","UK","Canada","Australia"];
  res.send(countries)
})
 

app.get('/', (req, res) => {
  res.send('server is ready');
});

// app.get('/countries',(req,res)=>{
//     const countries=["India","USA","UK","Canada","Australia"];

// })


const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server at http://localhost:${PORT}`);
});
 



