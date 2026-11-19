# Brief — Rediseño en modo oscuro de negocioscondiana.com

Base de contenido: [contexto-sitio-legacy.md](recibido-del-cliente/contexto-sitio-legacy.md) (textos del sitio actual).
Paleta: [02-marca/paleta.md](../02-marca/paleta.md).

## 1. Objetivo

Landing de **una sola página** que vende la masterclass **"Los 7 frenos mentales que te limitan de emprender, aunque en el fondo ya sabes que quieres hacerlo."** y presenta a Diana Yela como mentora.

- **Acción principal:** botón **"Adquirir masterclass"** → https://pay.hotmart.com/I105509477M
- **Acción secundaria:** ver el video de presentación → https://youtu.be/5GOuc1yS-o4
- **Público:** mujeres que quieren emprender, pero se sienten estancadas en un trabajo que no las hace felices o dudan de sí mismas.
- **Precio:** valor regular **USD 267**, valor por tiempo limitado **USD 67**.

## 2. Dirección visual

- **Modo oscuro**, elegante, sobrio y premium. Que transmita calma, enfoque y seguridad.
- Paleta **monocromática azul-gris** (ver `paleta.md`), sin colores de acento.
- El botón principal destaca por **contraste**: botón claro (`#CCD0CF`) con texto oscuro sobre fondos oscuros.
- Mucho espacio, tarjetas con bordes suaves y redondeados, sombras discretas y brillos sutiles.
- Fotos con tratamiento cálido pero integradas al fondo oscuro (duotono suave o viñeta).

## 3. Estructura de la página

| # | Sección | Contenido |
|---|---|---|
| 0 | Cabecera fija | Logotipo de texto "Negocios con Diana" · Inicio · La masterclass · Qué incluye · Sobre Diana · botón "Adquirir masterclass" |
| 1 | Hero | Etiqueta "BIENVENIDA" · título "Naciste para liderar y construir lo tuyo propio, sólo falta ¡Atreverte!" · subtítulo "Los 7 frenos mentales que te están limitando de emprender, aunque en el fondo ya sabes que quieres hacerlo." · botones "Adquirir masterclass" y "Ver video" |
| 2 | Video | Título "Dale clic al video" · reproductor del video de presentación |
| 3 | Para quién es | "¿Te sientes estancada en un trabajo donde no eres feliz, obligada, sin claridad y sin propósito?" |
| 4 | Lo que vas a lograr | Título "Lo que vas a lograr y cómo te vas a SENTIR" · 4 beneficios |
| 5 | Qué incluye | Masterclass · guía "De Distraída a Imparable" · guía "Primero Crees en ti" · video "El Juego de la Vida" |
| 6 | Oferta | Precio regular tachado USD 267 → **USD 67** "por tiempo limitado" · botón principal |
| 7 | Sobre Diana | Foto · bio · propósito · cifras (6 años · 7 frenos · 3 bonos) |
| 8 | Cierre | Mensaje emocional final + botón principal |
| 9 | Pie | Logotipo · YouTube · contacto · Privacidad · Términos · © Negocios con Diana |

## 4. Textos

- Tomar los textos del sitio actual y pulirlos. Corregir "Dístraída" → **"Distraída"**.
- Hablar de tú y en femenino.
- Un solo llamado a la acción, repetido: **"Adquirir masterclass"** (cabecera, hero, oferta y cierre).

## 5. Requisitos técnicos

- HTML/CSS estático, **mobile first** y responsive (360, 768 y 1280 px).
- Contraste mínimo AA: textos largos en `#CCD0CF` o `#9BA8AB`; nunca texto en `#4A5C6A`.
- Imágenes en WebP; el video de YouTube se carga solo al hacer clic.
- SEO básico: título, descripción e imagen para compartir propios; `alt` descriptivos.
- `lang="es"` y animaciones suaves que respeten `prefers-reduced-motion`.

## 6. Pendientes del cliente

- [ ] Logo (por ahora, logotipo de texto)
- [ ] Testimonios
- [ ] Contacto (correo, WhatsApp) y redes sociales (solo se conoce YouTube @dianayelamesias)
- [ ] Vigencia de la oferta de USD 67
- [ ] Políticas legales (privacidad, términos, devoluciones)
