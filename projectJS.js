
function calendar() {
            
    this.display = ('nothing yet')
    
    

    this.add_meal = () => {

    }

}
    
function daily_plan() {
    for (day in $("div>h1")[0]) {
        console.log(day)
    }
}

function testFunction() {
    calen = new calendar()
    popup = window.open()
    popup.document.write(calen.display)
}    

daily_plan()