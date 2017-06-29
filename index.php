<?php

return [
	
	'name' => 'spqr/loremipsum',
	
	'type' => 'extension',
	
	'main' => function( $app ) {
	},
	
	'autoload' => [
		'Spqr\\Loremipsum\\' => 'src'
	],
	
	'nodes' => [],
	
	'routes' => [
		'/api/loremipsum' => [
			'name'       => '@loremipsum/api',
			'controller' => [
				'Spqr\\Loremipsum\\Controller\\LoremipsumApiController'
			]
		]
	],
	
	'menu' => [
	],
	
	'permissions' => [
	],
	
	'settings' => '',
	
	'resources' => [
		'spqr/loremipsum:' => ''
	],
	
	'config' => [
	],
	
	'events' => [
		
		'view.scripts' => function ($event, $scripts) use ($app) {
			$scripts->register('editor-loremipsum', 'spqr/loremipsum:app/bundle/editor-loremipsum.js', ['~editor']);
			
			if ($app->module('tinymce')) {
				$scripts->register('editor-loremipsum-tinymce', 'spqr/loremipsum:app/bundle/editor-loremipsum-tinymce.js',
				                   ['~editor-loremipsum', '~tinymce-script']);
			}
		},
	
	],
];