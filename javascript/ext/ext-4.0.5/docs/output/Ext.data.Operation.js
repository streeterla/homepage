Ext.data.JsonP.Ext_data_Operation({
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
  "extends": "Ext.Base",
  "html_filename": "Operation.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "Operation.html#Ext-data-Operation",
  "subclasses": [

  ],
  "protected": false,
  "members": {
    "css_var": [

    ],
    "cfg": [
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 18,
        "owner": "Ext.data.Operation",
        "html_filename": "Operation.html",
        "href": "Operation.html#Ext-data-Operation-cfg-action",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "action",
        "shortDoc": "The action being performed by this Operation. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Operation.js",
        "doc": "<p>The action being performed by this Operation. Should be one of 'create', 'read', 'update' or 'destroy'.</p>\n"
      },
      {
        "static": false,
        "type": "Ext.data.Batch",
        "inheritable": false,
        "properties": null,
        "linenr": 54,
        "owner": "Ext.data.Operation",
        "html_filename": "Operation.html",
        "href": "Operation.html#Ext-data-Operation-cfg-batch",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "batch",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Operation.js",
        "doc": "<p>The batch that this Operation is a part of.</p>\n"
      },
      {
        "static": false,
        "type": "Function",
        "inheritable": false,
        "properties": null,
        "linenr": 60,
        "owner": "Ext.data.Operation",
        "html_filename": "Operation.html",
        "href": "Operation.html#Ext-data-Operation-cfg-callback",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "callback",
        "shortDoc": "Function to execute when operation completed. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Operation.js",
        "doc": "<p>Function to execute when operation completed.  Will be called with the following parameters:</p>\n\n<ul>\n<li>records : Array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> objects.</li>\n<li>operation : The Ext.data.Operation itself.</li>\n<li>success : True when operation completed successfully.</li>\n</ul>\n\n"
      },
      {
        "static": false,
        "type": "Ext.util.Filter[]",
        "inheritable": false,
        "properties": null,
        "linenr": 24,
        "owner": "Ext.data.Operation",
        "html_filename": "Operation.html",
        "href": "Operation.html#Ext-data-Operation-cfg-filters",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "filters",
        "shortDoc": "Optional array of filter objects. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Operation.js",
        "doc": "<p>Optional array of filter objects. Only applies to 'read' actions.</p>\n"
      },
      {
        "static": false,
        "type": "Ext.util.Grouper",
        "inheritable": false,
        "properties": null,
        "linenr": 36,
        "owner": "Ext.data.Operation",
        "html_filename": "Operation.html",
        "href": "Operation.html#Ext-data-Operation-cfg-group",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "group",
        "shortDoc": "Optional grouping configuration. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Operation.js",
        "doc": "<p>Optional grouping configuration. Only applies to 'read' actions where grouping is desired.</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 48,
        "owner": "Ext.data.Operation",
        "html_filename": "Operation.html",
        "href": "Operation.html#Ext-data-Operation-cfg-limit",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "limit",
        "shortDoc": "The number of records to load. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Operation.js",
        "doc": "<p>The number of records to load. Used on 'read' actions when paging is being used.</p>\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 70,
        "owner": "Ext.data.Operation",
        "html_filename": "Operation.html",
        "href": "Operation.html#Ext-data-Operation-cfg-scope",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "scope",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Operation.js",
        "doc": "<p>Scope for the <a href=\"#/api/Ext.data.Operation-cfg-callback\" rel=\"Ext.data.Operation-cfg-callback\" class=\"docClass\">callback</a> function.</p>\n"
      },
      {
        "static": false,
        "type": "Ext.util.Sorter[]",
        "inheritable": false,
        "properties": null,
        "linenr": 30,
        "owner": "Ext.data.Operation",
        "html_filename": "Operation.html",
        "href": "Operation.html#Ext-data-Operation-cfg-sorters",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "sorters",
        "shortDoc": "Optional array of sorter objects. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Operation.js",
        "doc": "<p>Optional array of sorter objects. Only applies to 'read' actions.</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 42,
        "owner": "Ext.data.Operation",
        "html_filename": "Operation.html",
        "href": "Operation.html#Ext-data-Operation-cfg-start",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "start",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Operation.js",
        "doc": "<p>The start index (offset), used in paging when running a 'read' action.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 11,
        "owner": "Ext.data.Operation",
        "html_filename": "Operation.html",
        "href": "Operation.html#Ext-data-Operation-cfg-synchronous",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "synchronous",
        "shortDoc": "True if this Operation is to be executed synchronously (defaults to true). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Operation.js",
        "doc": "<p>True if this Operation is to be executed synchronously (defaults to true). This property is inspected by a\n<a href=\"#/api/Ext.data.Batch\" rel=\"Ext.data.Batch\" class=\"docClass\">Batch</a> to see if a series of Operations can be executed in parallel or not.</p>\n"
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
        "linenr": 134,
        "owner": "Ext.data.Operation",
        "html_filename": "Operation.html",
        "href": "Operation.html#Ext-data-Operation-method-constructor",
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
            "doc": "<p>(optional) Config object.</p>\n"
          }
        ],
        "alias": null,
        "name": "constructor",
        "shortDoc": "Creates new Operation object. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Operation.js",
        "doc": "<p>Creates new Operation object.</p>\n",
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
        "linenr": 296,
        "owner": "Ext.data.Operation",
        "html_filename": "Operation.html",
        "href": "Operation.html#Ext-data-Operation-method-allowWrite",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "allowWrite",
        "shortDoc": "Checks whether this operation should cause writing to occur. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Operation.js",
        "doc": "<p>Checks whether this operation should cause writing to occur.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>Whether the operation should cause a write to occur.</p>\n"
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
        "linenr": 142,
        "owner": "Ext.data.Operation",
        "html_filename": "Operation.html",
        "href": "Operation.html#Ext-data-Operation-method-commitRecords",
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
            "name": "serverRecords",
            "doc": "<p>An array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> objects returned by\nthe server.</p>\n"
          }
        ],
        "alias": null,
        "name": "commitRecords",
        "shortDoc": "This method is called to commit data to this instance's records given the records in\nthe server response. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Operation.js",
        "doc": "<p>This method is called to commit data to this instance's records given the records in\nthe server response. This is followed by calling <a href=\"#/api/Ext.data.Model-method-commit\" rel=\"Ext.data.Model-method-commit\" class=\"docClass\">Ext.data.Model.commit</a> on all\nthose records (for 'create' and 'update' actions).</p>\n\n<p>If this <a href=\"#/api/Ext.data.Operation-cfg-action\" rel=\"Ext.data.Operation-cfg-action\" class=\"docClass\">action</a> is 'destroy', any server records are ignored and the\n<a href=\"#/api/Ext.data.Model-method-commit\" rel=\"Ext.data.Model-method-commit\" class=\"docClass\">Ext.data.Model.commit</a> method is not called.</p>\n",
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
        "linenr": 227,
        "owner": "Ext.data.Operation",
        "html_filename": "Operation.html",
        "href": "Operation.html#Ext-data-Operation-method-getError",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getError",
        "shortDoc": "Returns the error string or object that was set using setException ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Operation.js",
        "doc": "<p>Returns the error string or object that was set using <a href=\"#/api/Ext.data.Operation-method-setException\" rel=\"Ext.data.Operation-method-setException\" class=\"docClass\">setException</a></p>\n",
        "return": {
          "type": "String/Object",
          "properties": null,
          "name": "return",
          "doc": "<p>The error object</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 235,
        "owner": "Ext.data.Operation",
        "html_filename": "Operation.html",
        "href": "Operation.html#Ext-data-Operation-method-getRecords",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getRecords",
        "shortDoc": "Returns an array of Ext.data.Model instances as set by the Proxy. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Operation.js",
        "doc": "<p>Returns an array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> instances as set by the Proxy.</p>\n",
        "return": {
          "type": "Ext.data.Model[]",
          "properties": null,
          "name": "return",
          "doc": "<p>Any loaded Records</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 245,
        "owner": "Ext.data.Operation",
        "html_filename": "Operation.html",
        "href": "Operation.html#Ext-data-Operation-method-getResultSet",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getResultSet",
        "shortDoc": "Returns the ResultSet object (if set by the Proxy). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Operation.js",
        "doc": "<p>Returns the ResultSet object (if set by the Proxy). This object will contain the <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">model</a>\ninstances as well as meta data such as number of instances fetched, number available etc</p>\n",
        "return": {
          "type": "Ext.data.ResultSet",
          "properties": null,
          "name": "return",
          "doc": "<p>The ResultSet object</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 219,
        "owner": "Ext.data.Operation",
        "html_filename": "Operation.html",
        "href": "Operation.html#Ext-data-Operation-method-hasException",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "hasException",
        "shortDoc": "Returns true if this Operation encountered an exception (see also getError) ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Operation.js",
        "doc": "<p>Returns true if this Operation encountered an exception (see also <a href=\"#/api/Ext.data.Operation-method-getError\" rel=\"Ext.data.Operation-method-getError\" class=\"docClass\">getError</a>)</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if there was an exception</p>\n"
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
        "linenr": 271,
        "owner": "Ext.data.Operation",
        "html_filename": "Operation.html",
        "href": "Operation.html#Ext-data-Operation-method-isComplete",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isComplete",
        "shortDoc": "Returns true if the Operation has been completed ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Operation.js",
        "doc": "<p>Returns true if the Operation has been completed</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if the Operation is complete</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 263,
        "owner": "Ext.data.Operation",
        "html_filename": "Operation.html",
        "href": "Operation.html#Ext-data-Operation-method-isRunning",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isRunning",
        "shortDoc": "Returns true if the Operation has been started but has not yet completed. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Operation.js",
        "doc": "<p>Returns true if the Operation has been started but has not yet completed.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if the Operation is currently running</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 254,
        "owner": "Ext.data.Operation",
        "html_filename": "Operation.html",
        "href": "Operation.html#Ext-data-Operation-method-isStarted",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isStarted",
        "shortDoc": "Returns true if the Operation has been started. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Operation.js",
        "doc": "<p>Returns true if the Operation has been started. Note that the Operation may have started AND completed, see\n<a href=\"#/api/Ext.data.Operation-method-isRunning\" rel=\"Ext.data.Operation-method-isRunning\" class=\"docClass\">isRunning</a> to test if the Operation is currently running.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if the Operation has started</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 193,
        "owner": "Ext.data.Operation",
        "html_filename": "Operation.html",
        "href": "Operation.html#Ext-data-Operation-method-setCompleted",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "setCompleted",
        "shortDoc": "Marks the Operation as completed. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Operation.js",
        "doc": "<p>Marks the Operation as completed.</p>\n",
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
        "linenr": 208,
        "owner": "Ext.data.Operation",
        "html_filename": "Operation.html",
        "href": "Operation.html#Ext-data-Operation-method-setException",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/Object",
            "properties": [

            ],
            "optional": true,
            "name": "error",
            "doc": "<p>(optional) error string/object</p>\n"
          }
        ],
        "alias": null,
        "name": "setException",
        "shortDoc": "Marks the Operation as having experienced an exception. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Operation.js",
        "doc": "<p>Marks the Operation as having experienced an exception. Can be supplied with an option error message/object.</p>\n",
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
        "linenr": 185,
        "owner": "Ext.data.Operation",
        "html_filename": "Operation.html",
        "href": "Operation.html#Ext-data-Operation-method-setStarted",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "setStarted",
        "shortDoc": "Marks the Operation as started. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Operation.js",
        "doc": "<p>Marks the Operation as started.</p>\n",
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
        "linenr": 201,
        "owner": "Ext.data.Operation",
        "html_filename": "Operation.html",
        "href": "Operation.html#Ext-data-Operation-method-setSuccessful",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "setSuccessful",
        "shortDoc": "Marks the Operation as successful. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Operation.js",
        "doc": "<p>Marks the Operation as successful.</p>\n",
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
        "linenr": 279,
        "owner": "Ext.data.Operation",
        "html_filename": "Operation.html",
        "href": "Operation.html#Ext-data-Operation-method-wasSuccessful",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "wasSuccessful",
        "shortDoc": "Returns true if the Operation has completed and was successful ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Operation.js",
        "doc": "<p>Returns true if the Operation has completed and was successful</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if successful</p>\n"
        }
      }
    ],
    "property": [
      {
        "static": false,
        "type": "RegExp",
        "inheritable": false,
        "properties": null,
        "linenr": 120,
        "owner": "Ext.data.Operation",
        "html_filename": "Operation.html",
        "href": "Operation.html#Ext-data-Operation-property-actionCommitRecordsRe",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "actionCommitRecordsRe",
        "shortDoc": "The RegExp used to categorize actions that require record commits. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Operation.js",
        "doc": "<p>The RegExp used to categorize actions that require record commits. This defaults to\nmatch 'create' and 'update'.</p>\n"
      },
      {
        "static": false,
        "type": "RegExp",
        "inheritable": false,
        "properties": null,
        "linenr": 127,
        "owner": "Ext.data.Operation",
        "html_filename": "Operation.html",
        "href": "Operation.html#Ext-data-Operation-property-actionSkipSyncRe",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "actionSkipSyncRe",
        "shortDoc": "The RegExp used to categorize actions that skip local record synchronization. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Operation.js",
        "doc": "<p>The RegExp used to categorize actions that skip local record synchronization. This defaults\nto match 'destroy'.</p>\n"
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
  "author": "Ed Spencer",
  "superclasses": [
    "Ext.Base"
  ],
  "alias": null,
  "name": "Ext.data.Operation",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Operation.js",
  "doc": "<p>Represents a single read or write operation performed by a <a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">Proxy</a>. Operation objects are\nused to enable communication between Stores and Proxies. Application developers should rarely need to interact with\nOperation objects directly.</p>\n\n<p>Several Operations can be batched together in a <a href=\"#/api/Ext.data.Batch\" rel=\"Ext.data.Batch\" class=\"docClass\">batch</a>.</p>\n",
  "alternateClassNames": [

  ]
});