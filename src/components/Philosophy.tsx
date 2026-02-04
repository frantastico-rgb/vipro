export default function Philosophy() {
  return (
    <section className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-serif font-bold text-center mb-12 text-vipro-earth">
          ¿Qué es VIPRO?
        </h2>

        <div className="space-y-8 text-lg leading-relaxed text-vipro-night/80">
          <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-vipro-earth first-letter:mr-2 first-letter:float-left">
            VIPRO no es una plataforma de reservas. Es un puente entre mundos. 
            Conectamos a personas que buscan algo más profundo que una foto de Instagram 
            con comunidades auténticas que tienen historias reales para compartir. No 
            turistificamos culturas. Las honramos.
          </p>

          <p>
            Creemos que el mejor trabajo sucede cuando estás inspirado, que las mejores 
            conversaciones nacen alrededor del fuego, y que aprender a hacer arepas con 
            una abuela llanera te enseña más sobre Colombia que cualquier tour en chiva. 
            Aquí, <strong className="text-vipro-earth">buscar es sinónimo de encontrar</strong>.
          </p>

          <p>
            Si eres nómada digital cansado de espacios sin alma, familia que quiere que 
            sus hijos conozcan el país real, o ejecutivo buscando reconectar con tu 
            propósito, este es tu lugar. No prometemos lujo de cinco estrellas. 
            Prometemos experiencias que no olvidarás.
          </p>
        </div>

        {/* Decorative element */}
        <div className="mt-12 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-vipro-earth via-vipro-green to-vipro-sand rounded-full" />
        </div>
      </div>
    </section>
  )
}
