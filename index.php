<?php

return [
	
	'name' => 'loremipsum',
	
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
		'loremipsum:' => ''
	],
	
	'config' => [
	],
	
	'events' => [
		
		'view.scripts' => function ($event, $scripts) {
			$scripts->register('editor-plugin', 'loremipsum:app/bundle/editor-plugin.js', ['~editor']);
		},
	
	],
];