import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

/**
 * Componente para traducir textos dinámicos usando una API externa.
 * @param {string} text - Texto original a traducir.
 */
function TranslatedDescription({ text }) {
  const { i18n } = useTranslation();
  const [translated, setTranslated] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!text) return;
    let isMounted = true;
  
    async function translate() {
      setLoading(true);
      setError(null);
  
      try {
        const res = await fetch("https://libretranslate.com/translate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            q: text,
            source: "es",
            target: i18n.language // ejemplo: "en"
            // no api_key ni alternatives
          })
        });
  
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
  
        const data = await res.json();
        console.log(data);
  
        // La respuesta tiene translatedText directamente
        const translation = data.translatedText;
  
        if (isMounted) setTranslated(translation || "");
      } catch (e) {
        console.error(e);
        setError("No se pudo traducir automáticamente.");
        setTranslated("");
      } finally {
        setLoading(false);
      }
    }
  
    translate();
  
    return () => { isMounted = false; };
  }, [text, i18n.language]);
  
  if (!text) return null;
  if (loading) return <p style={{ opacity: 0.6 }}>Traduciendo...</p>;
  if (error) return <p style={{ color: 'red' }}>{text}</p>;
  return <p>{translated || text}</p>;
}

export default TranslatedDescription;
