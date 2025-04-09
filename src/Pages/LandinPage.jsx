import { useState } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDownload = () => {
    // Direct download URL
    const downloadLink = 'https://inovaoptimize.com/exe/chronis-v2%20Setup%201.0.0.exe';

    // Create a link element to trigger the download
    const link = document.createElement("a");
    link.href = downloadLink;
    link.download = 'chronis-v2 Setup 1.0.0.exe'; // Suggest a filename
    // Don't use target="_blank" since that opens a new tab
    document.body.appendChild(link);
    link.click();

    // Clean up
    setTimeout(() => {
      document.body.removeChild(link);
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-xl font-bold text-black">Cronis</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link to="#features" className="text-gray-600 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition duration-300">Características</Link>
              <Link to="#how-it-works" className="text-gray-600 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition duration-300">Cómo Funciona</Link>
              <Link to="#pricing" className="text-gray-600 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition duration-300">Precios</Link>
              <Link to="/login" className="text-black border border-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition duration-300">Versión Web</Link>
              <button onClick={handleDownload} className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition duration-300">Descargar App</button>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none transition duration-300"
              >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="#features" className="text-gray-600 hover:text-black block px-3 py-2 rounded-md text-base font-medium transition duration-300">Características</Link>
              <Link to="#how-it-works" className="text-gray-600 hover:text-black block px-3 py-2 rounded-md text-base font-medium transition duration-300">Cómo Funciona</Link>
              <Link to="#pricing" className="text-gray-600 hover:text-black block px-3 py-2 rounded-md text-base font-medium transition duration-300">Precios</Link>
              <Link to="/login" className="text-black border border-black block px-4 py-2 rounded-md text-base font-medium hover:bg-gray-100 transition duration-300">Versión Web</Link>
              <button onClick={handleDownload} className="bg-black text-white w-full px-4 py-2 rounded-md text-base font-medium hover:bg-gray-800 text-center transition duration-300">Descargar App</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center lg:text-left py-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-black sm:text-5xl md:text-6xl">
              <span className="block">Gestiona tus tareas con</span>
              <span className="block text-black">asistencia inteligente</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 sm:mt-6 sm:text-xl sm:max-w-xl sm:mx-auto lg:mx-0">
              Cronis te ayuda a gestionar tus tareas de manera más eficiente con priorización impulsada por IA, recordatorios inteligentes y programación adaptativa.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button onClick={handleDownload} className="px-8 py-3 text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 transition duration-300 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Descargar Programa
              </button>
              <Link to="/login" className="px-8 py-3 border border-black text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 transition duration-300 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Acceder a Versión Móvil
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Disponible para Windows, macOS y como aplicación web
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
