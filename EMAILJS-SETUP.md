# 📧 Configuración EmailJS para VIPRO

## 🚀 Pasos para Activar el Formulario

### PASO 1: Crear Cuenta EmailJS (GRATIS)

1. **Ve a:** https://emailjs.com
2. **Crea cuenta** con `viprovillavicencio@gmail.com`
3. **Verifica** tu email

### PASO 2: Conectar Gmail

1. **Dashboard → Email Services → Add Service**
2. **Selecciona "Gmail"**
3. **Autoriza** acceso a `viprovillavicencio@gmail.com`
4. **Copia el SERVICE_ID** (ej: `service_abc123`)

### PASO 3: Crear Template de Email

1. **Dashboard → Email Templates → Create Template**
2. **Nombre:** "VIPRO Contacto"
3. **Template HTML:**

```html
<h2>Nuevo contacto desde VIPRO 🌿</h2>

<p><strong>Nombre:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Perfil:</strong> {{archetype}}</p>
<p><strong>Fechas deseadas:</strong> {{travel_dates}}</p>

<h3>Mensaje:</h3>
<p>{{message}}</p>

<hr>
<p><small>Enviado el: {{timestamp}}</small></p>
<p><small>Responder a: {{reply_to}}</small></p>
```

4. **Configuración:**
   - **To Email:** `viprovillavicencio@gmail.com`
   - **From Name:** `VIPRO Website`
   - **Subject:** `🌿 Nuevo viajero interesado - {{from_name}}`

5. **Copia el TEMPLATE_ID** (ej: `template_xyz789`)

### PASO 4: Obtener Public Key

1. **Dashboard → Account → General**
2. **Copia "Public Key"** (ej: `user_abc123xyz`)

### PASO 5: Actualizar Código

En: `src/lib/emailService.ts` líneas 8-12:

```typescript
const EMAILJS_CONFIG = {
  SERVICE_ID: 'TU_SERVICE_ID_AQUÍ',     // 🔧 Cambiar
  TEMPLATE_ID: 'TU_TEMPLATE_ID_AQUÍ',   // 🔧 Cambiar  
  PUBLIC_KEY: 'TU_PUBLIC_KEY_AQUÍ',     // 🔧 Cambiar
}
```

### PASO 6: Probar el Formulario

1. **Guarda** los cambios en `emailService.ts`
2. **Ve a:** http://localhost:3000/conecta
3. **Llena** el formulario de prueba
4. **Envía** y verifica que llegue el email

---

## ✅ Verificación

Si todo está bien configurado:
- ✅ Formulario muestra "Mensaje enviado exitosamente"
- ✅ Email llega a `viprovillavicencio@gmail.com`
- ✅ Console de navegador muestra: "Email enviado exitosamente"

Si hay errores:
- ❌ Revisa SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY
- ❌ Verifica que Gmail esté autorizado en EmailJS
- ❌ Verifica que el template tenga todas las variables

---

## 🔒 Seguridad Incluida

- ✅ **Rate limiting:** Máximo 1 envío por minuto
- ✅ **Validación:** Email válido requerido
- ✅ **Anti-spam:** Campos requeridos validados
- ✅ **Sanitización:** Datos limpiados antes de envío

---

## 💡 Límites Gratuitos

**EmailJS Gratis:**
- 📧 200 emails/mes
- 🔒 HTTPS incluido
- 📊 Dashboard con estadísticas

**Suficiente para:** Validar VIPRO con primeros 50-100 prospectos

---

¿Necesitas ayuda configurando? ¡Solo pregunta! 🚀