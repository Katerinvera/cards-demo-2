module.exports = {
  /**
   * Listo de idiomas
   */
  locales: ["es-ec"],
  /**
   * Localiizacion  por defecto (en formato ISO 3166‑1 Alpha 2) en minusculas
   */
  defaultUbication: "ec",
  /**
   * Idioma por defecto (en formato ISO 639‑1)
   */
  defaultLanguage: "es",
  /**
   * Dominio final
   */
  domain: "http://localhost",
  /**
   * The base URL your application bundle will be deployed
   */
  publicPath: "/",
  /**
   * Carpeta donde estan las imagenes para ser renombradas
   */
  sourceImagesDir: "views/images",
  /**
   * Archivo js done estan declarados los valorse de renombramiento
   */
  dictionaryImages: "dist/web/images/index.js",
  /**
   * Nombre del directorio donde se colocaran los assets
   */
  assetsDir: "assets",
  /**
   * Nombre de directorio donde se colocaran las imagenes renombradas
   */
  assetsImagesDir: "images",
  sourceRename: "common/images",
  sourceImagesDir: "images",
  /**
   *
   */
  images: {
    sources: "images",
    dirJsons: "common/images",
  },
  /**
   * Paramentros de servidor de desarrollo
   */
  server: {
    watch: 4900, // Servidor hapi(Contructor de archivos HTML)
    dev: 7850, // Servidor desarrollo con Webpack(vue/postcss/typescript)
  },
  /**
   * Robots
   */
  robots: {
    dissallowPaths: [],
    allowPaths: [],
  },
  /**
   * Lista de archivos bundle vue
   */
  vue: {
    // _index: "src/views/index/main.ts",
    _home: "src/views/home/main.ts",
    _card: "src/views/card/main.ts",
  },
  redirects: {
    //
  },
};
