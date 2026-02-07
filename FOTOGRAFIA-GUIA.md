# 📸 Guía de Fotografías para VIPRO

## 🎯 Sistema Flexible

Este sistema está diseñado para ser **completamente flexible**:
- ✅ Empieza con **3 fotos** prioritarias
- ✅ Agrega más fotos cuando quieras (5, 10, 20+)
- ✅ No necesitas tocar código - solo copiar archivos
- ✅ Automáticamente optimizadas por Next.js

---

## 📷 LAS 3 FOTOS PRIORITARIAS (Para empezar YA)

### 1️⃣ **Exterior de Casa Luna** (`exterior-principal.jpg`)
**Prioridad:** 🔴 CRÍTICA  
**Dónde se usa:** Página Casa Luna, Hero section  
**Qué mostrar:**
- Vista frontal o lateral de Casa Luna
- Iluminación natural (golden hour ideal: 6-7am o 5-6pm)
- Debe verse acogedora, auténtica, no turística
- **Dimensiones recomendadas:** 1920×1080 px mínimo

**Tips:**
- Evita sombras fuertes al mediodía
- Incluye algo de jardín/naturaleza alrededor
- Horizontal (landscape), no vertical

---

### 2️⃣ **Cocina con Doña Rosa** (`cocina-experiencia.jpg`)
**Prioridad:** 🟠 ALTA  
**Dónde se usa:** Página Casa Luna, Experiencias, Cards  
**Qué mostrar:**
- Doña Rosa cocinando o preparando algo
- Ingredientes llaneros visibles (plátanos, yuca, carne, etc.)
- Cocina rústica/auténtica (no posed, natural)
- **Dimensiones recomendadas:** 1200×800 px mínimo

**Tips:**
- Captura acción real, no pose estática
- Luz natural de la cocina
- Primeros planos de manos cocinando funcionan genial

---

### 3️⃣ **Vista de los Llanos** (`llanos-paisaje.jpg`)
**Prioridad:** 🟠 ALTA  
**Dónde se usa:** Hero alternativo, Página Casa Luna, Footer  
**Qué mostrar:**
- Paisaje amplio de los llanos orientales
- Atardecer/amanecer ideal (cielos dramáticos)
- Sabana abierta, horizonte amplio
- **Dimensiones recomendadas:** 1920×1080 px mínimo (panorámica mejor)

**Tips:**
- Regla de tercios: cielo 2/3, tierra 1/3 (o viceversa)
- Incluye elemento de interés (árbol, caballo, silueta)
- Golden hour es clave aquí

---

## 📂 Cómo Agregar las Fotos

### Paso 1: Prepara las fotos
```bash
# Renombra tus fotos así:
exterior-principal.jpg      # Foto 1
cocina-experiencia.jpg      # Foto 2  
llanos-paisaje.jpg          # Foto 3
```

### Paso 2: Copia a la carpeta correcta
```
vipro-web/public/images/casa-luna/
├── exterior-principal.jpg      ✅ Copiar aquí
├── cocina-experiencia.jpg      ✅ Copiar aquí
└── llanos-paisaje.jpg          ✅ Copiar aquí
```

### Paso 3: Listo! 🎉
Las fotos aparecerán automáticamente en el sitio. No necesitas cambiar código.

---

## 🎨 FOTOS ADICIONALES (Cuando tengas tiempo)

### Para Casa Luna (prioridad media)
```
public/images/casa-luna/
├── habitacion-1.jpg         # Habitación ejemplo
├── habitacion-2.jpg         # Otra habitación
├── coworking.jpg            # Espacio de trabajo
├── exterior-noche.jpg       # Casa de noche
├── jardin.jpg               # Jardín/exteriores
├── comedor.jpg              # Área común
└── detalle-arquitectura.jpg # Detalles rústicos
```

### Para Experiencias (opcional)
```
public/images/experiencias/
├── dominion-natura.jpg      # Juego de mesa
├── cabalgata.jpg            # Caballos/paseo
├── ekine-taller.jpg         # Taller creativo
├── la-palabra.jpg           # Sesión de escritura
└── grupo-viajeros.jpg       # Personas compartiendo
```

---

## ⚙️ Especificaciones Técnicas

### Formatos aceptados
- ✅ JPG/JPEG (recomendado para fotos)
- ✅ PNG (si necesitas transparencia)
- ✅ WebP (óptimo, pero JPG es suficiente)

### Tamaños recomendados
| Uso | Resolución mínima | Peso máximo |
|-----|------------------|-------------|
| Hero/Fondo | 1920×1080 px | 500 KB |
| Cards | 800×600 px | 200 KB |
| Thumbnails | 400×300 px | 100 KB |

### Optimización (opcional pero recomendado)
Antes de subir, optimiza con:
- **TinyPNG.com** - Comprime sin perder calidad
- **Squoosh.app** - Herramienta de Google
- O simplemente súbelas así y Next.js las optimiza automáticamente

---

## 🚀 Despliegue en Vercel

Una vez que agregues las fotos:

```bash
# 1. Commit al repositorio
git add public/images/
git commit -m "Add Casa Luna photos"
git push

# 2. Vercel automáticamente re-deploya (2-3 mins)

# 3. ¡Listo! Las fotos estarán en producción
```

---

## ❓ FAQ

**P: ¿Puedo agregar más de 3 fotos después?**  
R: ¡Sí! Solo copia más archivos a la carpeta. El sistema es infinitamente escalable.

**P: ¿Qué pasa si no tengo todas las fotos ahora?**  
R: No hay problema. Usa el placeholder temporal (se muestra automáticamente).

**P: ¿Necesito cambiar código cuando agregue fotos?**  
R: No. Solo agrega archivos con nombres descriptivos.

**P: ¿Puedo usar mi celular para las fotos?**  
R: ¡Absolutamente! Celulares modernos (2020+) tienen excelente calidad. 
   Tips: Limpia el lente, usa luz natural, no uses zoom digital.

**P: ¿Las fotos se optimizan automáticamente?**  
R: Sí. Next.js las convierte a WebP, las comprime, y sirve desde CDN.

---

## 📞 ¿Necesitas ayuda?

Si tienes dudas al agregar las fotos, revisa que:
1. Estén en `/public/images/casa-luna/`
2. Tengan extensión `.jpg`, `.jpeg` o `.png`
3. No tengan espacios en el nombre (usa guiones: `mi-foto.jpg`)
4. No sean demasiado pesadas (< 2MB ideal)

---

**Creado:** Feb 7, 2026  
**Última actualización:** Feb 7, 2026
