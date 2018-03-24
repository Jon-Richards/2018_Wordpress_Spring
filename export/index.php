<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package WordPress
 * @subpackage March
 * @since March 1.0
 */
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" type="text/css" href="<?php echo esc_url( get_template_directory_uri() ); ?>/style.css">
    <?php wp_head(); ?>
    <title><?php bloginfo( 'name' ); ?></title>
  </head>
  <body>
    <?php echo '<p>Hello World!</p>'; ?>
  </body>
</html>