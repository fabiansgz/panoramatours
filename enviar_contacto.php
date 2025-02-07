<?php
// Configuración de los datos del correo
$destinatario = "fabiansgz@gmail.com";

// Obtener los datos del formulario
$nombre = $_POST['nombre'] ?? '';
$apellido = $_POST['apellido'] ?? '';
$email = $_POST['email'] ?? '';
$telefono = $_POST['telefono'] ?? '';
$asunto = $_POST['asunto'] ?? '';
$mensaje = $_POST['mensaje'] ?? '';

// Construir el cuerpo del mensaje
$contenido = "Nombre: " . $nombre . " " . $apellido . "\n";
$contenido .= "Email: " . $email . "\n";
$contenido .= "Teléfono: " . $telefono . "\n";
$contenido .= "Asunto: " . $asunto . "\n\n";
$contenido .= "Mensaje:\n" . $mensaje;

// Cabeceras del correo
$cabeceras = "From: " . $email . "\r\n";
$cabeceras .= "Reply-To: " . $email . "\r\n";
$cabeceras .= "X-Mailer: PHP/" . phpversion();

// Enviar el correo
$mail_enviado = mail($destinatario, "Nuevo mensaje de contacto: " . $asunto, $contenido, $cabeceras);

// Preparar la respuesta
$respuesta = array();
if($mail_enviado) {
    $respuesta['exito'] = true;
    $respuesta['mensaje'] = "¡Gracias por tu mensaje! Te contactaremos pronto.";
} else {
    $respuesta['exito'] = false;
    $respuesta['mensaje'] = "Lo sentimos, hubo un error al enviar el mensaje. Por favor, intenta nuevamente.";
}


header("Location: " . $_SERVER['HTTP_REFERER']);
exit;
?>
