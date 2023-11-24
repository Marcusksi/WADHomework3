<template>
    <body class="login">
        <section>
            <div class="comp">
                <form action= "index.html" method="get" class="form">
                    <div class="subox">
                        <div class="div1">
                            <p class="text">Email</p>
                            <input class="input" type="text" name="email" placeholder="Email" required><br>
                        </div>
                        <div class="div1">
                            <p class="text">Password</p>
                            <input class="input" type="password" name="password" placeholder="Password" required><br>
                        </div>
                    </div>
                    <input class="signup_btn" type="submit" value="Signup">
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
    };
</script>