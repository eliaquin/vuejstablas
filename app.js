new Vue({
    el: "#app",
    data: {
        objetos: JSON.parse(data),
        polaridad: -1
    },
    methods: {
        Sortear: function () {
            var items = this.objetos;
            var vm = this;
            this.polaridad = this.polaridad * -1;

            this.objetos = items.sort(function (a, b) {
                var nameA = a['FIELD1'].toUpperCase(); // ignore upper and lowercase
                var nameB = b['FIELD1'].toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1 * vm.polaridad;
                }
                if (nameA > nameB) {
                    return 1 * vm.polaridad;
                }
                return 0;
            });

        },
        SortearValores: function (propiedad) {
            var items = this.objetos;
            var vm = this;
            this.polaridad = this.polaridad * -1;
            var vm = this;

            this.objetos = items.sort(function (a, b) {
                var nameA = a[propiedad].toUpperCase(); // ignore upper and lowercase
                var nameB = b[propiedad].toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1 * vm.polaridad;
                }
                if (nameA > nameB) {
                    return 1 * vm.polaridad;
                }

                // names must be equal
                return 0;
            });

        }

    }
});