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
	 *     "/{type}/{number}/{wrapping}", methods="GET",
	 *     defaults={"type": "words", "number" = 150, "wrapping" = null },
	 *     requirements={
	 *         "number": "\d+"
	 *     }
	 * )
	 * @Request({"type": "string", "number": "int", "wrapping": "string"})
	 *
	 *
	 * @return array
	 */
	public function getAction( $type, $number, $wrapping )
	{
		$generator = new Loremipsum();
		
		switch ( $type ) {
			case 'words' :
				$content   = $generator->words( $number, $wrapping );
				break;
			case 'sentences' :
				$content   = $generator->sentences( $number, $wrapping );
				break;
			case 'paragraphs' :
				$content   = $generator->paragraphs( $number, $wrapping );
				break;
			default :
				$content   = $generator->words( $number, $wrapping );
				break;
		}
		
		return ['content' => $content];
	}
}