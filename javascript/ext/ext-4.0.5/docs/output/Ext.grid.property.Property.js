Ext.data.JsonP.Ext_grid_property_Property({
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
        "linenr": 386,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-method-getProxy",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getProxy",
        "shortDoc": "Returns the configured Proxy for this Model ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>Returns the configured Proxy for this Model</p>\n",
        "return": {
          "type": "Ext.data.proxy.Proxy",
          "properties": null,
          "name": "return",
          "doc": "<p>The proxy</p>\n"
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
        "linenr": 396,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-method-load",
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
            "name": "id",
            "doc": "<p>The id of the model to load</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "config",
            "doc": "<p>(optional) config object containing success, failure and callback functions, plus\noptional scope</p>\n"
          }
        ],
        "alias": null,
        "name": "load",
        "shortDoc": "Asynchronously loads a model instance by id. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>Asynchronously loads a model instance by id. Sample usage:</p>\n\n<pre><code>MyApp.User = Ext.define('User', {\n    extend: 'Ext.data.Model',\n    fields: [\n        {name: 'id', type: 'int'},\n        {name: 'name', type: 'string'}\n    ]\n});\n\nMyApp.User.load(10, {\n    scope: this,\n    failure: function(record, operation) {\n        //do something if the load failed\n    },\n    success: function(record, operation) {\n        //do something if the load succeeded\n    },\n    callback: function(record, operation) {\n        //do something whether the load succeeded or failed\n    }\n});\n</code></pre>\n",
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
      },
      {
        "static": true,
        "inheritable": true,
        "linenr": 362,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-method-setProxy",
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
            "doc": "<p>The proxy</p>\n"
          }
        ],
        "alias": null,
        "name": "setProxy",
        "shortDoc": "Sets the Proxy to use for this model. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>Sets the Proxy to use for this model. Accepts any options that can be accepted by\n<a href=\"#/api/Ext-method-createByAlias\" rel=\"Ext-method-createByAlias\" class=\"docClass\">Ext.createByAlias</a>.</p>\n",
        "return": {
          "type": "Ext.data.proxy.Proxy",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      }
    ],
    "property": [

    ]
  },
  "extends": "Ext.data.Model",
  "html_filename": "Property.html",
  "allMixins": [
    "Ext.util.Observable"
  ],
  "docauthor": null,
  "href": "Property.html#Ext-grid-property-Property",
  "subclasses": [

  ],
  "protected": false,
  "members": {
    "css_var": [

    ],
    "cfg": [
      {
        "static": false,
        "type": "Object[]",
        "inheritable": false,
        "properties": null,
        "linenr": 611,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-cfg-associations",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "associations",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>An array of <a href=\"#/api/Ext.data.Association\" rel=\"Ext.data.Association\" class=\"docClass\">associations</a> for this model.</p>\n"
      },
      {
        "static": false,
        "type": "String/Object/String[]/Object[]",
        "inheritable": false,
        "properties": null,
        "linenr": 619,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-cfg-belongsTo",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "belongsTo",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>One or more <a href=\"#/api/Ext.data.BelongsToAssociation\" rel=\"Ext.data.BelongsToAssociation\" class=\"docClass\">BelongsTo associations</a> for this model.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 589,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-cfg-defaultProxyType",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "defaultProxyType",
        "shortDoc": "The string type of the default Model Proxy. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>The string type of the default Model Proxy. Defaults to 'ajax'.</p>\n"
      },
      {
        "static": false,
        "type": "Object[]/String[]",
        "inheritable": false,
        "properties": null,
        "linenr": 596,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-cfg-fields",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "fields",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>The fields for this model.</p>\n"
      },
      {
        "static": false,
        "type": "String/Object/String[]/Object[]",
        "inheritable": false,
        "properties": null,
        "linenr": 615,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-cfg-hasMany",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "hasMany",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>One or more <a href=\"#/api/Ext.data.HasManyAssociation\" rel=\"Ext.data.HasManyAssociation\" class=\"docClass\">HasMany associations</a> for this model.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 583,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-cfg-idProperty",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "idProperty",
        "shortDoc": "The name of the field treated as this Model's unique id. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>The name of the field treated as this Model's unique id. Defaults to 'id'.</p>\n"
      },
      {
        "static": false,
        "type": "String/Object",
        "inheritable": false,
        "properties": null,
        "linenr": 479,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-cfg-idgen",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "idgen",
        "shortDoc": "The id generator to use for this model. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>The id generator to use for this model. The default id generator does not generate\nvalues for the <a href=\"#/api/Ext.grid.property.Property-cfg-idProperty\" rel=\"Ext.grid.property.Property-cfg-idProperty\" class=\"docClass\">idProperty</a>.</p>\n\n<p>This can be overridden at the model level to provide a custom generator for a model.\nThe simplest form of this would be:</p>\n\n<pre><code> Ext.define('MyApp.data.MyModel', {\n     extend: 'Ext.data.Model',\n     requires: ['Ext.data.SequentialIdGenerator'],\n     idgen: 'sequential',\n     ...\n });\n</code></pre>\n\n<p>The above would generate <a href=\"#/api/Ext.data.SequentialIdGenerator\" rel=\"Ext.data.SequentialIdGenerator\" class=\"docClass\">sequential</a> id's such\nas 1, 2, 3 etc..</p>\n\n<p>Another useful id generator is <a href=\"#/api/Ext.data.UuidGenerator\" rel=\"Ext.data.UuidGenerator\" class=\"docClass\">Ext.data.UuidGenerator</a>:</p>\n\n<pre><code> Ext.define('MyApp.data.MyModel', {\n     extend: 'Ext.data.Model',\n     requires: ['Ext.data.UuidGenerator'],\n     idgen: 'uuid',\n     ...\n });\n</code></pre>\n\n<p>An id generation can also be further configured:</p>\n\n<pre><code> Ext.define('MyApp.data.MyModel', {\n     extend: 'Ext.data.Model',\n     idgen: {\n         type: 'sequential',\n         seed: 1000,\n         prefix: 'ID_'\n     }\n });\n</code></pre>\n\n<p>The above would generate id's such as ID_1000, ID_1001, ID_1002 etc..</p>\n\n<p>If multiple models share an id space, a single generator can be shared:</p>\n\n<pre><code> Ext.define('MyApp.data.MyModelX', {\n     extend: 'Ext.data.Model',\n     idgen: {\n         type: 'sequential',\n         id: 'xy'\n     }\n });\n\n Ext.define('MyApp.data.MyModelY', {\n     extend: 'Ext.data.Model',\n     idgen: {\n         type: 'sequential',\n         id: 'xy'\n     }\n });\n</code></pre>\n\n<p>For more complex, shared id generators, a custom generator is the best approach.\nSee <a href=\"#/api/Ext.data.IdGenerator\" rel=\"Ext.data.IdGenerator\" class=\"docClass\">Ext.data.IdGenerator</a> for details on creating custom id generators.</p>\n"
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
        "doc": "<p>A config object containing one or more event handlers to be added to this object during initialization. This\nshould be a valid listeners config object as specified in the <a href=\"#/api/Ext.grid.property.Property-method-addListener\" rel=\"Ext.grid.property.Property-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple\nhandlers at once.</p>\n\n<p><strong>DOM events from ExtJS <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></strong></p>\n\n<p>While <em>some</em> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this is usually\nonly done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s <strong><code><a href=\"#/api/Ext.view.View-event-itemclick\" rel=\"Ext.view.View-event-itemclick\" class=\"docClass\">itemclick</a></code></strong> event passing the node clicked on. To access DOM events directly from a\nchild element of a Component, we need to specify the <code>element</code> option to identify the Component property to add a\nDOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 566,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-cfg-persistenceProperty",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "persistenceProperty",
        "shortDoc": "The property on this Persistable object that its data is saved to. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>The property on this Persistable object that its data is saved to. Defaults to 'data'\n(e.g. all persistable data resides in this.data.)</p>\n"
      },
      {
        "static": false,
        "type": "String/Object/Ext.data.proxy.Proxy",
        "inheritable": false,
        "properties": null,
        "linenr": 628,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-cfg-proxy",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "proxy",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>The <a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">proxy</a> to use for this model.</p>\n"
      },
      {
        "static": false,
        "type": "Object[]",
        "inheritable": false,
        "properties": null,
        "linenr": 605,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-cfg-validations",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "validations",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>An array of <a href=\"#/api/Ext.data.validations\" rel=\"Ext.data.validations\" class=\"docClass\">validations</a> for this model.</p>\n"
      }
    ],
    "css_mixin": [

    ],
    "event": [

    ],
    "method": [
      {
        "static": false,
        "inheritable": false,
        "linenr": 1,
        "owner": "Ext.grid.property.Property",
        "html_filename": "Property.html",
        "href": "Property.html#Ext-grid-property-Property-method-constructor",
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
            "name": "config",
            "doc": "<p>A data object in the format:</p>\n\n<pre><code>{\n    name: [name],\n    value: [value]\n}</code></pre>\n\n\n<p>The specified value's type\nwill be read automatically by the grid to determine the type of editor to use when displaying it.</p>\n"
          }
        ],
        "alias": null,
        "name": "constructor",
        "shortDoc": " ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/grid/property/Property.js",
        "doc": "\n",
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
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.grid.property.Property-method-fireEvent\" rel=\"Ext.grid.property.Property-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n"
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
        "linenr": 838,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-method-beginEdit",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "beginEdit",
        "shortDoc": "Begins an edit. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>Begins an edit. While in edit mode, no events (e.g.. the <code>update</code> event) are relayed to the containing store.\nWhen an edit has begun, it must be followed by either <a href=\"#/api/Ext.grid.property.Property-method-endEdit\" rel=\"Ext.grid.property.Property-method-endEdit\" class=\"docClass\">endEdit</a> or <a href=\"#/api/Ext.grid.property.Property-method-cancelEdit\" rel=\"Ext.grid.property.Property-method-cancelEdit\" class=\"docClass\">cancelEdit</a>.</p>\n",
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
        "linenr": 852,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-method-cancelEdit",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "cancelEdit",
        "shortDoc": "Cancels all changes made in the current edit operation. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>Cancels all changes made in the current edit operation.</p>\n",
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
        "linenr": 977,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-method-commit",
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
            "name": "silent",
            "doc": "<p>(optional) True to skip notification of the owning store of the change.\nDefaults to false.</p>\n"
          }
        ],
        "alias": null,
        "name": "commit",
        "shortDoc": "Usually called by the Ext.data.Store which owns the model instance. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>Usually called by the <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a> which owns the model instance. Commits all changes made to the\ninstance since either creation or the last commit operation.</p>\n\n<p>Developers should subscribe to the <a href=\"#/api/Ext.data.Store-event-update\" rel=\"Ext.data.Store-event-update\" class=\"docClass\">Ext.data.Store.update</a> event to have their code notified of commit\noperations.</p>\n",
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
        "linenr": 998,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-method-copy",
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
            "name": "id",
            "doc": "<p>(optional) A new id, defaults to the id of the instance being copied.\nSee <code><a href=\"#/api/Ext.data.Model-method-id\" rel=\"Ext.data.Model-method-id\" class=\"docClass\">id</a></code>. To generate a phantom instance with a new id use:</p>\n\n<pre><code>var rec = record.copy(); // clone the record\nExt.data.Model.id(rec); // automatically generate a unique sequential id\n</code></pre>\n"
          }
        ],
        "alias": null,
        "name": "copy",
        "shortDoc": "Creates a copy (clone) of this Model instance. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>Creates a copy (clone) of this Model instance.</p>\n",
        "return": {
          "type": "Ext.data.Model",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1128,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-method-destroy",
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
            "doc": "<p>Options to pass to the proxy. Config object for <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Ext.data.Operation</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "destroy",
        "shortDoc": "Destroys the model using the configured proxy. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>Destroys the model using the configured proxy.</p>\n",
        "return": {
          "type": "Ext.data.Model",
          "properties": null,
          "name": "return",
          "doc": "<p>The Model instance</p>\n"
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
        "linenr": 869,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-method-endEdit",
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
            "doc": "<p>True to not notify the store of the change</p>\n"
          }
        ],
        "alias": null,
        "name": "endEdit",
        "shortDoc": "Ends an edit. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>Ends an edit. If any data was modified, the containing store is notified (ie, the store's <code>update</code> event will\nfire).</p>\n",
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
        "doc": "<p>Fires the specified event with the passed parameters (minus the event name, plus the <code>options</code> object passed\nto <a href=\"#/api/Ext.grid.property.Property-method-addListener\" rel=\"Ext.grid.property.Property-method-addListener\" class=\"docClass\">addListener</a>).</p>\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>) by\ncalling <a href=\"#/api/Ext.grid.property.Property-method-enableBubble\" rel=\"Ext.grid.property.Property-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n",
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
        "linenr": 722,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-method-get",
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
            "doc": "<p>The field to fetch the value for</p>\n"
          }
        ],
        "alias": null,
        "name": "get",
        "shortDoc": "Returns the value of the given field ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>Returns the value of the given field</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>The value</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1239,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-method-getAssociatedData",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getAssociatedData",
        "shortDoc": "Gets all of the data from this Models loaded associations. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>Gets all of the data from this Models <em>loaded</em> associations. It does this recursively - for example if we have a\nUser which hasMany Orders, and each Order hasMany OrderItems, it will return an object like this:</p>\n\n<pre><code>{\n    orders: [\n        {\n            id: 123,\n            status: 'shipped',\n            orderItems: [\n                ...\n            ]\n        }\n    ]\n}\n</code></pre>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>The nested data set for the Model's loaded associations</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 887,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-method-getChanges",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getChanges",
        "shortDoc": "Gets a hash of only the fields that have been modified since this Model was created or commited. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>Gets a hash of only the fields that have been modified since this Model was created or commited.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1161,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-method-getId",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getId",
        "shortDoc": "Returns the unique ID allocated to this model instance as defined by idProperty. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>Returns the unique ID allocated to this model instance as defined by <a href=\"#/api/Ext.grid.property.Property-cfg-idProperty\" rel=\"Ext.grid.property.Property-cfg-idProperty\" class=\"docClass\">idProperty</a>.</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>The id</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1038,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-method-getProxy",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getProxy",
        "shortDoc": "Returns the configured Proxy for this Model. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>Returns the configured Proxy for this Model.</p>\n",
        "return": {
          "type": "Ext.data.proxy.Proxy",
          "properties": null,
          "name": "return",
          "doc": "<p>The proxy</p>\n"
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
        "linenr": 905,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-method-isModified",
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
            "doc": "<p><a href=\"#/api/Ext.data.Field-cfg-name\" rel=\"Ext.data.Field-cfg-name\" class=\"docClass\">Ext.data.Field.name</a></p>\n"
          }
        ],
        "alias": null,
        "name": "isModified",
        "shortDoc": "Returns true if the passed field name has been modified since the load or last commit. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>Returns true if the passed field name has been <code><a href=\"#/api/Ext.grid.property.Property-property-modified\" rel=\"Ext.grid.property.Property-property-modified\" class=\"docClass\">modified</a></code> since the load or last commit.</p>\n",
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
        "linenr": 1077,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-method-isValid",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isValid",
        "shortDoc": "Checks if the model is valid. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>Checks if the model is valid. See <a href=\"#/api/Ext.grid.property.Property-method-validate\" rel=\"Ext.grid.property.Property-method-validate\" class=\"docClass\">validate</a>.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if the model is valid.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1177,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-method-join",
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
            "name": "store",
            "doc": "<p>The store to which this model has been added.</p>\n"
          }
        ],
        "alias": null,
        "name": "join",
        "shortDoc": "Tells this model instance that it has been added to a store. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>Tells this model instance that it has been added to a store.</p>\n",
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.grid.property.Property-method-addManagedListener\" rel=\"Ext.grid.property.Property-method-addManagedListener\" class=\"docClass\">addManagedListener</a>.</p>\n\n<p>Adds listeners to any Observable object (or Ext.Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.grid.property.Property-method-removeManagedListener\" rel=\"Ext.grid.property.Property-method-removeManagedListener\" class=\"docClass\">removeManagedListener</a>.</p>\n\n<p>Removes listeners that were added by the <a href=\"#/api/Ext.grid.property.Property-method-mon\" rel=\"Ext.grid.property.Property-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
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
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.grid.property.Property-method-fireEvent\" rel=\"Ext.grid.property.Property-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n"
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.grid.property.Property-method-addListener\" rel=\"Ext.grid.property.Property-method-addListener\" class=\"docClass\">addListener</a>.</p>\n\n<p>Appends an event handler to this object.</p>\n",
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
        "linenr": 944,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-method-reject",
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
            "name": "silent",
            "doc": "<p>(optional) True to skip notification of the owning store of the change.\nDefaults to false.</p>\n"
          }
        ],
        "alias": null,
        "name": "reject",
        "shortDoc": "Usually called by the Ext.data.Store to which this model instance has been joined. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>Usually called by the <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a> to which this model instance has been <a href=\"#/api/Ext.grid.property.Property-method-join\" rel=\"Ext.grid.property.Property-method-join\" class=\"docClass\">joined</a>. Rejects\nall changes made to the model instance since either creation, or the last commit operation. Modified fields are\nreverted to their original values.</p>\n\n<p>Developers should subscribe to the <a href=\"#/api/Ext.data.Store-event-update\" rel=\"Ext.data.Store-event-update\" class=\"docClass\">Ext.data.Store.update</a> event to have their code notified of reject\noperations.</p>\n",
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
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.grid.property.Property-method-addListener\" rel=\"Ext.grid.property.Property-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope originally specified for the handler. It must be the same as the\nscope argument specified in the original call to <a href=\"#/api/Ext.grid.property.Property-method-addListener\" rel=\"Ext.grid.property.Property-method-addListener\" class=\"docClass\">addListener</a> or the listener will not be removed.</p>\n"
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
        "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.grid.property.Property-method-mon\" rel=\"Ext.grid.property.Property-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
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
        "doc": "<p>Resumes firing events (see <a href=\"#/api/Ext.grid.property.Property-method-suspendEvents\" rel=\"Ext.grid.property.Property-method-suspendEvents\" class=\"docClass\">suspendEvents</a>).</p>\n\n<p>If events were suspended using the <code>**queueSuspended**</code> parameter, then all events fired\nduring event suspension will be sent to any listeners now.</p>\n",
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
        "linenr": 1085,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-method-save",
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
            "doc": "<p>Options to pass to the proxy. Config object for <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Ext.data.Operation</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "save",
        "shortDoc": "Saves the model instance using the configured proxy. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>Saves the model instance using the configured proxy.</p>\n",
        "return": {
          "type": "Ext.data.Model",
          "properties": null,
          "name": "return",
          "doc": "<p>The Model instance</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 731,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-method-set",
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
            "name": "fieldName",
            "doc": "<p>The field to set, or an object containing key/value pairs</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "value",
            "doc": "<p>The value to set</p>\n"
          }
        ],
        "alias": null,
        "name": "set",
        "shortDoc": "Sets the given field to the given value, marks the instance as dirty ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>Sets the given field to the given value, marks the instance as dirty</p>\n",
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
        "linenr": 914,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-method-setDirty",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "setDirty",
        "shortDoc": "Marks this Record as dirty. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>Marks this <strong>Record</strong> as <code><a href=\"#/api/Ext.grid.property.Property-property-dirty\" rel=\"Ext.grid.property.Property-property-dirty\" class=\"docClass\">dirty</a></code>. This method is used interally when adding <code><a href=\"#/api/Ext.grid.property.Property-property-phantom\" rel=\"Ext.grid.property.Property-property-phantom\" class=\"docClass\">phantom</a></code> records\nto a <a href=\"#/api/Ext.data.proxy.Server-cfg-writer\" rel=\"Ext.data.proxy.Server-cfg-writer\" class=\"docClass\">writer enabled store</a>.</p>\n\n<p>Marking a record <code><a href=\"#/api/Ext.grid.property.Property-property-dirty\" rel=\"Ext.grid.property.Property-property-dirty\" class=\"docClass\">dirty</a></code> causes the phantom to be returned by <a href=\"#/api/Ext.data.Store-method-getUpdatedRecords\" rel=\"Ext.data.Store-method-getUpdatedRecords\" class=\"docClass\">Ext.data.Store.getUpdatedRecords</a>\nwhere it will have a create action composed for it during <a href=\"#/api/Ext.data.Model-method-save\" rel=\"Ext.data.Model-method-save\" class=\"docClass\">model save</a> operations.</p>\n",
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
        "linenr": 1169,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-method-setId",
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
            "name": "id",
            "doc": "<p>The new id</p>\n"
          }
        ],
        "alias": null,
        "name": "setId",
        "shortDoc": "Sets the model instance's id field to the given id. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>Sets the model instance's id field to the given id.</p>\n",
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
        "linenr": 1015,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-method-setProxy",
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
            "doc": "<p>The proxy</p>\n"
          }
        ],
        "alias": null,
        "name": "setProxy",
        "shortDoc": "Sets the Proxy to use for this model. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>Sets the Proxy to use for this model. Accepts any options that can be accepted by\n<a href=\"#/api/Ext-method-createByAlias\" rel=\"Ext-method-createByAlias\" class=\"docClass\">Ext.createByAlias</a>.</p>\n",
        "return": {
          "type": "Ext.data.proxy.Proxy",
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
            "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.grid.property.Property-method-resumeEvents\" rel=\"Ext.grid.property.Property-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events.</p>\n"
          }
        ],
        "alias": null,
        "name": "suspendEvents",
        "shortDoc": "Suspends the firing of all events. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Suspends the firing of all events. (see <a href=\"#/api/Ext.grid.property.Property-method-resumeEvents\" rel=\"Ext.grid.property.Property-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
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
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.grid.property.Property-method-addListener\" rel=\"Ext.grid.property.Property-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope originally specified for the handler. It must be the same as the\nscope argument specified in the original call to <a href=\"#/api/Ext.grid.property.Property-method-addListener\" rel=\"Ext.grid.property.Property-method-addListener\" class=\"docClass\">addListener</a> or the listener will not be removed.</p>\n"
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.grid.property.Property-method-removeListener\" rel=\"Ext.grid.property.Property-method-removeListener\" class=\"docClass\">removeListener</a>.</p>\n\n<p>Removes an event handler.</p>\n",
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
        "linenr": 1189,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-method-unjoin",
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
            "name": "store",
            "doc": "<p>The store from which this model has been removed.</p>\n"
          }
        ],
        "alias": null,
        "name": "unjoin",
        "shortDoc": "Tells this model instance that it has been removed from the store. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>Tells this model instance that it has been removed from the store.</p>\n",
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
        "linenr": 1046,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-method-validate",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "validate",
        "shortDoc": "Validates the current data against all of its configured validations. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>Validates the current data against all of its configured <a href=\"#/api/Ext.grid.property.Property-cfg-validations\" rel=\"Ext.grid.property.Property-cfg-validations\" class=\"docClass\">validations</a>.</p>\n",
        "return": {
          "type": "Ext.data.Errors",
          "properties": null,
          "name": "return",
          "doc": "<p>The errors object</p>\n"
        }
      }
    ],
    "property": [
      {
        "static": false,
        "type": "Ext.util.MixedCollection",
        "inheritable": false,
        "properties": null,
        "linenr": 623,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-property-associations",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "associations",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p><a href=\"#/api/Ext.data.Association\" rel=\"Ext.data.Association\" class=\"docClass\">Associations</a> defined on this model.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 560,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-property-dirty",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "dirty",
        "shortDoc": "True if this Record has been modified. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>True if this Record has been modified. Read-only.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 554,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-property-editing",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "editing",
        "shortDoc": "Internal flag used to track whether or not the model instance is currently being edited. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>Internal flag used to track whether or not the model instance is currently being edited. Read-only.</p>\n"
      },
      {
        "static": false,
        "type": "Ext.util.MixedCollection",
        "inheritable": false,
        "properties": null,
        "linenr": 600,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-property-fields",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "fields",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>The fields defined on this model.</p>\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 664,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-property-modified",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "modified",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>Key: value pairs of all fields whose values have changed</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 576,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-property-phantom",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "phantom",
        "shortDoc": "True when the record does not yet exist in a server-side database (see setDirty). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>True when the record does not yet exist in a server-side database (see <a href=\"#/api/Ext.grid.property.Property-method-setDirty\" rel=\"Ext.grid.property.Property-method-setDirty\" class=\"docClass\">setDirty</a>).\nAny record which has a real database pk set as its id property is NOT a phantom -- it's real.</p>\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 655,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-property-raw",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "raw",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>The raw data used to create this model if created via a reader.</p>\n"
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
        "type": "Ext.data.Store",
        "inheritable": false,
        "properties": null,
        "linenr": 1182,
        "owner": "Ext.data.Model",
        "html_filename": "Model.html",
        "href": "Model.html#Ext-data-Model-property-store",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "store",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Model.js",
        "doc": "<p>The <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a> to which this Record belongs.</p>\n"
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
    "Ext.data.Model"
  ],
  "alias": null,
  "name": "Ext.grid.property.Property",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/grid/property/Property.js",
  "doc": "<p>A specific <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> type that represents a name/value pair and is made to work with the\n<a href=\"#/api/Ext.grid.property.Grid\" rel=\"Ext.grid.property.Grid\" class=\"docClass\">Ext.grid.property.Grid</a>.  Typically, Properties do not need to be created directly as they can be\ncreated implicitly by simply using the appropriate data configs either via the <a href=\"#/api/Ext.grid.property.Grid-cfg-source\" rel=\"Ext.grid.property.Grid-cfg-source\" class=\"docClass\">Ext.grid.property.Grid.source</a>\nconfig property or by calling <a href=\"#/api/Ext.grid.property.Grid-method-setSource\" rel=\"Ext.grid.property.Grid-method-setSource\" class=\"docClass\">Ext.grid.property.Grid.setSource</a>.  However, if the need arises, these records\ncan also be created explicitly as shown below.  Example usage:</p>\n\n<pre><code>var rec = new Ext.grid.property.Property({\n    name: 'birthday',\n    value: Ext.Date.parse('17/06/1962', 'd/m/Y')\n});\n// Add record to an already populated grid\ngrid.store.addSorted(rec);\n</code></pre>\n\n",
  "alternateClassNames": [
    "Ext.PropGridProperty"
  ]
});