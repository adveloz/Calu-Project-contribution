import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    es: {
        translation: {
            // Navbar
            'nav.home': 'Inicio',
            'nav.properties': 'Propiedades',
            'nav.contact': 'Contacto',
            'nav.about': 'Sobre Nosotros',
            'nav.services': 'Servicios',
            'nav.faq': 'Preguntas frecuentes',
            'nav.privacy': 'Políticas de Privacidad',
            'nav.conditions': 'Términos y condiciones',
            'nav.slogan': 'Soluciones inmobiliarias a tu medida!',
            // Home
            'search.title': 'Tu futuro hogar comienza aquí',
            'search.subtitle': 'Desde modernos apartamentos hasta amplias casas familiares, te ayudamos a encontrar el lugar donde tus sueños se hacen realidad.',
            'search.buy': 'Comprar',
            'search.sell': 'Vender',
            'search.location': 'Ubicación',
            'search.allLocations': 'Todas las ubicaciones',
            'search.price': 'Precio',
            'search.allPrices': 'Todos los precios',
            'search.surface': 'Superficie',
            'search.allSurfaces': 'Todas las superficies',
            'search.type': 'Tipo de propiedad',
            'search.allTypes': 'Todos los tipos',
            'search.min': 'Mínimo',
            'search.max': 'Máximo',
            'services.title': 'Nuestros Servicios',
            'services.subtitle': 'Ya sea que estés buscando comprar, vender o invertir, ofrecemos una amplia gama de servicios que cubren todas las etapas del proceso inmobiliario.',
            'reviews.title': 'Opiniones de nuestros clientes',
            'contact.title': 'Donde cada propiedad cuenta',
            'contact.subtitle': '¿Listo para dar el siguiente paso? Ya sea que busques tu próximo hogar o una oportunidad de inversión, estamos aquí para ayudarte a lograr tus objetivos inmobiliarios',
            'contact.email': 'Ingresa tu correo electrónico',
            'contact.submit': 'Enviar',
        }
    },
    en: {
        translation: {
            // Navbar
            'nav.home': 'Home',
            'nav.properties': 'Properties',
            'nav.contact': 'Contact',
            'nav.about': 'About Us',
            'nav.services': 'Services',
            'nav.faq': 'FAQ',
            'nav.privacy': 'Privacy Policy',
            'nav.conditions': 'Terms and Conditions',
            'nav.slogan': 'Real estate solutions tailored to you!',
            // Home
            'search.title': 'Your future home starts here',
            'search.subtitle': 'From modern apartments to spacious family homes, we help you find the place where your dreams come true.',
            'search.buy': 'Buy',
            'search.sell': 'Sell',
            'search.location': 'Location',
            'search.allLocations': 'All locations',
            'search.price': 'Price',
            'search.allPrices': 'All prices',
            'search.surface': 'Surface',
            'search.allSurfaces': 'All surfaces',
            'search.type': 'Property type',
            'search.allTypes': 'All types',
            'search.min': 'Min',
            'search.max': 'Max',
            'services.title': 'Our Services',
            'services.subtitle': 'Whether you are looking to buy, sell or invest, we offer a wide range of services that cover all stages of the real estate process.',
            'reviews.title': 'Our Clients Reviews',
            'contact.title': 'Where every property counts',
            'contact.subtitle': 'Ready to take the next step? Whether you are looking for your next home or an investment opportunity, we are here to help you achieve your real estate goals',
            'contact.email': 'Enter your email address',
            'contact.submit': 'Submit',
        }
    },
    it: {
        translation: {
            // Navbar
            'nav.home': 'Home',
            'nav.properties': 'Proprietà',
            'nav.contact': 'Contatto',
            'nav.about': 'Chi Siamo',
            'nav.services': 'Servizi',
            'nav.faq': 'FAQ',
            'nav.privacy': 'Politica sulla Privacy',
            'nav.conditions': 'Termini e Condizioni',
            'nav.slogan': 'Soluzioni immobiliari su misura per te!',
            // Home
            'search.title': 'La tua casa futura inizia qui',
            'search.subtitle': 'Da moderni appartamenti a spaziose case familiari, ti aiutiamo a trovare il luogo dove i tuoi sogni diventano realtà.',
            'search.buy': 'Comprare',
            'search.sell': 'Vendere',
            'search.location': 'Posizione',
            'search.allLocations': 'Tutte le posizioni',
            'search.price': 'Prezzo',
            'search.allPrices': 'Tutti i prezzi',
            'search.surface': 'Superficie',
            'search.allSurfaces': 'Tutte le superfici',
            'search.type': 'Tipo di proprietà',
            'search.allTypes': 'Tutti i tipi',
            'search.min': 'Min',
            'search.max': 'Max',
            'services.title': 'I Nostri Servizi',
            'services.subtitle': 'Che tu stia cercando di acquistare, vendere o investire, offriamo una vasta gamma di servizi che coprono tutte le fasi del processo immobiliare.',
            'reviews.title': 'Recensioni dei nostri clienti',
            'contact.title': 'Dove ogni proprietà conta',
            'contact.subtitle': 'Pronto a fare il prossimo passo? Che tu stia cercando la tua prossima casa o un\'opportunità di investimento, siamo qui per aiutarti a raggiungere i tuoi obiettivi immobiliari',
            'contact.email': 'Inserisci il tuo indirizzo email',
            'contact.submit': 'Invia',
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
