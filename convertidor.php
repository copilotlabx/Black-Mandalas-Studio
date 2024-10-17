<?php
// Ruta de la imagen original
$source = 'ruta/a/tu/imagen.jpg';

// Ruta donde se guardará la imagen convertida
$destination = 'ruta/a/tu/imagen.webp';

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
