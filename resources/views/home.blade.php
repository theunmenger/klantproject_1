<x-layout>
    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js">
    </script>
    <div id="main_container">
        <div class="graph_container">
            <h2 class="graph_title">Aantal werknemers ICT in Flevoland</h2>
            <p class="bron">Bron: CBS</p>
            <div id="graph_retainer">
                <canvas class="graph_styling" id="BanenVanWerknemersInDecember"></canvas>
            </div>
        </div>
        <div class="graph_container">
            <h2 class="graph_title">Aantal open ICT vacatures in Flevoland</h2>
            <p class="bron">Bron: CBS</p>
            <div id="graph_retainer">
                <canvas class="graph_styling" id="OpenVacaturesPerKwartaal"></canvas>                
            </div>
        </div>     
    </div>
    <script src="js/odata_graph.js"></script>
</x-layout>