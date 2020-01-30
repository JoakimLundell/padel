<template>
    <div>
        <div v-if="loading">Laddar...</div>
        
        <div v-if="error" class="error">
            <p>{{ error }}</p>
            <p>
                <button @click.prevent="fetchData">
                    Try Again
                </button>
            </p>
        </div>
        
        <!--ul v-if="registrations">
            <li v-for="registration in registrations" v-bind:key="registration.id">
                <strong>Namn:</strong> {{ registration.name }},
                <strong>Epost:</strong> {{ registration.email }}
                <strong>Telefon:</strong> {{ registration.phone }}
                <strong>Nivå:</strong> {{ registration.level }}
                <strong>Boende:</strong> {{ registration.accomodation }}
                <strong>Matallergi:</strong> {{ registration.allergies }}
            </li>
        </ul-->

        <div class="table-container">
            <table class="table is-responsive" v-if="registrations">
                <thead>
                    <tr>
                    <th>Namn</th>
                    <th>Epost</th>
                    <th>Telefon</th>
                    <th>Nivå</th>
                    <th>Boende</th>
                    <th>Matallergi</th>
                    </tr>
                </thead>
                <tbody v-for="registration in registrations" v-bind:key="registration.id">
                    <tr>
                    <th>{{ registration.name }}</th>
                    <td>{{ registration.email }}</td>
                    <td>{{ registration.phone }}</td>
                    <td>{{ registration.level }}</td>
                    <td>{{ registration.accomodation }}</td>
                    <td>{{ registration.allergies }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>


</template>

<script>
export default {
    data: function() {
        return {
            loading: false,
            registrations: null,
            error: null
        }
    },

    created() {
        this.fetchData();
    },

    methods: {
        fetchData() {
            this.error = this.registrations = null;
            this.loading = true;
            axios
                .get('/api/registrations')
                .then(response => {
                    this.loading = false;
                    this.registrations = response.data;
                }).catch(error => {
                    this.loading = false;
                    this.error = error.response.data.message || error.message;
                });
        }
    }
}
</script>