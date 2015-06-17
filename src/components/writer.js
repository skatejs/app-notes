import item from './item';
import shade from '../../node_modules/shadejs/src/index';
import skate from '../../node_modules/skatejs/src/index';

export default skate('x-writer', {
  created () {
    this.handleResize = this.handleResize.bind(this);
  },
  attached () {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  detached () {
    window.removeEventListener('resize', this.handleResize);
  },
  properties: {
    selected: {
      set: function (newValue, oldValue) {
        if (oldValue) {
          oldValue.selected = false;
        }

        if (newValue) {
          this.text.data = newValue.data
          this.store.save('selected', newValue.id);
          newValue.selected = true;
        }
      }
    },
    storeId: {
      attr: true,
      set: function (value) {
        skate.ready(() => {
          this.store = document.getElementById(value);
          this.init();
        });
      }
    }
  },
  prototype: {
    init () {
      this.list.items = '';
      this.store.all.forEach(storedItem => {
        this.list.items.append(item(storedItem));
      });

      if (this.list.items.length) {
        this.selected = this.list.items.find({ id: this.store.one('selected') })[0] || this.list.items.at(0);
      } else {
        this.handleNewItem();
      }
    },
    handleNewItem () {
      var id = this.list.items.length + 1;
      this.selected = item({
        id: id,
        name: 'New document ' + id
      });
      this.list.items.append(this.selected);
      this.store.save(id, this.selected.data);
      this.handleResize();
    },
    handleResize () {
      this.text.style.width = (window.innerWidth - this.list.offsetWidth - 2) + 'px';
    },
    handleSelectItem (e) {
      this.selected = e.target;
    },
    handleUpdateItem (e) {
      this.list.items.find({ id: e.target.id })[0].data = e.target.data;
      this.store.save(e.target.id, e.target.data);
      this.handleResize();
    },
    handleRemoveItem (e) {
      var toRemove = this.list.items.find({ id: e.target.id })[0];
      var toSelect = toRemove.nextElementSibling || toRemove.previousElementSibling;

      this.list.items.remove(toRemove);
      this.store.remove(e.target.id);

      if (this.list.items.length) {
        this.selected = toSelect;
        this.handleResize();
      } else {
        this.handleNewItem();
      }
    }
  },
  template: shade(`
    <div on="newItem removeItem selectItem updateItem">
      <content name="list">
        <x-list></x-list>
      </content>
      <content name="text">
        <x-text></x-text>
      </content>
    </div>
  `)
});
