# Nodepop

Es un servicio de anuncios de articulos de segunda mano.

## Instrucciones de instalacion

Instalamos las dependencias con:

```sh
npm install
```

Para comenzar en modo desarrollo:

```sh
npm run dev
```

Iniciamos la base de datos:

```sh
npm run initDB
```

## Iniciamos MongoDB Server en Macos o Linux

En una consola aparte accedemos al directorio correspondiente y escribimos la siguiente ruta para ejecutar MongoDB:

```sh
./bin/mongod --dbpath ./data
```
## Informacion general

Aplicacion creada con:

```sh
npx express-generator nodepop --ejs
```

## Metodos API 

|   Metodo  |    URL                                       | Descripcion                  |   Error   |
| :-------- | :--------------------------------------------| :-------------------------   | :---------|
|    GET    | `https://http://127.0.0.1:3000/`             | Muestra todos los anuncios   |           |
|    GET    | `https://http://127.0.0.1:3000/getadverts`   | Muestra todos los anuncios   |           |
|    GET    | `https://http://127.0.0.1:3000/getadvertbyid`| Filtra por el id del anuncio | 404       |
|    GET    | `https://http://127.0.0.1:3000/gettags`      | Muestra los tags existentes  |           |
|    POST   | `https://http://127.0.0.1:3000/createadvert` | Crea anuncios nuevos         | 400       |
|    PUT    | `https://http://127.0.0.1:3000/updateadvert` | Actualiza el anuncio         | 400       |
|   DELETE  | `https://http://127.0.0.1:3000/deleteadvert` | Elimina un  anuncio          | 404       |

### GET /
Esta ruta nos devuelve todos los anuncios. Podemos aplicar filtros de búsqueda por tag(motor, work, lifestyle o mobile), por tipo(compra o venta), por precio(establece un rango entre precio_min y precio_max) o por titulo(busca la palabra indicada en el titulo del anuncio). Este es un ejemplo de lo que nos devuelve:

{
    "results": [
        {
    _id: new ObjectId("63f8f31967bd6d7dae485688"),
    titulo: 'Reloj Apple Watch',
    descripcion: 'Reloj Apple Watch Series 5 en perfecto estado',
    tipo: 'venta',
    precio: 250,
    foto: 'https://image-reloj.jpg',
    tags: [ [motor], [lifestyle] ]
  },
        ...
    ]
}

