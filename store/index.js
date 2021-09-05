import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadData: [],
    },
    mutations: {
      setPostState(state, posts) {
        state.loadData = posts
      },
      addPostState(state, post) {
        state.loadData.push(post)
      },
      editPostState(state, editPost) {
        const postIndex = state.loadData.findIndex(
          (post) => post.id === editPost.id
        )
        if (postIndex != -1) {
          state.loadData[postIndex] = editPost
        }
      },
      deletePostState(state, postID) {
        const postIndex = state.loadData.findIndex((post) => post.id === postID)
        state.loadData.splice(postIndex, 1)
        console.log("=> call deletePostState");
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get(
            'https://nuxt-web-blog-1b8de-default-rtdb.firebaseio.com/post.json'
          )
          .then((res) => {
            const postData = []
            for (const key in res.data) {
              postData.push({ ...res.data[key], id: key })
            }
            vuexContext.commit('setPostState', postData)
            console.log("=> call nuxtServerInit !!");
          })
          .catch((e) => context.error(e))
      },
      addPost(vuexContext, post) {
        const createPost = { ...post }
        return axios
          .post(
            'https://nuxt-web-blog-1b8de-default-rtdb.firebaseio.com/post.json',
            createPost
          )
          .then((res) => {
            console.log(res.data)
            vuexContext.commit('addPostState', {
              ...createPost,
              id: res.data.name,
            })
          })
      },
      editPost(vuexContext, post) {
        return axios
          .put(
            'https://nuxt-web-blog-1b8de-default-rtdb.firebaseio.com/post/' +
              post.id +
              '.json',
            post
          )
          .then((res) => {
            vuexContext.commit('editPostState', post)
          })
      },
      deletePost(vuexContext, postID) {
        return axios
          .delete(
            'https://nuxt-web-blog-1b8de-default-rtdb.firebaseio.com/post/' +
              postID +
              '.json'
          )
          .then((res) => {
            vuexContext.commit('deletePostState', postID)
          })
      },
    },
    getters: {
      getAllPosts(state) {
        console.log("=> call getAllPosts");
        return state.loadData
      },
    },
  })
}

export default createStore
