<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html" charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Тестовая страница">
    <title>JavaScript & PHP</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<h1>PHP TEST</h1>
<?php echo '<b>PHP VERSION: </b>'. phpversion(); ?><br>
<?php echo '<b>ZEND VERSION: </b>' . zend_version(); ?>
<?php phpinfo(); ?>
</body>
</html>
