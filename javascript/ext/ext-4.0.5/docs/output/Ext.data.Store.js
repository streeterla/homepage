Ext.data.JsonP.Ext_data_Store({
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
        "linenr": 392,
        "owner": "Ext.Base",
        "html_filename": "Base3.html",
        "href": "Base3.html#Ext-Base-method-addStatics",
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
            "name": "members",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "addStatics",
        "shortDoc": "Add / override static properties of this class. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js",
        "doc": "<p>Add / override static properties of this class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.addStatics({\n    someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'\n    method1: function() { ... },    // My.cool.Class.method1 = function() { ... };\n    method2: function() { ... }     // My.cool.Class.method2 = function() { ... };\n});\n</code></pre>\n",
        "return": {
          "type": "Ext.Base",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": true,
        "inheritable": true,
        "linenr": 482,
        "owner": "Ext.Base",
        "html_filename": "Base3.html",
        "href": "Base3.html#Ext-Base-method-borrow",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.Base",
            "properties": [

            ],
            "optional": false,
            "name": "fromClass",
            "doc": "<p>The class to borrow members from</p>\n"
          },
          {
            "type": "String/String[]",
            "properties": [

            ],
            "optional": false,
            "name": "members",
            "doc": "<p>The names of the members to borrow</p>\n"
          }
        ],
        "alias": null,
        "name": "borrow",
        "shortDoc": "Borrow another class' members to the prototype of this class. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js",
        "doc": "<p>Borrow another class' members to the prototype of this class.</p>\n\n<pre><code>Ext.define('Bank', {\n    money: '$$$',\n    printMoney: function() {\n        alert('$$$$$$$');\n    }\n});\n\nExt.define('Thief', {\n    ...\n});\n\nThief.borrow(Bank, ['money', 'printMoney']);\n\nvar steve = new Thief();\n\nalert(steve.money); // alerts '$$$'\nsteve.printMoney(); // alerts '$$$$$$$'\n</code></pre>\n",
        "return": {
          "type": "Ext.Base",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": true,
        "inheritable": true,
        "linenr": 330,
        "owner": "Ext.Base",
        "html_filename": "Base3.html",
        "href": "Base3.html#Ext-Base-method-create",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "create",
        "shortDoc": "Create a new instance of this Class. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js",
        "doc": "<p>Create a new instance of this Class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.create({\n    someConfig: true\n});\n</code></pre>\n\n<p>All parameters are passed to the constructor of the class.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>the created instance.</p>\n"
        }
      },
      {
        "static": true,
        "inheritable": true,
        "linenr": 658,
        "owner": "Ext.Base",
        "html_filename": "Base3.html",
        "href": "Base3.html#Ext-Base-method-createAlias",
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
            "name": "alias",
            "doc": "<p>The new method name, or an object to set multiple aliases. See\n<a href=\"#/api/Ext.Function-method-flexSetter\" rel=\"Ext.Function-method-flexSetter\" class=\"docClass\">flexSetter</a></p>\n"
          },
          {
            "type": "String/Object",
            "properties": [

            ],
            "optional": false,
            "name": "origin",
            "doc": "<p>The original method name</p>\n"
          }
        ],
        "alias": null,
        "name": "createAlias",
        "shortDoc": "Create aliases for existing prototype methods. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js",
        "doc": "<p>Create aliases for existing prototype methods. Example:</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    method1: function() { ... },\n    method2: function() { ... }\n});\n\nvar test = new My.cool.Class();\n\nMy.cool.Class.createAlias({\n    method3: 'method1',\n    method4: 'method2'\n});\n\ntest.method3(); // test.method1()\n\nMy.cool.Class.createAlias('method5', 'method3');\n\ntest.method5(); // test.method3() -&gt; test.method1()\n</code></pre>\n",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": true,
        "inheritable": true,
        "linenr": 639,
        "owner": "Ext.Base",
        "html_filename": "Base3.html",
        "href": "Base3.html#Ext-Base-method-getName",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getName",
        "shortDoc": "Get the current class' name in string format. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js",
        "doc": "<p>Get the current class' name in string format.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>className</p>\n"
        }
      },
      {
        "static": true,
        "inheritable": true,
        "linenr": 420,
        "owner": "Ext.Base",
        "html_filename": "Base3.html",
        "href": "Base3.html#Ext-Base-method-implement",
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
            "name": "members",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "implement",
        "shortDoc": "Add methods / properties to the prototype of this class. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js",
        "doc": "<p>Add methods / properties to the prototype of this class.</p>\n\n<pre><code>Ext.define('My.awesome.Cat', {\n    constructor: function() {\n        ...\n    }\n});\n\n My.awesome.Cat.implement({\n     meow: function() {\n        alert('Meowww...');\n     }\n });\n\n var kitty = new My.awesome.Cat;\n kitty.meow();\n</code></pre>\n",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": true,
        "inheritable": true,
        "linenr": 524,
        "owner": "Ext.Base",
        "html_filename": "Base3.html",
        "href": "Base3.html#Ext-Base-method-override",
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
            "name": "members",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "override",
        "shortDoc": "Override prototype members of this class. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js",
        "doc": "<p>Override prototype members of this class. Overridden methods can be invoked via\n<a href=\"#/api/Ext.Base-method-callOverridden\" rel=\"Ext.Base-method-callOverridden\" class=\"docClass\">Ext.Base.callOverridden</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
        "return": {
          "type": "Ext.Base",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      }
    ],
    "property": [

    ]
  },
  "extends": "Ext.data.AbstractStore",
  "html_filename": "Store2.html",
  "allMixins": [
    "Ext.util.Observable",
    "Ext.util.Sortable"
  ],
  "docauthor": null,
  "href": "Store2.html#Ext-data-Store",
  "subclasses": [
    "Ext.grid.property.Store",
    "Ext.data.ArrayStore",
    "Ext.data.DirectStore"
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
        "linenr": 299,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-cfg-buffered",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "buffered",
        "shortDoc": "Allow the store to buffer and pre-fetch pages of records. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Allow the store to buffer and pre-fetch pages of records. This is to be used in conjunction with a view will\ntell the store to pre-fetch records ahead of a time.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 278,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-cfg-clearOnPageLoad",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "clearOnPageLoad",
        "shortDoc": "True to empty the store when loading another page via loadPage,\nnextPage or previousPage (defaults to true). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>True to empty the store when loading another page via <a href=\"#/api/Ext.data.Store-method-loadPage\" rel=\"Ext.data.Store-method-loadPage\" class=\"docClass\">loadPage</a>,\n<a href=\"#/api/Ext.data.Store-method-nextPage\" rel=\"Ext.data.Store-method-nextPage\" class=\"docClass\">nextPage</a> or <a href=\"#/api/Ext.data.Store-method-previousPage\" rel=\"Ext.data.Store-method-previousPage\" class=\"docClass\">previousPage</a> (defaults to true). Setting to false keeps existing records, allowing\nlarge data sets to be loaded one page at a time but rendered all together.</p>\n"
      },
      {
        "static": false,
        "type": "Object[]/Ext.data.Model[]",
        "inheritable": false,
        "properties": null,
        "linenr": 244,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-cfg-data",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "data",
        "shortDoc": "Optional array of Model instances or data objects to load locally. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Optional array of Model instances or data objects to load locally. See \"Inline data\" above for details.</p>\n"
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
        "doc": "<p>This may be used in place of specifying a <a href=\"#/api/Ext.data.Store-cfg-model\" rel=\"Ext.data.Store-cfg-model\" class=\"docClass\">model</a> configuration. The fields should be a\nset of <a href=\"#/api/Ext.data.Field\" rel=\"Ext.data.Field\" class=\"docClass\">Ext.data.Field</a> configuration objects. The store will automatically create a <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a>\nwith these fields. In general this configuration option should be avoided, it exists for the purposes of\nbackwards compatibility. For anything more complicated, such as specifying a particular id property or\nassocations, a <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> should be defined and specified for the <a href=\"#/api/Ext.data.Store-cfg-model\" rel=\"Ext.data.Store-cfg-model\" class=\"docClass\">model</a>\nconfig.</p>\n"
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
        "doc": "<p>A config object containing one or more event handlers to be added to this object during initialization. This\nshould be a valid listeners config object as specified in the <a href=\"#/api/Ext.data.Store-method-addListener\" rel=\"Ext.data.Store-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple\nhandlers at once.</p>\n\n<p><strong>DOM events from ExtJS <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></strong></p>\n\n<p>While <em>some</em> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this is usually\nonly done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s <strong><code><a href=\"#/api/Ext.view.View-event-itemclick\" rel=\"Ext.view.View-event-itemclick\" class=\"docClass\">itemclick</a></code></strong> event passing the node clicked on. To access DOM events directly from a\nchild element of a Component, we need to specify the <code>element</code> option to identify the Component property to add a\nDOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n"
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
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 264,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-cfg-pageSize",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "pageSize",
        "shortDoc": "The number of records considered to form a 'page'. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>The number of records considered to form a 'page'. This is used to power the built-in\npaging using the nextPage and previousPage functions. Defaults to 25.</p>\n"
      },
      {
        "static": false,
        "type": "String/Ext.data.proxy.Proxy/Object",
        "inheritable": false,
        "properties": null,
        "linenr": 239,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-cfg-proxy",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "proxy",
        "shortDoc": "The Proxy to use for this Store. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>The Proxy to use for this Store. This can be either a string, a config\nobject or a Proxy instance - see <a href=\"#/api/Ext.data.Store-method-setProxy\" rel=\"Ext.data.Store-method-setProxy\" class=\"docClass\">setProxy</a> for details.</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 306,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-cfg-purgePageCount",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "purgePageCount",
        "shortDoc": "The number of pages to keep in the cache before purging additional records. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>The number of pages to keep in the cache before purging additional records. A value of 0 indicates to never purge the prefetched data.\nThis option is only relevant when the <a href=\"#/api/Ext.data.Store-cfg-buffered\" rel=\"Ext.data.Store-cfg-buffered\" class=\"docClass\">buffered</a> option is set to true.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 225,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-cfg-remoteFilter",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "remoteFilter",
        "shortDoc": "True to defer any filtering operation to the server. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>True to defer any filtering operation to the server. If false, filtering is done locally on the client. Defaults to <tt>false</tt>.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 231,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-cfg-remoteGroup",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "remoteGroup",
        "shortDoc": "True if the grouping should apply on the server side, false if it is local only (defaults to false). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>True if the grouping should apply on the server side, false if it is local only (defaults to false).  If the\ngrouping is local, it can be applied immediately to the data.  If it is remote, then it will simply act as a\nhelper, automatically sending the grouping information to the server.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 219,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-cfg-remoteSort",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "remoteSort",
        "shortDoc": "True to defer any sorting operation to the server. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>True to defer any sorting operation to the server. If false, sorting is done locally on the client. Defaults to <tt>false</tt>.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 293,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-cfg-sortOnFilter",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "sortOnFilter",
        "shortDoc": "For local filtering only, causes sort to be called whenever filter is called,\ncausing the sorters to be reapplied aft...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>For local filtering only, causes <a href=\"#/api/Ext.data.Store-method-sort\" rel=\"Ext.data.Store-method-sort\" class=\"docClass\">sort</a> to be called whenever <a href=\"#/api/Ext.data.Store-method-filter\" rel=\"Ext.data.Store-method-filter\" class=\"docClass\">filter</a> is called,\ncausing the sorters to be reapplied after filtering. Defaults to true</p>\n"
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
        "linenr": 356,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-event-beforeprefetch",
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
            "type": "Ext.data.Operation",
            "properties": [

            ],
            "optional": false,
            "name": "operation",
            "doc": "<p>The associated operation</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "beforeprefetch",
        "shortDoc": "Fires before a prefetch occurs. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Fires before a prefetch occurs. Return false to cancel.</p>\n"
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
        "doc": "<p>Fired before a call to <a href=\"#/api/Ext.data.Store-method-sync\" rel=\"Ext.data.Store-method-sync\" class=\"docClass\">sync</a> is executed. Return false from any listener to cancel the synv</p>\n"
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
        "doc": "<p>Fired after the <a href=\"#/api/Ext.data.Store-method-removeAll\" rel=\"Ext.data.Store-method-removeAll\" class=\"docClass\">removeAll</a> method is called.</p>\n"
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
        "linenr": 363,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-event-groupchange",
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
            "type": "Ext.util.Grouper[]",
            "properties": [

            ],
            "optional": false,
            "name": "groupers",
            "doc": "<p>The array of grouper objects</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "groupchange",
        "shortDoc": "Fired whenever the grouping in the grid changes ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Fired whenever the grouping in the grid changes</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 370,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-event-load",
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
            "type": "Ext.util.Grouper[]",
            "properties": [

            ],
            "optional": false,
            "name": "records",
            "doc": "<p>An array of records</p>\n"
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
            "type": "Ext.data.Operation",
            "properties": [

            ],
            "optional": false,
            "name": "operation",
            "doc": "<p>The associated operation</p>\n"
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
        "shortDoc": "Fires whenever records have been prefetched ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Fires whenever records have been prefetched</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 155,
        "owner": "Ext.data.AbstractStore",
        "html_filename": "AbstractStore.html",
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-remove",
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
            "doc": "<p>The Store object</p>\n"
          },
          {
            "type": "Ext.data.Model",
            "properties": [

            ],
            "optional": false,
            "name": "record",
            "doc": "<p>The record that was removed</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "index",
            "doc": "<p>The index of the record that was removed</p>\n"
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
        "shortDoc": "Fired when a Model instance has been removed from this Store ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
        "doc": "<p>Fired when a Model instance has been removed from this Store</p>\n"
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
        "doc": "<p>Fires whenever a successful write has been made via the configured <a href=\"#/api/Ext.data.Store-cfg-proxy\" rel=\"Ext.data.Store-cfg-proxy\" class=\"docClass\">Proxy</a></p>\n"
      }
    ],
    "method": [
      {
        "static": false,
        "inheritable": false,
        "linenr": 331,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-constructor",
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
            "name": "config",
            "doc": "<p>(optional) Config object</p>\n"
          }
        ],
        "alias": null,
        "name": "constructor",
        "shortDoc": "Creates the store. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Creates the store.</p>\n",
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
        "linenr": 810,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-add",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.data.Model[]/Ext.data.Model...",
            "properties": [

            ],
            "optional": false,
            "name": "model",
            "doc": "<p>An array of Model instances\nor Model configuration objects, or variable number of Model instance or config arguments.</p>\n"
          }
        ],
        "alias": null,
        "name": "add",
        "shortDoc": "Adds Model instance to the Store. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Adds Model instance to the Store. This method accepts either:</p>\n\n<ul>\n<li>An array of Model instances or Model configuration objects.</li>\n<li>Any number of Model instance or Model configuration object arguments.</li>\n</ul>\n\n\n<p>The new Model instances will be added at the end of the existing collection.</p>\n\n<p>Sample usage:</p>\n\n<pre><code>myStore.add({some: 'data'}, {some: 'other data'});\n</code></pre>\n",
        "return": {
          "type": "Ext.data.Model[]",
          "properties": null,
          "name": "return",
          "doc": "<p>The model instances that were added</p>\n"
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
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.data.Store-method-fireEvent\" rel=\"Ext.data.Store-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n"
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
        "linenr": 2177,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-aggregate",
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
            "doc": "<p>The function to execute. The function is called with a single parameter,\nan array of records for that group.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope to execute the function in. Defaults to the store.</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "grouped",
            "doc": "<p>(Optional) True to perform the operation for each group\nin the store. The value returned will be an object literal with the key being the group\nname and the group average being the value. The grouped parameter is only honored if\nthe store has a groupField.</p>\n"
          },
          {
            "type": "Array",
            "properties": [

            ],
            "optional": true,
            "name": "args",
            "doc": "<p>(optional) Any arguments to append to the function call</p>\n"
          }
        ],
        "alias": null,
        "name": "aggregate",
        "shortDoc": "Runs the aggregate function for all the records in the store. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Runs the aggregate function for all the records in the store.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>An object literal with the group names and their appropriate values.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 2144,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-average",
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
            "name": "field",
            "doc": "<p>The field in each record</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "grouped",
            "doc": "<p>(Optional) True to perform the operation for each group\nin the store. The value returned will be an object literal with the key being the group\nname and the group average being the value. The grouped parameter is only honored if\nthe store has a groupField.</p>\n"
          }
        ],
        "alias": null,
        "name": "average",
        "shortDoc": "Gets the average value in the store. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Gets the average value in the store.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>The average value, if no items exist, 0.</p>\n"
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
        "linenr": 1193,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-clearFilter",
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
            "name": "suppressEvent",
            "doc": "<p>If <tt>true</tt> the filter is cleared silently without firing the\n<a href=\"#/api/Ext.data.Store-event-datachanged\" rel=\"Ext.data.Store-event-datachanged\" class=\"docClass\">datachanged</a> event.</p>\n"
          }
        ],
        "alias": null,
        "name": "clearFilter",
        "shortDoc": "Revert to a view of the Record cache with no filtering applied. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Revert to a view of the Record cache with no filtering applied.</p>\n",
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
        "linenr": 544,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-clearGrouping",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "clearGrouping",
        "shortDoc": "Clear any groupers in the store ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Clear any groupers in the store</p>\n",
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
        "linenr": 1855,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-collect",
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
            "name": "dataIndex",
            "doc": "<p>The property to collect</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "allowNull",
            "doc": "<p>(optional) Pass true to allow null, undefined or empty string values</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "bypassFilter",
            "doc": "<p>(optional) Pass true to collect from all records, even ones which are filtered</p>\n"
          }
        ],
        "alias": null,
        "name": "collect",
        "shortDoc": "Collects unique values for a particular dataIndex from this store. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Collects unique values for a particular dataIndex from this store.</p>\n",
        "return": {
          "type": "Object[]",
          "properties": null,
          "name": "return",
          "doc": "<p>An array of the unique values</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 2047,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-count",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "grouped",
            "doc": "<p>(Optional) True to perform the operation for each group\nin the store. The value returned will be an object literal with the key being the group\nname and the count for each group being the value. The grouped parameter is only honored if\nthe store has a groupField.</p>\n"
          }
        ],
        "alias": null,
        "name": "count",
        "shortDoc": "Gets the count of items in the store. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Gets the count of items in the store.</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>the count</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 862,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-each",
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
            "doc": "<p>The function to call. The <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Record</a> is passed as the first parameter.\nReturning <tt>false</tt> aborts and exits the iteration.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed.\nDefaults to the current <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Record</a> in the iteration.</p>\n"
          }
        ],
        "alias": null,
        "name": "each",
        "shortDoc": "Calls the specified function for each of the Records in the cache. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Calls the specified function for each of the <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Records</a> in the cache.</p>\n",
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
        "linenr": 1122,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-filter",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Object[]/Ext.util.Filter[]/String",
            "properties": [

            ],
            "optional": false,
            "name": "filters",
            "doc": "<p>The set of filters to apply to the data. These are stored internally on the store,\nbut the filtering itself is done on the Store's <a href=\"#/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">MixedCollection</a>. See\nMixedCollection's <a href=\"#/api/Ext.util.MixedCollection-method-filter\" rel=\"Ext.util.MixedCollection-method-filter\" class=\"docClass\">filter</a> method for filter syntax. Alternatively,\npass in a property string</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "value",
            "doc": "<p>(optional) value to filter by (only if using a property string as the first argument)</p>\n"
          }
        ],
        "alias": null,
        "name": "filter",
        "shortDoc": "Filters the loaded set of records by a given set of filters. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Filters the loaded set of records by a given set of filters.</p>\n\n<p>Filtering by single field:</p>\n\n<pre><code>store.filter(\"email\", /\\.com$/);\n</code></pre>\n\n<p>Using multiple filters:</p>\n\n<pre><code>store.filter([\n    {property: \"email\", value: /\\.com$/},\n    {filterFn: function(item) { return item.get(\"age\") &gt; 10; }}\n]);\n</code></pre>\n\n<p>Using <a href=\"#/api/Ext.util.Filter\" rel=\"Ext.util.Filter\" class=\"docClass\">Ext.util.Filter</a> instances instead of config objects\n(note that we need to specify the <a href=\"#/api/Ext.util.Filter-cfg-root\" rel=\"Ext.util.Filter-cfg-root\" class=\"docClass\">root</a> config option in this case):</p>\n\n<pre><code>store.filter([\n    Ext.create('Ext.util.Filter', {property: \"email\", value: /\\.com$/, root: 'data'}),\n    Ext.create('Ext.util.Filter', {filterFn: function(item) { return item.get(\"age\") &gt; 10; }, root: 'data'})\n]);\n</code></pre>\n",
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
        "linenr": 1224,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-filterBy",
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
            "doc": "<p>The function to be called. It will be passed the following parameters:<ul>\n<li><b>record</b> : <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a><p class=\"sub-desc\">The <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">record</a>\nto test for filtering. Access field values using <a href=\"#/api/Ext.data.Model-method-get\" rel=\"Ext.data.Model-method-get\" class=\"docClass\">Ext.data.Model.get</a>.</p></li>\n<li><b>id</b> : Object<p class=\"sub-desc\">The ID of the Record passed.</p></li>\n</ul></p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to this Store.</p>\n"
          }
        ],
        "alias": null,
        "name": "filterBy",
        "shortDoc": "Filter by a function. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Filter by a function. The specified function will be called for each\nRecord in this Store. If the function returns <tt>true</tt> the Record is included,\notherwise it is filtered out.</p>\n",
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
        "linenr": 1771,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-find",
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
            "name": "fieldName",
            "doc": "<p>The name of the Record field to test.</p>\n"
          },
          {
            "type": "String/RegExp",
            "properties": [

            ],
            "optional": false,
            "name": "value",
            "doc": "<p>Either a string that the field value\nshould begin with, or a RegExp to test against the field.</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": true,
            "name": "startIndex",
            "doc": "<p>(optional) The index to start searching at</p>\n"
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
            "doc": "<p>(optional) True for case sensitive comparison</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "exactMatch",
            "doc": "<p>(optional) True to force exact match (^ and $ characters added to the regex). Defaults to false.</p>\n"
          }
        ],
        "alias": null,
        "name": "find",
        "shortDoc": "Finds the index of the first matching Record in this store by a specific field value. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Finds the index of the first matching Record in this store by a specific field value.</p>\n",
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
        "linenr": 1839,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-findBy",
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
            "doc": "<p>The function to be called. It will be passed the following parameters:<ul>\n<li><b>record</b> : <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a><p class=\"sub-desc\">The <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">record</a>\nto test for filtering. Access field values using <a href=\"#/api/Ext.data.Model-method-get\" rel=\"Ext.data.Model-method-get\" class=\"docClass\">Ext.data.Model.get</a>.</p></li>\n<li><b>id</b> : Object<p class=\"sub-desc\">The ID of the Record passed.</p></li>\n</ul></p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to this Store.</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": true,
            "name": "startIndex",
            "doc": "<p>(optional) The index to start searching at</p>\n"
          }
        ],
        "alias": null,
        "name": "findBy",
        "shortDoc": "Find the index of the first matching Record in this Store by a function. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Find the index of the first matching Record in this Store by a function.\nIf the function returns <tt>true</tt> it is considered a match.</p>\n",
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
        "linenr": 1825,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-findExact",
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
            "name": "fieldName",
            "doc": "<p>The name of the Record field to test.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "value",
            "doc": "<p>The value to match the field against.</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": true,
            "name": "startIndex",
            "doc": "<p>(optional) The index to start searching at</p>\n"
          }
        ],
        "alias": null,
        "name": "findExact",
        "shortDoc": "Finds the index of the first matching Record in this store by a specific field value. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Finds the index of the first matching Record in this store by a specific field value.</p>\n",
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
        "linenr": 1787,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-findRecord",
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
            "name": "fieldName",
            "doc": "<p>The name of the Record field to test.</p>\n"
          },
          {
            "type": "String/RegExp",
            "properties": [

            ],
            "optional": false,
            "name": "value",
            "doc": "<p>Either a string that the field value\nshould begin with, or a RegExp to test against the field.</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": true,
            "name": "startIndex",
            "doc": "<p>(optional) The index to start searching at</p>\n"
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
            "doc": "<p>(optional) True for case sensitive comparison</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "exactMatch",
            "doc": "<p>(optional) True to force exact match (^ and $ characters added to the regex). Defaults to false.</p>\n"
          }
        ],
        "alias": null,
        "name": "findRecord",
        "shortDoc": "Finds the first matching Record in this store by a specific field value. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Finds the first matching Record in this store by a specific field value.</p>\n",
        "return": {
          "type": "Ext.data.Model",
          "properties": null,
          "name": "return",
          "doc": "<p>The matched record or null</p>\n"
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
        "doc": "<p>Fires the specified event with the passed parameters (minus the event name, plus the <code>options</code> object passed\nto <a href=\"#/api/Ext.data.Store-method-addListener\" rel=\"Ext.data.Store-method-addListener\" class=\"docClass\">addListener</a>).</p>\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>) by\ncalling <a href=\"#/api/Ext.data.Store-method-enableBubble\" rel=\"Ext.data.Store-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n",
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
        "linenr": 1973,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-first",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "grouped",
            "doc": "<p>(Optional) True to perform the operation for each group\nin the store. The value returned will be an object literal with the key being the group\nname and the first record being the value. The grouped parameter is only honored if\nthe store has a groupField.</p>\n"
          }
        ],
        "alias": null,
        "name": "first",
        "shortDoc": "Convenience function for getting the first model instance in the store ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Convenience function for getting the first model instance in the store</p>\n",
        "return": {
          "type": "Ext.data.Model/undefined",
          "properties": null,
          "name": "return",
          "doc": "<p>The first model instance in the store, or undefined</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1891,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-getAt",
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
            "doc": "<p>The index of the Record to find.</p>\n"
          }
        ],
        "alias": null,
        "name": "getAt",
        "shortDoc": "Get the Record at the specified index. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Get the Record at the specified index.</p>\n",
        "return": {
          "type": "Ext.data.Model",
          "properties": null,
          "name": "return",
          "doc": "<p>The Record at the passed index. Returns undefined if not found.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1910,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-getById",
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
            "name": "id",
            "doc": "<p>The id of the Record to find.</p>\n"
          }
        ],
        "alias": null,
        "name": "getById",
        "shortDoc": "Get the Record with the specified id. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Get the Record with the specified id.</p>\n",
        "return": {
          "type": "Ext.data.Model",
          "properties": null,
          "name": "return",
          "doc": "<p>The Record with the passed id. Returns undefined if not found.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1869,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-getCount",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getCount",
        "shortDoc": "Gets the number of cached records. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Gets the number of cached records.</p>\n\n<p>If using paging, this may not be the total size of the dataset. If the data object\nused by the Reader contains the dataset size, then the <a href=\"#/api/Ext.data.Store-method-getTotalCount\" rel=\"Ext.data.Store-method-getTotalCount\" class=\"docClass\">getTotalCount</a> function returns\nthe dataset size.  <b>Note</b>: see the Important note in <a href=\"#/api/Ext.data.Store-method-load\" rel=\"Ext.data.Store-method-load\" class=\"docClass\">load</a>.</p>\n\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>The number of Records in the Store's cache.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 751,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-getGroupString",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.data.Model",
            "properties": [

            ],
            "optional": false,
            "name": "instance",
            "doc": "<p>The model instance</p>\n"
          }
        ],
        "alias": null,
        "name": "getGroupString",
        "shortDoc": "Returns the string to group on for a given model instance. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Returns the string to group on for a given model instance. The default implementation of this method returns\nthe model's <a href=\"#/api/Ext.data.Store-property-groupField\" rel=\"Ext.data.Store-property-groupField\" class=\"docClass\">groupField</a>, but this can be overridden to group by an arbitrary string. For example, to\ngroup by the first letter of a model's 'name' field, use the following code:</p>\n\n\n<pre><code>Ext.create('Ext.data.Store', {\n    groupDir: 'ASC',\n    getGroupString: function(instance) {\n        return instance.get('name')[0];\n    }\n});\n</code></pre>\n\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The string to compare when forming groups</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 582,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-getGroups",
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
            "name": "groupName",
            "doc": "<p>(Optional) Pass in an optional groupName argument to access a specific group as defined by <a href=\"#/api/Ext.data.Store-method-getGroupString\" rel=\"Ext.data.Store-method-getGroupString\" class=\"docClass\">getGroupString</a></p>\n"
          }
        ],
        "alias": null,
        "name": "getGroups",
        "shortDoc": "Returns an array containing the result of applying grouping to the records in this store. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Returns an array containing the result of applying grouping to the records in this store. See <a href=\"#/api/Ext.data.Store-property-groupField\" rel=\"Ext.data.Store-property-groupField\" class=\"docClass\">groupField</a>,\n<a href=\"#/api/Ext.data.Store-property-groupDir\" rel=\"Ext.data.Store-property-groupDir\" class=\"docClass\">groupDir</a> and <a href=\"#/api/Ext.data.Store-method-getGroupString\" rel=\"Ext.data.Store-method-getGroupString\" class=\"docClass\">getGroupString</a>. Example for a store containing records with a color field:</p>\n\n<pre><code>var myStore = Ext.create('Ext.data.Store', {\n    groupField: 'color',\n    groupDir  : 'DESC'\n});\n\nmyStore.getGroups(); //returns:\n[\n    {\n        name: 'yellow',\n        children: [\n            //all records where the color field is 'yellow'\n        ]\n    },\n    {\n        name: 'red',\n        children: [\n            //all records where the color field is 'red'\n        ]\n    }\n]\n</code></pre>\n\n",
        "return": {
          "type": "Object/Object[]",
          "properties": null,
          "name": "return",
          "doc": "<p>The grouped data</p>\n"
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
        "linenr": 1562,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-getPageFromRecordIndex",
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
            "doc": "<p>The record index</p>\n"
          }
        ],
        "alias": null,
        "name": "getPageFromRecordIndex",
        "shortDoc": "Determines the page from a record index ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Determines the page from a record index</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>The page the record belongs to</p>\n"
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
        "linenr": 1900,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-getRange",
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
            "doc": "<p>(optional) The starting index (defaults to 0)</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": true,
            "name": "endIndex",
            "doc": "<p>(optional) The ending index (defaults to the last Record in the Store)</p>\n"
          }
        ],
        "alias": null,
        "name": "getRange",
        "shortDoc": "Returns a range of Records between specified indices. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Returns a range of Records between specified indices.</p>\n",
        "return": {
          "type": "Ext.data.Model[]",
          "properties": null,
          "name": "return",
          "doc": "<p>An array of Records</p>\n"
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
        "linenr": 1880,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-getTotalCount",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getTotalCount",
        "shortDoc": "Returns the total number of Model instances that the Proxy\nindicates exist. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Returns the total number of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> instances that the <a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">Proxy</a>\nindicates exist. This will usually differ from <a href=\"#/api/Ext.data.Store-method-getCount\" rel=\"Ext.data.Store-method-getCount\" class=\"docClass\">getCount</a> when using paging - getCount returns the\nnumber of records loaded into the Store at the moment, getTotalCount returns the number of records that\ncould be loaded into the Store if the Store contained all data</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>The total number of Model instances available via the Proxy</p>\n"
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
        "linenr": 496,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-group",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/Object[]",
            "properties": [

            ],
            "optional": false,
            "name": "groupers",
            "doc": "<p>Either a string name of one of the fields in this Store's configured <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>,\nor an Array of grouper configurations.</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "direction",
            "doc": "<p>The overall direction to group the data by. Defaults to \"ASC\".</p>\n"
          }
        ],
        "alias": null,
        "name": "group",
        "shortDoc": "Group data in the store ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Group data in the store</p>\n",
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
        "linenr": 1649,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-guaranteeRange",
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
            "name": "start",
            "doc": "\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "end",
            "doc": "\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "cb",
            "doc": "\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "scope",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "guaranteeRange",
        "shortDoc": "Guarantee a specific range, this will load the store with a range (that\nmust be the pageSize or smaller) and take car...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Guarantee a specific range, this will load the store with a range (that\nmust be the pageSize or smaller) and take care of any loading that may\nbe necessary.</p>\n",
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
        "linenr": 1634,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-hasPendingRequests",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "hasPendingRequests",
        "shortDoc": "Returns the number of pending requests out. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Returns the number of pending requests out.</p>\n",
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
        "linenr": 1921,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-indexOf",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.data.Model",
            "properties": [

            ],
            "optional": false,
            "name": "record",
            "doc": "<p>The <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> object to find.</p>\n"
          }
        ],
        "alias": null,
        "name": "indexOf",
        "shortDoc": "Get the index within the cache of the passed Record. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Get the index within the cache of the passed Record.</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>The index of the passed Record. Returns -1 if not found.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1944,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-indexOfId",
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
            "name": "id",
            "doc": "<p>The id of the Record to find.</p>\n"
          }
        ],
        "alias": null,
        "name": "indexOfId",
        "shortDoc": "Get the index within the cache of the Record with the passed id. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Get the index within the cache of the Record with the passed id.</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>The index of the Record. Returns -1 if not found.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1931,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-indexOfTotal",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.data.Model",
            "properties": [

            ],
            "optional": false,
            "name": "record",
            "doc": "<p>The <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> object to find.</p>\n"
          }
        ],
        "alias": null,
        "name": "indexOfTotal",
        "shortDoc": "Get the index within the entire dataset. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Get the index within the entire dataset. From 0 to the totalCount.</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>The index of the passed Record. Returns -1 if not found.</p>\n"
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
        "linenr": 773,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-insert",
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
            "doc": "<p>The start index at which to insert the passed Records.</p>\n"
          },
          {
            "type": "Ext.data.Model[]",
            "properties": [

            ],
            "optional": false,
            "name": "records",
            "doc": "<p>An Array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> objects to add to the cache.</p>\n"
          }
        ],
        "alias": null,
        "name": "insert",
        "shortDoc": "Inserts Model instances into the Store at the given index and fires the add event. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Inserts Model instances into the Store at the given index and fires the <a href=\"#/api/Ext.data.Store-method-add\" rel=\"Ext.data.Store-method-add\" class=\"docClass\">add</a> event.\nSee also <code><a href=\"#/api/Ext.data.Store-method-add\" rel=\"Ext.data.Store-method-add\" class=\"docClass\">add</a></code>.</p>\n",
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
        "linenr": 1215,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-isFiltered",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isFiltered",
        "shortDoc": "Returns true if this store is currently filtered ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Returns true if this store is currently filtered</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 565,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-isGrouped",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isGrouped",
        "shortDoc": "Checks if the store is currently grouped ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Checks if the store is currently grouped</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if the store is grouped.</p>\n"
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
        "linenr": 1993,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-last",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "grouped",
            "doc": "<p>(Optional) True to perform the operation for each group\nin the store. The value returned will be an object literal with the key being the group\nname and the last record being the value. The grouped parameter is only honored if\nthe store has a groupField.</p>\n"
          }
        ],
        "alias": null,
        "name": "last",
        "shortDoc": "Convenience function for getting the last model instance in the store ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Convenience function for getting the last model instance in the store</p>\n",
        "return": {
          "type": "Ext.data.Model/undefined",
          "properties": null,
          "name": "return",
          "doc": "<p>The last model instance in the store, or undefined</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 936,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-load",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Object/Function",
            "properties": [

            ],
            "optional": true,
            "name": "options",
            "doc": "<p>(Optional) config object, passed into the <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Ext.data.Operation</a> object before loading.</p>\n"
          }
        ],
        "alias": null,
        "name": "load",
        "shortDoc": "Loads data into the Store via the configured proxy. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Loads data into the Store via the configured <a href=\"#/api/Ext.data.Store-cfg-proxy\" rel=\"Ext.data.Store-cfg-proxy\" class=\"docClass\">proxy</a>. This uses the Proxy to make an\nasynchronous call to whatever storage backend the Proxy uses, automatically adding the retrieved\ninstances into the Store and calling an optional callback if required. Example usage:</p>\n\n\n\n\n<pre><code>store.load({\n    scope   : this,\n    callback: function(records, operation, success) {\n        //the <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">operation</a> object contains all of the details of the load operation\n        console.log(records);\n    }\n});\n</code></pre>\n\n\n\n\n<p>If the callback scope does not need to be set, a function can simply be passed:</p>\n\n\n\n\n<pre><code>store.load(function(records, operation, success) {\n    console.log('loaded records');\n});\n</code></pre>\n\n",
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
        "linenr": 1261,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-loadData",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.data.Model[]/Object[]",
            "properties": [

            ],
            "optional": false,
            "name": "data",
            "doc": "<p>Array of data to load. Any non-model instances will be cast into model instances first</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": false,
            "name": "append",
            "doc": "<p>True to add the records to the existing records in the store, false to remove the old ones first</p>\n"
          }
        ],
        "alias": null,
        "name": "loadData",
        "shortDoc": "Loads an array of data straight into the Store ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Loads an array of data straight into the Store</p>\n",
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
        "linenr": 1334,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-loadPage",
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
            "name": "page",
            "doc": "<p>The number of the page to load</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "options",
            "doc": "<p>See options for <a href=\"#/api/Ext.data.Store-method-load\" rel=\"Ext.data.Store-method-load\" class=\"docClass\">load</a></p>\n"
          }
        ],
        "alias": null,
        "name": "loadPage",
        "shortDoc": "Loads a given 'page' of data by setting the start and limit values appropriately. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Loads a given 'page' of data by setting the start and limit values appropriately. Internally this just causes a normal\nload operation, passing in calculated 'start' and 'limit' params</p>\n",
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
        "linenr": 1284,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-loadRecords",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.data.Model[]",
            "properties": [

            ],
            "optional": false,
            "name": "records",
            "doc": "<p>The array of records to load</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "options",
            "doc": "<p>{addRecords: true} to add these records to the existing records, false to remove the Store's existing records first</p>\n"
          }
        ],
        "alias": null,
        "name": "loadRecords",
        "shortDoc": "Loads an array of {@Ext.data.Model model} instances into the store, fires the datachanged event. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Loads an array of {@Ext.data.Model model} instances into the store, fires the datachanged event. This should only usually\nbe called internally when loading from the <a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">Proxy</a>, when adding records manually use <a href=\"#/api/Ext.data.Store-method-add\" rel=\"Ext.data.Store-method-add\" class=\"docClass\">add</a> instead</p>\n",
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
        "linenr": 2105,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-max",
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
            "name": "field",
            "doc": "<p>The field in each record</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "grouped",
            "doc": "<p>(Optional) True to perform the operation for each group\nin the store. The value returned will be an object literal with the key being the group\nname and the maximum in the group being the value. The grouped parameter is only honored if\nthe store has a groupField.</p>\n"
          }
        ],
        "alias": null,
        "name": "max",
        "shortDoc": "Gets the maximum value in the store. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Gets the maximum value in the store.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>The maximum value, if no items exist, undefined.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 2067,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-min",
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
            "name": "field",
            "doc": "<p>The field in each record</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "grouped",
            "doc": "<p>(Optional) True to perform the operation for each group\nin the store. The value returned will be an object literal with the key being the group\nname and the minimum in the group being the value. The grouped parameter is only honored if\nthe store has a groupField.</p>\n"
          }
        ],
        "alias": null,
        "name": "min",
        "shortDoc": "Gets the minimum value in the store. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Gets the minimum value in the store.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>The minimum value, if no items exist, undefined.</p>\n"
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.Store-method-addManagedListener\" rel=\"Ext.data.Store-method-addManagedListener\" class=\"docClass\">addManagedListener</a>.</p>\n\n<p>Adds listeners to any Observable object (or Ext.Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.Store-method-removeManagedListener\" rel=\"Ext.data.Store-method-removeManagedListener\" class=\"docClass\">removeManagedListener</a>.</p>\n\n<p>Removes listeners that were added by the <a href=\"#/api/Ext.data.Store-method-mon\" rel=\"Ext.data.Store-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
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
        "linenr": 1354,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-nextPage",
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
            "name": "options",
            "doc": "<p>See options for <a href=\"#/api/Ext.data.Store-method-load\" rel=\"Ext.data.Store-method-load\" class=\"docClass\">load</a></p>\n"
          }
        ],
        "alias": null,
        "name": "nextPage",
        "shortDoc": "Loads the next 'page' in the current data set ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Loads the next 'page' in the current data set</p>\n",
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
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.data.Store-method-fireEvent\" rel=\"Ext.data.Store-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n"
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.Store-method-addListener\" rel=\"Ext.data.Store-method-addListener\" class=\"docClass\">addListener</a>.</p>\n\n<p>Appends an event handler to this object.</p>\n",
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
        "linenr": 1381,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-prefetch",
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
            "doc": "<p>(Optional) config object, passed into the <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Ext.data.Operation</a> object before loading.\nSee <a href=\"#/api/Ext.data.Store-method-load\" rel=\"Ext.data.Store-method-load\" class=\"docClass\">load</a></p>\n"
          }
        ],
        "alias": null,
        "name": "prefetch",
        "shortDoc": "Prefetches data into the store using its configured proxy. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Prefetches data into the store using its configured <a href=\"#/api/Ext.data.Store-cfg-proxy\" rel=\"Ext.data.Store-cfg-proxy\" class=\"docClass\">proxy</a>.</p>\n",
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
        "linenr": 1415,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-prefetchPage",
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
            "name": "page",
            "doc": "<p>The page to prefetch</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "options",
            "doc": "<p>(Optional) config object, passed into the <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Ext.data.Operation</a> object before loading.\nSee <a href=\"#/api/Ext.data.Store-method-load\" rel=\"Ext.data.Store-method-load\" class=\"docClass\">load</a></p>\n"
          }
        ],
        "alias": null,
        "name": "prefetchPage",
        "shortDoc": "Prefetches a page of data. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Prefetches a page of data.</p>\n",
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
        "linenr": 1362,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-previousPage",
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
            "name": "options",
            "doc": "<p>See options for <a href=\"#/api/Ext.data.Store-method-load\" rel=\"Ext.data.Store-method-load\" class=\"docClass\">load</a></p>\n"
          }
        ],
        "alias": null,
        "name": "previousPage",
        "shortDoc": "Loads the previous 'page' in the current data set ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Loads the previous 'page' in the current data set</p>\n",
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
        "linenr": 1521,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-purgeRecords",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "purgeRecords",
        "shortDoc": "Purge the least recently used records in the prefetch if the purgeCount\nhas been exceeded. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Purge the least recently used records in the prefetch if the purgeCount\nhas been exceeded.</p>\n",
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
        "linenr": 1243,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-queryBy",
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
            "doc": "<p>The function to be called. It will be passed the following parameters:<ul>\n<li><b>record</b> : <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a><p class=\"sub-desc\">The <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">record</a>\nto test for filtering. Access field values using <a href=\"#/api/Ext.data.Model-method-get\" rel=\"Ext.data.Model-method-get\" class=\"docClass\">Ext.data.Model.get</a>.</p></li>\n<li><b>id</b> : Object<p class=\"sub-desc\">The ID of the Record passed.</p></li>\n</ul></p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to this Store.</p>\n"
          }
        ],
        "alias": null,
        "name": "queryBy",
        "shortDoc": "Query the cached records in this Store using a filtering function. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Query the cached records in this Store using a filtering function. The specified function\nwill be called with each record in this Store. If the function returns <tt>true</tt> the record is\nincluded in the results.</p>\n",
        "return": {
          "type": "Ext.util.MixedCollection",
          "properties": null,
          "name": "return",
          "doc": "<p>Returns an <a href=\"#/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">Ext.util.MixedCollection</a> of the matched records</p>\n"
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
        "linenr": 873,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-remove",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.data.Model/Ext.data.Model[]",
            "properties": [

            ],
            "optional": false,
            "name": "records",
            "doc": "<p>The <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> instance or array of instances to remove</p>\n"
          }
        ],
        "alias": null,
        "name": "remove",
        "shortDoc": "Removes the given record from the Store, firing the 'remove' event for each instance that is removed, plus a single\n'...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Removes the given record from the Store, firing the 'remove' event for each instance that is removed, plus a single\n'datachanged' event after removal.</p>\n",
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
        "linenr": 1953,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-removeAll",
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
            "name": "silent",
            "doc": "<p>Prevent the <code>clear</code> event from being fired.</p>\n"
          }
        ],
        "alias": null,
        "name": "removeAll",
        "shortDoc": "Remove all items from the store. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Remove all items from the store.</p>\n",
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
        "linenr": 924,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-removeAt",
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
            "doc": "<p>The record index</p>\n"
          }
        ],
        "alias": null,
        "name": "removeAt",
        "shortDoc": "Removes the model instance at the given index ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Removes the model instance at the given index</p>\n",
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
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.data.Store-method-addListener\" rel=\"Ext.data.Store-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope originally specified for the handler. It must be the same as the\nscope argument specified in the original call to <a href=\"#/api/Ext.data.Store-method-addListener\" rel=\"Ext.data.Store-method-addListener\" class=\"docClass\">addListener</a> or the listener will not be removed.</p>\n"
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
        "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.data.Store-method-mon\" rel=\"Ext.data.Store-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
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
        "doc": "<p>Resumes firing events (see <a href=\"#/api/Ext.data.Store-method-suspendEvents\" rel=\"Ext.data.Store-method-suspendEvents\" class=\"docClass\">suspendEvents</a>).</p>\n\n<p>If events were suspended using the <code>**queueSuspended**</code> parameter, then all events fired\nduring event suspension will be sent to any listeners now.</p>\n",
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
        "linenr": 2014,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-method-sum",
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
            "name": "field",
            "doc": "<p>A field in each record</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "grouped",
            "doc": "<p>(Optional) True to perform the operation for each group\nin the store. The value returned will be an object literal with the key being the group\nname and the sum for that group being the value. The grouped parameter is only honored if\nthe store has a groupField.</p>\n"
          }
        ],
        "alias": null,
        "name": "sum",
        "shortDoc": "Sums the value of property for each record between start\nand end and returns the result. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>Sums the value of <tt>property</tt> for each <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">record</a> between <tt>start</tt>\nand <tt>end</tt> and returns the result.</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>The sum</p>\n"
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
            "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.data.Store-method-resumeEvents\" rel=\"Ext.data.Store-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events.</p>\n"
          }
        ],
        "alias": null,
        "name": "suspendEvents",
        "shortDoc": "Suspends the firing of all events. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Suspends the firing of all events. (see <a href=\"#/api/Ext.data.Store-method-resumeEvents\" rel=\"Ext.data.Store-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
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
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.data.Store-method-addListener\" rel=\"Ext.data.Store-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope originally specified for the handler. It must be the same as the\nscope argument specified in the original call to <a href=\"#/api/Ext.data.Store-method-addListener\" rel=\"Ext.data.Store-method-addListener\" class=\"docClass\">addListener</a> or the listener will not be removed.</p>\n"
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.Store-method-removeListener\" rel=\"Ext.data.Store-method-removeListener\" class=\"docClass\">removeListener</a>.</p>\n\n<p>Removes an event handler.</p>\n",
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
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 271,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-property-currentPage",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "currentPage",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>The page that the Store has most recently loaded (see <a href=\"#/api/Ext.data.Store-method-loadPage\" rel=\"Ext.data.Store-method-loadPage\" class=\"docClass\">loadPage</a>)</p>\n"
      },
      {
        "static": false,
        "type": "Ext.util.MixedCollection",
        "inheritable": false,
        "properties": null,
        "linenr": 382,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-property-data",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "data",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>The MixedCollection that holds this store's local cache of records</p>\n"
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
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 257,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-property-groupDir",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "groupDir",
        "shortDoc": "The direction in which sorting should be applied when grouping. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>The direction in which sorting should be applied when grouping. Defaults to \"ASC\" - the other supported value is \"DESC\"</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 248,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-property-groupField",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "groupField",
        "shortDoc": "The (optional) field by which to group data in the store. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>The (optional) field by which to group data in the store. Internally, grouping is very similar to sorting - the\ngroupField and <a href=\"#/api/Ext.data.Store-property-groupDir\" rel=\"Ext.data.Store-property-groupDir\" class=\"docClass\">groupDir</a> are injected as the first sorter (see <a href=\"#/api/Ext.data.Store-method-sort\" rel=\"Ext.data.Store-method-sort\" class=\"docClass\">sort</a>). Stores support a single\nlevel of grouping, and groups can be fetched via the <a href=\"#/api/Ext.data.Store-method-getGroups\" rel=\"Ext.data.Store-method-getGroups\" class=\"docClass\">getGroups</a> method.</p>\n"
      },
      {
        "static": false,
        "type": "Ext.util.MixedCollection",
        "inheritable": false,
        "properties": null,
        "linenr": 404,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-property-groupers",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "groupers",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>The collection of <a href=\"#/api/Ext.util.Grouper\" rel=\"Ext.util.Grouper\" class=\"docClass\">Groupers</a> currently applied to this Store</p>\n"
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
        "type": "Ext.util.MixedCollection",
        "inheritable": false,
        "properties": null,
        "linenr": 1172,
        "owner": "Ext.data.Store",
        "html_filename": "Store2.html",
        "href": "Store2.html#Ext-data-Store-property-snapshot",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "snapshot",
        "shortDoc": "A pristine (unfiltered) collection of the records in this store. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
        "doc": "<p>A pristine (unfiltered) collection of the records in this store. This is used to reinstate\nrecords when a filter is removed or changed</p>\n"
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
  "author": "Ed Spencer",
  "superclasses": [
    "Ext.Base",
    "Ext.data.AbstractStore"
  ],
  "alias": null,
  "name": "Ext.data.Store",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Store.js",
  "doc": "<p>The Store class encapsulates a client side cache of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> objects. Stores load\ndata via a <a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">Proxy</a>, and also provide functions for <a href=\"#/api/Ext.data.Store-method-sort\" rel=\"Ext.data.Store-method-sort\" class=\"docClass\">sorting</a>,\n<a href=\"#/api/Ext.data.Store-method-filter\" rel=\"Ext.data.Store-method-filter\" class=\"docClass\">filtering</a> and querying the <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">model</a> instances contained within it.</p>\n\n\n\n\n<p>Creating a Store is easy - we just tell it the Model and the Proxy to use to load and save its data:</p>\n\n\n\n\n<pre><code>// Set up a <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">model</a> to use in our Store\nExt.define('User', {\n    extend: 'Ext.data.Model',\n    fields: [\n        {name: 'firstName', type: 'string'},\n        {name: 'lastName',  type: 'string'},\n        {name: 'age',       type: 'int'},\n        {name: 'eyeColor',  type: 'string'}\n    ]\n});\n\nvar myStore = Ext.create('Ext.data.Store', {\n    model: 'User',\n    proxy: {\n        type: 'ajax',\n        url : '/users.json',\n        reader: {\n            type: 'json',\n            root: 'users'\n        }\n    },\n    autoLoad: true\n});\n</code></pre>\n\n\n\n\n<p>In the example above we configured an AJAX proxy to load data from the url '/users.json'. We told our Proxy\nto use a <a href=\"#/api/Ext.data.reader.Json\" rel=\"Ext.data.reader.Json\" class=\"docClass\">JsonReader</a> to parse the response from the server into Model object -\n<a href=\"#/api/Ext.data.reader.Json\" rel=\"Ext.data.reader.Json\" class=\"docClass\">see the docs on JsonReader</a> for details.</p>\n\n\n\n\n<p><u>Inline data</u></p>\n\n\n\n\n<p>Stores can also load data inline. Internally, Store converts each of the objects we pass in as <a href=\"#/api/Ext.data.Store-property-data\" rel=\"Ext.data.Store-property-data\" class=\"docClass\">data</a>\ninto Model instances:</p>\n\n\n\n\n<pre><code>Ext.create('Ext.data.Store', {\n    model: 'User',\n    data : [\n        {firstName: 'Ed',    lastName: 'Spencer'},\n        {firstName: 'Tommy', lastName: 'Maintz'},\n        {firstName: 'Aaron', lastName: 'Conran'},\n        {firstName: 'Jamie', lastName: 'Avins'}\n    ]\n});\n</code></pre>\n\n\n\n\n<p>Loading inline data using the method above is great if the data is in the correct format already (e.g. it doesn't need\nto be processed by a <a href=\"#/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">reader</a>). If your inline data requires processing to decode the data structure,\nuse a <a href=\"#/api/Ext.data.proxy.Memory\" rel=\"Ext.data.proxy.Memory\" class=\"docClass\">MemoryProxy</a> instead (see the <a href=\"#/api/Ext.data.proxy.Memory\" rel=\"Ext.data.proxy.Memory\" class=\"docClass\">MemoryProxy</a> docs for an example).</p>\n\n\n\n\n<p>Additional data can also be loaded locally using <a href=\"#/api/Ext.data.Store-method-add\" rel=\"Ext.data.Store-method-add\" class=\"docClass\">add</a>.</p>\n\n\n\n\n<p><u>Loading Nested Data</u></p>\n\n\n\n\n<p>Applications often need to load sets of associated data - for example a CRM system might load a User and her Orders.\nInstead of issuing an AJAX request for the User and a series of additional AJAX requests for each Order, we can load a nested dataset\nand allow the Reader to automatically populate the associated models. Below is a brief example, see the <a href=\"#/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Ext.data.reader.Reader</a> intro\ndocs for a full explanation:</p>\n\n\n\n\n<pre><code>var store = Ext.create('Ext.data.Store', {\n    autoLoad: true,\n    model: \"User\",\n    proxy: {\n        type: 'ajax',\n        url : 'users.json',\n        reader: {\n            type: 'json',\n            root: 'users'\n        }\n    }\n});\n</code></pre>\n\n\n\n\n<p>Which would consume a response like this:</p>\n\n\n\n\n<pre><code>{\n    \"users\": [\n        {\n            \"id\": 1,\n            \"name\": \"Ed\",\n            \"orders\": [\n                {\n                    \"id\": 10,\n                    \"total\": 10.76,\n                    \"status\": \"invoiced\"\n                },\n                {\n                    \"id\": 11,\n                    \"total\": 13.45,\n                    \"status\": \"shipped\"\n                }\n            ]\n        }\n    ]\n}\n</code></pre>\n\n\n\n\n<p>See the <a href=\"#/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Ext.data.reader.Reader</a> intro docs for a full explanation.</p>\n\n\n\n\n<p><u>Filtering and Sorting</u></p>\n\n\n\n\n<p>Stores can be sorted and filtered - in both cases either remotely or locally. The <a href=\"#/api/Ext.data.Store-property-sorters\" rel=\"Ext.data.Store-property-sorters\" class=\"docClass\">sorters</a> and <a href=\"#/api/Ext.data.Store-property-filters\" rel=\"Ext.data.Store-property-filters\" class=\"docClass\">filters</a> are\nheld inside <a href=\"#/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">MixedCollection</a> instances to make them easy to manage. Usually it is sufficient to\neither just specify sorters and filters in the Store configuration or call <a href=\"#/api/Ext.data.Store-method-sort\" rel=\"Ext.data.Store-method-sort\" class=\"docClass\">sort</a> or <a href=\"#/api/Ext.data.Store-method-filter\" rel=\"Ext.data.Store-method-filter\" class=\"docClass\">filter</a>:\n\n<pre><code>var store = Ext.create('Ext.data.Store', {\n    model: 'User',\n    sorters: [\n        {\n            property : 'age',\n            direction: 'DESC'\n        },\n        {\n            property : 'firstName',\n            direction: 'ASC'\n        }\n    ],\n\n    filters: [\n        {\n            property: 'firstName',\n            value   : /Ed/\n        }\n    ]\n});\n</code></pre>\n\n<p>The new Store will keep the configured sorters and filters in the MixedCollection instances mentioned above. By default, sorting\nand filtering are both performed locally by the Store - see <a href=\"#/api/Ext.data.Store-cfg-remoteSort\" rel=\"Ext.data.Store-cfg-remoteSort\" class=\"docClass\">remoteSort</a> and <a href=\"#/api/Ext.data.Store-cfg-remoteFilter\" rel=\"Ext.data.Store-cfg-remoteFilter\" class=\"docClass\">remoteFilter</a> to allow the server to\nperform these operations instead.</p>\n\n<p>Filtering and sorting after the Store has been instantiated is also easy. Calling <a href=\"#/api/Ext.data.Store-method-filter\" rel=\"Ext.data.Store-method-filter\" class=\"docClass\">filter</a> adds another filter to the Store\nand automatically filters the dataset (calling <a href=\"#/api/Ext.data.Store-method-filter\" rel=\"Ext.data.Store-method-filter\" class=\"docClass\">filter</a> with no arguments simply re-applies all existing filters). Note that by\ndefault <a href=\"#/api/Ext.data.Store-cfg-sortOnFilter\" rel=\"Ext.data.Store-cfg-sortOnFilter\" class=\"docClass\">sortOnFilter</a> is set to true, which means that your sorters are automatically reapplied if using local sorting.</p>\n\n<pre><code>store.filter('eyeColor', 'Brown');\n</code></pre>\n\n<p>Change the sorting at any time by calling <a href=\"#/api/Ext.data.Store-method-sort\" rel=\"Ext.data.Store-method-sort\" class=\"docClass\">sort</a>:</p>\n\n<pre><code>store.sort('height', 'ASC');\n</code></pre>\n\n<p>Note that all existing sorters will be removed in favor of the new sorter data (if <a href=\"#/api/Ext.data.Store-method-sort\" rel=\"Ext.data.Store-method-sort\" class=\"docClass\">sort</a> is called with no arguments,\nthe existing sorters are just reapplied instead of being removed). To keep existing sorters and add new ones, just add them\nto the MixedCollection:</p>\n\n<pre><code>store.sorters.add(new Ext.util.Sorter({\n    property : 'shoeSize',\n    direction: 'ASC'\n}));\n\nstore.sort();\n</code></pre>\n\n<p><u>Registering with StoreManager</u></p>\n\n<p>Any Store that is instantiated with a <a href=\"#/api/Ext.data.Store-cfg-storeId\" rel=\"Ext.data.Store-cfg-storeId\" class=\"docClass\">storeId</a> will automatically be registed with the <a href=\"#/api/Ext.data.StoreManager\" rel=\"Ext.data.StoreManager\" class=\"docClass\">StoreManager</a>.\nThis makes it easy to reuse the same store in multiple views:</p>\n\n \n<pre><code>//this store can be used several times\nExt.create('Ext.data.Store', {\n    model: 'User',\n    storeId: 'usersStore'\n});\n\nnew Ext.List({\n    store: 'usersStore',\n\n    //other config goes here\n});\n\nnew Ext.view.View({\n    store: 'usersStore',\n\n    //other config goes here\n});\n</code></pre>\n\n<p><u>Further Reading</u></p>\n\n<p>Stores are backed up by an ecosystem of classes that enables their operation. To gain a full understanding of these\npieces and how they fit together, see:</p>\n\n<ul style=\"list-style-type: disc; padding-left: 25px\">\n<li><a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">Proxy</a> - overview of what Proxies are and how they are used</li>\n<li><a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> - the core class in the data package</li>\n<li><a href=\"#/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Reader</a> - used by any subclass of <a href=\"#/api/Ext.data.proxy.Server\" rel=\"Ext.data.proxy.Server\" class=\"docClass\">ServerProxy</a> to read a response</li>\n</ul>\n\n",
  "alternateClassNames": [

  ]
});