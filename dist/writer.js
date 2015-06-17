// node_modules/shadejs/src/api/bindings.js
__30afad321aa942ab5b7e0f94e03c9294 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = [];
  module.exports = exports["default"];
  
  return module.exports;
}).call(this);

// node_modules/shadejs/src/util/find.js
__f7cdac50eb5ab481daecf5ceea975728 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  exports["default"] = function (el, selector) {
    return [].slice.call(el.querySelectorAll(selector));
  };
  
  module.exports = exports["default"];
  
  return module.exports;
}).call(this);

// node_modules/shadejs/src/api/bind.js
__0fd295ae0923510ede53666a3d3574ed = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _bindings = __30afad321aa942ab5b7e0f94e03c9294;
  
  var _bindings2 = _interopRequireDefault(_bindings);
  
  var _utilFind = __f7cdac50eb5ab481daecf5ceea975728;
  
  var _utilFind2 = _interopRequireDefault(_utilFind);
  
  exports['default'] = function (selector, fn) {
    _bindings2['default'].push(function (el, initialContent) {
      (0, _utilFind2['default'])(el, selector).forEach(function (target) {
        fn(el, target, initialContent);
      });
    });
  
    return this;
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/shadejs/src/constants.js
__e36edf18a17dcf5324fe9751b8a1b9f9 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  var DEFAULT_CONTENT_NAME = 'textContent';
  exports.DEFAULT_CONTENT_NAME = DEFAULT_CONTENT_NAME;
  var PROPERTY_EVENT_NAME = 'shade.property';
  exports.PROPERTY_EVENT_NAME = PROPERTY_EVENT_NAME;
  
  return module.exports;
}).call(this);

// node_modules/shadejs/src/api/listen.js
__719dff41a4326934d1a28c617f544f85 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _constants = __e36edf18a17dcf5324fe9751b8a1b9f9;
  
  exports['default'] = function (el, name, fn) {
    if (arguments.length === 2) {
      fn = name;
      name = undefined;
    }
  
    if (name) {
      el.addEventListener('' + _constants.PROPERTY_EVENT_NAME + '.' + name, fn);
    } else {
      el.addEventListener(_constants.PROPERTY_EVENT_NAME, fn);
    }
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/shadejs/src/event/event.js
__54920c17895bfa6441a499bd7371e0c0 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var CustomEvent = window.CustomEvent;
  
  exports["default"] = function (name, opts) {
    opts = opts || {};
  
    if (opts.bubbles === undefined) {
      opts.bubbles = true;
    }
  
    return new CustomEvent(name, opts);
  };
  
  module.exports = exports["default"];
  
  return module.exports;
}).call(this);

// node_modules/shadejs/src/event/dispatch.js
__fcb75a942b9356d33e58c17c22803e6f = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _event = __54920c17895bfa6441a499bd7371e0c0;
  
  var _event2 = _interopRequireDefault(_event);
  
  exports['default'] = function (element, name, opts) {
    return element.dispatchEvent((0, _event2['default'])(name, opts));
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/shadejs/src/event/notify.js
__9e2087969d2be0785f3cdeed00aff080 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _dispatch = __fcb75a942b9356d33e58c17c22803e6f;
  
  var _dispatch2 = _interopRequireDefault(_dispatch);
  
  var _constants = __e36edf18a17dcf5324fe9751b8a1b9f9;
  
  exports['default'] = function (el, name) {
    var opts = {
      bubbles: false,
      cancellable: false,
      detail: {
        name: name,
        value: el[name]
      }
    };
  
    (0, _dispatch2['default'])(el, _constants.PROPERTY_EVENT_NAME, opts);
  
    if (opts.detail.name) {
      (0, _dispatch2['default'])(el, '' + _constants.PROPERTY_EVENT_NAME + '.' + opts.detail.name, opts);
    }
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/shadejs/src/api/notify.js
__361eb36983d7a1380df74827fb9295d4 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _eventNotify = __9e2087969d2be0785f3cdeed00aff080;
  
  var _eventNotify2 = _interopRequireDefault(_eventNotify);
  
  exports['default'] = function (name) {
    return function (el) {
      (0, _eventNotify2['default'])(el, name);
    };
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/shadejs/src/util/parse-args.js
__5bf8e1efb94f40238c4a53ca6a38ee6b = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  var regexArgComments = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
  var regexArgNames = /([^\s,]+)/g;
  
  exports['default'] = function (func) {
    var fnStr = func.toString().replace(regexArgComments, '');
  
    var result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(regexArgNames);
  
    if (result === null) {
      result = [];
    }
  
    return result;
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/shadejs/src/util/prop-proxy.js
__d1717884013d426ed99f456f4ad8012f = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _apiListen = __719dff41a4326934d1a28c617f544f85;
  
  var _apiListen2 = _interopRequireDefault(_apiListen);
  
  var _eventNotify = __9e2087969d2be0785f3cdeed00aff080;
  
  var _eventNotify2 = _interopRequireDefault(_eventNotify);
  
  var _parseArgs = __5bf8e1efb94f40238c4a53ca6a38ee6b;
  
  var _parseArgs2 = _interopRequireDefault(_parseArgs);
  
  exports['default'] = function (el, name) {
    var descriptor = Object.getOwnPropertyDescriptor(el.constructor.prototype, name);
    var links = [];
    var value = el.getAttribute(name);
  
    if (descriptor && !descriptor.configurable) {
      return;
    }
  
    if (descriptor && descriptor.get) {
      links = (0, _parseArgs2['default'])(descriptor.get);
      links.forEach(function (link) {
        (0, _apiListen2['default'])(el, link, _eventNotify2['default'].bind(null, el, name));
      });
    }
  
    return Object.defineProperty(el, name, {
      configurable: true,
      get: function get() {
        var that = this;
        if (descriptor && descriptor.get) {
          return descriptor.get.apply(this, links.map(function (link) {
            return that[link];
          }));
        } else {
          return value;
        }
      },
      set: function set(newValue) {
        if (descriptor && descriptor.set) {
          descriptor.set.call(this, newValue);
        } else {
          value = newValue;
        }
  
        (0, _eventNotify2['default'])(this, name);
      }
    });
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/shadejs/src/binding/attr.js
__03ea17c86a5547492e465998f6413c9b = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _apiListen = __719dff41a4326934d1a28c617f544f85;
  
  var _apiListen2 = _interopRequireDefault(_apiListen);
  
  var _utilPropProxy = __d1717884013d426ed99f456f4ad8012f;
  
  var _utilPropProxy2 = _interopRequireDefault(_utilPropProxy);
  
  exports['default'] = function (el, target) {
    target.getAttribute('attr').split(' ').forEach(function (part) {
      var parts = part.split(':');
      var attrName = parts[0];
      var propName = parts[1] || attrName;
      (0, _utilPropProxy2['default'])(el, propName);
      (0, _apiListen2['default'])(el, propName, function () {
        return target.setAttribute(attrName, el[propName]);
      });
    });
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/shadejs/src/event/listen.js
__39152132ed61bc4f724a728d6e57d323 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  exports["default"] = function (el, names, callback) {
    names = Array.isArray(names) ? names : [names];
    names.forEach(function (name) {
      el.addEventListener(name, callback);
    });
  };
  
  module.exports = exports["default"];
  
  return module.exports;
}).call(this);

// node_modules/shadejs/src/binding/checked.js
__3631f20849138e321c36fa16d6229d5e = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _apiListen = __719dff41a4326934d1a28c617f544f85;
  
  var _apiListen2 = _interopRequireDefault(_apiListen);
  
  var _utilPropProxy = __d1717884013d426ed99f456f4ad8012f;
  
  var _utilPropProxy2 = _interopRequireDefault(_utilPropProxy);
  
  var _eventListen = __39152132ed61bc4f724a728d6e57d323;
  
  var _eventListen2 = _interopRequireDefault(_eventListen);
  
  exports['default'] = function (el, target) {
    var name = target.getAttribute('name');
    (0, _utilPropProxy2['default'])(el, name);
    (0, _apiListen2['default'])(el, name, function () {
      return target.checked = !!el.checked;
    });
    (0, _eventListen2['default'])(target, 'change', function () {
      return el[name] = target.checked;
    });
    el[name] = target.checked;
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/shadejs/src/util/find-nodes-between.js
__b29026eecf5ac44b29f9c13c0db55397 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  exports["default"] = function (startNode, stopNode) {
    var parentNode = startNode.parentNode;
    var isBetween = false;
    var childNodes = [];
  
    for (var a = 0; a < parentNode.childNodes.length; a++) {
      var childNode = parentNode.childNodes[a];
  
      if (childNode === startNode) {
        isBetween = true;
        continue;
      }
  
      if (!isBetween) {
        continue;
      }
  
      if (childNode === stopNode) {
        break;
      }
  
      childNodes.push(childNode);
    }
  
    return childNodes;
  };
  
  module.exports = exports["default"];
  
  return module.exports;
}).call(this);

// node_modules/shadejs/src/util/fragment-from-collection.js
__c2ed94538a68198ce57535ed74b08e99 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  exports["default"] = function (nodeList) {
    var frag = document.createDocumentFragment();
  
    [].slice.call(nodeList).forEach(function (node) {
      frag.appendChild(node);
    });
  
    return frag;
  };
  
  module.exports = exports["default"];
  
  return module.exports;
}).call(this);

// node_modules/shadejs/src/util/fragment-from-node.js
__36b5275a9f436867df2902cf5d239e28 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  exports["default"] = function (node) {
    var frag = document.createDocumentFragment();
    if (node) {
      frag.appendChild(node);
    }
    return frag;
  };
  
  module.exports = exports["default"];
  
  return module.exports;
}).call(this);

// node_modules/shadejs/src/util/fragment-from-string.js
__3c2df9dc86dfde7a822d104ddb234e48 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _fragmentFromCollection = __c2ed94538a68198ce57535ed74b08e99;
  
  var _fragmentFromCollection2 = _interopRequireDefault(_fragmentFromCollection);
  
  var specialMap = {
    caption: 'table',
    dd: 'dl',
    dt: 'dl',
    li: 'ul',
    tbody: 'table',
    td: 'tr',
    thead: 'table',
    tr: 'tbody'
  };
  
  function matchTag(dom) {
    var tag = dom.match(/\s*<([^\s>]+)/);
    return tag && tag[1] || 'div';
  }
  
  function resolveCorrectDomParent(dom) {
    return resolveCorrectTagParents(matchTag(dom));
  }
  
  function resolveCorrectTagParents(tag) {
    var mapped;
    var parent = document.createElement(tag);
  
    while (mapped = specialMap[parent.tagName.toLowerCase()]) {
      var tempParent = document.createElement(mapped);
      tempParent.appendChild(parent);
      parent = tempParent;
    }
  
    return parent;
  }
  
  exports['default'] = function (dom) {
    var par = resolveCorrectDomParent(dom);
    par.innerHTML = dom;
    return (0, _fragmentFromCollection2['default'])(par.childNodes);
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/shadejs/src/util/fragment-from-anything.js
__69bd05c9c291e860c19cca65a8c6f0ca = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports['default'] = fragmentFromAnything;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _fragmentFromCollection = __c2ed94538a68198ce57535ed74b08e99;
  
  var _fragmentFromCollection2 = _interopRequireDefault(_fragmentFromCollection);
  
  var _fragmentFromNode = __36b5275a9f436867df2902cf5d239e28;
  
  var _fragmentFromNode2 = _interopRequireDefault(_fragmentFromNode);
  
  var _fragmentFromString = __3c2df9dc86dfde7a822d104ddb234e48;
  
  var _fragmentFromString2 = _interopRequireDefault(_fragmentFromString);
  
  var DocumentFragment = window.DocumentFragment;
  var Node = window.Node;
  var NodeList = window.NodeList;
  
  function fragmentFromAnything(item) {
    if (!item) {
      return document.createDocumentFragment();
    }
  
    if (typeof item === 'string') {
      return (0, _fragmentFromString2['default'])(item);
    }
  
    if (item instanceof DocumentFragment) {
      return item;
    }
  
    if (item instanceof Node) {
      return (0, _fragmentFromNode2['default'])(item);
    }
  
    if (item instanceof NodeList) {
      return (0, _fragmentFromCollection2['default'])(item);
    }
  
    if (typeof item.length === 'number') {
      return [].reduce.call(item, function (prev, curr) {
        prev.appendChild(fragmentFromAnything(curr));
        return prev;
      }, document.createDocumentFragment());
    }
  
    return item;
  }
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/shadejs/src/binding/content/wrap.js
__31be17e4d5e8b2e5d5c2e3567d8511e5 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _eventNotify = __9e2087969d2be0785f3cdeed00aff080;
  
  var _eventNotify2 = _interopRequireDefault(_eventNotify);
  
  var _utilFindNodesBetween = __b29026eecf5ac44b29f9c13c0db55397;
  
  var _utilFindNodesBetween2 = _interopRequireDefault(_utilFindNodesBetween);
  
  var _utilFragmentFromAnything = __69bd05c9c291e860c19cca65a8c6f0ca;
  
  var _utilFragmentFromAnything2 = _interopRequireDefault(_utilFragmentFromAnything);
  
  var _utilFragmentFromCollection = __c2ed94538a68198ce57535ed74b08e99;
  
  var _utilFragmentFromCollection2 = _interopRequireDefault(_utilFragmentFromCollection);
  
  exports['default'] = function (content) {
    function addDefaultNodes() {
      if (!content.__initialised) {
        content.__initialised = true;
        var reference = content.__stopNode;
        reference.parentNode.insertBefore((0, _utilFragmentFromCollection2['default'])(content.__default), reference);
      }
    }
  
    function getAllNodes() {
      return (0, _utilFindNodesBetween2['default'])(content.__startNode, content.__stopNode);
    }
  
    function removeDefaultNodes() {
      if (content.__initialised) {
        content.__initialised = false;
        getAllNodes().forEach(function (node) {
          node.parentNode.removeChild(node);
        });
      }
    }
  
    function notify() {
      (0, _eventNotify2['default'])(content.__element, content.__name);
    }
  
    return Object.defineProperties({
  
      accept: function accept(node, callback) {
        node = (0, _utilFragmentFromAnything2['default'])(node);
        var selector = content.getAttribute('select');
        var wrap = content.getAttribute('wrap');
  
        if (selector) {
          node = (0, _utilFragmentFromCollection2['default'])(node.querySelectorAll(selector));
        }
  
        if (wrap) {
          for (var a = 0; a < node.childNodes.length; a++) {
            var wrapper = document.createElement('li');
            wrapper.appendChild(node.childNodes[a]);
            node.insertBefore(wrapper, node.childNodes[a]);
          }
        }
  
        if (node.childNodes.length) {
          removeDefaultNodes();
          callback(node);
        } else {
          addDefaultNodes();
        }
  
        return this;
      },
  
      append: function append(node) {
        var reference = content.__stopNode;
        return this.accept(node, function (node) {
          reference.parentNode.insertBefore(node, reference);
          notify();
        });
      },
  
      at: function at(index) {
        return this.nodes[index];
      },
  
      contains: function contains(node) {
        return content.__startNode.parentNode === node.parentNode;
      },
  
      each: function each(fn) {
        return this.nodes.forEach(fn);
      },
  
      find: function find(query) {
        if (typeof query === 'object') {
          (function () {
            var oldQuery = query;
            query = function (item) {
              for (var a in oldQuery) {
                return item[a] === oldQuery[a];
              }
            };
          })();
        }
  
        return this.nodes.filter(query);
      },
  
      index: function index(node) {
        return this.nodes.indexOf(node);
      },
  
      insert: function insert(node, at) {
        var reference = this.nodes[at] || content.__stopNode;
        return this.accept(node, function (node) {
          reference.parentNode.insertBefore(node, reference);
          notify();
        });
      },
  
      map: function map(fn) {
        return this.nodes.map(fn);
      },
  
      prepend: function prepend(node) {
        var reference = this.nodes[0] || content.__stopNode;
        this.accept(node, function (node) {
          reference.parentNode.insertBefore(node, reference);
          notify();
        });
        return this;
      },
  
      reduce: function reduce(fn, initialValue) {
        return this.nodes.reduce(fn, initialValue);
      },
  
      remove: function remove(node) {
        if (typeof node === 'number') {
          node = this.nodes[node];
        }
  
        if (this.contains(node)) {
          node.parentNode.removeChild(node);
          notify();
        }
  
        if (!this.nodes.length) {
          addDefaultNodes();
        }
  
        return this;
      },
  
      removeAll: function removeAll() {
        this.nodes.forEach(function (node) {
          node.parentNode.removeChild(node);
          notify();
        });
        addDefaultNodes();
        return this;
      }
    }, {
      html: {
        get: function () {
          return this.nodes.reduce(function (prev, curr) {
            return prev + curr.outerHTML;
          }, '');
        },
        set: function (value) {
          this.removeAll().append(value);
        },
        configurable: true,
        enumerable: true
      },
      length: {
        get: function () {
          return this.nodes.length;
        },
        configurable: true,
        enumerable: true
      },
      nodes: {
        get: function () {
          return getAllNodes();
        },
        configurable: true,
        enumerable: true
      },
      text: {
        get: function () {
          return this.nodes.reduce(function (prev, curr) {
            return prev + curr.textContent;
          }, '');
        },
        set: function (value) {
          this.removeAll().append(document.createTextNode(value));
        },
        configurable: true,
        enumerable: true
      }
    });
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/shadejs/src/binding/content/make-property.js
__f79ba50e7946ad71734de0b31e1ef2b8 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _wrap = __31be17e4d5e8b2e5d5c2e3567d8511e5;
  
  var _wrap2 = _interopRequireDefault(_wrap);
  
  exports['default'] = function (content) {
    return {
      configurable: true,
      get: function get() {
        var name = content.getAttribute('name');
        var nodes = (0, _wrap2['default'])(content);
  
        if (name === 'textContent' || content.hasAttribute('text')) {
          return nodes.text;
        } else if (name === 'innerHTML' || content.hasAttribute('html')) {
          return nodes.html;
        }
  
        return content.hasAttribute('multiple') ? nodes : nodes.nodes[0] || null;
      },
      set: function set(value) {
        var name = content.getAttribute('name');
        var text = content.hasAttribute('text');
        (0, _wrap2['default'])(content)[name === 'textContent' || text ? 'text' : 'html'] = value;
      }
    };
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/shadejs/src/util/trim.js
__22e82eef905877f74408e0398f98ed1e = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  exports["default"] = function (elem) {
    for (var a = elem.childNodes.length - 1; a > -1; a--) {
      var child = elem.childNodes[a];
      if (child.nodeType === 3 && child.textContent.match(/^\s*$/)) {
        elem.removeChild(child);
      }
    }
  };
  
  module.exports = exports["default"];
  
  return module.exports;
}).call(this);

// node_modules/shadejs/src/binding/content.js
__e218dbcb7607b603cac5a3795ebe3deb = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _constants = __e36edf18a17dcf5324fe9751b8a1b9f9;
  
  var _contentMakeProperty = __f79ba50e7946ad71734de0b31e1ef2b8;
  
  var _contentMakeProperty2 = _interopRequireDefault(_contentMakeProperty);
  
  var _utilTrim = __22e82eef905877f74408e0398f98ed1e;
  
  var _utilTrim2 = _interopRequireDefault(_utilTrim);
  
  var _contentWrap = __31be17e4d5e8b2e5d5c2e3567d8511e5;
  
  var _contentWrap2 = _interopRequireDefault(_contentWrap);
  
  exports['default'] = function (el, target, initialContent) {
    var name = target.getAttribute('name') || _constants.DEFAULT_CONTENT_NAME;
    var parentNode = target.parentNode;
    var startNode = document.createComment('');
    var stopNode = document.createComment('');
  
    (0, _utilTrim2['default'])(target);
  
    // Cache data to refer to in the wrapper.
    target.__default = target.childNodes;
    target.__element = el;
    target.__initialised = false;
    target.__name = name;
    target.__startNode = startNode;
    target.__stopNode = stopNode;
  
    // Set up placeholders.
    if (target.tagName === 'CONTENT') {
      parentNode.insertBefore(startNode, target);
      parentNode.insertBefore(stopNode, target);
      parentNode.removeChild(target);
    } else {
      target.innerHTML = '';
      target.appendChild(startNode);
      target.appendChild(stopNode);
    }
  
    Object.defineProperty(el, name, (0, _contentMakeProperty2['default'])(target));
  
    // Initialise.
    (0, _contentWrap2['default'])(target).html = initialContent;
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/shadejs/src/binding/if.js
__9ded736e2cda6f6ad33db37d95e6cacc = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _apiListen = __719dff41a4326934d1a28c617f544f85;
  
  var _apiListen2 = _interopRequireDefault(_apiListen);
  
  var _utilPropProxy = __d1717884013d426ed99f456f4ad8012f;
  
  var _utilPropProxy2 = _interopRequireDefault(_utilPropProxy);
  
  exports['default'] = function (el, target) {
    var name = target.getAttribute('if');
    var parent = target.parentNode;
    var placeholder = document.createComment('');
  
    (0, _utilPropProxy2['default'])(el, name);
    parent.insertBefore(placeholder, target);
    (0, _apiListen2['default'])(el, name, function () {
      if (el[name] && !target.parentNode) {
        parent.insertBefore(target, placeholder);
      } else if (target.parentNode) {
        parent.removeChild(target);
      }
    });
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/shadejs/src/binding/name.js
__f83e7a781ade404c7f334bc5b08290bd = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _apiListen = __719dff41a4326934d1a28c617f544f85;
  
  var _apiListen2 = _interopRequireDefault(_apiListen);
  
  var _utilPropProxy = __d1717884013d426ed99f456f4ad8012f;
  
  var _utilPropProxy2 = _interopRequireDefault(_utilPropProxy);
  
  var _eventListen = __39152132ed61bc4f724a728d6e57d323;
  
  var _eventListen2 = _interopRequireDefault(_eventListen);
  
  exports['default'] = function (el, target) {
    var name = target.getAttribute('name');
    (0, _utilPropProxy2['default'])(el, name);
    (0, _apiListen2['default'])(el, name, function () {
      return target.value = el[name] || '';
    });
    (0, _eventListen2['default'])(el, ['change', 'keyup'], function () {
      return el[name] = target.value;
    });
    el[name] = target.value;
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/shadejs/src/binding/on.js
__01d37b3a352d4b6dc223def2d0d2fc68 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }
  
  var _eventDispatch = __fcb75a942b9356d33e58c17c22803e6f;
  
  var _eventDispatch2 = _interopRequireDefault(_eventDispatch);
  
  exports['default'] = function (el, target) {
    target.getAttribute('on').split(' ').forEach(function (pair) {
      var handlerFunc;
  
      var _pair$split = pair.split(':');
  
      var _pair$split2 = _slicedToArray(_pair$split, 2);
  
      var name = _pair$split2[0];
      var handlerName = _pair$split2[1];
  
      handlerName = handlerName || 'handle' + (name[0].toUpperCase() + name.substring(1));
      handlerFunc = (el[handlerName] || function (e) {
        (0, _eventDispatch2['default'])(this, handlerName, {
          bubbles: true,
          cancelable: true
        });
        e.preventDefault();
      }).bind(el);
      target.addEventListener(name, function (e) {
        e.delegateTarget = target;
        handlerFunc(e);
      });
    });
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/shadejs/src/binding/text.js
__b92bd1788e5b4f3756e4d0b5d825939c = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _apiListen = __719dff41a4326934d1a28c617f544f85;
  
  var _apiListen2 = _interopRequireDefault(_apiListen);
  
  var _utilPropProxy = __d1717884013d426ed99f456f4ad8012f;
  
  var _utilPropProxy2 = _interopRequireDefault(_utilPropProxy);
  
  exports['default'] = function (el, target) {
    var name = target.getAttribute('text');
    (0, _utilPropProxy2['default'])(el, name);
    (0, _apiListen2['default'])(el, name, function (e) {
      return target.textContent = e.detail.value;
    });
    target.textContent = el[name];
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/shadejs/src/index.js
__c5e9793925f697b398ae907acbde918c = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  var defineDependencies = {
    "module": module,
    "exports": exports,
    "./api/bind": __0fd295ae0923510ede53666a3d3574ed,
    "./api/bindings": __30afad321aa942ab5b7e0f94e03c9294,
    "./api/listen": __719dff41a4326934d1a28c617f544f85,
    "./api/notify": __361eb36983d7a1380df74827fb9295d4,
    "./binding/attr": __03ea17c86a5547492e465998f6413c9b,
    "./binding/checked": __3631f20849138e321c36fa16d6229d5e,
    "./binding/content": __e218dbcb7607b603cac5a3795ebe3deb,
    "./binding/if": __9ded736e2cda6f6ad33db37d95e6cacc,
    "./binding/name": __f83e7a781ade404c7f334bc5b08290bd,
    "./binding/on": __01d37b3a352d4b6dc223def2d0d2fc68,
    "./binding/text": __b92bd1788e5b4f3756e4d0b5d825939c,
    "./util/fragment-from-collection": __c2ed94538a68198ce57535ed74b08e99,
    "./util/fragment-from-string": __3c2df9dc86dfde7a822d104ddb234e48
  };
  var define = function defineReplacement(name, deps, func) {
    var rval;
    var type;
  
    func = [func, deps, name].filter(function (cur) { return typeof cur === 'function'; })[0];
    deps = [deps, name, []].filter(Array.isArray)[0];
    rval = func.apply(null, deps.map(function (value) { return defineDependencies[value]; }));
    type = typeof rval;
  
    // Some processors like Babel don't check to make sure that the module value
    // is not a primitive before calling Object.defineProperty() on it. We ensure
    // it is an instance so that it can.
    if (type === 'string') {
      rval = new String(rval);
    } else if (type === 'number') {
      rval = new Number(rval);
    } else if (type === 'boolean') {
      rval = new Boolean(rval);
    }
  
    // Reset the exports to the defined module. This is how we convert AMD to
    // CommonJS and ensures both can either co-exist, or be used separately. We
    // only set it if it is not defined because there is no object representation
    // of undefined, thus calling Object.defineProperty() on it would fail.
    if (rval !== undefined) {
      exports = module.exports = rval;
    }
  };
  define.amd = true;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _apiBind = __0fd295ae0923510ede53666a3d3574ed;
  
  var _apiBind2 = _interopRequireDefault(_apiBind);
  
  var _apiBindings = __30afad321aa942ab5b7e0f94e03c9294;
  
  var _apiBindings2 = _interopRequireDefault(_apiBindings);
  
  var _apiListen = __719dff41a4326934d1a28c617f544f85;
  
  var _apiListen2 = _interopRequireDefault(_apiListen);
  
  var _apiNotify = __361eb36983d7a1380df74827fb9295d4;
  
  var _apiNotify2 = _interopRequireDefault(_apiNotify);
  
  var _bindingAttr = __03ea17c86a5547492e465998f6413c9b;
  
  var _bindingAttr2 = _interopRequireDefault(_bindingAttr);
  
  var _bindingChecked = __3631f20849138e321c36fa16d6229d5e;
  
  var _bindingChecked2 = _interopRequireDefault(_bindingChecked);
  
  var _bindingContent = __e218dbcb7607b603cac5a3795ebe3deb;
  
  var _bindingContent2 = _interopRequireDefault(_bindingContent);
  
  var _bindingIf = __9ded736e2cda6f6ad33db37d95e6cacc;
  
  var _bindingIf2 = _interopRequireDefault(_bindingIf);
  
  var _bindingName = __f83e7a781ade404c7f334bc5b08290bd;
  
  var _bindingName2 = _interopRequireDefault(_bindingName);
  
  var _bindingOn = __01d37b3a352d4b6dc223def2d0d2fc68;
  
  var _bindingOn2 = _interopRequireDefault(_bindingOn);
  
  var _bindingText = __b92bd1788e5b4f3756e4d0b5d825939c;
  
  var _bindingText2 = _interopRequireDefault(_bindingText);
  
  var _utilFragmentFromCollection = __c2ed94538a68198ce57535ed74b08e99;
  
  var _utilFragmentFromCollection2 = _interopRequireDefault(_utilFragmentFromCollection);
  
  var _utilFragmentFromString = __3c2df9dc86dfde7a822d104ddb234e48;
  
  var _utilFragmentFromString2 = _interopRequireDefault(_utilFragmentFromString);
  
  function create() {
    function define() {
      var tmpHtml = arguments[0] === undefined ? '' : arguments[0];
  
      tmpHtml = tmpHtml.toString().trim();
      return function (el) {
        var initialContent;
  
        if (typeof el === 'string') {
          el = (0, _utilFragmentFromString2['default'])(el).children[0];
        }
  
        initialContent = (0, _utilFragmentFromCollection2['default'])(el.childNodes);
        el.innerHTML = tmpHtml;
  
        _apiBindings2['default'].forEach(function (binding) {
          binding(el, initialContent);
        });
  
        return el;
      };
    }
  
    define.bind = _apiBind2['default'];
    define.bindings = _apiBindings2['default'];
    define.listen = _apiListen2['default'];
    define.notify = _apiNotify2['default'];
  
    define.bind('[attr]', _bindingAttr2['default']);
    define.bind('[name][type="checkbox"]', _bindingChecked2['default']);
    define.bind('content, [content]', _bindingContent2['default']);
    define.bind('[if]', _bindingIf2['default']);
    define.bind('textarea[name], input[type="text"][name]', _bindingName2['default']);
    define.bind('[on]', _bindingOn2['default']);
    define.bind('[text]', _bindingText2['default']);
  
    return define;
  }
  
  var shade = create();
  shade.create = create;
  exports['default'] = window.shade = shade;
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/constants.js
__d05cc8d30e112b029f1facfdebccd2f8 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  var ATTR_IGNORE = 'data-skate-ignore';
  exports.ATTR_IGNORE = ATTR_IGNORE;
  var EVENT_PREFIX = 'skate-property-';
  exports.EVENT_PREFIX = EVENT_PREFIX;
  var TYPE_ATTRIBUTE = 'attribute';
  exports.TYPE_ATTRIBUTE = TYPE_ATTRIBUTE;
  var TYPE_CLASSNAME = 'classname';
  exports.TYPE_CLASSNAME = TYPE_CLASSNAME;
  var TYPE_ELEMENT = 'element';
  exports.TYPE_ELEMENT = TYPE_ELEMENT;
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/api/chain.js
__2a28813aaeb62515e8939df56df9b57c = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports['default'] = chain;
  
  function chain() {
    for (var _len = arguments.length, cbs = Array(_len), _key = 0; _key < _len; _key++) {
      cbs[_key] = arguments[_key];
    }
  
    cbs = cbs.filter(Boolean).map(function (cb) {
      return typeof cb === 'object' ? chain.apply(null, cb) : cb;
    });
  
    return function () {
      var _this = this;
  
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
  
      cbs.forEach(function (cb) {
        return cb.apply(_this, args);
      });
    };
  }
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/util/assign.js
__3bb88b69360428e2175eeaa684e338dc = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  exports["default"] = function (child) {
    for (var _len = arguments.length, parents = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      parents[_key - 1] = arguments[_key];
    }
  
    parents.forEach(function (parent) {
      return Object.keys(parent || {}).forEach(function (name) {
        return child[name] = parent[name];
      });
    });
    return child;
  };
  
  module.exports = exports["default"];
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/globals.js
__9784d985d06bb16ecdd611dd47c33dce = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  if (!window.__skate0) {
    window.__skate0 = {
      registerIfNotExists: function registerIfNotExists(name, value) {
        if (!this[name]) {
          this[name] = value;
        }
  
        return this[name];
      }
    };
  }
  
  exports["default"] = window.__skate0;
  module.exports = exports["default"];
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/util/has-own.js
__d306270149394365fbe9ad57b3987844 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  exports["default"] = function (obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  };
  
  module.exports = exports["default"];
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/polyfill/registry.js
__ac87bcd7375448e7f20852eb4b9c9cc7 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _constants = __d05cc8d30e112b029f1facfdebccd2f8;
  
  var _globals = __9784d985d06bb16ecdd611dd47c33dce;
  
  var _globals2 = _interopRequireDefault(_globals);
  
  var _utilHasOwn = __d306270149394365fbe9ad57b3987844;
  
  var _utilHasOwn2 = _interopRequireDefault(_utilHasOwn);
  
  function getClassList(element) {
    var classList = element.classList;
  
    if (classList) {
      return classList;
    }
  
    var attrs = element.attributes;
  
    return attrs['class'] && attrs['class'].nodeValue.split(/\s+/) || [];
  }
  
  exports['default'] = _globals2['default'].registerIfNotExists('registry', {
    definitions: {},
  
    get: function get(id) {
      return (0, _utilHasOwn2['default'])(this.definitions, id) && this.definitions[id];
    },
  
    set: function set(id, definition) {
      if ((0, _utilHasOwn2['default'])(this.definitions, id)) {
        throw new Error('A component definition of type "' + definition.type + '" with the ID of "' + id + '" already exists.');
      }
      this.definitions[id] = definition;
      return this;
    },
  
    isType: function isType(id, type) {
      var def = this.get(id);
      return def && def.type === type;
    },
  
    getForElement: function getForElement(element) {
      var attrs = element.attributes;
      var attrsLen = attrs.length;
      var definitions = [];
      var isAttr = attrs.is;
      var isAttrValue = isAttr && (isAttr.value || isAttr.nodeValue);
      var tag = element.tagName.toLowerCase();
      var isAttrOrTag = isAttrValue || tag;
      var definition;
      var tagToExtend;
  
      if (this.isType(isAttrOrTag, _constants.TYPE_ELEMENT)) {
        definition = this.definitions[isAttrOrTag];
        tagToExtend = definition['extends'];
  
        if (isAttrValue) {
          if (tag === tagToExtend) {
            definitions.push(definition);
          }
        } else if (!tagToExtend) {
          definitions.push(definition);
        }
      }
  
      for (var a = 0; a < attrsLen; a++) {
        var attr = attrs[a].nodeName;
  
        if (this.isType(attr, _constants.TYPE_ATTRIBUTE)) {
          definition = this.definitions[attr];
          tagToExtend = definition['extends'];
  
          if (!tagToExtend || tag === tagToExtend) {
            definitions.push(definition);
          }
        }
      }
  
      var classList = getClassList(element);
      var classListLen = classList.length;
  
      for (var b = 0; b < classListLen; b++) {
        var className = classList[b];
  
        if (this.isType(className, _constants.TYPE_CLASSNAME)) {
          definition = this.definitions[className];
          tagToExtend = definition['extends'];
  
          if (!tagToExtend || tag === tagToExtend) {
            definitions.push(definition);
          }
        }
      }
  
      return definitions;
    }
  });
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/api/create.js
__24e60392c1f386420a36a81ec0046b0c = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _utilAssign = __3bb88b69360428e2175eeaa684e338dc;
  
  var _utilAssign2 = _interopRequireDefault(_utilAssign);
  
  var _polyfillRegistry = __ac87bcd7375448e7f20852eb4b9c9cc7;
  
  var _polyfillRegistry2 = _interopRequireDefault(_polyfillRegistry);
  
  exports['default'] = function (name, props) {
    var ctor = _polyfillRegistry2['default'].get(name);
    return ctor && ctor(props) || (0, _utilAssign2['default'])(document.createElement(name), props);
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/api/emit.js
__80c006af61b40cfb3c8bb1bde09d8a94 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  /* jshint expr: true */Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  exports['default'] = function (elem, name) {
    var opts = arguments[2] === undefined ? {} : arguments[2];
  
    var e = document.createEvent('CustomEvent');
    opts.bubbles === undefined && (opts.bubbles = true);
    opts.cancelable === undefined && (opts.cancelable = true);
    e.initCustomEvent(name, opts.bubbles, opts.cancelable, opts.detail);
    return elem.dispatchEvent(e);
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/util/matches-selector.js
__1f94ad7a3f52a91046f909ad0d5d7d89 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  var elProto = window.HTMLElement.prototype;
  var nativeMatchesSelector = elProto.matches || elProto.msMatchesSelector || elProto.webkitMatchesSelector || elProto.mozMatchesSelector || elProto.oMatchesSelector;
  
  // Only IE9 has this msMatchesSelector bug, but best to detect it.
  var hasNativeMatchesSelectorDetattachedBug = !nativeMatchesSelector.call(document.createElement('div'), 'div');
  
  exports['default'] = function (element, selector) {
    if (hasNativeMatchesSelectorDetattachedBug) {
      var clone = element.cloneNode();
      document.createElement('div').appendChild(clone);
      return nativeMatchesSelector.call(clone, selector);
    }
    return nativeMatchesSelector.call(element, selector);
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/api/event.js
__be52bce5d4ad3fdf7d061650d4b63777 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _chain = __2a28813aaeb62515e8939df56df9b57c;
  
  var _chain2 = _interopRequireDefault(_chain);
  
  var _utilMatchesSelector = __1f94ad7a3f52a91046f909ad0d5d7d89;
  
  var _utilMatchesSelector2 = _interopRequireDefault(_utilMatchesSelector);
  
  var isShadowSelectorRegex = /(::shadow|\/deep\/)/;
  var ShadowRoot = window.ShadowRoot;
  
  function parseEvent(e) {
    var parts = e.split(' ');
    return {
      name: parts.shift(),
      delegate: parts.join(' ')
    };
  }
  
  function makeDelegateHandler(elem, handler, delegate) {
    var isShadowSelector = isShadowSelectorRegex.test(delegate);
    return function (e) {
      var current = isShadowSelector ? e.path[0] : e.target;
      while (current && current !== elem.parentNode) {
        if ((0, _utilMatchesSelector2['default'])(current, delegate)) {
          e.delegateTarget = current;
          return handler(e);
        }
  
        current = current.parentNode;
  
        if (current && ShadowRoot && current instanceof ShadowRoot) {
          current = current.host;
        }
      }
    };
  }
  
  function makeNormalHandler(elem, handler) {
    return function (e) {
      e.delegateTarget = e.currentTarget;
      handler(e);
    };
  }
  
  function bindEvent(elem, event, handler) {
    var _parseEvent = parseEvent(event);
  
    var name = _parseEvent.name;
    var delegate = _parseEvent.delegate;
  
    var capture = delegate && (name === 'blur' || name === 'focus');
    handler = (0, _chain2['default'])(handler).bind(elem);
    handler = delegate ? makeDelegateHandler(elem, handler, delegate) : makeNormalHandler(elem, handler);
    elem.addEventListener(name, handler, capture);
  }
  
  function bindEvents(elem, events) {
    Object.keys(events).forEach(function (name) {
      bindEvent(elem, name, events[name]);
    });
  }
  
  exports['default'] = function (elem, events, handler) {
    if (typeof events === 'string') {
      bindEvent(elem, events, handler);
    } else {
      bindEvents(elem, events || {});
    }
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/util/data.js
__e5c7b156b57f4bcec078ea007d82154a = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  exports['default'] = function (element) {
    var namespace = arguments[1] === undefined ? '' : arguments[1];
  
    var data = element.__SKATE_DATA || (element.__SKATE_DATA = {});
    return namespace && (data[namespace] || (data[namespace] = {})) || data;
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/util/ignored.js
__837520fd914b16ac524935126fa3c196 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _constants = __d05cc8d30e112b029f1facfdebccd2f8;
  
  exports['default'] = function (element) {
    var attrs = element.attributes;
    return attrs && !!attrs[_constants.ATTR_IGNORE];
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/util/walk-tree.js
__7cb66022a0f63484e867a793bf6bd3d9 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _ignored = __837520fd914b16ac524935126fa3c196;
  
  var _ignored2 = _interopRequireDefault(_ignored);
  
  function walk(elem, fn, filter) {
    if (elem.nodeType !== 1 || (0, _ignored2['default'])(elem) || filter && filter(elem) === false) {
      return;
    }
  
    var chren = elem.childNodes;
    var child = chren && chren[0];
  
    fn(elem);
    while (child) {
      walk(child, fn, filter);
      child = child.nextSibling;
    }
  }
  
  exports['default'] = function (elems, fn, filter) {
    if (elems.length === undefined) {
      elems = [elems];
    }
  
    for (var a = 0; a < elems.length; a++) {
      walk(elems[a], fn, filter);
    }
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/lifecycle/attached.js
__79a815116915b2d14fb87a6feb7472f4 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _utilData = __e5c7b156b57f4bcec078ea007d82154a;
  
  var _utilData2 = _interopRequireDefault(_utilData);
  
  var _polyfillRegistry = __ac87bcd7375448e7f20852eb4b9c9cc7;
  
  var _polyfillRegistry2 = _interopRequireDefault(_polyfillRegistry);
  
  var _utilWalkTree = __7cb66022a0f63484e867a793bf6bd3d9;
  
  var _utilWalkTree2 = _interopRequireDefault(_utilWalkTree);
  
  function callAttachedOnDescendants(elem, opts) {
    (0, _utilWalkTree2['default'])(elem.childNodes, function (elem) {
      _polyfillRegistry2['default'].getForElement(elem).forEach(function (Ctor) {
        return Ctor.prototype.createdCallback.call(elem);
      });
    }, function (elem) {
      return !(0, _utilData2['default'])(elem, opts.id).attached;
    });
  }
  
  function callAttached(elem, opts) {
    if (opts.attached) {
      opts.attached.call(elem);
    }
  }
  
  exports['default'] = function (opts) {
    /* jshint expr: true */
    return function () {
      var info = (0, _utilData2['default'])(this, opts.id);
      var isNative = this.attachedCallback;
  
      if (info.attached) {
        return;
      }
  
      isNative || callAttachedOnDescendants(this, opts);
      info.attached = true;
      callAttached(this, opts);
      info.detached = false;
    };
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/util/dash-case.js
__b768404d59dd581639b792015de2ca96 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  exports['default'] = function (str) {
    return str.split(/([A-Z])/).reduce(function (one, two, idx) {
      var dash = !one || idx % 2 === 0 ? '' : '-';
      return '' + one + '' + dash + '' + two.toLowerCase();
    });
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/api/property.js
__138519f50a7b4c6b6ea4cabda2ae8ed2 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _constants = __d05cc8d30e112b029f1facfdebccd2f8;
  
  var _apiEmit = __80c006af61b40cfb3c8bb1bde09d8a94;
  
  var _apiEmit2 = _interopRequireDefault(_apiEmit);
  
  var _apiEvent = __be52bce5d4ad3fdf7d061650d4b63777;
  
  var _apiEvent2 = _interopRequireDefault(_apiEvent);
  
  var _utilDashCase = __b768404d59dd581639b792015de2ca96;
  
  var _utilDashCase2 = _interopRequireDefault(_utilDashCase);
  
  var _utilData = __e5c7b156b57f4bcec078ea007d82154a;
  
  var _utilData2 = _interopRequireDefault(_utilData);
  
  function returnSingle(elem, name) {
    return function () {
      return elem[name];
    };
  }
  
  function returnMultiple(elem, name, selector) {
    return function () {
      return [].slice.call(elem.querySelectorAll(selector)).map(function (desc) {
        return desc[name];
      });
    };
  }
  
  function resolveReturnFunction(elem) {
    return function (name) {
      var parts = name.split(' ');
      return parts[1] ? returnMultiple(elem, parts[0], parts[1]) : returnSingle(elem, name);
    };
  }
  
  function property(name, prop) {
    if (typeof prop !== 'object') {
      prop = { type: prop };
    }
  
    var _attribute = prop.attr;
    var _coerce = prop.type || function (val) {
      return val;
    };
    var _dependencies = prop.deps || [];
    var _getter = prop.get;
    var _isBoolean = prop.type && prop.type === Boolean;
    var _notify = prop.notify === undefined ? true : prop.notify;
    var _setter = prop.set;
    var _value;
  
    if (_attribute === true) {
      _attribute = (0, _utilDashCase2['default'])(name);
    }
  
    return {
      get: function get() {
        return _getter ? _getter.apply(this, _dependencies.map(resolveReturnFunction(this))) : _value;
      },
      set: function set(value) {
        var info = (0, _utilData2['default'])(this);
        var oldValue = _value;
        var newValue = _coerce(value);
  
        // We do nothing if the value hasn't changed.
        if (oldValue === newValue) {
          return;
        }
  
        // Regardless of any options, we store the value internally.
        _value = newValue;
  
        // We check first to see if we're already updating the property from
        // the attribute. If we are, then there's no need to update the attribute
        // especially because it would invoke an infinite loop.
        if (_attribute && !info.updatingProperty) {
          info.updatingAttribute = true;
  
          if (_isBoolean && _value) {
            this.setAttribute(_attribute, '');
          } else if (_isBoolean && !_value) {
            this.removeAttribute(_attribute, '');
          } else {
            this.setAttribute(_attribute, _value);
          }
  
          info.updatingAttribute = false;
        }
  
        // A setter is responsible for setting its own value.
        if (_setter) {
          _setter.call(this, newValue, oldValue);
        }
  
        // Only notify if the value has changed.
        if (_notify) {
          (0, _apiEmit2['default'])(this, 'skate-property-' + name);
        }
      }
    };
  }
  
  function defineProperty(elem, name, prop) {
    var attributeToPropertyMap = (0, _utilData2['default'])(elem).attributeToPropertyMap = {};
  
    if (!prop) {
      return;
    }
  
    Object.defineProperty(elem, name, property(name, prop));
  
    if (prop.attr) {
      attributeToPropertyMap[(0, _utilDashCase2['default'])(name)] = name;
    }
  
    if (typeof prop.value === 'function') {
      elem[name] = prop.value();
    } else if (typeof prop.value !== 'undefined') {
      elem[name] = prop.value;
    }
  
    (prop.deps || []).forEach(function (dep) {
      (0, _apiEvent2['default'])(elem, _constants.EVENT_PREFIX + dep, function (e) {
        if (e.target === e.delegateTarget || this === e.delegateTarget) {
          (0, _apiEmit2['default'])(elem, 'skate-property-' + name);
        }
      });
    });
  }
  
  function defineProperties(elem, props) {
    Object.keys(props).forEach(function (name) {
      defineProperty(elem, name, props[name]);
    });
  }
  
  exports['default'] = function (elem, props, prop) {
    if (typeof props === 'string') {
      defineProperty(elem, props, prop);
    } else {
      defineProperties(elem, props || {});
    }
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/util/assign-safe.js
__339137b629512d70c015244fc4b5b7ee = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  exports["default"] = function (child) {
    for (var _len = arguments.length, parents = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      parents[_key - 1] = arguments[_key];
    }
  
    parents.forEach(function (parent) {
      Object.getOwnPropertyNames(parent || {}).forEach(function (name) {
        var childDesc = Object.getOwnPropertyDescriptor(child, name);
        if (!childDesc || childDesc.configurable) {
          Object.defineProperty(child, name, Object.getOwnPropertyDescriptor(parent, name));
        }
      });
    });
    return child;
  };
  
  module.exports = exports["default"];
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/util/protos.js
__8e591b41259aa51a0c9332aa71063092 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  exports["default"] = function (proto) {
    var chains = [proto];
    /* jshint boss: true */
    while (proto = Object.getPrototypeOf(proto)) {
      chains.push(proto);
    }
    chains.reverse();
    return chains;
  };
  
  module.exports = exports["default"];
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/lifecycle/created.js
__6558b19874f6e672c5eefe776d12d00f = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _apiEvent = __be52bce5d4ad3fdf7d061650d4b63777;
  
  var _apiEvent2 = _interopRequireDefault(_apiEvent);
  
  var _apiProperty = __138519f50a7b4c6b6ea4cabda2ae8ed2;
  
  var _apiProperty2 = _interopRequireDefault(_apiProperty);
  
  var _utilAssignSafe = __339137b629512d70c015244fc4b5b7ee;
  
  var _utilAssignSafe2 = _interopRequireDefault(_utilAssignSafe);
  
  var _utilData = __e5c7b156b57f4bcec078ea007d82154a;
  
  var _utilData2 = _interopRequireDefault(_utilData);
  
  var _utilProtos = __8e591b41259aa51a0c9332aa71063092;
  
  var _utilProtos2 = _interopRequireDefault(_utilProtos);
  
  var _polyfillRegistry = __ac87bcd7375448e7f20852eb4b9c9cc7;
  
  var _polyfillRegistry2 = _interopRequireDefault(_polyfillRegistry);
  
  var _utilWalkTree = __7cb66022a0f63484e867a793bf6bd3d9;
  
  var _utilWalkTree2 = _interopRequireDefault(_utilWalkTree);
  
  var elProto = window.Element.prototype;
  var oldSetAttribute = elProto.setAttribute;
  var oldRemoveAttribute = elProto.removeAttribute;
  
  function patchAttributeMethods(elem) {
    elem.setAttribute = function (name, newValue) {
      var oldValue = this.getAttribute(name);
      oldSetAttribute.call(elem, name, newValue);
      elem.attributeChangedCallback(name, oldValue, String(newValue));
    };
  
    elem.removeAttribute = function (name) {
      var oldValue = this.getAttribute(name);
      oldRemoveAttribute.call(elem, name);
      elem.attributeChangedCallback(name, oldValue, null);
    };
  }
  
  function triggerAttributesCreated(elem) {
    var attrs = elem.attributes;
    for (var attr in attrs) {
      attr = attrs[attr];
      elem.attributeChangedCallback(attr.nodeName, null, attr.value || attr.nodeValue);
    }
  }
  
  function markAsResolved(elem, opts) {
    elem.removeAttribute(opts.unresolvedAttribute);
    elem.setAttribute(opts.resolvedAttribute, '');
  }
  
  function initAttributes(elem) {
    var attrs = arguments[1] === undefined ? {} : arguments[1];
  
    Object.keys(attrs).forEach(function (name) {
      var attr = attrs[name];
      if (attr && attr.value && !elem.hasAttribute(name)) {
        var value = attr.value;
        value = typeof value === 'function' ? value(elem) : value;
        elem.setAttribute(name, value);
      }
    });
  }
  
  function applyPrototype(elem, opts) {
    (0, _utilProtos2['default'])(opts.prototype).forEach(function (proto) {
      if (!proto.isPrototypeOf(elem)) {
        (0, _utilAssignSafe2['default'])(elem, proto);
      }
    });
  }
  
  function template(elem, opts) {
    if (opts.template && !elem.hasAttribute(opts.resolvedAttribute)) {
      opts.template(elem);
    }
  }
  
  function callCreatedOnDescendants(elem, opts) {
    (0, _utilWalkTree2['default'])(elem.childNodes, function (elem) {
      _polyfillRegistry2['default'].getForElement(elem).forEach(function (Ctor) {
        return Ctor.prototype.createdCallback.call(elem);
      });
    }, function (elem) {
      return !(0, _utilData2['default'])(elem, opts.id).created;
    });
  }
  
  function callCreated(elem, opts) {
    if (opts.created) {
      opts.created.call(elem);
    }
  }
  
  exports['default'] = function (opts) {
    /* jshint expr: true */
    return function () {
      var info = (0, _utilData2['default'])(this, opts.id);
      var isNative = this.createdCallback;
  
      if (info.created) {
        return;
      }
  
      info.created = true;
      isNative || applyPrototype(this, opts);
      (0, _apiProperty2['default'])(this, opts.properties);
      template(this, opts);
      isNative || callCreatedOnDescendants(this, opts);
      isNative || patchAttributeMethods(this);
      (0, _apiEvent2['default'])(this, opts.events);
      initAttributes(this, opts.attributes);
      callCreated(this, opts);
      triggerAttributesCreated(this);
      markAsResolved(this, opts);
    };
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/util/element-contains.js
__47d02a9160c937e83c8941d56e3339c7 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var elementPrototype = window.HTMLElement.prototype;
  var elementPrototypeContains = elementPrototype.contains;
  
  exports["default"] = function (source, target) {
    // The document element does not have the contains method in IE.
    if (source === document && !source.contains) {
      return document.head.contains(target) || document.body.contains(target);
    }
  
    return source.contains ? source.contains(target) : elementPrototypeContains.call(source, target);
  };
  
  module.exports = exports["default"];
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/api/init.js
__75a36d31c8e0abe1acd8a25042c4c618 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _lifecycleAttached = __79a815116915b2d14fb87a6feb7472f4;
  
  var _lifecycleAttached2 = _interopRequireDefault(_lifecycleAttached);
  
  var _lifecycleCreated = __6558b19874f6e672c5eefe776d12d00f;
  
  var _lifecycleCreated2 = _interopRequireDefault(_lifecycleCreated);
  
  var _utilElementContains = __47d02a9160c937e83c8941d56e3339c7;
  
  var _utilElementContains2 = _interopRequireDefault(_utilElementContains);
  
  var _polyfillRegistry = __ac87bcd7375448e7f20852eb4b9c9cc7;
  
  var _polyfillRegistry2 = _interopRequireDefault(_polyfillRegistry);
  
  var _utilWalkTree = __7cb66022a0f63484e867a793bf6bd3d9;
  
  var _utilWalkTree2 = _interopRequireDefault(_utilWalkTree);
  
  var HTMLElement = window.HTMLElement;
  
  exports['default'] = function (nodes) {
    var nodesToUse = nodes;
  
    if (!nodes) {
      return nodes;
    }
  
    if (typeof nodes === 'string') {
      nodesToUse = nodes = document.querySelectorAll(nodes);
    } else if (nodes instanceof HTMLElement) {
      nodesToUse = [nodes];
    }
  
    (0, _utilWalkTree2['default'])(nodesToUse, function (element) {
      var components = _polyfillRegistry2['default'].getForElement(element);
      var componentsLength = components.length;
  
      for (var a = 0; a < componentsLength; a++) {
        (0, _lifecycleCreated2['default'])(components[a]).call(element);
      }
  
      for (var a = 0; a < componentsLength; a++) {
        if ((0, _utilElementContains2['default'])(document, element)) {
          (0, _lifecycleAttached2['default'])(components[a]).call(element);
        }
      }
    });
  
    return nodes;
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/api/no-conflict.js
__24281b24aac9c4448209cd54e5debaf5 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var previousSkate = window.skate;
  
  exports["default"] = function () {
    window.skate = previousSkate;
    return this;
  };
  
  module.exports = exports["default"];
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/api/ready.js
__5da1c546be01c1f40cb879aa81ef72d0 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  exports['default'] = function (callback) {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/api/type.js
__df7b1f4706eabd9691c275cb29843bab = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _constants = __d05cc8d30e112b029f1facfdebccd2f8;
  
  exports['default'] = {
    ATTRIBUTE: _constants.TYPE_ATTRIBUTE,
    CLASSNAME: _constants.TYPE_CLASSNAME,
    ELEMENT: _constants.TYPE_ELEMENT
  };
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/api/version.js
__129de96d424f38f8e42e505baf5ba1c9 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports['default'] = '0.13.2';
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/util/debounce.js
__e53a88c23c45efb3d9510a05dd661b76 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  exports["default"] = function (fn) {
    var called = false;
  
    return function () {
      if (!called) {
        called = true;
        setTimeout(function () {
          called = false;
          fn();
        }, 1);
      }
    };
  };
  
  module.exports = exports["default"];
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/util/obj-each.js
__bad59e6fb0f3dbe89b78ed6f0b41699a = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _hasOwn = __d306270149394365fbe9ad57b3987844;
  
  var _hasOwn2 = _interopRequireDefault(_hasOwn);
  
  exports['default'] = function (obj, fn) {
    for (var a in obj) {
      if ((0, _hasOwn2['default'])(obj, a)) {
        fn(obj[a], a);
      }
    }
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/polyfill/mutation-observer.js
__01a955bfd04978389c6bb62f6537e348 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _utilDebounce = __e53a88c23c45efb3d9510a05dd661b76;
  
  var _utilDebounce2 = _interopRequireDefault(_utilDebounce);
  
  var _utilElementContains = __47d02a9160c937e83c8941d56e3339c7;
  
  var _utilElementContains2 = _interopRequireDefault(_utilElementContains);
  
  var _utilObjEach = __bad59e6fb0f3dbe89b78ed6f0b41699a;
  
  var _utilObjEach2 = _interopRequireDefault(_utilObjEach);
  
  var Attr = window.Attr;
  var elementPrototype = window.HTMLElement.prototype;
  var NativeMutationObserver = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver;
  var isFixingIe = false;
  var isIe = window.navigator.userAgent.indexOf('Trident') > -1;
  
  /**
   * Creates a new mutation record.
   *
   * @param {Element} target The HTML element that was affected.
   * @param {String} type The type of mutation.
   *
   * @returns {Object}
   */
  function newMutationRecord(target, type) {
    return {
      addedNodes: null,
      attributeName: null,
      attributeNamespace: null,
      nextSibling: null,
      oldValue: null,
      previousSibling: null,
      removedNodes: null,
      target: target,
      type: type || 'childList'
    };
  }
  
  /**
   * Takes an element and recursively saves it's tree structure on each element so
   * that they can be restored later after IE screws things up.
   *
   * @param {Node} node The node to save the tree for.
   *
   * @returns {undefined}
   */
  function walkTree(node, cb) {
    var childNodes = node.childNodes;
  
    if (!childNodes) {
      return;
    }
  
    var childNodesLen = childNodes.length;
  
    for (var a = 0; a < childNodesLen; a++) {
      var childNode = childNodes[a];
      cb(childNode);
      walkTree(childNode, cb);
    }
  }
  
  // Mutation Observer "Polyfill"
  // ----------------------------
  
  /**
   * This "polyfill" only polyfills what we need for Skate to function. It
   * batches updates and does the bare minimum during synchronous operation
   * which make mutation event performance bearable. The rest is batched on the
   * next tick. Like mutation observers, each mutation is divided into sibling
   * groups for each parent that had mutations. All attribute mutations are
   * batched into separate records regardless of the element they occured on.
   *
   * @param {Function} callback The callback to execute with the mutation info.
   *
   * @returns {undefined}
   */
  function MutationObserver(callback) {
    if (NativeMutationObserver && !isFixingIe) {
      return new NativeMutationObserver(callback);
    }
  
    this.callback = callback;
    this.elements = [];
  }
  
  MutationObserver.prototype = {
    observe: function observe(target, options) {
      function addEventToBatch(e) {
        batchedEvents.push(e);
        batchEvents();
      }
  
      function batchEvent(e) {
        var eTarget = e.target;
  
        // In some test environments, e.target has been nulled after the tests
        // are done and a batch is still processing.
        if (!eTarget) {
          return;
        }
  
        var eType = e.type;
        var eTargetParent = eTarget.parentNode;
  
        if (!canTriggerInsertOrRemove(eTargetParent)) {
          return;
        }
  
        // The same bug that affects IE 11 also affects IE 9 / 10 with Mutation
        // Events.
        //
        // IE 11 bug: https://connect.microsoft.com/IE/feedback/details/817132/ie-11-childnodes-are-missing-from-mutationobserver-mutations-removednodes-after-setting-innerhtml
        var shouldWorkAroundIeRemoveBug = isFixingIe && eType === 'DOMNodeRemoved';
        var isDescendant = lastBatchedElement && lastBatchedElement.nodeType === 1 && (0, _utilElementContains2['default'])(lastBatchedElement, eTarget);
  
        // This checks to see if the element is contained in the last batched
        // element. If it is, then we don't batch it because elements are
        // batched into first-children of a given parent. However, IE is (of
        // course) an exception to this and destroys the DOM tree heirarchy
        // before the callback gets fired if the element was removed. Because of
        // this, we have to let through all descendants that had the event
        // triggered on it.
        if (!shouldWorkAroundIeRemoveBug && isDescendant) {
          return;
        }
  
        if (!lastBatchedRecord || lastBatchedRecord.target !== eTargetParent) {
          batchedRecords.push(lastBatchedRecord = newMutationRecord(eTargetParent));
        }
  
        if (eType === 'DOMNodeInserted') {
          if (!lastBatchedRecord.addedNodes) {
            lastBatchedRecord.addedNodes = [];
          }
  
          lastBatchedRecord.addedNodes.push(eTarget);
        } else {
          if (!lastBatchedRecord.removedNodes) {
            lastBatchedRecord.removedNodes = [];
          }
  
          lastBatchedRecord.removedNodes.push(eTarget);
        }
  
        lastBatchedElement = eTarget;
      }
  
      function canTriggerAttributeModification(eTarget) {
        return options.attributes && (options.subtree || eTarget === target);
      }
  
      function canTriggerInsertOrRemove(eTargetParent) {
        return options.childList && (options.subtree || eTargetParent === target);
      }
  
      var that = this;
  
      // Batching insert and remove.
      var lastBatchedElement;
      var lastBatchedRecord;
      var batchedEvents = [];
      var batchedRecords = [];
      var batchEvents = (0, _utilDebounce2['default'])(function () {
        var batchedEventsLen = batchedEvents.length;
  
        for (var a = 0; a < batchedEventsLen; a++) {
          batchEvent(batchedEvents[a]);
        }
  
        that.callback(batchedRecords);
        batchedEvents = [];
        batchedRecords = [];
        lastBatchedElement = undefined;
        lastBatchedRecord = undefined;
      });
  
      // Batching attributes.
      var attributeOldValueCache = {};
      var attributeMutations = [];
      var batchAttributeMods = (0, _utilDebounce2['default'])(function () {
        // We keep track of the old length just in case attributes are
        // modified within a handler.
        var len = attributeMutations.length;
  
        // Call the handler with the current modifications.
        that.callback(attributeMutations);
  
        // We remove only up to the current point just in case more
        // modifications were queued.
        attributeMutations.splice(0, len);
      });
  
      var observed = {
        target: target,
        options: options,
        insertHandler: addEventToBatch,
        removeHandler: addEventToBatch,
        attributeHandler: function attributeHandler(e) {
          var eTarget = e.target;
  
          if (!(e.relatedNode instanceof Attr)) {
            // IE10 fires two mutation events for attributes, one with the
            // target as the relatedNode, and one where it's the attribute.
            //
            // Re: relatedNode, "In the case of the DOMAttrModified event
            // it indicates the Attr node which was modified, added, or
            // removed." [1]
            //
            // [1]: https://msdn.microsoft.com/en-us/library/ff943606%28v=vs.85%29.aspx
            return;
          }
  
          if (!canTriggerAttributeModification(eTarget)) {
            return;
          }
  
          var eAttrName = e.attrName;
          var ePrevValue = e.prevValue;
          var eNewValue = e.newValue;
          var record = newMutationRecord(eTarget, 'attributes');
          record.attributeName = eAttrName;
  
          if (options.attributeOldValue) {
            record.oldValue = attributeOldValueCache[eAttrName] || ePrevValue || null;
          }
  
          attributeMutations.push(record);
  
          // We keep track of old values so that when IE incorrectly reports
          // the old value we can ensure it is actually correct.
          if (options.attributeOldValue) {
            attributeOldValueCache[eAttrName] = eNewValue;
          }
  
          batchAttributeMods();
        }
      };
  
      this.elements.push(observed);
  
      if (options.childList) {
        target.addEventListener('DOMNodeInserted', observed.insertHandler);
        target.addEventListener('DOMNodeRemoved', observed.removeHandler);
      }
  
      if (options.attributes) {
        target.addEventListener('DOMAttrModified', observed.attributeHandler);
      }
  
      return this;
    },
  
    disconnect: function disconnect() {
      (0, _utilObjEach2['default'])(this.elements, function (observed) {
        observed.target.removeEventListener('DOMNodeInserted', observed.insertHandler);
        observed.target.removeEventListener('DOMNodeRemoved', observed.removeHandler);
        observed.target.removeEventListener('DOMAttrModified', observed.attributeHandler);
      });
  
      this.elements = [];
  
      return this;
    }
  };
  
  // Fix IE because IE.
  (function () {
    if (!isIe) {
      return;
    }
  
    // We have to call the old innerHTML getter and setter.
    var oldInnerHTML = Object.getOwnPropertyDescriptor(elementPrototype, 'innerHTML');
  
    // This redefines the innerHTML property so that we can ensure that events
    // are properly triggered.
    Object.defineProperty(elementPrototype, 'innerHTML', {
      get: function get() {
        return oldInnerHTML.get.call(this);
      },
      set: function set(html) {
        walkTree(this, function (node) {
          var mutationEvent = document.createEvent('MutationEvent');
          mutationEvent.initMutationEvent('DOMNodeRemoved', true, false, null, null, null, null, null);
          node.dispatchEvent(mutationEvent);
        });
  
        oldInnerHTML.set.call(this, html);
      }
    });
  
    // Flag so the polyfill is used for all subsequent Mutation Observer objects.
    isFixingIe = true;
  })();
  
  exports['default'] = MutationObserver;
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/api/watch.js
__f6b64da2587bc07078df9ceaa831f480 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _polyfillMutationObserver = __01a955bfd04978389c6bb62f6537e348;
  
  var _polyfillMutationObserver2 = _interopRequireDefault(_polyfillMutationObserver);
  
  exports['default'] = function (elem, callback, opts) {
    var opts = opts || {};
    var observer = new _polyfillMutationObserver2['default'](function (mutations) {
      mutations.forEach(function (mutation) {
        callback(mutation.addedNodes || [], mutation.removedNodes || []);
      });
    });
  
    if (opts.childList === undefined) {
      opts.childList = true;
    }
  
    observer.observe(elem, opts);
    return observer;
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/lifecycle/attributes.js
__78911a46287d114ab64e224cf7ec552a = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _apiChain = __2a28813aaeb62515e8939df56df9b57c;
  
  var _apiChain2 = _interopRequireDefault(_apiChain);
  
  var _utilData = __e5c7b156b57f4bcec078ea007d82154a;
  
  var _utilData2 = _interopRequireDefault(_utilData);
  
  var _utilProtos = __8e591b41259aa51a0c9332aa71063092;
  
  var _utilProtos2 = _interopRequireDefault(_utilProtos);
  
  var lifecycleNames = ['created', 'updated', 'removed'];
  
  function validLifecycles(obj) {
    return (0, _utilProtos2['default'])(obj || {}).reduce(function (prev, curr) {
      return prev.concat(Object.getOwnPropertyNames(curr));
    }, []).filter(function (key, idx, arr) {
      return arr.lastIndexOf(key) === idx;
    }).filter(function (key) {
      return lifecycleNames.some(function (val) {
        return key.indexOf(val) !== -1;
      });
    });
  }
  
  function resolveType(oldValue, newValue) {
    var newValueIsString = typeof newValue === 'string';
    var oldValueIsString = typeof oldValue === 'string';
  
    if (!oldValueIsString && newValueIsString) {
      return 'created';
    } else if (oldValueIsString && newValueIsString) {
      return 'updated';
    } else if (oldValueIsString && !newValueIsString) {
      return 'removed';
    }
  }
  
  function makeSpecificCallback(types) {
    if (typeof types === 'function') {
      return types;
    }
  
    var map = validLifecycles(types).reduce(function (obj, unsplit) {
      return unsplit.split(' ').reduce(function (obj, split) {
        (obj[split] = obj[split] || []).push(unsplit);
        return obj;
      }, obj);
    }, {});
  
    return function (elem, diff) {
      (map[diff.type] || []).forEach(function (cb) {
        types[cb](elem, diff);
      });
    };
  }
  
  function makeGlobalCallback(attrs) {
    if (typeof attrs === 'function') {
      return attrs;
    }
  
    var fns = Object.keys(attrs || {}).reduce(function (prev, curr) {
      prev[curr] = makeSpecificCallback(attrs[curr]);
      return prev;
    }, {});
  
    return function (diff) {
      (0, _apiChain2['default'])(fns[diff.name]).call(this, diff);
    };
  }
  
  exports['default'] = function (opts) {
    var callback = makeGlobalCallback(opts.attributes);
    return function (name, oldValue, newValue) {
      var info = (0, _utilData2['default'])(this);
      var attributeToPropertyMap = info.attributeToPropertyMap || {};
  
      callback.call(this, {
        name: name,
        newValue: newValue === undefined ? null : newValue,
        oldValue: oldValue === undefined ? null : oldValue,
        type: resolveType(oldValue, newValue)
      });
  
      // Ensure properties are notified of this change. We only do this if we're
      // not already updating the attribute from the property. This is so that
      // we don't invoke an infinite loop.
      if (attributeToPropertyMap[name] && !info.updatingAttribute) {
        info.updatingProperty = true;
        this[attributeToPropertyMap[name]] = newValue;
        info.updatingProperty = false;
      }
    };
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/defaults.js
__6dfbf8a72a3b6ba706326c31276d396d = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _constants = __d05cc8d30e112b029f1facfdebccd2f8;
  
  exports['default'] = {
    // Called when the element is attached to the document.
    attached: function attached() {},
  
    // Attribute lifecycle callback or callbacks.
    attributes: undefined,
  
    // Called when the element is created.
    created: function created() {},
  
    // Called when the element is detached from the document.
    detached: function detached() {},
  
    // The events to manage the binding and unbinding of during the definition's
    // lifecycle.
    events: undefined,
  
    // Restricts a particular definition to binding explicitly to an element with
    // a tag name that matches the specified value.
    'extends': undefined,
  
    // The ID of the definition. This is automatically set in the `skate()`
    // function.
    id: '',
  
    // Properties and methods to add to each element.
    prototype: {},
  
    // The attribute name to add after calling the created() callback.
    resolvedAttribute: 'resolved',
  
    // The template to replace the content of the element with.
    template: undefined,
  
    // The type of bindings to allow.
    type: _constants.TYPE_ELEMENT,
  
    // The attribute name to remove after calling the created() callback.
    unresolvedAttribute: 'unresolved'
  };
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/lifecycle/detached.js
__67e344d9bc0d7fdcb01495c108d28a63 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _utilData = __e5c7b156b57f4bcec078ea007d82154a;
  
  var _utilData2 = _interopRequireDefault(_utilData);
  
  var _polyfillRegistry = __ac87bcd7375448e7f20852eb4b9c9cc7;
  
  var _polyfillRegistry2 = _interopRequireDefault(_polyfillRegistry);
  
  var _utilWalkTree = __7cb66022a0f63484e867a793bf6bd3d9;
  
  var _utilWalkTree2 = _interopRequireDefault(_utilWalkTree);
  
  function callDetachedOnDescendants(elem, opts) {
    (0, _utilWalkTree2['default'])(elem.childNodes, function (elem) {
      _polyfillRegistry2['default'].getForElement(elem).forEach(function (Ctor) {
        return Ctor.prototype.createdCallback.call(elem);
      });
    }, function (elem) {
      return !(0, _utilData2['default'])(elem, opts.id).attached;
    });
  }
  
  function callDetached(elem, opts) {
    if (opts.detached) {
      opts.detached.call(elem);
    }
  }
  
  exports['default'] = function (opts) {
    /* jshint expr: true */
    return function () {
      var info = (0, _utilData2['default'])(this, opts.id);
      var isNative = this.detachedCallback;
  
      if (info.detached) {
        return;
      }
  
      isNative || callDetachedOnDescendants(this, opts);
      info.detached = true;
      callDetached(this, opts);
      info.attached = false;
    };
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/polyfill/document-observer.js
__29534ceb8b1d5ba7030c544127739234 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _apiWatch = __f6b64da2587bc07078df9ceaa831f480;
  
  var _apiWatch2 = _interopRequireDefault(_apiWatch);
  
  var _lifecycleAttached = __79a815116915b2d14fb87a6feb7472f4;
  
  var _lifecycleAttached2 = _interopRequireDefault(_lifecycleAttached);
  
  var _lifecycleCreated = __6558b19874f6e672c5eefe776d12d00f;
  
  var _lifecycleCreated2 = _interopRequireDefault(_lifecycleCreated);
  
  var _lifecycleDetached = __67e344d9bc0d7fdcb01495c108d28a63;
  
  var _lifecycleDetached2 = _interopRequireDefault(_lifecycleDetached);
  
  var _globals = __9784d985d06bb16ecdd611dd47c33dce;
  
  var _globals2 = _interopRequireDefault(_globals);
  
  var _utilIgnored = __837520fd914b16ac524935126fa3c196;
  
  var _utilIgnored2 = _interopRequireDefault(_utilIgnored);
  
  var _registry = __ac87bcd7375448e7f20852eb4b9c9cc7;
  
  var _registry2 = _interopRequireDefault(_registry);
  
  var _utilWalkTree = __7cb66022a0f63484e867a793bf6bd3d9;
  
  var _utilWalkTree2 = _interopRequireDefault(_utilWalkTree);
  
  var DocumentFragment = window.DocumentFragment;
  
  function getClosestIgnoredElement(element) {
    var parent = element;
  
    while (parent && parent !== document && !(parent instanceof DocumentFragment)) {
      if ((0, _utilIgnored2['default'])(parent)) {
        return parent;
      }
  
      parent = parent.parentNode;
    }
  }
  
  function documentObserverHandler(addedNodes, removedNodes) {
    // Since siblings are batched together, we check the first node's parent
    // node to see if it is ignored. If it is then we don't process any added
    // nodes. This prevents having to check every node.
    if (addedNodes.length && !getClosestIgnoredElement(addedNodes[0].parentNode)) {
      (0, _utilWalkTree2['default'])(addedNodes, function (element) {
        var components = _registry2['default'].getForElement(element);
        var componentsLength = components.length;
  
        for (var a = 0; a < componentsLength; a++) {
          (0, _lifecycleCreated2['default'])(components[a]).call(element);
        }
  
        for (var a = 0; a < componentsLength; a++) {
          (0, _lifecycleAttached2['default'])(components[a]).call(element);
        }
      });
    }
  
    // We can't check batched nodes here because they won't have a parent node.
    if (removedNodes.length) {
      (0, _utilWalkTree2['default'])(removedNodes, function (element) {
        var components = _registry2['default'].getForElement(element);
        var componentsLength = components.length;
  
        for (var a = 0; a < componentsLength; a++) {
          (0, _lifecycleDetached2['default'])(components[a]).call(element);
        }
      });
    }
  }
  
  exports['default'] = _globals2['default'].registerIfNotExists('observer', {
    observer: undefined,
    register: function register() {
      if (!this.observer) {
        this.observer = (0, _apiWatch2['default'])(document, documentObserverHandler, { subtree: true });
      }
  
      return this;
    },
    unregister: function unregister() {
      if (this.observer) {
        this.observer.disconnect();
        this.observer = undefined;
      }
  
      return this;
    }
  });
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/polyfill/element-constructor.js
__a9932cc2c5194ed3f03336ba8ee18eb8 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _constants = __d05cc8d30e112b029f1facfdebccd2f8;
  
  var DEFAULT_ELEMENT = 'div';
  
  function createElement(options) {
    var element;
    var id = options.id;
    var parent = options['extends'];
    var type = options.type;
  
    // Allow all types of components to be constructed.
    if (type === _constants.TYPE_ELEMENT) {
      element = document.createElement(parent || id);
      if (parent) {
        element.setAttribute('is', id);
      }
    } else {
      element = document.createElement(parent || DEFAULT_ELEMENT);
  
      if (type === _constants.TYPE_ATTRIBUTE) {
        element.setAttribute(id, '');
      } else if (type === _constants.TYPE_CLASSNAME) {
        element.className = id;
      }
    }
  
    return element;
  }
  
  exports['default'] = function (options) {
    function CustomElement() {
      var element = createElement(options);
  
      // Ensure the definition prototype is up to date with the element's
      // prototype. This ensures that overwriting the element prototype still
      // works.
      options.prototype = CustomElement.prototype;
  
      // Initialises. This will always exist.
      options.prototype.createdCallback.call(element);
  
      return element;
    }
  
    // This allows modifications to the element prototype propagate to the
    // definition prototype.
    CustomElement.prototype = options.prototype;
  
    return CustomElement;
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/support/custom-elements.js
__88697db3802e4b3a7df3704411b534f1 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  exports['default'] = function () {
    return typeof document.registerElement === 'function';
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/support/valid-custom-element.js
__e954e098fef3670df2ec8d1b0ad08da8 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  exports['default'] = function (name) {
    return name.indexOf('-') > 0;
  };
  
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// node_modules/skatejs/src/index.js
__adbe9b421ad8c9d255cf56387e684d46 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _constants = __d05cc8d30e112b029f1facfdebccd2f8;
  
  var _apiChain = __2a28813aaeb62515e8939df56df9b57c;
  
  var _apiChain2 = _interopRequireDefault(_apiChain);
  
  var _apiCreate = __24e60392c1f386420a36a81ec0046b0c;
  
  var _apiCreate2 = _interopRequireDefault(_apiCreate);
  
  var _apiEmit = __80c006af61b40cfb3c8bb1bde09d8a94;
  
  var _apiEmit2 = _interopRequireDefault(_apiEmit);
  
  var _apiEvent = __be52bce5d4ad3fdf7d061650d4b63777;
  
  var _apiEvent2 = _interopRequireDefault(_apiEvent);
  
  var _apiInit = __75a36d31c8e0abe1acd8a25042c4c618;
  
  var _apiInit2 = _interopRequireDefault(_apiInit);
  
  var _apiNoConflict = __24281b24aac9c4448209cd54e5debaf5;
  
  var _apiNoConflict2 = _interopRequireDefault(_apiNoConflict);
  
  var _apiProperty = __138519f50a7b4c6b6ea4cabda2ae8ed2;
  
  var _apiProperty2 = _interopRequireDefault(_apiProperty);
  
  var _apiReady = __5da1c546be01c1f40cb879aa81ef72d0;
  
  var _apiReady2 = _interopRequireDefault(_apiReady);
  
  var _apiType = __df7b1f4706eabd9691c275cb29843bab;
  
  var _apiType2 = _interopRequireDefault(_apiType);
  
  var _apiVersion = __129de96d424f38f8e42e505baf5ba1c9;
  
  var _apiVersion2 = _interopRequireDefault(_apiVersion);
  
  var _apiWatch = __f6b64da2587bc07078df9ceaa831f480;
  
  var _apiWatch2 = _interopRequireDefault(_apiWatch);
  
  var _utilAssign = __3bb88b69360428e2175eeaa684e338dc;
  
  var _utilAssign2 = _interopRequireDefault(_utilAssign);
  
  var _utilAssignSafe = __339137b629512d70c015244fc4b5b7ee;
  
  var _utilAssignSafe2 = _interopRequireDefault(_utilAssignSafe);
  
  var _lifecycleAttached = __79a815116915b2d14fb87a6feb7472f4;
  
  var _lifecycleAttached2 = _interopRequireDefault(_lifecycleAttached);
  
  var _lifecycleAttributes = __78911a46287d114ab64e224cf7ec552a;
  
  var _lifecycleAttributes2 = _interopRequireDefault(_lifecycleAttributes);
  
  var _lifecycleCreated = __6558b19874f6e672c5eefe776d12d00f;
  
  var _lifecycleCreated2 = _interopRequireDefault(_lifecycleCreated);
  
  var _utilDashCase = __b768404d59dd581639b792015de2ca96;
  
  var _utilDashCase2 = _interopRequireDefault(_utilDashCase);
  
  var _utilDebounce = __e53a88c23c45efb3d9510a05dd661b76;
  
  var _utilDebounce2 = _interopRequireDefault(_utilDebounce);
  
  var _defaults = __6dfbf8a72a3b6ba706326c31276d396d;
  
  var _defaults2 = _interopRequireDefault(_defaults);
  
  var _lifecycleDetached = __67e344d9bc0d7fdcb01495c108d28a63;
  
  var _lifecycleDetached2 = _interopRequireDefault(_lifecycleDetached);
  
  var _polyfillDocumentObserver = __29534ceb8b1d5ba7030c544127739234;
  
  var _polyfillDocumentObserver2 = _interopRequireDefault(_polyfillDocumentObserver);
  
  var _polyfillElementConstructor = __a9932cc2c5194ed3f03336ba8ee18eb8;
  
  var _polyfillElementConstructor2 = _interopRequireDefault(_polyfillElementConstructor);
  
  var _polyfillRegistry = __ac87bcd7375448e7f20852eb4b9c9cc7;
  
  var _polyfillRegistry2 = _interopRequireDefault(_polyfillRegistry);
  
  var _supportCustomElements = __88697db3802e4b3a7df3704411b534f1;
  
  var _supportCustomElements2 = _interopRequireDefault(_supportCustomElements);
  
  var _utilWalkTree = __7cb66022a0f63484e867a793bf6bd3d9;
  
  var _utilWalkTree2 = _interopRequireDefault(_utilWalkTree);
  
  var _supportValidCustomElement = __e954e098fef3670df2ec8d1b0ad08da8;
  
  var _supportValidCustomElement2 = _interopRequireDefault(_supportValidCustomElement);
  
  function initDocument() {
    (0, _utilWalkTree2['default'])(document.documentElement.childNodes, function (element) {
      var components = _polyfillRegistry2['default'].getForElement(element);
      var componentsLength = components.length;
  
      for (var a = 0; a < componentsLength; a++) {
        (0, _lifecycleCreated2['default'])(components[a]).call(element);
      }
  
      for (var a = 0; a < componentsLength; a++) {
        (0, _lifecycleAttached2['default'])(components[a]).call(element);
      }
    });
  }
  
  function initDocumentWhenReady() {
    (0, _apiReady2['default'])(initDocument);
  }
  
  function dashCaseAttributeNames(options) {
    for (var _name in options.attributes) {
      var dashCasedName = (0, _utilDashCase2['default'])(_name);
  
      // We only need to define a new attribute if the name is actually different.
      if (_name !== dashCasedName) {
        options.attributes[dashCasedName] = options.attributes[_name];
  
        // We define a non-enumerable property that links the camelCased version
        // to the dash-cased version just in case it's referred to in either form.
        // It is non-enumerable so that there are no duplicate names attributes
        // during enumeration and that the ones that are enumerable are the
        // dash-cased versions.
        Object.defineProperty(options.attributes, _name, {
          enumerable: false,
          get: function get() {
            return options.attributes[dashCasedName];
          }
        });
      }
    }
  }
  
  function makeOptions(userOptions) {
    var options = (0, _utilAssignSafe2['default'])({}, _defaults2['default']);
  
    // Copy over all standard options if the user has defined them.
    for (var _name2 in _defaults2['default']) {
      if (userOptions[_name2] !== undefined) {
        options[_name2] = userOptions[_name2];
      }
    }
  
    // Copy over non-standard options.
    for (var _name3 in userOptions) {
      options[_name3] = userOptions[_name3];
    }
  
    dashCaseAttributeNames(options);
  
    return options;
  }
  
  function makeNonNewableWrapper(Ctor) {
    var CtorWrapper = function CtorWrapper() {
      var props = arguments[0] === undefined ? {} : arguments[0];
  
      return (0, _utilAssign2['default'])(new Ctor(), props);
    };
    CtorWrapper.prototype = Ctor.prototype;
    return CtorWrapper;
  }
  
  var debouncedInitDocumentWhenReady = (0, _utilDebounce2['default'])(initDocumentWhenReady);
  var HTMLElement = window.HTMLElement;
  
  function skate(id, userOptions) {
    var Ctor, CtorParent, isElement, isNative;
    var options = makeOptions(userOptions);
  
    CtorParent = options['extends'] ? document.createElement(options['extends']).constructor : HTMLElement;
    isElement = options.type === _constants.TYPE_ELEMENT;
    isNative = isElement && (0, _supportCustomElements2['default'])() && (0, _supportValidCustomElement2['default'])(id);
  
    // Inherit from parent prototype.
    if (!CtorParent.prototype.isPrototypeOf(options.prototype)) {
      options.prototype = (0, _utilAssignSafe2['default'])(Object.create(CtorParent.prototype), options.prototype);
    }
  
    // Extend behaviour of existing callbacks.
    options.prototype.createdCallback = (0, _lifecycleCreated2['default'])(options);
    options.prototype.attachedCallback = (0, _lifecycleAttached2['default'])(options);
    options.prototype.detachedCallback = (0, _lifecycleDetached2['default'])(options);
    options.prototype.attributeChangedCallback = (0, _lifecycleAttributes2['default'])(options);
    Object.defineProperty(options, 'id', {
      configurable: false,
      value: id,
      writable: false
    });
  
    // Make a constructor for the definition.
    if (isNative) {
      Ctor = document.registerElement(id, options);
    } else {
      Ctor = (0, _polyfillElementConstructor2['default'])(options);
      debouncedInitDocumentWhenReady();
      _polyfillDocumentObserver2['default'].register();
    }
  
    Ctor = makeNonNewableWrapper(Ctor);
    (0, _utilAssignSafe2['default'])(Ctor, options);
    _polyfillRegistry2['default'].set(id, Ctor);
    Object.defineProperty(Ctor.prototype, 'constructor', {
      enumerable: false,
      value: Ctor
    });
  
    return Ctor;
  }
  
  skate.chain = _apiChain2['default'];
  skate.create = _apiCreate2['default'];
  skate.emit = _apiEmit2['default'];
  skate.event = _apiEvent2['default'];
  skate.init = _apiInit2['default'];
  skate.noConflict = _apiNoConflict2['default'];
  skate.property = _apiProperty2['default'];
  skate.ready = _apiReady2['default'];
  skate.type = _apiType2['default'];
  skate.version = _apiVersion2['default'];
  skate.watch = _apiWatch2['default'];
  
  // Global
  window.skate = skate;
  
  // ES6
  exports['default'] = skate;
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// src/components/item.js
__0806be50d5153606742305b4f23e481c = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _node_modulesShadejsSrcIndex = __c5e9793925f697b398ae907acbde918c;
  
  var _node_modulesShadejsSrcIndex2 = _interopRequireDefault(_node_modulesShadejsSrcIndex);
  
  var _node_modulesSkatejsSrcIndex = __adbe9b421ad8c9d255cf56387e684d46;
  
  var _node_modulesSkatejsSrcIndex2 = _interopRequireDefault(_node_modulesSkatejsSrcIndex);
  
  exports['default'] = (0, _node_modulesSkatejsSrcIndex2['default'])('x-item', {
    properties: {
      data: {
        get: function get() {
          return {
            id: this.id,
            name: this.name,
            content: this.content
          };
        },
        set: function set(value) {
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
    template: (0, _node_modulesShadejsSrcIndex2['default'])('\n    <div on="click:selectItem">\n      <content name="name" text></content>\n    </div>\n  ')
  });
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// src/components/list.js
__45c0964cee6d069c8fb86958ebe41606 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _node_modulesShadejsSrcIndex = __c5e9793925f697b398ae907acbde918c;
  
  var _node_modulesShadejsSrcIndex2 = _interopRequireDefault(_node_modulesShadejsSrcIndex);
  
  var _node_modulesSkatejsSrcIndex = __adbe9b421ad8c9d255cf56387e684d46;
  
  var _node_modulesSkatejsSrcIndex2 = _interopRequireDefault(_node_modulesSkatejsSrcIndex);
  
  exports['default'] = (0, _node_modulesSkatejsSrcIndex2['default'])('x-list', {
    template: (0, _node_modulesShadejsSrcIndex2['default'])('\n    <div class="inner">\n      <button on="click:newItem">New</button>\n      <div class="list">\n        <content name="items" multiple></content>\n      </div>\n    </div>\n  ')
  });
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// src/components/store.js
__80a00ee8cd42ba74a060601df17e8c3f = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _node_modulesSkatejsSrcIndex = __adbe9b421ad8c9d255cf56387e684d46;
  
  var _node_modulesSkatejsSrcIndex2 = _interopRequireDefault(_node_modulesSkatejsSrcIndex);
  
  var prefix = 'writer-';
  var store = window.localStorage;
  
  exports['default'] = (0, _node_modulesSkatejsSrcIndex2['default'])('x-store', {
    prototype: Object.defineProperties({
      key: function key(_key) {
        return prefix + _key;
      },
      one: function one(key) {
        return JSON.parse(store.getItem(this.key(key)));
      },
      remove: function remove(key) {
        store.removeItem(this.key(key));
      },
      save: function save(key, data) {
        this.dispatchEvent(new CustomEvent('data', { bubbles: true, detail: { name: key, data: data } }));
        store.setItem(this.key(key), JSON.stringify(data));
        return this;
      }
    }, {
      all: {
        get: function () {
          var _this = this;
  
          return Object.keys(store).filter(function (key) {
            return key.match(/writer-\d+/);
          }).map(function (key) {
            return key.replace(prefix, '');
          }).map(function (key) {
            return _this.one(key);
          });
        },
        configurable: true,
        enumerable: true
      }
    })
  });
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// src/components/text.js
__9dc45ecf6c4b80556cca963ae839b459 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _node_modulesShadejsSrcIndex = __c5e9793925f697b398ae907acbde918c;
  
  var _node_modulesShadejsSrcIndex2 = _interopRequireDefault(_node_modulesShadejsSrcIndex);
  
  var _node_modulesSkatejsSrcIndex = __adbe9b421ad8c9d255cf56387e684d46;
  
  var _node_modulesSkatejsSrcIndex2 = _interopRequireDefault(_node_modulesSkatejsSrcIndex);
  
  exports['default'] = (0, _node_modulesSkatejsSrcIndex2['default'])('x-text', Object.defineProperties({
    created: function created() {
      this.__heightChecker = document.createElement('span');
    },
  
    attached: function attached() {
      var _this = this;
  
      _node_modulesSkatejsSrcIndex2['default'].ready(function () {
        var textarea = _this.querySelector('textarea');
        document.body.appendChild(_this.__heightChecker);
        _this.__heightChecker.style.width = textarea.offsetWidth;
        _this.__heightChecker.style.height = 'auto';
        _this.__heightChecker.style.position = 'absolute';
        _this.__heightChecker.style.left = '-10000px';
        _node_modulesSkatejsSrcIndex2['default'].ready(function () {
          return _this.handleKeyup();
        });
      });
    },
  
    detached: function detached() {
      this.__heightChecker.remove();
    }
  
  }, {
    properties: {
      get: function () {
        return {
          data: {
            get: function get() {
              return {
                id: this.id,
                name: this.name,
                content: this.content
              };
            },
            set: function set(value) {
              var _this2 = this;
  
              value = value || {};
              this.id = value.id;
              this.name = value.name;
              this.content = value.content;
              _node_modulesSkatejsSrcIndex2['default'].ready(function () {
                return _this2.handleKeyup();
              });
            }
          }
        };
      },
      configurable: true,
      enumerable: true
    },
    prototype: {
      get: function () {
        return {
          handleKeyup: function handleKeyup() {
            var textarea = this.querySelector('textarea');
            this.__heightChecker.innerHTML = textarea.value.split('\n').map(function (line) {
              return '<p style="padding: 0; margin: 0;">.' + line + '</p>';
            }).join('');
            textarea.style.height = this.__heightChecker.offsetHeight + 'px';
          }
        };
      },
      configurable: true,
      enumerable: true
    },
    template: {
      get: function () {
        return (0, _node_modulesShadejsSrcIndex2['default'])('\n      <div class="inner">\n        <button type="button" on="click:removeItem">Remove</button>\n        <input type="text" name="name" on="change:updateItem">\n        <textarea name="content" on="change:updateItem keyup"></textarea>\n      </div>\n    ');
      },
      configurable: true,
      enumerable: true
    }
  }));
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// src/components/writer.js
__cf478ea662d378736806d40e803f7c78 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _item = __0806be50d5153606742305b4f23e481c;
  
  var _item2 = _interopRequireDefault(_item);
  
  var _node_modulesShadejsSrcIndex = __c5e9793925f697b398ae907acbde918c;
  
  var _node_modulesShadejsSrcIndex2 = _interopRequireDefault(_node_modulesShadejsSrcIndex);
  
  var _node_modulesSkatejsSrcIndex = __adbe9b421ad8c9d255cf56387e684d46;
  
  var _node_modulesSkatejsSrcIndex2 = _interopRequireDefault(_node_modulesSkatejsSrcIndex);
  
  exports['default'] = (0, _node_modulesSkatejsSrcIndex2['default'])('x-writer', {
    created: function created() {
      this.handleResize = this.handleResize.bind(this);
    },
    attached: function attached() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
    },
    detached: function detached() {
      window.removeEventListener('resize', this.handleResize);
    },
    properties: {
      selected: {
        set: function set(newValue, oldValue) {
          if (oldValue) {
            oldValue.selected = false;
          }
  
          if (newValue) {
            this.text.data = newValue.data;
            this.store.save('selected', newValue.id);
            newValue.selected = true;
          }
        }
      },
      storeId: {
        attr: true,
        set: function set(value) {
          var _this = this;
  
          _node_modulesSkatejsSrcIndex2['default'].ready(function () {
            _this.store = document.getElementById(value);
            _this.init();
          });
        }
      }
    },
    prototype: {
      init: function init() {
        var _this2 = this;
  
        this.list.items = '';
        this.store.all.forEach(function (storedItem) {
          _this2.list.items.append((0, _item2['default'])(storedItem));
        });
  
        if (this.list.items.length) {
          this.selected = this.list.items.find({ id: this.store.one('selected') })[0] || this.list.items.at(0);
        } else {
          this.handleNewItem();
        }
      },
      handleNewItem: function handleNewItem() {
        var id = this.list.items.length + 1;
        this.selected = (0, _item2['default'])({
          id: id,
          name: 'New document ' + id
        });
        this.list.items.append(this.selected);
        this.store.save(id, this.selected.data);
        this.handleResize();
      },
      handleResize: function handleResize() {
        this.text.style.width = window.innerWidth - this.list.offsetWidth - 2 + 'px';
      },
      handleSelectItem: function handleSelectItem(e) {
        this.selected = e.target;
      },
      handleUpdateItem: function handleUpdateItem(e) {
        this.list.items.find({ id: e.target.id })[0].data = e.target.data;
        this.store.save(e.target.id, e.target.data);
        this.handleResize();
      },
      handleRemoveItem: function handleRemoveItem(e) {
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
    template: (0, _node_modulesShadejsSrcIndex2['default'])('\n    <div on="newItem removeItem selectItem updateItem">\n      <content name="list">\n        <x-list></x-list>\n      </content>\n      <content name="text">\n        <x-text></x-text>\n      </content>\n    </div>\n  ')
  });
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);

// src/index.js
__43b3c06bb5916758775a632c956dc1e3 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  __0806be50d5153606742305b4f23e481c;
  
  __45c0964cee6d069c8fb86958ebe41606;
  
  __80a00ee8cd42ba74a060601df17e8c3f;
  
  __9dc45ecf6c4b80556cca963ae839b459;
  
  __cf478ea662d378736806d40e803f7c78;
  
  return module.exports;
}).call(this);