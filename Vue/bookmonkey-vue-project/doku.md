
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

## Event Listener Directive
v-on directive to listen to DOM events
Das Event obj wird automatisch übergeben

    <form @submit.prevent="onSubmit"></form>
Hier soll die Seite nicht neu geladen werden, wie das früher bewi Forms war
Wir wollen die DAten selber versenden.
