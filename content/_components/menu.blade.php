<nav class="flex flex-col gap-4 py-6 pb-8">
    <h1 class="font-serif text-2xl xs:text-4xl sm:text-5xl">
        <a href="/" class="p-1 link">{{ $page->site_title }}</a>
    </h1>
    <ul>
        @foreach ($pages as $p)
            @continue($p->title === 'Home')
            <li>
                <a href="{{ $p->getUrl() }}" class="block px-1 link {{ $p->title === $page->title ? 'underline' : '' }}">{{ $p->title }}</a>
            </li>
        @endforeach
    </ul>
</nav>
