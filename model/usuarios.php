<?php
require('../config/conexion.php');
class Usuarios
{

  private $nombre;
  private $cedula;
  private $correo;
  private $clave;
  public function __construct()
  {
  }
  public function insert($nombre, $cedula, $correo)
  {
    $con = new Conexion();
    $query = "INSERT into `persona`(nombre,cedula,correo)  values('$nombre','$cedula','$correo')";
    $result = $con->connection->query($query);
    return $result;
  }
  public function delete($id){
    $con=new Conexion(); 
    $query="DELETE from `persona` where idPersona='$id'";
    $result=$con->connection->query($query);
  return $result;     
  }

  public function update($nombre, $cedula, $correo,$id)
  {
    $con = new Conexion();
    $query = "UPDATE `persona` set nombre='$nombre', cedula='$cedula', correo='$correo' where idpersona='$id'";
    $result = $con->connection->query($query);
    return $result;
  }
  
  public function selectAll()
  {
    $con = new Conexion();
    $query = "SELECT * FROM `persona`";
    $result = $con->connection->query($query);
    return $result;
  }
 
}
