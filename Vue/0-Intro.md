html
head
body Das was angezeigt werden soll

    Klick, Hover...--> Javascript
    Muss in html eingebunden werden.

    Api um auf funktionen des Browsers zuzugreifen




    --> document.querySelector("p#paragraph").style.color="red";

    Große Frameworks haben das vereinfacht.
    Die Frameworks sind heute alle Clientseitig.


    Alles was mit z.B. einem Button zu tun hat, kommt in ein File. html, css und javascript

    MIT-Lizenz. Alles OpenSource


    SFC - Singel-File Components --> eine .vue Datei.


    Vue hat verschiedene API-Style
        Options API
            exportiert immer ein großes Objekt

        Composition API : neu mit Vue3 und empfohlen.
            helper von vue
            variablen und Fuunktionen

Installation von npm????

"npm install" im Projektverzeichnis
.npmrc ins Projektverzeichnis
Diese Eihntr#ge in die .npmrc
strict-ssl=false
registry=https://repo.gothaer.de/repository/npm-proxy/

Dann "npm create vue@latest"

Dann:
cd <Projekt>
npm install
npm run dev

Vue-code in App.vue

Neue Komponenten müssen bekannt gemacht werden. Durch import in einer anderen vue-Komponente.
In Kindkomponenten müssen die Imports erneut geschrieben werden.

Bei imports: @ zeigt auf src
import <kkk> from '@/components/ ...'

vid erkennt welkche Komponenten benötigt werden und schmeißt den Rest raus.

Basiskomponenten --> Global einbinden ohne extra import
Neue Komponente: MeinButton unter components
in der main.ts jetzt vor mount:
    import MeinButton from '.components/MeinButton.vue'
    app.component("MeinButton", MeinButton);

    Nich zu häufig einsetzen weil vide da jetzt nicht mehr erkennen kann.

Eigene Komponenten besser mit zwei Wörtern schreiben, damit es sich von den Standard Komponenten unterscheidet.
in Pascal/Camel Case


Selbstschließende Komponenten - wenn sie keinen Kontent haben
<MeinButton />