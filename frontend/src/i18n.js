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
            'nav.allProperties': 'Todas las propiedades',

            // Property View Form
            'form.name': 'Nombre',
            'form.name.placeholder': 'Introduce tu nombre',
            'form.lastname': 'Apellidos',
            'form.lastname.placeholder': 'Introduce tu apellido',
            'form.phone': 'Teléfono',
            'form.phone.placeholder': 'Introduce tu teléfono',
            'form.email': 'Email',
            'form.email.placeholder': 'Introduce tu Correo',
            'form.message': 'Mensaje',
            'form.message.placeholder': 'Escribe un mensaje',
            'form.submit': 'Enviar Mensaje',

            // Property Features
            'property.room': 'Habitación',
            'property.rooms': 'Habitaciones',
            'property.doubleRoom': 'Habitación doble',
            'property.doubleRooms': 'Habitaciones dobles',
            'property.simpleRoom': 'Habitación simple',
            'property.simpleRooms': 'Habitaciones simples',
            'property.bathroom': 'Baño',
            'property.bathrooms': 'Baños',
            'property.fullBathroom': 'Baño completo',
            'property.fullBathrooms': 'Baños completos',
            'property.simpleBathroom': 'Baño simple',
            'property.simpleBathrooms': 'Baños simples',
            'property.storage': 'Trastero',

            // Reviews
            'reviews.title': 'Opiniones',
            'reviews.form.placeholder': 'Escriba su opinión',
            'reviews.form.submit': 'Enviar',
            'reviews.anonymous': 'Anónimo',

            // About Page
            'about.title': '¿Quiénes somos?',
            'about.description': 'Somos un equipo dedicado de profesionales inmobiliarios comprometidos en ayudarte a encontrar la propiedad ideal. Con años de experiencia en el mercado, nos especializamos en bienes raíces residenciales y comerciales, brindando asesoramiento experto en cada etapa del proceso.',
            'about.history.button': 'Nuestra Historia',
            'about.mission.button': 'Nuestra Misión',
            'about.vision.button': 'Nuestra Visión',
            'about.values.button': 'Nuestros Valores',
            'about.philosophy.button': 'Filosofía Empresarial',
            'about.team.button': 'Nuestro Equipo',
            'about.history.text': 'Calu nació con una visión clara: revolucionar el mercado inmobiliario al ofrecer un servicio basado en la confianza, la dedicación y el compromiso con nuestros clientes. Desde nuestros inicios, hemos crecido gracias a la pasión por conectar personas con sus sueños inmobiliarios, comenzando como una pequeña agencia y expandiéndonos hasta convertirnos en un referente en la industria. A lo largo de los años, hemos ayudado a cientos de familias y empresas a encontrar el espacio ideal, acompañándolos en cada paso con un enfoque personalizado y una profunda comprensión del mercado. Nuestro éxito se basa en relaciones duraderas, construidas sobre una base de transparencia, experiencia y resultados.',
            'about.team.ceo': 'CEO de Calu',
            'about.mission': 'Nuestra misión es brindar soluciones inmobiliarias personalizadas que superen las expectativas de nuestros clientes. Nos comprometemos a ofrecer un servicio excepcional, guiado por la integridad, la confianza y el profesionalismo, ayudando a cada persona a encontrar la propiedad perfecta para sus necesidades. Nos esforzamos por ser un referente en el mercado, creando relaciones duraderas y proporcionando asesoría experta en cada etapa del proceso. Nuestro compromiso es brindar un enfoque integral, utilizando nuestra profunda comprensión del mercado y las últimas herramientas tecnológicas para garantizar que cada transacción sea eficiente, fluida y satisfactoria.',
            'about.vision': 'Nuestra visión es ser líderes en el sector inmobiliario, reconocidos por ofrecer soluciones innovadoras y un servicio excepcional que genera valor duradero para nuestros clientes.',
            'about.values.integrity.title': 'Integridad',
            'about.values.integrity.text': 'Actuamos con transparencia y ética en cada transacción',
            'about.values.excellence.title': 'Excelencia',
            'about.values.excellence.text': 'Ofreciendo un servicio de alta calidad y soluciones personalizadas',
            'about.values.innovation.title': 'Innovación',
            'about.values.innovation.text': 'Ofrecemos soluciones creativas en el mercado inmobiliario',
            'about.values.commitment.title': 'Compromiso',
            'about.values.commitment.text': 'Construimos relaciones a largo plazo con nuestros clientes',
            'about.philosophy': 'En Calu creemos en construir relaciones basadas en confianza y respeto, ofreciendo soluciones innovadoras con integridad y compromiso para generar un impacto positivo en nuestros clientes y comunidades.',

            // Privacy Policy
            'privacy.title': 'Política de Privacidad',
            'privacy.introduction': 'En Calu valoramos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política explica cómo recopilamos, utilizamos y protegemos la información que compartes con nosotros.',
            'privacy.collection.title': 'Recopilación de información',
            'privacy.collection.text': 'Recopilamos información personal cuando interactúas con nuestro sitio web, como cuando completas formularios de contacto o solicitas información sobre propiedades. Esto puede incluir:',
            'privacy.collection.items.fullName': 'Nombre completo',
            'privacy.collection.items.email': 'Dirección de correo electrónico',
            'privacy.collection.items.phone': 'Número de teléfono',
            'privacy.collection.items.property': 'Información de la propiedad de interés',
            'privacy.usage.title': 'Uso de la Información',
            'privacy.usage.text': 'La información que recopilamos se utiliza para los siguientes fines',
            'privacy.usage.items.propertyInfo': 'Proporcionarte información sobre propiedades que puedan interesarte.',
            'privacy.usage.items.queries': 'Responder a tus consultas y coordinar visitas.',
            'privacy.usage.items.transactions': 'Procesar solicitudes de servicios o transacciones.',
            'privacy.usage.items.improvement': 'Mejorar nuestros servicios y personalizar tu experiencia en nuestro sitio web.',
            'privacy.data.title': 'Protección de Datos',
            'privacy.data.text': 'Nos comprometemos a proteger tus datos personales. Implementamos medidas de seguridad técnicas y organizativas para evitar el acceso no autorizado, la divulgación o alteración de tu información personal.',
            'privacy.sharing.title': 'Compartición de Información',
            'privacy.sharing.text': 'No compartimos, vendemos ni alquilamos tu información personal a terceros sin tu consentimiento, excepto cuando sea necesario para completar una transacción solicitada o requerido por la ley.',
            'privacy.rights.title': 'Tus Derechos',
            'privacy.rights.text': 'Tienes el derecho de acceder, corregir o solicitar la eliminación de tus datos personales en cualquier momento. Si deseas actualizar tu información o retirar tu consentimiento, por favor, contáctanos a través de [correo electrónico de contacto].',
            'privacy.changes.title': 'Cambios a la Política de Privacidad',
            'privacy.changes.text': 'Nos reservamos el derecho de actualizar esta política en cualquier momento. Cualquier cambio será publicado en esta página, y te notificaremos si los cambios son significativos.',
            'privacy.contact.title': 'Contacto',
            'privacy.contact.text': 'Si tienes preguntas sobre nuestra Política de Privacidad o sobre cómo manejamos tu información personal, no dudes en contactarnos en:',
            'privacy.contact.items.email': 'Correo Electrónico: info@inmobiliariacalu.com',
            'privacy.contact.items.phone': 'Teléfono: +34 647 66 28 40',

            // Terms and Conditions
            'terms.acceptance.title': '1. Aceptación de los Términos',
            'terms.acceptance.text': 'Al utilizar este sitio web, confirmas que has leído y aceptado estos Términos y Condiciones de Uso. Estos términos se aplican a todos los usuarios del sitio, incluidos visitantes, clientes y colaboradores.',
            'terms.usage.title': '2. Uso del Sitio Web',
            'terms.usage.text': 'El contenido de este sitio web, incluidas las imágenes, textos, gráficos y recursos, está destinado exclusivamente para fines informativos relacionados con los servicios inmobiliarios de Calu. No puedes utilizar el contenido de este sitio para fines comerciales no autorizados sin nuestro consentimiento previo por escrito.',
            'terms.ip.title': '3. Propiedad Intelectual',
            'terms.ip.text': 'Todo el contenido de este sitio web, incluidas marcas, logotipos, imágenes y textos, es propiedad de Calu o ha sido utilizado bajo licencia. Está prohibida la reproducción, distribución o modificación de cualquier material sin autorización expresa.',
            'terms.accuracy.title': '4. Exactitud de la Información',
            'terms.accuracy.text': 'No compartimos, vendemos ni alquilamos tu información personal a terceros sin tu consentimiento, excepto cuando sea necesario para completar una transacción solicitada o requerido por la ley.',
            'terms.accept': 'Aceptar',
            'terms.decline': 'Rechazar',

            // Contact Page
            'contact.title': 'Contáctanos',
            'contact.description': '¿Buscas tu nuevo hogar o necesitas vender una propiedad? Estamos aquí para ayudarte a encontrar la mejor opción. ¡Contáctanos hoy y haremos que tu experiencia inmobiliaria sea fácil y exitosa!',
            'contact.phone': 'Teléfono',
            'contact.address': 'Calle Treinta de Mayo 11\nCP: 38670, Adeje, Santa Cruz de Tenerife, España',
            'contact.address.label': 'Dirección',
            'contact.email': 'Correo Electrónico',
            'contact.form.description': 'Por favor completa el formulario a continuación y uno de nuestros agentes te contactará lo antes posible.',

            // Footer
            'footer.copyright': '© 2025 CalJ. Todos los derechos reservados.',

            // FAQ
            'faq.title': 'Preguntas Frecuentes',
            'faq.description': 'Sabemos que el proceso de compra, venta o alquiler de una propiedad puede generar muchas preguntas. Para facilitarte el camino, hemos recopilado algunas de las preguntas más comunes que recibimos de nuestros clientes.',

            home: {
                title: 'Tu futuro hogar comienza aquí',
                description: 'Desde modernos apartamentos hasta amplias casas familiares, te ayudamos a encontrar el lugar donde tus sueños se hacen realidad.',
                tab: {
                    buy: 'Comprar',
                    sell: 'Vender'
                },
                search: {
                    location: 'Ubicación',
                    allLocations: 'Todas las ubicaciones',
                    allPrices: 'Todos los precios',
                    allSurfaces: 'Todas las superficies',
                    allTypes: 'Todos los tipos',
                    price: 'Precio',
                    surface: 'Superficie m²',
                    propertyType: 'Tipo de propiedad',
                    minPrice: 'mínimo',
                    maxPrice: 'máximo',
                    minSurface: 'mínima',
                    maxSurface: 'máxima'
                },
                services: {
                    title: 'Nuestros Servicios',
                    description: 'Ya sea que estés buscando comprar, vender o invertir, ofrecemos una amplia gama de servicios que cubren todas las etapas del proceso inmobiliario. Desde la búsqueda de la propiedad ideal hasta el cierre de la venta, estamos contigo en cada paso del camino.',
                    buySell: {
                        title: 'Compra y venta de propiedades',
                        text: 'Asesoramiento personalizado para compradores y vendedores, facilitando la búsqueda, negociación y cierre de transacciones inmobiliarias.'
                    },
                    investment: {
                        title: 'Consultoría en inversiones inmobiliarias',
                        text: 'Asesoramiento para inversores interesados en adquirir propiedades con potencial de rentabilidad, ayudándolos a tomar decisiones estratégicas.'
                    },
                    valuation: {
                        title: 'Valoración y tasación de propiedades',
                        text: 'Determinación del valor de mercado de inmuebles, tanto para la venta como para fines hipotecarios o de inversión'
                    },
                    financial: {
                        title: 'Asesoramiento Financiero',
                        text: 'Ofrecemos la posibilidad de asistencia a nuestros clientes que necesitan hipoteca.'
                    }
                },
                reviews: {
                    title: 'Opiniones de nuestros clientes'
                },
                contact: {
                    title: 'Donde cada propiedad cuenta',
                    description: '¿Listo para dar el siguiente paso? Ya sea que busques tu próximo hogar o una oportunidad de inversión, estamos aquí para ayudarte a lograr tus objetivos inmobiliarios',
                    emailPlaceholder: 'Ingresa tu dirección de correo',
                    submit: 'Enviar'
                }
            },
            allProps: {
                searchResults: 'Resultados de búsqueda:',
                forSale: 'Para comprar',
                forRent: 'Para rentar',
                onSale: 'En Venta'
            }
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
            'nav.allProperties': 'All properties',

            // Property View Form
            'form.name': 'Name',
            'form.name.placeholder': 'Enter your name',
            'form.lastname': 'Last Name',
            'form.lastname.placeholder': 'Enter your last name',
            'form.phone': 'Phone',
            'form.phone.placeholder': 'Enter your phone number',
            'form.email': 'Email',
            'form.email.placeholder': 'Enter your email',
            'form.message': 'Message',
            'form.message.placeholder': 'Write a message',
            'form.submit': 'Send Message',

            // Property Features
            'property.room': 'Room',
            'property.rooms': 'Rooms',
            'property.doubleRoom': 'Double Room',
            'property.doubleRooms': 'Double Rooms',
            'property.simpleRoom': 'Single Room',
            'property.simpleRooms': 'Single Rooms',
            'property.bathroom': 'Bathroom',
            'property.bathrooms': 'Bathrooms',
            'property.fullBathroom': 'Full Bathroom',
            'property.fullBathrooms': 'Full Bathrooms',
            'property.simpleBathroom': 'Half Bathroom',
            'property.simpleBathrooms': 'Half Bathrooms',
            'property.storage': 'Storage Room',

            // Reviews
            'reviews.title': 'Reviews',
            'reviews.form.placeholder': 'Write your review',
            'reviews.form.submit': 'Submit',
            'reviews.anonymous': 'Anonymous',

            // About Page
            'about.title': 'Who we are?',
            'about.description': 'We are a dedicated team of real estate professionals committed to helping you find the ideal property. With years of experience in the market, we specialize in residential and commercial real estate, providing expert advice at every stage of the process.',
            'about.history.button': 'Our History',
            'about.mission.button': 'Our Mission',
            'about.vision.button': 'Our Vision',
            'about.values.button': 'Our Values',
            'about.philosophy.button': 'Business Philosophy',
            'about.team.button': 'Our Team',
            'about.history.text': 'Calu was born with a clear vision: to revolutionize the real estate market by offering a service based on trust, dedication, and commitment to our clients. Since our beginnings, we have grown thanks to our passion for connecting people with their real estate dreams, starting as a small agency and expanding until we became a reference in the industry. Over the years, we have helped hundreds of families and businesses find the ideal space, accompanying them every step of the way with a personalized approach and a deep understanding of the market. Our success is based on lasting relationships, built on a foundation of transparency, experience, and results.',
            'about.team.ceo': 'CEO of Calu',
            'about.mission': 'Our mission is to provide personalized real estate solutions that exceed our clients\' expectations. We are committed to delivering exceptional service, guided by integrity, trust, and professionalism, helping each person find the perfect property for their needs. We strive to be a market reference, creating lasting relationships and providing expert advice at every stage of the process. Our commitment is to provide a comprehensive approach, using our deep understanding of the market and the latest technological tools to ensure that each transaction is efficient, smooth, and satisfactory.',
            'about.vision': 'Our vision is to be leaders in the real estate sector, recognized for offering innovative solutions and exceptional service that generates lasting value for our clients.',
            'about.values.integrity.title': 'Integrity',
            'about.values.integrity.text': 'We act with transparency and ethics in every transaction',
            'about.values.excellence.title': 'Excellence',
            'about.values.excellence.text': 'Offering high-quality service and personalized solutions',
            'about.values.innovation.title': 'Innovation',
            'about.values.innovation.text': 'We offer creative solutions in the real estate market',
            'about.values.commitment.title': 'Commitment',
            'about.values.commitment.text': 'We build long-term relationships with our clients',
            'about.philosophy': 'At Calu, we believe in building relationships based on trust and respect, offering innovative solutions with integrity and commitment to generate a positive impact on our clients and communities.',

            // Privacy Policy
            'privacy.title': 'Privacy Policy',
            'privacy.introduction': 'At Calu, we value your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and protect the information you share with us.',
            'privacy.collection.title': 'Information Collection',
            'privacy.collection.text': 'We collect personal information when you interact with our website, such as when you complete contact forms or request information about properties. This may include:',
            'privacy.collection.items.fullName': 'Full name',
            'privacy.collection.items.email': 'Email address',
            'privacy.collection.items.phone': 'Phone number',
            'privacy.collection.items.property': 'Property information of interest',
            'privacy.usage.title': 'Use of Information',
            'privacy.usage.text': 'The information we collect is used for the following purposes',
            'privacy.usage.items.propertyInfo': 'Provide you with information about properties that may interest you.',
            'privacy.usage.items.queries': 'Respond to your inquiries and coordinate visits.',
            'privacy.usage.items.transactions': 'Process service requests or transactions.',
            'privacy.usage.items.improvement': 'Improve our services and personalize your experience on our website.',
            'privacy.data.title': 'Data Protection',
            'privacy.data.text': 'We are committed to protecting your personal data. We implement technical and organizational security measures to prevent unauthorized access, disclosure, or alteration of your personal information.',
            'privacy.sharing.title': 'Information Sharing',
            'privacy.sharing.text': 'We do not share, sell, or rent your personal information to third parties without your consent, except when necessary to complete a requested transaction or required by law.',
            'privacy.rights.title': 'Your Rights',
            'privacy.rights.text': 'You have the right to access, correct, or request the deletion of your personal data at any time. If you wish to update your information or withdraw your consent, please contact us through [contact email].',
            'privacy.changes.title': 'Changes to Privacy Policy',
            'privacy.changes.text': 'We reserve the right to update this policy at any time. Any changes will be posted on this page, and we will notify you if the changes are significant.',
            'privacy.contact.title': 'Contact',
            'privacy.contact.text': 'If you have questions about our Privacy Policy or how we handle your personal information, please feel free to contact us at:',
            'privacy.contact.items.email': 'Email: info@inmobiliariacalu.com',
            'privacy.contact.items.phone': 'Phone: +34 647 66 28 40',

            // Terms and Conditions
            'terms.acceptance.title': '1. Acceptance of Terms',
            'terms.acceptance.text': 'By using this website, you confirm that you have read and accepted these Terms and Conditions of Use. These terms apply to all site users, including visitors, customers, and collaborators.',
            'terms.usage.title': '2. Website Usage',
            'terms.usage.text': 'The content of this website, including images, texts, graphics, and resources, is intended exclusively for informational purposes related to Calu\'s real estate services. You may not use the content of this site for unauthorized commercial purposes without our prior written consent.',
            'terms.ip.title': '3. Intellectual Property',
            'terms.ip.text': 'All content on this website, including trademarks, logos, images, and texts, is owned by Calu or has been used under license. Reproduction, distribution, or modification of any material without express authorization is prohibited.',
            'terms.accuracy.title': '4. Information Accuracy',
            'terms.accuracy.text': 'We do not share, sell, or rent your personal information to third parties without your consent, except when necessary to complete a requested transaction or required by law.',
            'terms.accept': 'Accept',
            'terms.decline': 'Decline',

            // Contact Page
            'contact.title': 'Contact Us',
            'contact.description': 'Looking for your new home or need to sell a property? We are here to help you find the best option. Contact us today and we will make your real estate experience easy and successful!',
            'contact.phone': 'Phone',
            'contact.address': 'Calle Treinta de Mayo 11\nCP: 38670, Adeje, Santa Cruz de Tenerife, Spain',
            'contact.address.label': 'Address',
            'contact.email': 'Email',
            'contact.form.description': 'Please complete the form below and one of our agents will contact you as soon as possible.',

            // Footer
            'footer.copyright': '© 2025 CalJ. All rights reserved.',

            // FAQ
            'faq.title': 'Frequently Asked Questions',
            'faq.description': 'We know that the process of buying, selling, or renting a property can raise many questions. To make your journey easier, we\'ve compiled some of the most common questions we receive from our clients.',

            home: {
                title: 'Your future home starts here',
                description: 'From modern apartments to spacious family homes, we help you find the place where your dreams come true.',
                tab: {
                    buy: 'Buy',
                    sell: 'Sell'
                },
                search: {
                    location: 'Location',
                    allLocations: 'All locations',
                    allPrices: 'All prices',
                    allSurfaces: 'All surfaces',
                    allTypes: 'All types',
                    price: 'Price',
                    surface: 'Surface m²',
                    propertyType: 'Property type',
                    minPrice: 'minimum',
                    maxPrice: 'maximum',
                    minSurface: 'minimum',
                    maxSurface: 'maximum'
                },
                services: {
                    title: 'Our Services',
                    description: 'Whether you\'re looking to buy, sell or invest, we offer a wide range of services that cover all stages of the real estate process. From finding the ideal property to closing the sale, we\'re with you every step of the way.',
                    buySell: {
                        title: 'Buy and sell properties',
                        text: 'Personalized advice for buyers and sellers, facilitating the search, negotiation and closing of real estate transactions.'
                    },
                    investment: {
                        title: 'Real estate investment consulting',
                        text: 'Advice for investors interested in acquiring properties with profit potential, helping them make strategic decisions.'
                    },
                    valuation: {
                        title: 'Property valuation and appraisal',
                        text: 'Determination of the market value of properties, both for sale and for mortgage or investment purposes'
                    },
                    financial: {
                        title: 'Financial Advice',
                        text: 'We offer the possibility of assistance to our clients who need a mortgage.'
                    }
                },
                reviews: {
                    title: 'Our clients\' opinions'
                },
                contact: {
                    title: 'Where every property counts',
                    description: 'Ready to take the next step? Whether you\'re looking for your next home or an investment opportunity, we\'re here to help you achieve your real estate goals',
                    emailPlaceholder: 'Enter your email address',
                    submit: 'Submit'
                }
            },
            allProps: {
                searchResults: 'Search results:',
                forSale: 'For sale',
                forRent: 'For rent',
                onSale: 'On sale'
            }
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
            'nav.allProperties': 'Tutte le proprietà',

            // Property View Form
            'form.name': 'Nome',
            'form.name.placeholder': 'Inserisci il tuo nome',
            'form.lastname': 'Cognome',
            'form.lastname.placeholder': 'Inserisci il tuo cognome',
            'form.phone': 'Telefono',
            'form.phone.placeholder': 'Inserisci il tuo numero di telefono',
            'form.email': 'Email',
            'form.email.placeholder': 'Inserisci la tua email',
            'form.message': 'Messaggio',
            'form.message.placeholder': 'Scrivi un messaggio',
            'form.submit': 'Invia Messaggio',

            // Property Features
            'property.room': 'Camera',
            'property.rooms': 'Camere',
            'property.doubleRoom': 'Camera Matrimoniale',
            'property.doubleRooms': 'Camere Matrimoniali',
            'property.simpleRoom': 'Camera Singola',
            'property.simpleRooms': 'Camere Singole',
            'property.bathroom': 'Bagno',
            'property.bathrooms': 'Bagni',
            'property.fullBathroom': 'Bagno Completo',
            'property.fullBathrooms': 'Bagni Completi',
            'property.simpleBathroom': 'Bagno di Servizio',
            'property.simpleBathrooms': 'Bagni di Servizio',
            'property.storage': 'Ripostiglio',

            // Reviews
            'reviews.title': 'Recensioni',
            'reviews.form.placeholder': 'Scrivi la tua recensione',
            'reviews.form.submit': 'Invia',
            'reviews.anonymous': 'Anonimo',

            // About Page
            'about.title': 'Chi siamo?',
            'about.description': 'Siamo un team dedicato di professionisti immobiliari impegnati ad aiutarti a trovare la proprietà ideale. Con anni di esperienza nel mercato, ci specializziamo in immobili residenziali e commerciali, fornendo consulenza esperta in ogni fase del processo.',
            'about.history.button': 'La Nostra Storia',
            'about.mission.button': 'La Nostra Missione',
            'about.vision.button': 'La Nostra Visione',
            'about.values.button': 'I Nostri Valori',
            'about.philosophy.button': 'Filosofia Aziendale',
            'about.team.button': 'Il Nostro Team',
            'about.history.text': 'Calu è nata con una visione chiara: rivoluzionare il mercato immobiliare offrendo un servizio basato sulla fiducia, la dedizione e l\'impegno verso i nostri clienti. Fin dai nostri inizi, siamo cresciuti grazie alla passione per connettere le persone con i loro sogni immobiliari, partendo come piccola agenzia e espandendoci fino a diventare un punto di riferimento nel settore. Nel corso degli anni, abbiamo aiutato centinaia di famiglie e aziende a trovare lo spazio ideale, accompagnandoli in ogni passo con un approccio personalizzato e una profonda comprensione del mercato. Il nostro successo si basa su relazioni durature, costruite su una base di trasparenza, esperienza e risultati.',
            'about.team.ceo': 'CEO di Calu',
            'about.mission': 'La nostra missione è fornire soluzioni immobiliari personalizzate che superino le aspettative dei nostri clienti. Ci impegniamo a offrire un servizio eccezionale, guidato da integrità, fiducia e professionalità, aiutando ogni persona a trovare la proprietà perfetta per le proprie esigenze. Ci sforziamo di essere un punto di riferimento nel mercato, creando relazioni durature e fornendo consulenza esperta in ogni fase del processo. Il nostro impegno è fornire un approccio completo, utilizzando la nostra profonda comprensione del mercato e gli strumenti tecnologici più recenti per garantire che ogni transazione sia efficiente, fluida e soddisfacente.',
            'about.vision': 'La nostra visione è essere leader nel settore immobiliare, riconosciuti per offrire soluzioni innovative e un servizio eccezionale che genera valore duraturo per i nostri clienti.',
            'about.values.integrity.title': 'Integrità',
            'about.values.integrity.text': 'Agiamo con trasparenza ed etica in ogni transazione',
            'about.values.excellence.title': 'Eccellenza',
            'about.values.excellence.text': 'Offriamo un servizio di alta qualità e soluzioni personalizzate',
            'about.values.innovation.title': 'Innovazione',
            'about.values.innovation.text': 'Offriamo soluzioni creative nel mercato immobiliare',
            'about.values.commitment.title': 'Impegno',
            'about.values.commitment.text': 'Costruiamo relazioni a lungo termine con i nostri clienti',
            'about.philosophy': 'In Calu crediamo nella costruzione di relazioni basate sulla fiducia e sul rispetto, offrendo soluzioni innovative con integrità e impegno per generare un impatto positivo sui nostri clienti e sulle comunità.',

            // Privacy Policy
            'privacy.title': 'Politica sulla Privacy',
            'privacy.introduction': 'In Calu, apprezziamo la tua privacy e ci impegniamo a proteggere i tuoi dati personali. Questa politica spiega come raccogliamo, utilizziamo e proteggiamo le informazioni che condividi con noi.',
            'privacy.collection.title': 'Raccolta di Informazioni',
            'privacy.collection.text': 'Raccogliamo informazioni personali quando interagisci con il nostro sito web, ad esempio quando compili moduli di contatto o richiedi informazioni sulle proprietà. Questo può includere:',
            'privacy.collection.items.fullName': 'Nome completo',
            'privacy.collection.items.email': 'Indirizzo email',
            'privacy.collection.items.phone': 'Numero di telefono',
            'privacy.collection.items.property': 'Informazioni sulla proprietà di interesse',
            'privacy.usage.title': 'Utilizzo delle Informazioni',
            'privacy.usage.text': 'Le informazioni che raccogliamo vengono utilizzate per i seguenti scopi',
            'privacy.usage.items.propertyInfo': 'Fornirti informazioni su proprietà che potrebbero interessarti.',
            'privacy.usage.items.queries': 'Rispondere alle tue domande e coordinare le visite.',
            'privacy.usage.items.transactions': 'Elaborare richieste di servizi o transazioni.',
            'privacy.usage.items.improvement': 'Migliorare i nostri servizi e personalizzare la tua esperienza sul nostro sito web.',
            'privacy.data.title': 'Protezione dei Dati',
            'privacy.data.text': 'Ci impegniamo a proteggere i tuoi dati personali. Implementiamo misure di sicurezza tecniche e organizzative per prevenire l\'accesso non autorizzato, la divulgazione o l\'alterazione delle tue informazioni personali.',
            'privacy.sharing.title': 'Condivisione delle Informazioni',
            'privacy.sharing.text': 'Non condividiamo, vendiamo o affittiamo le tue informazioni personali a terzi senza il tuo consenso, tranne quando necessario per completare una transazione richiesta o richiesto dalla legge.',
            'privacy.rights.title': 'I Tuoi Diritti',
            'privacy.rights.text': 'Hai il diritto di accedere, correggere o richiedere la cancellazione dei tuoi dati personali in qualsiasi momento. Se desideri aggiornare le tue informazioni o revocare il tuo consenso, contattaci tramite [email di contatto].',
            'privacy.changes.title': 'Modifiche alla Politica sulla Privacy',
            'privacy.changes.text': 'Ci riserviamo il diritto di aggiornare questa politica in qualsiasi momento. Eventuali modifiche saranno pubblicate su questa pagina e ti informeremo se le modifiche sono significative.',
            'privacy.contact.title': 'Contatto',
            'privacy.contact.text': 'Se hai domande sulla nostra Politica sulla Privacy o su come gestiamo le tue informazioni personali, non esitare a contattarci a:',
            'privacy.contact.items.email': 'Email: info@inmobiliariacalu.com',
            'privacy.contact.items.phone': 'Telefono: +34 647 66 28 40',

            // Terms and Conditions
            'terms.acceptance.title': '1. Accettazione dei Termini',
            'terms.acceptance.text': 'Utilizzando questo sito web, confermi di aver letto e accettato questi Termini e Condizioni d\'Uso. Questi termini si applicano a tutti gli utenti del sito, inclusi visitatori, clienti e collaboratori.',
            'terms.usage.title': '2. Utilizzo del Sito Web',
            'terms.usage.text': 'Il contenuto di questo sito web, incluse immagini, testi, grafiche e risorse, è destinato esclusivamente a scopi informativi relativi ai servizi immobiliari di Calu. Non puoi utilizzare il contenuto di questo sito per scopi commerciali non autorizzati senza il nostro previo consenso scritto.',
            'terms.ip.title': '3. Proprietà Intellettuale',
            'terms.ip.text': 'Tutti i contenuti di questo sito web, inclusi marchi, loghi, immagini e testi, sono di proprietà di Calu o sono stati utilizzati su licenza. È vietata la riproduzione, distribuzione o modifica di qualsiasi materiale senza espressa autorizzazione.',
            'terms.accuracy.title': '4. Accuratezza delle Informazioni',
            'terms.accuracy.text': 'Non condividiamo, vendiamo o affittiamo le tue informazioni personali a terzi senza il tuo consenso, tranne quando necessario per completare una transazione richiesta o richiesto dalla legge.',
            'terms.accept': 'Accetta',
            'terms.decline': 'Rifiuta',

            // Contact Page
            'contact.title': 'Contattaci',
            'contact.description': 'Cerchi la tua nuova casa o hai bisogno di vendere una proprietà? Siamo qui per aiutarti a trovare la migliore opzione. Contattaci oggi e renderemo la tua esperienza immobiliare facile e di successo!',
            'contact.phone': 'Telefono',
            'contact.address': 'Calle Treinta de Mayo 11\nCP: 38670, Adeje, Santa Cruz de Tenerife, Spagna',
            'contact.address.label': 'Indirizzo',
            'contact.email': 'Email',
            'contact.form.description': 'Compila il modulo sottostante e uno dei nostri agenti ti contatterà al più presto.',

            // Footer
            'footer.copyright': '© 2025 CalJ. Tutti i diritti riservati.',

            // FAQ
            'faq.title': 'Domande Frequenti',
            'faq.description': 'Sappiamo che il processo di acquisto, vendita o affitto di una proprietà può sollevare molte domande. Per rendere il tuo percorso più facile, abbiamo raccolto alcune delle domande più comuni che riceviamo dai nostri clienti.',

            home: {
                title: 'La tua futura casa inizia qui',
                description: 'Dai moderni appartamenti alle spaziose case familiari, ti aiutiamo a trovare il luogo dove i tuoi sogni diventano realtà.',
                tab: {
                    buy: 'Comprare',
                    sell: 'Vendere'
                },
                search: {
                    location: 'Posizione',
                    allLocations: 'Tutte le posizioni',
                    allPrices: 'Tutti i prezzi',
                    allSurfaces: 'Tutte le superfici',
                    allTypes: 'Tutti i tipi',
                    price: 'Prezzo',
                    surface: 'Superficie m²',
                    propertyType: 'Tipo di proprietà'
                },
                services: {
                    title: 'I nostri servizi',
                    description: 'Che tu stia cercando di acquistare, vendere o investire, offriamo una vasta gamma di servizi che coprono tutte le fasi del processo immobiliare. Dalla ricerca della proprietà ideale alla chiusura della vendita, siamo con te in ogni fase del percorso.',
                    buySell: {
                        title: 'Acquisto e vendita di proprietà',
                        text: 'Consulenza personalizzata per acquirenti e venditori, facilitando la ricerca, la negoziazione e la chiusura delle transazioni immobiliari.'
                    },
                    investment: {
                        title: 'Consulenza sugli investimenti immobiliari',
                        text: 'Consulenza per investitori interessati ad acquisire proprietà con potenziale di redditività, aiutandoli a prendere decisioni strategiche.'
                    },
                    valuation: {
                        title: 'Valutazione e perizia delle proprietà',
                        text: 'Determinazione del valore di mercato degli immobili, sia per la vendita che per scopi ipotecari o di investimento'
                    },
                    financial: {
                        title: 'Consulenza Finanziaria',
                        text: 'Offriamo la possibilità di assistenza ai nostri clienti che necessitano di un mutuo.'
                    }
                },
                reviews: {
                    title: 'Opinioni dei nostri clienti'
                },
                contact: {
                    title: 'Dove ogni proprietà conta',
                    description: 'Pronto per il prossimo passo? Che tu stia cercando la tua prossima casa o un\'opportunità di investimento, siamo qui per aiutarti a raggiungere i tuoi obiettivi immobiliari',
                    emailPlaceholder: 'Inserisci il tuo indirizzo email',
                    submit: 'Invia'
                }
            },
            allProps: {
                searchResults: 'Risultati della ricerca:',
                forSale: 'In vendita',
                forRent: 'In affitto',
                onSale: 'In vendita'
            }
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
