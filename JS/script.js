Vue.config.devtools = true;

let app = new Vue({
    el: "#root",
    data: {
        mailList: [],
        mailTest: ""

    },
    methods: {
        generateMailOnClick() {
            let urlMail = "https://flynn.boolean.careers/exercises/api/random/mail";
            this.mailList = [];

            for (let i = 0; i < 10; i++) {
                axios.get(urlMail).then((prova) => {
                    let mail = prova.data.response;
                    console.log(mail);
                    this.mailTest = mail;
                    this.mailList.push(mail);
                });
            }
        }
    },
    mounted() {

    }

});