Ext.data.JsonP.Ext_data_NodeInterface({
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
        "inheritable": false,
        "linenr": 42,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-decorate",
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
            "doc": "<p>The Record you want to decorate the prototype of.</p>\n"
          }
        ],
        "alias": null,
        "name": "decorate",
        "shortDoc": "This method allows you to decorate a Record's prototype to implement the NodeInterface. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>This method allows you to decorate a Record's prototype to implement the NodeInterface.\nThis adds a set of methods, new events, new properties and new fields on every Record\nwith the same Model as the passed Record.</p>\n",
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
  "extends": "Ext.Base",
  "html_filename": "NodeInterface.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "NodeInterface.html#Ext-data-NodeInterface",
  "subclasses": [

  ],
  "protected": false,
  "members": {
    "css_var": [

    ],
    "cfg": [

    ],
    "css_mixin": [

    ],
    "event": [
      {
        "static": false,
        "inheritable": false,
        "linenr": 108,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-append",
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
        "alias": null,
        "name": "append",
        "shortDoc": "Fires when a new child node is appended ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Fires when a new child node is appended</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 144,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-beforeappend",
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
        "alias": null,
        "name": "beforeappend",
        "shortDoc": "Fires before a new child is appended, return false to cancel the append. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Fires before a new child is appended, return false to cancel the append.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 200,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-beforecollapse",
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
        "alias": null,
        "name": "beforecollapse",
        "shortDoc": "Fires before this node is collapsed. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Fires before this node is collapsed.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 193,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-beforeexpand",
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
        "alias": null,
        "name": "beforeexpand",
        "shortDoc": "Fires before this node is expanded. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Fires before this node is expanded.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 170,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-beforeinsert",
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
        "alias": null,
        "name": "beforeinsert",
        "shortDoc": "Fires before a new child is inserted, return false to cancel the insert. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Fires before a new child is inserted, return false to cancel the insert.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 160,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-beforemove",
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
        "alias": null,
        "name": "beforemove",
        "shortDoc": "Fires before this node is moved to a new location in the tree. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Fires before this node is moved to a new location in the tree. Return false to cancel the move.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 152,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-beforeremove",
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
        "alias": null,
        "name": "beforeremove",
        "shortDoc": "Fires before a child is removed, return false to cancel the remove. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Fires before a child is removed, return false to cancel the remove.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 186,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-collapse",
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
        "alias": null,
        "name": "collapse",
        "shortDoc": "Fires when this node is collapsed. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Fires when this node is collapsed.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 179,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-expand",
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
        "alias": null,
        "name": "expand",
        "shortDoc": "Fires when this node is expanded. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Fires when this node is expanded.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 135,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-insert",
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
        "alias": null,
        "name": "insert",
        "shortDoc": "Fires when a new child node is inserted. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Fires when a new child node is inserted.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 125,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-move",
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
        "alias": null,
        "name": "move",
        "shortDoc": "Fires when this node is moved to a new location in the tree ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Fires when this node is moved to a new location in the tree</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 117,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-remove",
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
        "alias": null,
        "name": "remove",
        "shortDoc": "Fires when a child node is removed ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Fires when a child node is removed</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 207,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-sort",
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
            "doc": "<p>This node.</p>\n"
          },
          {
            "type": "Ext.data.NodeInterface[]",
            "properties": [

            ],
            "optional": false,
            "name": "childNodes",
            "doc": "<p>The childNodes of this node.</p>\n"
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
        "shortDoc": "Fires when this node's childNodes are sorted. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Fires when this node's childNodes are sorted.</p>\n"
      }
    ],
    "method": [
      {
        "static": false,
        "inheritable": false,
        "linenr": 362,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-appendChild",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.data.NodeInterface/Ext.data.NodeInterface[]",
            "properties": [

            ],
            "optional": false,
            "name": "node",
            "doc": "<p>The node or Array of nodes to append</p>\n"
          }
        ],
        "alias": null,
        "name": "appendChild",
        "shortDoc": "Insert node(s) as the last child node of this node. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Insert node(s) as the last child node of this node.</p>\n\n\n<p>If the node was previously a child node of another parent node, it will be removed from that node first.</p>\n\n",
        "return": {
          "type": "Ext.data.NodeInterface",
          "properties": null,
          "name": "return",
          "doc": "<p>The appended node if single append, or null if an array was passed</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 757,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-bubble",
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
            "doc": "<p>The function to call</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the current Node.</p>\n"
          },
          {
            "type": "Array",
            "properties": [

            ],
            "optional": true,
            "name": "args",
            "doc": "<p>(optional) The args to call the function with (default to passing the current Node)</p>\n"
          }
        ],
        "alias": null,
        "name": "bubble",
        "shortDoc": "Bubbles up the tree from this node, calling the specified function with each node. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Bubbles up the tree from this node, calling the specified function with each node. The arguments to the function\nwill be the args provided or the current node. If the function returns false at any point,\nthe bubble is stopped.</p>\n",
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
        "linenr": 784,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-cascadeBy",
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
            "doc": "<p>The function to call</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the current Node.</p>\n"
          },
          {
            "type": "Array",
            "properties": [

            ],
            "optional": true,
            "name": "args",
            "doc": "<p>(optional) The args to call the function with (default to passing the current Node)</p>\n"
          }
        ],
        "alias": null,
        "name": "cascadeBy",
        "shortDoc": "Cascades down the tree from this node, calling the specified function with each node. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Cascades down the tree from this node, calling the specified function with each node. The arguments to the function\nwill be the args provided or the current node. If the function returns false at any point,\nthe cascade is stopped on that branch.</p>\n",
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
        "linenr": 1055,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-collapse",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "recursive",
            "doc": "<p>(Optional) True to recursively collapse all the children</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "callback",
            "doc": "<p>(Optional) The function to execute once the collapse completes</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(Optional) The scope to run the callback in</p>\n"
          }
        ],
        "alias": null,
        "name": "collapse",
        "shortDoc": "Collapse this node. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Collapse this node.</p>\n",
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
        "linenr": 1092,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-collapseChildren",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "recursive",
            "doc": "<p>(Optional) True to recursively collapse all the children</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "callback",
            "doc": "<p>(Optional) The function to execute once all the children are collapsed</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(Optional) The scope to run the callback in</p>\n"
          }
        ],
        "alias": null,
        "name": "collapseChildren",
        "shortDoc": "Collapse all the children of this node. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Collapse all the children of this node.</p>\n",
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
        "linenr": 865,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-contains",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.data.NodeInterface",
            "properties": [

            ],
            "optional": false,
            "name": "node",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "contains",
        "shortDoc": "Returns true if this node is an ancestor (at any point) of the passed node. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Returns true if this node is an ancestor (at any point) of the passed node.</p>\n",
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
        "linenr": 505,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-copy",
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
            "doc": "<p>(optional) A new id, defaults to this Node's id.</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "deep",
            "doc": "<p>(optional) <p>If passed as <code>true</code>, all child Nodes are recursively copied into the new Node.</p></p>\n\n<p>If omitted or false, the copy will have no child Nodes.</p>\n\n"
          }
        ],
        "alias": null,
        "name": "copy",
        "shortDoc": "Creates a copy (clone) of this Node. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Creates a copy (clone) of this Node.</p>\n",
        "return": {
          "type": "Ext.data.NodeInterface",
          "properties": null,
          "name": "return",
          "doc": "<p>A copy of this Node.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 244,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-createNode",
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
            "name": "node",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "createNode",
        "shortDoc": "Ensures that the passed object is an instance of a Record with the NodeInterface applied ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Ensures that the passed object is an instance of a Record with the NodeInterface applied</p>\n",
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
        "linenr": 542,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-destroy",
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
            "name": "silent",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "destroy",
        "shortDoc": "Destroys the node. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Destroys the node.</p>\n",
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
        "linenr": 804,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-eachChild",
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
            "doc": "<p>The function to call</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the current Node in the iteration.</p>\n"
          },
          {
            "type": "Array",
            "properties": [

            ],
            "optional": true,
            "name": "args",
            "doc": "<p>(optional) The args to call the function with (default to passing the current Node)</p>\n"
          }
        ],
        "alias": null,
        "name": "eachChild",
        "shortDoc": "Interates the child nodes of this node, calling the specified function with each node. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Interates the child nodes of this node, calling the specified function with each node. The arguments to the function\nwill be the args provided or the current node. If the function returns false at any point,\nthe iteration stops.</p>\n",
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
        "linenr": 974,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-expand",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "recursive",
            "doc": "<p>(Optional) True to recursively expand all the children</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "callback",
            "doc": "<p>(Optional) The function to execute once the expand completes</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(Optional) The scope to run the callback in</p>\n"
          }
        ],
        "alias": null,
        "name": "expand",
        "shortDoc": "Expand this node. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Expand this node.</p>\n",
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
        "linenr": 1024,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-expandChildren",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "recursive",
            "doc": "<p>(Optional) True to recursively expand all the children</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "callback",
            "doc": "<p>(Optional) The function to execute once all the children are expanded</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(Optional) The scope to run the callback in</p>\n"
          }
        ],
        "alias": null,
        "name": "expandChildren",
        "shortDoc": "Expand all the children of this node. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Expand all the children of this node.</p>\n",
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
        "linenr": 824,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-findChild",
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
            "name": "attribute",
            "doc": "<p>The attribute name</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "value",
            "doc": "<p>The value to search for</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "deep",
            "doc": "<p>(Optional) True to search through nodes deeper than the immediate children</p>\n"
          }
        ],
        "alias": null,
        "name": "findChild",
        "shortDoc": "Finds the first child that has the attribute with the specified value. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Finds the first child that has the attribute with the specified value.</p>\n",
        "return": {
          "type": "Ext.data.NodeInterface",
          "properties": null,
          "name": "return",
          "doc": "<p>The found child or null if none was found</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 837,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-findChildBy",
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
            "doc": "<p>A function which must return <code>true</code> if the passed Node is the required Node.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the Node being tested.</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "deep",
            "doc": "<p>(Optional) True to search through nodes deeper than the immediate children</p>\n"
          }
        ],
        "alias": null,
        "name": "findChildBy",
        "shortDoc": "Finds the first child by a custom function. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Finds the first child by a custom function. The child matches if the function passed returns <code>true</code>.</p>\n",
        "return": {
          "type": "Ext.data.NodeInterface",
          "properties": null,
          "name": "return",
          "doc": "<p>The found child or null if none was found</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 697,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-getChildAt",
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
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "getChildAt",
        "shortDoc": "Returns the child node at the specified index. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Returns the child node at the specified index.</p>\n",
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
        "linenr": 749,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-getDepth",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getDepth",
        "shortDoc": "Returns depth of this node (the root node has a depth of 0) ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Returns depth of this node (the root node has a depth of 0)</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 729,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-getPath",
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
            "name": "field",
            "doc": "<p>(optional) The field to construct the path from. Defaults to the model idProperty.</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "separator",
            "doc": "<p>(optional) A separator to use. Defaults to <code>'/'</code>.</p>\n"
          }
        ],
        "alias": null,
        "name": "getPath",
        "shortDoc": "Gets the hierarchical path from the root of the current node. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Gets the hierarchical path from the root of the current node.</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The node path</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 340,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-hasChildNodes",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "hasChildNodes",
        "shortDoc": "Returns true if this node has one or more child nodes, else false. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Returns true if this node has one or more child nodes, else false.</p>\n",
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
        "linenr": 720,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-indexOf",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.data.NodeInterface",
            "properties": [

            ],
            "optional": false,
            "name": "node",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "indexOf",
        "shortDoc": "Returns the index of a child node ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Returns the index of a child node</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>The index of the node or -1 if it was not found</p>\n"
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
        "linenr": 570,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-insertBefore",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.data.NodeInterface",
            "properties": [

            ],
            "optional": false,
            "name": "node",
            "doc": "<p>The node to insert</p>\n"
          },
          {
            "type": "Ext.data.NodeInterface",
            "properties": [

            ],
            "optional": false,
            "name": "refNode",
            "doc": "<p>The node to insert before (if null the node is appended)</p>\n"
          }
        ],
        "alias": null,
        "name": "insertBefore",
        "shortDoc": "Inserts the first node before the second node in this nodes childNodes collection. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Inserts the first node before the second node in this nodes childNodes collection.</p>\n",
        "return": {
          "type": "Ext.data.NodeInterface",
          "properties": null,
          "name": "return",
          "doc": "<p>The inserted node</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 652,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-insertChild",
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
            "doc": "<p>The zero-based index to insert the node at</p>\n"
          },
          {
            "type": "Ext.data.Model",
            "properties": [

            ],
            "optional": false,
            "name": "node",
            "doc": "<p>The node to insert</p>\n"
          }
        ],
        "alias": null,
        "name": "insertChild",
        "shortDoc": "Insert a node into this node ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Insert a node into this node</p>\n",
        "return": {
          "type": "Ext.data.Model",
          "properties": null,
          "name": "return",
          "doc": "<p>The record you just inserted</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 874,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isAncestor",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.data.NodeInterface",
            "properties": [

            ],
            "optional": false,
            "name": "node",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "isAncestor",
        "shortDoc": "Returns true if the passed node is an ancestor (at any point) of this node. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Returns true if the passed node is an ancestor (at any point) of this node.</p>\n",
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
        "linenr": 348,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isExpandable",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isExpandable",
        "shortDoc": "Returns true if this node has one or more child nodes, or if the expandable\nnode attribute is explicitly specified as...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Returns true if this node has one or more child nodes, or if the <tt>expandable</tt>\nnode attribute is explicitly specified as true, otherwise returns false.</p>\n",
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
        "linenr": 927,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isExpanded",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isExpanded",
        "shortDoc": "Returns true if this node is expaned ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Returns true if this node is expaned</p>\n",
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
        "linenr": 332,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isFirst",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isFirst",
        "shortDoc": "Returns true if this node is the first child of its parent ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Returns true if this node is the first child of its parent</p>\n",
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
        "linenr": 324,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isLast",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isLast",
        "shortDoc": "Returns true if this node is the last child of its parent ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Returns true if this node is the last child of its parent</p>\n",
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
        "linenr": 256,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isLeaf",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isLeaf",
        "shortDoc": "Returns true if this node is a leaf ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Returns true if this node is a leaf</p>\n",
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
        "linenr": 935,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isLoaded",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isLoaded",
        "shortDoc": "Returns true if this node is loaded ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Returns true if this node is loaded</p>\n",
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
        "linenr": 943,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isLoading",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isLoading",
        "shortDoc": "Returns true if this node is loading ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Returns true if this node is loading</p>\n",
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
        "linenr": 951,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isRoot",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isRoot",
        "shortDoc": "Returns true if this node is the root node ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Returns true if this node is the root node</p>\n",
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
        "linenr": 959,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isVisible",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isVisible",
        "shortDoc": "Returns true if this node is visible ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Returns true if this node is visible</p>\n",
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
        "linenr": 668,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-remove",
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
            "name": "destroy",
            "doc": "<p><tt>true</tt> to destroy the node upon removal. Defaults to <tt>false</tt>.</p>\n"
          }
        ],
        "alias": null,
        "name": "remove",
        "shortDoc": "Removes this node from its parent ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Removes this node from its parent</p>\n",
        "return": {
          "type": "Ext.data.NodeInterface",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 682,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-removeAll",
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
            "name": "destroy",
            "doc": "<p><tt>true</tt> to destroy the node upon removal. Defaults to <tt>false</tt>.</p>\n"
          }
        ],
        "alias": null,
        "name": "removeAll",
        "shortDoc": "Removes all child nodes from this node. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Removes all child nodes from this node.</p>\n",
        "return": {
          "type": "Ext.data.NodeInterface",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 451,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-removeChild",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.data.NodeInterface",
            "properties": [

            ],
            "optional": false,
            "name": "node",
            "doc": "<p>The node to remove</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": false,
            "name": "destroy",
            "doc": "<p><tt>true</tt> to destroy the node upon removal. Defaults to <tt>false</tt>.</p>\n"
          }
        ],
        "alias": null,
        "name": "removeChild",
        "shortDoc": "Removes a child node from this node. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Removes a child node from this node.</p>\n",
        "return": {
          "type": "Ext.data.NodeInterface",
          "properties": null,
          "name": "return",
          "doc": "<p>The removed node</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 706,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-replaceChild",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.data.NodeInterface",
            "properties": [

            ],
            "optional": false,
            "name": "newChild",
            "doc": "<p>The replacement node</p>\n"
          },
          {
            "type": "Ext.data.NodeInterface",
            "properties": [

            ],
            "optional": false,
            "name": "oldChild",
            "doc": "<p>The node to replace</p>\n"
          }
        ],
        "alias": null,
        "name": "replaceChild",
        "shortDoc": "Replaces one child node in this node with another. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Replaces one child node in this node with another.</p>\n",
        "return": {
          "type": "Ext.data.NodeInterface",
          "properties": null,
          "name": "return",
          "doc": "<p>The replaced node</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 890,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-sort",
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
            "doc": "<p>A function which, when passed two Nodes, returns -1, 0 or 1 depending upon required sort order.</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": false,
            "name": "recursive",
            "doc": "<p>Whether or not to apply this sort recursively</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": false,
            "name": "suppressEvent",
            "doc": "<p>Set to true to not fire a sort event.</p>\n"
          }
        ],
        "alias": null,
        "name": "sort",
        "shortDoc": "Sorts this nodes children using the supplied sort function. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Sorts this nodes children using the supplied sort function.</p>\n",
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
        "linenr": 282,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-updateInfo",
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
            "name": "silent",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "updateInfo",
        "shortDoc": "Updates general data of this node like isFirst, isLast, depth. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>Updates general data of this node like isFirst, isLast, depth. This\nmethod is internally called after a node is moved. This shouldn't\nhave to be called by the developer unless they are creating custom\nTree plugins.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      }
    ],
    "property": [
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 36,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-property-childNodes",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "childNodes",
        "shortDoc": "An array of this nodes children. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>An array of this nodes children.  Array will be empty if this node has no chidren.</p>\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 31,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-property-firstChild",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "firstChild",
        "shortDoc": "A reference to this node's first child node. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>A reference to this node's first child node. <code>null</code> if this node has no children.</p>\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 26,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-property-lastChild",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "lastChild",
        "shortDoc": "A reference to this node's last child node. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>A reference to this node's last child node. <code>null</code> if this node has no children.</p>\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 11,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-property-nextSibling",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "nextSibling",
        "shortDoc": "A reference to this node's next sibling node. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>A reference to this node's next sibling node. <code>null</code> if this node does not have a next sibling.</p>\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 21,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-property-parentNode",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "parentNode",
        "shortDoc": "A reference to this node's parent node. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>A reference to this node's parent node. <code>null</code> if this node is the root node.</p>\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 16,
        "owner": "Ext.data.NodeInterface",
        "html_filename": "NodeInterface.html",
        "href": "NodeInterface.html#Ext-data-NodeInterface-property-previousSibling",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "previousSibling",
        "shortDoc": "A reference to this node's previous sibling node. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
        "doc": "<p>A reference to this node's previous sibling node. <code>null</code> if this node does not have a previous sibling.</p>\n"
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
      }
    ]
  },
  "deprecated": null,
  "singleton": false,
  "private": false,
  "tagname": "class",
  "author": null,
  "superclasses": [
    "Ext.Base"
  ],
  "alias": null,
  "name": "Ext.data.NodeInterface",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
  "doc": "<p>This class is meant to be used as a set of methods that are applied to the prototype of a\nRecord to decorate it with a Node API. This means that models used in conjunction with a tree\nwill have all of the tree related methods available on the model. In general this class will\nnot be used directly by the developer.</p>\n",
  "alternateClassNames": [

  ]
});