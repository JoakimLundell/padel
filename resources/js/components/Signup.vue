<template>
<div>
    <div class="modal" :class="{'is-active': modal}">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <p class="title is-2">{{modalcontent.title}}</p>
                <p class="subtitle is-5">{{modalcontent.content}}</p>
                <button class="button is-link" @click="closeModal">Ok</button>
            </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
    </div>
    <form @submit="checkValidation" novalidate="true">
        
        <div class="field">
            <label class="label">Namn</label>
            <div class="control">
                <input 
                    class="input" 
                    v-bind:class="{'is-danger': error.name}" 
                    type="text" 
                    placeholder="Ditt namn" 
                    v-model="registration.name"
                    @focus="error.name = null"
                    @blur="error.name = null"
                    >
                <!--p v-if="error.name" class="help is-danger">Glöm inte skriva namn</p>
                {{error.name}}-->
            </div>
        </div>

        <div class="field">
            <label class="label">Epost</label>
            <div class="control">
                <input 
                    class="input" 
                    :class="{'is-danger': error.email}" 
                    type="email" 
                    placeholder="Din epost" 
                    v-model="registration.email"
                    @focus="error.email = null"
                    @blur="error.email = null"
                    >
            </div>
            <!--p v-if="error.email" class="help is-danger">Epostadressen är inte korrekt</p-->
        </div>


        <div class="field">
            <label class="label">Mobilnummer</label>
            <div class="control">
                <input 
                    class="input" 
                    :class="{'is-danger': error.phone}" 
                    type="text" 
                    placeholder="Ditt mobilnummer" 
                    v-model="registration.phone"
                    @focus="error.phone = null"
                    @blur="error.phone = null"
                    >
            </div>
        </div>

        <div class="field">
            <label class="label">Padel nivå</label>
            <div class="control">
                <div class="select">
                <select v-model="registration.level" :class="{'is-warning': error.level}">
                    <option>Lätt</option>
                    <option>Mellan</option>
                    <option>Avancerad</option>
                </select>
                </div>
            </div>
        </div>

        <div class="field">
            <label class="label">Boende</label>
            <div class="control">
                <div 
                    class="select" 
                    :class="{'is-danger': error.accomodation}">
                <select 
                    v-model="registration.accomodation" 
                    @focus="error.accomodation = null"
                    @blur="error.accomodation = null">
                    <option>Välj nedan</option>
                    <option>Enkelrum</option>
                    <option>Dubbelrum</option>
                </select>
                </div>
            </div>
        </div>

        <div class="field">
            <label class="label">Matallergier:</label>
                <div class="control">
                <input class="input" type="text" v-model="registration.allergies">
            </div>
        </div>

        <div class="field">
        <div class="control">
            <label class="checkbox" :class="{'checkbox-warning': error.consent}" @click="error.consent = null">
            <input 
                type="checkbox" 
                v-model="registration.consent">
            Samtyckte att vi spara data om dig <a @click="openModalAboutConsent">Läs mer</a>
            </label>
        </div>
        </div>


        <div class="field is-grouped">
            <div class="control">
                <button class="button is-link">Anmäl</button>
            </div>
            <div class="control">
                <button class="button is-link is-light" @click="cancelForm">Ångra</button>
            </div>
        </div>

    </form>
</div>
</template>

<script>
export default {
    data: function() {
        return {
            registration: {
                name: null,
                email: null,
                phone: null,
                level: 'Lätt',
                accomodation: 'Välj nedan',
                allergies: null,
                consent: false
            },
            error: {
                name: null,
                email: null,
                phone: null,
                level: null,
                accomodation: null,
                consent: null
                
            },
            loading: false,
            modal: false,
            modalcontent:  {
                title: '',
                content: ''
            }
        }
    },

    methods: {

        onSubmit() {
            console.log(this.registration);
             axios.post('api/registration', this.registration)
                .then((res) => {
                
                    this.openModalConfirmation();
                    this.formReset();
                    this.$router.push('/registrations')

                })
                .catch((err) => console.error(err));
        },

        checkValidation(e) {
            e.preventDefault();
  
            if(!this.registration.name){
                this.error.name = true;
            }

            if(!this.registration.email){
                this.error.email = true;
            } else if(!this.emailIsValid(this.registration.email)) {
                this.error.email = true;
            }

            if(!this.registration.phone){
                this.error.phone = true;
            }

            if(!this.registration.level){
                this.error.level = true;
            }

            if(!this.registration.accomodation){
                this.error.accomodation = true;          
            }
    
            if(this.registration.accomodation==="Välj nedan") {
                this.error.accomodation = true;
            }

            if(!this.registration.consent == true) {
                console.log(this.registration.consent);
                this.error.consent = true;
            }
            /* Ok */
            if(!this.error.name && !this.error.email && !this.error.phone && !this.error.level && !this.error.accomodation && !this.error.consent) {
                this.onSubmit();
            }
            
        },

        emailIsValid (email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        },

        closeModal() {
            this.modal = false;
        },

        openModalAboutConsent() {
            this.modalcontent.title = "Samtycke";
            this.modalcontent.content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet hendrerit mauris et pharetra. Ut vel consequat libero. Donec interdum nibh sed feugiat interdum. Donec sed faucibus sem. Aenean maximus, erat in eleifend hendrerit, elit quam sollicitudin massa, efficitur ultricies ex nunc quis nibh. Sed id tincidunt felis, nec tristique arcu. Nullam dolor urna, maximus vitae rutrum nec, feugiat lacinia urna. Integer tincidunt fermentum eros vel faucibus. Duis eget facilisis odio, id aliquet elit. Fusce in ornare purus. Ut iaculis lacinia nulla, id lacinia velit egestas ultricies. Nam iaculis, felis vel pellentesque semper, velit turpis eleifend erat, in ornare purus risus et leo. Vestibulum pharetra nec felis ut suscipit. Suspendisse potenti. Cras posuere euismod odio, eget iaculis nisl pellentesque quis. Sed a mauris mollis, fermentum nulla in, dignissim tortor. In dictum, metus ac dignissim gravida, mauris libero dapibus tellus, a tempor massa neque at risus. Vestibulum luctus mollis posuere. Donec sed quam semper, dignissim ex a, ullamcorper augue.";
            this.modal = true;
        },

        openModalConfirmation() {
            this.modalcontent.title = "Tack";
            this.modalcontent.content = "Din anmälan är skickad och vi kommer höra av oss.";
            this.modal = true;
        },

        formReset() {
            this.registration.name = null;
            this.registration.email = null;
            this.registration.phone = null;
            this.registration.level = 'Lätt';
            this.registration.accomodation = 'Välj nedan';
            this.registration.allergies = null;
            this.registration.consent = false
        },

        errorReset() {
            this.error.name = null;
            this.error.email = null;
            this.error.phone = null;
            this.error.level = null;
            this.error.accomodation = null;
            this.error.allergies = null;
            this.error.consent = false
        },

        cancelForm(e) {
            e.preventDefault();
            this.formReset();
            this.errorReset();
        }

    }
}
</script>

<style scoped>
    .checkbox-warning {
        border: 1px solid red; border-radius: 2px
    }
</style>