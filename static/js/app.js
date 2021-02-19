




// select the input field for the predictions
var smokePredict = d3.select('#Smoke');
var alcoholPredict = d3.select('#Alcohol');
var mentalPredict = d3.select('#Mental');
var marijuanaPredict = d3.select('#Marijuana');
var cocainePredict = d3.select('#Cocaine');
var crackPredict = d3.select('#Crack');
var heroinPredict = d3.select('#Heroin');
var methPredict = d3.select('#Meth');
var painPredict = d3.select('#Pain');
var tranPredict = d3.select('#Tran');
var stimulantsPredict = d3.select('#Stimulants');
var sedativesPredict = d3.select('#Sedatives');
var halPredict = d3.select('#Hal');
var inhalantsPredict = d3.select('#Inhalants');


// collect info from input fields and submit prediction into fields
function Action() {
	// prevent enter from refreshing the page
	d3.event.preventDefault();

    // variables for the input fields
    var ageDropdown = d3.select('#Age');
    var maritDropdown = d3.select('#Marit');
    var healthDropdown = d3.select('#Health');
    var movDropdown = d3.select('#Mov');
    var attrDropdown = d3.select('#Attr');
    var identDropdown = d3.select('#Ident');
    var diffThinkDropdown = d3.select('#DiffThink');
    var eduDropdown = d3.select('#Edu');
    var workDropdown = d3.select('#Work');
    var emplDropdown = d3.select('#Empl');
    var statDropdown = d3.select('#Stat');
    var incomeDropdown = d3.select('#Income');
    var cigDropdown = d3.select('#Cig');
    var ageSmokeDropdown = d3.select('#AgeSmoke');
    var noAlcoholDropdown = d3.select('#NoAlcohol');

	// define date field name and input text and filter search
	let ageInput = ageDropdown.property("value");
	
    
    
    if (dateInput != '') {updatedSightings = updatedSightings.filter(sighting => sighting.datetime === dateInput)};
	// define city dropdown field name and input and filter date search
	let cityField = d3.select('#City');
	let cityInput = cityField.property('value');
	if (cityInput != '') {updatedSightings = updatedSightings.filter(sighting => sighting.city === cityInput)};
	// define state dropdown field name and input and filter date and city search
	let stateField = d3.select('#State');
	let stateInput = stateField.property('value');
	if (stateInput != '') {updatedSightings = updatedSightings.filter(sighting => sighting.state === stateInput)};
	// define country dropdown field name and input and filter date, city and state search
	let countryField = d3.select('#Country');
	let countryInput = countryField.property('value');
	if (countryInput != '') {updatedSightings = updatedSightings.filter(sighting => sighting.country === countryInput)};
	// define shape dropdown field name and input and filter date, city, state and shape search
	let shapeField = d3.select('#Shape');
	let shapeInput = shapeField.property('value');
	if (shapeInput != '') {updatedSightings = updatedSightings.filter(sighting => sighting.shape === shapeInput)};
	
};

// when pressing submit button or press enter, use function
let submitButton = d3.select('#button');
let form = d3.select('#searchForm');
form.on('submit', Action);

let resetButton = d3.select('#button2');
form.on('reset', buildTable);