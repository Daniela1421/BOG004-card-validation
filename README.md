# 🐶🐱 HAPPY PETS 🐱🐶
## Índice
* [1. Preámbulo](#1-preámbulo)
* [2. Objetivos de aprendizaje](#2-objetivos-de-aprendizaje)
* [3. Caracteristicas del proyecto](#3-Caracteristicas-del-proyecto)
* [4. Instruccion de uso](#4-Instrucciones-de-uso)
* [5. Autores](#5-Autores)

***

## 1. Preámbulo

El [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn),
también llamado algoritmo de módulo 10, es un método de suma de verificación,
se utiliza para validar números de identificación; tales como el IMEI de los
celulares, tarjetas de crédito, etc.

Este algoritmo es simple. Obtenemos la reversa del número a verificar (que
solamente contiene dígitos [0-9]); a todos los números que ocupan una posición
par se les debe multiplicar por dos, si este número es mayor o igual a 10,
debemos sumar los dígitos del resultado; el número a verificar será válido si
la suma de sus dígitos finales es un múltiplo de 10.

![gráfica de algoritmo de Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 2. Objetivos de aprendizaje

### HTML

- [ ] **Uso de HTML semántico**

  <details><summary>Links</summary><p>

  * [HTML semántico](https://curriculum.laboratoria.la/es/topics/html/02-html5/02-semantic-html)
  * [Semantics - MDN Web Docs Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
</p></details>

### CSS

- [ ] **Uso de selectores de CSS**

  <details><summary>Links</summary><p>

  * [Intro a CSS](https://curriculum.laboratoria.la/es/topics/css/01-css/01-intro-css)
  * [CSS Selectors - MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)
</p></details>

- [ ] **Modelo de caja (box model): borde, margen, padding**

  <details><summary>Links</summary><p>

  * [Box Model & Display](https://curriculum.laboratoria.la/es/topics/css/01-css/02-boxmodel-and-display)
  * [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  * [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  * [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  * [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
</p></details>

### Web APIs

- [ ] **Uso de selectores del DOM**

  <details><summary>Links</summary><p>

  * [Manipulación del DOM](https://curriculum.laboratoria.la/es/topics/browser/02-dom/03-1-dom-methods-selection)
  * [Introducción al DOM - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Localizando elementos DOM usando selectores - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
</p></details>

- [ ] **Manejo de eventos del DOM (listeners, propagación, delegación)**

  <details><summary>Links</summary><p>

  * [Introducción a eventos - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events)
  * [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
  * [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/removeEventListener)
  * [El objeto Event](https://developer.mozilla.org/es/docs/Web/API/Event)
</p></details>

- [ ] **Manipulación dinámica del DOM**

  <details><summary>Links</summary><p>

  * [Introducción al DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Node.appendChild() - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/appendChild)
  * [Document.createElement() - MDN](https://developer.mozilla.org/es/docs/Web/API/Document/createElement)
  * [Document.createTextNode()](https://developer.mozilla.org/es/docs/Web/API/Document/createTextNode)
  * [Element.innerHTML - MDN](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML)
  * [Node.textContent - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/textContent)
</p></details>

### JavaScript

- [ ] **Tipos de datos primitivos**

  <details><summary>Links</summary><p>

  * [Valores primitivos - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures#valores_primitivos)
</p></details>

- [ ] **Strings (cadenas de caracteres)**

  <details><summary>Links</summary><p>

  * [Strings](https://curriculum.laboratoria.la/es/topics/javascript/06-strings)
  * [String — Cadena de caracteres - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)
</p></details>

- [ ] **Variables (declaración, asignación, ámbito)**

  <details><summary>Links</summary><p>

  * [Valores, tipos de datos y operadores](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/01-values-variables-and-types)
  * [Variables](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/02-variables)
</p></details>

- [ ] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  <details><summary>Links</summary><p>

  * [Estructuras condicionales y repetitivas](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/01-conditionals-and-loops)
  * [Tomando decisiones en tu código — condicionales - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals)
</p></details>

- [ ] **Uso de bucles/ciclos (while, for, for..of)**

  <details><summary>Links</summary><p>

  * [Bucles (Loops)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/02-loops)
  * [Bucles e iteración - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)
</p></details>

- [ ] **Funciones (params, args, return)**

  <details><summary>Links</summary><p>

  * [Funciones (control de flujo)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/03-functions)
  * [Funciones clásicas](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/01-classic)
  * [Arrow Functions](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/02-arrow)
  * [Funciones — bloques de código reutilizables - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions)
</p></details>

- [ ] **Pruebas unitarias (unit tests)**

  <details><summary>Links</summary><p>

  * [Empezando con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/getting-started)
</p></details>

- [ ] **Módulos de ECMAScript (ES Modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export)
</p></details>

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

### Control de Versiones (Git y GitHub)

- [ ] **Git: Instalación y configuración**

- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [ ] **GitHub: Despliegue con GitHub Pages**

  <details><summary>Links</summary><p>

  * [Sitio oficial de GitHub Pages](https://pages.github.com/)
</p></details>

### UX (User eXperience)

- [ ] **Diseñar la aplicación pensando en y entendiendo al usuario**

- [ ] **Crear prototipos para obtener feedback e iterar**

- [ ] **Aplicar los principios de diseño visual**

## 3. Caracteristicas del proyecto

Happy pets es una aplicación web que le permitirá al usuario validar el número de su tarjeta de crédito y tendrá también la funcionalidad de ocultar todos los dígitos de la tarjeta menos los últimos cuatro. Esta aplicación web se desarrollará a través de una tienda de mascotas que ofrece variedad de productos como alimentos, juguetes y accesorios para las mismas, los cuales podrán ser comprados por medio de la tarjeta de crédito que pasara por el proceso de verificación mediante del algoritmo de Luhn.

### Diseño de experiencia de usuario 🚀

Happy pets está enfocado hacia personas amantes de los animales, que buscan darles los mejores cuidados a sus mascotas ofreciendo productos de calidad y brindando consejos para mejorar la calidad de vida de nuestros amigos.
Primero se diseñó un prototipo en papel de como en principio se deseaba que se viera la página, integrando la funcionalidad para validar la tarjeta, y este diseño lo llevamos a google slides.
 
##### Diseño en papel
![image](https://user-images.githubusercontent.com/92064924/150433188-dd2c263a-a370-43d2-aa85-2708e9e70c7e.png)
##### Diseño en google slides
![image](https://user-images.githubusercontent.com/92064924/151592476-b0db7afa-e19f-41f8-a73f-82c8de3050e8.png)

#### Segundo diseño
Al pensar en el usuario, se le quiso brindar al mismo una experiencia más intuitiva, es por esto que se opto por suprimir varias imágenes para no recargar la vista de la página y que fuera agradable y fácil de manejar.

![image](https://user-images.githubusercontent.com/92064924/151590726-f12e9b4e-6e9d-410b-8e6d-d2d5c8f0041f.png)

#### Diseño final 
Cuando se mostró el segundo prototipo, nos hicieron la recomendación de cambiar el tamaño del header y footer, porque es lo que se está utilizando actualmente en las aplicaciones web, además esto también lo sugirió una persona que conoce del tema de diseño de experiencia de usuario. 
Despues del feedback, se decidió extender a todo el ancho de la página el header y footer dándole un mejor aspecto a la aplicación web.

![image](https://user-images.githubusercontent.com/92064924/151593345-e1d20a4e-940e-474f-b6ff-9763bc4cc2c5.png)

## 4. Instrucciones de uso
Cuando el usuario abra la aplicación web se va a encontrar con una primera pantalla en la cual hallara tres secciones:
1. El nombre de la tienda de mascotas con el menú de navegación.
2. Sección de productos donde el usuario podrá elegir y comprar el producto de su interés. 
3. Información de la tienda como horario de atención, teléfono, email y redes sociales de la misma.

Para que el usuario pueda validar su tarjeta deberá seleccionar el producto de su agrado y hacer click en el botón de comprar y este lo llevara a otra sección en la cual tendrá que ingresar sus datos con el número de su tarjeta de crédito y al clickear en el botón de validar se mostrara si el número de tarjeta es válido o invalido.

## 5. Autores ✒️

* **Yesica Blanco** - [Yesiblato](https://github.com/Yesiblato)
* **Daniela Ducuara** - [Daniela1421](https://github.com/Daniela1421)

