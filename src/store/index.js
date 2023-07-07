import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios";

const mongo_api = "http://localhost:5000/api/items/";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
  },
  getters: {
    getItems: (state) => state.items,
    getTotalItems: (state) => state.items.length,
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    },
    addItem(state, newItem) {
      state.items.push(newItem);
    },
    deleteItem(state, itemId) {
      state.items = state.items.filter((item) => item.id !== itemId);
    },
  },
  actions: {
    async fetchItems({ commit }) {
      try {
        const res = await Axios.get(mongo_api);
        commit('setItems', res.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    },
    async addItem({ commit }, newItem) {
      try {
        await Axios.post(mongo_api, newItem);
        commit('addItem', newItem);
      } catch (error) {
        console.error('Error adding item:', error);
      }
    },
    async deleteItem({ commit }, itemId) {
      try {
        await Axios.delete(`${mongo_api}${itemId}`);
        commit('deleteItem', itemId);
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    },

  },
  modules: {
  }
})
// state:
 // items: []
//  getters: {
 // items: state => state.items

//  mutations:
 // fetchItem(state, { res }){
    //   state.items = res.data;
    // },
    // addItem(state, { payload }) {
    //   state.items.push(payload);
    // },
    // deleteItems( state,{ index }){ 
    //   state.items.splice(index, 1 );
    // },

    // actions: 

// async fetchItem({ commit }) {
    //   await Axios.get(mongo_api)
    //     .then(res => commit("fetchItem", { res }))
    //     .catch(err => alert(err));
    // },
    // async addItem({ commit }, payload) {
    //   await Axios.post(mongo_api, payload)
    //     .then(() => commit("addItem", { payload }))
    //     .catch(err => alert(err));
    // },
    // async deleteItem( {commit}, payload){
    //   alert(payload._id);
    //   await Axios.delete(mongo_api + payload._id)
    //     .then(() => commit("deleteItem", { payload }))
    //     .catch(err => alert(err));
    // },
