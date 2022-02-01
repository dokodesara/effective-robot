//display current time
function showTime() {
    dateEl.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#time").textContent(TimeEl);
    console.log(TimeEl);
}
setInterval(showTime, 1000);localStorage