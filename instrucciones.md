### Proyecto deploy Firebase Angular

- Crear una aplicacion de gestion de alquileres: app que me permita mostrar casas en alquiler, ver sus datos y posteriormente situarla en un mapa en google maps.

1. Crear modelo de datos para las casas, inicialmente vamos a crear un array dentro del servicio que tenga 4 casas.
2. Crear una interfaz que defina dicho modelo: id (number), titulo, direccion, ciudad, numerohabitaciones (number), propietario, disponibilidad (boolean), foto, lat y longitud.
3. En appComponent crear un menu transversal con dos botones Listado y Nueva Casa.
4. Listado cargara component home donde se visualizan todas las casas a modo de cards.
5. Cada casa tendra un boton que me lleve a la vista de la casa, donde se visualizan todos los datos y el mapa.
6. El boton de Nueva casa tendra un formulario de tipo template, sin validaciones, que guarde en mi array los datos de la casa.

//Todo esto o vamos a ahcer contra un array del servicio, cuando montemos Firebase sustituiremos als funciones de array del servicio por la peticion a Firebase

1. Tarea crear el servicio, interface y generar rutas segunlo explicado
2. Crear los componentes para asignar a las rutas especificas

- siguiente tarea

1. En el servicio de casas crear un metodo que me devuelva todas las casas
2. Consumirlo dentro del componente home y pintar cada casa con una card de bootstrap en dicho componente.
3. Crear un boton de ver detalle que link a la vista de detalle de cada casa
4. Las casas que esten disponibles tendran un borde verde y las no disponibles uno rojo
5. Crear la vista detalle y cargar los datos del inmueble.

- siguiente tarea

1. En la vista detalle dejar el espacio asignado para visualizar el mapa
2. Crear un mneu de navegacion transversal para ir a lista de inmuebles y cargar el formulario de registro de un inmueble
3. Crear un formulario de tipo template para añadir a traves un elemento al array
