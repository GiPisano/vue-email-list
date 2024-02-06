const { createApp } = Vue;

createApp({
    data() {
        return {
            mails: [],
            loading: false,
        };
    },

    methods: {
        generateMail() {

            for (let i = 1; i <= 10; i++) {
                const request = axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        this.loading = true;
                        this.mails.push(response.data.response);

                        if (this.mails.length == 10) {
                            this.loading = false;
                        }
                    });
            }
        }
    },

    created() {
        this.generateMail();
    }
}).mount('#app');



