<html lang="{{ $page->language ?? 'en' }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="referrer" content="always">
        <title>{{ $page->title }}</title>
        <meta name="description" content="{{ $page->description }}">
        <link rel="canonical" href="{{ $page->getUrl() }}">
        <link rel="stylesheet" href="{{ mix('css/main.css', 'assets/build') }}">
    </head>
    <body>
        @yield('body')
        <script src="{{ mix('js/main.js', 'assets/build') }}" defer></script>
    </body>
</html>
