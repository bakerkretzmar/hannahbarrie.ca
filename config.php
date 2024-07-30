<?php

return [
    'production' => false,
    'baseUrl' => '',
    'build' => [
        'source' => 'content',
        'destination' => 'public',
    ],
    'site_title' => 'Hannah Barrie',
    'description' => 'Hannah is a researcher and writer living in Hamilton, Ontario.',
    'collections' => [
        'pages' => [
            'path' => '/',
            'extends' => '_layouts/app',
        ],
    ],
];
