import shade from '../../node_modules/shadejs/src/index';
import skate from '../../node_modules/skatejs/src/index';

export default skate('x-list', {
  template: shade(`
    <div class="inner">
      <button on="click:newItem">New</button>
      <div class="list">
        <content name="items" multiple></content>
      </div>
    </div>
  `)
});
