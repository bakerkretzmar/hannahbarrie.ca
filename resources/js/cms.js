import { useState } from 'react';
import CMS from 'netlify-cms-app';

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <nav className={`flex flex-col sm:hidden py-8 ${menuOpen ? 'pb-4' : ''}`}>
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl xs:text-4xl font-medium">Hannah Barrie</h1>
                    <button onClick={() => setMenuOpen(!menuOpen)} type="button">
                        {menuOpen ? <svg x-show="show" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg> : <svg x-show="!show" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>}
                    </button>
                </div>
                {menuOpen && <ul className="sm:hidden flex flex-col items-end py-2 space-y-1" x-cloak="true">
                    {['One', 'Two', 'Three'].map((page) => (
                        <li key={page}>
                            <a href="#" className="block p-1 hover:text-gray-600 transition-color duration-75 ease-in-out">{page}</a>
                        </li>
                    ))}
            </ul>}
            </nav>

            <nav className="hidden sm:flex items-baseline justify-between py-16">
                <h1 className="text-5xl font-medium">Hannah Barrie</h1>
                <ul className="flex space-x-4">
                    {['One', 'Two', 'Three'].map((page) => (
                        <li key={page}>
                            <a href="#" className="block p-1 hover:text-gray-600 transition-color duration-75 ease-in-out">{page}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

const PagePreview = ({ entry, widgetFor }) => {
    return (
        <div className="flex flex-col items-center min-h-screen font-sans text-lg xs:text-xl bg-theme-cream">
            <div className="w-full max-w-6xl px-6 lg:px-20">
                <Menu />
                <main className="max-w-2xl space-y-6 sm:space-y-8 pb-8 sm:pb-16">
                    <h1 className="text-3xl sm:text-4xl font-bold">{entry.getIn(['data', 'title'])}</h1>
                    <section className="prose space-y-6 sm:space-y-8">
                        {widgetFor('body')}
                    </section>
                </main>
            </div>
        </div>
    );
};

CMS.registerPreviewStyle('/assets/build/css/main.css');
CMS.registerPreviewTemplate('pages', PagePreview);
CMS.init();
