<html lang="{{ $page->language ?? 'en' }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="referrer" content="always">
        <title>{{ $page->title }}</title>
        <meta name="description" content="{{ $page->description }}">
        <link rel="canonical" href="{{ $page->getUrl() }}">
        <link rel="stylesheet" href="{{ mix('css/main.css', 'assets/build') }}">
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" defer></script>
    </head>
    <body class="flex items-center justify-center min-h-screen bg-gray-100">
        @if ($page->production)
            <h1 class="text-xl font-sans font-medium">Coming soon.</h1>
        @else
            @yield('body')
        @endif
        <script src="{{ mix('js/main.js', 'assets/build') }}" defer></script>
        <script src="https://cdn.usefathom.com/script.js" site="QUJVNCEM" included-domains="hannahbarrie.ca" defer></script>
    </body>
</html>
