//Definerer root div som Mithril måned DOMene skal mountes til
const monthRoot = document.getElementById('monthContainer')

//Mounter default måned april 2019
m.mount(monthRoot, april19)
let currentMonth = "april19"

//Listener for Month og Year selects
$('#month').on('change', ()=>
{ changeMonth() })

$('#year').on('change', ()=>
{ changeMonth() })

//Funksjon for å bytte viste/valgte måned
function changeMonth()
{
    //Henter inn verdi av Month og Year selects
    let monthVal = $('#month').val()
    let yearVal = $('#year').val()

    //Mounter ny måned basert på verdi av Month og Year selects
    if(yearVal == "2019"){
        if( monthVal == "april" && currentMonth != "april19" )
        {
            m.mount(monthRoot, april19)
            currentMonth = "april19"
        }
        else if( monthVal == "may" && currentMonth != "may19" )
        {
            m.mount(monthRoot, may19)
            currentMonth = "may19"
        }
    }
}