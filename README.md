# Clase UX — Rediseño de Negocios con Diana (modo oscuro)

Proyecto de práctica de nniklab: rediseño desde cero de la landing **negocioscondiana.com**, en **modo oscuro**, con una paleta monocromática azul-gris.

## Estructura

| Carpeta | Contenido |
|---|---|
| `01-contexto` | Brief del rediseño y material del cliente (`recibido-del-cliente`: textos del sitio actual y foto de Diana, sin modificar) |
| `02-marca` | Paleta de colores, tipografía y referencias visuales |
| `03-diseno` | Prompt para Google Stitch y exportaciones de Stitch (`insumos-ux/web`, `insumos-ux/celular`) |
| `04-imagenes` | Fotos e ilustraciones preparadas para el modo oscuro |
| `05-sitio` | Sitio construido: `index.html`, `css/`, `js/`, `img/` |

## Enlaces

- **Sitio publicado (prueba):** https://nniklab.github.io/clase_ux/
- **Vista previa en Claude Design:** https://claude.ai/artifact/33LTKyE76RhoWP6NVrhJCA

El sitio se publica solo: cada cambio en `05-sitio` dentro de `main` actualiza la rama `gh-pages`, que es la que sirve GitHub Pages.

## Flujo de trabajo

1. Leer el [brief](01-contexto/brief.md) y la [paleta](02-marca/paleta.md).
2. Generar el diseño en Google Stitch con el [prompt](03-diseno/prompt-stitch.md).
3. Exportar de Stitch la versión web y la de celular a `03-diseno/insumos-ux/`.
4. Preparar las imágenes en `04-imagenes`.
5. Construir el sitio responsive en `05-sitio`.

## Estado

- [x] Estructura de carpetas
- [x] Brief, paleta y prompt para Stitch
- [x] Diseño en Stitch (web y celular), en `03-diseno/insumos-ux`
- [x] Vista previa en Claude Design
- [x] Sitio v0.1 construido y publicado en prueba (`noindex`)
- [ ] Datos pendientes del cliente: correo, redes, políticas, vigencia de la oferta
