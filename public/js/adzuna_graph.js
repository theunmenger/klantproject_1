fetch("https://api.adzuna.com/v1/api/jobs/nl/search/1?app_id=04586d15&app_key=c55e7c93be7fba13411bc27f9535c5d5&where=Flevoland&what=ICT")
.then( res => {
    return res.json();
})
.then(data => {
    const languages = [
    "JavaScript", "TypeScript", "HTML", "CSS", "PHP", "Python", "Java", "C#", "C++", "C", "Go", "Rust", "Ruby", "Scala", "Kotlin", "Swift", "Dart", "R", "MATLAB", "Julia", "SQL", "GraphQL", "Bash", "PowerShell", "Perl", "Lua", "Haskell", "Elixir", "Clojure", "COBOL", "Fortran", "Assembly"
    ];

    const counts = {};
    
    //search description for languages mentioned in languages const and count them
    data.results.forEach(listing => {
        const match = languages.filter(lang => listing.description.toLowerCase().includes(lang.toLowerCase()));
        match.forEach(lang => {
            counts[lang] = (counts[lang] || 0) + 1;
        });
    });

    const labels = Object.keys(counts);
    const values = Object.values(counts);

    adzuna_graph(labels, values);
})



function adzuna_graph(labels, values) {
    const line_colour = "rgb(207, 255, 226)";
    const grid_colour = "rgba(255, 255, 255, 0.53)";
    const font_colour = "rgb(255, 255, 255)";

    //ai magic om de kleuren mooi te maken
    const backgroundColors = labels.map((_, i) =>
        `hsla(${(i * 47) % 360}, 70%, 80%, 0.8)`
    );

    new Chart("adzuna_pie_chart", {
        type: "pie",
        data: {
            labels: labels,
            datasets: [{
                data: values,
                backgroundColor: backgroundColors,
                borderColor: grid_colour,
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    position: "right",
                    labels: {
                        color: font_colour
                    }
                },
                title: {
                    display: true,
                    text: "Programeer talen van ICT vacatures in Flevoland",
                    color: font_colour
                }
            }
        }
    });
}