// EmailJS service configuration para VIPRO
import emailjs from '@emailjs/browser'

// INSTRUCCIONES PARA CONFIGURAR:
// 1. Ve a https://emailjs.com y crea cuenta gratuita
// 2. Conecta Gmail: viprovillavicencio@gmail.com
// 3. Crea template con estas variables: {{from_name}}, {{from_email}}, {{archetype}}, {{travel_dates}}, {{message}}
// 4. Reemplaza los valores temporales abajo

const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_vipro123',
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_contacto',
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key',
}

export interface ContactForm {
  name: string
  email: string
  archetype: string
  dates: string
  message: string
}

export const sendContactEmail = async (formData: ContactForm): Promise<{success: boolean, error?: string}> => {
  // Validación básica
  if (!formData.name || !formData.email || !formData.message) {
    return { success: false, error: 'Campos requeridos faltantes' }
  }

  // Validación de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.email)) {
    return { success: false, error: 'Email inválido' }
  }

  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_email: 'viprovillavicencio@gmail.com',
      archetype: formData.archetype || 'No especificado',
      travel_dates: formData.dates || 'Fechas flexibles',
      message: formData.message,
      reply_to: formData.email,
      timestamp: new Date().toLocaleString('es-CO', { 
        timeZone: 'America/Bogota',
        year: 'numeric',
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    }

    console.log('Enviando email con EmailJS...', { name: formData.name, email: formData.email })
    
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    )

    if (response.status === 200) {
      console.log('✅ Email enviado exitosamente')
      return { success: true }
    } else {
      throw new Error(`EmailJS retornó status: ${response.status}`)
    }
  } catch (error: any) {
    console.error('❌ Error enviando email:', error)
    return { 
      success: false, 
      error: error.message || 'Error desconocido al enviar email'
    }
  }
}

// Función para anti-spam (rate limiting simple)
let lastSubmission = 0
const RATE_LIMIT_MS = 60000 // 1 minuto entre envíos

export const canSubmitForm = (): boolean => {
  const now = Date.now()
  if (now - lastSubmission < RATE_LIMIT_MS) {
    return false
  }
  lastSubmission = now
  return true
}

// Función para verificar la configuración de EmailJS
export const verifyEmailJSConfig = (): { isValid: boolean; errors: string[] } => {
  const errors: string[] = []
  
  if (EMAILJS_CONFIG.SERVICE_ID === 'service_vipro123') {
    errors.push('SERVICE_ID no configurado - usa tu ID real de EmailJS')
  }
  
  if (EMAILJS_CONFIG.TEMPLATE_ID === 'template_contacto') {
    errors.push('TEMPLATE_ID no configurado - usa tu template real de EmailJS')
  }
  
  if (EMAILJS_CONFIG.PUBLIC_KEY === 'your_public_key') {
    errors.push('PUBLIC_KEY no configurado - usa tu clave pública real de EmailJS')
  }
  
  return {
    isValid: errors.length === 0,
    errors
  }
}

// Función para mostrar información de configuración (solo en desarrollo)
export const showConfigStatus = () => {
  if (process.env.NODE_ENV === 'development') {
    const { isValid, errors } = verifyEmailJSConfig()
    
    console.log('🔧 EmailJS Configuration Status:')
    console.log('Service ID:', EMAILJS_CONFIG.SERVICE_ID)
    console.log('Template ID:', EMAILJS_CONFIG.TEMPLATE_ID) 
    console.log('Public Key:', EMAILJS_CONFIG.PUBLIC_KEY.substring(0, 10) + '...')
    console.log('Valid:', isValid ? '✅' : '❌')
    
    if (!isValid) {
      console.log('⚠️ Errors:', errors)
      console.log('📋 Para configurar EmailJS:')
      console.log('1. Ve a https://www.emailjs.com/')
      console.log('2. Configura tu servicio y template')
      console.log('3. Actualiza el archivo .env.local')
    }
  }
}