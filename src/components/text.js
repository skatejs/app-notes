import shade from '../../node_modules/shadejs/src/index';
import skate from '../../node_modules/skatejs/src/index';

export default skate('x-text', {
  created () {
    this.__heightChecker = document.createElement('span');
  },

  attached () {
    skate.ready(() => {
      var textarea = this.querySelector('textarea');
      document.body.appendChild(this.__heightChecker);
      this.__heightChecker.style.width = textarea.offsetWidth;
      this.__heightChecker.style.height = 'auto';
      this.__heightChecker.style.position = 'absolute';
      this.__heightChecker.style.left = '-10000px';
      skate.ready(() => this.handleKeyup());
    });
  },

  detached () {
    this.__heightChecker.remove();
  },

  get properties () {
    return {
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
          skate.ready(() => this.handleKeyup());
        }
      }
    };
  },

  get prototype () {
    return {
      handleKeyup () {
        var textarea = this.querySelector('textarea');
        this.__heightChecker.innerHTML = textarea.value.split('\n').map(line => '<p style="padding: 0; margin: 0;">.' + line + '</p>').join('');
        textarea.style.height = this.__heightChecker.offsetHeight + 'px';
      }
    };
  },

  get template () {
    return shade(`
      <div class="inner">
        <button type="button" on="click:removeItem">Remove</button>
        <input type="text" name="name" on="change:updateItem">
        <textarea name="content" on="change:updateItem keyup"></textarea>
      </div>
    `);
  }
});
