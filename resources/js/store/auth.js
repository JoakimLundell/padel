import axios from 'axios';

export default {
    namespaced: true,

    state: {
        token: null,
        user: null
    },

    getters: {
        authenticated (state) {
            return state.token && state.user
        },

        user (state) {
            return state.user
        }
    },


    mutations: {
        SET_TOKEN (state,token) {
            state.token = token
        },
        SET_USER (state, data) {
            state.user = data
        }
    }, 

   
    
    actions: {
        async signin ({ dispatch }, credentials) {
            let response = await axios.post('api/signin', credentials);
            return dispatch('attempt', response.data.token);
        },

        async attempt ({ commit, state }, token) {
            /*  only set if token is given. Because this is run
                by unautorized browser without localstorage token on
                on every visit
            */
            if(token) {
                commit('SET_TOKEN', token);
                localStorage.setItem('token', token);
            } 

            /* If we don't have token try not to get user */
            if(!state.token) {
                return
            }
            
            try {
                let response = await axios.get('api/me', {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                })
            
                commit('SET_USER', response.data)
            
            } catch (error) {

                commit('SET_TOKEN', null);
                commit('SET_USER', null)
                localStorage.removeItem('token');
            }
        },

        signout  ({ commit, state }) {
            return axios.post('api/signout', null, {
                headers: {
                    'Authorization': 'Bearer ' + state.token
                }
            }).then(()=> {
                commit('SET_TOKEN', null);
                commit('SET_USER', null)
                localStorage.removeItem('token');
            });
            
        }

    }
}