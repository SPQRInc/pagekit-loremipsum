<?php

namespace Spqr\Loremipsum\Controller;

use joshtronic\LoremIpsum as Loremipsum;


/**
 * @Route("/", name="loremipsum")
 */
class LoremipsumApiController
{
	/**
	 * @Route(
	 *     "/{type}/{number}", methods="GET",
	 *     defaults={"type": "words", "number" = 150},
	 *     requirements={
	 *         "number": "\d+"
	 *     }
	 * )
	 * @Request({"type": "string", "number" = "int"})
	 *
	 *
	 * @return array
	 */
	public function getAction( $type, $number )
	{
		$generator = new Loremipsum();
		
		switch ( $type ) {
			case 'words' :
				$content   = $generator->words( $number );
				break;
			case 'sentences' :
				$content   = $generator->sentences( $number );
				break;
			case 'paragraphs' :
				$content   = $generator->paragraphs( $number );
				break;
			default :
				$content   = $generator->words( $number );
				break;
		}
		
		return ['content' => $content];
	}
}

