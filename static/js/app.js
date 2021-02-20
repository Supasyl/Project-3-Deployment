

// collect info from input fields and submit prediction into fields
function Prediction() {
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
    var ageSmokeText = d3.select('#AgeSmokeNo');
    var noAlcoholDropdown = d3.select('#NoAlcohol');
    var noAlcoholtext = d3.select('#NoAlcoholNo');

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

	// define age field name and input text and run prediction
	var ageInput = ageDropdown.property("value");
	if (ageInput == '18 years old') {AGE2 = 7}
    else if (ageInput == '19 years old') {AGE2 = 8}
    else if (ageInput == '20 years old') {AGE2 = 9}
    else if (ageInput == '21 years old') {AGE2 = 10}
    else if (ageInput == '22 or 23 years old') {AGE2 = 11}
    else if (ageInput == '24 or 25 years old') {AGE2 = 12}
    else if (ageInput == 'between 26 and 29 years old') {AGE2 = 13}
    else if (ageInput == 'between 30 and 34 years old') {AGE2 = 14}
    else if (ageInput == 'between 35 and 49 years old') {AGE2 = 15}
    else if (ageInput == 'between 50 and 64 years old') {AGE2 = 16}
    else if (ageInput == '65 years or older') {AGE2 = 17};
    
    // define marital field name and input text and run prediction
	var maritInput = maritDropdown.property("value");
	if (maritInput == 'Married') {IRMARIT = 1}
    else if (maritInput == 'Widowed') {IRMARIT = 2}
    else if (maritInput == 'Divorced or Separated') {IRMARIT = 3}
    else if (maritInput == 'Never been married') {IRMARIT = 4};

    // define health field name and input text and run prediction
    var healthInput = healthDropdown.property("value");
	if (healthInput == 'Excellent') {HEALTH = 1}
    else if (healthInput == 'Very good') {HEALTH = 2}
    else if (healthInput == 'Good') {HEALTH = 3}
    else if (healthInput == 'Fair') {HEALTH = 4}
    else if (healthInput == 'Poor') {HEALTH = 5}
    else if (healthInput == "Don't know") {HEALTH = 6};

    // define move field name and input text and run prediction
    var movInput = movDropdown.property("value");
	if (movInput == '0 times') {MOVSINPYR2 = 1}
    else if (movInput == '1 time') {MOVSINPYR2 = 2}
    else if (movInput == '2 times') {MOVSINPYR2 = 3}
    else if (movInput == '3 or more times') {MOVSINPYR2 = 4};

    // define attraction field name and input text and run prediction
    var attrInput = attrDropdown.property("value");
	if (attrInput == 'Only attracted to opposite sex') {SEXATRACT = 1}
    else if (attrInput == 'Mostly attracted to opposite sex') {SEXATRACT = 2}
    else if (attrInput == 'Equally attracted to males and females') {SEXATRACT = 3}
    else if (attrInput == 'Mostly attracted to same sex') {SEXATRACT = 4}
    else if (attrInput == 'Only attracted to same sex') {SEXATRACT = 5}
    else if (attrInput == 'Not sure') {SEXATRACT = 6}
    else if (attrInput == 'Skip') {SEXATRACT = 98};

    // define identity field name and input text and run prediction
    var identInput = identDropdown.property("value");
	if (identInput == 'Heterosexual') {SEXIDENT = 1}
    else if (identInput == 'Lesbian or Gay') {SEXIDENT = 2}
    else if (identInput == 'Bisexual') {SEXIDENT = 3}
    else if (identInput == "Don't know") {SEXIDENT = 94}
    else if (identInput == 'Skip') {SEXIDENT = 98};

    // define difficult field name and input text and run prediction
    var diffThinkInput = diffThinkDropdown.property("value");
	if (diffThinkInput == 'Yes') {DIFFTHINK = 1}
    else if (diffThinkInput == 'No') {DIFFTHINK = 2};

    // define education field name and input text and run prediction
	var eduInput = eduDropdown.property("value");
	if (eduInput == '5th grade or less grade completed') {IREDUHIGHST2 = 1}
    else if (eduInput == '6th grade completed') {IREDUHIGHST2 = 2}
    else if (eduInput == '7th grade completed') {IREDUHIGHST2 = 3}
    else if (eduInput == '8th grade completed') {IREDUHIGHST2 = 4}
    else if (eduInput == '9th grade completed') {IREDUHIGHST2 = 5}
    else if (eduInput == '10th grade completed') {IREDUHIGHST2 = 6}
    else if (eduInput == '11th or 12th grade completed, no diploma') {IREDUHIGHST2 = 7}
    else if (eduInput == 'High school diploma/GED') {IREDUHIGHST2 = 8}
    else if (eduInput == 'Some college credit, but no degree') {IREDUHIGHST2 = 9}
    else if (eduInput == 'Associate degree (for example, AA, AS)') {IREDUHIGHST2 = 10}
    else if (eduInput == 'College graduate or higher') {IREDUHIGHST2 = 11};

    // define work situation field name and input text and run prediction
	var workInput = workDropdown.property("value");
	if (workInput == 'Worked full-time') {WRKSTATWK2 = 1}
    else if (workInput == 'Worked part-time') {WRKSTATWK2 = 2}
    else if (workInput == 'Has job or volunteer worker, did not work') {WRKSTATWK2 = 3}
    else if (workInput == 'Unemployed/on layoff, looking for work') {WRKSTATWK2 = 4}
    else if (workInput == 'Disabled') {WRKSTATWK2 = 5}
    else if (workInput == 'Keeping house full-time') {WRKSTATWK2 = 6}
    else if (workInput == 'In school/ training') {WRKSTATWK2 = 7}
    else if (workInput == 'Retired') {WRKSTATWK2 = 8}
    else if (workInput == 'Does not have a job, some other reason') {WRKSTATWK2 = 9};

    // define employers field name and input text and run prediction
	var emplInput = emplDropdown.property("value");
	if (emplInput == '1 employer') {WRKNUMJOB2 = 1}
    else if (emplInput == '2 employer') {WRKNUMJOB2 = 2}
    else if (emplInput == '3 employer') {WRKNUMJOB2 = 3}
    else if (emplInput == '4 or more employers') {WRKNUMJOB2 = 4};

    // define employed field name and input text and run prediction
	var statInput = statDropdown.property("value");
	if (statInput == 'Employed full-time') {IRWRKSTAT = 1}
    else if (statInput == 'Employed part-time') {IRWRKSTAT = 2}
    else if (statInput == 'Unemployed') {IRWRKSTAT = 3}
    else if (statInput == 'Other (incl. not in labour force)') {IRWRKSTAT = 4};

    // define income field name and input text and run prediction
	var incomeInput = incomeDropdown.property("value");
	if (incomeInput == 'Less than $10,000') {IRPINC3 = 1}
    else if (incomeInput == '$10,000 - $19,999') {IRPINC3 = 2}
    else if (incomeInput == '$20,000 - $29,999') {IRPINC3 = 3}
    else if (incomeInput == '$30,000 - $39,999') {IRPINC3 = 4}
    else if (incomeInput == '$40,000 - $49,999') {IRPINC3 = 5}
    else if (incomeInput == '$50,000 - $74,999') {IRPINC3 = 6}
    else if (incomeInput == '$75,000 or more') {IRPINC3 = 7};

    // define smoked field name and input text and run prediction
    var cigInput = cigDropdown.property("value");
	if (cigInput == 'Yes') {CIG100LF = 1}
    else if (cigInput == 'No') {CIG100LF = 2}
    else if (cigInput == 'I never smoked cigarettes') {CIG100LF = 91};

    // define age smoked field name and input text and run prediction
    var ageSmokeDInput = ageSmokeDropdown.property("value");
    var ageSmokeTInput = ageSmokeText.property("value");
	if (ageSmokeDInput == 'I never smoked cigarettes') {CIGTRY = 991}
    else CIGTRY = ageSmokeTInput;

    // define drinks field name and input text and run prediction
    var noAlcoholDInput = noAlcoholDropdown.property("value");
    var noAlcoholTInput = noAlcoholtext.property("value");
	if (noAlcoholDInput == 'I never drink alcohol') {ALCUS30D = 991}
    else if (noAlcoholDInput == 'I did not drink alcohol in the last 30 days') {ALCUS30D = 991}
    else ALCUS30D = noAlcoholTInput;    

    d3.json('https://jsonplaceholder.typicode.com/posts', {
      method:"POST",
      body: JSON.stringify({
        AGE2: AGE2,
        IRMARIT: IRMARIT,
        HEALTH: HEALTH,
        MOVSINPYR2: MOVSINPYR2,
        SEXATRACT: SEXATRACT,
        SEXIDENT: SEXIDENT,
        DIFFTHINK: DIFFTHINK,
        IREDUHIGHST2: IREDUHIGHST2,
        WRKSTATWK2: WRKSTATWK2,
        WRKNUMJOB2: WRKNUMJOB2,
        IRWRKSTAT: IRWRKSTAT,
        IRPINC3: IRPINC3,
        CIG100LF: CIG100LF,
        CIGTRY: CIGTRY,
        ALCUS30D: ALCUS30D
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(json => {
        if (smoke_result == 0) {var smokeOutput = '1 or 2 days (this is accurate 99% of the time)'}
        else if (smoke_result == 1) {var smokeOutput = '3 to 5 days (this is accurate 99% of the time)'}
        else if (smoke_result == 2) {var smokeOutput = '6 to 9 days (this is accurate 99% of the time)'}
        else if (smoke_result == 3) {var smokeOutput = '10 to 19 days (this is accurate 99% of the time)'}
        else if (smoke_result == 4) {var smokeOutput = '20 to 29 days days (this is accurate 99% of the time)'}
        else if (smoke_result == 5) {var smokeOutput = 'all 30 days (this is accurate 99% of the time)'}
        else if (smoke_result == 6) {var smokeOutput = 'you never smoked cigarettes (this is accurate 99% of the time)'}
        else if (smoke_result == 7) {var smokeOutput = 'you will not smoke any cigarettes in the next 30 days (this is accurate 99% of the time)'};
        smokePredict.property('value' = smokeOutput);


    });
	
};

// when pressing submit button or press enter, use function
let submitButton = d3.select('#button');
let form = d3.select('#searchForm');
form.on('submit', Prediction);

let resetButton = d3.select('#button2');
// form.on('reset', buildTable);