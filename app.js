const kamel = new Vue({
    el: '#app',
    data: {
        titulo: 'kamel es bueno',
        frutas: [
            {nombre: 'pera', cantidad: 0},
            {nombre: 'manzana', cantidad: 31},
            {nombre: 'naranja', cantidad: 45},
            {nombre: 'platano', cantidad: 7}
        ],
        nuevafruta:'',
        total: 0
    },
    methods: {
        agregarfruta() {
            this.frutas.push({
                nombre: this.nuevafruta, cantidad: 0
            });
            this.nuevafruta = '';
        }
    },
    computed: {
        sumarfrutas() {
            this.total=0;
            for(fruta of this.frutas){
                this.total = this.total+fruta.cantidad;
            }
            return this.total;
        }
    }
})