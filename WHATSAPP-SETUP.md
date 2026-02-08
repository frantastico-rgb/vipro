# 📱 Configuración de WhatsApp para VIPRO

## Estado Actual
❌ **WhatsApp temporalmente deshabilitado** (en espera de número dedicado)

## Cómo Reactivar WhatsApp

### 1. Obtén tu número de WhatsApp
Opciones:
- **A)** WhatsApp Business con tu número personal
- **B)** Número nuevo dedicado (recomendado)

### 2. Actualiza el código

Abre `src/app/conecta/page.tsx` y busca la línea **95**:

```tsx
{/* WhatsApp - Temporalmente deshabilitado */}
```

**Descomenta el bloque** (quita `{/*` y `*/}`) y actualiza el número:

```tsx
<a
  href="https://wa.me/57XXXXXXXXXX?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20VIPRO"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-4 group"
>
```

Reemplaza `57XXXXXXXXXX` con tu número (sin espacios, sin +):
- Ejemplo: `573001234567` para +57 300 123 4567

### 3. Restaura el grid de 2 columnas

En la misma línea **94**, cambia:
```tsx
<div className="flex justify-center mb-12">
```

Por:
```tsx
<div className="grid md:grid-cols-2 gap-6 mb-12">
```

Y en el enlace de videollamada (línea ~120), quita `max-w-md`:
```tsx
className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-4 group"
```

### 4. Commit y deploy
```bash
git add .
git commit -m "Activar WhatsApp con número +57XXX XXX XXXX"
git push
```

Vercel desplegará automáticamente en 2-3 minutos.

---

## Configurar WhatsApp Business (Opción A)

### Pasos:
1. Descarga **WhatsApp Business** (Play Store / App Store)
2. Instálala en el mismo teléfono (funciona junto a WhatsApp normal)
3. Verifica con tu número personal
4. Ve a **Ajustes > Herramientas Para Empresas**
5. Configura:
   - **Perfil de empresa**: VIPRO - Viaja con propósito
   - **Categoría**: Turismo / Agencia de viajes
   - **Horario**: Lun-Dom 8am-8pm (o tu disponibilidad)
   - **Mensaje de ausencia**: "Gracias por contactar VIPRO. Te responderemos pronto."
   - **Mensaje de bienvenida**: "¡Hola! 👋 Gracias por interesarte en VIPRO. ¿En qué experiencia te gustaría embarcarte?"
6. **Etiquetas**: Crea etiquetas para organizar conversaciones:
   - "Casa Luna"
   - "Experiencias"
   - "Consulta general"
   - "Reserva confirmada"

### Ventajas:
✅ Mensajes automáticos
✅ Estadísticas de mensajes
✅ Respuestas rápidas predefinidas
✅ Catálogo de productos (opcional)
✅ Separación visual de chats personales

---

## Comprar Línea Nueva (Opción B)

### Proveedores recomendados:
- **Claro Prepago**: ~$10k COP inicial
- **Movistar Prepago**: ~$10k COP inicial
- **Tigo Prepago**: ~$10k COP inicial

### Consideraciones:
- Mantén saldo para recibir mensajes
- Recarga mínima ~$5k COP/mes
- Guarda el número de forma segura
- Considera portabilidad si cambias de proveedor

---

## Plantillas de Respuestas Rápidas

Una vez activo WhatsApp, configura estas respuestas:

### 1. Saludo inicial
```
¡Hola! 👋 Soy [tu nombre] de VIPRO. ¿Te interesa Casa Luna, alguna experiencia en particular, o quieres saber más sobre cómo viajamos?
```

### 2. Información Casa Luna
```
🏡 Casa Luna es nuestro espacio en Villavicencio:
✓ WiFi 400+ Mbps
✓ Piscina privada
✓ Cocina con Doña Rosa
✓ Desayuno llanero incluido

¿Qué fechas tienes en mente?
```

### 3. Experiencias
```
🌾 Nuestras experiencias incluyen:
• Coleo auténtico con llaneros
• Cocina con Doña Rosa
• Caminatas al amanecer
• Artesanías locales

¿Cuál te llama más la atención?
```

### 4. Precios (cuando definas tarifas)
```
💰 Tarifas Casa Luna:
• Noche individual: $XXX,XXX COP
• Semana completa: $XXX,XXX COP (15% desc.)
• Experiencias: desde $XX,XXX COP

¿Te gustaría más detalles?
```

---

## Notas Importantes

⚠️ **No uses WhatsApp Web inicialmente**: Responde desde el celular para mantener autenticidad y rapidez.

⚠️ **Tiempo de respuesta**: Intenta responder en <24h. La velocidad genera confianza.

⚠️ **Tono**: Mantén el tono cálido y auténtico de VIPRO. No uses scripts muy formales.

⚠️ **Media**: Envía fotos de Casa Luna, experiencias, amaneceres. El contenido visual vende.

---

¿Listo para activar? Solo avisa cuando tengas el número y actualizamos el código.
