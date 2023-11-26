<template>
    <body class="signUp">
        <section>
            <div class="comp">
                <form name="form1" action="index.html" method="get" class="form" @submit="onSubmitMethod" >
                    <div class="subox">
                        <div class="div1">
                            <p class="text">Email</p>
                            <input class="input" type="text" name="email" placeholder="Email" required><br>
                        </div>
                        <div class="div1">
                            <p class="text">Password</p>
                            <input v-model="password" class="input" type="password" name="password" placeholder="Password" required><br>
                        </div>
                        <p v-if="errorMessage" style="color:darkred">{{ errorMessage }}</p>
                    </div>
                    <input class="signup_btn" v-on:click="passwordClick()" type="submit" value="Signup" >
                </form>
            </div>
        </section>
    </body>
</template>

<style>
    @import '../css/signupStyle.css';
    @import '../css/style.css';
</style>

<script>
    export default {
        name: "newSignUp",
    
        data() {
            return {
                password: '',
                errorMessage: ''
            };
        },

        
        methods: {
            passwordClick() {
                let errorM = this.CheckPassword();
                this.errorMessage = errorM;
            },
            
  
            onSubmitMethod(e) {
                /*let sighForm = document.documentElement.getElementsByClassName("form");*/
                if (this.CheckPassword() != '' || this.password == '') {
                    e.preventDefault();
                }
            },

            

            CheckPassword() {
                
                let length = /^\w{8,14}$/;
                let upper = /.*[A-Z].*/;
                let lower = /(.*[a-z].*){2,}/;
                let number = /[0-9]/;
                let startUp = /^[A-Z]/;
                let special = /_/;
                
                //let regex = /(?=^\w{8,14}$)(?=.*[A-Z].*)(?=.*[a-z].*){2,}(?=[0-9])(?=^[A-Z])(?=_)/;

                if ((!length.test(this.password) || !upper.test(this.password) || !lower.test(this.password) ||
                        !number.test(this.password) || !startUp.test(this.password) || !special.test(this.password)) && this.password !== '') {
                    let errorMessage = 'Password invalid: \n';
                    if (this.password.length < 8) errorMessage += 'Password length should be at least 8 characters. \n';
                    if (this.password.length > 14) errorMessage += 'Password length should be at most 14 characters. \n';
                    if (!/(.*[A-Z].*)/.test(this.password)) errorMessage += 'Password should include at least one uppercase alphabet character. \n';
                    if (!/(.*[a-z].*){2,}/.test(this.password)) errorMessage += 'Password should include at least two lowercase alphabet character. \n';
                    if (!/([0-9])/.test(this.password)) errorMessage += 'Password should include at least one numeric value. \n';
                    if (!/(^[A-Z])/.test(this.password)) errorMessage += 'Password should start with an uppercase alphabet. \n';
                    if (!/(_)/.test(this.password)) errorMessage += 'Password should include the character "_". \n';
                    return errorMessage;
                }
                else {
                    return '';
                }

                /*
                if (!length.test(this.password) && this.password !== '') {
                    if (this.password.length < 8) {
                        this.errorMessage = 'Password invalid: Password length should be at least 8 characters';
                    } else {
                        this.errorMessage = 'Password invalid: Password length should be at most 14 characters';
                    }
                    return false;
                } 
                if (!uppercase.test(this.password) && this.password !== '') {
                    this.errorMessage = 'Password invalid: Password should include at least one uppercase alphabet character';
                    return false;
                }
                if (!lowercase.test(this.password) && this.password !== '') {
                    this.errorMessage = 'Password invalid: Password should include at least two lowercase alphabet character';
                    return false;
                }
                if (!number.test(this.password) && this.password !== '') {
                    this.errorMessage = 'Password invalid: Password should include at least one numeric value';
                    return false;
                }
                if (!startUpper.test(this.password) && this.password !== '') {
                    this.errorMessage = 'Password invalid: Password should start with an uppercase alphabet';
                    return false;
                }
                if (!special.test(this.password) && this.password !== '') {
                    this.errorMessage = 'Password invalid: Password should include the character "_"';
                    return false;
                }

                else {
                    this.errorMessage = '';
                    return true;
                }
                */
            }
        },
        

        /*watch: {
            password() {
                this.CheckPassword();
            }
        }*/
};
    
</script>