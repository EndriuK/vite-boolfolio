<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    data() {
        return {
            name: '',
            surname: '',
            email: '',
            phone: '',
            content: ''
        };
    },
    methods: {
        sendForm() {
            const data = {
                name: this.name,
                surname: this.surname,
                email: this.email,
                phone: this.phone,
                content: this.content
            };

            axios.post(`${store.baseUrl}/contacts`, data)
                .then((res) => {
                    if (res.data.success) {
                        this.name = '';
                        this.surname = '';
                        this.email = '';
                        this.phone = '';
                        this.content = '';
                    }
                })
                .catch((error) => {
                    console.error("C'è stato un errore nell'invio della form:", error);
                });
        }
    }
};
</script>

<template>
    <div class="my-5">
        <div class="container">
            <div class="row gy-5">
                <div class="col-12">
                    <h1 class="text-center">Contatti</h1>
                </div>
                <div class="col-12">
                    <form @submit.prevent="sendForm">
                        <div class="row gy-3">
                            <div class="col-12 col-md-6">
                                <label class="control-label" for="name">Nome</label>
                                <input type="text" class="form-control" name="name" id="name" v-model="name" placeholder="Nome" required>
                            </div>
                            <div class="col-12 col-md-6">
                                <label class="control-label" for="surname">Cognome</label>
                                <input type="text" class="form-control" name="surname" id="surname" v-model="surname" placeholder="Cognome" required>
                            </div>
                            <div class="col-12 col-md-6">
                                <label class="control-label" for="email">Email</label>
                                <input type="email" class="form-control" name="email" id="email" v-model="email" placeholder="Email" required>
                            </div>
                            <div class="col-12 col-md-6">
                                <label class="control-label" for="phone">Telefono</label>
                                <input type="text" class="form-control" name="phone" id="phone" v-model="phone" placeholder="Telefono" required>
                            </div>
                            <div class="col-12 col-md-6">
                                <label class="control-label" for="content">Messaggio</label>
                                <textarea class="form-control" name="content" id="content" v-model="content" placeholder="Messaggio" required></textarea>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-sm btn-success">Invia</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
