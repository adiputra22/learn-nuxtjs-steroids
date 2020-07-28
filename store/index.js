import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts;
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        vuexContext.commit('setPosts', [
                            {
                                id: '1',
                                title: 'this is title',
                                previewText: 'preview text here',
                                content: 'this is content',
                                thumbnail: 'https://images.pexels.com/photos/2092872/pexels-photo-2092872.jpeg'
                            },
                            {
                                id: '2',
                                title: 'this is title 2',
                                previewText: 'preview text here',
                                content: 'this is content',
                                thumbnail: 'https://images.pexels.com/photos/2092872/pexels-photo-2092872.jpeg'
                            },
                            {
                                id: '3',
                                title: 'this is title 3',
                                previewText: 'preview text here',
                                content: 'this is content',
                                thumbnail: 'https://images.pexels.com/photos/2092872/pexels-photo-2092872.jpeg'
                            },
                            {
                                id: '4',
                                title: 'this is title 4',
                                previewText: 'preview text here',
                                content: 'this is content',
                                thumbnail: 'https://images.pexels.com/photos/2092872/pexels-photo-2092872.jpeg'
                            }
                        ]);

                        resolve();
                    }, 1500);
                });
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts);
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts;
            }
        }
    });
}

export default createStore;