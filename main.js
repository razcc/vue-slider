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
            this.indice = 0
            this.imgPrincipale = this.imgArray[indice];
        },
        Img2Selection: function () {
            this.indice = 1
            this.imgPrincipale = this.imgArray[indice];
        },
        Img3Selection: function () {
            this.indice = 2
            this.imgPrincipale = this.imgArray[indice];
        },
        Img4Selection: function () {
            this.indice = 3
            this.imgPrincipale = this.imgArray[indice];
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
                return this.indice = lunghezza;
            } else {
                return this.indice--;
            }
        },

        
    },
   

})
