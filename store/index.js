import Vuex from "vuex";
import htmlContent from './html_content'

const createStore = () => {
  return new Vuex.Store({
    modules:{
      htmlContent
    }
  });
};


export default createStore;
