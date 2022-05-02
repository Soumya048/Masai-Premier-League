// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit", scheduleSubmit);
var scheduleArr = JSON.parse(localStorage.getItem("schedule")) || [];

function scheduleSubmit() {
    event.preventDefault();
    
    var scheduleObj = {
        matchNumber: masaiForm.matchNum.value,
        TeamA: masaiForm.teamA.value,
        TeamB: masaiForm.teamB.value,
        Date: masaiForm.date.value,
        Venue: masaiForm.venue.value,
    }
    scheduleArr.push(scheduleObj);
    localStorage.setItem("schedule", JSON.stringify(scheduleArr));
}