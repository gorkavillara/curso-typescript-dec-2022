# Primer proyecto general del curso de TypeScript
## CRM de clientes basado en CLI
Crearemos un CLI (Command Line Interface) que nos servirá como CRM para gestionar nuestra base de datos de clientes.
El CLI utiliza las siguientes funcionalidades/librerías:
- "axios": Para realizar el CRUD
- "inquirer": Para crear interactividad en el terminal
- "chalk": Para dar estilos en el terminal
- "eslint": Para asegurar un código homogéneo a lo largo de todo el proyecto
- "nanospinner": Para los tiempos de espera

## Funcionalidades del CRM CLI
A través de una API creada específicamente para este proyecto, gracias al curso de Typescript soy capaz de crear un CRM en el terminal con las siguientes características

1. Listar todos los clientes
2. Dar de alta nuevos clientes
3. Modificar clientes existentes
4. Eliminar clientes existentes

Url del endpoint: https://us-central1-fir-api-a3355.cloudfunctions.net/app/api/clientes

## Detalles del CRUD (Create, Read, Update, Delete)
### Creando nuevos clientes
- Tipo de llamada: POST
- Estructura del body
    - action: "nuevoCliente"
    - cliente: (objeto con la info del cliente)
### Leyendo clientes actuales
- Tipo de llamada: GET
- Estructura del body (VACÍO)
### Actualizando clientes actuales
- Tipo de llamada: POST
- Estructura del body
    - action: "actualizaCliente"
    - id: id del cliente (tipo string)
    - cliente: (objeto con la info del cliente)
### Eliminando clientes actuales
- Tipo de llamada: POST
- Estructura del body
    - action: "eliminaCliente"
    - id: id del cliente (tipo string)