//OnClick funksjon for dager i måned tabell
function date_click(e)
{
    //Henter inn dato fra dagen som ble trykket på
    date = e.target.id
    //Henter inn verdi av action select
    const action = $("#action").val()

    //Viser kalenderinnslag eller skjema for å legge til, ut ifra action select
    switch (action)
    {
        case "add": addTask(date)
        break
        case "show": showTasks(date)
    }
}

//Funksjon for å vise kalenderinnslag for dato
function showTasks(date)
{
    getTasksByDate(date, (error, tasks)=>
    {
        if(!error)
        {
            if(tasks.length == 1)
            { createTaskInfo(tasks) }
            else if(tasks.length > 1)
            {createTaskList(tasks)} 
        }
        else
        {console.log("status: "+tasks)}
    })
}

//Funksjon for å vise skjema for å legge til kalenderinnslag
function addTask(date)
{  
    createAddTask(date)
}

//Funksjon for å vise ett kalenderinnslag detaljert
function showSingleTask(taskId)
{
    getTasksById(taskId, (error, tasks)=>
    {
        if(!error)
        { createTaskInfo(tasks) }
        else
        { console.log("status: "+tasks) }
    })
}

//OnClick funksjon for å legge kalenderinnslag til i databasen
function saveTask_click()
{
    var date = $('#date').text()
    var title = $('#inputTitle').val()
    var description = $('#inputDesc').val()
    saveTask(date, title, description)
}

