# Paleta — modo oscuro

Referencia: [referencias/paleta-oscura.png](referencias/paleta-oscura.png).
Escala monocromática azul-gris, sin colores de acento.

| Token | Hex | Rol |
|---|---|---|
| `--fondo` | `#06141B` | Fondo principal de la página |
| `--fondo-alterno` | `#11212D` | Secciones alternas, cabecera, pie |
| `--superficie` | `#253745` | Tarjetas, bloques destacados, campos |
| `--borde` | `#4A5C6A` | Bordes, divisores, íconos inactivos. **No usar para texto** |
| `--texto-secundario` | `#9BA8AB` | Párrafos, descripciones, etiquetas |
| `--texto` | `#CCD0CF` | Títulos, textos importantes, botón principal (fondo) |

## Botones

- **Principal ("Adquirir masterclass"):** fondo `#CCD0CF`, texto `#06141B`, forma de píldora. Hover: fondo `#FFFFFF`.
- **Secundario ("Ver video"):** fondo transparente, borde `#9BA8AB`, texto `#CCD0CF`.

## Contraste (WCAG)

| Texto | Sobre `#06141B` | Sobre `#11212D` | Sobre `#253745` |
|---|---|---|---|
| `#CCD0CF` | 12,0 ✅ | 10,5 ✅ | 7,9 ✅ |
| `#9BA8AB` | 7,6 ✅ | 6,7 ✅ | 5,0 ✅ |
| `#4A5C6A` | 2,7 ❌ | 2,4 ❌ | 1,8 ❌ |

Texto `#06141B` sobre botón `#CCD0CF`: 12,0 ✅.

## Tipografía

- **Títulos:** Playfair Display 600/700 (elegante, editorial).
- **Textos:** Inter 400/500.
- **Etiquetas:** Inter 600, mayúsculas, 12 px, espaciado 0,12em.

## Opción a evaluar

Si en pruebas el botón principal no destaca lo suficiente, agregar **un solo acento cálido** (por ejemplo, dorado suave `#C9A76A`) únicamente para el botón principal y el precio.
