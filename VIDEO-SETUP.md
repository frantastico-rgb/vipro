# 📹 Configuración del Video de VIPRO

## Problema Actual
El video con ID `unD1svXKzC8` muestra "This video is unavailable" por alguna de estas razones:

### Posibles Causas:
1. **Video privado o no listado** - El video no es público
2. **Restricciones geográficas** - El video está bloqueado en Colombia
3. **Restricciones de embed** - YouTube no permite embed de este video
4. **Video eliminado** - El video fue removido por el propietario
5. **Derechos de autor** - YouTube bloqueó el contenido

## ✅ Solución Implementada

### Cambios Realizados:
1. **Video temporal funcional** mientras configuras el tuyo
2. **Fallback con gradiente** si no carga ningún video
3. **Overlay más suave** (40% en lugar de 60%) para destacar el logo
4. **Logo más prominente** con efectos de resplandor

### Para Configurar tu Video Real:

1. **Verifica que tu video sea público:**
   - Ve a YouTube Studio
   - Selecciona tu video
   - En "Visibilidad" debe estar como "Público"

2. **Habilita embed:**
   - En configuración del video
   - Marca "Permitir inserción"

3. **Obtén el ID correcto:**
   ```
   URL: https://www.youtube.com/watch?v=TU_VIDEO_ID
   ID:  TU_VIDEO_ID (solo la parte después de v=)
   ```

4. **Reemplaza en el código:**
   ```tsx
   // En src/components/Hero.tsx línea ~15
   src="https://www.youtube.com/embed/TU_VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=TU_VIDEO_ID&controls=0&showinfo=0&rel=0&modestbranding=1"
   ```

## 🎨 Mejoras Adicionales al Logo

### Logo ahora incluye:
- **Tamaño más grande** (xl = 32x32 → 40x40 en móvil)
- **Efectos de resplandor** con filtros SVG
- **Halo animado** que hace pulse
- **Hover effects** con transiciones suaves
- **Drop shadow mejorado** para más contraste

### En el navbar:
- **Tamaño aumentado** (md → lg)
- **Hover effect** para interactividad
- **Drop shadow** para más presencia

¿Te gustaría que pruebe con otro video público mientras conseguimos el tuyo?