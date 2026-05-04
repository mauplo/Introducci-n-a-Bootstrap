# Introducción a Bootstrap
Integración de bootstrap al proyecto myfirstwebsite de sistemas distribuidos

---
 
## Contenido del repo 

```
Introducci-n-a-Bootstrap/
├── .gitignore
├── package.json                        ← dependencias npm (Bootstrap, etc.)
├── manage.py
├── mywebsite/
│   ├── settings.py
│   └── urls.py
├── myfirstapp/
│   ├── models.py
│   ├── views.py
│   ├── urls.py
│   └── templates/
│       └── myfirstapp/
│           ├── base.html               ← Bootstrap cargado desde node_modules
│           ├── index.html              ← lista de estudiantes con tabla + modal
│           ├── detalles.html           ← detalles con cards y progress bar
│           └── hola_mundo.html         ← demo mínimo
└── presentacion.pdf                   ← slides de la exposición 
```
> `node_modules/` **no está en el repo** (ver `.gitignore`).  
> Después de clonar es necesario correr `npm install` para reinstalar Bootstrap.
 
