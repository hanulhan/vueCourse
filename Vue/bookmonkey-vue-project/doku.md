
05.03.24 Vue 2. Tag

Reactive objects
Wrapper

// Reactive für Objekte
const state= reactive({
    count: 0,
});

Sachen Reactive machen für primitive Typen

const count = ref(1);

daraus wird intern 
count {
    value: 1
}f

ref() kann mit Objekte und mit primitiven Typen arbeiten
kann mehr als reative.

im script teil muss .value verwendet werden --> count.value
im Vue darf es nicht verwendet werden --> count


# Directiven

    <template>
       <span v-text="applicationName"></span>
        <span>{{ applicationName }}</span>       
     </template>

### binden an das attribut. z.B. <span> oder div
    <li><a href="#"></li>
    <li><a v-bind:href="navigation[0].link"></li>
    <li><a v-bind:name""navigation[0].name v-bind:href="navigation[0].link"></li>

##### kann vereinfacht werden, wenn die attribute gleich heißen
    type NavItemk= {
        name: string;
        href:string
    }
    li><a v-bind:name="navigation[0]" v-bind:href="navigation[0]"></li>

#### id setzen eines div
    <div v-bind:id></id>
 

## v-if 
schmeißt das element komplett aus dem DOM heraus
für Elemente, die wechseln sollen macht das keinen Sinn. Hier v-show

v-for sollte man von v-if trennen
v-vor sollte einen index besitzen, der eindeutig ist. Kann auch ein String sein.
Sonst muss man etwas generieren.

## Event Listener Directive
v-on directive to listen to DOM events
Das Event obj wird automatisch übergeben

    <form @submit.prevent="onSubmit"></form>
Hier soll die Seite nicht neu geladen werden, wie das früher bewi Forms war
Wir wollen die DAten selber versenden.


##vite ist ein Build-Server
in main.ts wird mit "createApp" festgelegt, wor der Startpunkt ist.
SFC - Alles was zusammengehört bleibt in einer Datei

Mit reactive/ref wird Vue mitgeteilt, dass es die Daten beobachten soll
Um auf den Wert zuzugreifen braucht man im scriptTeil ".value"
Im "template-Teil" braucht man .value nicht.


ToDo: Optional Type 

# Computed properties
Wie Getter

Todo: Übung 8 -> v-if ersetzen mit computed Property. Nur Bücher mit mehr als 300 Seiten anzeigen


# Form bindings

v-model für Forms. Value wird gebunden und Event wird abgefangen. Erkennt automatisch das Element in dem es eingebunden ist. input|checkbos...
2-way-binding: 

Suche mit v-model implementieren

# Livecycle

    mounted


# Watcher
Was soll beobachtet werden?
Jedesmal wenn sich der Wert ändert, wird eine Callback aufgerufen mit dem alten und dem neuen WErt.


# WatchEffekt
kombiniert WAtcher und 
Seiteneffekte sind erlaubt
sammeln von Dependencies
