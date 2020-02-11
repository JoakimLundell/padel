<template>
    <section class="hero">
        <div class="hero-body">
    <div class="container">
      <div class="columns is-centered">
        <div class="column">
          <form @submit.prevent="submit" class="box">
            <div class="field">
              <label for="" class="label">Email</label>
              <div class="control">
                <input type="email" placeholder="example@gmail.com" class="input" v-model="form.email" required>
               
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Password</label>
              <div class="control ">
                <input type="password" placeholder="*******" class="input" v-model="form.password" required>
               
              </div>
            </div>
            <div class="field">
              <button class="button is-success">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
        </div>
    </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    
    data () {
        return {
        
            form: {
                email: null,
                password: null,
            }
        
        }
            
    },
    
    methods: {
        ...mapActions ({
          signin: 'auth/signin'
        }),

        submit () {
          this.signin(this.form).then(() => {
            this.$router.replace({
              name: 'registrations'
            }).catch(()=> {
              console.log('Failed');
            })
          });
        }
    }
}
</script>
