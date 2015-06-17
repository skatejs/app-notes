import shade from '../../node_modules/shadejs/src/index';
import skate from '../../node_modules/skatejs/src/index';

export default skate('x-item', {
  properties: {
    data: {
      get: function () {
        return {
          id: this.id,
          name: this.name,
          content: this.content
        };
      },
      set: function (value) {
        value = value || {};
        this.id = value.id;
        this.name = value.name;
        this.content = value.content;
      }
    },
    selected: {
      attr: true,
      type: Boolean
    }
  },
  template: shade(`
    <div on="click:selectItem">
      <content name="name" text></content>
    </div>
  `)
});
