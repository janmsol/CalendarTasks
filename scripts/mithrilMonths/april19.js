//Mithril kode for å opprette en tabell for måneden april 2019
const april19 = 
{
    view: function() 
    {
        return m("table",{"class":"month"},
        [
            m("tr",
            [
                m("th", "week 14"),
                m("td",[m("button", {"id":"20190401", onclick: date_click}, "1")]),
                m("td",[m("button", {"id":"20190402", onclick: date_click}, "2")]),
                m("td",[m("button", {"id":"20190403", onclick: date_click}, "3")]),
                m("td",[m("button", {"id":"20190404", onclick: date_click}, "4")]),
                m("td",[m("button", {"id":"20190405", onclick: date_click}, "5")]),
                m("td",[m("button", {"id":"20190406", onclick: date_click}, "6")]),
                m("td",[m("button", {"id":"20190407", onclick: date_click}, "7")])
            ]),
            m("tr",
            [
                m("th", "week 15"),
                m("td",[m("button", {"id":"20190408", onclick: date_click}, "8")]),
                m("td",[m("button", {"id":"20190409", onclick: date_click}, "9")]),
                m("td",[m("button", {"id":"20190410", onclick: date_click}, "10")]),
                m("td",[m("button", {"id":"20190411", onclick: date_click}, "11")]),
                m("td",[m("button", {"id":"20190412", onclick: date_click}, "12")]),
                m("td",[m("button", {"id":"20190413", onclick: date_click}, "13")]),
                m("td",[m("button", {"id":"20190414", onclick: date_click}, "14")])
            ]),
            m("tr",
            [
                m("th", "week 16"),
                m("td",[m("button", {"id":"20190415", onclick: date_click}, "15")]),
                m("td",[m("button", {"id":"20190416", onclick: date_click}, "16")]),
                m("td",[m("button", {"id":"20190417", onclick: date_click}, "17")]),
                m("td",[m("button", {"id":"20190418", onclick: date_click}, "18")]),
                m("td",[m("button", {"id":"20190419", onclick: date_click}, "19")]),
                m("td",[m("button", {"id":"20190420", onclick: date_click}, "20")]),
                m("td",[m("button", {"id":"20190421", onclick: date_click}, "21")])
            ]),
            m("tr",
            [
                m("th", "week 17"),
                m("td",[m("button", {"id":"20190422", onclick: date_click}, "22")]),
                m("td",[m("button", {"id":"20190423", onclick: date_click}, "23")]),
                m("td",[m("button", {"id":"20190424", onclick: date_click}, "24")]),
                m("td",[m("button", {"id":"20190425", onclick: date_click}, "25")]),
                m("td",[m("button", {"id":"20190426", onclick: date_click}, "26")]),
                m("td",[m("button", {"id":"20190427", onclick: date_click}, "27")]),
                m("td",[m("button", {"id":"20190428", onclick: date_click}, "28")])
            ]),
            m("tr",
            [
                m("th", "week 18"),
                m("td",[m("button", {"id":"20190429", onclick: date_click}, "29")]),
                m("td",[m("button", {"id":"20190430", onclick: date_click}, "30")])
            ])
        ])
    }
}