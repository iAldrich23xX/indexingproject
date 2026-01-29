## ⚙️ Configurar versión de Node.js

Se recomienda administrar versiones de Node con NVM for Windows:
🔗 [https://github.com/coreybutler/nvm-windows/tree/1.1.12](https://github.com/coreybutler/nvm-windows/tree/1.1.12)

Una vez instalado NVM, asegúrate de usar la versión de Node compatible con el proyecto:

```bash
nvm install [version]
nvm use [version]
```

## 📦 Instalar dependencias

```bash
npm install
```

## 🧑‍💻 Ejecutar en modo desarrollo

```bash
npm run dev
```

## 📁 Estructura recomendada: SCREAMING ARCHITECTURE

```bash
project/
├── src/
│   ├── core/                            # Núcleo principal del sistema
│   │   ├── assets/                      # Recursos estáticos del proyecto
│   │   │   └── images/
│   │   │       ├── icons/               # Iconos SVG o PNG
│   │   │       ├── banners/             # Imágenes para secciones destacadas
│   │   │       ├── illustrations/       # Ilustraciones o gráficos decorativos
│   │   │       └── photos/              # Fotografías o imágenes JPG/WebP
│   │   │
│   │   ├── components/                  # Componentes UI (Atomic Design)
│   │   │   ├── atoms/
│   │   │   ├── molecules/
│   │   │   ├── organisms/
│   │   │   └── templates/
│   │   │
│   │   ├── contexts/                    # Contextos base
│   │   ├── providers/                   # Implementación de contextos
│   │   ├── hooks/                       # Hooks propios del proyecto
│   │   ├── services/                    # Servicios (API, auth, lógica de datos)
│   │   ├── utils/                       # Funciones utilitarias
│   │   ├── data/                        # Datos o mocks locales
│   │   ├── layouts/                     # Layouts principales
│   │   │   ├── PublicLayout.jsx
│   │   │   ├── AuthLayout.jsx
│   │   │   └── PrivateLayout.jsx
│   │   ├── views/                       # Páginas o secciones
│   │   │   ├── auth/
│   │   │   ├── private/
│   │   │   └── public/
│   │   ├── routes/                      # Definición de rutas
│   │   │   └── AppRoutes.jsx
│   │   ├── App.jsx                      # Raíz del núcleo
│   │   └── index.js                     # Punto de entrada del módulo principal
│   │
│   ├── shared/                          # Recursos compartidos
│   │   ├── components/                  # Componentes comunes (botones, inputs, modales)
│   │   ├── hooks/                       # Hooks globales
│   │   ├── utils/                       # Funciones genéricas
│   │   ├── api/                         # Configuración base de API
│   │   └── styles/                      # Estilos globales
│   │
│   ├── store/                           # Estado global (Redux, Zustand, etc.)
│   │   ├── slices/
│   │   └── store.js
│   │
│   ├── index.css                        # Estilos globales
│   └── main.jsx                         # Entrada principal de Vite/React
│
├── test/                                # Pruebas
│   ├── core/
│   ├── shared/
│   └── setupTests.js
│
├── libs/                                # Librerías internas (opcional)
│   ├── ui-kit/                          # Componentes UI reutilizables
│   ├── api-client/                      # Cliente de conexión a la API
│   └── utils/                           # Utilidades exportables
│
├── .editorconfig
├── .env
├── .gitignore
├── .node-version
├── .prettierrc
├── eslint.config.js
├── index.html
├── jsconfig.json
├── package.json
├── README.md
└── vite.config.js
```

## 📄 Autor

**Template para uso personal, cualquiera puede usarlo**
