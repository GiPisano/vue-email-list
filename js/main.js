const { createApp } = Vue;

createApp({
    data() {
        return {
            mails: [],
            loading: false,
            numMail: 0,
        };
    },

    methods: {
        generateMail() {
            const mailRequests = [];

            for (let i = 1; i <= 10; i++) {
                const request = axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        this.loading = true;
                        this.mails.push(response.data.response);
                        this.numMail++;

                        if (this.numMail == 10) {
                            this.loading = false;
                        }
                    });

                mailRequests.push(request);
            }
        }
    },

    created() {
        this.generateMail();
    }
}).mount('#app');



