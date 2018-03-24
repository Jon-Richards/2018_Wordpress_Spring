<?php

if ( ! function_exists( 'March_setup' ) ) :
  function March_setup() {
    // Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );
    
    /*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );
  }
endif;
