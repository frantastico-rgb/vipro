'use client'

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Send, MessageCircle, CheckCircle, AlertCircle, Clock } from 'lucide-react'
import { sendContactEmail, canSubmitForm, verifyEmailJSConfig, showConfigStatus, type ContactForm } from '@/lib/emailService'

export default function Conecta() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    archetype: '',
    dates: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'rate-limit'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  // Verificar configuración de EmailJS en desarrollo
  React.useEffect(() => {
    showConfigStatus()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Anti-spam: verificar rate limiting
    if (!canSubmitForm()) {
      setSubmitStatus('rate-limit')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')
    
    try {
      console.log('🚀 Iniciando envío de formulario VIPRO...')
      
      const result = await sendContactEmail(formData as ContactForm)
      
      if (result.success) {
        console.log('✅ Formulario enviado exitosamente')
        setSubmitStatus('success')
        // Limpiar formulario después del éxito
        setFormData({ name: '', email: '', archetype: '', dates: '', message: '' })
      } else {
        console.error('❌ Error en envío:', result.error)
        setSubmitStatus('error')
        setErrorMessage(result.error || 'Error desconocido')
      }
    } catch (error: any) {
      console.error('❌ Error inesperado:', error)
      setSubmitStatus('error')
      setErrorMessage('Error inesperado. Intenta nuevamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
    
    // Resetear status al cambiar campos
    if (submitStatus === 'error' || submitStatus === 'rate-limit') {
      setSubmitStatus('idle')
    }
  }

  return (
    <main>
      <Navbar />
      
      <section className="pt-24 pb-12 bg-gradient-to-b from-vipro-warm to-white min-h-screen">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-serif font-bold mb-6 text-vipro-earth">
                Conversemos
              </h1>
              <p className="text-xl text-vipro-night/70 max-w-2xl mx-auto leading-relaxed">
                VIPRO no es para todos, y eso está bien. Queremos conocerte antes de que reserves. 
                Cuéntanos sobre ti y tu intención de viaje.
              </p>
            </div>

            {/* Opciones de contacto */}
            <div className="flex justify-center mb-12">
              {/* WhatsApp - Temporalmente deshabilitado */}
              {/* <a
                href="https://wa.me/573001234567?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20VIPRO"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-vipro-earth group-hover:text-green-600 transition-colors">
                    WhatsApp Directo
                  </h3>
                  <p className="text-sm text-vipro-night/60">
                    Respuesta en menos de 24h
                  </p>
                </div>
              </a> */}

              {/* Video call */}
              <a
                href="https://calendly.com/viprovillavicencio/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-4 group max-w-md"
              >
                <div className="w-12 h-12 rounded-full bg-vipro-earth flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-vipro-earth group-hover:text-vipro-green transition-colors">
                    Agenda Videollamada
                  </h3>
                  <p className="text-sm text-vipro-night/60">
                    15 min para conocernos
                  </p>
                </div>
              </a>
            </div>

            {/* Formulario */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-vipro-earth">
                O escríbenos aquí
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-vipro-night mb-2">
                    ¿Cómo te llamas?
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 border border-vipro-sand/50 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-vipro-earth transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-vipro-night mb-2">
                    Tu email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 border border-vipro-sand/50 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-vipro-earth transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Arquetipo */}
                <div>
                  <label htmlFor="archetype" className="block text-sm font-medium text-vipro-night mb-2">
                    ¿Con cuál perfil te identificas más?
                  </label>
                  <select
                    id="archetype"
                    name="archetype"
                    value={formData.archetype}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-vipro-sand/50 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-vipro-earth transition-all"
                  >
                    <option value="" className="text-gray-400 dark:text-gray-500">Selecciona una opción</option>
                    <option value="nomad">Nómada Digital</option>
                    <option value="family">Familia Aventurera</option>
                    <option value="executive">Ejecutivo en Búsqueda</option>
                    <option value="corporate">Grupo Corporativo</option>
                    <option value="other">Otro (cuéntame en el mensaje)</option>
                  </select>
                </div>

                {/* Fechas */}
                <div>
                  <label htmlFor="dates" className="block text-sm font-medium text-vipro-night mb-2">
                    ¿Cuándo te gustaría venir? (aproximado)
                  </label>
                  <input
                    type="text"
                    id="dates"
                    name="dates"
                    value={formData.dates}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 border border-vipro-sand/50 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-vipro-earth transition-all"
                    placeholder="Ej: Marzo 2026, 2 semanas"
                  />
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-vipro-night mb-2">
                    Cuéntanos más sobre ti y tu intención de viaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 border border-vipro-sand/50 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-vipro-earth transition-all resize-none"
                    placeholder="¿Qué buscas en esta experiencia? ¿Qué te atrajo de VIPRO?"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting || submitStatus === 'rate-limit'}
                  className={`w-full flex items-center justify-center gap-2 font-medium px-8 py-3 rounded-lg transition-all duration-300 ${
                    isSubmitting || submitStatus === 'rate-limit'
                      ? 'bg-gray-400 cursor-not-allowed opacity-50'
                      : 'btn-primary hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                      Enviando mensaje...
                    </>
                  ) : submitStatus === 'rate-limit' ? (
                    <>
                      <Clock size={18} />
                      Espera 1 minuto entre envíos
                    </>
                  ) : (
                    <>
                      Enviar mensaje
                      <Send size={18} />
                    </>
                  )}
                </button>

                {/* Status messages mejorados */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <div className="text-green-800">
                      <p className="font-semibold">¡Mensaje enviado exitosamente! 🎉</p>
                      <p className="text-sm mt-1">
                        Tu mensaje ha sido recibido correctamente. 
                        Te responderemos en menos de 24 horas.
                      </p>
                    </div>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                    <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                    <div className="text-red-800">
                      <p className="font-semibold">Error al enviar mensaje</p>
                      <p className="text-sm mt-1">
                        {errorMessage || 'Hubo un problema técnico. Por favor intenta agendar una videollamada.'}
                      </p>
                    </div>
                  </div>
                )}

                {submitStatus === 'rate-limit' && (
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-3">
                    <Clock size={20} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div className="text-yellow-800">
                      <p className="font-semibold">Calma, viajero consciente 🌱</p>
                      <p className="text-sm mt-1">
                        Para evitar spam, permite 1 minuto entre envíos. 
                        Mientras tanto, puedes agendar una videollamada.
                      </p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
