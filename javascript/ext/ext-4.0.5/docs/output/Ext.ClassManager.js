Ext.data.JsonP.Ext_ClassManager({
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
  "extends": null,
  "html_filename": "ClassManager.html",
  "allMixins": [

  ],
  "docauthor": "Jacky Nguyen <jacky@sencha.com>",
  "href": "ClassManager.html#Ext-ClassManager",
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

    ],
    "method": [
      {
        "static": false,
        "inheritable": false,
        "linenr": 397,
        "owner": "Ext.ClassManager",
        "html_filename": "ClassManager.html",
        "href": "ClassManager.html#Ext-ClassManager-method-create",
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
            "name": "className",
            "doc": "<p>The class name to create in string dot-namespaced format, for example:\n'My.very.awesome.Class', 'FeedViewer.plugin.CoolPager'\nIt is highly recommended to follow this simple convention:</p>\n\n<ul>\n<li>The root and the class name are 'CamelCased'</li>\n<li>Everything else is lower-cased</li>\n</ul>\n\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "data",
            "doc": "<p>The key - value pairs of properties to apply to this class. Property names can be of any valid\nstrings, except those in the reserved list below:</p>\n\n<ul>\n<li><a href=\"#/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">self</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-alias\" rel=\"Ext.Class-cfg-alias\" class=\"docClass\">alias</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-alternateClassName\" rel=\"Ext.Class-cfg-alternateClassName\" class=\"docClass\">alternateClassName</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-config\" rel=\"Ext.Class-cfg-config\" class=\"docClass\">config</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-extend\" rel=\"Ext.Class-cfg-extend\" class=\"docClass\">extend</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-inheritableStatics\" rel=\"Ext.Class-cfg-inheritableStatics\" class=\"docClass\">inheritableStatics</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-mixins\" rel=\"Ext.Class-cfg-mixins\" class=\"docClass\">mixins</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-requires\" rel=\"Ext.Class-cfg-requires\" class=\"docClass\">requires</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-singleton\" rel=\"Ext.Class-cfg-singleton\" class=\"docClass\">singleton</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-statics\" rel=\"Ext.Class-cfg-statics\" class=\"docClass\">statics</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-uses\" rel=\"Ext.Class-cfg-uses\" class=\"docClass\">uses</a></li>\n</ul>\n\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "createdFn",
            "doc": "<p>(Optional) callback to execute after the class is created, the execution scope of which\n(<code>this</code>) will be the newly created class itself.</p>\n"
          }
        ],
        "alias": null,
        "name": "create",
        "shortDoc": "Defines a class. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
        "doc": "<p>Defines a class.</p>\n\n<pre><code>Ext.ClassManager.create('My.awesome.Class', {\n    someProperty: 'something',\n    someMethod: function() { ... }\n    ...\n\n}, function() {\n    alert('Created!');\n    alert(this === My.awesome.Class); // alerts true\n\n    var myInstance = new this();\n});\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a> is alias for <a href=\"#/api/Ext.ClassManager-method-create\" rel=\"Ext.ClassManager-method-create\" class=\"docClass\">Ext.ClassManager.create</a>.</p>\n",
        "return": {
          "type": "Ext.Base",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 255,
        "owner": "Ext.ClassManager",
        "html_filename": "ClassManager.html",
        "href": "ClassManager.html#Ext-ClassManager-method-get",
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
            "name": "name",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "get",
        "shortDoc": "Retrieve a class by its name. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
        "doc": "<p>Retrieve a class by its name.</p>\n",
        "return": {
          "type": "Ext.Class",
          "properties": null,
          "name": "return",
          "doc": "<p>class</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 356,
        "owner": "Ext.ClassManager",
        "html_filename": "ClassManager.html",
        "href": "ClassManager.html#Ext-ClassManager-method-getAliasesByName",
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
            "name": "name",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "getAliasesByName",
        "shortDoc": "Get the aliases of a class by the class name ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
        "doc": "<p>Get the aliases of a class by the class name</p>\n",
        "return": {
          "type": "String[]",
          "properties": null,
          "name": "return",
          "doc": "<p>aliases</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 326,
        "owner": "Ext.ClassManager",
        "html_filename": "ClassManager.html",
        "href": "ClassManager.html#Ext-ClassManager-method-getByAlias",
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
            "name": "alias",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "getByAlias",
        "shortDoc": "Get a reference to the class by its alias. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
        "doc": "<p>Get a reference to the class by its alias.</p>\n",
        "return": {
          "type": "Ext.Class",
          "properties": null,
          "name": "return",
          "doc": "<p>class</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 380,
        "owner": "Ext.ClassManager",
        "html_filename": "ClassManager.html",
        "href": "ClassManager.html#Ext-ClassManager-method-getClass",
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
            "name": "object",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "getClass",
        "shortDoc": "Get the class of the provided object; returns null if it's not an instance\nof any class created with Ext.define. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
        "doc": "<p>Get the class of the provided object; returns null if it's not an instance\nof any class created with Ext.define.</p>\n\n<pre><code>var component = new Ext.Component();\n\nExt.ClassManager.getClass(component); // returns <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-getClass\" rel=\"Ext-method-getClass\" class=\"docClass\">Ext.getClass</a> is alias for <a href=\"#/api/Ext.ClassManager-method-getClass\" rel=\"Ext.ClassManager-method-getClass\" class=\"docClass\">Ext.ClassManager.getClass</a>.</p>\n",
        "return": {
          "type": "Ext.Class",
          "properties": null,
          "name": "return",
          "doc": "<p>class</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1066,
        "owner": "Ext.ClassManager",
        "html_filename": "ClassManager.html",
        "href": "ClassManager.html#Ext-ClassManager-method-getDisplayName",
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
            "name": "object",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "getDisplayName",
        "shortDoc": "Returns the displayName property or className or object. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
        "doc": "<p>Returns the displayName property or className or object.\nWhen all else fails, returns \"Anonymous\".</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 366,
        "owner": "Ext.ClassManager",
        "html_filename": "ClassManager.html",
        "href": "ClassManager.html#Ext-ClassManager-method-getName",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.Class/Object",
            "properties": [

            ],
            "optional": false,
            "name": "object",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "getName",
        "shortDoc": "Get the name of the class by its reference or its instance. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
        "doc": "<p>Get the name of the class by its reference or its instance.</p>\n\n<pre><code>Ext.ClassManager.getName(Ext.Action); // returns \"Ext.Action\"\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-getClassName\" rel=\"Ext-method-getClassName\" class=\"docClass\">Ext.getClassName</a> is alias for <a href=\"#/api/Ext.ClassManager-method-getName\" rel=\"Ext.ClassManager-method-getName\" class=\"docClass\">Ext.ClassManager.getName</a>.</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>className</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 336,
        "owner": "Ext.ClassManager",
        "html_filename": "ClassManager.html",
        "href": "ClassManager.html#Ext-ClassManager-method-getNameByAlias",
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
            "name": "alias",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "getNameByAlias",
        "shortDoc": "Get the name of a class by its alias. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
        "doc": "<p>Get the name of a class by its alias.</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>className</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 346,
        "owner": "Ext.ClassManager",
        "html_filename": "ClassManager.html",
        "href": "ClassManager.html#Ext-ClassManager-method-getNameByAlternate",
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
            "name": "alternate",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "getNameByAlternate",
        "shortDoc": "Get the name of a class by its alternate name. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
        "doc": "<p>Get the name of a class by its alternate name.</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>className</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 775,
        "owner": "Ext.ClassManager",
        "html_filename": "ClassManager.html",
        "href": "ClassManager.html#Ext-ClassManager-method-getNamesByExpression",
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
            "name": "expression",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "getNamesByExpression",
        "shortDoc": "Converts a string expression to an array of matching class names. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
        "doc": "<p>Converts a string expression to an array of matching class names. An expression can either refers to class aliases\nor class names. Expressions support wildcards:</p>\n\n<pre><code>// returns ['Ext.window.Window']\nvar window = Ext.ClassManager.getNamesByExpression('widget.window');\n\n// returns ['widget.panel', 'widget.window', ...]\nvar allWidgets = Ext.ClassManager.getNamesByExpression('widget.*');\n\n// returns ['Ext.data.Store', 'Ext.data.ArrayProxy', ...]\nvar allData = Ext.ClassManager.getNamesByExpression('Ext.data.*');\n</code></pre>\n",
        "return": {
          "type": "String[]",
          "properties": null,
          "name": "return",
          "doc": "<p>classNames</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 556,
        "owner": "Ext.ClassManager",
        "html_filename": "ClassManager.html",
        "href": "ClassManager.html#Ext-ClassManager-method-instantiate",
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
            "name": "name",
            "doc": "\n"
          },
          {
            "type": "Object...",
            "properties": [

            ],
            "optional": false,
            "name": "args",
            "doc": "<p>Additional arguments after the name will be passed to the class' constructor.</p>\n"
          }
        ],
        "alias": null,
        "name": "instantiate",
        "shortDoc": "Instantiate a class by either full name, alias or alternate name. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
        "doc": "<p>Instantiate a class by either full name, alias or alternate name.</p>\n\n<p>If <a href=\"#/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a> is <a href=\"#/api/Ext.Loader-method-setConfig\" rel=\"Ext.Loader-method-setConfig\" class=\"docClass\">enabled</a> and the class has not been defined yet, it will\nattempt to load the class via synchronous loading.</p>\n\n<p>For example, all these three lines return the same result:</p>\n\n<pre><code>// alias\nvar window = Ext.ClassManager.instantiate('widget.window', { width: 600, height: 800, ... });\n\n// alternate name\nvar window = Ext.ClassManager.instantiate('Ext.Window', { width: 600, height: 800, ... });\n\n// full class name\nvar window = Ext.ClassManager.instantiate('Ext.window.Window', { width: 600, height: 800, ... });\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a> is alias for <a href=\"#/api/Ext.ClassManager-method-instantiate\" rel=\"Ext.ClassManager-method-instantiate\" class=\"docClass\">Ext.ClassManager.instantiate</a>.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>instance</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 508,
        "owner": "Ext.ClassManager",
        "html_filename": "ClassManager.html",
        "href": "ClassManager.html#Ext-ClassManager-method-instantiateByAlias",
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
            "name": "alias",
            "doc": "\n"
          },
          {
            "type": "Object...",
            "properties": [

            ],
            "optional": false,
            "name": "args",
            "doc": "<p>Additional arguments after the alias will be passed to the\nclass constructor.</p>\n"
          }
        ],
        "alias": null,
        "name": "instantiateByAlias",
        "shortDoc": "Instantiate a class by its alias. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
        "doc": "<p>Instantiate a class by its alias.</p>\n\n<p>If <a href=\"#/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a> is <a href=\"#/api/Ext.Loader-method-setConfig\" rel=\"Ext.Loader-method-setConfig\" class=\"docClass\">enabled</a> and the class has not been defined yet, it will\nattempt to load the class via synchronous loading.</p>\n\n<pre><code>var window = Ext.ClassManager.instantiateByAlias('widget.window', { width: 600, height: 800, ... });\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-createByAlias\" rel=\"Ext-method-createByAlias\" class=\"docClass\">Ext.createByAlias</a> is alias for <a href=\"#/api/Ext.ClassManager-method-instantiateByAlias\" rel=\"Ext.ClassManager-method-instantiateByAlias\" class=\"docClass\">Ext.ClassManager.instantiateByAlias</a>.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>instance</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 68,
        "owner": "Ext.ClassManager",
        "html_filename": "ClassManager.html",
        "href": "ClassManager.html#Ext-ClassManager-method-isCreated",
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
            "name": "className",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "isCreated",
        "shortDoc": "Checks if a class has already been created. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
        "doc": "<p>Checks if a class has already been created.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>exist</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 708,
        "owner": "Ext.ClassManager",
        "html_filename": "ClassManager.html",
        "href": "ClassManager.html#Ext-ClassManager-method-registerPostprocessor",
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
            "name": "name",
            "doc": "\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "postprocessor",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "registerPostprocessor",
        "shortDoc": "Register a post-processor function. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
        "doc": "<p>Register a post-processor function.</p>\n",
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
        "linenr": 236,
        "owner": "Ext.ClassManager",
        "html_filename": "ClassManager.html",
        "href": "ClassManager.html#Ext-ClassManager-method-set",
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
            "name": "name",
            "doc": "\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "value",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "set",
        "shortDoc": "Sets a name reference to a class. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
        "doc": "<p>Sets a name reference to a class.</p>\n",
        "return": {
          "type": "Ext.ClassManager",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 287,
        "owner": "Ext.ClassManager",
        "html_filename": "ClassManager.html",
        "href": "ClassManager.html#Ext-ClassManager-method-setAlias",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.Class/String",
            "properties": [

            ],
            "optional": false,
            "name": "cls",
            "doc": "<p>a reference to a class or a className</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "alias",
            "doc": "<p>Alias to use when referring to this class</p>\n"
          }
        ],
        "alias": null,
        "name": "setAlias",
        "shortDoc": "Register the alias for a class. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
        "doc": "<p>Register the alias for a class.</p>\n",
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
        "linenr": 736,
        "owner": "Ext.ClassManager",
        "html_filename": "ClassManager.html",
        "href": "ClassManager.html#Ext-ClassManager-method-setDefaultPostprocessorPosition",
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
            "name": "name",
            "doc": "<p>The post-processor name. Note that it needs to be registered with\n<a href=\"#/api/Ext.ClassManager-method-registerPostprocessor\" rel=\"Ext.ClassManager-method-registerPostprocessor\" class=\"docClass\">registerPostprocessor</a> before this</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "offset",
            "doc": "<p>The insertion position. Four possible values are:\n'first', 'last', or: 'before', 'after' (relative to the name provided in the third argument)</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "relativeName",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "setDefaultPostprocessorPosition",
        "shortDoc": "Insert this post-processor at a specific position in the stack, optionally relative to\nany existing post-processor ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
        "doc": "<p>Insert this post-processor at a specific position in the stack, optionally relative to\nany existing post-processor</p>\n",
        "return": {
          "type": "Ext.ClassManager",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 724,
        "owner": "Ext.ClassManager",
        "html_filename": "ClassManager.html",
        "href": "ClassManager.html#Ext-ClassManager-method-setDefaultPostprocessors",
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
            "name": "The",
            "doc": "<p>name of a registered post processor or an array of registered names.</p>\n"
          }
        ],
        "alias": null,
        "name": "setDefaultPostprocessors",
        "shortDoc": "Set the default post processors array stack which are applied to every class. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
        "doc": "<p>Set the default post processors array stack which are applied to every class.</p>\n",
        "return": {
          "type": "Ext.ClassManager",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 171,
        "owner": "Ext.ClassManager",
        "html_filename": "ClassManager.html",
        "href": "ClassManager.html#Ext-ClassManager-method-setNamespace",
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
            "name": "name",
            "doc": "\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "value",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "setNamespace",
        "shortDoc": "Creates a namespace and assign the value to the created object\n\nExt.ClassManager.setNamespace('MyCompany.pkg.Example'...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
        "doc": "<p>Creates a namespace and assign the <code>value</code> to the created object</p>\n\n<pre><code>Ext.ClassManager.setNamespace('MyCompany.pkg.Example', someObject);\n\nalert(MyCompany.pkg.Example === someObject); // alerts true\n</code></pre>\n",
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

    ]
  },
  "deprecated": null,
  "singleton": true,
  "private": false,
  "tagname": "class",
  "author": "Jacky Nguyen <jacky@sencha.com>",
  "superclasses": [

  ],
  "alias": null,
  "name": "Ext.ClassManager",
  "mixins": [

  ],
  "code_type": "nop",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
  "doc": "<p>Ext.ClassManager manages all classes and handles mapping from string class name to\nactual class objects throughout the whole framework. It is not generally accessed directly, rather through\nthese convenient shorthands:</p>\n\n<ul>\n<li><a href=\"#/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a></li>\n<li><a href=\"#/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a></li>\n<li><a href=\"#/api/Ext-method-widget\" rel=\"Ext-method-widget\" class=\"docClass\">Ext.widget</a></li>\n<li><a href=\"#/api/Ext-method-getClass\" rel=\"Ext-method-getClass\" class=\"docClass\">Ext.getClass</a></li>\n<li><a href=\"#/api/Ext-method-getClassName\" rel=\"Ext-method-getClassName\" class=\"docClass\">Ext.getClassName</a></li>\n</ul>\n\n",
  "alternateClassNames": [

  ]
});