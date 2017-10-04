<?php

  $submit = $_POST['submit'];
  $nombre = $_POST['nombre'];
  $telefono = $_POST['telefono'];
  $email = $_POST['email'];
  $mensaje = $_POST['mensaje'];

  $name="Alguién quiere platicar con Rodrigo";
  $email="roadluac@gmail.com";

  $message =  "Nombre: " . $nombre 
              . "Teléfono: " . $telefono
              . "E-mail: " . $email 
              . "Mensaje: " . $mensaje;

    if (($nombre == "")||($telefono=="")||($email=="")) {
          echo "Debe llenar todos los campos";
    }
    else {
      
        $from="From: $name<$email>\r\nReturn-path: $email";
        $subject="Contacto para Rodrigo";
        mail($email, $subject, $message, $from);
        //echo "OK";
    }

?>