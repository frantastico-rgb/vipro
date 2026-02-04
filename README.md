# 🌿 VIPRO - Plataforma Web

**Donde el viaje y la vida se encuentran**

Plataforma web para VIPRO, conectando viajeros conscientes con experiencias llaneras auténticas en Colombia.

---

## 🚀 Quick Start

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación Local

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar en modo desarrollo
npm run dev

# 3. Abrir navegador en http://localhost:3000
```

---

## 📁 Estructura del Proyecto

```
vipro-web/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout principal con SEO
│   │   ├── page.tsx             # Home page
│   │   ├── globals.css          # Estilos globales
│   │   ├── casa-luna/
│   │   │   └── page.tsx         # Página Casa Luna
│   │   └── conecta/
│   │       └── page.tsx         # Página de contacto
│   └── components/
│       ├── Navbar.tsx           # Navegación responsive
│       ├── Footer.tsx           # Footer con enlaces
│       ├── Hero.tsx             # Hero con video
│       ├── Philosophy.tsx       # Sección filosofía
│       ├── Archetypes.tsx       # Arquetipos de usuario
│       └── HowItWorks.tsx       # Timeline cómo funciona
├── public/                      # Archivos estáticos (agregar imágenes aquí)
├── package.json
├── tailwind.config.js           # Configuración Tailwind con colores VIPRO
├── tsconfig.json
└── next.config.js
```

---

## 🎨 Sistema de Colores

El proyecto usa una paleta inspirada en los Llanos Orientales:

```js
vipro: {
  earth: '#8B6F47',    // Tierra de llanos
  green: '#4A6741',    // Verde sabana
  sand: '#D4A574',     // Arena/ocre
  sky: '#87CEEB',      // Cielo llanero
  night: '#1A1A2E',    // Noche estrellada
  warm: '#F4E4C1',     // Cálido acogedor
}
```

---

## 🔧 Configuración para Producción

### Deploy en Vercel (RECOMENDADO)

1. **Crea cuenta en Vercel** (gratis): https://vercel.com

2. **Conecta tu repositorio Git**:
   ```bash
   # Inicializa Git
   git init
   git add .
   git commit -m "Initial VIPRO website"
   
   # Sube a GitHub/GitLab
   git remote add origin TU_REPO_URL
   git push -u origin main
   ```

3. **Import en Vercel**:
   - Ve a Vercel Dashboard
   - Click "New Project"
   - Selecciona tu repositorio
   - Vercel detecta automáticamente Next.js
   - Click "Deploy"

4. **Dominio custom**:
   - En Vercel Dashboard > Settings > Domains
   - Agrega: vipro.co o vipro.travel
   - Vercel te dará instrucciones DNS

**¡Listo! Tu sitio estará en vivo en minutos con HTTPS automático.**

---

## 📝 Siguientes Pasos

### Fase 1: Contenido Real (Esta semana)

1. **Reemplaza el video de Casa Luna**:
   - En `src/components/Hero.tsx` línea 16
   - En `src/app/casa-luna/page.tsx` línea 62
   - Cambia `unD1svXKzC8` por tu ID de YouTube real

2. **Agrega fotos reales**:
   ```bash
   # Coloca imágenes en /public/images/
   /public/images/casa-luna-1.jpg
   /public/images/experiencia-cocina.jpg
   /public/images/cabalgata.jpg
   ```

3. **Actualiza textos**:
   - Revisa `src/components/Philosophy.tsx` - ajusta los 3 párrafos
   - Revisa `src/components/Archetypes.tsx` - personaliza arquetipos
   - Actualiza contactos en `src/components/Footer.tsx`

### Fase 2: Funcionalidades (Próximas 2-4 semanas)

4. **Integra emails reales** en formulario de contacto:
   - Opción A: [Resend](https://resend.com) (gratis para 3k emails/mes)
   - Opción B: [SendGrid](https://sendgrid.com)
   - Implementa en `/src/app/api/contact/route.ts`

5. **Agrega Analytics**:
   ```bash
   # Vercel Analytics (recomendado)
   npm install @vercel/analytics
   ```
   Agrega en `src/app/layout.tsx`:
   ```tsx
   import { Analytics } from '@vercel/analytics/react'
   
   // Dentro del <body>
   <Analytics />
   ```

6. **Crea más páginas**:
   - `/experiencias` - Listado de experiencias culturales
   - `/historias` - Blog con testimonios de viproadores

### Fase 3: Escalabilidad (Mes 2-3)

7. **CMS para contenido**:
   - [Sanity.io](https://sanity.io) (gratis hasta 3 usuarios)
   - [Contentful](https://contentful.com)
   - Permite actualizar experiencias sin código

8. **Sistema de reservas** (cuando tengas 10+ solicitudes/mes):
   - [Cal.com](https://cal.com) (open source)
   - O custom con [Stripe](https://stripe.com)

9. **Dashboard de comunidad** (para alumni):
   - Sección privada con autenticación
   - [NextAuth.js](https://next-auth.js.org)

---

## 🛠 Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Test producción localmente
npm run start

# Linting
npm run lint
```

---

## 🎯 Métricas de Éxito

**Semana 1:**
- [ ] Sitio en vivo con dominio custom
- [ ] Video real de Casa Luna integrado
- [ ] Al menos 3 fotos auténticas
- [ ] Enlaces de contacto (WhatsApp, email) funcionales

**Mes 1:**
- [ ] Primera conversación agendada desde el sitio
- [ ] Primeros 100 visitantes únicos
- [ ] Analytics instalado y monitoreando

**Mes 3:**
- [ ] Primera reserva generada desde el sitio
- [ ] 3-5 testimonios de viproadores publicados
- [ ] Tráfico orgánico desde Google (SEO trabajando)

---

## 🌟 Diferenciadores de Esta Arquitectura

### Por qué es escalable:
✅ **Next.js App Router**: Renderizado del lado del servidor = SEO perfecto
✅ **TypeScript**: Menos bugs, mejor experiencia de desarrollo
✅ **Tailwind CSS**: Styling rápido sin CSS separado
✅ **Vercel**: Deploy automático, edge functions, analytics integrado
✅ **Component-based**: Cada sección es reutilizable y mantenible

### Por qué es flexible:
✅ **Sin vendor lock-in**: Puedes migrar a otro hosting si necesitas
✅ **API routes incluidas**: Backend integrado para formularios, pagos, etc.
✅ **Optimización automática**: Imágenes, fuentes, code splitting
✅ **Mobile-first**: Diseño responsive desde el inicio

---

## 💡 Tips Prácticos

### Optimización de Imágenes
```tsx
import Image from 'next/image'

<Image 
  src="/images/casa-luna.jpg" 
  alt="Casa Luna"
  width={800}
  height={600}
  priority  // Para hero images
/>
```

### Variables de entorno
Crea `.env.local` para secretos:
```
RESEND_API_KEY=tu_api_key
NEXT_PUBLIC_CALENDLY_URL=tu_url
```

### Testing local del build
```bash
npm run build && npm start
```
Esto simula producción localmente.

---

## 🆘 Troubleshooting

**Error: "Module not found"**
```bash
rm -rf node_modules .next
npm install
npm run dev
```

**Video no carga**
- Verifica que el ID de YouTube sea correcto
- Asegúrate que el video sea público

**Formulario no envía**
- Por ahora está simulado (setTimeout)
- Necesitas integrar servicio real de email

---

## 📞 Soporte

¿Necesitas ayuda con algo específico?
- Deploy
- Integración de pagos
- CMS setup
- Custom features

**Solo pregunta.** Esto es un organismo vivo y co-creamos juntos.

---

## 🙏 Filosofía del Código

Este código está escrito con la misma intención que VIPRO:
- **Auténtico**: Sin librerías innecesarias
- **Escalable**: Crece contigo orgánicamente
- **Consciente**: Optimizado pero no sobre-engineered
- **Accesible**: Comentado para que cualquier dev lo entienda

El mejor código es el que sirve al propósito. Este sirve a conectar personas.

---

**¿Listo para lanzar?** 🚀

```bash
npm install && npm run dev
```

Bienvenido a VIPRO. Donde buscar es sinónimo de encontrar.
