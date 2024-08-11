export const createPaths = (currentPage) => {
  let path = {
    "/so-funktionierts": ["so-funktionierts"],
    "/calculator": ["calculator"],
    "/wir-kaufen": ["wir-kaufen"],
    "/abgeschlossen-eigenes-Versandmaterial": [
      "versandarten",
      "abgeschlossen-eigenes-Versandmaterial",
    ],
    "/ankauf-abgeschlossen-wertsendung": [
      "versandarten",
      "ankauf-abgeschlossen",
    ],
    "/kontakt": ["kontakt"],
    "/stadteankauf": ["stadteankauf"],
    "/hamburg": ["hamburg"],
    "/blog": ["blog"],
    "/goldwissen": ["goldwissen"],
    "/ankaufpreise": ["goldwissen", "ankaufpreise"],
    "/goldrechner": ["goldrechner"],
    "/calculator": ["goldrechner", "calculator"],
    "/versandarten": ["versandarten"],
    "/versandtasche-bestellen": ["versandarten", "versandtasche-bestellen"],
    "/eigenes-versandmaterial": ["versandarten", "eigenes-versandmaterial"],
    "/wertsendung": ["versandarten", "wertsendung"],
    "/ankauf-abgeschlossen-versandtasche": [
      "versandarten",
      "ankauf-abgeschlossen-versandtasche",
    ],
    "/sicherheit": ["sicherheit"],

    "/auszeichnungen": ["sicherheit", "auszeichnungen"],
    "/verkaufsanleitung": ["sicherheit", "verkaufsanleitung"],
    "/videos-uber-goldankauf": ["sicherheit", "videos-uber-goldankauf"],
    "/haufige-fragen": ["sicherheit", "haufige-fragen"],
    "/gold-zuruck-garantie": ["sicherheit", "gold-zuruck-garantie"],
    "/uhren-ankauf": ["wir-kaufen", "uhren-ankauf"],
    "/diamanten": ["wir-kaufen", "diamanten"],
    "/nachhaltigkiet": ["wir-kaufen", "nachhaltigkiet"],
  };
  return path[currentPage];
};
