<?php

return [
    'production' => false,
    'baseUrl' => '',
    'build' => [
        'source' => 'content',
        'destination' => 'public',
    ],
    'site_title' => 'Hannah Barrie',
    'description' => 'Website description.',
    'collections' => [
        'pages' => [
            'path' => '/',
            'extends' => '_layouts/app',
        ],
    ],
];
