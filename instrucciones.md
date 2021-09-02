### Proyecto deploy Firebase Angular

- Crear una aplicacion de gestion de alquileres: app que me permita mostrar casas en alquiler, ver sus datos y posteriormente situarla en un mapa en google maps.

1. Crear modelo de datos para las casas, inicialmente vamos a crear un array dentro del servicio que tenga 4 casas.
2. Crear una interfaz que defina dicho modelo: id (number), titulo, direccion, ciudad, numerohabitaciones (number), propietario, disponibilidad (boolean), foto, lat y longitud.
3. En appComponent crear un menu transversal con dos botones Listado y Nueva Casa.
4. Listado cargara component home donde se visualizan todas las casas a modo de cards.
5. Cada casa tendra un boton que me lleve a la vista de la casa, donde se visualizan todos los datos y el mapa.
6. El boton de Nueva casa tendra un formulario de tipo template, sin validaciones, que guarde en mi array los datos de la casa.

//Todo esto o vamos a ahcer contra un array del servicio, cuando montemos Firebase sustituiremos als funciones de array del servicio por la peticion a Firebase

1. TArea crear el servicio, interface y generar rutas segunlo explicado
