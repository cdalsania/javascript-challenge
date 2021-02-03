// from data.js
var tableData = data;

/***************************************************
SELECT ALL REQUIRED HTML ELEMENTS
****************************************************/

// select the table body
var tableBody = d3.select("tbody");

// Select the dropdown elements
var shapeDropDown = d3.select("#shape-select");
var countryDropDown = d3.select("#country-select");
var stateDropDown = d3.select("#state-select");
var cityDropDown = d3.select("#city-select");

// Select the input elements
var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");
var inputState = d3.select("#state");

// Select the buttons
var button = d3.select("#filter-btn");
var clearButton = d3.select("#clear-filter-btn");

// Select the form
var form = d3.select("form");

/***************************************************
USER DEFINED FUNCTIONS
****************************************************/

// function to load table data
function loadTableData(ufoSightingsArray) {
    tableBody.html("");
    if (ufoSightingsArray.length === 0) {
        var row = tableBody.append("tr");
        var cell = row.append("td");
        cell.attr("colspan", "7");
        cell.text("No UFO Sightings match the provided search criteria!!");
    } else {
        ufoSightingsArray.forEach((ufoSighting) => {
            var row = tableBody.append("tr");
            Object.entries(ufoSighting).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
        })
    }
};

// function to complete the event handler function for the filter button
// filter data based on the search criteria provided by user
function filterData() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Get the value property of the input elements
    var inputDateValue = inputDate.property("value");
    var inputCountryValue = countryDropDown.property("value");
    var inputStateValue = stateDropDown.property("value");
    var inputCityValue = cityDropDown.property("value");
    var inputShapeValue = shapeDropDown.property("value");