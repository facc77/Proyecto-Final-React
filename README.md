# Proyecto-Final-React
      Requisitos del proyecto:
      *Se requería una clínica web en la que se pueden registrar tanto pacientes como médicos.
      *Estos usuarios deben poder acceder con previo permiso de parte de un administrador.
      *Los pacientes deben poder buscar médicos según su especialidad y pueden sacar turnos.
      *Por último tanto los médicos como los pacientes deben ser capaces de verificar sus turnos confirmados en sus respectivas cuentas.
      *Una vez deslogueados, no pueden volver a la página anterior de la cuenta, ni siquiera escribiendo en la URL. Deben volver a iniciar sesión.
      *Todas las páginas deben contar con diseño responsive para celulares y tablets
      
      Se encuentra una pagina home en la que los usuarios se pueden dirigir a los login de pacientes y medicos respectivamente. Los demás links llevan a una página 404
   En cada uno de los login podrá visitar links de registro, cuyos formularios validan usuarios ya registrados, campos vacíos, 
   campos de contrasena que coincidan como así también emails válidos.
   Una vez registrados se encontrarán de nuevo en la página principal y deben ser autorizados por un administrador para ingresar.
   Lo pueden verificar en login intentando ingresar con sus datos. Les puede salir un modal informando datos incorrectos o que tienen q aguardar al permiso.
      
      Deben autorizar esos usuarios ingresando con el usuario "admin" y contrasena "admin" ya sea en login Paciente o login Medico.
   Se podrán encontrar con una tabla especificando la lista de médicos y pacientes en cuyas respectivas filas deben clickear para permitir o denegar acceso.
   Al cerrar sesión podrán notar que si desean volver a la pagina anterior no pueden ya q no cuentan con el permiso al cerrar sesión. Si o si deben ingresar por login
   de nuevo.
      
      Una vez dentro de la cuenta de paciente podrán visualizar un buscador en la que pueden buscar un médico según su disciplina. En este momento puede verificar,
   con la busqueda "cardiologo", "neurologo" y "dentista", listas de médicos ya registrados y autorizados.
   Al clickear en ellos se encontrará con una tarjeta personal de cada uno en la que se especifica horario de atención y sucursal.
      
      Si desea sacar turno con alguno en particular, podrá visualizar un modal para elegir fecha, hora y motivo de consulta. Al confirmar un turno será redireccionado
   a una sección de turnos confirmados. Vale aclarar que si ingresa a esta sección sin tener turnos confirmados, será notificado de ello después de visualizar un spinner 
   y será redireccionado a inicio. También puede notar que si intenta sacar un nuevo turno con el mismo médico, fecha y hora será notificado que ese turno se encuentra
   ocupado. También puede probar de que si intenta volver a las páginas de paciente luego de desloguearse, será redireccionado a home ya que no cuenta con los permisos.
      
      Por último puede ingresar con la cuenta del médico ya autorizado con el que pidió turno y chequear la lista de turnos confirmados, puede clickear en las filas 
   para ver detalles de los turnos. Al igual que con la cuenta de admin y paciente, una vez deslogueado, será redireccionado si intenta volver a ingresar a esas páginas 
   sin antes volver a loguearse.
   
      La página cuenta con responsive para las resoluciones de teléfonos móviles y tablets especificadas en las herramientas de desarrollo de Firefox, las cuales son:
       *Galaxy S9: 360 x 740 px
       *iPad: 768 x 1024 px
       *iPhone 6/7/8 iOS 11 Safari 11 375 x 667 px
       *iPhone 6/7/8 Plus iOS 11 Safari 11 375 x 667 px
       *iPhone X/XS iOS 12
       
   
   
      
