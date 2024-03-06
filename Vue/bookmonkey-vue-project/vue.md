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
    
    npm create vue@latest

    Optionen wählen
    ✔ Project name: … <your-project-name>  
    ✔ Add TypeScript? … No / Yes
    ✔ Add JSX Support? … No / Yes
    ✔ Add Vue Router for Single Page Application development? … No / Yes
    ✔ Add Pinia for state management? … No / Yes
    ✔ Add Vitest for Unit testing? … No / Yes
    ✔ Add an End-to-End Testing Solution? … No / Cypress / Playwright
    ✔ Add ESLint for code quality? … No / Yes
    ✔ Add Prettier for code formatting? … No / Yes

    Scaffolding project in ./<your-project-name>...
    Done.

Wechseln in das Verzeichnis  
    
    cd <your-project-name>

Dependencies installieren

    npm install

Start Server

    npm run dev

##


