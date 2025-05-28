import { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    const scriptId = "google-translate-script";

    // Función para ocultar la barra de traducción y corregir el body
    const hideTranslateBar = () => {
      // Ocultar la barra superior
      const elements = document.getElementsByClassName('skiptranslate');
      for (let element of elements) {
        if (element.tagName === 'IFRAME') {
          element.style.display = 'none';
        }
      }

      // Corregir el desplazamiento del body
      if (document.body.style.top) {
        document.body.style.top = '0px';
      }

      // Ocultar el iframe de la barra superior si existe
      const gbar = document.querySelector('.goog-te-banner-frame');
      if (gbar) {
        gbar.style.visibility = 'hidden';
        gbar.style.display = 'none';
      }
    };

    // Aplicar los estilos iniciales
    const initialStyle = document.createElement('style');
    initialStyle.innerHTML = `
      .skiptranslate iframe {
        display: none !important;
      }
      .goog-te-banner-frame {
        display: none !important;
        visibility: hidden !important;
      }
      body {
        top: 0px !important;
        position: static !important;
      }
    `;
    document.head.appendChild(initialStyle);

    // Cargar el script de Google Translate
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    // Configurar el elemento de traducción
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "es",
            includedLanguages: "en,es,it",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element"
        );

        // Ocultar la barra después de inicializar
        hideTranslateBar();

        // Observer para el menú desplegable
        const applyStyles = () => {
          const iframe = document.querySelector('.goog-te-menu-frame');
          if (iframe) {
            try {
              const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
              
              const styleElement = document.createElement('style');
              styleElement.textContent = `
                .goog-te-menu2 {
                  max-width: 20vw !important;
                  min-width: 100px !important;
                  border: none !important;
                  box-shadow: 0 0.1vw 0.5vw rgba(0, 0, 0, 0.1) !important;
                }
                .goog-te-menu2-item div, .goog-te-menu2-item:link div, .goog-te-menu2-item:visited div, .goog-te-menu2-item:active div {
                  font-size: 1vw !important;
                  padding: 0.4vw 0.8vw !important;
                }

                @media (max-width: 768px) {
                  .goog-te-menu2 {
                    max-width: 25vw !important;
                  }
                  .goog-te-menu2-item div, .goog-te-menu2-item:link div, .goog-te-menu2-item:visited div, .goog-te-menu2-item:active div {
                    font-size: 1.5vw !important;
                    padding: 0.8vw 1.2vw !important;
                  }
                }

                @media (max-width: 480px) {
                  .goog-te-menu2 {
                    max-width: 35vw !important;
                  }
                  .goog-te-menu2-item div, .goog-te-menu2-item:link div, .goog-te-menu2-item:visited div, .goog-te-menu2-item:active div {
                    font-size: 2vw !important;
                    padding: 1vw 2vw !important;
                  }
                }
              `;
              
              iframeDocument.head.appendChild(styleElement);
            } catch (error) {
              console.log('Error al aplicar estilos:', error);
            }
          }
        };

        // Observer para detectar cambios en el DOM
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
              hideTranslateBar();
              applyStyles();
            }
          });
        });

        observer.observe(document.body, {
          childList: true,
          subtree: true,
          attributes: true,
          attributeFilter: ['style', 'class']
        });
      }
    };

    // Estilos para el selector de idiomas
    const style = document.createElement('style');
    style.textContent = `
      #google_translate_element {
        margin: 0.3vw;
      }
      #google_translate_element .goog-te-gadget {
        font-family: 'Montserrat', sans-serif;
      }
      #google_translate_element .goog-te-gadget-simple {
        border: 0.05vw solid #FE6D36 !important;
        border-radius: 0.2vw !important;
        padding: 0.3vw 0.6vw !important;
        font-size: 0.9vw !important;
      }
      #google_translate_element .goog-te-gadget-simple img {
        display: none !important;
      }
      #google_translate_element .goog-te-gadget-simple > span {
        vertical-align: middle !important;
        margin-right: 0.3vw !important;
      }

      /* Tablets */
      @media (max-width: 768px) {
        #google_translate_element .goog-te-gadget-simple {
          padding: 0.8vw 1.2vw !important;
          font-size: 1.5vw !important;
        }
      }

      /* Móviles */
      @media (max-width: 480px) {
        #google_translate_element .goog-te-gadget-simple {
          padding: 1vw 2vw !important;
          font-size: 2vw !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Llamar a hideTranslateBar periódicamente durante los primeros segundos
    const interval = setInterval(hideTranslateBar, 100);
    setTimeout(() => clearInterval(interval), 5000);

    return () => {
      clearInterval(interval);
      delete window.googleTranslateElementInit;
      style.remove();
      initialStyle.remove();
    };
  }, []);

  return <div id="google_translate_element" />;
};

export default GoogleTranslate;
