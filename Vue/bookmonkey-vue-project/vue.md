Teacher
 - Anthony Konstantinidis

Teilnehmer
 - Sebastian Storck    **
 - Sascha Kleiber      ****
 - Susanne Schertling 
 - Marvin Zichner      *****


# 1. SFC - Single File Component
Kapselt das Template, die Logik und das Styling in einem File  

    <script setup>
        import { ref } from 'vue'
        const greeting = ref('Hello World!')
    </script>
    
    <template>
        <p class="greeting">{{ greeting }}</p>
    </template>
    
    <style>
        .greeting {
          color: red;
          font-weight: bold;
        }
    </style>

## Vite
Lokaler Entwicklungsserver für Vue mit Typescript support und JSX

##  Wichgite Kommandos
    npm install


Vue-Projekt erzeugen   
Im Gothaer-Umfeld muss eine Datei ".npmrc" im aktuellen Pfad liegen.
.npmrc
    
    strict-ssl=false
    registry=https://repo.gothaer.de/repository/npm-proxy/

Kommando zum Erzeugen eies Skeleton Projektes
    
    npm create vue@latest

    Optionen wählen
    √ Project name: ... myVueProject
    √ Package name: ... myvueproject
    √ Add TypeScript? ... Yes
    √ Add JSX Support? ... No
    √ Add Vue Router for Single Page Application development? ... No / Yes
    √ Add Pinia for state management? ... No
    √ Add Vitest for Unit Testing? ... No
    √ Add an End-to-End Testing Solution? » No
    √ Add ESLint for code quality? ... Yes
    √ Add Prettier for code formatting? ... No


    Scaffolding project in ./<your-project-name>...
    Done.

Wechseln in das Verzeichnis und Dependencies installieren 
    
    cd <your-project-name>
    npm install

Start Server

    npm run dev

# Vue app erstellen

Jede App benötigt ein Root-Element  
main.ts

    import { createApp } from 'vue'
    import App from './App.vue'

    const app= createApp(App)
    app.mount('#app')





# Router
Für Komponenten die durch den Router adressiert werden sollte in einem eigenen Verzeichnis
sein --> /pages

# RouterLink
Browser soll nichts tun. Vue läd die richtigen Komponenten.

# Router View

# Parametrisierbare Routen

Parameter in Routen (userId, Book)
<code>Adding a static section
The easiest way to differentiate route is by adding a static section to the
path
    
    const routes: Array<RouteRecordRaw> = [{
       path: '/books/:isbn',
       component: BookDetail,
       name: 'book-detail',
    }]

Den Routen werden "Gewichtungen" zugeordnet, damit nicht jedesmal alle 
Regulären Ausdrücke geprüft werden müssen

Reaktion auf URL-Änderungen.
Wenn der User selbst im Browser die URL ändert.


Die Komnponente hat aber nun eine enge Abhängigkeit zum Router.
Vielleicht soll die Komponente aber auch als teil einer andren Komponente angezeigt werden.

--> Statt über den Router bekommt die Komponente die Parameter über defineProps. 
Es ist nicht falsch mit dem Router zu argbeiten. So ist die Komponente allgemeiner nutzbar

VS-Code Plugin: Error Lens


## Lazy Loading
vide BAut die Anwendung
Kopiert alle imports in eine große datei, die der Browser lädt.
--> Dynamischer import

    const AboutPage () => import(('Datei'))

Build-Befehl manipulieren in 'vite.config.js'. In Chunks gruppieren

## Route Guards

#### Globale Guards
z.B. Information des Users, wenn er die Seite verlässt, dass nicht gespeicherte Daten verloren gehen.

Router in eine variable speichern.

    router.beforEach((to: ..., from: ...) => ...

oder z.B. die Route die er User gewählt hat überschreiben.
e.g. User geht auf login, ist abewr schon eingelogged. --> Profilseite.

#### In-Component Guard
e.g. oneBeforeRouteLeave


# Form Validierung

In Vue können Form-Eingaben überprüft werden
aber im Servir immer nochmal Validieren, denn im Client kann viel manipuliert werden.
Diese URL kann mit anderen Tools aufgerufen werden

    <form>
      <label for="title">Title:</label>
      <input type="text" id="title" name="title">
      <button type="submit">Save</button>
    </form>

### HTML5 Build-in-Validatoren
[HTML5 input types](https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types)
Hier sind die Validierungen bereits vorhanden.

### Vue-Forms

Validierung über EventListener oder über Watcher

    <input type="text"
    id="title"
    name="title"
    placeholder="Book Title"
    v-model.lazy.trim="book.title"
    @change="validateTitle"
    :aria-invalid="errors.title.length > 0">

v-model.lazy spielt zusammen mit @change. 
--> @change wird bei verlassen desn input-elements ausgeführt.
--> Ein @input-Event wird bei jedem Tastendruck ausgeführt.

JS Optional chaning
Kann ich auf book.value.author zugreifen?    
Nullish ???????
    book.value?.author


# Pinia stores

    const store= useBookStore();
    const { books }= storeToRefs(store)




# Kostenlose Templates
Tailwind Templates