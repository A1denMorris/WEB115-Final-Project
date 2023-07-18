// Aiden Morris
// 07/17/2023
// JavaScript file for Final Project


function calendar() {
            
    this.display = (`
    
    <html>
        <head>
            <meta charset="UTF-8">
            <title>Meal Plan Application</title>
            <link rel="stylesheet" type="text/css" href="projectCSS.css">
            <script src="https://code.jquery.com/jquery-3.7.0.min.js" 
                    integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" 
                    crossorigin="anonymous"></script>
            <script 
                src="projectJS.js" defer>
            </script> 
        </head>
        <img src="PerfPortLogo.png">
        <body>`)


    this.MealPlanDisplay = 
    (`<div id="DoW_grid_out" class="grid-container">
    <h1 id="sunday_out" class="day_title" style="grid-column: 1; grid-row: 1;">Sunday</h1>
    <h1 id="monday_out" class="day_title" style="grid-column: 2;grid-row: 1;">Monday</h1>                
    <h1 id="tuesday_out" class="day_title" style="grid-column: 3; grid-row: 1;">Tuesday</h1>                
    <h1 id="wednesday_out" class="day_title" style="grid-column: 4; grid-row: 1;">Wednesday</h1>                                
    <h1 id="thursday_out" class="day_title" style="grid-column: 5; grid-row: 1;">Thursday</h1>                
    <h1 id="friday_out" class="day_title" style="grid-column: 6; grid-row: 1;">Friday</h1>                
    <h1 id="saturday_out" style="grid-column: 7; grid-row: 1;">Saturday</h1> `)

}

// This function controls the display of the main page
// and adds some responsiveness to the window
function main() {
    for (let i = 0; i < $("h1").length; i ++) {
        
        let day = document.querySelector(`#${$("h1")[i].id}`)
        let meal_plan = document.querySelector(`#${$("h1")[i].id}_mealPlanIn`)
        let DoW_gridCords = [day.style.gridColumn[0], day.style.gridRow[0]]
        let MPs_gridCords = [meal_plan.style.gridColumn[0], meal_plan.style.gridRow[0]]

        window.addEventListener("resize", change)

        function change() {
            if (window.innerWidth < 1330) {

                day.style.gridColumn = `${DoW_gridCords[1]/*The original ROW*/} / auto`
                day.style.gridRow = `${DoW_gridCords[0]/*The original COLUMN */} / auto`

                meal_plan.style.gridColumn = `${MPs_gridCords[1]} / auto`
                meal_plan.style.gridRow = `${MPs_gridCords[0]} / auto`
                
                day.removeAttribute("class")
            }
            else {
                day.style.gridColumn = `${DoW_gridCords[0]/*The original COLUMN*/} / auto`
                day.style.gridRow = `${DoW_gridCords[1]/*The original ROW */} / auto`

                meal_plan.style.gridColumn = `${MPs_gridCords[0]} / auto`
                meal_plan.style.gridRow = `${MPs_gridCords[1]} / auto`

                if (day.id != "saturday") {
                    day.setAttribute("class", "day_title")
                }
            }
        }  
    }
}

function make_daily_plan_input(day) {

    colPosition = document.querySelector(`#${day}`).style.gridColumn[0]

    $("div#DoW_grid").append(`
    
    <div id="${day}_mealPlanIn" class="MPs_form" style="grid-column: ${colPosition}; grid-row: 2">
        <p>Breakfast: <input type="text" id="${day}_breakfast" class="meal"></p>
        <p>Snack: <input type="text" id="${day}_snack1" class="meal"></p>
        <p>Lunch: <input type="text" id="${day}_lunch" class="meal"></p>
        <p>Snack: <input type="text" id="${day}_snack2" class="meal"></p>
        <p>Dinner: <input type="text" id="${day}_dinner" class="meal"></p>
        <input type="button" id="copyButton" style="margin-top: 10px" value="Copy to the Right" onclick="copyAll(${day})")>
    </div>`) 
}


function dailyplan(day) {
  
    colPosition = document.querySelector(`#${day}`).style.gridColumn[0]

    let breakfast = $(`#${day}_breakfast`).val()
    let snack1 = $(`#${day}_snack1`).val()
    let lunch = $(`#${day}_lunch`).val()
    let snack2 = $(`#${day}_snack2`).val()
    let dinner = $(`#${day}_dinner`).val()

    let text =

        `<div id="${day}_mealPlanOut" class="MPs_form" style="grid-column: ${colPosition}; grid-row: 2">
	        <p>Breakfast: <b>${breakfast}</b></p>
            <p>Snack: <b>${snack1}</b></p>
            <p>Lunch: <b>${lunch}</b></p>
            <p>Snack: <b>${snack2}</b></p>
            <p>Dinner: <b>${dinner}</b></p>
        </div>`
        
    return text
}


function show_meal_plan() {
    let mealPlan = new calendar()
    
    let MP_popup = window.open()

    // Creates the iformational header (user name, email, and goal)
    MP_popup.document.write(mealPlan.display)

    let user_name = $("#usr_fname").val() + " " + $("#usr_lname").val()
    let user_email = $("#usr_email").val()
    let user_goal = $("#usr_goal").val()

    MP_popup.document.write(
        `<div id="MP_infoHeader">
            <h2 style="grid-column: 1; grid-row: 1">NAME: ${user_name}</h2>
            <h2 style="grid-column: 2; grid-row: 1">EMAIL: ${user_email}</h2>
            <h2 style="grid-column: 3; grid-row: 1">YOUR GOAL: ${user_goal}</h2>
        </div>`)

    // Creates the Day of the Week Headers
    MP_popup.document.write(mealPlan.MealPlanDisplay)

    // Creates the Meal Plan itself
    for (i = 0; i < $("div > h1").length; i ++) {
        MP_popup.document.write(dailyplan($("h1")[i].id))
    }

    MP_popup.document.write(`
    <div>
        <input type="button" style="grid-column: 1; grid-row: 1" class="sub_button" id="MP_print" value="Print" onclick="window.print()">
        <input type="button" style="grid-column: 2; grid-row: 1" class="sub_button" id="MP_download" value="Download">
    </div>
    
    </body>
    </html>`)
}

function copyAll(day) {
    day = day.id

    let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

    let breakfast = $(`#${day}_breakfast`).val()
    let snack1 = $(`#${day}_snack1`).val()
    let lunch = $(`#${day}_lunch`).val()
    let snack2 = $(`#${day}_snack2`).val()
    let dinner = $(`#${day}_dinner`).val()

    for (let i = days.indexOf(day); i < $("h1").length; i ++) {
        $(`#${days[i]}_breakfast`).val(breakfast)
        $(`#${days[i]}_snack1`).val(snack1)
        $(`#${days[i]}_lunch`).val(lunch)
        $(`#${days[i]}_snack2`).val(snack2)
        $(`#${days[i]}_dinner`).val(dinner)
    }
}

// Uses a regular expression to check if the email is valid
function email_validation(email) {
    email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (email_regex.test(email)) {
        return true
    } else {
        return false
    }
}

// Loop that creates the input fields
for (i = 0; i < $("div > h1").length; i ++) {
    make_daily_plan_input($("div > h1")[i].id)
}

// Event listener and handler that clears all input entries
$("#MP_clear").click(function(){
    $(`input[type="text"]`).val("")
    $("textarea").val("")
})

// Attempts to call the function that will create the new window.
// if the email validation fails, user will be alerted and nothing
// will be submitted.
$("#submit_button").click(function() {
    if (email_validation($("#usr_email").val())) {
        show_meal_plan()
    }
    else {
        window.alert("Invalid entry. Please enter a valid email")
    }
})


main()