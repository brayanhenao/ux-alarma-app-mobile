# AlarmaApp - Interfaz Móvil

Este proyecto es la interfaz móvil de la aplicación AlarmaApp, desarrollada como parte del curso de
_*Mejoramiento de la Experiencia de Usuario*_ en la Universidad de los Andes.

## Tabla de Contenido

- [Integrantes](#integrantes)
- [Diseño en Figma](#diseño-en-figma)
- [Acerca del Desarrollo de la Interfaz](#acerca-del-desarrollo-de-la-interfaz)
- [Instalación](#instalación)
- [Ejecución](#ejecución)
    - [Ejecutar el servidor de Metro](#ejecutar-el-servidor-de-metro)
    - [Ejecutar la aplicación](#ejecutar-la-aplicación)
        - [Para Android](#para-android)
        - [Para iOS](#para-ios)
- [Construcción](#construcción)
- [Despliegue](#despliegue)
- [Consideraciones](#consideraciones)

## Integrantes

- [Brayan Henao](https://www.github.com/brayanhenao)
- [Erik Loaiza](https://www.github.com/erikloaiza)

## Diseño en Figma

Hemos utilizado [Figma](https://www.figma.com) para el diseño de la interfaz móvil. A continuación, se detallan los
enlaces al archivo de Figma y al prototipo.

- [Figma detallado](https://www.figma.com/file/QmtTqW4KTHQG8jDWNJUL8X/UX---Alarma-App-(Mobile)-(Full)?type=design&mode=design&t=rv2cEoFN5F5gghCA-0)
- [Prototipo](https://www.figma.com/proto/QmtTqW4KTHQG8jDWNJUL8X/UX-Alarma-App-Mobile-Full?type=design&node-id=54495-24451&t=rv2cEoFN5F5gghCA-0&scaling=contain&page-id=54495%3A24451&starting-point-node-id=54811%3A27755)

## Acerca del Desarrollo de la Interfaz

Para el desarrollo de la interfaz, hemos utilizado las siguientes tecnologías:

- [Yarn](https://yarnpkg.com): Gestor de paquetes para JavaScript.
- [React Native](https://reactnative.dev): Framework para el desarrollo de aplicaciones móviles en JavaScript.
- [Metro](https://facebook.github.io/metro): Bundler para React Native.
- [TypeScript](https://www.typescriptlang.org): Lenguaje de programación tipado que compila a JavaScript.
- [React Native Paper](https://callstack.github.io/react-native-paper): Librería de componentes para React Native basada
  en Material Design.
- [React Navigation](https://reactnavigation.org): Librería para la navegación entre pantallas en React Native.
- [React Native Vector Icons](https://oblador.github.io/react-native-vector-icons/): Librería de iconos para React
  Native.

## Instalación

Para instalar el proyecto, debes clonar el repositorio y luego instalar las dependencias con Yarn:

```shell
git clone git@github.com:brayanhenao/ux-alarma-app-mobile.git
cd ux-alarma-app-mobile
yarn install
```

## Ejecución

### Ejecutar el servidor de Metro

Primero, debes ejecutar el servidor de Metro, el cual es el _bundler_ de JavaScript que viene con React Native. Para
iniciar Metro ejecuta el siguiente comando desde la raíz del proyecto:

```shell
yarn start
```

### Ejecutar la aplicación

Deja corriendo el servidor de Metro en su propia terminal. Abre una nueva terminal desde la raíz del proyecto y ejecuta
el siguiente comando para iniciar la aplicación en Android o iOS:

#### Para Android

```shell
yarn android
```

#### Para iOS

```shell
yarn ios
```

Si todo está configurado _correctamente_, deberías ver la aplicación corriendo en tu _Android Emulator_ o _iOS
Simulator_ en poco tiempo, siempre y cuando hayas configurado tu emulador/simulador correctamente.

## Despliegue

## Consideraciones

