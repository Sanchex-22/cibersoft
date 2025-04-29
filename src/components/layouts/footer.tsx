import { Link } from "react-router-dom"

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-[#0D0D21] text-white">
      {/* Sección principal del footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Columna 1: Logo e información */}
          <div className="mb-8 md:mb-0">
            <h3 className="font-display text-2xl font-bold text-white transition-all duration-300 hover:scale-110 inline-block">
              Carlos Sanchez
            </h3>
            <p className="mt-4 text-gray-400 max-w-xs">
              Desarrollador web especializado en crear experiencias digitales modernas y funcionales.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-indigo-600"
                aria-label="Twitter"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-indigo-600"
                aria-label="GitHub"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-indigo-600"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a 
                href="mailto:contacto@ejemplo.com"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-indigo-600"
                aria-label="Email"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" className="inline-block transition-colors hover:text-indigo-400">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="#about" className="inline-block transition-colors hover:text-indigo-400">
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link to="#projects" className="inline-block transition-colors hover:text-indigo-400">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link to="#services" className="inline-block transition-colors hover:text-indigo-400">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="#contact" className="inline-block transition-colors hover:text-indigo-400">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Columna 3: Servicios */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/services/web-development" className="inline-block transition-colors hover:text-indigo-400">
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link to="/services/ui-design" className="inline-block transition-colors hover:text-indigo-400">
                  Diseño UI/UX
                </Link>
              </li>
              <li>
                <Link to="/services/mobile-apps" className="inline-block transition-colors hover:text-indigo-400">
                  Aplicaciones Móviles
                </Link>
              </li>
              <li>
                <Link to="/services/consulting" className="inline-block transition-colors hover:text-indigo-400">
                  Consultoría
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Columna 4: Contacto */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Contacto</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <svg className="mr-3 h-5 w-5 text-indigo-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Ciudad, País</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-3 h-5 w-5 text-indigo-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contacto@ejemplo.com</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-3 h-5 w-5 text-indigo-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+1 (123) 456-7890</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Barra inferior con copyright */}
      <div className="border-t border-white/10 bg-[#080814]">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <p className="text-center text-sm text-gray-400 md:text-left">
              © {currentYear} Carlos Sanchez. Todos los derechos reservados.
            </p>
            <div className="mt-4 flex justify-center space-x-6 md:mt-0">
              <a href="/privacy" className="text-sm text-gray-400 transition-colors hover:text-indigo-400">
                Política de Privacidad
              </a>
              <a href="/terms" className="text-sm text-gray-400 transition-colors hover:text-indigo-400">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer