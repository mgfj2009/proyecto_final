

En este trabajo se creo una aplicacion para conectarse a un API que nos entrega el tiempo 
de diferentes ciudades en distintos paises del sitio https://www.weatherapi.com/

Ademas se implemento un control de idioma ingles y español. Si bien, React tiene paquetes para este proposito, fue
implementado para crear y aplicar conceptos definidos como objetivos del proyecto.

El Proyecto se implemento utilizando API Context. 

La aplicacion consta de una pagina principal y una configuracion. La pagina principal toma 3 ciudades 
por defecto y recupera la informacion del tiempo en las respectivas ciudades. Ademas tiene un buscador. 

La pagina de configuracion permite cambiar las paginas definidas por defecto y ademas permite ajustar el idioma.
Tambien, la pagina de configuracion implementa una carga lazy loading. 

En caso de otra pagina se implementa un componente NotFound que advierte de error de url y permite redireccionar a la pagina principal
 
Se utilizó un custom hook llamado useFetch, el cual gestiona las consultas a la API del clima usando llamas fetch. En el 
se implementa tambien los hooks useState y useFetch.

En cuanto a los Prop-Types, se uitilizaron de varios tipos en varios componentes entre ellos:
    En el componente FormInput (pagina configuracion), se utiliza un proptype para verificar que es una funcion
    En el componente SelectInput (pagina configuracion), se utiliza para verificar si un objeto tiene una determinada estructura
    En el componente LinkButton (seccion common), se utiliza para verificar valores especificaciones

ErrorBoundary provee una manera de capturar errores en alguna parte del arbol de componentes y mostrar una interfaz
de repuesto para evitar una caida de toda la aplicacion.

Utilizamos ErrorBoundary en los componentes que estan relacionados con la respuesta del API y tambien el 
el formulario de de configuracion. Algunos componentes donde fueron aplicados son:

    WeatherCardHeader
    SearchCity
    ConfigPage

Para la UI utilizamos Bootstrap 5




