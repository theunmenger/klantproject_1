const base_link = "https://opendata.cbs.nl/ODataApi/odata/";


search("83599NED", //database voor open vacatures per kwartaal
    item => item.OpenstaandeVacatures_1 * 1000, //alle nummmers
    item => item.Perioden.replace("KW", " Kwartaal "), //perioden data
    "OpenVacaturesPerKwartaal" //chart id
);

search("83582NED", // database voor werknemers in december
    item => item.BanenVanWerknemersInDecember_1 * 1000,
    item => item.Perioden.replace("JJ00", ""),
    "BanenVanWerknemersInDecember"
);
 

//get data from cbs
function search(database, data_map, perioden_map, location) {
    fetch(base_link + database + "/TypedDataSet?$filter=RegioS eq 'PV24  ' and BedrijfstakkenBranchesSBI2008 eq '391600 '")
    .then (res => {
        return res.json();
    })
    .then (data => {
        //store data into const's
        const data_numbers_const = data.value.map(data_map);
        const perioden_const = data.value.map(perioden_map);
        
        //create graph with function
        graph(perioden_const, data_numbers_const, location);
    })
}

//function for chart.js graph
function graph(perioden, data_numbers, location) {
    const line_colour = "rgb(207, 255, 226)";
    const grid_colour = "rgba(255, 255, 255, 0.53)";
    const font_colour = "rgb(255, 255, 255)";

    new Chart(location, {
        type: "line", 
        data: {
            labels: perioden,
            datasets: [{
                fill: false,
                lineTension: 0,
                backgroundColor: line_colour,
                borderColor: line_colour,
                data: data_numbers
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: { display: false },
            scales: {
                xAxes: [{
                    gridLines: {
                        color: grid_colour,
                    },
                    ticks: {
                        fontColor: font_colour
                    }
                }],
                yAxes: [{
                    gridLines: {
                        color: grid_colour,
                    },
                    ticks: {
                        fontColor: font_colour
                    },
                    scaleLabel: {
                        display: true, 
                        labelString: "Aantal open ICT vacatures",
                        fontColor: font_colour,
                    }
                }]
            }
        }
    }); 
}