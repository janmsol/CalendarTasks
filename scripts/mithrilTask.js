//Definerer root div som taskInfo og addtask mountes till
const taskRoot = document.getElementById('taskContainer')

//Funksjon for å definere og mounte detaljevisning av kalenderinnslag
function createTaskInfo(tasks)
{
    var title = tasks[0].title
    var description = tasks[0].description
    var date = tasks[0].date
    var taskId = tasks[0].taskId

    //Definerer Mithril DOM element for detaljevisning
    const taskInfo =
    {
        view: function()
        {
            return m("div",
            [
                // m("button",{},"edit"), //redigeringsfunksjon er ikke lagt til enda pga. tid.
                m("button",{onclick:deleteTask_click},"delete"),
                m("h3", title),
                m("p", {"id":"findTaskId"}, taskId),
                m("p", date),
                m("p", description)

            ])
        }
    }

    //Mounter Mithril DOM element for detaljevisning
    m.mount(taskRoot, taskInfo)

}

//OnClick funksjon for sletting av kalenderinnslag fra databasen
function deleteTask_click()
{
    var taskId = $('#findTaskId').text()
    //Kall mot xmlHttp delete funksjon
    deleteTask(taskId)
    //Unmouter detaljevisning etter at kalenderinnslag er slettet
    m.mount(taskRoot, null)
}