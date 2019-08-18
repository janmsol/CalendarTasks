//Funksjon for å lage og mounte skjema for lagring av kalenderinnslag
function createAddTask(date)
{
    //Oppretter et mithril DOM element
    const addTaskTab =
    {
        view: function()
        {
            return m("div",
            [
                m("p",{"id":"date"}, date),
                m("div",[
                    m("label",{"for":"inputTitle"}, "Title"),
                    m("input",{"id":"inputTitle","type":"text"})
                ]),
                m("div",[
                    m("label",{"for":"inputDesc"}, "Description"),
                m("input",{"id":"inputDesc","type":"text"})
                ]),               
                m("button",{onclick:saveTask_click},"Save"),
            
            ])
        }
    }

    //Mounter Mithril DOM elementet
    m.mount(taskRoot, addTaskTab)

}