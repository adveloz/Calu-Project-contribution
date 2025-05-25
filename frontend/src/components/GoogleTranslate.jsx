import { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    const scriptId = "google-translate-script";

    // Evitar duplicar el script
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    }

    // Definir la función de inicialización
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "es", // Idioma base de tu página
            includedLanguages: "en,es,it", // Idiomas permitidos
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };

    // Limpieza al desmontar el componente
    return () => {
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div
      id="google_translate_element"
      style={{
        zIndex: 1000,
        position: "relative",
        display: "inline-block",
        marginTop: "10px",
      }}
    />
  );
};

export default GoogleTranslate;
