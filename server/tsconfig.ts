{
  "compilerOptions": {
    "target": "es6",   // Establece la versión de ECMAScript a la que se compilará el código TypeScript.
    "module": "ESNext",  // Especifica el sistema de módulos que se utilizará en la salida del código compilado.
    "outDir": "./dist",  // Especifica el directorio de salida donde se colocarán los archivos compilados.
    "strict": true  // Activa un conjunto de opciones de TypeScript que habilitan comprobaciones más estrictas durante la compilación.
   },
  "include": [
    "src/**/*.ts"  // Especifica los archivos TypeScript que se incluirán en el proceso de compilación, utilizando un patrón de búsqueda.
  ],
  "exclude": [
    "node_modules"  // Especifica los directorios o archivos que se excluyen del proceso de compilación.
  ]
}
