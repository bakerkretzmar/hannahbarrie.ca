<nav x-data="{ show: true }" class="flex flex-col sm:hidden py-8" x-bind:class="show ? 'pb-4' : ''">
    <div class="flex items-center justify-between">
        <h1 class="text-2xl xs:text-4xl font-medium">{{ $page->site_title }}</h1>
        <button x-on:click="show = !show" type="button">
            <svg x-show="show" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            <svg x-show="!show" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
    </div>
    <ul x-show="show" class="sm:hidden flex flex-col items-end py-2 space-y-1" x-cloak>
        @foreach ($pages as $page)
            <li>
                <a href="{{ $page->getUrl() }}" class="block p-1 hover:text-gray-600 transition-color duration-75 ease-in-out">{{ $page->title }}</a>
            </li>
        @endforeach
    </ul>
</nav>

<nav class="hidden sm:flex items-baseline justify-between py-16">
    <h1 class="text-5xl font-medium">{{ $page->site_title }}</h1>
    <ul class="flex space-x-4">
        @foreach ($pages as $page)
            <li>
                <a href="{{ $page->getUrl() }}" class="block p-1 hover:text-gray-600 transition-color duration-75 ease-in-out">{{ $page->title }}</a>
            </li>
        @endforeach
    </ul>
</nav>
