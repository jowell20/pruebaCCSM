$(function () {
    $("#editarPersona").hide()
    $("#agregarPersona").show()
    actualizarPersona()
    agregarPersona()
    listarPersonas()
    eliminarPersona()
    EditarUsuario()
})

function agregarPersona() {
    $("#agregarPersona").click(function (e) {
        e.preventDefault()
        var nombre = $("#nombre").val()
        var cedula = $("#cedula").val()
        var correo = $("#correo").val()
        if (nombre === '' || cedula === '' || correo === '') {
            alert('Por favor, completa todos los campos obligatorios.');
        } else {
        var datos = {
            nombrePersona: nombre,
            cedula: cedula,
            correo: correo
        }

        $.post('/proyectos/pruebaccsm/controlador/usuarioController.php', datos, function (response) {
         
            $("#nombre").val("")
            $("#cedula").val("")
            $("#correo").val("")
            listarPersonas()
        })
    }   
    })

}
function listarPersonas() {
    $.ajax({
        url: '/proyectos/pruebaccsm/controlador/usuarioController.php',
        type: 'GET',
        processData: false,
        success: function (response) {
            
            var plantilla = ""
            const personas = JSON.parse(response)
            personas.forEach(persona => {
                plantilla += `
    <tr>               
    <td>${persona.id}</td>
    <td>${persona.nombre}</td>
    <td>${persona.cedula}</td>
    <td>${persona.correo}</td>
    <td><button class="editar" type="button">Editar</button>
    <button class="eliminar" type="button">Eliminar</button></td>
      </tr>`
            })
            $("#tablaPersonas").html(plantilla)
        }

    })
}
function eliminarPersona(){
    $("#tablaPersonas").on('click','.eliminar',function (e) {
        var id = $(this).closest('tr').find('td:eq(0)').text();
       
        var datos={
            id:id
        }
        
        $.post('/proyectos/pruebaccsm/controlador/usuarioController.php',datos,function(response){
           
         
            listarPersonas()
            })
    })
}

function EditarUsuario() {
   
    $("#tablaPersonas").on('click','.editar',function (e) {
        e.preventDefault()
        $("#editarPersona").show()
        $("#agregarPersona").hide()
        var id = $(this).closest('tr').find('td:eq(0)').text();
        var nombre = $(this).closest('tr').find('td:eq(1)').text();
        var cedula = $(this).closest('tr').find('td:eq(2)').text();
        var correo = $(this).closest('tr').find('td:eq(3)').text();
        $("#nombre").val(nombre)
        $("#cedula").val(cedula)
        $("#correo").val(correo)
        $("#id").val(id)
            // $.ajax({
            //     url: '../php/editarUser.php',
            //     type: 'POST',
            //     data: dato,
            //     contentType: false,
            //     processData: false,
            //     success: function (response) {
       
                    
                 
            //     }

            // });
        


    })
}
function actualizarPersona() {
    $("#editarPersona").click(function (e) {
        e.preventDefault()

        var id = $("#id").val()
        var nombre = $("#nombre").val()
        var cedula = $("#cedula").val()
        var correo = $("#correo").val()
        if (nombre === '' || cedula === '' || correo === '') {
            alert('Por favor, completa todos los campos obligatorios.');
        } else {
            // Aquí puedes agregar el código para enviar los datos.
       


        var datos = {
            idPersona:id,
            editarPersona: nombre,
            cedula: cedula,
            correo: correo
        }
    
        $("#editarPersona").hide()
        $("#agregarPersona").show()


        $.post('/proyectos/pruebaccsm/controlador/usuarioController.php', datos, function (response) {
            console.log(response)
            // $("#id").val("")
            // $("#nombre").val("")
            // $("#cedula").val("")
            // $("#correo").val("")
            listarPersonas()
        })
    }
    })

}