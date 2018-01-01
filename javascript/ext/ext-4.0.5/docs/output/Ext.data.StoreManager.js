Ext.data.JsonP.Ext_data_StoreManager({
  "static": false,
  "mixedInto": [

  ],
  "inheritable": false,
  "xtypes": [

  ],
  "linenr": 1,
  "statics": {
    "css_var": [

    ],
    "cfg": [

    ],
    "css_mixin": [

    ],
    "event": [

    ],
    "method": [

    ],
    "property": [

    ]
  },
  "extends": "Ext.util.MixedCollection",
  "html_filename": "StoreManager.html",
  "allMixins": [
    "Ext.util.Sortable",
    "Ext.util.Observable"
  ],
  "docauthor": "Evan Trimboli <evan@sencha.com>",
  "href": "StoreManager.html#Ext-data-StoreManager",
  "subclasses": [

  ],
  "protected": false,
  "members": {
    "css_var": [

    ],
    "cfg": [
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 62,
        "owner": "Ext.util.AbstractMixedCollection",
        "html_filename": "AbstractMixedCollection.html",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-cfg-allowFunctions",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "allowFunctions",
        "shortDoc": "Specify true if the addAll\nfunction should add function references to the collection. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
        "doc": "<p>Specify <tt>true</tt> if the <a href=\"#/api/Ext.data.StoreManager-method-addAll\" rel=\"Ext.data.StoreManager-method-addAll\" class=\"docClass\">addAll</a>\nfunction should add function references to the collection. Defaults to\n<tt>false</tt>.</p>\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 102,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-cfg-listeners",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "listeners",
        "shortDoc": "A config object containing one or more event handlers to be added to this object during initialization. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>A config object containing one or more event handlers to be added to this object during initialization. This\nshould be a valid listeners config object as specified in the <a href=\"#/api/Ext.data.StoreManager-method-addListener\" rel=\"Ext.data.StoreManager-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple\nhandlers at once.</p>\n\n<p><strong>DOM events from ExtJS <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></strong></p>\n\n<p>While <em>some</em> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this is usually\nonly done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s <strong><code><a href=\"#/api/Ext.view.View-event-itemclick\" rel=\"Ext.view.View-event-itemclick\" class=\"docClass\">itemclick</a></code></strong> event passing the node clicked on. To access DOM events directly from a\nchild element of a Component, we need to specify the <code>element</code> option to identify the Component property to add a\nDOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n"
      }
    ],
    "css_mixin": [

    ],
    "event": [
      {
        "static": false,
        "inheritable": false,
        "linenr": 26,
        "owner": "Ext.util.AbstractMixedCollection",
        "html_filename": "AbstractMixedCollection.html",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-event-add",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "index",
            "doc": "<p>The index at which the item was added.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "o",
            "doc": "<p>The item added.</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "key",
            "doc": "<p>The key associated with the added item.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "add",
        "shortDoc": "Fires when an item is added to the collection. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
        "doc": "<p>Fires when an item is added to the collection.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 20,
        "owner": "Ext.util.AbstractMixedCollection",
        "html_filename": "AbstractMixedCollection.html",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-event-clear",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "clear",
        "shortDoc": "Fires when the collection is cleared. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
        "doc": "<p>Fires when the collection is cleared.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 44,
        "owner": "Ext.util.AbstractMixedCollection",
        "html_filename": "AbstractMixedCollection.html",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-event-remove",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "o",
            "doc": "<p>The item being removed.</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "key",
            "doc": "<p>(optional) The key associated with the removed item.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "remove",
        "shortDoc": "Fires when an item is removed from the collection. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
        "doc": "<p>Fires when an item is removed from the collection.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 35,
        "owner": "Ext.util.AbstractMixedCollection",
        "html_filename": "AbstractMixedCollection.html",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-event-replace",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "key",
            "doc": "<p>he key associated with the new added.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "old",
            "doc": "<p>The item being replaced.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "new",
            "doc": "<p>The new item.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "replace",
        "shortDoc": "Fires when an item is replaced in the collection. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
        "doc": "<p>Fires when an item is replaced in the collection.</p>\n"
      }
    ],
    "method": [
      {
        "static": false,
        "inheritable": false,
        "linenr": 40,
        "owner": "Ext.util.MixedCollection",
        "html_filename": "MixedCollection.html",
        "href": "MixedCollection.html#Ext-util-MixedCollection-method-constructor",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": false,
            "name": "allowFunctions",
            "doc": "<p>Specify <tt>true</tt> if the <a href=\"#/api/Ext.data.StoreManager-method-addAll\" rel=\"Ext.data.StoreManager-method-addAll\" class=\"docClass\">addAll</a>\nfunction should add function references to the collection. Defaults to\n<tt>false</tt>.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "keyFn",
            "doc": "<p>A function that can accept an item of the type(s) stored in this MixedCollection\nand return the key value for that item.  This is used when available to look up the key on items that\nwere passed without an explicit key parameter to a MixedCollection method.  Passing this parameter is\nequivalent to providing an implementation for the <a href=\"#/api/Ext.data.StoreManager-method-getKey\" rel=\"Ext.data.StoreManager-method-getKey\" class=\"docClass\">getKey</a> method.</p>\n"
          }
        ],
        "alias": null,
        "name": "constructor",
        "shortDoc": "Creates new MixedCollection. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/MixedCollection.js",
        "doc": "<p>Creates new MixedCollection.</p>\n",
        "return": {
          "type": "Object",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 69,
        "owner": "Ext.util.AbstractMixedCollection",
        "html_filename": "AbstractMixedCollection.html",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-add",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "key",
            "doc": "<p>The key to associate with the item, or the new item.</p>\n\n\n<p>If a <a href=\"#/api/Ext.data.StoreManager-method-getKey\" rel=\"Ext.data.StoreManager-method-getKey\" class=\"docClass\">getKey</a> implementation was specified for this MixedCollection,\nor if the key of the stored items is in a property called <tt><b>id</b></tt>,\nthe MixedCollection will be able to <i>derive</i> the key for the new item.\nIn this case just pass the new item in this parameter.</p>\n\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "o",
            "doc": "<p>The item to add.</p>\n"
          }
        ],
        "alias": null,
        "name": "add",
        "shortDoc": "Adds an item to the collection. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
        "doc": "<p>Adds an item to the collection. Fires the <a href=\"#/api/Ext.data.StoreManager-method-add\" rel=\"Ext.data.StoreManager-method-add\" class=\"docClass\">add</a> event when complete.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>The item added.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 166,
        "owner": "Ext.util.AbstractMixedCollection",
        "html_filename": "AbstractMixedCollection.html",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-addAll",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Object/Array",
            "properties": [

            ],
            "optional": false,
            "name": "objs",
            "doc": "<p>An Object containing properties which will be added\nto the collection, or an Array of values, each of which are added to the collection.\nFunctions references will be added to the collection if <code><a href=\"#/api/Ext.data.StoreManager-cfg-allowFunctions\" rel=\"Ext.data.StoreManager-cfg-allowFunctions\" class=\"docClass\">allowFunctions</a></code>\nhas been set to <tt>true</tt>.</p>\n"
          }
        ],
        "alias": null,
        "name": "addAll",
        "shortDoc": "Adds all elements of an Array or an Object to the collection. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
        "doc": "<p>Adds all elements of an Array or an Object to the collection.</p>\n",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 495,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-addEvents",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Object/String",
            "properties": [

            ],
            "optional": false,
            "name": "o",
            "doc": "<p>Either an object with event names as properties with a value of <code>true</code> or the first\nevent name string if multiple event names are being passed as separate parameters. Usage:</p>\n\n<pre><code>this.addEvents({\n    storeloaded: true,\n    storecleared: true\n});\n</code></pre>\n"
          },
          {
            "type": "String...",
            "properties": [

            ],
            "optional": true,
            "name": "more",
            "doc": "<p>(optional) Additional event names if multiple event names are being passed as separate\nparameters. Usage:</p>\n\n<pre><code>this.addEvents('storeloaded', 'storecleared');\n</code></pre>\n"
          }
        ],
        "alias": null,
        "name": "addEvents",
        "shortDoc": "Adds the specified events to the list of events which this Observable may fire. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Adds the specified events to the list of events which this Observable may fire.</p>\n",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 278,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-addListener",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "eventName",
            "doc": "<p>The name of the event to listen for. May also be an object who's property names are\nevent names.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "handler",
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.data.StoreManager-method-fireEvent\" rel=\"Ext.data.StoreManager-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function is executed. <strong>If\nomitted, defaults to the object which fired the event.</strong></p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "options",
            "doc": "<p>(optional) An object containing handler configuration.</p>\n\n<p><strong>Note:</strong> Unlike in ExtJS 3.x, the options object will also be passed as the last argument to every event handler.</p>\n\n<p>This object may contain any of the following properties:</p>\n\n<ul>\n<li><p><strong>scope</strong> : Object</p>\n\n<p>The scope (<code>this</code> reference) in which the handler function is executed. <strong>If omitted, defaults to the object\nwhich fired the event.</strong></p></li>\n<li><p><strong>delay</strong> : Number</p>\n\n<p>The number of milliseconds to delay the invocation of the handler after the event fires.</p></li>\n<li><p><strong>single</strong> : Boolean</p>\n\n<p>True to add a handler to handle just the next firing of the event, and then remove itself.</p></li>\n<li><p><strong>buffer</strong> : Number</p>\n\n<p>Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed by the specified number of\nmilliseconds. If the event fires again within that time, the original handler is <em>not</em> invoked, but the new\nhandler is scheduled in its place.</p></li>\n<li><p><strong>target</strong> : Observable</p>\n\n<p>Only call the handler if the event was fired on the target Observable, <em>not</em> if the event was bubbled up from a\nchild Observable.</p></li>\n<li><p><strong>element</strong> : String</p>\n\n<p><strong>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</strong> The name of a Component\nproperty which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which will exist only after the Component is rendered.\nFor example, to add a click listener to a Panel's body:</p>\n\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></li>\n</ul>\n\n\n<p><strong>Combining Options</strong></p>\n\n<p>Using the options argument, it is possible to combine different types of listeners:</p>\n\n<p>A delayed, one-time listener.</p>\n\n<pre><code>myPanel.on('hide', this.handleClick, this, {\n    single: true,\n    delay: 100\n});\n</code></pre>\n\n<p><strong>Attaching multiple handlers in 1 call</strong></p>\n\n<p>The method also allows for a single argument to be passed which is a config object containing properties which\nspecify multiple events. For example:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>\n\n<p>One can also specify options for each event handler separately:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: {fn: this.onCellClick, scope: this, single: true},\n    mouseover: {fn: panel.onMouseOver, scope: panel}\n});\n</code></pre>\n"
          }
        ],
        "alias": null,
        "name": "addListener",
        "shortDoc": "Appends an event handler to this object. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Appends an event handler to this object.</p>\n",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 156,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-addManagedListener",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.util.Observable/Ext.Element",
            "properties": [

            ],
            "optional": false,
            "name": "item",
            "doc": "<p>The item to which to add a listener/listeners.</p>\n"
          },
          {
            "type": "Object/String",
            "properties": [

            ],
            "optional": false,
            "name": "ename",
            "doc": "<p>The event name, or an object containing event name properties.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "fn",
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "opt",
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the\n<a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n"
          }
        ],
        "alias": null,
        "name": "addManagedListener",
        "shortDoc": "Adds listeners to any Observable object (or Ext.Element) which are automatically removed when this Component is\ndestr...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Adds listeners to any Observable object (or Ext.Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 269,
        "owner": "Ext.Base",
        "html_filename": "Base3.html",
        "href": "Base3.html#Ext-Base-method-callOverridden",
        "protected": true,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array/Arguments",
            "properties": [

            ],
            "optional": false,
            "name": "args",
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object</p>\n"
          }
        ],
        "alias": null,
        "name": "callOverridden",
        "shortDoc": "Call the original method that was previously overridden with Ext.Base.override\n\nExt.define('My.Cat', {\n    constructo...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js",
        "doc": "<p>Call the original method that was previously overridden with <a href=\"#/api/Ext.Base-method-override\" rel=\"Ext.Base-method-override\" class=\"docClass\">Ext.Base.override</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>Returns the result after calling the overridden method</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 124,
        "owner": "Ext.Base",
        "html_filename": "Base3.html",
        "href": "Base3.html#Ext-Base-method-callParent",
        "protected": true,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array/Arguments",
            "properties": [

            ],
            "optional": false,
            "name": "args",
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callParent(arguments)</code></p>\n"
          }
        ],
        "alias": null,
        "name": "callParent",
        "shortDoc": "Call the parent's overridden method. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js",
        "doc": "<p>Call the parent's overridden method. For example:</p>\n\n<pre><code>Ext.define('My.own.A', {\n    constructor: function(test) {\n        alert(test);\n    }\n});\n\nExt.define('My.own.B', {\n    extend: 'My.own.A',\n\n    constructor: function(test) {\n        alert(test);\n\n        this.callParent([test + 1]);\n    }\n});\n\nExt.define('My.own.C', {\n    extend: 'My.own.B',\n\n    constructor: function() {\n        alert(\"Going to call parent's overriden constructor...\");\n\n        this.callParent(arguments);\n    }\n});\n\nvar a = new My.own.A(1); // alerts '1'\nvar b = new My.own.B(1); // alerts '1', then alerts '2'\nvar c = new My.own.C(2); // alerts \"Going to call parent's overriden constructor...\"\n                         // alerts '2', then alerts '3'\n</code></pre>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>Returns the result from the superclass' method</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 435,
        "owner": "Ext.util.AbstractMixedCollection",
        "html_filename": "AbstractMixedCollection.html",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-clear",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "clear",
        "shortDoc": "Removes all items from the collection. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
        "doc": "<p>Removes all items from the collection.  Fires the <a href=\"#/api/Ext.data.StoreManager-method-clear\" rel=\"Ext.data.StoreManager-method-clear\" class=\"docClass\">clear</a> event when complete.</p>\n",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 426,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-clearListeners",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "clearListeners",
        "shortDoc": "Removes all listeners for this object including the managed listeners ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Removes all listeners for this object including the managed listeners</p>\n",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 455,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-clearManagedListeners",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "clearManagedListeners",
        "shortDoc": "Removes all managed listeners for this object. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Removes all managed listeners for this object.</p>\n",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 727,
        "owner": "Ext.util.AbstractMixedCollection",
        "html_filename": "AbstractMixedCollection.html",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-clone",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "clone",
        "shortDoc": "Creates a shallow copy of this collection ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
        "doc": "<p>Creates a shallow copy of this collection</p>\n",
        "return": {
          "type": "Ext.util.MixedCollection",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 489,
        "owner": "Ext.util.AbstractMixedCollection",
        "html_filename": "AbstractMixedCollection.html",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-collect",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "property",
            "doc": "<p>The property to collect on</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "root",
            "doc": "<p>(optional) 'root' property to extract the first argument from. This is used mainly when\nsumming fields in records, where the fields are all stored inside the 'data' object</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "allowBlank",
            "doc": "<p>(optional) Pass true to allow null, undefined or empty string values</p>\n"
          }
        ],
        "alias": null,
        "name": "collect",
        "shortDoc": "Collects unique values of a particular property in this MixedCollection ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
        "doc": "<p>Collects unique values of a particular property in this MixedCollection</p>\n",
        "return": {
          "type": "Array",
          "properties": null,
          "name": "return",
          "doc": "<p>The unique values</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 417,
        "owner": "Ext.util.AbstractMixedCollection",
        "html_filename": "AbstractMixedCollection.html",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-contains",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "o",
            "doc": "<p>The Object to look for in the collection.</p>\n"
          }
        ],
        "alias": null,
        "name": "contains",
        "shortDoc": "Returns true if the collection contains the passed Object as an item. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
        "doc": "<p>Returns true if the collection contains the passed Object as an item.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if the collection contains the Object as an item.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 426,
        "owner": "Ext.util.AbstractMixedCollection",
        "html_filename": "AbstractMixedCollection.html",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-containsKey",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "key",
            "doc": "<p>The key to look for in the collection.</p>\n"
          }
        ],
        "alias": null,
        "name": "containsKey",
        "shortDoc": "Returns true if the collection contains the passed Object as a key. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
        "doc": "<p>Returns true if the collection contains the passed Object as a key.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if the collection contains the Object as a key.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 196,
        "owner": "Ext.util.AbstractMixedCollection",
        "html_filename": "AbstractMixedCollection.html",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-each",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "fn",
            "doc": "<p>The function to execute for each item.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the current item in the iteration.</p>\n"
          }
        ],
        "alias": null,
        "name": "each",
        "shortDoc": "Executes the specified function once for every item in the collection, passing the following arguments:\n\n\nitem : Mixe...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
        "doc": "<p>Executes the specified function once for every item in the collection, passing the following arguments:</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b>item</b> : Mixed<p class=\"sub-desc\">The collection item</p></li>\n<li><b>index</b> : Number<p class=\"sub-desc\">The item's index</p></li>\n<li><b>length</b> : Number<p class=\"sub-desc\">The total number of items in the collection</p></li>\n</ul></div>\n\n\n<p>The function should return a boolean value. Returning false from the function will stop the iteration.</p>\n",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 221,
        "owner": "Ext.util.AbstractMixedCollection",
        "html_filename": "AbstractMixedCollection.html",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-eachKey",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "fn",
            "doc": "<p>The function to execute for each item.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the browser window.</p>\n"
          }
        ],
        "alias": null,
        "name": "eachKey",
        "shortDoc": "Executes the specified function once for every key in the collection, passing each\nkey, and its associated item as th...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
        "doc": "<p>Executes the specified function once for every key in the collection, passing each\nkey, and its associated item as the first two parameters.</p>\n",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 610,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-enableBubble",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/String[]",
            "properties": [

            ],
            "optional": false,
            "name": "events",
            "doc": "<p>The event name to bubble, or an Array of event names.</p>\n"
          }
        ],
        "alias": null,
        "name": "enableBubble",
        "shortDoc": "Enables events fired by this Observable to bubble up an owner hierarchy by calling this.getBubbleTarget() if\npresent. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Enables events fired by this Observable to bubble up an owner hierarchy by calling <code>this.getBubbleTarget()</code> if\npresent. There is no implementation in the Observable base class.</p>\n\n<p>This is commonly used by Ext.Components to bubble events to owner Containers.\nSee <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>. The default implementation in <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> returns the\nComponent's immediate owner. But if a known target is required, this can be overridden to access the\nrequired target more quickly.</p>\n\n<p>Example:</p>\n\n<pre><code>Ext.override(Ext.form.field.Base, {\n    //  Add functionality to Field's initComponent to enable the change event to bubble\n    initComponent : Ext.Function.createSequence(Ext.form.field.Base.prototype.initComponent, function() {\n        this.enableBubble('change');\n    }),\n\n    //  We know that we want Field's events to bubble directly to the FormPanel.\n    getBubbleTarget : function() {\n        if (!this.formPanel) {\n            this.formPanel = this.findParentByType('form');\n        }\n        return this.formPanel;\n    }\n});\n\nvar myForm = new Ext.formPanel({\n    title: 'User Details',\n    items: [{\n        ...\n    }],\n    listeners: {\n        change: function() {\n            // Title goes red if form has been modified.\n            myForm.header.setStyle('color', 'red');\n        }\n    }\n});\n</code></pre>\n",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 566,
        "owner": "Ext.util.AbstractMixedCollection",
        "html_filename": "AbstractMixedCollection.html",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-filter",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.util.Filter[]/String",
            "properties": [

            ],
            "optional": false,
            "name": "property",
            "doc": "<p>A property on your objects, or an array of <a href=\"#/api/Ext.util.Filter\" rel=\"Ext.util.Filter\" class=\"docClass\">Filter</a> objects</p>\n"
          },
          {
            "type": "String/RegExp",
            "properties": [

            ],
            "optional": false,
            "name": "value",
            "doc": "<p>Either string that the property values\nshould start with or a RegExp to test against the property</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "anyMatch",
            "doc": "<p>(optional) True to match any part of the string, not just the beginning</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "caseSensitive",
            "doc": "<p>(optional) True for case sensitive comparison (defaults to False).</p>\n"
          }
        ],
        "alias": null,
        "name": "filter",
        "shortDoc": "Filters the objects in this collection by a set of Filters, or by a single\nproperty/value pair with optional paramete...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
        "doc": "<p>Filters the objects in this collection by a set of <a href=\"#/api/Ext.util.Filter\" rel=\"Ext.util.Filter\" class=\"docClass\">Filter</a>s, or by a single\nproperty/value pair with optional parameters for substring matching and case sensitivity. See\n<a href=\"#/api/Ext.util.Filter\" rel=\"Ext.util.Filter\" class=\"docClass\">Filter</a> for an example of using Filter objects (preferred). Alternatively,\nMixedCollection can be easily filtered by property like this:</p>\n\n\n<pre><code>//create a simple store with a few people defined\nvar people = new Ext.util.MixedCollection();\npeople.addAll([\n    {id: 1, age: 25, name: 'Ed'},\n    {id: 2, age: 24, name: 'Tommy'},\n    {id: 3, age: 24, name: 'Arne'},\n    {id: 4, age: 26, name: 'Aaron'}\n]);\n\n//a new MixedCollection containing only the items where age == 24\nvar middleAged = people.filter('age', 24);\n</code></pre>\n\n",
        "return": {
          "type": "Ext.util.MixedCollection",
          "properties": null,
          "name": "return",
          "doc": "<p>The new filtered collection</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 630,
        "owner": "Ext.util.AbstractMixedCollection",
        "html_filename": "AbstractMixedCollection.html",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-filterBy",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "fn",
            "doc": "<p>The function to be called, it will receive the args o (the object), k (the key)</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to this MixedCollection.</p>\n"
          }
        ],
        "alias": null,
        "name": "filterBy",
        "shortDoc": "Filter by a function. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
        "doc": "<p>Filter by a function. Returns a <i>new</i> collection that has been filtered.\nThe passed function will be called with each object in the collection.\nIf the function returns true, the value is included otherwise it is filtered.</p>\n",
        "return": {
          "type": "Ext.util.MixedCollection",
          "properties": null,
          "name": "return",
          "doc": "<p>The new filtered collection</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 238,
        "owner": "Ext.util.AbstractMixedCollection",
        "html_filename": "AbstractMixedCollection.html",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-findBy",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "fn",
            "doc": "<p>The selection function to execute for each item.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the browser window.</p>\n"
          }
        ],
        "alias": null,
        "name": "findBy",
        "shortDoc": "Returns the first item in the collection which elicits a true return value from the\npassed selection function. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
        "doc": "<p>Returns the first item in the collection which elicits a true return value from the\npassed selection function.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>The first item in the collection which returned true from the selection function.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 657,
        "owner": "Ext.util.AbstractMixedCollection",
        "html_filename": "AbstractMixedCollection.html",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-findIndex",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "property",
            "doc": "<p>The name of a property on your objects.</p>\n"
          },
          {
            "type": "String/RegExp",
            "properties": [

            ],
            "optional": false,
            "name": "value",
            "doc": "<p>A string that the property values\nshould start with or a RegExp to test against the property.</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": true,
            "name": "start",
            "doc": "<p>(optional) The index to start searching at (defaults to 0).</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "anyMatch",
            "doc": "<p>(optional) True to match any part of the string, not just the beginning.</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "caseSensitive",
            "doc": "<p>(optional) True for case sensitive comparison.</p>\n"
          }
        ],
        "alias": null,
        "name": "findIndex",
        "shortDoc": "Finds the index of the first matching object in this collection by a specific property/value. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
        "doc": "<p>Finds the index of the first matching object in this collection by a specific property/value.</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>The matched index or -1</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 677,
        "owner": "Ext.util.AbstractMixedCollection",
        "html_filename": "AbstractMixedCollection.html",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-findIndexBy",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "fn",
            "doc": "<p>The function to be called, it will receive the args o (the object), k (the key).</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to this MixedCollection.</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": true,
            "name": "start",
            "doc": "<p>(optional) The index to start searching at (defaults to 0).</p>\n"
          }
        ],
        "alias": null,
        "name": "findIndexBy",
        "shortDoc": "Find the index of the first matching object in this collection by a function. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
        "doc": "<p>Find the index of the first matching object in this collection by a function.\nIf the function returns <i>true</i> it is considered a match.</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>The matched index or -1</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 233,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-fireEvent",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "eventName",
            "doc": "<p>The name of the event to fire.</p>\n"
          },
          {
            "type": "Object...",
            "properties": [

            ],
            "optional": false,
            "name": "args",
            "doc": "<p>Variable number of parameters are passed to handlers.</p>\n"
          }
        ],
        "alias": null,
        "name": "fireEvent",
        "shortDoc": "Fires the specified event with the passed parameters (minus the event name, plus the options object passed\nto addList...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Fires the specified event with the passed parameters (minus the event name, plus the <code>options</code> object passed\nto <a href=\"#/api/Ext.data.StoreManager-method-addListener\" rel=\"Ext.data.StoreManager-method-addListener\" class=\"docClass\">addListener</a>).</p>\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>) by\ncalling <a href=\"#/api/Ext.data.StoreManager-method-enableBubble\" rel=\"Ext.data.StoreManager-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>returns false if any of the handlers return false otherwise it returns true.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 448,
        "owner": "Ext.util.AbstractMixedCollection",
        "html_filename": "AbstractMixedCollection.html",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-first",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "first",
        "shortDoc": "Returns the first item in the collection. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
        "doc": "<p>Returns the first item in the collection.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>the first item in the collection..</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 384,
        "owner": "Ext.util.AbstractMixedCollection",
        "html_filename": "AbstractMixedCollection.html",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-get",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/Number",
            "properties": [

            ],
            "optional": false,
            "name": "key",
            "doc": "<p>The key or index of the item.</p>\n"
          }
        ],
        "alias": null,
        "name": "get",
        "shortDoc": "Returns the item associated with the passed key OR index. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
        "doc": "<p>Returns the item associated with the passed key OR index.\nKey has priority over index.  This is the equivalent\nof calling <a href=\"#/api/Ext.data.StoreManager-method-getByKey\" rel=\"Ext.data.StoreManager-method-getByKey\" class=\"docClass\">getByKey</a> first, then if nothing matched calling <a href=\"#/api/Ext.data.StoreManager-method-getAt\" rel=\"Ext.data.StoreManager-method-getAt\" class=\"docClass\">getAt</a>.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>If the item is found, returns the item.  If the item was not found, returns <tt>undefined</tt>.\nIf an item was found, but is a Class, returns <tt>null</tt>.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 399,
        "owner": "Ext.util.AbstractMixedCollection",
        "html_filename": "AbstractMixedCollection.html",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-getAt",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "index",
            "doc": "<p>The index of the item.</p>\n"
          }
        ],
        "alias": null,
        "name": "getAt",
        "shortDoc": "Returns the item at the specified index. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
        "doc": "<p>Returns the item at the specified index.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>The item at the specified index.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 408,
        "owner": "Ext.util.AbstractMixedCollection",
        "html_filename": "AbstractMixedCollection.html",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-getByKey",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/Number",
            "properties": [

            ],
            "optional": false,
            "name": "key",
            "doc": "<p>The key of the item.</p>\n"
          }
        ],
        "alias": null,
        "name": "getByKey",
        "shortDoc": "Returns the item associated with the passed key. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
        "doc": "<p>Returns the item associated with the passed key.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>The item associated with the passed key.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 358,
        "owner": "Ext.util.AbstractMixedCollection",
        "html_filename": "AbstractMixedCollection.html",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-getCount",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getCount",
        "shortDoc": "Returns the number of items in the collection. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
        "doc": "<p>Returns the number of items in the collection.</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>the number of items in the collection.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 103,
        "owner": "Ext.util.AbstractMixedCollection",
        "html_filename": "AbstractMixedCollection.html",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-getKey",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "item",
            "doc": "<p>The item for which to find the key.</p>\n"
          }
        ],
        "alias": null,
        "name": "getKey",
        "shortDoc": "MixedCollection has a generic way to fetch keys if you implement getKey. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
        "doc": "<p>MixedCollection has a generic way to fetch keys if you implement getKey.  The default implementation\nsimply returns <b><code>item.id</code></b> but you can provide your own implementation\nto return a different value as in the following examples:</p>\n\n<pre><code>// normal way\nvar mc = new Ext.util.MixedCollection();\nmc.add(someEl.dom.id, someEl);\nmc.add(otherEl.dom.id, otherEl);\n//and so on\n\n// using getKey\nvar mc = new Ext.util.MixedCollection();\nmc.getKey = function(el){\n   return el.dom.id;\n};\nmc.add(someEl);\nmc.add(otherEl);\n\n// or via the constructor\nvar mc = new Ext.util.MixedCollection(false, function(el){\n   return el.dom.id;\n});\nmc.add(someEl);\nmc.add(otherEl);\n</code></pre>\n\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>The key for the passed item.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 536,
        "owner": "Ext.util.AbstractMixedCollection",
        "html_filename": "AbstractMixedCollection.html",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-getRange",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Number",
            "properties": [

            ],
            "optional": true,
            "name": "startIndex",
            "doc": "<p>(optional) The starting index. Defaults to 0.</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": true,
            "name": "endIndex",
            "doc": "<p>(optional) The ending index. Defaults to the last item.</p>\n"
          }
        ],
        "alias": null,
        "name": "getRange",
        "shortDoc": "Returns a range of items in this collection ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
        "doc": "<p>Returns a range of items in this collection</p>\n",
        "return": {
          "type": "Array",
          "properties": null,
          "name": "return",
          "doc": "<p>An array of items</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 531,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-hasListener",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "eventName",
            "doc": "<p>The name of the event to check for</p>\n"
          }
        ],
        "alias": null,
        "name": "hasListener",
        "shortDoc": "Checks to see if this object has any listeners for a specified event ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Checks to see if this object has any listeners for a specified event</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if the event is being listened for, else false</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 366,
        "owner": "Ext.util.AbstractMixedCollection",
        "html_filename": "AbstractMixedCollection.html",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-indexOf",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "o",
            "doc": "<p>The item to find the index of.</p>\n"
          }
        ],
        "alias": null,
        "name": "indexOf",
        "shortDoc": "Returns index within the collection of the passed Object. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
        "doc": "<p>Returns index within the collection of the passed Object.</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>index of the item. Returns -1 if not found.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 375,
        "owner": "Ext.util.AbstractMixedCollection",
        "html_filename": "AbstractMixedCollection.html",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-indexOfKey",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "key",
            "doc": "<p>The key to find the index of.</p>\n"
          }
        ],
        "alias": null,
        "name": "indexOfKey",
        "shortDoc": "Returns index within the collection of the passed key. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
        "doc": "<p>Returns index within the collection of the passed key.</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>index of the key.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 63,
        "owner": "Ext.Base",
        "html_filename": "Base3.html",
        "href": "Base3.html#Ext-Base-method-initConfig",
        "protected": true,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "config",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "initConfig",
        "shortDoc": "Initialize configuration for this class. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js",
        "doc": "<p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code>Ext.define('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n\n        return this;\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>mixins The mixin prototypes as key - value pairs</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 32,
        "owner": "Ext.util.Sortable",
        "html_filename": "Sortable.html",
        "href": "Sortable.html#Ext-util-Sortable-method-initSortable",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "initSortable",
        "shortDoc": "Performs initialization of this mixin. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Sortable.js",
        "doc": "<p>Performs initialization of this mixin. Component classes using this mixin should call this method during their\nown initialization.</p>\n",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 268,
        "owner": "Ext.util.AbstractMixedCollection",
        "html_filename": "AbstractMixedCollection.html",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-insert",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "index",
            "doc": "<p>The index to insert the item at.</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "key",
            "doc": "<p>The key to associate with the new item, or the item itself.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "o",
            "doc": "<p>(optional) If the second parameter was a key, the new item.</p>\n"
          }
        ],
        "alias": null,
        "name": "insert",
        "shortDoc": "Inserts an item at the specified index in the collection. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
        "doc": "<p>Inserts an item at the specified index in the collection. Fires the <a href=\"#/api/Ext.data.StoreManager-method-add\" rel=\"Ext.data.StoreManager-method-add\" class=\"docClass\">add</a> event when complete.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>The item inserted.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 456,
        "owner": "Ext.util.AbstractMixedCollection",
        "html_filename": "AbstractMixedCollection.html",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-last",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "last",
        "shortDoc": "Returns the last item in the collection. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
        "doc": "<p>Returns the last item in the collection.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>the last item in the collection..</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 70,
        "owner": "Ext.data.StoreManager",
        "html_filename": "StoreManager.html",
        "href": "StoreManager.html#Ext-data-StoreManager-method-lookup",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/Object",
            "properties": [

            ],
            "optional": false,
            "name": "id",
            "doc": "<p>The id of the Store, or a Store instance, or a store configuration</p>\n"
          }
        ],
        "alias": null,
        "name": "lookup",
        "shortDoc": "Gets a registered Store by id ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/StoreManager.js",
        "doc": "<p>Gets a registered Store by id</p>\n",
        "return": {
          "type": "Ext.data.Store",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 682,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-mon",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.util.Observable/Ext.Element",
            "properties": [

            ],
            "optional": false,
            "name": "item",
            "doc": "<p>The item to which to add a listener/listeners.</p>\n"
          },
          {
            "type": "Object/String",
            "properties": [

            ],
            "optional": false,
            "name": "ename",
            "doc": "<p>The event name, or an object containing event name properties.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "fn",
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "opt",
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the\n<a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.util.Observable",
          "tagname": "alias",
          "member": "addManagedListener",
          "doc": null
        },
        "name": "mon",
        "shortDoc": "Shorthand for addManagedListener. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.StoreManager-method-addManagedListener\" rel=\"Ext.data.StoreManager-method-addManagedListener\" class=\"docClass\">addManagedListener</a>.</p>\n\n<p>Adds listeners to any Observable object (or Ext.Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 688,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-mun",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.util.Observable/Ext.Element",
            "properties": [

            ],
            "optional": false,
            "name": "item",
            "doc": "<p>The item from which to remove a listener/listeners.</p>\n"
          },
          {
            "type": "Object/String",
            "properties": [

            ],
            "optional": false,
            "name": "ename",
            "doc": "<p>The event name, or an object containing event name properties.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "fn",
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.util.Observable",
          "tagname": "alias",
          "member": "removeManagedListener",
          "doc": null
        },
        "name": "mun",
        "shortDoc": "Shorthand for removeManagedListener. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.StoreManager-method-removeManagedListener\" rel=\"Ext.data.StoreManager-method-removeManagedListener\" class=\"docClass\">removeManagedListener</a>.</p>\n\n<p>Removes listeners that were added by the <a href=\"#/api/Ext.data.StoreManager-method-mon\" rel=\"Ext.data.StoreManager-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 670,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-on",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "eventName",
            "doc": "<p>The name of the event to listen for. May also be an object who's property names are\nevent names.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "handler",
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.data.StoreManager-method-fireEvent\" rel=\"Ext.data.StoreManager-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function is executed. <strong>If\nomitted, defaults to the object which fired the event.</strong></p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "options",
            "doc": "<p>(optional) An object containing handler configuration.</p>\n\n<p><strong>Note:</strong> Unlike in ExtJS 3.x, the options object will also be passed as the last argument to every event handler.</p>\n\n<p>This object may contain any of the following properties:</p>\n\n<ul>\n<li><p><strong>scope</strong> : Object</p>\n\n<p>The scope (<code>this</code> reference) in which the handler function is executed. <strong>If omitted, defaults to the object\nwhich fired the event.</strong></p></li>\n<li><p><strong>delay</strong> : Number</p>\n\n<p>The number of milliseconds to delay the invocation of the handler after the event fires.</p></li>\n<li><p><strong>single</strong> : Boolean</p>\n\n<p>True to add a handler to handle just the next firing of the event, and then remove itself.</p></li>\n<li><p><strong>buffer</strong> : Number</p>\n\n<p>Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed by the specified number of\nmilliseconds. If the event fires again within that time, the original handler is <em>not</em> invoked, but the new\nhandler is scheduled in its place.</p></li>\n<li><p><strong>target</strong> : Observable</p>\n\n<p>Only call the handler if the event was fired on the target Observable, <em>not</em> if the event was bubbled up from a\nchild Observable.</p></li>\n<li><p><strong>element</strong> : String</p>\n\n<p><strong>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</strong> The name of a Component\nproperty which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which will exist only after the Component is rendered.\nFor example, to add a click listener to a Panel's body:</p>\n\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></li>\n</ul>\n\n\n<p><strong>Combining Options</strong></p>\n\n<p>Using the options argument, it is possible to combine different types of listeners:</p>\n\n<p>A delayed, one-time listener.</p>\n\n<pre><code>myPanel.on('hide', this.handleClick, this, {\n    single: true,\n    delay: 100\n});\n</code></pre>\n\n<p><strong>Attaching multiple handlers in 1 call</strong></p>\n\n<p>The method also allows for a single argument to be passed which is a config object containing properties which\nspecify multiple events. For example:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>\n\n<p>One can also specify options for each event handler separately:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: {fn: this.onCellClick, scope: this, single: true},\n    mouseover: {fn: panel.onMouseOver, scope: panel}\n});\n</code></pre>\n"
          }
        ],
        "alias": {
          "cls": "Ext.util.Observable",
          "tagname": "alias",
          "member": "addListener",
          "doc": null
        },
        "name": "on",
        "shortDoc": "Shorthand for addListener. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.StoreManager-method-addListener\" rel=\"Ext.data.StoreManager-method-addListener\" class=\"docClass\">addListener</a>.</p>\n\n<p>Appends an event handler to this object.</p>\n",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 45,
        "owner": "Ext.data.StoreManager",
        "html_filename": "StoreManager.html",
        "href": "StoreManager.html#Ext-data-StoreManager-method-register",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.data.Store",
            "properties": [

            ],
            "optional": false,
            "name": "store1",
            "doc": "<p>A Store instance</p>\n"
          },
          {
            "type": "Ext.data.Store",
            "properties": [

            ],
            "optional": true,
            "name": "store2",
            "doc": "<p>(optional)</p>\n"
          },
          {
            "type": "Ext.data.Store",
            "properties": [

            ],
            "optional": true,
            "name": "etc",
            "doc": "<p>... (optional)</p>\n"
          }
        ],
        "alias": null,
        "name": "register",
        "shortDoc": "Registers one or more Stores with the StoreManager. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/StoreManager.js",
        "doc": "<p>Registers one or more Stores with the StoreManager. You do not normally need to register stores\nmanually.  Any store initialized with a <a href=\"#/api/Ext.data.Store-cfg-storeId\" rel=\"Ext.data.Store-cfg-storeId\" class=\"docClass\">Ext.data.Store.storeId</a> will be auto-registered.</p>\n",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 574,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-relayEvents",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "origin",
            "doc": "<p>The Observable whose events this object is to relay.</p>\n"
          },
          {
            "type": "String[]",
            "properties": [

            ],
            "optional": false,
            "name": "events",
            "doc": "<p>Array of event names to relay.</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "prefix",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "relayEvents",
        "shortDoc": "Relays selected events from the specified Observable as if the events were fired by this. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Relays selected events from the specified Observable as if the events were fired by <code>this</code>.</p>\n",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 302,
        "owner": "Ext.util.AbstractMixedCollection",
        "html_filename": "AbstractMixedCollection.html",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-remove",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "o",
            "doc": "<p>The item to remove.</p>\n"
          }
        ],
        "alias": null,
        "name": "remove",
        "shortDoc": "Remove an item from the collection. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
        "doc": "<p>Remove an item from the collection.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>The item removed or false if no item was removed.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 311,
        "owner": "Ext.util.AbstractMixedCollection",
        "html_filename": "AbstractMixedCollection.html",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-removeAll",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "items",
            "doc": "<p>An array of items to be removed.</p>\n"
          }
        ],
        "alias": null,
        "name": "removeAll",
        "shortDoc": "Remove all items in the passed array from the collection. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
        "doc": "<p>Remove all items in the passed array from the collection.</p>\n",
        "return": {
          "type": "Ext.util.MixedCollection",
          "properties": null,
          "name": "return",
          "doc": "<p>this object</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 324,
        "owner": "Ext.util.AbstractMixedCollection",
        "html_filename": "AbstractMixedCollection.html",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-removeAt",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "index",
            "doc": "<p>The index within the collection of the item to remove.</p>\n"
          }
        ],
        "alias": null,
        "name": "removeAt",
        "shortDoc": "Remove an item from a specified index in the collection. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
        "doc": "<p>Remove an item from a specified index in the collection. Fires the <a href=\"#/api/Ext.data.StoreManager-method-remove\" rel=\"Ext.data.StoreManager-method-remove\" class=\"docClass\">remove</a> event when complete.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>The item removed or false if no item was removed.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 349,
        "owner": "Ext.util.AbstractMixedCollection",
        "html_filename": "AbstractMixedCollection.html",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-removeAtKey",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "key",
            "doc": "<p>The key of the item to remove.</p>\n"
          }
        ],
        "alias": null,
        "name": "removeAtKey",
        "shortDoc": "Removed an item associated with the passed key fom the collection. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
        "doc": "<p>Removed an item associated with the passed key fom the collection.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>The item removed or false if no item was removed.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 392,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-removeListener",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "eventName",
            "doc": "<p>The type of event the handler was associated with.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "handler",
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.data.StoreManager-method-addListener\" rel=\"Ext.data.StoreManager-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope originally specified for the handler. It must be the same as the\nscope argument specified in the original call to <a href=\"#/api/Ext.data.StoreManager-method-addListener\" rel=\"Ext.data.StoreManager-method-addListener\" class=\"docClass\">addListener</a> or the listener will not be removed.</p>\n"
          }
        ],
        "alias": null,
        "name": "removeListener",
        "shortDoc": "Removes an event handler. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Removes an event handler.</p>\n",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 197,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-removeManagedListener",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.util.Observable/Ext.Element",
            "properties": [

            ],
            "optional": false,
            "name": "item",
            "doc": "<p>The item from which to remove a listener/listeners.</p>\n"
          },
          {
            "type": "Object/String",
            "properties": [

            ],
            "optional": false,
            "name": "ename",
            "doc": "<p>The event name, or an object containing event name properties.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "fn",
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n"
          }
        ],
        "alias": null,
        "name": "removeManagedListener",
        "shortDoc": "Removes listeners that were added by the mon method. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.data.StoreManager-method-mon\" rel=\"Ext.data.StoreManager-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 152,
        "owner": "Ext.util.MixedCollection",
        "html_filename": "MixedCollection.html",
        "href": "MixedCollection.html#Ext-util-MixedCollection-method-reorder",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "mapping",
            "doc": "<p>Mapping from old item index to new item index</p>\n"
          }
        ],
        "alias": null,
        "name": "reorder",
        "shortDoc": "Reorders each of the items based on a mapping from old index to new index. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/MixedCollection.js",
        "doc": "<p>Reorders each of the items based on a mapping from old index to new index. Internally this\njust translates into a sort. The 'sort' event is fired whenever reordering has occured.</p>\n",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 135,
        "owner": "Ext.util.AbstractMixedCollection",
        "html_filename": "AbstractMixedCollection.html",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-replace",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "key",
            "doc": "<p>The key associated with the item to replace, or the replacement item.</p>\n\n\n<p>If you supplied a <a href=\"#/api/Ext.data.StoreManager-method-getKey\" rel=\"Ext.data.StoreManager-method-getKey\" class=\"docClass\">getKey</a> implementation for this MixedCollection, or if the key\nof your stored items is in a property called <tt><b>id</b></tt>, then the MixedCollection\nwill be able to <i>derive</i> the key of the replacement item. If you want to replace an item\nwith one having the same key value, then just pass the replacement item in this parameter.</p>\n\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "o",
            "doc": "<p>{Object} o (optional) If the first parameter passed was a key, the item to associate\nwith that key.</p>\n"
          }
        ],
        "alias": null,
        "name": "replace",
        "shortDoc": "Replaces an item in the collection. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
        "doc": "<p>Replaces an item in the collection. Fires the <a href=\"#/api/Ext.data.StoreManager-method-replace\" rel=\"Ext.data.StoreManager-method-replace\" class=\"docClass\">replace</a> event when complete.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>The new item.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 555,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-resumeEvents",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "resumeEvents",
        "shortDoc": "Resumes firing events (see suspendEvents). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Resumes firing events (see <a href=\"#/api/Ext.data.StoreManager-method-suspendEvents\" rel=\"Ext.data.StoreManager-method-suspendEvents\" class=\"docClass\">suspendEvents</a>).</p>\n\n<p>If events were suspended using the <code>**queueSuspended**</code> parameter, then all events fired\nduring event suspension will be sent to any listeners now.</p>\n",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 53,
        "owner": "Ext.util.Sortable",
        "html_filename": "Sortable.html",
        "href": "Sortable.html#Ext-util-Sortable-method-sort",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/Ext.util.Sorter[]",
            "properties": [

            ],
            "optional": false,
            "name": "sorters",
            "doc": "<p>Either a string name of one of the fields in this Store's configured\n<a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>, or an array of sorter configurations.</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "direction",
            "doc": "<p>The overall direction to sort the data by. Defaults to \"ASC\".</p>\n"
          }
        ],
        "alias": null,
        "name": "sort",
        "shortDoc": "Sorts the data in the Store by one or more of its properties. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Sortable.js",
        "doc": "<p>Sorts the data in the Store by one or more of its properties. Example usage:</p>\n\n<pre><code>//sort by a single field\nmyStore.sort('myField', 'DESC');\n\n//sorting by multiple fields\nmyStore.sort([\n    {\n        property : 'age',\n        direction: 'ASC'\n    },\n    {\n        property : 'name',\n        direction: 'DESC'\n    }\n]);\n</code></pre>\n\n<p>Internally, Store converts the passed arguments into an array of <a href=\"#/api/Ext.util.Sorter\" rel=\"Ext.util.Sorter\" class=\"docClass\">Ext.util.Sorter</a> instances, and delegates\nthe actual sorting to its internal <a href=\"#/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">Ext.util.MixedCollection</a>.</p>\n\n<p>When passing a single string argument to sort, Store maintains a ASC/DESC toggler per field, so this code:</p>\n\n<pre><code>store.sort('myField');\nstore.sort('myField');\n</code></pre>\n\n<p>Is equivalent to this code, because Store handles the toggling automatically:</p>\n\n<pre><code>store.sort('myField', 'ASC');\nstore.sort('myField', 'DESC');\n</code></pre>\n",
        "return": {
          "type": "Ext.util.Sorter[]",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 113,
        "owner": "Ext.util.MixedCollection",
        "html_filename": "MixedCollection.html",
        "href": "MixedCollection.html#Ext-util-MixedCollection-method-sortBy",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "sorterFn",
            "doc": "<p>The function to sort by</p>\n"
          }
        ],
        "alias": null,
        "name": "sortBy",
        "shortDoc": "Sorts the collection by a single sorter function ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/MixedCollection.js",
        "doc": "<p>Sorts the collection by a single sorter function</p>\n",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 192,
        "owner": "Ext.util.MixedCollection",
        "html_filename": "MixedCollection.html",
        "href": "MixedCollection.html#Ext-util-MixedCollection-method-sortByKey",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "direction",
            "doc": "<p>(optional) 'ASC' or 'DESC'. Defaults to 'ASC'.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "fn",
            "doc": "<p>(optional) Comparison function that defines the sort order.\nDefaults to sorting by case insensitive string.</p>\n"
          }
        ],
        "alias": null,
        "name": "sortByKey",
        "shortDoc": "Sorts this collection by keys. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/MixedCollection.js",
        "doc": "<p>Sorts this collection by <b>key</b>s.</p>\n",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 199,
        "owner": "Ext.Base",
        "html_filename": "Base3.html",
        "href": "Base3.html#Ext-Base-method-statics",
        "protected": true,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "statics",
        "shortDoc": "Get the reference to the class from which this object was instantiated. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js",
        "doc": "<p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">Ext.Base.self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n\n        return this;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n",
        "return": {
          "type": "Ext.Class",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 464,
        "owner": "Ext.util.AbstractMixedCollection",
        "html_filename": "AbstractMixedCollection.html",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-sum",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "property",
            "doc": "<p>The property to sum by</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "root",
            "doc": "<p>(optional) 'root' property to extract the first argument from. This is used mainly when\nsumming fields in records, where the fields are all stored inside the 'data' object</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": true,
            "name": "start",
            "doc": "<p>(optional) The record index to start at (defaults to <tt>0</tt>)</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": true,
            "name": "end",
            "doc": "<p>(optional) The record index to end at (defaults to <tt>-1</tt>)</p>\n"
          }
        ],
        "alias": null,
        "name": "sum",
        "shortDoc": "Collects all of the values of the given property and returns their sum ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/AbstractMixedCollection.js",
        "doc": "<p>Collects all of the values of the given property and returns their sum</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>The total</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 542,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-suspendEvents",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": false,
            "name": "queueSuspended",
            "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.data.StoreManager-method-resumeEvents\" rel=\"Ext.data.StoreManager-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events.</p>\n"
          }
        ],
        "alias": null,
        "name": "suspendEvents",
        "shortDoc": "Suspends the firing of all events. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Suspends the firing of all events. (see <a href=\"#/api/Ext.data.StoreManager-method-resumeEvents\" rel=\"Ext.data.StoreManager-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 676,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-un",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "eventName",
            "doc": "<p>The type of event the handler was associated with.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "handler",
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.data.StoreManager-method-addListener\" rel=\"Ext.data.StoreManager-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope originally specified for the handler. It must be the same as the\nscope argument specified in the original call to <a href=\"#/api/Ext.data.StoreManager-method-addListener\" rel=\"Ext.data.StoreManager-method-addListener\" class=\"docClass\">addListener</a> or the listener will not be removed.</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.util.Observable",
          "tagname": "alias",
          "member": "removeListener",
          "doc": null
        },
        "name": "un",
        "shortDoc": "Shorthand for removeListener. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.StoreManager-method-removeListener\" rel=\"Ext.data.StoreManager-method-removeListener\" class=\"docClass\">removeListener</a>.</p>\n\n<p>Removes an event handler.</p>\n",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 58,
        "owner": "Ext.data.StoreManager",
        "html_filename": "StoreManager.html",
        "href": "StoreManager.html#Ext-data-StoreManager-method-unregister",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/Object",
            "properties": [

            ],
            "optional": false,
            "name": "id1",
            "doc": "<p>The id of the Store, or a Store instance</p>\n"
          },
          {
            "type": "String/Object",
            "properties": [

            ],
            "optional": true,
            "name": "id2",
            "doc": "<p>(optional)</p>\n"
          },
          {
            "type": "String/Object",
            "properties": [

            ],
            "optional": true,
            "name": "etc",
            "doc": "<p>... (optional)</p>\n"
          }
        ],
        "alias": null,
        "name": "unregister",
        "shortDoc": "Unregisters one or more Stores with the StoreManager ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/StoreManager.js",
        "doc": "<p>Unregisters one or more Stores with the StoreManager</p>\n",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        }
      }
    ],
    "property": [
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 17,
        "owner": "Ext.util.Sortable",
        "html_filename": "Sortable.html",
        "href": "Sortable.html#Ext-util-Sortable-property-defaultSortDirection",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "defaultSortDirection",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Sortable.js",
        "doc": "<p>The default sort direction to use if one is not specified (defaults to \"ASC\")</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 11,
        "owner": "Ext.util.Sortable",
        "html_filename": "Sortable.html",
        "href": "Sortable.html#Ext-util-Sortable-property-isSortable",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "isSortable",
        "shortDoc": "Flag denoting that this object is sortable. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Sortable.js",
        "doc": "<p>Flag denoting that this object is sortable. Always true.</p>\n"
      },
      {
        "static": false,
        "type": "Ext.Class",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 18,
        "owner": "Ext.Base",
        "html_filename": "Base3.html",
        "href": "Base3.html#Ext-Base-property-self",
        "protected": true,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "self",
        "shortDoc": "Get the reference to the current class from which this object was instantiated. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js",
        "doc": "<p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>\nfor a detailed comparison</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); / dependent on 'this'\n\n        return this;\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 27,
        "owner": "Ext.util.Sortable",
        "html_filename": "Sortable.html",
        "href": "Sortable.html#Ext-util-Sortable-property-sortRoot",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "sortRoot",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Sortable.js",
        "doc": "<p>The property in each item that contains the data to sort.</p>\n"
      },
      {
        "static": false,
        "type": "Ext.util.MixedCollection",
        "inheritable": false,
        "properties": null,
        "linenr": 40,
        "owner": "Ext.util.Sortable",
        "html_filename": "Sortable.html",
        "href": "Sortable.html#Ext-util-Sortable-property-sorters",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "sorters",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Sortable.js",
        "doc": "<p>The collection of <a href=\"#/api/Ext.util.Sorter\" rel=\"Ext.util.Sorter\" class=\"docClass\">Sorters</a> currently applied to this Store</p>\n"
      }
    ]
  },
  "deprecated": null,
  "singleton": true,
  "private": false,
  "tagname": "class",
  "author": null,
  "superclasses": [
    "Ext.Base",
    "Ext.util.AbstractMixedCollection",
    "Ext.util.MixedCollection"
  ],
  "alias": null,
  "name": "Ext.data.StoreManager",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/StoreManager.js",
  "doc": "<p>Contains a collection of all stores that are created that have an identifier.\nAn identifier can be assigned by setting the <a href=\"#/api/Ext.data.AbstractStore-cfg-storeId\" rel=\"Ext.data.AbstractStore-cfg-storeId\" class=\"docClass\">storeId</a> \nproperty. When a store is in the StoreManager, it can be referred to via it's identifier:\n<pre><code>Ext.create('Ext.data.Store', {\n    model: 'SomeModel',\n    storeId: 'myStore'\n});\n\nvar store = Ext.data.StoreManager.lookup('myStore');\n</code></pre>\nAlso note that the <a href=\"#/api/Ext.data.StoreManager-method-lookup\" rel=\"Ext.data.StoreManager-method-lookup\" class=\"docClass\">lookup</a> method is aliased to <a href=\"#/api/Ext-method-getStore\" rel=\"Ext-method-getStore\" class=\"docClass\">Ext.getStore</a> for convenience.</p>\n\n\n<p>\nIf a store is registered with the StoreManager, you can also refer to the store by it's identifier when\nregistering it with any Component that consumes data from a store:\n<pre><code>Ext.create('Ext.data.Store', {\n    model: 'SomeModel',\n    storeId: 'myStore'\n});\n\nExt.create('Ext.view.View', {\n    store: 'myStore',\n    // other configuration here\n});\n</code></pre>\n</p>\n\n\n<p> TODO: Make this an AbstractMgr</p>\n",
  "alternateClassNames": [
    "Ext.StoreMgr",
    "Ext.data.StoreMgr",
    "Ext.StoreManager"
  ]
});