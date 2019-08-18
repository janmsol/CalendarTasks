
const express = require('express')
const app = express()
const mySQL = require('mysql')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use("/", express.static(__dirname + '/'))

//Setting up database connection pool
//Brukernavn og passord må endres slik at det passer din databasetilkobling
var username = " "
var password = " "

const pool = mySQL.createPool(
{
    connectionLimit : 20,
    host: "localhost",
    user: username,
    password: password,
    database: "calendar"
})

//Database query
function Query(sql, callback)
{
    pool.getConnection((err, connection)=>
    {
        if (err) {
            connection.release()
            callback(true, err)
        } 
        connection.query(sql, function (err, result, fields) 
        {
            connection.release()
            if (err)
            { throw err }
            callback(false, result)       
        }); 
    })
    
      
}

//GET routes
app.get('/', (req, res) =>
    res.render( '/index.html'))



app.get("/allTasks", (req, res) =>
{
    var sql = "SELECT * FROM tasks ORDER BY date"
    Query(sql, (error, result)=>
    {
        if(!error)
        {
            res.send(result)
            console.log("query sucessful") 
        }
        else
        {
            console.log("error")
        }
    })  
});

//POST routes
app.post("/tasksByDate", (req, res) =>
{
    var date = req.body.date
    var sql = "SELECT * FROM tasks WHERE date LIKE '"+date+"%' ORDER BY date"
    Query(sql, (error, result)=>
    {
        if(!error)
        {
            res.send(result)
            console.log("query sucessful") 
        }
        else
        {
            console.log("error")
        }
    })  
});

app.post("/tasksById", (req, res) =>
{
    var taskId = req.body.taskId
    var sql = "SELECT * FROM tasks WHERE taskId ="+taskId
    Query(sql, (error, result)=>
    {
        if(!error)
        {
            res.send(result)
            console.log("query sucessful") 
        }
        else
        {
            console.log("error")
        }
    })  
});

app.post("/addTask", (req, res) =>
{
    var date = req.body.date
    var title = req.body.title
    var description = req.body.description
    var sql = "INSERT INTO tasks (date, title, description) VALUES ('"+date+"', '"+title+"', '"+description+"')"
    Query(sql, (error, result)=>
    {
        if(!error)
        {
            res.send(result)
            console.log("query sucessful") 
        }
        else
        {
            console.log("error")
        }
    })  
});

app.post("/removeTask", (req, res) =>
{
    var taskId = req.body.taskId
    var sql = "DELETE FROM tasks WHERE taskId ="+taskId
    Query(sql, (error, result)=>
    {
        if(!error)
        {
            res.send(result)
            console.log("query sucessful") 
        }
        else
        {
            console.log("error")
        }
    })  
});

//Strarts the appliction
app.listen(3000, () =>
    console.log('Listening on port 3000!'));