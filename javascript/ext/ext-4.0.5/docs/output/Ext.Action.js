Ext.data.JsonP.Ext_Action({
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
  "html_filename": "Action.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "Action.html#Ext-Action",
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
        "linenr": 83,
        "owner": "Ext.Action",
        "html_filename": "Action.html",
        "href": "Action.html#Ext-Action-cfg-disabled",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "disabled",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Action.js",
        "doc": "<p>True to disable all components configured by this Action, false to enable them (defaults to false).</p>\n"
      },
      {
        "static": false,
        "type": "Function",
        "inheritable": false,
        "properties": null,
        "linenr": 89,
        "owner": "Ext.Action",
        "html_filename": "Action.html",
        "href": "Action.html#Ext-Action-cfg-handler",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "handler",
        "shortDoc": "The function that will be invoked by each component tied to this Action\nwhen the component's primary event is trigger...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Action.js",
        "doc": "<p>The function that will be invoked by each component tied to this Action\nwhen the component's primary event is triggered (defaults to undefined).</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 86,
        "owner": "Ext.Action",
        "html_filename": "Action.html",
        "href": "Action.html#Ext-Action-cfg-hidden",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "hidden",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Action.js",
        "doc": "<p>True to hide all components configured by this Action, false to show them (defaults to false).</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 69,
        "owner": "Ext.Action",
        "html_filename": "Action.html",
        "href": "Action.html#Ext-Action-cfg-iconCls",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "iconCls",
        "shortDoc": "The CSS class selector that specifies a background image to be used as the header icon for\nall components configured ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Action.js",
        "doc": "<p>The CSS class selector that specifies a background image to be used as the header icon for\nall components configured by this Action (defaults to '').</p>\n\n<p>An example of specifying a custom icon class would be something like:\n</p>\n\n\n<pre><code>// specify the property in the config for the class:\n     ...\n     iconCls: 'do-something'\n\n// css class that specifies background image to be used as the icon image:\n.do-something { background-image: url(../images/my-icon.gif) 0 6px no-repeat !important; }\n</code></pre>\n\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 93,
        "owner": "Ext.Action",
        "html_filename": "Action.html",
        "href": "Action.html#Ext-Action-cfg-itemId",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "itemId",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Action.js",
        "doc": "<p>See <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.<a href=\"#/api/Ext.Component-cfg-itemId\" rel=\"Ext.Component-cfg-itemId\" class=\"docClass\">itemId</a>.</p>\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 97,
        "owner": "Ext.Action",
        "html_filename": "Action.html",
        "href": "Action.html#Ext-Action-cfg-scope",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "scope",
        "shortDoc": "The scope (this reference) in which the\nhandler is executed. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Action.js",
        "doc": "<p>The scope (<code><b>this</b></code> reference) in which the\n<code><a href=\"#/api/Ext.Action-cfg-handler\" rel=\"Ext.Action-cfg-handler\" class=\"docClass\">handler</a></code> is executed. Defaults to the browser window.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 66,
        "owner": "Ext.Action",
        "html_filename": "Action.html",
        "href": "Action.html#Ext-Action-cfg-text",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "text",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Action.js",
        "doc": "<p>The text to set for all components configured by this Action (defaults to '').</p>\n"
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
        "linenr": 102,
        "owner": "Ext.Action",
        "html_filename": "Action.html",
        "href": "Action.html#Ext-Action-method-constructor",
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
            "doc": "<p>Config object.</p>\n"
          }
        ],
        "alias": null,
        "name": "constructor",
        "shortDoc": "Creates new Action. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Action.js",
        "doc": "<p>Creates new Action.</p>\n",
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
        "linenr": 165,
        "owner": "Ext.Action",
        "html_filename": "Action.html",
        "href": "Action.html#Ext-Action-method-disable",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "disable",
        "shortDoc": "Disables all components configured by this Action. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Action.js",
        "doc": "<p>Disables all components configured by this Action.</p>\n",
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
        "linenr": 222,
        "owner": "Ext.Action",
        "html_filename": "Action.html",
        "href": "Action.html#Ext-Action-method-each",
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
            "doc": "<p>The function to execute for each component</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "scope",
            "doc": "<p>The scope (<code>this</code> reference) in which the function is executed.  Defaults to the Component.</p>\n"
          }
        ],
        "alias": null,
        "name": "each",
        "shortDoc": "Executes the specified function once for each Component currently tied to this Action. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Action.js",
        "doc": "<p>Executes the specified function once for each Component currently tied to this Action.  The function passed\nin should accept a single argument that will be an object that supports the basic Action config/method interface.</p>\n",
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
        "linenr": 158,
        "owner": "Ext.Action",
        "html_filename": "Action.html",
        "href": "Action.html#Ext-Action-method-enable",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "enable",
        "shortDoc": "Enables all components configured by this Action. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Action.js",
        "doc": "<p>Enables all components configured by this Action.</p>\n",
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
        "linenr": 254,
        "owner": "Ext.Action",
        "html_filename": "Action.html",
        "href": "Action.html#Ext-Action-method-execute",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Object...",
            "properties": [

            ],
            "optional": true,
            "name": "args",
            "doc": "<p>(optional) Variable number of arguments passed to the handler function</p>\n"
          }
        ],
        "alias": null,
        "name": "execute",
        "shortDoc": "Executes this Action manually using the handler function specified in the original config object\nor the handler funct...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Action.js",
        "doc": "<p>Executes this Action manually using the handler function specified in the original config object\nor the handler function set with <code><a href=\"#/api/Ext.Action-method-setHandler\" rel=\"Ext.Action-method-setHandler\" class=\"docClass\">setHandler</a></code>.  Any arguments passed to this\nfunction will be passed on to the handler function.</p>\n",
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
        "linenr": 141,
        "owner": "Ext.Action",
        "html_filename": "Action.html",
        "href": "Action.html#Ext-Action-method-getIconCls",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getIconCls",
        "shortDoc": "Gets the icon CSS class currently used by all components configured by this Action. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Action.js",
        "doc": "<p>Gets the icon CSS class currently used by all components configured by this Action.</p>\n",
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
        "linenr": 124,
        "owner": "Ext.Action",
        "html_filename": "Action.html",
        "href": "Action.html#Ext-Action-method-getText",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getText",
        "shortDoc": "Gets the text currently displayed by all components configured by this Action. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Action.js",
        "doc": "<p>Gets the text currently displayed by all components configured by this Action.</p>\n",
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
        "linenr": 196,
        "owner": "Ext.Action",
        "html_filename": "Action.html",
        "href": "Action.html#Ext-Action-method-hide",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "hide",
        "shortDoc": "Hides all components configured by this Action. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Action.js",
        "doc": "<p>Hides all components configured by this Action.</p>\n",
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
        "linenr": 172,
        "owner": "Ext.Action",
        "html_filename": "Action.html",
        "href": "Action.html#Ext-Action-method-isDisabled",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isDisabled",
        "shortDoc": "Returns true if the components using this Action are currently disabled, else returns false. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Action.js",
        "doc": "<p>Returns true if the components using this Action are currently disabled, else returns false.</p>\n",
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
        "linenr": 203,
        "owner": "Ext.Action",
        "html_filename": "Action.html",
        "href": "Action.html#Ext-Action-method-isHidden",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isHidden",
        "shortDoc": "Returns true if the components configured by this Action are currently hidden, else returns false. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Action.js",
        "doc": "<p>Returns true if the components configured by this Action are currently hidden, else returns false.</p>\n",
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
        "linenr": 148,
        "owner": "Ext.Action",
        "html_filename": "Action.html",
        "href": "Action.html#Ext-Action-method-setDisabled",
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
            "name": "disabled",
            "doc": "<p>True to disable the component, false to enable it</p>\n"
          }
        ],
        "alias": null,
        "name": "setDisabled",
        "shortDoc": "Sets the disabled state of all components configured by this Action. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Action.js",
        "doc": "<p>Sets the disabled state of all components configured by this Action.  Shortcut method\nfor <a href=\"#/api/Ext.Action-method-enable\" rel=\"Ext.Action-method-enable\" class=\"docClass\">enable</a> and <a href=\"#/api/Ext.Action-method-disable\" rel=\"Ext.Action-method-disable\" class=\"docClass\">disable</a>.</p>\n",
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
        "linenr": 210,
        "owner": "Ext.Action",
        "html_filename": "Action.html",
        "href": "Action.html#Ext-Action-method-setHandler",
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
            "doc": "<p>The function that will be invoked by the action's components.  The function\nwill be called with no arguments.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "scope",
            "doc": "<p>The scope (<code>this</code> reference) in which the function is executed. Defaults to the Component firing the event.</p>\n"
          }
        ],
        "alias": null,
        "name": "setHandler",
        "shortDoc": "Sets the function that will be called by each Component using this action when its primary event is triggered. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Action.js",
        "doc": "<p>Sets the function that will be called by each Component using this action when its primary event is triggered.</p>\n",
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
        "linenr": 179,
        "owner": "Ext.Action",
        "html_filename": "Action.html",
        "href": "Action.html#Ext-Action-method-setHidden",
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
            "name": "hidden",
            "doc": "<p>True to hide the component, false to show it</p>\n"
          }
        ],
        "alias": null,
        "name": "setHidden",
        "shortDoc": "Sets the hidden state of all components configured by this Action. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Action.js",
        "doc": "<p>Sets the hidden state of all components configured by this Action.  Shortcut method\nfor <code><a href=\"#/api/Ext.Action-method-hide\" rel=\"Ext.Action-method-hide\" class=\"docClass\">hide</a></code> and <code><a href=\"#/api/Ext.Action-method-show\" rel=\"Ext.Action-method-show\" class=\"docClass\">show</a></code>.</p>\n",
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
        "linenr": 131,
        "owner": "Ext.Action",
        "html_filename": "Action.html",
        "href": "Action.html#Ext-Action-method-setIconCls",
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
            "name": "cls",
            "doc": "<p>The CSS class supplying the icon image</p>\n"
          }
        ],
        "alias": null,
        "name": "setIconCls",
        "shortDoc": "Sets the icon CSS class for all components configured by this Action. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Action.js",
        "doc": "<p>Sets the icon CSS class for all components configured by this Action.  The class should supply\na background image that will be used as the icon image.</p>\n",
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
        "linenr": 115,
        "owner": "Ext.Action",
        "html_filename": "Action.html",
        "href": "Action.html#Ext-Action-method-setText",
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
            "name": "text",
            "doc": "<p>The text to display</p>\n"
          }
        ],
        "alias": null,
        "name": "setText",
        "shortDoc": "Sets the text to be displayed by all components configured by this Action. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Action.js",
        "doc": "<p>Sets the text to be displayed by all components configured by this Action.</p>\n",
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
        "linenr": 189,
        "owner": "Ext.Action",
        "html_filename": "Action.html",
        "href": "Action.html#Ext-Action-method-show",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "show",
        "shortDoc": "Shows all components configured by this Action. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Action.js",
        "doc": "<p>Shows all components configured by this Action.</p>\n",
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
  "name": "Ext.Action",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Action.js",
  "doc": "<p>An Action is a piece of reusable functionality that can be abstracted out of any particular component so that it\ncan be usefully shared among multiple components.  Actions let you share handlers, configuration options and UI\nupdates across any components that support the Action interface (primarily <a href=\"#/api/Ext.toolbar.Toolbar\" rel=\"Ext.toolbar.Toolbar\" class=\"docClass\">Ext.toolbar.Toolbar</a>, <a href=\"#/api/Ext.button.Button\" rel=\"Ext.button.Button\" class=\"docClass\">Ext.button.Button</a>\nand <a href=\"#/api/Ext.menu.Menu\" rel=\"Ext.menu.Menu\" class=\"docClass\">Ext.menu.Menu</a> components).</p>\n\n\n<p>Use a single Action instance as the config object for any number of UI Components which share the same configuration. The\nAction not only supplies the configuration, but allows all Components based upon it to have a common set of methods\ncalled at once through a single call to the Action.</p>\n\n\n<p>Any Component that is to be configured with an Action must also support\nthe following methods:<ul>\n<li><code>setText(string)</code></li>\n<li><code>setIconCls(string)</code></li>\n<li><code>setDisabled(boolean)</code></li>\n<li><code>setVisible(boolean)</code></li>\n<li><code>setHandler(function)</code></li></ul>.</p>\n\n\n<p>This allows the Action to control its associated Components.</p>\n\n\n<p>Example usage:<br></p>\n\n<pre><code>// Define the shared Action.  Each Component below will have the same\n// display text and icon, and will display the same message on click.\nvar action = new Ext.Action({\n    <a href=\"#/api/Ext.Action-cfg-text\" rel=\"Ext.Action-cfg-text\" class=\"docClass\">text</a>: 'Do something',\n    <a href=\"#/api/Ext.Action-cfg-handler\" rel=\"Ext.Action-cfg-handler\" class=\"docClass\">handler</a>: function(){\n        Ext.Msg.alert('Click', 'You did something.');\n    },\n    <a href=\"#/api/Ext.Action-cfg-iconCls\" rel=\"Ext.Action-cfg-iconCls\" class=\"docClass\">iconCls</a>: 'do-something',\n    <a href=\"#/api/Ext.Action-cfg-itemId\" rel=\"Ext.Action-cfg-itemId\" class=\"docClass\">itemId</a>: 'myAction'\n});\n\nvar panel = new Ext.panel.Panel({\n    title: 'Actions',\n    width: 500,\n    height: 300,\n    tbar: [\n        // Add the Action directly to a toolbar as a menu button\n        action,\n        {\n            text: 'Action Menu',\n            // Add the Action to a menu as a text item\n            menu: [action]\n        }\n    ],\n    items: [\n        // Add the Action to the panel body as a standard button\n        new Ext.button.Button(action)\n    ],\n    renderTo: Ext.getBody()\n});\n\n// Change the text for all components using the Action\naction.setText('Something else');\n\n// Reference an Action through a container using the itemId\nvar btn = panel.getComponent('myAction');\nvar aRef = btn.baseAction;\naRef.setText('New text');\n</code></pre>\n\n",
  "alternateClassNames": [

  ]
});