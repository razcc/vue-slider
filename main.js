var app = new Vue({
    el: "#root",
    data: {
        img1: "img/img1.jpg",
        img2: "img/img2.jpg",
        img3: "img/img3.jpg",
        img4: "img/img4.jpg",
        imgPrincipale: "",
        imgArray: [
            "img/img1.jpg",
            "img/img2.jpg",
            "img/img3.jpg",
            "img/img4.jpg",
        ],
        indice: 0,


    },
    methods: {
        Img1Selection: function () {
            this.imgPrincipale = this.imgArray[indice];
        },
        Img2Selection: function () {
            this.imgPrincipale = "img/img2.jpg";
        },
        Img3Selection: function () {
            this.imgPrincipale = "img/img3.jpg";
        },
        Img4Selection: function () {
            this.imgPrincipale = "img/img4.jpg";
        },

        arrowDown: function () {
            let lunghezza = this.imgArray.length - 1;
            console.log(lunghezza)

            if (this.indice >= lunghezza) {
                return this.indice = 0;

            } else {
                return this.indice++;

            }

        },
        arrowUP: function () {
            let lunghezza = this.imgArray.length - 1;
            console.log(lunghezza)
            console.log(this.indice)
            if (this.indice > lunghezza) {
                return this.indice = 0;
            } else if (this.indice == 0) {
                return this.indice = 3;
            } else {
                return this.indice--;
            }
        }
    }

})
