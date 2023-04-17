<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    .a {
        width: 300px;
        height: 200px;
        background-color: aqua;
    }

    .a:active > .b {
        background-color: red;
        width: 100px;
        height: 100px;
    }

</style>
<body>
    <div class="a">
        <div class="b">

        </div>

    </div>
    
</body>
</html>