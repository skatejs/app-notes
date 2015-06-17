import skate from '../../node_modules/skatejs/src/index';

var prefix = 'writer-';
var store = window.localStorage;

export default skate('x-store', {
  prototype: {
    get all () {
      return Object.keys(store)
        .filter(key => key.match(/writer-\d+/))
        .map(key => key.replace(prefix, ''))
        .map(key => this.one(key));
    },
    key (key) {
      return prefix + key;
    },
    one (key) {
      return JSON.parse(store.getItem(this.key(key)));
    },
    remove (key) {
      store.removeItem(this.key(key));
    },
    save (key, data) {
      this.dispatchEvent(new CustomEvent('data', { bubbles: true, detail: { name: key, data: data } }));
      store.setItem(this.key(key), JSON.stringify(data));
      return this;
    }
  }
});
