//OnClick funksjon for å liste ut alle kalenderinnslag
$('#searchAllBtn').click(()=>
{
    getAllTasks((error, tasks)=>
    {
        if(!error)
        { {createTaskList(tasks)} }
        else
        {console.log("status: "+tasks)}
    })
})

//OnClick funksjon for å liste ut alle kalenderinnslag for en måned
$('#searchMonthBtn').click(()=>
{
    let monthVal = $('#month').val()
    let yearVal = $('#year').val()
    var date = ""

    if( monthVal == "april" )
    {
        date = yearVal+"04"
    }
    else if( monthVal == "may" )
    {
        date = yearVal+"05"
    }
    console.log(date)

    getTasksByDate(date, (error, tasks)=>
    {
        if(!error)
        { createTaskList(tasks) }        
        else
        {console.log("status: "+tasks)}
    })
})