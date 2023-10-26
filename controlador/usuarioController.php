<?php
 
 require('../model/usuarios.php');
 
   // ----------------------------------------------------------------------------------------------------------
 $usuario=new Usuarios();
 $user=$usuario->selectAll();
if(!$user){ 
    die("no hay datos");
 }else{
    $json=array(); 
    
    while($row=mysqli_fetch_array($user)){
      $json[]=array(
        'id'=>$row['idpersona'],
        'nombre'=>$row['nombre'],
        'cedula'=>$row['cedula'],
        'correo'=>$row['correo']  
         ); 

          }
     $jsonString=json_encode($json);
    echo $jsonString;
 
         }
      //}
 /*Crer Usuario-----------------------------------------------------------------------------------------------*/
 if (isset($_POST['nombrePersona'])) {
$nombrePersona=$_POST['nombrePersona'];
$cedula=$_POST['cedula'];
$correo=$_POST['correo'];

$usuario=new Usuarios();
 $result=$usuario->insert($nombrePersona, $cedula, $correo);

if(!$result){
   echo "error";
}else{  
   
   echo "Guardado";
}


 }
 //---------------------------------------------------------------------------------------------------------------

       /*Eliminar */
       if(isset($_POST['id'])){
         $id=$_POST['id'];
         $usuario=new Usuarios();
         $result=$usuario-> delete($id);
         if(!$result){
           die("Error"); 
         }else{
         
           echo "Borrada";
         
         }
 }


//-----------------------------------------------------------------------------------------------------------------
 /*editar Usuario*/
 if (isset($_POST['idPersona'])) {   

$id=$_POST['idPersona'];
$nombre=$_POST['editarPersona'];
$cedula=$_POST['cedula'];
$correo=$_POST['correo'];

$usuario=new Usuarios();
 $result=$usuario->upDate($nombre, $cedula, $correo,$id);

if(!$result){
   echo "error";
}else{    
   echo "editado";
}



 }
?>