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
> `node_modules/` **no está en el repo** (`.gitignore`).  
> Después de clonar es necesario correr `npm install` para reinstalar Bootstrap.
 
---
 
## Setup paso a paso

Si prefieres un tutorial más visual (con capturas de pantallas), accede al archivo [Presentación](https://github.com/mauplo/Introducci-n-a-Bootstrap/blob/main/presentacion.pdf)

### Requisitos previos
 
Para esta integración necesitamos python y node.js
 
```bash
python --version    # Python 3.10 o superior
node --version      # Node.js (LTS), con que salga un número 
npm --version       # incluido con Node.js
```
 
Si no tienes Node.js, lo puedes descargar en: **[nodejs.org](https://nodejs.org)** (cierra y abre la terminal.
 
---
 
### 1. Clonar el repositorio
 
```bash
git clone https://github.com/mauplo/Introducci-n-a-Bootstrap.git
cd Introducci-n-a-Bootstrap
```
 
### 2. Crear y activar el entorno virtual de Python
 
```bash
# Crear el .venv
python -m venv .venv
 
# Activar en Windows:
.venv\Scripts\activate
 
# Activar en Mac / Linux:
source .venv/bin/activate
```
 
> Se activa cuando `(.venv)` aparece al inicio de la terminal.
 
### 3. Instalar Django
 
```bash
pip install django
```
 
### 4. Instalar Bootstrap con npm
 
```bash
npm install
```
 
Esto lee `package.json` y descarga Bootstrap (y Bootstrap Icons) en `node_modules/`.
 
> **Si estás empezando desde 0 sin clonar,** usa estos comandos:
> ```bash
> npm init -y
> npm i bootstrap@5.3.8 bootstrap-icons
> ```
 
### 5. Configuración de `settings.py`
 
Agrega estas líneas en `mywebsite/settings.py` justo debajo de `STATIC_URL`:
 
```python
STATIC_URL = 'static/'
 
# Agrega esto para que Django encuentre node_modules: 
STATICFILES_DIRS = [
    BASE_DIR / "node_modules",
]
```
 
Y agrega `myfirstapp` a `INSTALLED_APPS`:
 
```python
INSTALLED_APPS = [
    'myfirstapp',          
    'django.contrib.admin',
    # ... resto de apps de Django
]
```
 
### 6. Aplicar migraciones y correr el servidor
 
```bash
python manage.py migrate
python manage.py runserver
```
 
Abrir **[http://127.0.0.1:8000/myfirstapp/](http://127.0.0.1:8000/myfirstapp/)** en el navegador.
 
---
## Cómo funciona la integración Bootstrap + Django
 
El archivo importante es `base.html`. Todos los demás templates heredan con `{% extends %}`:
 
```html
{% load static %}   ← carga el sistema de estáticos de Django
<!DOCTYPE html>
<html lang="es">
<head>
  <!-- Bootstrap CSS — viene de node_modules/ gracias a STATICFILES_DIRS -->
  <link rel="stylesheet"
        href="{% static 'bootstrap/dist/css/bootstrap.min.css' %}"/>
 
  <!-- Bootstrap Icons -->
  <link rel="stylesheet"
        href="{% static 'bootstrap-icons/font/bootstrap-icons.min.css' %}"/>
</head>
<body>
 
  {% block content %}{% endblock %}
 
  <!-- Bootstrap JS Bundle (incluye Popper.js para modales y dropdowns) -->
  <script src="{% static 'bootstrap/dist/js/bootstrap.bundle.min.js' %}"></script>
 
</body>
</html>
```
 
Los demás templates solo necesitan extender `base.html`:
 
```html
{% extends "myfirstapp/base.html" %}
 
{% block content %}
  <!-- Tu contenido aquí — Bootstrap ya está disponible -->
{% endblock %}
```
 
---
## Recursos
 
| Recurso | URL |
|---|---|
| Documentación oficial Bootstrap | https://getbootstrap.com |
| Bootstrap Icons | https://icons.getbootstrap.com |
| Themes gratuitos | https://bootswatch.com |
| Node.js LTS | https://nodejs.org |
 
---
## Resultado
<img width="1248" height="429" alt="Screenshot 2026-05-04 at 2 51 52 p m" src="https://github.com/user-attachments/assets/f881932a-7b40-4896-bb13-d5dc62cbff62" />
<img width="1239" height="680" alt="Screenshot 2026-05-04 at 2 51 59 p m" src="https://github.com/user-attachments/assets/023dcda9-2fec-4777-b5c9-4f53517faf70" />
<img width="1242" height="545" alt="Screenshot 2026-05-04 at 2 51 43 p m" src="https://github.com/user-attachments/assets/11f81b36-1f14-4d75-aa31-f9e134725a13" />
