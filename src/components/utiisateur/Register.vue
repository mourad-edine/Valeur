<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import Layout from '../simple/layout/Layout.vue';
export default {
    name: 'Register',
    mounted() {
        let user = localStorage.getItem('client_id');
        if (user) {
            this.$router.push({ name: 'home' });
        }
    },
    data() {
        return {
            nom: '',
            adresse: '',
            password: ''
        };
    },
    methods: {
        naviguer() {
            this.$router.push({ name: 'login' });
        },
        async ajouter() {
            const form = new FormData();
            form.append('nom', this.nom);
            form.append('adresse', this.adresse);
            form.append('password', this.password);
            if (this.nom == '' || this.adresse == '' || this.password == '') {
                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    title: 'vous devez tout completer',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            else {
                await axios.post('http://127.0.0.1:8000/api/adduser', form)
                    .then(reponse => {
                    console.log(reponse);
                });
                this.$router.push({ name: 'login' });
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'inscription reussi',
                    showConfirmButton: false,
                    timer: 1000
                });
            }
        },
    },
    components: { Layout }
}

</script>


<template>
    <Layout>
    <div class="logo"></div>
    <div class="login-block" style="margin-bottom: 250px;">
        <form>
            <h1>Register</h1>
            <input type="text" placeholder="Username" id="username" v-model="nom" required />
            <input type="text" placeholder="adresse" id="adresse" v-model="adresse" required />
            <input type="password" placeholder="Password" id="password" v-model="password" required />
            <button type="button" @click="ajouter">soumettre</button>
            <div>
                <p class="text-gray-700 m-2 cursor-pointer" @click="naviguer">se connecter</p>
            </div>
        </form>
    </div>
</Layout>
</template>

<style>
.logo {
    width: 300px;
    height: 36px;
    margin: 30px auto;
}

.login-block {
    width: 320px;
    padding: 20px;
    border-radius: 5px;
    border-top: 5px solid #f97316;
    margin: 0 auto;
}

.login-block h1 {
    text-align: center;
    color: #000;
    font-size: 18px;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 20px;
}

.login-block input {
    width: 100%;
    height: 42px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    font-size: 14px;
    font-family: Montserrat;
    padding: 0 20px 0 50px;
    outline: none;
}

.login-block input#username {
    background: #fff url('http://i.imgur.com/u0XmBmv.png') 20px top no-repeat;
    background-size: 16px 80px;
}

.login-block input#username:focus {
    background: #fff url('http://i.imgur.com/u0XmBmv.png') 20px bottom no-repeat;
    background-size: 16px 80px;
}

.login-block input#password {
    background: #fff url('http://i.imgur.com/Qf83FTt.png') 20px top no-repeat;
    background-size: 16px 80px;
}

.login-block input#password:focus {
    background: #fff url('http://i.imgur.com/Qf83FTt.png') 20px bottom no-repeat;
    background-size: 16px 80px;
}

.login-block input:active,
.login-block input:focus {
    border: 1px solid #f97316;
}

.login-block button {
    width: 100%;
    height: 40px;
    background: #f97316;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid #f97316;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 14px;
    font-family: Montserrat;
    outline: none;
    cursor: pointer;
}

.login-block button:hover {
    background: #f97316;
}
</style>