
function init() {

    ////////////////////////////////////////////////////////////////
    // Smoking bar chart - age
    var trace1 = {
        x: ['Never_smoked', 'None', '1 or 2 days', '3 to 5 days', '6 to 9 days', '10 to 19 days', '20 to 29 days', 'All 30 day'],
        // y: [3925, 981, 1, 0, 1, 1, 1, 0], //numbers
        y: [80, 20, 0, 0, 0, 0, 0, 0], // %
        name: '18',
        marker: {color: '#ba5536'},
        type: 'bar'
    };

    var trace2 = {
        x: ['Never_smoked', 'None', '1 or 2 days', '3 to 5 days', '6 to 9 days', '10 to 19 days', '20 to 29 days', 'All 30 day'],
        // y: [3443, 1329, 2, 1, 0, 4, 0, 1],
        y: [72, 28, 0, 0, 0, 0, 0, 0],
        name: '19',
        marker: {color: '#b24c30'},
        type: 'bar'
    };

    var trace3 = {
        x: ['Never_smoked', 'None', '1 or 2 days', '3 to 5 days', '6 to 9 days', '10 to 19 days', '20 to 29 days', 'All 30 day'],
        // y: [3370, 1537, 0, 0, 1, 2, 0, 1],
        y: [69, 31, 0, 0, 0, 0, 0, 0],
        name: '20',
        marker: {color: '#a8452b'},
        type: 'bar'
    };

    var trace4 = {
        x: ['Never_smoked', 'None', '1 or 2 days', '3 to 5 days', '6 to 9 days', '10 to 19 days', '20 to 29 days', 'All 30 day'],
        // y: [3095, 1862, 1, 0, 0, 1, 0, 5],
        y: [62, 38, 0, 0, 0, 0, 0, 0],
        name: '21',
        marker: {color: '#9c3f27'},
        type: 'bar'
    };

    var trace5 = {
        x: ['Never_smoked', 'None', '1 or 2 days', '3 to 5 days', '6 to 9 days', '10 to 19 days', '20 to 29 days', 'All 30 day'],
        // y: [6092, 4266, 0, 2, 2, 3, 2, 3],
        y: [59, 41, 0, 0, 0, 0, 0, 0],
        name: '22-23',
        marker: {color: '#913a24'},
        type: 'bar'
    };

    var trace6 = {
        x: ['Never_smoked', 'None', '1 or 2 days', '3 to 5 days', '6 to 9 days', '10 to 19 days', '20 to 29 days', 'All 30 day'],
        // y: [5929, 4990, 0, 0, 2, 1, 0, 5],
        y: [54, 46, 0, 0, 0, 0, 0, 0],
        name: '24-25',
        marker: {color: '#853522'},
        type: 'bar'
    };

    var trace7 = {
        x: ['Never_smoked', 'None', '1 or 2 days', '3 to 5 days', '6 to 9 days', '10 to 19 days', '20 to 29 days', 'All 30 day'],
        // y: [5788, 5794, 1, 0, 0, 2, 0, 4],
        y: [50, 50, 0, 0, 0, 0, 0, 0],
        name: '26-29',
        marker: {color: '#783020'},
        type: 'bar'
    };

    var trace8 = {
        x: ['Never_smoked', 'None', '1 or 2 days', '3 to 5 days', '6 to 9 days', '10 to 19 days', '20 to 29 days', 'All 30 day'],
        // y: [6372, 7770, 1, 4, 0, 0, 0, 3],
        y: [45, 55, 0, 0, 0, 0, 0, 0],
        name: '30-34',
        marker: {color: '#6c2c1e'},
        type: 'bar'
    };

    var trace9 = {
        x: ['Never_smoked', 'None', '1 or 2 days', '3 to 5 days', '6 to 9 days', '10 to 19 days', '20 to 29 days', 'All 30 day'],
        // y: [15081, 20120, 1, 5, 3, 2, 1, 8],
        y: [43, 57, 0, 0, 0, 0, 0, 0],
        name: '35-49',
        marker: {color: '#5f281c'},
        type: 'bar'
    };

    var trace10 = {
        x: ['Never_smoked', 'None', '1 or 2 days', '3 to 5 days', '6 to 9 days', '10 to 19 days', '20 to 29 days', 'All 30 day'],
        // y: [6010, 8224, 0, 1, 1, 0, 0, 1],
        y: [42, 58, 0, 0, 0, 0, 0, 0],
        name: '50-64',
        marker: {color: '#53251b'},
        type: 'bar'
    };

    var trace11 = {
        x: ['Never_smoked', 'None', '1 or 2 days', '3 to 5 days', '6 to 9 days', '10 to 19 days', '20 to 29 days', 'All 30 day'],
        // y: [1769, 2715,0,0,0,0,0,0],
        y: [39, 61, 0, 0, 0, 0, 0, 0],
        name: '65+',
        marker: {color: '#46211a'},
        type: 'bar'
    };

    var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10, trace11];
    var layout = {
        barmode: 'group',
        bargap: 0.15,
        bargroupgap: 0.1,
        title: 'Smoking cigarettes per age group',
        titlefont: {color: '#003b46'},
        xaxis: {
            title: 'Number of days per 30 days (per age group)',
            titlefont: {color: '#003b46'},
            tickfont: {color: '#003b46'},
        },
        yaxis: {
            title: 'Percentage (%)',
            titlefont: {color: '#003b46'},
            tickfont: {color: '#003b46'},
        },
        legend: {
            title: 'Age',
            titlefont: {color: '#003b46'},
            bordercolor: '#003b46',
            tickfont: {color: '#003b46'},
            font: {color: '#003b46'},
        },
        paper_bgcolor: '#C4DFE6',
        plot_bgcolor: '#C4DFE6',
    };

    Plotly.newPlot('smoking_age_plot', data, layout);


    ///////////////////////////////////////////////////////////////////
    // Alcohol bar chart - age
    var trace1_alc = {
        x: ['Never drank alcohol', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
        // y: [1963, 1491, 398, 302, 221, 139, 110, 54, 41, 47, 19, 53, 9, 16, 2, 3, 19, 0, 2, 4, 1, 10, 0, 1, 0, 0, 1, 0, 0, 1, 0, 3],
        y: [40, 30, 8, 6, 5, 3, 2, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        name: '18',
        marker: {color: '#ba5536'},
        type: 'bar'
    };

    var trace2_alc = {
        x: ['Never drank alcohol', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
        // y: [1560, 1418, 394, 373, 276, 178, 149, 82, 63, 56, 22, 79, 2, 31, 6, 11, 34, 5, 1, 9, 0, 20, 0, 2, 0, 0, 2, 0, 0, 0, 0, 7], //numbers
        y: [33, 30, 8, 8, 6, 4, 3, 2, 1, 1, 0, 2, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // % 
        name: '19',
        marker: {color: '#b24c30'},
        type: 'bar'
    };

    var trace3_alc = {
        x: ['Never drank alcohol', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
        // y: [1284, 1546, 413, 430, 320, 193, 188, 100, 63, 80, 17, 97, 7, 34, 10, 10, 59, 4, 1, 4, 2, 31, 0, 2, 1, 0, 7, 0, 1, 1, 2, 4],
        y: [26, 31, 8, 9, 7, 4, 4, 2, 1, 2, 0, 2, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        name: '20',
        marker: {color: '#a8452b'},
        type: 'bar'
    };

    var trace4_alc = {
        x: ['Never drank alcohol', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
        // y: [643, 1002, 431, 540, 464, 329, 335, 179, 128, 124, 46, 233, 20, 73, 19, 20, 151, 18, 15, 22, 4, 92, 4, 4, 3, 5, 32, 4, 2, 7, 3, 12],
        y: [13, 20, 9, 11, 9, 7, 7, 4, 3, 2, 1, 5, 0, 1, 0, 0, 3, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        name: '21',
        marker: {color: '#9c3f27'},
        type: 'bar'
    };

    var trace5_alc = {
        x: ['Never drank alcohol', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
        // y: [1172, 2395, 909, 1078, 903, 671, 627, 331, 258, 324, 116, 437, 38, 197, 39, 44, 298, 33, 29, 49, 12, 199, 13, 21, 16, 15, 63, 8, 7, 11, 2, 55],
        y: [11, 23, 9, 10, 9, 6, 6, 3, 2, 3, 1, 4, 0, 2, 0, 0, 3, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        name: '22-23',
        marker: {color: '#913a24'},
        type: 'bar'
    };

    var trace6_alc = {
        x: ['Never drank alcohol', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
        // y: [1059, 2586, 959, 1155, 881, 751, 654, 363, 252, 298, 112, 532, 39, 194, 47, 45, 330, 46, 30, 61, 10, 261, 8, 18, 14, 23, 102, 10, 14, 26, 4, 43],
        y: [10, 24, 9, 11, 8, 7, 6, 3, 2, 3, 1, 5, 0, 2, 0, 0, 3, 0, 0, 1, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        name: '24-25',
        marker: {color: '#853522'},
        type: 'bar'
    };

    var trace7_alc = {
        x: ['Never drank alcohol', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
        // y: [1115, 2799, 1021, 1220, 933, 711, 652, 347, 259, 319, 101, 523, 34, 232, 48, 56, 323, 49, 25, 69, 16, 358, 17, 21, 18, 20, 122, 20, 20, 40, 16, 85],
        y: [10, 24, 9, 11, 8, 6, 6, 3, 2, 3, 1, 5, 0, 2, 0, 0, 3, 0, 0, 1, 0, 3, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        name: '26-29',
        marker: {color: '#783020'},
        type: 'bar'
    };

    var trace8_alc = {
        x: ['Never drank alcohol', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
        // y: [1321, 3563, 1220, 1494, 1009, 866, 790, 378, 270, 409, 121, 629, 45, 295, 50, 88, 399, 64, 40, 66, 18, 426, 19, 41, 19, 37, 203, 27, 37, 64, 22, 120],
        y: [9, 25, 9, 11, 7, 6, 6, 3, 2, 3, 1, 4, 0, 2, 0, 1, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        name: '30-34',
        marker: {color: '#6c2c1e'},
        type: 'bar'
    };

    var trace9_alc = {
        x: ['Never drank alcohol', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
        // y: [3592, 9383, 3008, 3462, 2346, 2211, 1801, 887, 562, 953, 270, 1384, 80, 698, 107, 167, 993, 173, 70, 181, 47, 1119, 63, 99, 45, 96, 572, 89, 92, 180, 66, 425],
        y: [10, 27, 9, 10, 7, 6, 5, 3, 2, 3, 1, 4, 0, 2, 0, 0, 3, 0, 0, 1, 0, 3, 0, 0, 0, 0, 2, 0, 0, 1, 0, 1],
        name: '35-49',
        marker: {color: '#5f281c'},
        type: 'bar'
    };

    var trace10_alc = {
        x: ['Never drank alcohol', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
        // y: [1501, 4304, 1079, 1119, 809, 798, 628, 345, 228, 381, 108, 516, 28, 284, 38, 57, 345, 82, 21, 53, 12, 492, 27, 44, 13, 50, 304, 45, 54, 100, 45, 327],
        y: [11, 30, 8, 8, 6, 6, 4, 2, 2, 3, 1, 4, 0, 2, 0, 0, 2, 1, 0, 0, 0, 3, 0, 0, 0, 0, 2, 0, 0, 1, 0, 2],
        name: '50-64',
        marker: {color: '#53251b'},
        type: 'bar'
    };

    var trace11_alc = {
        x: ['Never drank alcohol', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
        // y: [594, 1526, 302, 287, 217, 205, 153, 84, 49, 70, 20, 110, 4, 66, 6, 25, 84, 27, 7, 10, 4, 157, 8, 20, 4, 16, 118, 24, 11, 52, 18, 206],
        y: [13, 34, 7, 6, 5, 5, 3, 2, 1, 2, 0, 2, 0, 1, 0, 1, 2, 1, 0, 0, 0, 4, 0, 0, 0, 0, 3, 1, 0, 1, 0, 5],
        name: '65+',
        marker: {color: '#46211a'},
        type: 'bar'
    };

    var data = [trace1_alc, trace2_alc, trace3_alc, trace4_alc, trace5_alc, trace6_alc, trace7_alc, trace8_alc, trace9_alc, trace10_alc, trace11_alc];
    var layout = {
        barmode: 'stack',
        bargap: 0.15,
        title: 'Alcoholic drinks (one or more) per age group',
        titlefont: {color: '#003b46'},
        xaxis: {
            title: 'Number of days in the past 30 days<br>(in % per age group)',
            titlefont: {color: '#003b46'},
            tickfont: {color: '#003b46'},
            tickmode: 'array',
            // tickvals: [1, 2, 5, 10, 15, 20, 25, 30],
            ticktext: ['Never', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']
        },
        yaxis: {
            title: 'Percentage (stacked)',
            titlefont: {color: '#003b46'},
            tickfont: {color: '#003b46'},
        },
        legend: {
            title: 'Age',
            titlefont: {color: '#003b46'},
            bordercolor: '#003b46',
            tickfont: {color: '#003b46'},
            font: {color: '#003b46'},
        },
        paper_bgcolor: '#C4DFE6',
        plot_bgcolor: '#C4DFE6',
    };

    Plotly.newPlot('alcohol_age_plot', data, layout);


    ///////////////////////////////////////////////////////////////////
    // Mental health bar chart - age
    var trace1_mh = {
        x: ['not probable', 'probable'],
        // y: [820, 4090], // numbers
        y: [17, 83], // %
        name: '18',
        marker: {color: '#ba5536'},
        type: 'bar'
    };

    var trace2_mh = {
        x: ['not probable', 'probable'],
        // y: [822, 3958],
        y: [17, 83],
        name: '19',
        marker: {color: '#b24c30'},
        type: 'bar'
    };

    var trace3_mh = {
        x: ['not probable', 'probable'],
        // y: [818, 4093],
        y: [17, 83],
        name: '20',
        marker: {color: '#a8452b'},
        type: 'bar'
    };

    var trace4_mh = {
        x: ['not probable', 'probable'],
        // y: [757, 4207],
        y: [15, 85],
        name: '21',
        marker: {color: '#9c3f27'},
        type: 'bar'
    };

    var trace5_mh = {
        x: ['not probable', 'probable'],
        // y: [1407, 8963],
        y: [14, 86],
        name: '22-23',
        marker: {color: '#913a24'},
        type: 'bar'
    };

    var trace6_mh = {
        x: ['not probable', 'probable'],
        // y: [1290, 9637],
        y: [12, 88],
        name: '24-25',
        marker: {color: '#853522'},
        type: 'bar'
    };

    var trace7_mh = {
        x: ['not probable', 'probable'],
        // y: [1029, 10560],
        y: [9, 91],
        name: '26-29',
        marker: {color: '#783020'},
        type: 'bar'
    };

    var trace8_mh = {
        x: ['not probable', 'probable'],
        // y: [943, 13207],
        y: [7, 93],
        name: '30-34',
        marker: {color: '#6c2c1e'},
        type: 'bar'
    };

    var trace9_mh = {
        x: ['not probable', 'probable'],
        // y: [1669, 33552],
        y: [5, 95],
        name: '35-49',
        marker: {color: '#5f281c'},
        type: 'bar'
    };

    var trace10_mh = {
        x: ['not probable', 'probable'],
        // y: [396, 13841],
        y: [3, 97],
        name: '50-64',
        marker: {color: '#53251b'},
        type: 'bar'
    };

    var trace11_mh = {
        x: ['not probable', 'probable'],
        // y: [70, 4414],
        y: [2, 98],
        name: '65+',
        marker: {color: '#46211a'},
        type: 'bar'
    };

    var data = [trace1_mh, trace2_mh, trace3_mh, trace4_mh, trace5_mh, trace6_mh, trace7_mh, trace8_mh, trace9_mh, trace10_mh, trace11_mh];
    var layout = {
        barmode: 'group',
        bargap: 0.15,
        bargroupgap: 0.1,
        title: 'Mental health per age group',
        titlefont: {color: '#003b46'},
        xaxis: {
            title: 'The probability of having a serious mental illness<br>(in % per age group)',
            titlefont: {color: '#003b46'},
            tickfont: {color: '#003b46'},
        },
        yaxis: {
            title: 'Percentage (%)',
            titlefont: {color: '#003b46'},
            tickfont: {color: '#003b46'},
        },
        legend: {
            title: 'Age',
            titlefont: {color: '#003b46'},
            bordercolor: '#003b46',
            tickfont: {color: '#003b46'},
            font: {color: '#003b46'},
        },
        paper_bgcolor: '#C4DFE6',
        plot_bgcolor: '#C4DFE6',
    };

    Plotly.newPlot('mh_age_plot', data, layout);


    ///////////////////////////////////////////////////////////////////
    // Drug use bar chart - age
    var trace1_drugs = {
        x: [48, 11, 2, 1, 3, 62, 20, 14, 11, 85, 91], // %
        // x: [58360, 13506, 2041, 1018, 4087, 74530, 23698, 16404, 13552, 102709, 109720], // numbers
        y: ['MARIJUANA', 'COCAINE', 'CRACK', 'HEROINE', 'METH', 'PAIN_RELIEVER', 'TRANQUILISER', 'STIMULANTS', 'SEDATIVES', 'HALLUCIOGENS', 'INHALENTS'],
        name: 'used',
        marker: {color: '#783020'},
        // text: [13, 3, 0, 0, 0, 17, 5, 3, 3, 24, 26],
        type: 'bar',
        orientation: 'h',
    };

    var trace2_drugs = {
        x: [52, 89, 98, 99, 97, 38, 80, 86, 89, 15, 9], // %
        // x: [62183, 107037, 118502, 119525, 116456, 46013, 96845, 104139, 106991, 17834, 10823], // numbers
        y: ['MARIJUANA', 'COCAINE', 'CRACK', 'HEROINE', 'METH', 'PAIN_RELIEVER', 'TRANQUILISER', 'STIMULANTS', 'SEDATIVES', 'HALLUCIOGENS', 'INHALENTS'],
        name: 'not used',
        marker: {color: '#ba5536'},
        // text: [6, 11, 13, 13, 12, 5, 10, 11, 11, 1, 1],
        type: 'bar',
        orientation: 'h',
    };

    var data = [trace1_drugs, trace2_drugs];
    var layout = {
        barmode: 'stack',
        bargap: 0.15,
        title: 'Use of the substance in their lifetime',
        titlefont: {color: '#003b46'},
        xaxis: {
            title: 'substance has or has not been used in the past (%)',
            titlefont: {color: '#003b46'},
            tickfont: {color: '#003b46'},
        },
        yaxis: {
            // title: 'Substance',
            titlefont: {color: '#003b46'},
            tickfont: {color: '#003b46'},
        },
        legend: {
            title: '',
            titlefont: {color: '#003b46'},
            bordercolor: '#003b46',
            tickfont: {color: '#003b46'},
            font: {color: '#003b46'},
        },
        paper_bgcolor: '#C4DFE6',
        plot_bgcolor: '#C4DFE6',
        margin: {l: 110},
    };

    Plotly.newPlot('drug_use_plot', data, layout);


};

init();