Ext.data.JsonP.Ext_data_UuidGenerator({
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
  "extends": "Ext.data.IdGenerator",
  "html_filename": "UuidGenerator.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "UuidGenerator.html#Ext-data-UuidGenerator",
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
        "linenr": 134,
        "owner": "Ext.data.IdGenerator",
        "html_filename": "IdGenerator.html",
        "href": "IdGenerator.html#Ext-data-IdGenerator-cfg-id",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "id",
        "shortDoc": "The id by which to register a new instance. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/IdGenerator.js",
        "doc": "<p>The id by which to register a new instance. This instance can be found using the\n<a href=\"#/api/Ext.data.IdGenerator-method-get\" rel=\"Ext.data.IdGenerator-method-get\" class=\"docClass\">Ext.data.IdGenerator.get</a> static method.</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 99,
        "owner": "Ext.data.UuidGenerator",
        "html_filename": "UuidGenerator.html",
        "href": "UuidGenerator.html#Ext-data-UuidGenerator-cfg-version",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "version",
        "shortDoc": "The Version of UUID. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/UuidGenerator.js",
        "doc": "<p>The Version of UUID. Supported values are:</p>\n\n<ul>\n<li>1 : Time-based, \"sequential\" UUID.</li>\n<li>4 : Pseudo-random UUID.</li>\n</ul>\n\n\n<p>The default is 4.</p>\n"
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
        "linenr": 120,
        "owner": "Ext.data.IdGenerator",
        "html_filename": "IdGenerator.html",
        "href": "IdGenerator.html#Ext-data-IdGenerator-method-constructor",
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
            "doc": "<p>(optional) Configuration object to be applied to the new instance.</p>\n"
          }
        ],
        "alias": null,
        "name": "constructor",
        "shortDoc": "Initializes a new instance. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/IdGenerator.js",
        "doc": "<p>Initializes a new instance.</p>\n",
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
        "linenr": 144,
        "owner": "Ext.data.IdGenerator",
        "html_filename": "IdGenerator.html",
        "href": "IdGenerator.html#Ext-data-IdGenerator-method-generate",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "generate",
        "shortDoc": "Generates and returns the next id. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/IdGenerator.js",
        "doc": "<p>Generates and returns the next id. This method must be implemented by the derived\nclass.</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The next id.</p>\n"
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
        "linenr": 207,
        "owner": "Ext.data.UuidGenerator",
        "html_filename": "UuidGenerator.html",
        "href": "UuidGenerator.html#Ext-data-UuidGenerator-method-reconfigure",
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
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "reconfigure",
        "shortDoc": "Reconfigures this generator given new config properties. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/UuidGenerator.js",
        "doc": "<p>Reconfigures this generator given new config properties.</p>\n",
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
      }
    ],
    "property": [
      {
        "static": false,
        "type": "Number/Object",
        "inheritable": false,
        "properties": null,
        "linenr": 87,
        "owner": "Ext.data.UuidGenerator",
        "html_filename": "UuidGenerator.html",
        "href": "UuidGenerator.html#Ext-data-UuidGenerator-property-salt",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "salt",
        "shortDoc": "When created, this value is a 48-bit number. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/UuidGenerator.js",
        "doc": "<p>When created, this value is a 48-bit number. For computation, this value is split\ninto 32-bit parts and stored in an object with <code>hi</code> and <code>lo</code> properties.</p>\n"
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
        "type": "Number/Object",
        "inheritable": false,
        "properties": null,
        "linenr": 93,
        "owner": "Ext.data.UuidGenerator",
        "html_filename": "UuidGenerator.html",
        "href": "UuidGenerator.html#Ext-data-UuidGenerator-property-timestamp",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "timestamp",
        "shortDoc": "When created, this value is a 60-bit number. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/UuidGenerator.js",
        "doc": "<p>When created, this value is a 60-bit number. For computation, this value is split\ninto 32-bit parts and stored in an object with <code>hi</code> and <code>lo</code> properties.</p>\n"
      }
    ]
  },
  "deprecated": null,
  "singleton": false,
  "private": false,
  "tagname": "class",
  "author": "Don Griffin",
  "superclasses": [
    "Ext.Base",
    "Ext.data.IdGenerator"
  ],
  "alias": null,
  "name": "Ext.data.UuidGenerator",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/UuidGenerator.js",
  "doc": "<p>This class generates UUID's according to RFC 4122. This class has a default id property.\nThis means that a single instance is shared unless the id property is overridden. Thus,\ntwo <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> instances configured like the following share one generator:</p>\n\n<pre><code>Ext.define('MyApp.data.MyModelX', {\n    extend: 'Ext.data.Model',\n    idgen: 'uuid'\n});\n\nExt.define('MyApp.data.MyModelY', {\n    extend: 'Ext.data.Model',\n    idgen: 'uuid'\n});\n</code></pre>\n\n<p>This allows all models using this class to share a commonly configured instance.</p>\n\n<h1>Using Version 1 (\"Sequential\") UUID's</h1>\n\n<p>If a server can provide a proper timestamp and a \"cryptographic quality random number\"\n(as described in RFC 4122), the shared instance can be configured as follows:</p>\n\n<pre><code>Ext.data.IdGenerator.get('uuid').reconfigure({\n    version: 1,\n    clockSeq: clock, // 14 random bits\n    salt: salt,      // 48 secure random bits (the Node field)\n    timestamp: ts    // timestamp per Section 4.1.4\n});\n\n// or these values can be split into 32-bit chunks:\n\nExt.data.IdGenerator.get('uuid').reconfigure({\n    version: 1,\n    clockSeq: clock,\n    salt: { lo: saltLow32, hi: saltHigh32 },\n    timestamp: { lo: timestampLow32, hi: timestamptHigh32 }\n});\n</code></pre>\n\n<p>This approach improves the generator's uniqueness by providing a valid timestamp and\nhigher quality random data. Version 1 UUID's should not be used unless this information\ncan be provided by a server and care should be taken to avoid caching of this data.</p>\n\n<p>See http://www.ietf.org/rfc/rfc4122.txt for details.</p>\n",
  "alternateClassNames": [

  ]
});