<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="referrer" content="always">
        <title>{{ $site->title }} | {{ $page->title }}</title>
        <meta name="description" content="{{ $page->description }}">
        <link rel="canonical" href="{{ $page->getUrl() }}">
        <link rel="stylesheet" href="https://use.typekit.net/inu3qcv.css">
        <link rel="stylesheet" href="{{ mix('css/main.css', 'assets/build') }}">
        <script defer src="{{ mix('js/main.js', 'assets/build') }}"></script>
        <script defer src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <script defer src="https://exciting-instinctive.hannahbarrie.ca/script.js" data-site="QUJVNCEM"></script>
    </head>
    <body class="flex flex-col items-center min-h-screen font-sans xs:text-lg bg-cream">
        <div class="w-full max-w-3xl px-6 sm:px-20">
            <x-menu :page="$page" :pages="$pages" />

            <main class="space-y-4 sm:space-y-6 pb-8 sm:pb-16 mx-auto">
                <section class="prose space-y-4 sm:space-y-6 font-light">
                    @yield('content')
                </section>
            </main>
        </div>
    </body>
</html>
