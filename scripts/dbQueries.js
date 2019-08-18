//Definere xmlHttpRequest for bruk i kallene til backend (index.js)
var xmlHttp = new XMLHttpRequest();

//Get queries
//Funksjon for å returnere en liste med alle kalenderinnslagene i databasen
function getAllTasks(callback)
{
    xmlHttp.onreadystatechange = function (){
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
                var jsonObj = JSON.parse(xmlHttp.response)
                if(xmlHttp.response != null)
                { callback(false, jsonObj) }
                else
                { callback(true, xmlHttp.status) }
            }
        }
    
        xmlHttp.open("GET", "/allTasks", true);
        xmlHttp.send();
};

//Getby queries
//Funksjon for å returnere alle kalenderinnslagene for en gitt dag/måned
function getTasksByDate(date, callback)
{
    xmlHttp.onreadystatechange = function (){
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
                var jsonObj = JSON.parse(xmlHttp.response)
                if(xmlHttp.response != null)
                { callback(false, jsonObj) }
                else
                { callback(true, xmlHttp.status) }
            }
        }
    
        xmlHttp.open("POST", "/tasksByDate", true);
        xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp.send("date="+date);
};

//Funksjon for å returnere ett enkelt kalenderinnslag med gitt id
function getTasksById(taskId, callback)
{
    xmlHttp.onreadystatechange = function (){
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
                var jsonObj = JSON.parse(xmlHttp.response)
                if(xmlHttp.response != null)
                { callback(false, jsonObj) }
                else
                { callback(true, xmlHttp.status) }
            }
        }
    
        xmlHttp.open("POST", "/tasksById", true);
        xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp.send("taskId="+taskId);
};



//Post queries
//Funksjon for å lagre ett kalenderinnslag til databasen
function saveTask(date, title, description)
{
    xmlHttp.onreadystatechange = function (){
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
                var jsonObj = JSON.parse(xmlHttp.response)
                console.log(jsonObj)
            }
        }
    
        xmlHttp.open("POST", "/addTask", true);
        xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp.send("date="+date+"&title="+title+"&description="+description);
};

//Funksjon for å slette ett kalenderinnslag fra databasen
function deleteTask(taskId)
{
    xmlHttp.onreadystatechange = function (){
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
                var jsonObj = JSON.parse(xmlHttp.response)
                console.log(jsonObj)
            }
        }
    
        xmlHttp.open("POST", "/removeTask", true);
        xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp.send("taskId="+taskId);
};