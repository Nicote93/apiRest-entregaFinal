# API REST - Talento tech 2025 by Nicote93
- **Proyecto Final** API REST en NODE.js con Express.js y Firebase/Firestore
- **Asunto:** Proyecto Final
- **Autor:** Nicolas Alejandro Tello

# apiRest-entregaFinal

## Premisa:

Actualmente nuestro cliente tiene diversos productos en catálogo y precisa disponer de una API Rest desde donde su tienda oficial pueda administrarlos, habilitando la posibilidad de Leer, Crear, Actualizar y Eliminar la información sobre los productos.

La aplicación debe contar con una capa de autenticación para resguardad la seguridad de los datos que estarán alojados en una base de datos en la nube mediante el servicio Firestore de Firebase.

Finalmente, la aplicación debe contemplar el manejo de errores de forma clara, teniendo en cuenta fallos del tipo 404 para rutas no definidas, los estados 401 y 403 ante errores de autenticación y códigos de estado 400 y 500 cuando las peticiones contienen errores o nuestros servicios externos de datos no responden.

## Requerimientos:
1. Configuración Inicial
- Crea un directorio donde alojarás tu proyecto e incluye un archivo index.js como punto de entrada.
- Inicia Node.js y configura npm usando el comando npm init -y.
- Agrega la propiedad "type": "module" en el archivo package.json para habilitar ESModules.
- Configura un script llamado start para ejecutar el programa con el comando npm run start.

2. Instalación de dependencias
- Instala express, cors, body-parser, dotenv, firebase y jsonwebtoken como dependencias del proyecto.
- Requerimiento #3: Configuración del servidor
- Crea un servidor web con express y realiza su configuración en el archivo index.js.
- Configura CORS para habilitar las peticiones de origen cruzado, así las aplicaciones Frontend de la empresa pueden consultar al servicio sin problemas.
- Configura el middleware global de body-parser para interpretar los body en formato JSON de las peticiones.
- Establece un middleware que maneje las rutas desconocidas, devolviendo el estado 404 y un mensaje.
- Crea un archivo .env donde se alojarán las variables de entorno del proyecto.

4. Rutas
- Crea la capa de rutas del proyecto.
- Establece las rutas necesarias para atender las peticiones que interactúan con productos, así como también la ruta de login para:
* autenticar usuarios:
* products.routes.js:
* GET /api/products devuelve todos los productos.
* GET /api/products/:id devuelve el producto con el ID indicado.
* POST /api/products/create recibe en el cuerpo (body) de la petición la información sobre el nuevo producto para ser guardado en el servicio de datos en la nube.
* DELETE /api/products/:id elimina el producto con el ID indicado.
* auth.routes.js:
* POST /auth/login recibe las credenciales de usuario en el cuerpo (body) de la petición y devuelve el Bearer token si son válidas o un error de autenticación en caso contrario.

5. Controladores y Servicios
- Crea la capa de controladores para cada una de las rutas establecidas en el requerimiento anterior.
- Crea la capa de servicios para atender a cada uno de los controladores.

6. Acceso a los datos
- Crea la capa de modelos de la aplicación.
- Crea un nuevo proyecto de Firestore en Firebase, agrega una colección para registrar nuevos productos y crea el primer documento de producto para darle estructura y tipos de datos.
- Configura y conecta Firebase en el proyecto.
- Utiliza la instancia de Firebase creada y crea los métodos necesarios para que el modelo pueda interactuar con la base de datos remota.
- Conecta los servicios con los modelos.

7. Protege tus rutas
- Configura JWT en el proyecto.
- Crea un middleware de autenticación y protege las rutas correspondientes.
- Agrega la lógica necesaria en la en controlador de login para validar la identidad del usuario y devolver un Bearer Token.

## Instalación

1. Clonar el repositorio

2. Instalar las dependencia

```shell
npm install
```

## Ejecutar el proyecto

```shell
npm run dev
```
## Pagina de inicio
- GET + https://api-rest-entrega-final.vercel.app/
- Descripcion: Pantalla de inicio api rest.
- Respuesta:
```JSON
[
  {
    "message": "Bienvenido a la API REST - Talento tech 2025 by Nicote93"
  }
]

## Traer todos los productos
- GET + https://api-rest-entrega-final.vercel.app/products
- Descripcion: Me trae el listado completo de productos.
- Respuesta:
```JSON
[
    {
        "id": "1IEdyhMaivMkG5xVyIV0",
        "category": [
            "complementos",
            "memorias"
        ],
        "name": "Memoria MicroSD Kingston - 128Gb",
        "available": true,
        "price": 50000,
        "stock": 10
    },
    {
        "id": "J8U57mxLNsK9m0vMHDLt",
        "price": 49500,
        "available": true,
        "category": [
            "Video",
            "Proyectores"
        ],
        "stock": 1,
        "name": "Astronauta Proyector de galaxias"
    },
    {
        "id": "nbYf5muybBq1Ep8iKq5k",
        "category": [
            "Audio",
            "Auriculares",
            "Auriculares inalámbricos"
        ],
        "name": "Auricular GTC HSG-180",
        "stock": 5,
        "price": 14500,
        "available": false
    }
]

## Login
- POST + https://api-rest-entrega-final.vercel.app/api/auth/login
- Descripcion: Autenticacion de usuario para ciertas funciones.
- Prompt:
```JSON
[
  {
    "email": "ejemplo@mail.com",
    "password": "talento2025tech"
  }
]
- Respuesta:
```JSON
[
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzUzMTQ1ODEzLCJleHAiOjE3NTMxNDk0MTN9.lvhUsRpBAmiFObaKwp3ptOdwcPcRKigpf8ZU-Hv6cmM"
  }
]

## ID especifico
- GET + https://api-rest-entrega-final.vercel.app/products/1IEdyhMaivMkG5xVyIV0
- Descripcion: Me trae ID elegido del listado completo de productos. Requiere autorizacion.
- Respuesta:
```JSON
[
    {
        "id": "1IEdyhMaivMkG5xVyIV0",
        "category": [
            "complementos",
            "memorias"
        ],
        "name": "Memoria MicroSD Kingston - 128Gb",
        "available": true,
        "price": 50000,
        "stock": 10
    }
]

## Crear producto nuevo
- POST + https://api-rest-entrega-final.vercel.app/products
- Descripcion: Crea un producto completamente nuevo. Requiere autenticacion.
- Prompt:
```JSON
[
  {
  "name": "Astronauta Proyector de galaxias",
  "price": 49500,
  "category": ["Video", "Proyectores"],
  "available": true,
  "stock": 1
  }
]
- Respuesta:
```JSON
[
  {
    "id": "J8U57mxLNsK9m0vMHDLt",
    "name": "Astronauta Proyector de galaxias",
    "price": 49500,
    "category": [
        "Video",
        "Proyectores"
    ],
    "available": true,
    "stock": 1
  }
]

## Actualizar producto
- PUT + https://api-rest-entrega-final.vercel.app/api/products/J8U57mxLNsK9m0vMHDLt
- Descripcion: Actualiza un producto del listado. Requiere autenticacion.
- Prompt:
```JSON
[
  {
  "name": "Astronauta Proyector de galaxias",
  "price": 49500,
  "category": ["Video", "Proyectores"],
  "available": false,
  "stock": 0
  }
]
- Respuesta:
```JSON
[
  {
    "message": "Producto actualizado"
  }
]

## Actualizar producto
- DELETE + https://api-rest-entrega-final.vercel.app/api/products/J8U57mxLNsK9m0vMHDLt
- Descripcion: Actualiza un producto del listado. Requiere autenticacion.
- Prompt:
```JSON
[
  {
  "name": "Astronauta Proyector de galaxias",
  "price": 49500,
  "category": ["Video", "Proyectores"],
  "available": false,
  "stock": 0
  }
]
- Respuesta:
```JSON
[
  {
    "message": "Producto exterminado"
  }
]

## Actualizar producto
- PUT + https://api-rest-entrega-final.vercel.app/api/products/J8U57mxLNsK9m0vMHDLt
- Descripcion: Actualiza un producto del listado. Requiere autenticacion.
- Prompt:
```JSON
[
  {
  "name": "Astronauta Proyector de galaxias",
  "price": 49500,
  "category": ["Video", "Proyectores"],
  "available": false,
  "stock": 0
  }
]
- Respuesta:
```JSON
[
  {
    "message": "Producto exterminado"
  }
]