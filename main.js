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
        ]

    },
    methods: {
        Img1Selection: function(){
            this.imgPrincipale = "img/img1.jpg";
        },
        Img2Selection: function(){
            this.imgPrincipale = "img/img2.jpg";
        },
        Img3Selection: function(){
            this.imgPrincipale = "img/img3.jpg";
        },
        Img4Selection: function(){
            this.imgPrincipale = "img/img4.jpg";
        },
    }
})
