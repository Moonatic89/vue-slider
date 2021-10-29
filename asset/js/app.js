const app = new Vue(
    {
        el: "#app",
        data: {
            counter: 0,
            slides: [
                {
                    name: "Svezia",
                    text: "Lorem Ipsum",
                    image: './asset/img/01.jpg'

                }, {
                    name: "Svizzera",
                    text: "Lorem Ipsum",
                    image: './asset/img/02.jpg'

                }, {
                    name: "Gran Bretagna",
                    text: "Lorem Ipsum",
                    image: './asset/img/03.jpg'

                }, {
                    name: "Germania",
                    text: "Lorem Ipsum",
                    image: './asset/img/04.jpg'

                }, {
                    name: "Paradise",
                    text: "Lorem Ipsum",
                    image: './asset/img/05.jpg'

                },
            ]
        },
        methods: {
            slideUp() {
                this.counter--;
                console.log(this.counter)
                this.counterControl();
            },
            slideDown() {
                this.counter++;
                this.counterControl();
            },
            counterControl() {
                if (this.counter < 0) {
                    this.counter = 4;
                } else if (this.counter > 4) {
                    this.counter = 0;
                }
            }
        }
    })
