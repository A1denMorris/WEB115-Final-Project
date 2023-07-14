
function calendar() {
            
    this.display = (
'<html>
    <head>
        <meta charset="UTF-8">
        <title>Meal Plan Application</title>
        <link rel="stylesheet" type="text/css" href="projectCSS.css">
        <script 
            src="https://code.jquery.com/jquery-3.7.0.min.js" 
            integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" 
            crossorigin="anonymous">
        </script>
        <script 
            src="projectJS.js" defer>
        </script>
        
    </head>
    <body>
        <div id="main_div">
            <form id="info_form">
                <p>Enter Name: <input type="text" id="usr_name"></p>
                <input type="button" value="Test" id="m_button" onclick="testFunction()">
            </form>
            

            <div class="grid-container">
                <div id="sunday" class="day_title">
                    <h1>Sunday</h1>
                </div>
                <div id="monday" class="day_title">
                    <h1>Monday</h1>
                </div>
                <div id="tuesday" class="day_title">
                    <h1>Tuesday</h1>
                </div>
                <div id="wednesday" class="day_title">
                    <h1>Wednesday</h1>
                </div>
                <div id="thursday" class="day_title">
                    <h1>Thursday</h1>
                </div>
                <div id="friday" class="day_title">
                    <h1>Friday</h1>
                </div>
                <div id="saturday">
                    <h1>Saturday</h1>
                </div>
            </div>
     </div>
     </body>
     </html>')

}
    

function testFunction() {
    calen = new calendar()
    popup = window.open()
    popup.document.write(calen.display)
}    

daily_plan()
