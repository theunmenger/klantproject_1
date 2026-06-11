<x-layout>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>

    <div class="grid grid-cols-2 gap-10 bg-[rgb(162,213,198)] w-3/5 min-h-screen h-full p-[50px] max-[1800px]:grid-cols-1 max-[1800px]:justify-items-center">

        <div class="self-start text-center bg-[rgb(0,182,167)] rounded-[10px] p-5 pb-8 max-[1800px]:w-[500px]">
            <h2 class="text-lg font-semibold">Aantal werknemers ICT in Flevoland</h2>
            <p class="text-[15px]">Bron: CBS</p>
            <div class="relative h-[250px] w-full">
                <canvas id="BanenVanWerknemersInDecember"></canvas>
            </div>
        </div>

        <div class="self-start text-center bg-[rgb(0,182,167)] rounded-[10px] p-5 pb-8 max-[1800px]:w-[500px]">
            <h2 class="text-lg font-semibold">Aantal open ICT vacatures in Flevoland</h2>
            <p class="text-[15px]">Bron: CBS</p>
            <div class="relative h-[250px] w-full">
                <canvas class="h-full w-full" id="OpenVacaturesPerKwartaal"></canvas>
            </div>
        </div>

        <div class="self-start text-center bg-[rgb(0,182,167)] rounded-[10px] p-5 pb-8 max-[1800px]:w-[500px]">
            <h2 class="text-lg font-semibold">Programeer talen van ICT vacatures in Flevoland</h2>
            <p class="text-[15px]">Bron: Adzuna</p>
            <div class="relative h-[250px] w-full">
                <canvas class="h-full w-full" id="adzuna_pie_chart"></canvas>
            </div>
        </div>

    </div>

    <script src="js/odata_graph.js"></script>
    <script src="js/duo_graph.js"></script>
    <script src="js/adzuna_graph.js"></script>
</x-layout>