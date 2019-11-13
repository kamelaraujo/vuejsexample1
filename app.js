const kamel = new Vue({
    el: '#app',
    data: {
        titulo: 'kamel es bueno',
        frutas: [
            {nombre: 'pera', cantidad: 10},
            {nombre: 'manzana', cantidad: 31},
            {nombre: 'naranja', cantidad: 45},
            {nombre: 'platano', cantidad: 7}
        ],
        nuevafruta:'',
        nuevacantidad:''
    },
    methods: {
        agregarfruta() {
            this.frutas.push({
                nombre: this.nuevafruta, cantidad: this.nuevacantidad
            })
        }
    }
})