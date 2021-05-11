# Grettos
Grettos, es mi proyecto para el curso de React JS en Coderhouse.
Mi idea es brindar un e-commerce, con artículos necesarios para el ecosistema de cryptomonedas.
## Secciones
El sitio, contiene 4 secciones:
### Home
Aquí el usuario encontrará la totalidad de los productos que puede adquirir.
### Hardware Wallets
Esta sección contendrá todos los artículos de hardware wallets disponibles.
### Key Cards
Sección dónde el usuario encontrará una manera económica y segura de resguardar sus inversiones.
### Merchandise
Aquí podrán seleccionarse artículos de merchandising como tazas, bolsas de supermercado o cuadro relacionados a cryptomonedas.
## Datos de los productos
Los datos de los productos se encuentran en la base de datos provista por Firebase y son consumidos por la página mediante llamados a la base que arroja los resultados buscados.
## Tecnologías
Por supuesto React es la tecnología principal, siendo Bootstrap la librería de CSS.
## Navegabilidad
Breve descripción de la experiencia de usuario
### Selección del producto
El usuario selecciona el producto desde la página principal o desde las distintas secciones clickeando sobre "More information"
### Elección de cantidad y lectura de descripción
El usuario se encuentra con detalles del item o su descripción y puede seleccionar la cantidad a incluir en el cart.
### Interacción con el carrito de compras
EL carrito de compras, disponibles durante toda la experiencia, contiene el total de productos y el precio total, dando las opciones de eliminar todos los itemes o proceder a la compra.
Debajo existe un listado con los items individualizados por producto, pudiendo eliminarse un item en particular.
### Creación de orden de compra
Seleccionada la opción "Purchase" el usuario es dirigido a la sección en la cuál generará su orden de compra, la cual se guarda en la base de datos de Firebase.
Completará su nombre, teléfono y su correo (2 veces, debiendo confirmarlo) y le será devuelta el ID de su orden, generado de manera automática por Firebase.