import Vuex from 'vuex';
import Cookie from 'js-cookie'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: [],
            token: null
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts;
            },
            addPost(state, post) {
                state.loadedPosts.push(post);
            },
            editPost(state, editedPost) {
                const postIndex = state.loadedPosts.findIndex( post => post.id === editedPost.id);

                state.loadedPosts[postIndex] = editedPost;
            },
            setToken(state, token) {
                state.token = token;
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return this.$axios.$get(`/posts.json`)
                    .then(data => {
                        const postArray = [];

                        for (const key in data) {
                            postArray.push({ ...data[key], id: key });
                        }

                        vuexContext.commit('setPosts', postArray);
                    })
                    .catch(e => context.error(e))
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts);
            },
            addPost(vuexContext, post) {
                const createdPost = {
                    ...post, 
                    updatedDate: new Date() 
                };

                return this.$axios.$post(`/posts.json?auth=${vuexContext.state.token}`, createdPost)
                .then(data => {
                    vuexContext.commit('addPost', { ...createdPost, id: data.name });
                })
                .catch(e => console.log(e));
            },
            editPost(vuexContext, editedPost) {
                return this.$axios.$put(`/posts/${editedPost.id}.json?auth=${vuexContext.state.token}`, editedPost)
                    .then(res => {
                        vuexContext.commit('editPost', editedPost);
                    })
                    .catch(e => {
                        console.log(e);
                        
                        // jika error 401
                        // redirect ke halaman '/admin/auth'
                    });
            },
            authenticateUser(vuexContext, authData) {
                let url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";

                if (!authData.isLogin) {
                    // register /signup
                    url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
                }

                return this.$axios.$post(
                    url + process.env.FIREBASE_API_KEY, {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true
                })
                .then(result => {
                    console.log(result);
                    vuexContext.commit('setToken', result.idToken);

                    // simpan di cookie
                    Cookie.set('token', result.idToken);
                })
                .catch(error => console.log(error));
            },
            checkToken(vuexContext, request) {
                if (request) {
                    // kita ambil cookie
                    if (!request.headers.cookie) {
                        console.log('cookie di headers kosong');
                        return;
                    }

                    console.log('cookie header: ' + request.headers.cookie);

                    let token = request.headers.cookie.split(';')
                        .find(item => item.trim().startsWith('token='));

                    if (!token) {
                        console.log('token tidak ada saat parsing');
                    }

                    let realToken = token.split('=')[1];

                    console.log('realToken: ' + realToken);

                    vuexContext.commit('setToken', realToken);
                }
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts;
            },
            isAuthenticate(state) {
                return state.token != null
            }
        }
    });
}

export default createStore;