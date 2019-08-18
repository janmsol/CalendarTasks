//Mithril kode for å opprette en tabell for måneden mai 2019
const may19 = 
{
    view: function() 
    {
        return m("table",{"class":"month"},
        [
            m("tr",
            [
                m("th", "week 18"),
                m("td"),
                m("td"),
                m("td",[m("button", {"id":"20190501", onclick: date_click}, "1")]),
                m("td",[m("button", {"id":"20190502", onclick: date_click}, "2")]),
                m("td",[m("button", {"id":"20190503", onclick: date_click}, "3")]),
                m("td",[m("button", {"id":"20190504", onclick: date_click}, "4")]),
                m("td",[m("button", {"id":"20190505", onclick: date_click}, "5")])
            ]),
            m("tr",
            [
                m("th", "week 19"),
                m("td",[m("button", {"id":"20190506", onclick: date_click}, "6")]),
                m("td",[m("button", {"id":"20190507", onclick: date_click}, "7")]),
                m("td",[m("button", {"id":"20190508", onclick: date_click}, "8")]),
                m("td",[m("button", {"id":"20190509", onclick: date_click}, "9")]),
                m("td",[m("button", {"id":"20190510", onclick: date_click}, "10")]),
                m("td",[m("button", {"id":"20190511", onclick: date_click}, "11")]),
                m("td",[m("button", {"id":"20190512", onclick: date_click}, "12")])
            ]),
            m("tr",
            [
                m("th", "week 20"),
                
                m("td",[m("button", {"id":"20190513", onclick: date_click}, "13")]),
                m("td",[m("button", {"id":"20190514", onclick: date_click}, "14")]),
                m("td",[m("button", {"id":"20190515", onclick: date_click}, "15")]),
                m("td",[m("button", {"id":"20190516", onclick: date_click}, "16")]),
                m("td",[m("button", {"id":"20190517", onclick: date_click}, "17")]),
                m("td",[m("button", {"id":"20190518", onclick: date_click}, "18")]),
                m("td",[m("button", {"id":"20190519", onclick: date_click}, "19")])
            ]),
            m("tr",
            [
                m("th", "week 21"),
                m("td",[m("button", {"id":"20190520", onclick: date_click}, "20")]),
                m("td",[m("button", {"id":"20190521", onclick: date_click}, "21")]),
                m("td",[m("button", {"id":"20190522", onclick: date_click}, "22")]),
                m("td",[m("button", {"id":"20190523", onclick: date_click}, "23")]),
                m("td",[m("button", {"id":"20190524", onclick: date_click}, "24")]),
                m("td",[m("button", {"id":"20190525", onclick: date_click}, "25")]),
                m("td",[m("button", {"id":"20190526", onclick: date_click}, "26")])
            ]),
            m("tr",
            [
                m("th", "week 22"),
                m("td",[m("button", {"id":"20190527", onclick: date_click}, "27")]),
                m("td",[m("button", {"id":"20190528", onclick: date_click}, "28")]),
                m("td",[m("button", {"id":"20190529", onclick: date_click}, "29")]),
                m("td",[m("button", {"id":"20190530", onclick: date_click}, "30")]),
                m("td",[m("button", {"id":"20190531", onclick: date_click}, "31")])
            ])
        ])
    }
}