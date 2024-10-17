<?php
// Ruta de la imagen original
$source = 'img/fondo.jpg';

// Ruta donde se guardará la imagen convertida
$destination = 'img/fondo.webp';

// Cargar la imagen original
$image = imagecreatefromjpeg($source);

// Convertir y guardar la imagen en formato WebP (calidad entre 0 y 100)
if (imagewebp($image, $destination, 80)) {
    echo "Imagen convertida y optimizada correctamente a WebP.";
} else {
    echo "Error al convertir la imagen.";
}

// Liberar memoria
imagedestroy($image);
?>
