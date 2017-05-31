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
		
		'view.scripts' => function ($event, $scripts) use ($app) {
			$scripts->register('editor-plugin', 'loremipsum:app/bundle/editor-plugin.js', ['~editor']);
			
			if ($app->module('tinymce')) {
				$scripts->register('editor-plugin-tinymce', 'loremipsum:app/bundle/editor-plugin-tinymce.js', ['~editor-plugin', '~tinymce-script']);
			}
		},
	
	],
];