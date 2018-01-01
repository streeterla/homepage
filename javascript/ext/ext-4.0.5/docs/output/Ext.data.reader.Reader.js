Ext.data.JsonP.Ext_data_reader_Reader({
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
  "html_filename": "Reader.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "Reader.html#Ext-data-reader-Reader",
  "subclasses": [
    "Ext.data.reader.Json",
    "Ext.data.reader.Xml"
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
        "linenr": 164,
        "owner": "Ext.data.reader.Reader",
        "html_filename": "Reader.html",
        "href": "Reader.html#Ext-data-reader-Reader-cfg-idProperty",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "idProperty",
        "shortDoc": "Name of the property within a row object that contains a record identifier value. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/reader/Reader.js",
        "doc": "<p>Name of the property within a row object that contains a record identifier value. Defaults to The id of the\nmodel. If an idProperty is explicitly specified it will override that of the one specified on the model</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 197,
        "owner": "Ext.data.reader.Reader",
        "html_filename": "Reader.html",
        "href": "Reader.html#Ext-data-reader-Reader-cfg-implicitIncludes",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "implicitIncludes",
        "shortDoc": "True to automatically parse models nested within other models in a response object. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/reader/Reader.js",
        "doc": "<p>True to automatically parse models nested within other models in a response object. See the\n<a href=\"#/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Ext.data.reader.Reader</a> intro docs for full explanation. Defaults to true.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 192,
        "owner": "Ext.data.reader.Reader",
        "html_filename": "Reader.html",
        "href": "Reader.html#Ext-data-reader-Reader-cfg-messageProperty",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "messageProperty",
        "shortDoc": "The name of the property which contains a response message. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/reader/Reader.js",
        "doc": "<p>The name of the property which contains a response message. This property is optional.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 184,
        "owner": "Ext.data.reader.Reader",
        "html_filename": "Reader.html",
        "href": "Reader.html#Ext-data-reader-Reader-cfg-root",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "root",
        "shortDoc": "(Required) The name of the property which contains the Array of row objects. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/reader/Reader.js",
        "doc": "<p><strong>(Required)</strong> The name of the property which contains the Array of row objects. Defaults to undefined. An\nexception will be thrown if the root property is undefined. The data packet value for this property should be an\nempty array to clear the data or show no data.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 177,
        "owner": "Ext.data.reader.Reader",
        "html_filename": "Reader.html",
        "href": "Reader.html#Ext-data-reader-Reader-cfg-successProperty",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "successProperty",
        "shortDoc": "Name of the property from which to retrieve the success attribute. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/reader/Reader.js",
        "doc": "<p>Name of the property from which to retrieve the success attribute. Defaults to success. See\n<a href=\"#/api/Ext.data.proxy.Server\" rel=\"Ext.data.proxy.Server\" class=\"docClass\">Ext.data.proxy.Server</a>.<a href=\"#/api/Ext.data.proxy.Server-event-exception\" rel=\"Ext.data.proxy.Server-event-exception\" class=\"docClass\">exception</a> for additional information.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 170,
        "owner": "Ext.data.reader.Reader",
        "html_filename": "Reader.html",
        "href": "Reader.html#Ext-data-reader-Reader-cfg-totalProperty",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "totalProperty",
        "shortDoc": "Name of the property from which to retrieve the total number of records in the dataset. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/reader/Reader.js",
        "doc": "<p>Name of the property from which to retrieve the total number of records in the dataset. This is only needed if\nthe whole dataset is not passed in one go, but is being paged from the remote server. Defaults to total.</p>\n"
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
        "linenr": 206,
        "owner": "Ext.data.reader.Reader",
        "html_filename": "Reader.html",
        "href": "Reader.html#Ext-data-reader-Reader-method-constructor",
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
        "shortDoc": "Creates new Reader. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/reader/Reader.js",
        "doc": "<p>Creates new Reader.</p>\n",
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
        "linenr": 469,
        "owner": "Ext.data.reader.Reader",
        "html_filename": "Reader.html",
        "href": "Reader.html#Ext-data-reader-Reader-method-getResponseData",
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
            "name": "response",
            "doc": "<p>The responce object</p>\n"
          }
        ],
        "alias": null,
        "name": "getResponseData",
        "shortDoc": "Takes a raw response object (as passed to this.read) and returns the useful data segment of it. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/reader/Reader.js",
        "doc": "<p>Takes a raw response object (as passed to this.read) and returns the useful data segment of it. This must be\nimplemented by each subclass</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>The useful data from the response</p>\n"
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
        "linenr": 238,
        "owner": "Ext.data.reader.Reader",
        "html_filename": "Reader.html",
        "href": "Reader.html#Ext-data-reader-Reader-method-read",
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
            "name": "response",
            "doc": "<p>The response object. This may be either an XMLHttpRequest object or a plain JS object</p>\n"
          }
        ],
        "alias": null,
        "name": "read",
        "shortDoc": "Reads the given response object. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/reader/Reader.js",
        "doc": "<p>Reads the given response object. This method normalizes the different types of response object that may be passed\nto it, before handing off the reading of records to the <a href=\"#/api/Ext.data.reader.Reader-method-readRecords\" rel=\"Ext.data.reader.Reader-method-readRecords\" class=\"docClass\">readRecords</a> function.</p>\n",
        "return": {
          "type": "Ext.data.ResultSet",
          "properties": null,
          "name": "return",
          "doc": "<p>The parsed ResultSet object</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 258,
        "owner": "Ext.data.reader.Reader",
        "html_filename": "Reader.html",
        "href": "Reader.html#Ext-data-reader-Reader-method-readRecords",
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
            "name": "data",
            "doc": "<p>The raw data object</p>\n"
          }
        ],
        "alias": null,
        "name": "readRecords",
        "shortDoc": "Abstracts common functionality used by all Reader subclasses. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/reader/Reader.js",
        "doc": "<p>Abstracts common functionality used by all Reader subclasses. Each subclass is expected to call this function\nbefore running its own logic and returning the <a href=\"#/api/Ext.data.ResultSet\" rel=\"Ext.data.ResultSet\" class=\"docClass\">Ext.data.ResultSet</a> instance. For most Readers additional\nprocessing should not be needed.</p>\n",
        "return": {
          "type": "Ext.data.ResultSet",
          "properties": null,
          "name": "return",
          "doc": "<p>A ResultSet object</p>\n"
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
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 278,
        "owner": "Ext.data.reader.Reader",
        "html_filename": "Reader.html",
        "href": "Reader.html#Ext-data-reader-Reader-property-rawData",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "rawData",
        "shortDoc": "The raw data object that was last passed to readRecords. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/reader/Reader.js",
        "doc": "<p>The raw data object that was last passed to readRecords. Stored for further processing if needed</p>\n"
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
  "name": "Ext.data.reader.Reader",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/reader/Reader.js",
  "doc": "<p>Readers are used to interpret data to be loaded into a <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> instance or a <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a> - often in response to an AJAX request. In general there is usually no need to create\na Reader instance directly, since a Reader is almost always used together with a <a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">Proxy</a>,\nand is configured using the Proxy's <a href=\"#/api/Ext.data.proxy.Proxy-cfg-reader\" rel=\"Ext.data.proxy.Proxy-cfg-reader\" class=\"docClass\">reader</a> configuration property:</p>\n\n<pre><code>Ext.create('Ext.data.Store', {\n    model: 'User',\n    proxy: {\n        type: 'ajax',\n        url : 'users.json',\n        reader: {\n            type: 'json',\n            root: 'users'\n        }\n    },\n});\n</code></pre>\n\n<p>The above reader is configured to consume a JSON string that looks something like this:</p>\n\n<pre><code>{\n    \"success\": true,\n    \"users\": [\n        { \"name\": \"User 1\" },\n        { \"name\": \"User 2\" }\n    ]\n}\n</code></pre>\n\n<h1>Loading Nested Data</h1>\n\n<p>Readers have the ability to automatically load deeply-nested data objects based on the <a href=\"#/api/Ext.data.Association\" rel=\"Ext.data.Association\" class=\"docClass\">associations</a> configured on each Model. Below is an example demonstrating the flexibility of these associations in a\nfictional CRM system which manages a User, their Orders, OrderItems and Products. First we'll define the models:</p>\n\n<pre><code>Ext.define(\"User\", {\n    extend: 'Ext.data.Model',\n    fields: [\n        'id', 'name'\n    ],\n\n    hasMany: {model: 'Order', name: 'orders'},\n\n    proxy: {\n        type: 'rest',\n        url : 'users.json',\n        reader: {\n            type: 'json',\n            root: 'users'\n        }\n    }\n});\n\nExt.define(\"Order\", {\n    extend: 'Ext.data.Model',\n    fields: [\n        'id', 'total'\n    ],\n\n    hasMany  : {model: 'OrderItem', name: 'orderItems', associationKey: 'order_items'},\n    belongsTo: 'User'\n});\n\nExt.define(\"OrderItem\", {\n    extend: 'Ext.data.Model',\n    fields: [\n        'id', 'price', 'quantity', 'order_id', 'product_id'\n    ],\n\n    belongsTo: ['Order', {model: 'Product', associationKey: 'product'}]\n});\n\nExt.define(\"Product\", {\n    extend: 'Ext.data.Model',\n    fields: [\n        'id', 'name'\n    ],\n\n    hasMany: 'OrderItem'\n});\n</code></pre>\n\n<p>This may be a lot to take in - basically a User has many Orders, each of which is composed of several OrderItems.\nFinally, each OrderItem has a single Product. This allows us to consume data like this:</p>\n\n<pre><code>{\n    \"users\": [\n        {\n            \"id\": 123,\n            \"name\": \"Ed\",\n            \"orders\": [\n                {\n                    \"id\": 50,\n                    \"total\": 100,\n                    \"order_items\": [\n                        {\n                            \"id\"      : 20,\n                            \"price\"   : 40,\n                            \"quantity\": 2,\n                            \"product\" : {\n                                \"id\": 1000,\n                                \"name\": \"MacBook Pro\"\n                            }\n                        },\n                        {\n                            \"id\"      : 21,\n                            \"price\"   : 20,\n                            \"quantity\": 3,\n                            \"product\" : {\n                                \"id\": 1001,\n                                \"name\": \"iPhone\"\n                            }\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n}\n</code></pre>\n\n<p>The JSON response is deeply nested - it returns all Users (in this case just 1 for simplicity's sake), all of the\nOrders for each User (again just 1 in this case), all of the OrderItems for each Order (2 order items in this case),\nand finally the Product associated with each OrderItem. Now we can read the data and use it as follows:</p>\n\n<pre><code>var store = Ext.create('Ext.data.Store', {\n    model: \"User\"\n});\n\nstore.load({\n    callback: function() {\n        //the user that was loaded\n        var user = store.first();\n\n        console.log(\"Orders for \" + user.get('name') + \":\")\n\n        //iterate over the Orders for each User\n        user.orders().each(function(order) {\n            console.log(\"Order ID: \" + order.getId() + \", which contains items:\");\n\n            //iterate over the OrderItems for each Order\n            order.orderItems().each(function(orderItem) {\n                //we know that the Product data is already loaded, so we can use the synchronous getProduct\n                //usually, we would use the asynchronous version (see <a href=\"#/api/Ext.data.BelongsToAssociation\" rel=\"Ext.data.BelongsToAssociation\" class=\"docClass\">Ext.data.BelongsToAssociation</a>)\n                var product = orderItem.getProduct();\n\n                console.log(orderItem.get('quantity') + ' orders of ' + product.get('name'));\n            });\n        });\n    }\n});\n</code></pre>\n\n<p>Running the code above results in the following:</p>\n\n<pre><code>Orders for Ed:\nOrder ID: 50, which contains items:\n2 orders of MacBook Pro\n3 orders of iPhone\n</code></pre>\n",
  "alternateClassNames": [
    "Ext.data.Reader",
    "Ext.data.DataReader"
  ]
});