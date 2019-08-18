const listRoot = document.getElementById('taskListContainer')

//Funskjon for å definere og legge til liste med kalenderinnslag
function createTaskList(tasks)
{
    

    const taskList =
    {
        view: function()
        {
            return m("ul",{"id":"taskList"})
        }
    }

    m.mount(listRoot, taskList)

    for(var i = 0; i < tasks.length; i++)
    {
        var taskId = tasks[i].taskId
        var date = tasks[i].date
        var title = tasks[i].title

        $('<li><button id="'+taskId+'" onclick="showSingleTask('+taskId+')">'+date
        +' '+title+'</button></li>').appendTo('#taskList')
    }
        
    

}
