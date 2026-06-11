<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Homepage</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="flex flex-col items-center font-sans text-white min-h-screen"
      style="background: linear-gradient(90deg, rgba(94,163,142,1) 10%, rgba(60,92,69,1) 50%, rgba(94,163,142,1) 90%);">
    <x-nav_links></x-nav_links>
    {{$slot}}
</body>
</html>