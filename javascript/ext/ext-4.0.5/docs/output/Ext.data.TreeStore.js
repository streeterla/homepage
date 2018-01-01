Ext.data.JsonP.Ext_data_TreeStore({
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
      {
        "static": true,
        "inheritable": true,
        "html_filename": "Base3.html",
        "owner": "Ext.Base",
        "linenr": 392,
        "href": "Base3.html#Ext-Base-method-addStatics",
        "protected": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "properties": [

            ],
            "name": "members",
            "doc": "\n"
          }
        ],
        "tagname": "method",
        "private": false,
        "name": "addStatics",
        "alias": null,
        "shortDoc": "Add / override static properties of this class. ...",
        "return": {
          "type": "Ext.Base",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n\n"
        },
        "doc": "<p>Add / override static properties of this class.</p>\n\n\n\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.addStatics({\n    someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'\n    method1: function() { ... },    // My.cool.Class.method1 = function() { ... };\n    method2: function() { ... }     // My.cool.Class.method2 = function() { ... };\n});\n</code></pre>\n\n",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js"
      },
      {
        "static": true,
        "inheritable": true,
        "html_filename": "Base3.html",
        "owner": "Ext.Base",
        "linenr": 482,
        "href": "Base3.html#Ext-Base-method-borrow",
        "protected": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.Base",
            "optional": false,
            "properties": [

            ],
            "name": "fromClass",
            "doc": "<p>The class to borrow members from</p>\n\n"
          },
          {
            "type": "String/String[]",
            "optional": false,
            "properties": [

            ],
            "name": "members",
            "doc": "<p>The names of the members to borrow</p>\n\n"
          }
        ],
        "tagname": "method",
        "private": false,
        "name": "borrow",
        "alias": null,
        "shortDoc": "Borrow another class' members to the prototype of this class. ...",
        "return": {
          "type": "Ext.Base",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n\n"
        },
        "doc": "<p>Borrow another class' members to the prototype of this class.</p>\n\n\n\n\n<pre><code>Ext.define('Bank', {\n    money: '$$$',\n    printMoney: function() {\n        alert('$$$$$$$');\n    }\n});\n\nExt.define('Thief', {\n    ...\n});\n\nThief.borrow(Bank, ['money', 'printMoney']);\n\nvar steve = new Thief();\n\nalert(steve.money); // alerts '$$$'\nsteve.printMoney(); // alerts '$$$$$$$'\n</code></pre>\n\n",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js"
      },
      {
        "static": true,
        "inheritable": true,
        "html_filename": "Base3.html",
        "owner": "Ext.Base",
        "linenr": 330,
        "href": "Base3.html#Ext-Base-method-create",
        "protected": false,
        "deprecated": null,
        "params": [

        ],
        "tagname": "method",
        "private": false,
        "name": "create",
        "alias": null,
        "shortDoc": "Create a new instance of this Class. ...",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>the created instance.</p>\n\n"
        },
        "doc": "<p>Create a new instance of this Class.</p>\n\n\n\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.create({\n    someConfig: true\n});\n</code></pre>\n\n\n\n\n<p>All parameters are passed to the constructor of the class.</p>\n\n",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js"
      },
      {
        "static": true,
        "inheritable": true,
        "html_filename": "Base3.html",
        "owner": "Ext.Base",
        "linenr": 658,
        "href": "Base3.html#Ext-Base-method-createAlias",
        "protected": false,
        "deprecated": null,
        "params": [
          {
            "type": "String/Object",
            "optional": false,
            "properties": [

            ],
            "name": "alias",
            "doc": "<p>The new method name, or an object to set multiple aliases. See\n<a href=\"#/api/Ext.Function-method-flexSetter\" rel=\"Ext.Function-method-flexSetter\" class=\"docClass\">flexSetter</a></p>\n\n"
          },
          {
            "type": "String/Object",
            "optional": false,
            "properties": [

            ],
            "name": "origin",
            "doc": "<p>The original method name</p>\n\n"
          }
        ],
        "tagname": "method",
        "private": false,
        "name": "createAlias",
        "alias": null,
        "shortDoc": "Create aliases for existing prototype methods. ...",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        },
        "doc": "<p>Create aliases for existing prototype methods. Example:</p>\n\n\n\n\n<pre><code>Ext.define('My.cool.Class', {\n    method1: function() { ... },\n    method2: function() { ... }\n});\n\nvar test = new My.cool.Class();\n\nMy.cool.Class.createAlias({\n    method3: 'method1',\n    method4: 'method2'\n});\n\ntest.method3(); // test.method1()\n\nMy.cool.Class.createAlias('method5', 'method3');\n\ntest.method5(); // test.method3() -&gt; test.method1()\n</code></pre>\n\n",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js"
      },
      {
        "static": true,
        "inheritable": true,
        "html_filename": "Base3.html",
        "owner": "Ext.Base",
        "linenr": 639,
        "href": "Base3.html#Ext-Base-method-getName",
        "protected": false,
        "deprecated": null,
        "params": [

        ],
        "tagname": "method",
        "private": false,
        "name": "getName",
        "alias": null,
        "shortDoc": "Get the current class' name in string format. ...",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>className</p>\n\n"
        },
        "doc": "<p>Get the current class' name in string format.</p>\n\n\n\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n\n",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js"
      },
      {
        "static": true,
        "inheritable": true,
        "html_filename": "Base3.html",
        "owner": "Ext.Base",
        "linenr": 420,
        "href": "Base3.html#Ext-Base-method-implement",
        "protected": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "properties": [

            ],
            "name": "members",
            "doc": "\n"
          }
        ],
        "tagname": "method",
        "private": false,
        "name": "implement",
        "alias": null,
        "shortDoc": "Add methods / properties to the prototype of this class. ...",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        },
        "doc": "<p>Add methods / properties to the prototype of this class.</p>\n\n\n\n\n<pre><code>Ext.define('My.awesome.Cat', {\n    constructor: function() {\n        ...\n    }\n});\n\n My.awesome.Cat.implement({\n     meow: function() {\n        alert('Meowww...');\n     }\n });\n\n var kitty = new My.awesome.Cat;\n kitty.meow();\n</code></pre>\n\n",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js"
      },
      {
        "static": true,
        "inheritable": true,
        "html_filename": "Base3.html",
        "owner": "Ext.Base",
        "linenr": 524,
        "href": "Base3.html#Ext-Base-method-override",
        "protected": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "properties": [

            ],
            "name": "members",
            "doc": "\n"
          }
        ],
        "tagname": "method",
        "private": false,
        "name": "override",
        "alias": null,
        "shortDoc": "Override prototype members of this class. ...",
        "return": {
          "type": "Ext.Base",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n\n"
        },
        "doc": "<p>Override prototype members of this class. Overridden methods can be invoked via\n<a href=\"#/api/Ext.Base-method-callOverridden\" rel=\"Ext.Base-method-callOverridden\" class=\"docClass\">Ext.Base.callOverridden</a></p>\n\n\n\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n\n",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js"
      }
    ],
    "property": [

    ]
  },
  "extends": "Ext.data.AbstractStore",
  "html_filename": "TreeStore.html",
  "allMixins": [
    "Ext.util.Observable",
    "Ext.util.Sortable"
  ],
  "docauthor": null,
  "href": "TreeStore.html#Ext-data-TreeStore",
  "subclasses": [

  ],
  "protected": false,
  "members": {
    "css_var": [

    ],
    "cfg": [
      {
        "static": false,
        "type": "Boolean/Object",
        "inheritable": false,
        "properties": null,
        "linenr": 55,
        "owner": "Ext.data.AbstractStore",
        "html_filename": "AbstractStore.html",
        "href": "AbstractStore.html#Ext-data-AbstractStore-cfg-autoLoad",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "autoLoad",
        "shortDoc": "If data is not specified, and if autoLoad is true or an Object, this store's load method is automatically called\nafte...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
        "doc": "<p>If data is not specified, and if autoLoad is true or an Object, this store's load method is automatically called\nafter creation. If the value of autoLoad is an Object, this Object will be passed to the store's load method.\nDefaults to false.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 63,
        "owner": "Ext.data.AbstractStore",
        "html_filename": "AbstractStore.html",
        "href": "AbstractStore.html#Ext-data-AbstractStore-cfg-autoSync",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "autoSync",
        "shortDoc": "True to automatically sync the Store with its Proxy after every edit to one of its Records. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
        "doc": "<p>True to automatically sync the Store with its Proxy after every edit to one of its Records. Defaults to false.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 42,
        "owner": "Ext.data.TreeStore",
        "html_filename": "TreeStore.html",
        "href": "TreeStore.html#Ext-data-TreeStore-cfg-clearOnLoad",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "clearOnLoad",
        "shortDoc": "Remove previously existing child nodes before loading. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/TreeStore.js",
        "doc": "<p>Remove previously existing child nodes before loading. Default to true.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 55,
        "owner": "Ext.data.TreeStore",
        "html_filename": "TreeStore.html",
        "href": "TreeStore.html#Ext-data-TreeStore-cfg-defaultRootId",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "defaultRootId",
        "shortDoc": "The default root id. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/TreeStore.js",
        "doc": "<p>The default root id. Defaults to 'root'</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 61,
        "owner": "Ext.data.TreeStore",
        "html_filename": "TreeStore.html",
        "href": "TreeStore.html#Ext-data-TreeStore-cfg-defaultRootProperty",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "defaultRootProperty",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/TreeStore.js",
        "doc": "<p>The root property to specify on the reader if one is not explicitly defined.</p>\n"
      },
      {
        "static": false,
        "type": "Object[]",
        "inheritable": false,
        "properties": null,
        "linenr": 122,
        "owner": "Ext.data.AbstractStore",
        "html_filename": "AbstractStore.html",
        "href": "AbstractStore.html#Ext-data-AbstractStore-cfg-fields",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "fields",
        "shortDoc": "This may be used in place of specifying a model configuration. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
        "doc": "<p>This may be used in place of specifying a <a href=\"#/api/Ext.data.TreeStore-cfg-model\" rel=\"Ext.data.TreeStore-cfg-model\" class=\"docClass\">model</a> configuration. The fields should be a\nset of <a href=\"#/api/Ext.data.Field\" rel=\"Ext.data.Field\" class=\"docClass\">Ext.data.Field</a> configuration objects. The store will automatically create a <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a>\nwith these fields. In general this configuration option should be avoided, it exists for the purposes of\nbackwards compatibility. For anything more complicated, such as specifying a particular id property or\nassocations, a <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> should be defined and specified for the <a href=\"#/api/Ext.data.TreeStore-cfg-model\" rel=\"Ext.data.TreeStore-cfg-model\" class=\"docClass\">model</a>\nconfig.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 67,
        "owner": "Ext.data.TreeStore",
        "html_filename": "TreeStore.html",
        "href": "TreeStore.html#Ext-data-TreeStore-cfg-folderSort",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "folderSort",
        "shortDoc": "Set to true to automatically prepend a leaf sorter. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/TreeStore.js",
        "doc": "<p>Set to true to automatically prepend a leaf sorter. Defaults to <code>undefined</code>.</p>\n"
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
        "doc": "<p>A config object containing one or more event handlers to be added to this object during initialization. This\nshould be a valid listeners config object as specified in the <a href=\"#/api/Ext.data.TreeStore-method-addListener\" rel=\"Ext.data.TreeStore-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple\nhandlers at once.</p>\n\n<p><strong>DOM events from ExtJS <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></strong></p>\n\n<p>While <em>some</em> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this is usually\nonly done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s <strong><code><a href=\"#/api/Ext.view.View-event-itemclick\" rel=\"Ext.view.View-event-itemclick\" class=\"docClass\">itemclick</a></code></strong> event passing the node clicked on. To access DOM events directly from a\nchild element of a Component, we need to specify the <code>element</code> option to identify the Component property to add a\nDOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 132,
        "owner": "Ext.data.AbstractStore",
        "html_filename": "AbstractStore.html",
        "href": "AbstractStore.html#Ext-data-AbstractStore-cfg-model",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "model",
        "shortDoc": "Name of the Model associated with this store. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
        "doc": "<p>Name of the <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> associated with this store.\nThe string is used as an argument for <a href=\"#/api/Ext.ModelManager-method-getModel\" rel=\"Ext.ModelManager-method-getModel\" class=\"docClass\">Ext.ModelManager.getModel</a>.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 48,
        "owner": "Ext.data.TreeStore",
        "html_filename": "TreeStore.html",
        "href": "TreeStore.html#Ext-data-TreeStore-cfg-nodeParam",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "nodeParam",
        "shortDoc": "The name of the parameter sent to the server which contains the identifier of the node. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/TreeStore.js",
        "doc": "<p>The name of the parameter sent to the server which contains the identifier of the node.\nDefaults to 'node'.</p>\n"
      },
      {
        "static": false,
        "type": "String/Ext.data.proxy.Proxy/Object",
        "inheritable": false,
        "properties": null,
        "linenr": 49,
        "owner": "Ext.data.AbstractStore",
        "html_filename": "AbstractStore.html",
        "href": "AbstractStore.html#Ext-data-AbstractStore-cfg-proxy",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "proxy",
        "shortDoc": "The Proxy to use for this Store. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
        "doc": "<p>The Proxy to use for this Store. This can be either a string, a config object or a Proxy instance -\nsee <a href=\"#/api/Ext.data.TreeStore-method-setProxy\" rel=\"Ext.data.TreeStore-method-setProxy\" class=\"docClass\">setProxy</a> for details.</p>\n"
      },
      {
        "static": false,
        "type": "Ext.data.Model/Ext.data.NodeInterface/Object",
        "inheritable": false,
        "properties": null,
        "linenr": 24,
        "owner": "Ext.data.TreeStore",
        "html_filename": "TreeStore.html",
        "href": "TreeStore.html#Ext-data-TreeStore-cfg-root",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "root",
        "shortDoc": "The root node for this store. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/TreeStore.js",
        "doc": "<p>The root node for this store. For example:</p>\n\n<pre><code>root: {\n    expanded: true,\n    text: \"My Root\",\n    children: [\n        { text: \"Child 1\", leaf: true },\n        { text: \"Child 2\", expanded: true, children: [\n            { text: \"GrandChild\", leaf: true }\n        ] }\n    ]\n}\n</code></pre>\n\n<p>Setting the <code>root</code> config option is the same as calling <a href=\"#/api/Ext.data.TreeStore-method-setRootNode\" rel=\"Ext.data.TreeStore-method-setRootNode\" class=\"docClass\">setRootNode</a>.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 116,
        "owner": "Ext.data.AbstractStore",
        "html_filename": "AbstractStore.html",
        "href": "AbstractStore.html#Ext-data-AbstractStore-cfg-storeId",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "storeId",
        "shortDoc": "Unique identifier for this store. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
        "doc": "<p>Unique identifier for this store. If present, this Store will be registered with the <a href=\"#/api/Ext.data.StoreManager\" rel=\"Ext.data.StoreManager\" class=\"docClass\">Ext.data.StoreManager</a>,\nmaking it easy to reuse elsewhere. Defaults to undefined.</p>\n"
      }
    ],
    "css_mixin": [

    ],
    "event": [
      {
        "static": false,
        "inheritable": false,
        "linenr": 146,
        "owner": "Ext.data.AbstractStore",
        "html_filename": "AbstractStore.html",
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-add",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.data.Store",
            "properties": [

            ],
            "optional": false,
            "name": "store",
            "doc": "<p>The store</p>\n"
          },
          {
            "type": "Ext.data.Model[]",
            "properties": [

            ],
            "optional": false,
            "name": "records",
            "doc": "<p>The Model instances that were added</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "index",
            "doc": "<p>The index at which the instances were inserted</p>\n"
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
        "shortDoc": "Fired when a Model instance has been added to this Store ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
        "doc": "<p>Fired when a Model instance has been added to this Store</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 95,
        "owner": "Ext.data.TreeStore",
        "html_filename": "TreeStore.html",
        "href": "TreeStore.html#Ext-data-TreeStore-event-append",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.data.NodeInterface",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "<p>This node</p>\n"
          },
          {
            "type": "Ext.data.NodeInterface",
            "properties": [

            ],
            "optional": false,
            "name": "node",
            "doc": "<p>The newly appended node</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "index",
            "doc": "<p>The index of the newly appended node</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.data.Tree",
          "tagname": "alias",
          "member": "append",
          "doc": null
        },
        "name": "append",
        "shortDoc": "Fires when a new child node is appended ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/TreeStore.js",
        "doc": "<p>Fires when a new child node is appended</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 119,
        "owner": "Ext.data.TreeStore",
        "html_filename": "TreeStore.html",
        "href": "TreeStore.html#Ext-data-TreeStore-event-beforeappend",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.data.NodeInterface",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "<p>This node</p>\n"
          },
          {
            "type": "Ext.data.NodeInterface",
            "properties": [

            ],
            "optional": false,
            "name": "node",
            "doc": "<p>The child node to be appended</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.data.Tree",
          "tagname": "alias",
          "member": "beforeappend",
          "doc": null
        },
        "name": "beforeappend",
        "shortDoc": "Fires before a new child is appended, return false to cancel the append. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/TreeStore.js",
        "doc": "<p>Fires before a new child is appended, return false to cancel the append.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 161,
        "owner": "Ext.data.TreeStore",
        "html_filename": "TreeStore.html",
        "href": "TreeStore.html#Ext-data-TreeStore-event-beforecollapse",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.data.NodeInterface",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "<p>The collapsing node</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.data.Tree",
          "tagname": "alias",
          "member": "beforecollapse",
          "doc": null
        },
        "name": "beforecollapse",
        "shortDoc": "Fires before this node is collapsed. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/TreeStore.js",
        "doc": "<p>Fires before this node is collapsed.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 155,
        "owner": "Ext.data.TreeStore",
        "html_filename": "TreeStore.html",
        "href": "TreeStore.html#Ext-data-TreeStore-event-beforeexpand",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.data.NodeInterface",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "<p>The expanding node</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.data.Tree",
          "tagname": "alias",
          "member": "beforeexpand",
          "doc": null
        },
        "name": "beforeexpand",
        "shortDoc": "Fires before this node is expanded. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/TreeStore.js",
        "doc": "<p>Fires before this node is expanded.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 137,
        "owner": "Ext.data.TreeStore",
        "html_filename": "TreeStore.html",
        "href": "TreeStore.html#Ext-data-TreeStore-event-beforeinsert",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.data.NodeInterface",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "<p>This node</p>\n"
          },
          {
            "type": "Ext.data.NodeInterface",
            "properties": [

            ],
            "optional": false,
            "name": "node",
            "doc": "<p>The child node to be inserted</p>\n"
          },
          {
            "type": "Ext.data.NodeInterface",
            "properties": [

            ],
            "optional": false,
            "name": "refNode",
            "doc": "<p>The child node the node is being inserted before</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.data.Tree",
          "tagname": "alias",
          "member": "beforeinsert",
          "doc": null
        },
        "name": "beforeinsert",
        "shortDoc": "Fires before a new child is inserted, return false to cancel the insert. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/TreeStore.js",
        "doc": "<p>Fires before a new child is inserted, return false to cancel the insert.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 185,
        "owner": "Ext.data.AbstractStore",
        "html_filename": "AbstractStore.html",
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-beforeload",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.data.Store",
            "properties": [

            ],
            "optional": false,
            "name": "store",
            "doc": "<p>This Store</p>\n"
          },
          {
            "type": "Ext.data.Operation",
            "properties": [

            ],
            "optional": false,
            "name": "operation",
            "doc": "<p>The <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Ext.data.Operation</a> object that will be passed to the Proxy to\nload the Store</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "beforeload",
        "shortDoc": "Fires before a request is made for a new data object. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
        "doc": "<p>Fires before a request is made for a new data object. If the beforeload handler returns false the load\naction will be canceled.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 131,
        "owner": "Ext.data.TreeStore",
        "html_filename": "TreeStore.html",
        "href": "TreeStore.html#Ext-data-TreeStore-event-beforemove",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.data.NodeInterface",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "<p>This node</p>\n"
          },
          {
            "type": "Ext.data.NodeInterface",
            "properties": [

            ],
            "optional": false,
            "name": "oldParent",
            "doc": "<p>The parent of this node</p>\n"
          },
          {
            "type": "Ext.data.NodeInterface",
            "properties": [

            ],
            "optional": false,
            "name": "newParent",
            "doc": "<p>The new parent this node is moving to</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "index",
            "doc": "<p>The index it is being moved to</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.data.Tree",
          "tagname": "alias",
          "member": "beforemove",
          "doc": null
        },
        "name": "beforemove",
        "shortDoc": "Fires before this node is moved to a new location in the tree. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/TreeStore.js",
        "doc": "<p>Fires before this node is moved to a new location in the tree. Return false to cancel the move.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 125,
        "owner": "Ext.data.TreeStore",
        "html_filename": "TreeStore.html",
        "href": "TreeStore.html#Ext-data-TreeStore-event-beforeremove",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.data.NodeInterface",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "<p>This node</p>\n"
          },
          {
            "type": "Ext.data.NodeInterface",
            "properties": [

            ],
            "optional": false,
            "name": "node",
            "doc": "<p>The child node to be removed</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.data.Tree",
          "tagname": "alias",
          "member": "beforeremove",
          "doc": null
        },
        "name": "beforeremove",
        "shortDoc": "Fires before a child is removed, return false to cancel the remove. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/TreeStore.js",
        "doc": "<p>Fires before a child is removed, return false to cancel the remove.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 213,
        "owner": "Ext.data.AbstractStore",
        "html_filename": "AbstractStore.html",
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-beforesync",
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
            "name": "options",
            "doc": "<p>Hash of all records to be synchronized, broken down into create, update and destroy</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "beforesync",
        "shortDoc": "Fired before a call to sync is executed. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
        "doc": "<p>Fired before a call to <a href=\"#/api/Ext.data.TreeStore-method-sync\" rel=\"Ext.data.TreeStore-method-sync\" class=\"docClass\">sync</a> is executed. Return false from any listener to cancel the synv</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 219,
        "owner": "Ext.data.AbstractStore",
        "html_filename": "AbstractStore.html",
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-clear",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.data.Store",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "clear",
        "shortDoc": "Fired after the removeAll method is called. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
        "doc": "<p>Fired after the <a href=\"#/api/Ext.data.TreeStore-method-removeAll\" rel=\"Ext.data.TreeStore-method-removeAll\" class=\"docClass\">removeAll</a> method is called.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 149,
        "owner": "Ext.data.TreeStore",
        "html_filename": "TreeStore.html",
        "href": "TreeStore.html#Ext-data-TreeStore-event-collapse",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.data.NodeInterface",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "<p>The collapsing node</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.data.Tree",
          "tagname": "alias",
          "member": "collapse",
          "doc": null
        },
        "name": "collapse",
        "shortDoc": "Fires when this node is collapsed. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/TreeStore.js",
        "doc": "<p>Fires when this node is collapsed.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 177,
        "owner": "Ext.data.AbstractStore",
        "html_filename": "AbstractStore.html",
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-datachanged",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.data.Store",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "<p>The data store</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "datachanged",
        "shortDoc": "Fires whenever the records in the Store have changed in some way - this could include adding or removing\nrecords, or ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
        "doc": "<p>Fires whenever the records in the Store have changed in some way - this could include adding or removing\nrecords, or updating the data in existing records</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 143,
        "owner": "Ext.data.TreeStore",
        "html_filename": "TreeStore.html",
        "href": "TreeStore.html#Ext-data-TreeStore-event-expand",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.data.NodeInterface",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "<p>The expanding node</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.data.Tree",
          "tagname": "alias",
          "member": "expand",
          "doc": null
        },
        "name": "expand",
        "shortDoc": "Fires when this node is expanded. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/TreeStore.js",
        "doc": "<p>Fires when this node is expanded.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 113,
        "owner": "Ext.data.TreeStore",
        "html_filename": "TreeStore.html",
        "href": "TreeStore.html#Ext-data-TreeStore-event-insert",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.data.NodeInterface",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "<p>This node</p>\n"
          },
          {
            "type": "Ext.data.NodeInterface",
            "properties": [

            ],
            "optional": false,
            "name": "node",
            "doc": "<p>The child node inserted</p>\n"
          },
          {
            "type": "Ext.data.NodeInterface",
            "properties": [

            ],
            "optional": false,
            "name": "refNode",
            "doc": "<p>The child node the node was inserted before</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.data.Tree",
          "tagname": "alias",
          "member": "insert",
          "doc": null
        },
        "name": "insert",
        "shortDoc": "Fires when a new child node is inserted. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/TreeStore.js",
        "doc": "<p>Fires when a new child node is inserted.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 452,
        "owner": "Ext.data.TreeStore",
        "html_filename": "TreeStore.html",
        "href": "TreeStore.html#Ext-data-TreeStore-event-load",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.data.TreeStore",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "Ext.data.NodeInterface",
            "properties": [

            ],
            "optional": false,
            "name": "node",
            "doc": "<p>The node that was loaded.</p>\n"
          },
          {
            "type": "Ext.data.Model[]",
            "properties": [

            ],
            "optional": false,
            "name": "records",
            "doc": "<p>An array of records.</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": false,
            "name": "successful",
            "doc": "<p>True if the operation was successful.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "load",
        "shortDoc": "Fires whenever the store reads data from a remote data source. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/TreeStore.js",
        "doc": "<p>Fires whenever the store reads data from a remote data source.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 107,
        "owner": "Ext.data.TreeStore",
        "html_filename": "TreeStore.html",
        "href": "TreeStore.html#Ext-data-TreeStore-event-move",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.data.NodeInterface",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "<p>This node</p>\n"
          },
          {
            "type": "Ext.data.NodeInterface",
            "properties": [

            ],
            "optional": false,
            "name": "oldParent",
            "doc": "<p>The old parent of this node</p>\n"
          },
          {
            "type": "Ext.data.NodeInterface",
            "properties": [

            ],
            "optional": false,
            "name": "newParent",
            "doc": "<p>The new parent of this node</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "index",
            "doc": "<p>The index it was moved to</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.data.Tree",
          "tagname": "alias",
          "member": "move",
          "doc": null
        },
        "name": "move",
        "shortDoc": "Fires when this node is moved to a new location in the tree ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/TreeStore.js",
        "doc": "<p>Fires when this node is moved to a new location in the tree</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 101,
        "owner": "Ext.data.TreeStore",
        "html_filename": "TreeStore.html",
        "href": "TreeStore.html#Ext-data-TreeStore-event-remove",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.data.NodeInterface",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "<p>This node</p>\n"
          },
          {
            "type": "Ext.data.NodeInterface",
            "properties": [

            ],
            "optional": false,
            "name": "node",
            "doc": "<p>The removed node</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.data.Tree",
          "tagname": "alias",
          "member": "remove",
          "doc": null
        },
        "name": "remove",
        "shortDoc": "Fires when a child node is removed ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/TreeStore.js",
        "doc": "<p>Fires when a child node is removed</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 167,
        "owner": "Ext.data.TreeStore",
        "html_filename": "TreeStore.html",
        "href": "TreeStore.html#Ext-data-TreeStore-event-rootchange",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.data.Model",
            "properties": [

            ],
            "optional": false,
            "name": "root",
            "doc": "<p>The new root</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.data.Tree",
          "tagname": "alias",
          "member": "rootchange",
          "doc": null
        },
        "name": "rootchange",
        "shortDoc": "Fires whenever the root node is changed in the tree. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/TreeStore.js",
        "doc": "<p>Fires whenever the root node is changed in the tree.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 194,
        "owner": "Ext.data.TreeStore",
        "html_filename": "TreeStore.html",
        "href": "TreeStore.html#Ext-data-TreeStore-event-sort",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.data.NodeInterface",
            "properties": [

            ],
            "optional": false,
            "name": "node",
            "doc": "<p>The node that is sorted.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "sort",
        "shortDoc": "Fires when this TreeStore is sorted. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/TreeStore.js",
        "doc": "<p>Fires when this TreeStore is sorted.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 164,
        "owner": "Ext.data.AbstractStore",
        "html_filename": "AbstractStore.html",
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-update",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.data.Store",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "Ext.data.Model",
            "properties": [

            ],
            "optional": false,
            "name": "record",
            "doc": "<p>The Model instance that was updated</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "operation",
            "doc": "<p>The update operation being performed. Value may be one of:</p>\n\n<pre><code>Ext.data.Model.EDIT\nExt.data.Model.REJECT\nExt.data.Model.COMMIT\n</code></pre>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "update",
        "shortDoc": "Fires when a Model instance has been updated ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
        "doc": "<p>Fires when a Model instance has been updated</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 204,
        "owner": "Ext.data.AbstractStore",
        "html_filename": "AbstractStore.html",
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-write",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.data.Store",
            "properties": [

            ],
            "optional": false,
            "name": "store",
            "doc": "<p>This Store</p>\n"
          },
          {
            "type": "Ext.data.Operation",
            "properties": [

            ],
            "optional": false,
            "name": "operation",
            "doc": "<p>The <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Operation</a> object that was used in\nthe write</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "write",
        "shortDoc": "Fires whenever a successful write has been made via the configured Proxy ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
        "doc": "<p>Fires whenever a successful write has been made via the configured <a href=\"#/api/Ext.data.TreeStore-cfg-proxy\" rel=\"Ext.data.TreeStore-cfg-proxy\" class=\"docClass\">Proxy</a></p>\n"
      }
    ],
    "method": [
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
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.data.TreeStore-method-fireEvent\" rel=\"Ext.data.TreeStore-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n"
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
        "doc": "<p>Fires the specified event with the passed parameters (minus the event name, plus the <code>options</code> object passed\nto <a href=\"#/api/Ext.data.TreeStore-method-addListener\" rel=\"Ext.data.TreeStore-method-addListener\" class=\"docClass\">addListener</a>).</p>\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>) by\ncalling <a href=\"#/api/Ext.data.TreeStore-method-enableBubble\" rel=\"Ext.data.TreeStore-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n",
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
        "linenr": 470,
        "owner": "Ext.data.AbstractStore",
        "html_filename": "AbstractStore.html",
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-getNewRecords",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getNewRecords",
        "shortDoc": "Returns all Model instances that are either currently a phantom (e.g. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
        "doc": "<p>Returns all Model instances that are either currently a phantom (e.g. have no id), or have an ID but have not\nyet been saved on this Store (this happens when adding a non-phantom record from another Store into this one)</p>\n",
        "return": {
          "type": "Ext.data.Model[]",
          "properties": null,
          "name": "return",
          "doc": "<p>The Model instances</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 365,
        "owner": "Ext.data.TreeStore",
        "html_filename": "TreeStore.html",
        "href": "TreeStore.html#Ext-data-TreeStore-method-getNodeById",
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
            "name": "id",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "getNodeById",
        "shortDoc": "Returns the record node by id ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/TreeStore.js",
        "doc": "<p>Returns the record node by id</p>\n",
        "return": {
          "type": "Ext.data.NodeInterface",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 325,
        "owner": "Ext.data.AbstractStore",
        "html_filename": "AbstractStore.html",
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-getProxy",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getProxy",
        "shortDoc": "Returns the proxy currently attached to this proxy instance ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
        "doc": "<p>Returns the proxy currently attached to this proxy instance</p>\n",
        "return": {
          "type": "Ext.data.proxy.Proxy",
          "properties": null,
          "name": "return",
          "doc": "<p>The Proxy instance</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 496,
        "owner": "Ext.data.AbstractStore",
        "html_filename": "AbstractStore.html",
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-getRemovedRecords",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getRemovedRecords",
        "shortDoc": "Returns any records that have been removed from the store but not yet destroyed on the proxy. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
        "doc": "<p>Returns any records that have been removed from the store but not yet destroyed on the proxy.</p>\n",
        "return": {
          "type": "Ext.data.Model[]",
          "properties": null,
          "name": "return",
          "doc": "<p>The removed Model instances</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 357,
        "owner": "Ext.data.TreeStore",
        "html_filename": "TreeStore.html",
        "href": "TreeStore.html#Ext-data-TreeStore-method-getRootNode",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getRootNode",
        "shortDoc": "Returns the root node for this tree. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/TreeStore.js",
        "doc": "<p>Returns the root node for this tree.</p>\n",
        "return": {
          "type": "Ext.data.NodeInterface",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 479,
        "owner": "Ext.data.AbstractStore",
        "html_filename": "AbstractStore.html",
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-getUpdatedRecords",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getUpdatedRecords",
        "shortDoc": "Returns all Model instances that have been updated in the Store but not yet synchronized with the Proxy ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
        "doc": "<p>Returns all Model instances that have been updated in the Store but not yet synchronized with the Proxy</p>\n",
        "return": {
          "type": "Ext.data.Model[]",
          "properties": null,
          "name": "return",
          "doc": "<p>The updated Model instances</p>\n"
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
        "linenr": 735,
        "owner": "Ext.data.AbstractStore",
        "html_filename": "AbstractStore.html",
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-isLoading",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isLoading",
        "shortDoc": "Returns true if the Store is currently performing a load operation ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
        "doc": "<p>Returns true if the Store is currently performing a load operation</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if the Store is currently loading</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 373,
        "owner": "Ext.data.TreeStore",
        "html_filename": "TreeStore.html",
        "href": "TreeStore.html#Ext-data-TreeStore-method-load",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "options",
            "doc": "<p>(Optional) config object. This is passed into the <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Operation</a>\nobject that is created and then sent to the proxy's <a href=\"#/api/Ext.data.proxy.Proxy-method-read\" rel=\"Ext.data.proxy.Proxy-method-read\" class=\"docClass\">Ext.data.proxy.Proxy.read</a> function.\nThe options can also contain a node, which indicates which node is to be loaded. If not specified, it will\ndefault to the root node.</p>\n"
          }
        ],
        "alias": null,
        "name": "load",
        "shortDoc": "Loads the Store using its configured proxy. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/TreeStore.js",
        "doc": "<p>Loads the Store using its configured <a href=\"#/api/Ext.data.TreeStore-cfg-proxy\" rel=\"Ext.data.TreeStore-cfg-proxy\" class=\"docClass\">proxy</a>.</p>\n",
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.TreeStore-method-addManagedListener\" rel=\"Ext.data.TreeStore-method-addManagedListener\" class=\"docClass\">addManagedListener</a>.</p>\n\n<p>Adds listeners to any Observable object (or Ext.Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.TreeStore-method-removeManagedListener\" rel=\"Ext.data.TreeStore-method-removeManagedListener\" class=\"docClass\">removeManagedListener</a>.</p>\n\n<p>Removes listeners that were added by the <a href=\"#/api/Ext.data.TreeStore-method-mon\" rel=\"Ext.data.TreeStore-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
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
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.data.TreeStore-method-fireEvent\" rel=\"Ext.data.TreeStore-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n"
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.TreeStore-method-addListener\" rel=\"Ext.data.TreeStore-method-addListener\" class=\"docClass\">addListener</a>.</p>\n\n<p>Appends an event handler to this object.</p>\n",
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
        "linenr": 725,
        "owner": "Ext.data.AbstractStore",
        "html_filename": "AbstractStore.html",
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-removeAll",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "removeAll",
        "shortDoc": "Removes all records from the store. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
        "doc": "<p>Removes all records from the store. This method does a \"fast remove\",\nindividual remove events are not called. The <a href=\"#/api/Ext.data.TreeStore-event-clear\" rel=\"Ext.data.TreeStore-event-clear\" class=\"docClass\">clear</a> event is\nfired upon completion.</p>\n",
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
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.data.TreeStore-method-addListener\" rel=\"Ext.data.TreeStore-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope originally specified for the handler. It must be the same as the\nscope argument specified in the original call to <a href=\"#/api/Ext.data.TreeStore-method-addListener\" rel=\"Ext.data.TreeStore-method-addListener\" class=\"docClass\">addListener</a> or the listener will not be removed.</p>\n"
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
        "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.data.TreeStore-method-mon\" rel=\"Ext.data.TreeStore-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
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
        "doc": "<p>Resumes firing events (see <a href=\"#/api/Ext.data.TreeStore-method-suspendEvents\" rel=\"Ext.data.TreeStore-method-suspendEvents\" class=\"docClass\">suspendEvents</a>).</p>\n\n<p>If events were suspended using the <code>**queueSuspended**</code> parameter, then all events fired\nduring event suspension will be sent to any listeners now.</p>\n",
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
        "linenr": 296,
        "owner": "Ext.data.AbstractStore",
        "html_filename": "AbstractStore.html",
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-setProxy",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/Object/Ext.data.proxy.Proxy",
            "properties": [

            ],
            "optional": false,
            "name": "proxy",
            "doc": "<p>The new Proxy, which can be either a type string, a configuration object\nor an <a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">Ext.data.proxy.Proxy</a> instance</p>\n"
          }
        ],
        "alias": null,
        "name": "setProxy",
        "shortDoc": "Sets the Store's Proxy by string, config object or Proxy instance ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
        "doc": "<p>Sets the Store's Proxy by string, config object or Proxy instance</p>\n",
        "return": {
          "type": "Ext.data.proxy.Proxy",
          "properties": null,
          "name": "return",
          "doc": "<p>The attached Proxy object</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 320,
        "owner": "Ext.data.TreeStore",
        "html_filename": "TreeStore.html",
        "href": "TreeStore.html#Ext-data-TreeStore-method-setRootNode",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.data.Model/Ext.data.NodeInterface/Object",
            "properties": [

            ],
            "optional": false,
            "name": "root",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "setRootNode",
        "shortDoc": "Sets the root node for this store. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/TreeStore.js",
        "doc": "<p>Sets the root node for this store.  See also the <a href=\"#/api/Ext.data.TreeStore-cfg-root\" rel=\"Ext.data.TreeStore-cfg-root\" class=\"docClass\">root</a> config option.</p>\n",
        "return": {
          "type": "Ext.data.NodeInterface",
          "properties": null,
          "name": "return",
          "doc": "<p>The new root</p>\n"
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
            "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.data.TreeStore-method-resumeEvents\" rel=\"Ext.data.TreeStore-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events.</p>\n"
          }
        ],
        "alias": null,
        "name": "suspendEvents",
        "shortDoc": "Suspends the firing of all events. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Suspends the firing of all events. (see <a href=\"#/api/Ext.data.TreeStore-method-resumeEvents\" rel=\"Ext.data.TreeStore-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
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
        "owner": "Ext.data.AbstractStore",
        "html_filename": "AbstractStore.html",
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-sync",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "sync",
        "shortDoc": "Synchronizes the Store with its Proxy. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
        "doc": "<p>Synchronizes the Store with its Proxy. This asks the Proxy to batch together any new, updated\nand deleted records in the store, updating the Store's internal representation of the records\nas each operation completes.</p>\n",
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
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.data.TreeStore-method-addListener\" rel=\"Ext.data.TreeStore-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope originally specified for the handler. It must be the same as the\nscope argument specified in the original call to <a href=\"#/api/Ext.data.TreeStore-method-addListener\" rel=\"Ext.data.TreeStore-method-addListener\" class=\"docClass\">addListener</a> or the listener will not be removed.</p>\n"
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.TreeStore-method-removeListener\" rel=\"Ext.data.TreeStore-method-removeListener\" class=\"docClass\">removeListener</a>.</p>\n\n<p>Removes an event handler.</p>\n",
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
        "linenr": 69,
        "owner": "Ext.data.AbstractStore",
        "html_filename": "AbstractStore.html",
        "href": "AbstractStore.html#Ext-data-AbstractStore-property-batchUpdateMode",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "batchUpdateMode",
        "shortDoc": "Sets the updating behavior based on batch synchronization. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
        "doc": "<p>Sets the updating behavior based on batch synchronization. 'operation' (the default) will update the Store's\ninternal representation of the data after each operation of the batch has completed, 'complete' will wait until\nthe entire batch has been completed before updating the Store's data. 'complete' is a good choice for local\nstorage proxies, 'operation' is better for remote proxies, where there is a comparatively high latency.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 100,
        "owner": "Ext.data.AbstractStore",
        "html_filename": "AbstractStore.html",
        "href": "AbstractStore.html#Ext-data-AbstractStore-property-defaultProxyType",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "defaultProxyType",
        "shortDoc": "The string type of the Proxy to create if none is specified. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
        "doc": "<p>The string type of the Proxy to create if none is specified. This defaults to creating a\n<a href=\"#/api/Ext.data.proxy.Memory\" rel=\"Ext.data.proxy.Memory\" class=\"docClass\">memory proxy</a>.</p>\n"
      },
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
        "type": "Object",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 80,
        "owner": "Ext.data.TreeStore",
        "html_filename": "TreeStore.html",
        "href": "TreeStore.html#Ext-data-TreeStore-property-fields",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "fields",
        "shortDoc": "If we have no fields declare for the store, add some defaults. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/TreeStore.js",
        "doc": "<p>If we have no fields declare for the store, add some defaults.\nThese will be ignored if a model is explicitly specified.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 78,
        "owner": "Ext.data.AbstractStore",
        "html_filename": "AbstractStore.html",
        "href": "AbstractStore.html#Ext-data-AbstractStore-property-filterOnLoad",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "filterOnLoad",
        "shortDoc": "If true, any filters attached to this Store will be run after loading data, before the datachanged event is fired. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
        "doc": "<p>If true, any filters attached to this Store will be run after loading data, before the datachanged event is fired.\nDefaults to true, ignored if <a href=\"#/api/Ext.data.Store-cfg-remoteFilter\" rel=\"Ext.data.Store-cfg-remoteFilter\" class=\"docClass\">remoteFilter</a> is true</p>\n"
      },
      {
        "static": false,
        "type": "Ext.util.MixedCollection",
        "inheritable": false,
        "properties": null,
        "linenr": 287,
        "owner": "Ext.data.AbstractStore",
        "html_filename": "AbstractStore.html",
        "href": "AbstractStore.html#Ext-data-AbstractStore-property-filters",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "filters",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
        "doc": "<p>The collection of <a href=\"#/api/Ext.util.Filter\" rel=\"Ext.util.Filter\" class=\"docClass\">Filters</a> currently applied to this Store</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 107,
        "owner": "Ext.data.AbstractStore",
        "html_filename": "AbstractStore.html",
        "href": "AbstractStore.html#Ext-data-AbstractStore-property-isDestroyed",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "isDestroyed",
        "shortDoc": "True if the Store has already been destroyed. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
        "doc": "<p>True if the Store has already been destroyed. If this is true, the reference to Store should be deleted\nas it will not function correctly any more.</p>\n"
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
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 85,
        "owner": "Ext.data.AbstractStore",
        "html_filename": "AbstractStore.html",
        "href": "AbstractStore.html#Ext-data-AbstractStore-property-sortOnLoad",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "sortOnLoad",
        "shortDoc": "If true, any sorters attached to this Store will be run after loading data, before the datachanged event is fired. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
        "doc": "<p>If true, any sorters attached to this Store will be run after loading data, before the datachanged event is fired.\nDefaults to true, igored if <a href=\"#/api/Ext.data.Store-cfg-remoteSort\" rel=\"Ext.data.Store-cfg-remoteSort\" class=\"docClass\">remoteSort</a> is true</p>\n"
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
  "singleton": false,
  "private": false,
  "tagname": "class",
  "author": null,
  "superclasses": [
    "Ext.Base",
    "Ext.data.AbstractStore"
  ],
  "alias": null,
  "name": "Ext.data.TreeStore",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/TreeStore.js",
  "doc": "<p>The TreeStore is a store implementation that is backed by by an <a href=\"#/api/Ext.data.Tree\" rel=\"Ext.data.Tree\" class=\"docClass\">Ext.data.Tree</a>.\nIt provides convenience methods for loading nodes, as well as the ability to use\nthe hierarchical tree structure combined with a store. This class is generally used\nin conjunction with <a href=\"#/api/Ext.tree.Panel\" rel=\"Ext.tree.Panel\" class=\"docClass\">Ext.tree.Panel</a>. This class also relays many events from\nthe Tree for convenience.</p>\n\n<h1>Using Models</h1>\n\n<p>If no Model is specified, an implicit model will be created that implements <a href=\"#/api/Ext.data.NodeInterface\" rel=\"Ext.data.NodeInterface\" class=\"docClass\">Ext.data.NodeInterface</a>.\nThe standard Tree fields will also be copied onto the Model for maintaining their state.</p>\n\n<h1>Reading Nested Data</h1>\n\n<p>For the tree to read nested data, the <a href=\"#/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Ext.data.reader.Reader</a> must be configured with a root property,\nso the reader can find nested data for each node. If a root is not specified, it will default to\n'children'.</p>\n",
  "alternateClassNames": [

  ]
});