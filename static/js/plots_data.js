
function init() {

    var colorscale = ['#ba5536', '#b24c30', '#a8452b', '#9c3f27', '#913a24', '#853522', '#783020', '#6c2c1e', '#5f281c', '#53251b', '#46211a'];
    
    /////////////////////////////////////////////////////////////
    // Age
    var pie1 = {
        values: [4910, 4780, 4911, 4964, 10370, 10927, 11589, 14150, 35221, 14237, 4484],
        labels: ['18', '19', '20', '21', '22-23', '24-25', '26-29', '30-34', '35-49', '50-64', '65+'],
        type: 'pie',
        name: 'AGE',
        marker: {colors: colorscale}
    };

    var layout_pie1 = {
        title: 'Age',
        titlefont: {color: '#003b46'},
        height: 300,
        width: 400,
        legend: {
            title: '',
            titlefont: {color: '#003b46'},
            bordercolor: '#003b46',
            tickfont: {color: '#003b46'},
            font: {color: '#003b46'},
        paper_bgcolor: '#C4DFE6',
        plot_bgcolor: '#C4DFE6',
        },
    };

    Plotly.newPlot('pie_age', [pie1], layout_pie1);

    
    /////////////////////////////////////////////////////////////
    // Marital status
    var pie2 = {
        values: [54222, 1649, 10591, 10591],
        labels: ['Married', 'Widowed', 'Divorced_Separated', 'Never_married'],
        type: 'pie',
        name: 'MARITAL_STATUS',
        marker: {colors: ['#ba5536', '#9c3f27', '#783020', '#53251b']},
    };

    
    var layout_pie2 = {
        title: 'Marital status',
        titlefont: {color: '#003b46'},
        height: 300,
        width: 400,
        legend: {
            title: '',
            titlefont: {color: '#003b46'},
            bordercolor: '#003b46',
            tickfont: {color: '#003b46'},
            font: {color: '#003b46'},
        paper_bgcolor: '#C4DFE6',
        plot_bgcolor: '#C4DFE6',
        },
    };

    Plotly.newPlot('pie_mar', [pie2], layout_pie2);

    /////////////////////////////////////////////////////////////
    // HEALTH
    var pie3 = {
        values: [33220, 50179, 29720, 6809, 605, 10],
        labels: ['Excellent', 'Very good', 'Good', 'Fair', 'Poor', "Don't know"],
        type: 'pie',
        name: 'HEALTH',
        marker: {colors: ['#ba5536', '#a8452b', '#913a24', '#783020', '#5f281c', '#46211a']},
    };

    
    var layout_pie3 = {
        title: 'Overall Health',
        titlefont: {color: '#003b46'},
        height: 300,
        width: 400,
        legend: {
            title: '',
            titlefont: {color: '#003b46'},
            bordercolor: '#003b46',
            tickfont: {color: '#003b46'},
            font: {color: '#003b46'},
        paper_bgcolor: '#C4DFE6',
        plot_bgcolor: '#C4DFE6',
        },
    };

    Plotly.newPlot('pie_health', [pie3], layout_pie3);

    /////////////////////////////////////////////////////////////
    // MOVED_HOUSE
    var pie4 = {
        values: [85568, 24425, 7045, 3505],
        labels: ['0 times', '1 time', '2 times', '3 or more times'],
        type: 'pie',
        name: 'MOVED_HOUSE',
        marker: {colors: ['#ba5536', '#9c3f27', '#783020', '#53251b']},
    };

    
    var layout_pie4 = {
        title: 'Times moved<br>in the past 12 months',
        titlefont: {color: '#003b46'},
        height: 300,
        width: 400,
        legend: {
            title: '',
            titlefont: {color: '#003b46'},
            bordercolor: '#003b46',
            tickfont: {color: '#003b46'},
            font: {color: '#003b46'},
        paper_bgcolor: '#C4DFE6',
        plot_bgcolor: '#C4DFE6',
        },
    };

    Plotly.newPlot('pie_move', [pie4], layout_pie4);

    /////////////////////////////////////////////////////////////
    // SEXUAL_ATTRACTION
    var pie5 = {
        values: [103753, 8327, 3354, 1149, 2082, 1368, 510],
        labels: ['Only to opposite sex', 'Mostly to opposite sex', 'Equally to males and females', 'Mostly to same sex', 'Only to same sex', 'Not sure', 'Skip'],
        type: 'pie',
        name: 'SEXUAL_ATTRACTION',
        marker: {colors: ['#ba5536', '#a8452b', '#913a24', '#853522', '#783020', '#5f281c', '#46211a']},
    };
    
    var layout_pie5 = {
        title: 'Sexual attraction',
        titlefont: {color: '#003b46'},
        height: 300,
        width: 400,
        legend: {
            title: '',
            titlefont: {color: '#003b46'},
            bordercolor: '#003b46',
            tickfont: {color: '#003b46'},
            font: {color: '#003b46'},
        paper_bgcolor: '#C4DFE6',
        plot_bgcolor: '#C4DFE6',
        },
    };

    Plotly.newPlot('pie_attr', [pie5], layout_pie5);

    /////////////////////////////////////////////////////////////
    // SEXUAL_IDENTITY
    var pie6 = {
        values: [111987, 2460, 5089, 318, 689],
        labels: ['Heterosexual', 'Lesbian or Gay', 'Bisexual', "Don't know", 'Skip'],
        type: 'pie',
        name: 'SEXUAL_IDENTITY',
        marker: {colors: ['#ba5536', '#a8452b', '#913a24', '#853522', '#783020', '#5f281c', '#46211a']},
    };
    
    var layout_pie6 = {
        title: 'Sexual identity',
        titlefont: {color: '#003b46'},
        height: 300,
        width: 400,
        legend: {
            title: '',
            titlefont: {color: '#003b46'},
            bordercolor: '#003b46',
            tickfont: {color: '#003b46'},
            font: {color: '#003b46'},
        paper_bgcolor: '#C4DFE6',
        plot_bgcolor: '#C4DFE6',
        color: '#C4DFE6',
        },
    };

    Plotly.newPlot('pie_ident', [pie6], layout_pie6);    


    /////////////////////////////////////////////////////////////
    // DIFFICULTY
    var pie7 = {
        values: [7350, 113193],
        labels: ['Yes', 'No'],
        type: 'pie',
        name: 'DIFFICULTY',
        marker: {colors: ['#ba5536','#783020']},
    };
    
    var layout_pie7 = {
        title: 'Serious difficulty concentrating,<br>remebering, making decisions',
        titlefont: {color: '#003b46'},
        height: 300,
        width: 400,
        legend: {
            title: '',
            titlefont: {color: '#003b46'},
            bordercolor: '#003b46',
            tickfont: {color: '#003b46'},
            font: {color: '#003b46'},
        paper_bgcolor: '#C4DFE6',
        plot_bgcolor: '#C4DFE6',
        color: '#C4DFE6',
        },
    };

    Plotly.newPlot('pie_diff', [pie7], layout_pie7);   


    /////////////////////////////////////////////////////////////
    // EDUCATION
    var pie8 = {
        values: [732, 718, 219, 590, 1075, 1142, 5216, 26009, 29856, 12485, 42501],
        labels: ['5th grade or less completed', '6th grade completed', '7th grade completed', '8th grade completed', '9th grade completed', '10th grade completed', '11th, 12th grade completed, no diploma', 'High school diploma/GED', 'College credit, but no degree', 'Associate degree', 'College graduate or higher'],
        type: 'pie',
        name: 'EDUCATION',
        marker: {colors: ['#ba5536', '#b24c30', '#a8452b', '#9c3f27', '#913a24', '#853522', '#783020', '#6c2c1e', '#5f281c', '#53251b', '#46211a']},
    };
    
    var layout_pie8 = {
        title: 'Highest Education',
        titlefont: {color: '#003b46'},
        height: 300,
        width: 600,
        legend: {
            title: '',
            titlefont: {color: '#003b46'},
            bordercolor: '#003b46',
            tickfont: {color: '#003b46'},
            font: {color: '#003b46'},
        paper_bgcolor: '#C4DFE6',
        plot_bgcolor: '#C4DFE6',
        color: '#C4DFE6',
        },
    };

    Plotly.newPlot('pie_edu', [pie8], layout_pie8);   


    /////////////////////////////////////////////////////////////
    // WORK_SITUATION
    var pie9 = {
        values: [76362, 21629, 8400, 4164, 386, 1527, 3037, 1067, 3971],
        labels: ['Full-time', 'Part-time', 'Has job or volunteer worker, did not work', 'Unemployed/on layoff, looking for work', 'Disabled', 'Keeping house full-time', 'In school/ training', 'Retired', 'Does not have job, other reason'],
        type: 'pie',
        name: 'WORK_SITUATION',
        marker: {colors: ['#ba5536', '#b24c30', '#a8452b', '#9c3f27', '#913a24', '#853522', '#783020', '#5f281c', '#46211a']},
    };
    
    var layout_pie9 = {
        title: 'Work situation past week',
        titlefont: {color: '#003b46'},
        height: 300,
        width: 600,
        legend: {
            title: '',
            titlefont: {color: '#003b46'},
            bordercolor: '#003b46',
            tickfont: {color: '#003b46'},
            font: {color: '#003b46'},
        paper_bgcolor: '#C4DFE6',
        plot_bgcolor: '#C4DFE6',
        color: '#C4DFE6',
        },
    };

    Plotly.newPlot('pie_work', [pie9], layout_pie9);   


    /////////////////////////////////////////////////////////////
    // NUMBER_JOBS
    var pie10 = {
        values: [84064, 26317, 6749, 3413],
        labels: ['1 employer', '2 employers', '3 employers', '4 or more employers'],
        type: 'pie',
        name: 'NUMBER_JOBS',
        marker: {colors: ['#ba5536', '#9c3f27', '#783020', '#53251b']},
    };
    
    var layout_pie10 = {
        title: 'How many employers<br>in the past 12 months',
        titlefont: {color: '#003b46'},
        height: 300,
        width: 400,
        legend: {
            title: '',
            titlefont: {color: '#003b46'},
            bordercolor: '#003b46',
            tickfont: {color: '#003b46'},
            font: {color: '#003b46'},
        paper_bgcolor: '#C4DFE6',
        plot_bgcolor: '#C4DFE6',
        color: '#C4DFE6',
        },
    };

    Plotly.newPlot('pie_empl', [pie10], layout_pie10);   


    /////////////////////////////////////////////////////////////
    // EMPLOYMENT_STATUS
    var pie11 = {
        values: [81176, 25044, 4691, 9632],
        labels: ['Employed full-time', 'Employed part-time', 'Unemployed', 'Other (incl. not in labour force)'],
        type: 'pie',
        name: 'EMPLOYMENT_STATUS',
        marker: {colors: ['#ba5536', '#9c3f27', '#783020', '#53251b']},
    };
    
    var layout_pie11 = {
        title: 'Employment status',
        titlefont: {color: '#003b46'},
        height: 300,
        width: 400,
        legend: {
            title: '',
            titlefont: {color: '#003b46'},
            bordercolor: '#003b46',
            tickfont: {color: '#003b46'},
            font: {color: '#003b46'},
        paper_bgcolor: '#C4DFE6',
        plot_bgcolor: '#C4DFE6',
        color: '#C4DFE6',
        },
    };

    Plotly.newPlot('pie_stat', [pie11], layout_pie11);   


     /////////////////////////////////////////////////////////////
    // INCOME
    var pie12 = {
        values: [25826, 19997, 15661, 13667, 11403, 16295, 17694],
        labels: ['Less than $10,000', '$10,000 - $19,999', '$20,000 - $29,999', '$30,000 - $39,999', '$40,000 - $49,999', '$50,000 - $74,999', '$75,000 or more'],
        type: 'pie',
        name: 'INCOME',
        marker: {colors: ['#ba5536', '#a8452b', '#913a24', '#853522', '#783020', '#5f281c', '#46211a']},
    };
    
    var layout_pie12 = {
        title: 'Income',
        titlefont: {color: '#003b46'},
        height: 300,
        width: 400,
        legend: {
            title: '',
            titlefont: {color: '#003b46'},
            bordercolor: '#003b46',
            tickfont: {color: '#003b46'},
            font: {color: '#003b46'},
        paper_bgcolor: '#C4DFE6',
        plot_bgcolor: '#C4DFE6',
        color: '#C4DFE6',
        },
    };

    Plotly.newPlot('pie_income', [pie12], layout_pie12);   


     /////////////////////////////////////////////////////////////
    // SMOKED_100_CIG
    var pie13 = {
        values: [22951, 36718, 60874],
        labels: ['Yes', 'No', 'Never smoked cigarettes'],
        type: 'pie',
        name: 'SMOKED_100_CIG',
        marker: {colors: ['#ba5536', '#853522', '#53251b']},
    };
    
    var layout_pie13 = {
        title: 'Ever smoked 100 cigarettes',
        titlefont: {color: '#003b46'},
        height: 300,
        width: 400,
        legend: {
            title: '',
            titlefont: {color: '#003b46'},
            bordercolor: '#003b46',
            tickfont: {color: '#003b46'},
            font: {color: '#003b46'},
        paper_bgcolor: '#C4DFE6',
        plot_bgcolor: '#C4DFE6',
        color: '#C4DFE6',
        },
    };

    Plotly.newPlot('pie_income', [pie13], layout_pie13);   

    // var colorscale = ['#ba5536', '#b24c30', '#a8452b', '#9c3f27', '#913a24', '#853522', '#783020', '#6c2c1e', '#5f281c', '#53251b', '#46211a'];
};

init();