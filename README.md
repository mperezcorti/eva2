Me inspiré en una página web de venta de cafés. Son 3 páginas, una de inicio, un carrito y una de registro de usuario.
En la página de inicio se ven las descripciones de la marca y los productos disponibles con sus precios y descripciones. 
Cada producto tiene un botón para agregar al carrito, los cuales se pueden agregar más de una vez y al agregarlo envía una notificación de que se agregaron.
En la página de carrito de pueden ver los productos agregados en una tabla, los cuales se pueden eliminar de a uno, o se puede vaciar el carrito completo.
En la página de registro se pueden agregar datos personales para registrar usuario. Pregunta datos como nombre y apellido, correo electrónico, teléfono y contraseña. El correo debe tener una estructura específica para registrar el usuario, y también verifica que las contraseñas sean iguales, sino envía una notificación de error.

Se ocupó la función "localStorage" en una variable global "let" con un arreglo para poder guardar los datos de los productos y sus precios, al igual que en la página de registro con los datos personales del usuario, internamente en la página sin necesitar una base de datos, para que no se pierdan los datos cuando se cambia de página o se reinicia.
Luego se hicieron funciones para cada mostrar producto, agregar a carrito, eliminar producto, vaciar carrito, validar correo, validar contraseña y registrar para poder recuperar los datos de las páginas y eliminarlos o validarlos según corresponda.

Se le preguntó a la IA cómo podría validar que el correo tenga un formato determinado, y devolvió el uso de un "regex" que determina que debe haber letras antes y después del arroba, contener un punto y letras al final del texto.
También se validó con un regex la contraseña para que contenga alguna mayúscula, número y signo, además de confimar que ambas contraseñas son iguales al ingresarlas.

También se uso "innerHTML", pero es recomendado usar un "textContent" para recuperar los datos solo como texto plano para mantener la seguridad de los datos de la página.
