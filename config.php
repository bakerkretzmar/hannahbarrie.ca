<?php

return [
    'production' => false,
    'baseUrl' => '',
    'build' => [
        'source' => 'content',
        'destination' => 'public',
    ],
    'site_title' => 'Hannah Barrie',
    'description' => 'Hannah Barrie is a researcher and writer in St. John’s, Newfoundland.',
    'collections' => [
        'pages' => [
            'path' => '/',
            'extends' => '_layouts/app',
        ],
    ],
];
