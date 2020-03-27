
<template>
<div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="main-panel">
        <div class="content-wrapper d-flex align-items-center auth">
          <div class="row w-100">
            <div class="col-lg-4 mx-auto">
              <div class="auth-form-light text-left p-5">
                <div class="navbar-brand brand-logo">
                  <img src="../assets/female.svg">
                </div>
                <h4>WELCOME SySyyYYY</h4>
                <form class="pt-3" v-on:submit.prevent="Login">
                <div class="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend bg-transparent">
                      <span class="input-group-text bg-transparent border-right-0">
                        <i class="mdi mdi-account-outline text-primary"></i>
                      </span>
                    </div>
                    <input type="email" class="form-control form-control-lg border-left-0" id="input_email" name="input_email" v-model="email" placeholder="E-Mail" required>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend bg-transparent">
                      <span class="input-group-text bg-transparent border-right-0">
                        <i class="mdi mdi-lock-outline text-primary"></i>
                      </span>
                    </div>
                    <input type="password" class="form-control form-control-lg border-left-0" name="input_password" id="input_password" v-model="password" placeholder="Kata Sandi" required>                        
                  </div>
                </div>
                <div class="my-3">
                  <input type="submit" href="#pablo" name="login" class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" value="MASUK">
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- content-wrapper ends -->
    </div>
    </div>
    <!-- page-body-wrapper ends -->
  <!-- </div>
        <div class="container">
            
            <form v-on:submit.prevent="Login">
                <div class="login">
                    <div class= "row justify-content-center align-items-center">
                        <div class="com-sm-6 card">
                            <div class="card-header">
                                <h3> Login Di sini </h3>
                        </div>
                <b-form-group
                id="lbl_email"
                label="email"
                label-for="input_email"
                >
                <b-form-input id="input_email" v-model="email" trim></b-form-input>
                </b-form-group>

                <b-form-group
                id="lbl_password"
                label="Password"
                label-for="input_password"
                >
                <b-form-input type="password" id="input_password" v-model="password" trim></b-form-input>
                </b-form-group>

                <button
                    type="submit"
                    href="#pablo"
                    class="btn btn-primary btn-round btn-lg btn-block"
                    tabindex="4"
                    pill
                    >LOGIN
                </button>
                 </div>
                    </div></div>
            </form>

           
            
        </div> -->

</template>
<script>
export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
        Login: function(){
            let email = this.email 
            let password = this.password
            this.$store.dispatch('login', { email, password })
            .then(() => this.$router.push('/'))
            .catch(err => console.log(err))
        }
    }
}
</script>