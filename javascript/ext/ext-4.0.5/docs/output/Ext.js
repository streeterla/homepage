Ext.data.JsonP.Ext({
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
  "html_filename": "Ext-more.html",
  "allMixins": [

  ],
  "docauthor": null,
  "xtype": null,
  "href": "Ext-more.html#Ext",
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
        "linenr": 781,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-method-addBehaviors",
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
            "name": "obj",
            "doc": "<p>The list of behaviors to apply</p>\n"
          }
        ],
        "alias": null,
        "name": "addBehaviors",
        "shortDoc": "Applies event listeners to elements by selectors when the document is ready. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>Applies event listeners to elements by selectors when the document is ready.\nThe event name is specified with an <tt>&#64;</tt> suffix.</p>\n\n<pre><code>Ext.addBehaviors({\n    // add a listener for click on all anchors in element with id foo\n    '#foo a&#64;click' : function(e, t){\n        // do something\n    },\n\n    // add the same listener to multiple selectors (separated by comma BEFORE the &#64;)\n    '#foo a, #bar span.some-class&#64;mouseover' : function(){\n        // do something\n    }\n});\n</code></pre>\n\n",
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
        "linenr": 1087,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-method-application",
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
        "name": "application",
        "shortDoc": "Loads Ext.app.Application class and starts it up with given configuration after the page is ready. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>Loads <a href=\"#/api/Ext.app.Application\" rel=\"Ext.app.Application\" class=\"docClass\">Ext.app.Application</a> class and starts it up with given configuration after the page is ready.</p>\n\n<p>See <a href=\"#/api/Ext.app.Application\" rel=\"Ext.app.Application\" class=\"docClass\">Ext.app.Application</a> for details.</p>\n",
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
        "linenr": 34,
        "owner": "Ext",
        "html_filename": "Ext.html",
        "href": "Ext.html#Ext-method-apply",
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
            "doc": "<p>The receiver of the properties</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "config",
            "doc": "<p>The source of the properties</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "defaults",
            "doc": "<p>A different object that will also be applied for default values</p>\n"
          }
        ],
        "alias": null,
        "name": "apply",
        "shortDoc": "Copies all the properties of config to the specified object. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext.js",
        "doc": "<p>Copies all the properties of config to the specified object.\nNote that if recursive merging and cloning without referencing the original objects / arrays is needed, use\n<a href=\"#/api/Ext.Object-method-merge\" rel=\"Ext.Object-method-merge\" class=\"docClass\">Ext.Object.merge</a> instead.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>returns obj</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 81,
        "owner": "Ext",
        "html_filename": "Ext.html",
        "href": "Ext.html#Ext-method-applyIf",
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
            "doc": "<p>The receiver of the properties</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "config",
            "doc": "<p>The source of the properties</p>\n"
          }
        ],
        "alias": null,
        "name": "applyIf",
        "shortDoc": "Copies all the properties of config to object if they don't already exist. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext.js",
        "doc": "<p>Copies all the properties of config to object if they don't already exist.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>returns obj</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 371,
        "owner": "Ext",
        "html_filename": "Function.html",
        "href": "Function.html#Ext-method-bind",
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
            "doc": "<p>The function to delegate.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed.\n<strong>If omitted, defaults to the browser window.</strong></p>\n"
          },
          {
            "type": "Array",
            "properties": [

            ],
            "optional": true,
            "name": "args",
            "doc": "<p>(optional) Overrides arguments for the call. (Defaults to the arguments passed by the caller)</p>\n"
          },
          {
            "type": "Boolean/Number",
            "properties": [

            ],
            "optional": true,
            "name": "appendArgs",
            "doc": "<p>(optional) if True args are appended to call args instead of overriding,\nif a number the args are inserted at the specified position</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.Function",
          "tagname": "alias",
          "member": "bind",
          "doc": null
        },
        "name": "bind",
        "shortDoc": "Create a new function from the provided fn, change this to the provided scope, optionally\noverrides arguments for the...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Function.js",
        "doc": "<p>Create a new function from the provided <code>fn</code>, change <code>this</code> to the provided scope, optionally\noverrides arguments for the call. (Defaults to the arguments passed by the caller)</p>\n\n<p><a href=\"#/api/Ext-method-bind\" rel=\"Ext-method-bind\" class=\"docClass\">Ext.bind</a> is alias for <a href=\"#/api/Ext.Function-method-bind\" rel=\"Ext.Function-method-bind\" class=\"docClass\">Ext.Function.bind</a></p>\n",
        "return": {
          "type": "Function",
          "properties": null,
          "name": "return",
          "doc": "<p>The new function</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 166,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-method-callback",
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
            "name": "callback",
            "doc": "<p>The callback to execute</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope to execute in</p>\n"
          },
          {
            "type": "Array",
            "properties": [

            ],
            "optional": true,
            "name": "args",
            "doc": "<p>(optional) The arguments to pass to the function</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": true,
            "name": "delay",
            "doc": "<p>(optional) Pass a number to delay the call by a number of milliseconds.</p>\n"
          }
        ],
        "alias": null,
        "name": "callback",
        "shortDoc": "Execute a callback function in a particular scope. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>Execute a callback function in a particular scope. If no function is passed the call is ignored.</p>\n\n<p>For example, these lines are equivalent:</p>\n\n<pre><code>Ext.callback(myFunc, this, [arg1, arg2]);\nExt.isFunction(myFunc) &amp;&amp; myFunc.apply(this, [arg1, arg2]);\n</code></pre>\n",
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
        "linenr": 1030,
        "owner": "Ext",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-method-clean",
        "protected": false,
        "deprecated": {
          "text": "<p>Use <a href=\"#/api/Ext.Array-method-clean\" rel=\"Ext.Array-method-clean\" class=\"docClass\">Ext.Array.clean</a> instead</p>\n",
          "tagname": "deprecated",
          "version": "4.0.0",
          "doc": null
        },
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "array",
            "doc": "\n"
          }
        ],
        "alias": {
          "cls": "Ext.Array",
          "tagname": "alias",
          "member": "clean",
          "doc": null
        },
        "name": "clean",
        "shortDoc": "Old alias to Ext.Array.clean\n\nFilter through an array and remove empty item as defined in Ext.isEmpty\n\nSee Ext.Array....",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-clean\" rel=\"Ext.Array-method-clean\" class=\"docClass\">Ext.Array.clean</a></p>\n\n<p>Filter through an array and remove empty item as defined in <a href=\"#/api/Ext-method-isEmpty\" rel=\"Ext-method-isEmpty\" class=\"docClass\">Ext.isEmpty</a></p>\n\n<p>See <a href=\"#/api/Ext.Array-method-filter\" rel=\"Ext.Array-method-filter\" class=\"docClass\">Ext.Array.filter</a></p>\n",
        "return": {
          "type": "Array",
          "properties": null,
          "name": "return",
          "doc": "<p>results</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 485,
        "owner": "Ext",
        "html_filename": "Ext.html",
        "href": "Ext.html#Ext-method-clone",
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
            "doc": "<p>The variable to clone</p>\n"
          }
        ],
        "alias": null,
        "name": "clone",
        "shortDoc": "Clone almost any type of variable including array, object, DOM nodes and Date without keeping the old reference ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext.js",
        "doc": "<p>Clone almost any type of variable including array, object, DOM nodes and Date without keeping the old reference</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>clone</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 871,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-method-copyTo",
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
            "name": "dest",
            "doc": "<p>The destination object.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "source",
            "doc": "<p>The source object.</p>\n"
          },
          {
            "type": "String/String[]",
            "properties": [

            ],
            "optional": false,
            "name": "names",
            "doc": "<p>Either an Array of property names, or a comma-delimited list\nof property names to copy.</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "usePrototypeKeys",
            "doc": "<p>(Optional) Defaults to false. Pass true to copy keys off of the prototype as well as the instance.</p>\n"
          }
        ],
        "alias": null,
        "name": "copyTo",
        "shortDoc": "Copies a set of named properties fom the source object to the destination object. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>Copies a set of named properties fom the source object to the destination object.</p>\n\n<p>Example:</p>\n\n<pre><code>ImageComponent = Ext.extend(Ext.Component, {\n    initComponent: function() {\n        this.autoEl = { tag: 'img' };\n        MyComponent.superclass.initComponent.apply(this, arguments);\n        this.initialBox = Ext.copyTo({}, this.initialConfig, 'x,y,width,height');\n    }\n});\n</code></pre>\n\n<p>Important note: To borrow class prototype methods, use <a href=\"#/api/Ext.Base-method-borrow\" rel=\"Ext.Base-method-borrow\" class=\"docClass\">Ext.Base.borrow</a> instead.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>The modified object.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 974,
        "owner": "Ext",
        "html_filename": "ClassManager.html",
        "href": "ClassManager.html#Ext-method-create",
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
        "alias": {
          "cls": "Ext.ClassManager",
          "tagname": "alias",
          "member": "instantiate",
          "doc": null
        },
        "name": "create",
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
        "linenr": 1045,
        "owner": "Ext",
        "html_filename": "ClassManager.html",
        "href": "ClassManager.html#Ext-method-createByAlias",
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
        "alias": {
          "cls": "Ext.ClassManager",
          "tagname": "alias",
          "member": "instantiateByAlias",
          "doc": null
        },
        "name": "createByAlias",
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
        "linenr": 1118,
        "owner": "Ext",
        "html_filename": "ClassManager.html",
        "href": "ClassManager.html#Ext-method-createWidget",
        "protected": false,
        "deprecated": {
          "text": "<p>Use <a href=\"#/api/Ext-method-widget\" rel=\"Ext-method-widget\" class=\"docClass\">widget</a> instead.</p>\n",
          "tagname": "deprecated",
          "version": "4.0.0",
          "doc": null
        },
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "name",
            "doc": "<p>xtype of the widget to create.</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext",
          "tagname": "alias",
          "member": "widget",
          "doc": null
        },
        "name": "createWidget",
        "shortDoc": "Old name for widget. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
        "doc": "<p>Old name for <a href=\"#/api/Ext-method-widget\" rel=\"Ext-method-widget\" class=\"docClass\">widget</a>.</p>\n\n<p>Convenient shorthand to create a widget by its xtype, also see <a href=\"#/api/Ext.ClassManager-method-instantiateByAlias\" rel=\"Ext.ClassManager-method-instantiateByAlias\" class=\"docClass\">Ext.ClassManager.instantiateByAlias</a></p>\n\n<pre><code>var button = Ext.widget('button'); // Equivalent to Ext.create('widget.button')\nvar panel = Ext.widget('panel'); // Equivalent to Ext.create('widget.panel')\n</code></pre>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>widget instance</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 165,
        "owner": "Ext",
        "html_filename": "JSON3.html",
        "href": "JSON3.html#Ext-method-decode",
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
            "name": "json",
            "doc": "<p>The JSON string</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "safe",
            "doc": "<p>(optional) Whether to return null or throw an exception if the JSON is invalid.</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.JSON",
          "tagname": "alias",
          "member": "decode",
          "doc": null
        },
        "name": "decode",
        "shortDoc": "Shorthand for Ext.JSON.decode\n\nDecodes (parses) a JSON string to an object. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/misc/JSON.js",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.JSON-method-decode\" rel=\"Ext.JSON-method-decode\" class=\"docClass\">Ext.JSON.decode</a></p>\n\n<p>Decodes (parses) a JSON string to an object. If the JSON is invalid, this function throws a SyntaxError unless the safe option is set.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>The resulting object</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 357,
        "owner": "Ext",
        "html_filename": "Function.html",
        "href": "Function.html#Ext-method-defer",
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
            "doc": "<p>The function to defer.</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "millis",
            "doc": "<p>The number of milliseconds for the setTimeout call\n(if less than or equal to 0 the function is executed immediately)</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed.\n<strong>If omitted, defaults to the browser window.</strong></p>\n"
          },
          {
            "type": "Array",
            "properties": [

            ],
            "optional": true,
            "name": "args",
            "doc": "<p>(optional) Overrides arguments for the call. (Defaults to the arguments passed by the caller)</p>\n"
          },
          {
            "type": "Boolean/Number",
            "properties": [

            ],
            "optional": true,
            "name": "appendArgs",
            "doc": "<p>(optional) if True args are appended to call args instead of overriding,\nif a number the args are inserted at the specified position</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.Function",
          "tagname": "alias",
          "member": "defer",
          "doc": null
        },
        "name": "defer",
        "shortDoc": "Calls this function after the number of millseconds specified, optionally in a specific scope. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Function.js",
        "doc": "<p>Calls this function after the number of millseconds specified, optionally in a specific scope. Example usage:</p>\n\n<pre><code>var sayHi = function(name){\n    alert('Hi, ' + name);\n}\n\n// executes immediately:\nsayHi('Fred');\n\n// executes after 2 seconds:\nExt.Function.defer(sayHi, 2000, this, ['Fred']);\n\n// this syntax is sometimes useful for deferring\n// execution of an anonymous function:\nExt.Function.defer(function(){\n    alert('Anonymous');\n}, 100);\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-defer\" rel=\"Ext-method-defer\" class=\"docClass\">Ext.defer</a> is alias for <a href=\"#/api/Ext.Function-method-defer\" rel=\"Ext.Function-method-defer\" class=\"docClass\">Ext.Function.defer</a></p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>The timeout id that can be used with clearTimeout</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1052,
        "owner": "Ext",
        "html_filename": "ClassManager.html",
        "href": "ClassManager.html#Ext-method-define",
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
        "alias": {
          "cls": "Ext.ClassManager",
          "tagname": "alias",
          "member": "create",
          "doc": null
        },
        "name": "define",
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
        "linenr": 137,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-method-destroy",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.Element/Ext.Component/Ext.Element[]/Ext.Component[]...",
            "properties": [

            ],
            "optional": false,
            "name": "arg1",
            "doc": "<p>An <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>, <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>, or an Array of either of these to destroy</p>\n"
          }
        ],
        "alias": null,
        "name": "destroy",
        "shortDoc": "Attempts to destroy any objects passed to it by removing all event listeners, removing them from the\nDOM (if applicab...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>Attempts to destroy any objects passed to it by removing all event listeners, removing them from the\nDOM (if applicable) and calling their destroy functions (if available).  This method is primarily\nintended for arguments of type <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> and <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>, but any subclass of\n<a href=\"#/api/Ext.util.Observable\" rel=\"Ext.util.Observable\" class=\"docClass\">Ext.util.Observable</a> can be passed in.  Any number of elements and/or components can be\npassed into this function in a single call as separate arguments.</p>\n",
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
        "linenr": 905,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-method-destroyMembers",
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
            "doc": "<p>The object (most likely a Component) who's properties you wish to destroy.</p>\n"
          },
          {
            "type": "String...",
            "properties": [

            ],
            "optional": false,
            "name": "args",
            "doc": "<p>One or more names of the properties to destroy and remove from the object.</p>\n"
          }
        ],
        "alias": null,
        "name": "destroyMembers",
        "shortDoc": "Attempts to destroy and then remove a set of named properties of the passed object. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>Attempts to destroy and then remove a set of named properties of the passed object.</p>\n",
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
        "linenr": 971,
        "owner": "Ext",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-method-each",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array/NodeList/Object",
            "properties": [

            ],
            "optional": false,
            "name": "iterable",
            "doc": "<p>The value to be iterated. If this\nargument is not iterable, the callback function is called once.</p>\n"
          },
          {
            "type": "Function",
            "properties": [
              {
                "type": "Object",
                "tagname": "param",
                "name": "item",
                "doc": "<p>The item at the current <code>index</code> in the passed <code>array</code></p>\n"
              },
              {
                "type": "Number",
                "tagname": "param",
                "name": "index",
                "doc": "<p>The current <code>index</code> within the <code>array</code></p>\n"
              },
              {
                "type": "Array",
                "tagname": "param",
                "name": "allItems",
                "doc": "<p>The <code>array</code> itself which was passed as the first argument</p>\n"
              },
              {
                "type": "Boolean",
                "tagname": "param",
                "name": "return",
                "doc": "<p>Return false to stop iteration.</p>\n"
              }
            ],
            "optional": false,
            "name": "fn",
            "doc": "<p>The callback function. If it returns false, the iteration stops and this method returns\nthe current <code>index</code>.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(Optional) The scope (<code>this</code> reference) in which the specified function is executed.</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "reverse",
            "doc": "<p>(Optional) Reverse the iteration order (loop from the end to the beginning)\nDefaults false</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.Array",
          "tagname": "alias",
          "member": "each",
          "doc": null
        },
        "name": "each",
        "shortDoc": "Iterates an array or an iterable value and invoke the given callback function for each item. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Iterates an array or an iterable value and invoke the given callback function for each item.</p>\n\n<pre><code>var countries = ['Vietnam', 'Singapore', 'United States', 'Russia'];\n\nExt.Array.each(countries, function(name, index, countriesItSelf) {\n    console.log(name);\n});\n\nvar sum = function() {\n    var sum = 0;\n\n    Ext.Array.each(arguments, function(value) {\n        sum += value;\n    });\n\n    return sum;\n};\n\nsum(1, 2, 3); // returns 6\n</code></pre>\n\n<p>The iteration can be stopped by returning false in the function callback.</p>\n\n<pre><code>Ext.Array.each(countries, function(name, index, countriesItSelf) {\n    if (name === 'Singapore') {\n        return false; // break here\n    }\n});\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-each\" rel=\"Ext-method-each\" class=\"docClass\">Ext.each</a> is alias for <a href=\"#/api/Ext.Array-method-each\" rel=\"Ext.Array-method-each\" class=\"docClass\">Ext.Array.each</a></p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>See description for the <code>fn</code> parameter.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 74,
        "owner": "Ext",
        "html_filename": "Ext.html",
        "href": "Ext.html#Ext-method-emptyFn",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "emptyFn",
        "shortDoc": "A reusable empty function ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext.js",
        "doc": "<p>A reusable empty function</p>\n",
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
        "owner": "Ext",
        "html_filename": "JSON3.html",
        "href": "JSON3.html#Ext-method-encode",
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
            "doc": "<p>The variable to encode</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.JSON",
          "tagname": "alias",
          "member": "encode",
          "doc": null
        },
        "name": "encode",
        "shortDoc": "Shorthand for Ext.JSON.encode\n\nEncodes an Object, Array or other value ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/misc/JSON.js",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.JSON-method-encode\" rel=\"Ext.JSON-method-encode\" class=\"docClass\">Ext.JSON.encode</a></p>\n\n<p>Encodes an Object, Array or other value</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The JSON string</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 771,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-method-escapeRe",
        "protected": false,
        "deprecated": {
          "text": "<p>Use <a href=\"#/api/Ext.String-method-escapeRegex\" rel=\"Ext.String-method-escapeRegex\" class=\"docClass\">Ext.String.escapeRegex</a> instead</p>\n",
          "tagname": "deprecated",
          "version": "4.0.0",
          "doc": null
        },
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "str",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "escapeRe",
        "shortDoc": "Escapes the passed string for use in a regular expression ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>Escapes the passed string for use in a regular expression</p>\n",
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
        "linenr": 955,
        "owner": "Ext",
        "html_filename": "Loader.html",
        "href": "Loader.html#Ext-method-exclude",
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
            "name": "excludes",
            "doc": "\n"
          }
        ],
        "alias": {
          "cls": "Ext.Loader",
          "tagname": "alias",
          "member": "exclude",
          "doc": null
        },
        "name": "exclude",
        "shortDoc": "Explicitly exclude files from being loaded. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Loader.js",
        "doc": "<p>Explicitly exclude files from being loaded. Useful when used in conjunction with a broad include expression.\nCan be chained with more <code>require</code> and <code>exclude</code> methods, e.g.:</p>\n\n<pre><code>Ext.exclude('Ext.data.*').require('*');\n\nExt.exclude('widget.button*').require('widget.*');\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-exclude\" rel=\"Ext-method-exclude\" class=\"docClass\">Ext.exclude</a> is alias for <a href=\"#/api/Ext.Loader-method-exclude\" rel=\"Ext.Loader-method-exclude\" class=\"docClass\">Ext.Loader.exclude</a> for convenience.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>object contains <code>require</code> method for chaining</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 133,
        "owner": "Ext",
        "html_filename": "Ext.html",
        "href": "Ext.html#Ext-method-extend",
        "protected": false,
        "deprecated": {
          "text": "<p>Use <a href=\"#/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a> instead</p>\n",
          "tagname": "deprecated",
          "version": "4.0.0",
          "doc": null
        },
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "superclass",
            "doc": "\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "overrides",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "extend",
        "shortDoc": "This method deprecated. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext.js",
        "doc": "<p>This method deprecated. Use <a href=\"#/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a> instead.</p>\n",
        "return": {
          "type": "Function",
          "properties": null,
          "name": "return",
          "doc": "<p>The subclass constructor from the <tt>overrides</tt> parameter, or a generated one if not provided.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1021,
        "owner": "Ext",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-method-flatten",
        "protected": false,
        "deprecated": {
          "text": "<p>Use <a href=\"#/api/Ext.Array-method-flatten\" rel=\"Ext.Array-method-flatten\" class=\"docClass\">Ext.Array.flatten</a> instead</p>\n",
          "tagname": "deprecated",
          "version": "4.0.0",
          "doc": null
        },
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "array",
            "doc": "<p>The array to flatten</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.Array",
          "tagname": "alias",
          "member": "flatten",
          "doc": null
        },
        "name": "flatten",
        "shortDoc": "Old alias to Ext.Array.flatten\n\nRecursively flattens into 1-d Array. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-flatten\" rel=\"Ext.Array-method-flatten\" class=\"docClass\">Ext.Array.flatten</a></p>\n\n<p>Recursively flattens into 1-d Array. Injects Arrays inline.</p>\n",
        "return": {
          "type": "Array",
          "properties": null,
          "name": "return",
          "doc": "<p>The 1-d array.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1048,
        "owner": "Ext",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-method-fly",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "el",
            "doc": "<p>The dom node or id</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "named",
            "doc": "<p>(optional) Allows for creation of named reusable flyweights to prevent conflicts (e.g.\ninternally Ext uses \"_global\")</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.Element",
          "tagname": "alias",
          "member": "fly",
          "doc": null
        },
        "name": "fly",
        "shortDoc": "Gets the globally shared flyweight Element, with the passed node as the active element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Gets the globally shared flyweight Element, with the passed node as the active element. Do not store a reference\nto this element - the dom node can be overwritten by other code. <a href=\"#/api/Ext-method-fly\" rel=\"Ext-method-fly\" class=\"docClass\">fly</a> is alias for\n<a href=\"#/api/Ext.Element-method-fly\" rel=\"Ext.Element-method-fly\" class=\"docClass\">Ext.Element.fly</a>.</p>\n\n<p>Use this to make one-time references to DOM elements which are not going to be accessed again either by\napplication code, or by Ext's classes. If accessing an element which will be processed regularly, then <a href=\"#/api/Ext-method-get\" rel=\"Ext-method-get\" class=\"docClass\">Ext.get</a> will be more appropriate to take advantage of the caching provided by the <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>\nclass.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>The shared Element object (or null if no matching element was found)</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1041,
        "owner": "Ext",
        "html_filename": "Element2.html",
        "href": "Element2.html#Ext-method-get",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/HTMLElement/Ext.Element",
            "properties": [

            ],
            "optional": false,
            "name": "el",
            "doc": "<p>The id of the node, a DOM Node or an existing Element.</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.Element",
          "tagname": "alias",
          "member": "get",
          "doc": null
        },
        "name": "get",
        "shortDoc": "Retrieves Ext.Element objects. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/Element.js",
        "doc": "<p>Retrieves <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> objects. <a href=\"#/api/Ext-method-get\" rel=\"Ext-method-get\" class=\"docClass\">get</a> is an alias for <a href=\"#/api/Ext.Element-method-get\" rel=\"Ext.Element-method-get\" class=\"docClass\">Ext.Element.get</a>.</p>\n\n<p><strong>This method does not retrieve <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a>s.</strong> This method retrieves <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>\nobjects which encapsulate DOM elements. To retrieve a Component by its ID, use <a href=\"#/api/Ext.ComponentManager-method-get\" rel=\"Ext.ComponentManager-method-get\" class=\"docClass\">Ext.ComponentManager.get</a>.</p>\n\n<p>Uses simple caching to consistently return the same object. Automatically fixes if an object was recreated with\nthe same id via AJAX or DOM.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>The Element object (or null if no matching element was found)</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 85,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-method-getBody",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getBody",
        "shortDoc": "Returns the current document body as an Ext.Element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>Returns the current document body as an <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>.</p>\n",
        "return": {
          "type": "undefined",
          "properties": null,
          "name": "return",
          "doc": "<p>Ext.Element The document body</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1088,
        "owner": "Ext",
        "html_filename": "ClassManager.html",
        "href": "ClassManager.html#Ext-method-getClass",
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
        "alias": {
          "cls": "Ext.ClassManager",
          "tagname": "alias",
          "member": "getClass",
          "doc": null
        },
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
        "linenr": 1059,
        "owner": "Ext",
        "html_filename": "ClassManager.html",
        "href": "ClassManager.html#Ext-method-getClassName",
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
        "alias": {
          "cls": "Ext.ClassManager",
          "tagname": "alias",
          "member": "getName",
          "doc": null
        },
        "name": "getClassName",
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
        "linenr": 118,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-method-getCmp",
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
            "doc": "<p>The component <a href=\"#/api/Ext.Component-cfg-id\" rel=\"Ext.Component-cfg-id\" class=\"docClass\">id</a></p>\n"
          }
        ],
        "alias": null,
        "name": "getCmp",
        "shortDoc": "This is shorthand reference to Ext.ComponentManager.get. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>This is shorthand reference to <a href=\"#/api/Ext.ComponentManager-method-get\" rel=\"Ext.ComponentManager-method-get\" class=\"docClass\">Ext.ComponentManager.get</a>.\nLooks up an existing <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a> by <a href=\"#/api/Ext.Component-cfg-id\" rel=\"Ext.Component-cfg-id\" class=\"docClass\">id</a></p>\n",
        "return": {
          "type": "undefined",
          "properties": null,
          "name": "return",
          "doc": "<p>Ext.Component The Component, <tt>undefined</tt> if not found, or <tt>null</tt> if a\nClass was found.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 110,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-method-getDoc",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getDoc",
        "shortDoc": "Returns the current HTML document object as an Ext.Element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>Returns the current HTML document object as an <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>.</p>\n",
        "return": {
          "type": "undefined",
          "properties": null,
          "name": "return",
          "doc": "<p>Ext.Element The document</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 471,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-method-getDom",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/HTMLElement/Ext.Element",
            "properties": [

            ],
            "optional": false,
            "name": "el",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "getDom",
        "shortDoc": "Return the dom node for the passed String (id), dom node, or Ext.Element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>Return the dom node for the passed String (id), dom node, or <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>.\nOptional 'strict' flag is needed for IE since it can return 'name' and\n'id' elements by using getElementById.\nHere are some examples:</p>\n\n<pre><code>// gets dom node based on id\nvar elDom = Ext.getDom('elId');\n// gets dom node based on the dom node\nvar elDom1 = Ext.getDom(elDom);\n\n// If we don&#39;t know if we are working with an\n// <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> or a dom node use Ext.getDom\nfunction(el){\n    var dom = Ext.getDom(el);\n    // do something with the dom node\n}\n</code></pre>\n\n\n<p><b>Note</b>: the dom node to be found actually needs to exist (be rendered, etc)\nwhen this method is called to be successful.</p>\n",
        "return": {
          "type": "undefined",
          "properties": null,
          "name": "return",
          "doc": "<p>HTMLElement</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 93,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-method-getHead",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getHead",
        "shortDoc": "Returns the current document head as an Ext.Element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>Returns the current document head as an <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>.</p>\n",
        "return": {
          "type": "undefined",
          "properties": null,
          "name": "return",
          "doc": "<p>Ext.Element The document head</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 129,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-method-getOrientation",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getOrientation",
        "shortDoc": "Returns the current orientation of the mobile device ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>Returns the current orientation of the mobile device</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>Either 'portrait' or 'landscape'</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 856,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-method-getScrollBarWidth",
        "protected": false,
        "deprecated": {
          "text": "\n",
          "tagname": "deprecated",
          "version": null,
          "doc": null
        },
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "force",
            "doc": "<p>(optional) true to force a recalculation of the value.</p>\n"
          }
        ],
        "alias": null,
        "name": "getScrollBarWidth",
        "shortDoc": "Utility method for getting the width of the browser's vertical scrollbar. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>Utility method for getting the width of the browser's vertical scrollbar. This\ncan differ depending on operating system settings, such as the theme or font size.</p>\n\n<p>This method is deprected in favor of <a href=\"#/api/Ext-method-getScrollbarSize\" rel=\"Ext-method-getScrollbarSize\" class=\"docClass\">getScrollbarSize</a>.</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>The width of a vertical scrollbar.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 822,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-method-getScrollbarSize",
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
            "name": "force",
            "doc": "<p>(optional) true to force a recalculation of the value.</p>\n"
          }
        ],
        "alias": null,
        "name": "getScrollbarSize",
        "shortDoc": "Returns the size of the browser scrollbars. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>Returns the size of the browser scrollbars. This can differ depending on\noperating system settings, such as the theme or font size.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>An object containing the width of a vertical scrollbar and the\nheight of a horizontal scrollbar.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 155,
        "owner": "Ext",
        "html_filename": "StoreManager.html",
        "href": "StoreManager.html#Ext-method-getStore",
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
            "doc": "<p>The id of the Store, or a Store instance</p>\n"
          }
        ],
        "alias": null,
        "name": "getStore",
        "shortDoc": "Gets a registered Store by id (shortcut to Ext.data.StoreManager.lookup) ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/StoreManager.js",
        "doc": "<p>Gets a registered Store by id (shortcut to <a href=\"#/api/Ext.data.StoreManager-method-lookup\" rel=\"Ext.data.StoreManager-method-lookup\" class=\"docClass\">Ext.data.StoreManager.lookup</a>)</p>\n",
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
        "linenr": 200,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-method-htmlDecode",
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
            "name": "value",
            "doc": "<p>The string to decode</p>\n"
          }
        ],
        "alias": null,
        "name": "htmlDecode",
        "shortDoc": "Convert certain characters (&amp;, &lt;, >, and ') from their HTML character equivalents. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>Convert certain characters (&amp;, &lt;, >, and ') from their HTML character equivalents.</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The decoded text</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 191,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-method-htmlEncode",
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
            "name": "value",
            "doc": "<p>The string to encode</p>\n"
          }
        ],
        "alias": null,
        "name": "htmlEncode",
        "shortDoc": "Convert certain characters (&amp;, &lt;, >, and ') to their HTML character equivalents for literal display in web pages. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>Convert certain characters (&amp;, &lt;, >, and ') to their HTML character equivalents for literal display in web pages.</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The encoded text</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 57,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-method-id",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "HTMLElement/Ext.Element",
            "properties": [

            ],
            "optional": true,
            "name": "el",
            "doc": "<p>(optional) The element to generate an id for</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "prefix",
            "doc": "<p>(optional) Id prefix (defaults \"ext-gen\")</p>\n"
          }
        ],
        "alias": null,
        "name": "id",
        "shortDoc": "Generates unique ids. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>Generates unique ids. If the element already has an id, it is unchanged</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The generated Id.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 990,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-method-invoke",
        "protected": false,
        "deprecated": {
          "text": "<p>Will be removed in the next major version</p>\n",
          "tagname": "deprecated",
          "version": "4.0.0",
          "doc": null
        },
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array/NodeList",
            "properties": [

            ],
            "optional": false,
            "name": "arr",
            "doc": "<p>The Array of items to invoke the method on.</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "methodName",
            "doc": "<p>The method name to invoke.</p>\n"
          },
          {
            "type": "Object...",
            "properties": [

            ],
            "optional": false,
            "name": "args",
            "doc": "<p>Arguments to send into the method invocation.</p>\n"
          }
        ],
        "alias": null,
        "name": "invoke",
        "shortDoc": "Invokes a method on each item in an Array. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>Invokes a method on each item in an Array.</p>\n\n<pre><code>// Example:\nExt.invoke(Ext.query(\"p\"), \"getAttribute\", \"id\");\n// [el1.getAttribute(\"id\"), el2.getAttribute(\"id\"), ..., elN.getAttribute(\"id\")]\n</code></pre>\n\n",
        "return": {
          "type": "Array",
          "properties": null,
          "name": "return",
          "doc": "<p>The results of invoking the method on each item in the array.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 348,
        "owner": "Ext",
        "html_filename": "Ext.html",
        "href": "Ext.html#Ext-method-isArray",
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
            "name": "target",
            "doc": "<p>The target to test</p>\n"
          }
        ],
        "alias": null,
        "name": "isArray",
        "shortDoc": "Returns true if the passed value is a JavaScript Array, false otherwise. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext.js",
        "doc": "<p>Returns true if the passed value is a JavaScript Array, false otherwise.</p>\n",
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
        "linenr": 436,
        "owner": "Ext",
        "html_filename": "Ext.html",
        "href": "Ext.html#Ext-method-isBoolean",
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
            "name": "value",
            "doc": "<p>The value to test</p>\n"
          }
        ],
        "alias": null,
        "name": "isBoolean",
        "shortDoc": "Returns true if the passed value is a boolean. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext.js",
        "doc": "<p>Returns true if the passed value is a boolean.</p>\n",
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
        "linenr": 359,
        "owner": "Ext",
        "html_filename": "Ext.html",
        "href": "Ext.html#Ext-method-isDate",
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
            "doc": "<p>The object to test</p>\n"
          }
        ],
        "alias": null,
        "name": "isDate",
        "shortDoc": "Returns true if the passed value is a JavaScript Date object, false otherwise. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext.js",
        "doc": "<p>Returns true if the passed value is a JavaScript Date object, false otherwise.</p>\n",
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
        "linenr": 464,
        "owner": "Ext",
        "html_filename": "Ext.html",
        "href": "Ext.html#Ext-method-isDefined",
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
            "name": "value",
            "doc": "<p>The value to test</p>\n"
          }
        ],
        "alias": null,
        "name": "isDefined",
        "shortDoc": "Returns true if the passed value is defined. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext.js",
        "doc": "<p>Returns true if the passed value is defined.</p>\n",
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
        "linenr": 446,
        "owner": "Ext",
        "html_filename": "Ext.html",
        "href": "Ext.html#Ext-method-isElement",
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
            "name": "value",
            "doc": "<p>The value to test</p>\n"
          }
        ],
        "alias": null,
        "name": "isElement",
        "shortDoc": "Returns true if the passed value is an HTMLElement ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext.js",
        "doc": "<p>Returns true if the passed value is an HTMLElement</p>\n",
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
        "linenr": 331,
        "owner": "Ext",
        "html_filename": "Ext.html",
        "href": "Ext.html#Ext-method-isEmpty",
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
            "name": "value",
            "doc": "<p>The value to test</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "allowEmptyString",
            "doc": "<p>(optional) true to allow empty strings (defaults to false)</p>\n"
          }
        ],
        "alias": null,
        "name": "isEmpty",
        "shortDoc": "Returns true if the passed value is empty, false otherwise. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext.js",
        "doc": "<p>Returns true if the passed value is empty, false otherwise. The value is deemed to be empty if it is either:</p>\n\n<ul>\n<li><code>null</code></li>\n<li><code>undefined</code></li>\n<li>a zero-length array</li>\n<li>a zero-length string (Unless the <code>allowEmptyString</code> parameter is set to <code>true</code>)</li>\n</ul>\n\n",
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
        "linenr": 394,
        "owner": "Ext",
        "html_filename": "Ext.html",
        "href": "Ext.html#Ext-method-isFunction",
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
            "name": "value",
            "doc": "<p>The value to test</p>\n"
          }
        ],
        "alias": null,
        "name": "isFunction",
        "shortDoc": "Returns true if the passed value is a JavaScript Function, false otherwise. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext.js",
        "doc": "<p>Returns true if the passed value is a JavaScript Function, false otherwise.</p>\n",
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
        "linenr": 473,
        "owner": "Ext",
        "html_filename": "Ext.html",
        "href": "Ext.html#Ext-method-isIterable",
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
            "name": "value",
            "doc": "<p>The value to test</p>\n"
          }
        ],
        "alias": null,
        "name": "isIterable",
        "shortDoc": "Returns true if the passed value is iterable, false otherwise ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext.js",
        "doc": "<p>Returns true if the passed value is iterable, false otherwise</p>\n",
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
        "linenr": 409,
        "owner": "Ext",
        "html_filename": "Ext.html",
        "href": "Ext.html#Ext-method-isNumber",
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
            "name": "value",
            "doc": "<p>The value to test</p>\n"
          }
        ],
        "alias": null,
        "name": "isNumber",
        "shortDoc": "Returns true if the passed value is a number. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext.js",
        "doc": "<p>Returns true if the passed value is a number. Returns false for non-finite numbers.</p>\n",
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
        "linenr": 418,
        "owner": "Ext",
        "html_filename": "Ext.html",
        "href": "Ext.html#Ext-method-isNumeric",
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
            "name": "value",
            "doc": "<p>Examples: 1, '1', '2.34'</p>\n"
          }
        ],
        "alias": null,
        "name": "isNumeric",
        "shortDoc": "Validates that a value is numeric. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext.js",
        "doc": "<p>Validates that a value is numeric.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if numeric, false otherwise</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 368,
        "owner": "Ext",
        "html_filename": "Ext.html",
        "href": "Ext.html#Ext-method-isObject",
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
            "name": "value",
            "doc": "<p>The value to test</p>\n"
          }
        ],
        "alias": null,
        "name": "isObject",
        "shortDoc": "Returns true if the passed value is a JavaScript Object, false otherwise. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext.js",
        "doc": "<p>Returns true if the passed value is a JavaScript Object, false otherwise.</p>\n",
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
        "linenr": 383,
        "owner": "Ext",
        "html_filename": "Ext.html",
        "href": "Ext.html#Ext-method-isPrimitive",
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
            "name": "value",
            "doc": "<p>The value to test</p>\n"
          }
        ],
        "alias": null,
        "name": "isPrimitive",
        "shortDoc": "Returns true if the passed value is a JavaScript 'primitive', a string, number or boolean. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext.js",
        "doc": "<p>Returns true if the passed value is a JavaScript 'primitive', a string, number or boolean.</p>\n",
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
        "linenr": 427,
        "owner": "Ext",
        "html_filename": "Ext.html",
        "href": "Ext.html#Ext-method-isString",
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
            "name": "value",
            "doc": "<p>The value to test</p>\n"
          }
        ],
        "alias": null,
        "name": "isString",
        "shortDoc": "Returns true if the passed value is a string. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext.js",
        "doc": "<p>Returns true if the passed value is a string.</p>\n",
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
        "linenr": 455,
        "owner": "Ext",
        "html_filename": "Ext.html",
        "href": "Ext.html#Ext-method-isTextNode",
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
            "name": "value",
            "doc": "<p>The value to test</p>\n"
          }
        ],
        "alias": null,
        "name": "isTextNode",
        "shortDoc": "Returns true if the passed value is a TextNode ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext.js",
        "doc": "<p>Returns true if the passed value is a TextNode</p>\n",
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
        "linenr": 101,
        "owner": "Ext",
        "html_filename": "Ext.html",
        "href": "Ext.html#Ext-method-iterate",
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
            "name": "object",
            "doc": "<p>The object or array to be iterated.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "fn",
            "doc": "<p>The function to be called for each iteration. See and <a href=\"#/api/Ext.Array-method-each\" rel=\"Ext.Array-method-each\" class=\"docClass\">Ext.Array.each</a> and\n<a href=\"#/api/Ext.Object-method-each\" rel=\"Ext.Object-method-each\" class=\"docClass\">Ext.Object.each</a> for detailed lists of arguments passed to this function depending on the given object\ntype that is being iterated.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(Optional) The scope (<code>this</code> reference) in which the specified function is executed.\nDefaults to the object being iterated itself.</p>\n"
          }
        ],
        "alias": null,
        "name": "iterate",
        "shortDoc": "Iterates either an array or an object. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext.js",
        "doc": "<p>Iterates either an array or an object. This method delegates to\n<a href=\"#/api/Ext.Array-method-each\" rel=\"Ext.Array-method-each\" class=\"docClass\">Ext.Array.each</a> if the given value is iterable, and <a href=\"#/api/Ext.Object-method-each\" rel=\"Ext.Object-method-each\" class=\"docClass\">Ext.Object.each</a> otherwise.</p>\n",
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
        "linenr": 994,
        "owner": "Ext",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-method-max",
        "protected": false,
        "deprecated": {
          "text": "<p>Use <a href=\"#/api/Ext.Array-method-max\" rel=\"Ext.Array-method-max\" class=\"docClass\">Ext.Array.max</a> instead</p>\n",
          "tagname": "deprecated",
          "version": "4.0.0",
          "doc": null
        },
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array/NodeList",
            "properties": [

            ],
            "optional": false,
            "name": "array",
            "doc": "<p>The Array from which to select the maximum value.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "comparisonFn",
            "doc": "<p>(optional) a function to perform the comparision which determines maximization.\nIf omitted the \">\" operator will be used. Note: gt = 1; eq = 0; lt = -1</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.Array",
          "tagname": "alias",
          "member": "max",
          "doc": null
        },
        "name": "max",
        "shortDoc": "Old alias to Ext.Array.max\n\nReturns the maximum value in the Array. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-max\" rel=\"Ext.Array-method-max\" class=\"docClass\">Ext.Array.max</a></p>\n\n<p>Returns the maximum value in the Array.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>maxValue The maximum value</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1012,
        "owner": "Ext",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-method-mean",
        "protected": false,
        "deprecated": {
          "text": "<p>Use <a href=\"#/api/Ext.Array-method-mean\" rel=\"Ext.Array-method-mean\" class=\"docClass\">Ext.Array.mean</a> instead</p>\n",
          "tagname": "deprecated",
          "version": "4.0.0",
          "doc": null
        },
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "array",
            "doc": "<p>The Array to calculate the mean value of.</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.Array",
          "tagname": "alias",
          "member": "mean",
          "doc": null
        },
        "name": "mean",
        "shortDoc": "Old alias to Ext.Array.mean\n\nCalculates the mean of all items in the array. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-mean\" rel=\"Ext.Array-method-mean\" class=\"docClass\">Ext.Array.mean</a></p>\n\n<p>Calculates the mean of all items in the array.</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>The mean.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 490,
        "owner": "Ext",
        "html_filename": "Object.html",
        "href": "Object.html#Ext-method-merge",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "merge",
        "shortDoc": "A convenient alias method for Ext.Object.merge ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Object.js",
        "doc": "<p>A convenient alias method for <a href=\"#/api/Ext.Object-method-merge\" rel=\"Ext.Object-method-merge\" class=\"docClass\">Ext.Object.merge</a></p>\n",
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
        "linenr": 985,
        "owner": "Ext",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-method-min",
        "protected": false,
        "deprecated": {
          "text": "<p>Use <a href=\"#/api/Ext.Array-method-min\" rel=\"Ext.Array-method-min\" class=\"docClass\">Ext.Array.min</a> instead</p>\n",
          "tagname": "deprecated",
          "version": "4.0.0",
          "doc": null
        },
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array/NodeList",
            "properties": [

            ],
            "optional": false,
            "name": "array",
            "doc": "<p>The Array from which to select the minimum value.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "comparisonFn",
            "doc": "<p>(optional) a function to perform the comparision which determines minimization.\nIf omitted the \"&lt;\" operator will be used. Note: gt = 1; eq = 0; lt = -1</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.Array",
          "tagname": "alias",
          "member": "min",
          "doc": null
        },
        "name": "min",
        "shortDoc": "Old alias to Ext.Array.min\n\nReturns the minimum value in the Array. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-min\" rel=\"Ext.Array-method-min\" class=\"docClass\">Ext.Array.min</a></p>\n\n<p>Returns the minimum value in the Array.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>minValue The minimum value</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1095,
        "owner": "Ext",
        "html_filename": "ClassManager.html",
        "href": "ClassManager.html#Ext-method-namespace",
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
            "name": "namespace1",
            "doc": "\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "namespace2",
            "doc": "\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "etc",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "namespace",
        "shortDoc": "Creates namespaces to be used for scoping variables and classes so that they are not global. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
        "doc": "<p>Creates namespaces to be used for scoping variables and classes so that they are not global.\nSpecifying the last node of a namespace implicitly creates all other nodes. Usage:</p>\n\n<pre><code>Ext.namespace('Company', 'Company.data');\n\n// equivalent and preferable to the above syntax\nExt.namespace('Company.data');\n\nCompany.Widget = function() { ... };\n\nCompany.data.CustomStore = function(config) { ... };\n</code></pre>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>The namespace object. (If multiple arguments are passed, this will be the last namespace created)</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1127,
        "owner": "Ext",
        "html_filename": "ClassManager.html",
        "href": "ClassManager.html#Ext-method-ns",
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
            "name": "namespace1",
            "doc": "\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "namespace2",
            "doc": "\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "etc",
            "doc": "\n"
          }
        ],
        "alias": {
          "cls": "Ext",
          "tagname": "alias",
          "member": "namespace",
          "doc": null
        },
        "name": "ns",
        "shortDoc": "Convenient alias for Ext.namespace\n\nCreates namespaces to be used for scoping variables and classes so that they are ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
        "doc": "<p>Convenient alias for <a href=\"#/api/Ext-method-namespace\" rel=\"Ext-method-namespace\" class=\"docClass\">Ext.namespace</a></p>\n\n<p>Creates namespaces to be used for scoping variables and classes so that they are not global.\nSpecifying the last node of a namespace implicitly creates all other nodes. Usage:</p>\n\n<pre><code>Ext.namespace('Company', 'Company.data');\n\n// equivalent and preferable to the above syntax\nExt.namespace('Company.data');\n\nCompany.Widget = function() { ... };\n\nCompany.data.CustomStore = function(config) { ... };\n</code></pre>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>The namespace object. (If multiple arguments are passed, this will be the last namespace created)</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 98,
        "owner": "Ext",
        "html_filename": "Number3.html",
        "href": "Number3.html#Ext-method-num",
        "protected": false,
        "deprecated": {
          "text": "<p>Replaced by Ext.Number.from</p>\n",
          "tagname": "deprecated",
          "version": "4.0.0",
          "doc": null
        },
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "num",
        "shortDoc": "This method is deprecated, please use Ext.Number.from instead ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Number.js",
        "doc": "<p>This method is deprecated, please use <a href=\"#/api/Ext.Number-method-from\" rel=\"Ext.Number-method-from\" class=\"docClass\">Ext.Number.from</a> instead</p>\n",
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
        "linenr": 853,
        "owner": "Ext",
        "html_filename": "EventManager.html",
        "href": "EventManager.html#Ext-method-onDocumentReady",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "onDocumentReady",
        "shortDoc": "Alias for Ext.EventManager.onDocumentReady ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventManager.js",
        "doc": "<p>Alias for <a href=\"#/api/Ext.EventManager-method-onDocumentReady\" rel=\"Ext.EventManager-method-onDocumentReady\" class=\"docClass\">Ext.EventManager.onDocumentReady</a></p>\n",
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
        "linenr": 844,
        "owner": "Ext",
        "html_filename": "EventManager.html",
        "href": "EventManager.html#Ext-method-onReady",
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
            "name": "fn",
            "doc": "\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "scope",
            "doc": "\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "options",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "onReady",
        "shortDoc": "Alias for Ext.Loader.onReady with withDomReady set to true ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventManager.js",
        "doc": "<p>Alias for <a href=\"#/api/Ext.Loader-method-onReady\" rel=\"Ext.Loader-method-onReady\" class=\"docClass\">Ext.Loader.onReady</a> with withDomReady set to true</p>\n",
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
        "linenr": 202,
        "owner": "Ext",
        "html_filename": "Ext.html",
        "href": "Ext.html#Ext-method-override",
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
            "name": "cls",
            "doc": "<p>The class to override</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "overrides",
            "doc": "<p>The list of functions to add to origClass. This should be specified as an object literal\ncontaining one or more methods.</p>\n"
          }
        ],
        "alias": null,
        "name": "override",
        "shortDoc": "Proxy to Ext.Base.override. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext.js",
        "doc": "<p>Proxy to <a href=\"#/api/Ext.Base-method-override\" rel=\"Ext.Base-method-override\" class=\"docClass\">Ext.Base.override</a>. Please refer <a href=\"#/api/Ext.Base-method-override\" rel=\"Ext.Base-method-override\" class=\"docClass\">Ext.Base.override</a> for further details.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    sayHi: function() {\n        alert('Hi!');\n    }\n}\n\nExt.override(My.cool.Class, {\n    sayHi: function() {\n        alert('About to say...');\n\n        this.callOverridden();\n    }\n});\n\nvar cool = new My.cool.Class();\ncool.sayHi(); // alerts 'About to say...'\n              // alerts 'Hi!'\n</code></pre>\n\n<p>Please note that <code>this.callOverridden()</code> only works if the class was previously\ncreated with {@link Ext#define)</p>\n",
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
        "linenr": 958,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-method-partition",
        "protected": false,
        "deprecated": {
          "text": "<p>Will be removed in the next major version</p>\n",
          "tagname": "deprecated",
          "version": "4.0.0",
          "doc": null
        },
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array/NodeList",
            "properties": [

            ],
            "optional": false,
            "name": "arr",
            "doc": "<p>The array to partition</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "truth",
            "doc": "<p>(optional) a function to determine truth.  If this is omitted the element\nitself must be able to be evaluated for its truthfulness.</p>\n"
          }
        ],
        "alias": null,
        "name": "partition",
        "shortDoc": "Partitions the set into two sets: a true set and a false set. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>Partitions the set into two sets: a true set and a false set.\nExample:\nExample2:</p>\n\n<pre><code>// Example 1:\nExt.partition([true, false, true, true, false]); // [[true, true, true], [false, false]]\n\n// Example 2:\nExt.partition(\n    Ext.query(\"p\"),\n    function(val){\n        return val.className == \"class1\"\n    }\n);\n// true are those paragraph elements with a className of \"class1\",\n// false set are those that do not have that className.\n</code></pre>\n\n",
        "return": {
          "type": "Array",
          "properties": null,
          "name": "return",
          "doc": "<p>[array of truish values, array of falsy values]</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 364,
        "owner": "Ext",
        "html_filename": "Function.html",
        "href": "Function.html#Ext-method-pass",
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
            "doc": "<p>The original function</p>\n"
          },
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "args",
            "doc": "<p>The arguments to pass to new callback</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed.</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.Function",
          "tagname": "alias",
          "member": "pass",
          "doc": null
        },
        "name": "pass",
        "shortDoc": "Create a new function from the provided fn, the arguments of which are pre-set to args. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Function.js",
        "doc": "<p>Create a new function from the provided <code>fn</code>, the arguments of which are pre-set to <code>args</code>.\nNew arguments passed to the newly created callback when it's invoked are appended after the pre-set ones.\nThis is especially useful when creating callbacks.</p>\n\n<p>For example:</p>\n\n<pre><code>var originalFunction = function(){\n    alert(Ext.Array.from(arguments).join(' '));\n};\n\nvar callback = Ext.Function.pass(originalFunction, ['Hello', 'World']);\n\ncallback(); // alerts 'Hello World'\ncallback('by Me'); // alerts 'Hello World by Me'\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-pass\" rel=\"Ext-method-pass\" class=\"docClass\">Ext.pass</a> is alias for <a href=\"#/api/Ext.Function-method-pass\" rel=\"Ext.Function-method-pass\" class=\"docClass\">Ext.Function.pass</a></p>\n",
        "return": {
          "type": "Function",
          "properties": null,
          "name": "return",
          "doc": "<p>The new callback function</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1048,
        "owner": "Ext",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-method-pluck",
        "protected": false,
        "deprecated": {
          "text": "<p>Use <a href=\"#/api/Ext.Array-method-pluck\" rel=\"Ext.Array-method-pluck\" class=\"docClass\">Ext.Array.pluck</a> instead</p>\n",
          "tagname": "deprecated",
          "version": "4.0.0",
          "doc": null
        },
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array/NodeList",
            "properties": [

            ],
            "optional": false,
            "name": "array",
            "doc": "<p>The Array of items to pluck the value from.</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "propertyName",
            "doc": "<p>The property name to pluck from each element.</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.Array",
          "tagname": "alias",
          "member": "pluck",
          "doc": null
        },
        "name": "pluck",
        "shortDoc": "Old alias to Ext.Array.pluck\n\nPlucks the value of a property from each item in the Array. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-pluck\" rel=\"Ext.Array-method-pluck\" class=\"docClass\">Ext.Array.pluck</a></p>\n\n<p>Plucks the value of a property from each item in the Array. Example:</p>\n\n<pre><code>Ext.Array.pluck(Ext.query(\"p\"), \"className\"); // [el1.className, el2.className, ..., elN.className]\n</code></pre>\n",
        "return": {
          "type": "Array",
          "properties": null,
          "name": "return",
          "doc": "<p>The value from each item in the Array.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 97,
        "owner": "Ext",
        "html_filename": "PluginManager.html",
        "href": "PluginManager.html#Ext-method-preg",
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
            "name": "ptype",
            "doc": "<p>The ptype mnemonic string by which the Plugin class\nmay be looked up.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "cls",
            "doc": "<p>The new Plugin class.</p>\n"
          }
        ],
        "alias": null,
        "name": "preg",
        "shortDoc": "Shorthand for Ext.PluginManager.registerType ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/PluginManager.js",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.PluginManager-method-registerType\" rel=\"Ext.PluginManager-method-registerType\" class=\"docClass\">Ext.PluginManager.registerType</a></p>\n",
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
        "linenr": 979,
        "owner": "Ext",
        "html_filename": "DomQuery.html",
        "href": "DomQuery.html#Ext-method-query",
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
            "name": "path",
            "doc": "<p>The selector/xpath query</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": true,
            "name": "root",
            "doc": "<p>(optional) The start of the query (defaults to document).</p>\n"
          }
        ],
        "alias": null,
        "name": "query",
        "shortDoc": "Selects an array of DOM nodes by CSS/XPath selector. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/DomQuery.js",
        "doc": "<p>Selects an array of DOM nodes by CSS/XPath selector. Shorthand of <a href=\"#/api/Ext.DomQuery-method-select\" rel=\"Ext.DomQuery-method-select\" class=\"docClass\">Ext.DomQuery.select</a></p>\n",
        "return": {
          "type": "HTMLElement[]",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 165,
        "owner": "Ext",
        "html_filename": "ModelManager.html",
        "href": "ModelManager.html#Ext-method-regModel",
        "protected": false,
        "deprecated": {
          "text": "<p>Use <a href=\"#/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">define</a> instead.</p>\n",
          "tagname": "deprecated",
          "version": "4.0.0",
          "doc": null
        },
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "name",
            "doc": "<p>Name of the Model class.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "config",
            "doc": "<p>A configuration object for the Model you wish to create.</p>\n"
          }
        ],
        "alias": null,
        "name": "regModel",
        "shortDoc": "Old way for creating Model classes. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/ModelManager.js",
        "doc": "<p>Old way for creating Model classes.  Instead use:</p>\n\n<pre><code>Ext.define(\"MyModel\", {\n    extend: \"Ext.data.Model\",\n    fields: []\n});\n</code></pre>\n",
        "return": {
          "type": "Ext.data.Model",
          "properties": null,
          "name": "return",
          "doc": "<p>The newly registered Model</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 117,
        "owner": "Ext",
        "html_filename": "StoreManager.html",
        "href": "StoreManager.html#Ext-method-regStore",
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
            "doc": "<p>The id to set on the new store</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "config",
            "doc": "<p>The store config</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "cls",
            "doc": "<p>The new Component class.</p>\n"
          }
        ],
        "alias": null,
        "name": "regStore",
        "shortDoc": "Creates a new store for the given id and config, then registers it with the Store Mananger. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/StoreManager.js",
        "doc": "<p>Creates a new store for the given id and config, then registers it with the <a href=\"#/api/Ext.data.StoreManager\" rel=\"Ext.data.StoreManager\" class=\"docClass\">Store Mananger</a>. \nSample usage:</p>\n\n\n\n\n<pre><code>    Ext.regStore('AllUsers', {\n        model: 'User'\n    });\n\n    //the store can now easily be used throughout the application\n    new Ext.List({\n        store: 'AllUsers',\n        ... other config\n    });\n    </code></pre>\n\n",
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
        "linenr": 519,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-method-removeNode",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "node",
            "doc": "<p>The node to remove</p>\n"
          }
        ],
        "alias": null,
        "name": "removeNode",
        "shortDoc": "Removes a DOM node from the document. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>Removes a DOM node from the document.</p>\n\n<p>Removes this element from the document, removes all DOM event listeners, and deletes the cache reference.\nAll DOM event listeners are removed from this element. If <a href=\"#/api/Ext-property-enableNestedListenerRemoval\" rel=\"Ext-property-enableNestedListenerRemoval\" class=\"docClass\">Ext.enableNestedListenerRemoval</a> is\n<code>true</code>, then DOM event listeners are also removed from all child nodes. The body node\nwill be ignored if passed in.</p>\n\n",
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
        "linenr": 941,
        "owner": "Ext",
        "html_filename": "Loader.html",
        "href": "Loader.html#Ext-method-require",
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
            "name": "expressions",
            "doc": "<p>Can either be a string or an array of string</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "fn",
            "doc": "<p>(Optional) The callback function</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(Optional) The execution scope (<code>this</code>) of the callback function</p>\n"
          },
          {
            "type": "String/String[]",
            "properties": [

            ],
            "optional": true,
            "name": "excludes",
            "doc": "<p>(Optional) Classes to be excluded, useful when being used with expressions</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.Loader",
          "tagname": "alias",
          "member": "require",
          "doc": null
        },
        "name": "require",
        "shortDoc": "Loads all classes by the given names and all their direct dependencies;\noptionally executes the given callback functi...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Loader.js",
        "doc": "<p>Loads all classes by the given names and all their direct dependencies;\noptionally executes the given callback function when finishes, within the optional scope.</p>\n\n<p><a href=\"#/api/Ext-method-require\" rel=\"Ext-method-require\" class=\"docClass\">Ext.require</a> is alias for <a href=\"#/api/Ext.Loader-method-require\" rel=\"Ext.Loader-method-require\" class=\"docClass\">Ext.Loader.require</a> for convenience.</p>\n",
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
        "linenr": 313,
        "owner": "Ext",
        "html_filename": "CompositeElementLite.html",
        "href": "CompositeElementLite.html#Ext-method-select",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/HTMLElement[]",
            "properties": [

            ],
            "optional": false,
            "name": "selector",
            "doc": "<p>The CSS selector or an array of elements</p>\n"
          },
          {
            "type": "HTMLElement/String",
            "properties": [

            ],
            "optional": true,
            "name": "root",
            "doc": "<p>(optional) The root element of the query or id of the root</p>\n"
          }
        ],
        "alias": null,
        "name": "select",
        "shortDoc": "Selects elements based on the passed CSS selector to enable Element methods\nto be applied to many related elements in...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/dom/CompositeElementLite.js",
        "doc": "<p>Selects elements based on the passed CSS selector to enable <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Element</a> methods\nto be applied to many related elements in one statement through the returned <a href=\"#/api/Ext.CompositeElement\" rel=\"Ext.CompositeElement\" class=\"docClass\">CompositeElement</a> or\n<a href=\"#/api/Ext.CompositeElementLite\" rel=\"Ext.CompositeElementLite\" class=\"docClass\">CompositeElementLite</a> object.</p>\n",
        "return": {
          "type": "Ext.CompositeElementLite/Ext.CompositeElement",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1003,
        "owner": "Ext",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-method-sum",
        "protected": false,
        "deprecated": {
          "text": "<p>Use <a href=\"#/api/Ext.Array-method-sum\" rel=\"Ext.Array-method-sum\" class=\"docClass\">Ext.Array.sum</a> instead</p>\n",
          "tagname": "deprecated",
          "version": "4.0.0",
          "doc": null
        },
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "array",
            "doc": "<p>The Array to calculate the sum value of.</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.Array",
          "tagname": "alias",
          "member": "sum",
          "doc": null
        },
        "name": "sum",
        "shortDoc": "Old alias to Ext.Array.sum\n\nCalculates the sum of all items in the given array. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-sum\" rel=\"Ext.Array-method-sum\" class=\"docClass\">Ext.Array.sum</a></p>\n\n<p>Calculates the sum of all items in the given array.</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>The sum.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 948,
        "owner": "Ext",
        "html_filename": "Loader.html",
        "href": "Loader.html#Ext-method-syncRequire",
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
            "name": "expressions",
            "doc": "<p>Can either be a string or an array of string</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "fn",
            "doc": "<p>(Optional) The callback function</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(Optional) The execution scope (<code>this</code>) of the callback function</p>\n"
          },
          {
            "type": "String/String[]",
            "properties": [

            ],
            "optional": true,
            "name": "excludes",
            "doc": "<p>(Optional) Classes to be excluded, useful when being used with expressions</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.Loader",
          "tagname": "alias",
          "member": "syncRequire",
          "doc": null
        },
        "name": "syncRequire",
        "shortDoc": "Synchronously loads all classes by the given names and all their direct dependencies;\noptionally executes the given c...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Loader.js",
        "doc": "<p>Synchronously loads all classes by the given names and all their direct dependencies;\noptionally executes the given callback function when finishes, within the optional scope.</p>\n\n<p><a href=\"#/api/Ext-method-syncRequire\" rel=\"Ext-method-syncRequire\" class=\"docClass\">Ext.syncRequire</a> is alias for <a href=\"#/api/Ext.Loader-method-syncRequire\" rel=\"Ext.Loader-method-syncRequire\" class=\"docClass\">Ext.Loader.syncRequire</a> for convenience.</p>\n",
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
        "linenr": 1057,
        "owner": "Ext",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-method-toArray",
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
            "name": "iterable",
            "doc": "<p>the iterable object to be turned into a true Array.</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": true,
            "name": "start",
            "doc": "<p>(Optional) a zero-based index that specifies the start of extraction. Defaults to 0</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": true,
            "name": "end",
            "doc": "<p>(Optional) a zero-based index that specifies the end of extraction. Defaults to the last\nindex of the iterable value</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.Array",
          "tagname": "alias",
          "member": "toArray",
          "doc": null
        },
        "name": "toArray",
        "shortDoc": "Converts any iterable (numeric indices and a length property) into a true array. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Converts any iterable (numeric indices and a length property) into a true array.</p>\n\n<pre><code>function test() {\n    var args = Ext.Array.toArray(arguments),\n        fromSecondToLastArgs = Ext.Array.toArray(arguments, 1);\n\n    alert(args.join(' '));\n    alert(fromSecondToLastArgs.join(' '));\n}\n\ntest('just', 'testing', 'here'); // alerts 'just testing here';\n                                 // alerts 'testing here';\n\nExt.Array.toArray(document.getElementsByTagName('div')); // will convert the NodeList into an array\nExt.Array.toArray('splitted'); // returns ['s', 'p', 'l', 'i', 't', 't', 'e', 'd']\nExt.Array.toArray('splitted', 0, 3); // returns ['s', 'p', 'l', 'i']\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-toArray\" rel=\"Ext-method-toArray\" class=\"docClass\">Ext.toArray</a> is alias for <a href=\"#/api/Ext.Array-method-toArray\" rel=\"Ext.Array-method-toArray\" class=\"docClass\">Ext.Array.toArray</a></p>\n",
        "return": {
          "type": "Array",
          "properties": null,
          "name": "return",
          "doc": "<p>array</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1056,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-method-toSentence",
        "protected": false,
        "deprecated": {
          "text": "<p>Will be removed in the next major version</p>\n",
          "tagname": "deprecated",
          "version": "4.0.0",
          "doc": null
        },
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String[]",
            "properties": [

            ],
            "optional": false,
            "name": "items",
            "doc": "<p>The array to create a sentence from</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "connector",
            "doc": "<p>The string to use to connect the last two words. Usually 'and' or 'or' - defaults to 'and'.</p>\n"
          }
        ],
        "alias": null,
        "name": "toSentence",
        "shortDoc": "Turns an array into a sentence, joined by a specified connector - e.g.:\nExt.toSentence(['Adama', 'Tigh', 'Roslin']); ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>Turns an array into a sentence, joined by a specified connector - e.g.:\nExt.toSentence(['Adama', 'Tigh', 'Roslin']); //'Adama, Tigh and Roslin'\nExt.toSentence(['Adama', 'Tigh', 'Roslin'], 'or'); //'Adama, Tigh or Roslin'</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The sentence string</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 576,
        "owner": "Ext",
        "html_filename": "Ext.html",
        "href": "Ext.html#Ext-method-type",
        "protected": false,
        "deprecated": {
          "text": "<p>Use <a href=\"#/api/Ext-method-typeOf\" rel=\"Ext-method-typeOf\" class=\"docClass\">typeOf</a> instead</p>\n",
          "tagname": "deprecated",
          "version": "4.0.0",
          "doc": null
        },
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "value",
            "doc": "\n"
          }
        ],
        "alias": {
          "cls": "Ext",
          "tagname": "alias",
          "member": "typeOf",
          "doc": null
        },
        "name": "type",
        "shortDoc": "Old alias to typeOf\n\nReturns the type of the given variable in string format. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext.js",
        "doc": "<p>Old alias to <a href=\"#/api/Ext-method-typeOf\" rel=\"Ext-method-typeOf\" class=\"docClass\">typeOf</a></p>\n\n<p>Returns the type of the given variable in string format. List of possible values are:</p>\n\n<ul>\n<li><code>undefined</code>: If the given value is <code>undefined</code></li>\n<li><code>null</code>: If the given value is <code>null</code></li>\n<li><code>string</code>: If the given value is a string</li>\n<li><code>number</code>: If the given value is a number</li>\n<li><code>boolean</code>: If the given value is a boolean value</li>\n<li><code>date</code>: If the given value is a <code>Date</code> object</li>\n<li><code>function</code>: If the given value is a function reference</li>\n<li><code>object</code>: If the given value is an object</li>\n<li><code>array</code>: If the given value is an array</li>\n<li><code>regexp</code>: If the given value is a regular expression</li>\n<li><code>element</code>: If the given value is a DOM Element</li>\n<li><code>textnode</code>: If the given value is a DOM text node and contains something other than whitespace</li>\n<li><code>whitespace</code>: If the given value is a DOM text node and contains only whitespace</li>\n</ul>\n\n",
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
        "linenr": 258,
        "owner": "Ext",
        "html_filename": "Ext.html",
        "href": "Ext.html#Ext-method-typeOf",
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
            "name": "value",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "typeOf",
        "shortDoc": "Returns the type of the given variable in string format. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext.js",
        "doc": "<p>Returns the type of the given variable in string format. List of possible values are:</p>\n\n<ul>\n<li><code>undefined</code>: If the given value is <code>undefined</code></li>\n<li><code>null</code>: If the given value is <code>null</code></li>\n<li><code>string</code>: If the given value is a string</li>\n<li><code>number</code>: If the given value is a number</li>\n<li><code>boolean</code>: If the given value is a boolean value</li>\n<li><code>date</code>: If the given value is a <code>Date</code> object</li>\n<li><code>function</code>: If the given value is a function reference</li>\n<li><code>object</code>: If the given value is an object</li>\n<li><code>array</code>: If the given value is an array</li>\n<li><code>regexp</code>: If the given value is a regular expression</li>\n<li><code>element</code>: If the given value is a DOM Element</li>\n<li><code>textnode</code>: If the given value is a DOM text node and contains something other than whitespace</li>\n<li><code>whitespace</code>: If the given value is a DOM text node and contains only whitespace</li>\n</ul>\n\n",
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
        "linenr": 1039,
        "owner": "Ext",
        "html_filename": "Array2.html",
        "href": "Array2.html#Ext-method-unique",
        "protected": false,
        "deprecated": {
          "text": "<p>Use <a href=\"#/api/Ext.Array-method-unique\" rel=\"Ext.Array-method-unique\" class=\"docClass\">Ext.Array.unique</a> instead</p>\n",
          "tagname": "deprecated",
          "version": "4.0.0",
          "doc": null
        },
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array",
            "properties": [

            ],
            "optional": false,
            "name": "array",
            "doc": "\n"
          }
        ],
        "alias": {
          "cls": "Ext.Array",
          "tagname": "alias",
          "member": "unique",
          "doc": null
        },
        "name": "unique",
        "shortDoc": "Old alias to Ext.Array.unique\n\nReturns a new array with unique items ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Array.js",
        "doc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-unique\" rel=\"Ext.Array-method-unique\" class=\"docClass\">Ext.Array.unique</a></p>\n\n<p>Returns a new array with unique items</p>\n",
        "return": {
          "type": "Array",
          "properties": null,
          "name": "return",
          "doc": "<p>results</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 209,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-method-urlAppend",
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
            "name": "url",
            "doc": "<p>The URL to append to.</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "s",
            "doc": "<p>The content to append to the URL.</p>\n"
          }
        ],
        "alias": null,
        "name": "urlAppend",
        "shortDoc": "Appends content to the query string of a URL, handling logic for whether to place\na question mark or ampersand. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>Appends content to the query string of a URL, handling logic for whether to place\na question mark or ampersand.</p>\n",
        "return": {
          "type": "undefined",
          "properties": null,
          "name": "return",
          "doc": "<p>(String) The resulting URL</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 518,
        "owner": "Ext",
        "html_filename": "Object.html",
        "href": "Object.html#Ext-method-urlDecode",
        "protected": false,
        "deprecated": {
          "text": "<p>Use <a href=\"#/api/Ext.Object-method-fromQueryString\" rel=\"Ext.Object-method-fromQueryString\" class=\"docClass\">Ext.Object.fromQueryString</a> instead</p>\n",
          "tagname": "deprecated",
          "version": "4.0.0",
          "doc": null
        },
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "urlDecode",
        "shortDoc": "A convenient alias method for Ext.Object.fromQueryString ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Object.js",
        "doc": "<p>A convenient alias method for <a href=\"#/api/Ext.Object-method-fromQueryString\" rel=\"Ext.Object-method-fromQueryString\" class=\"docClass\">Ext.Object.fromQueryString</a></p>\n",
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
        "linenr": 498,
        "owner": "Ext",
        "html_filename": "Object.html",
        "href": "Object.html#Ext-method-urlEncode",
        "protected": false,
        "deprecated": {
          "text": "<p>Use <a href=\"#/api/Ext.Object-method-toQueryString\" rel=\"Ext.Object-method-toQueryString\" class=\"docClass\">Ext.Object.toQueryString</a> instead</p>\n",
          "tagname": "deprecated",
          "version": "4.0.0",
          "doc": null
        },
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "urlEncode",
        "shortDoc": "A convenient alias method for Ext.Object.toQueryString ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/lang/Object.js",
        "doc": "<p>A convenient alias method for <a href=\"#/api/Ext.Object-method-toQueryString\" rel=\"Ext.Object-method-toQueryString\" class=\"docClass\">Ext.Object.toQueryString</a></p>\n",
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
        "linenr": 753,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-method-value",
        "protected": false,
        "deprecated": {
          "text": "<p>Use <a href=\"#/api/Ext-method-valueFrom\" rel=\"Ext-method-valueFrom\" class=\"docClass\">valueFrom</a> instead</p>\n",
          "tagname": "deprecated",
          "version": "4.0.0",
          "doc": null
        },
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "value",
            "doc": "<p>The value to test</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "defaultValue",
            "doc": "<p>The value to return if the original value is empty</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "allowBlank",
            "doc": "<p>(optional) true to allow zero length strings to qualify as non-empty (defaults to false)</p>\n"
          }
        ],
        "alias": null,
        "name": "value",
        "shortDoc": "Utility method for returning a default value if the passed value is empty. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>Utility method for returning a default value if the passed value is empty.</p>\n\n\n<p>The value is deemed to be empty if it is<div class=\"mdetail-params\"><ul>\n<li>null</li>\n<li>undefined</li>\n<li>an empty array</li>\n<li>a zero length string (Unless the <tt>allowBlank</tt> parameter is <tt>true</tt>)</li>\n</ul></div>\n\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>value, if non-empty, else defaultValue</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 245,
        "owner": "Ext",
        "html_filename": "Ext.html",
        "href": "Ext.html#Ext-method-valueFrom",
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
            "name": "value",
            "doc": "<p>The value to test</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "defaultValue",
            "doc": "<p>The value to return if the original value is empty</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "allowBlank",
            "doc": "<p>(optional) true to allow zero length strings to qualify as non-empty (defaults to false)</p>\n"
          }
        ],
        "alias": null,
        "name": "valueFrom",
        "shortDoc": "Returns the given value itself if it's not empty, as described in isEmpty; returns the default\nvalue (second argument...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext.js",
        "doc": "<p>Returns the given value itself if it's not empty, as described in <a href=\"#/api/Ext-method-isEmpty\" rel=\"Ext-method-isEmpty\" class=\"docClass\">isEmpty</a>; returns the default\nvalue (second argument) otherwise.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>value, if non-empty, else defaultValue</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1027,
        "owner": "Ext",
        "html_filename": "ClassManager.html",
        "href": "ClassManager.html#Ext-method-widget",
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
            "doc": "<p>xtype of the widget to create.</p>\n"
          }
        ],
        "alias": null,
        "name": "widget",
        "shortDoc": "Convenient shorthand to create a widget by its xtype, also see Ext.ClassManager.instantiateByAlias\n\nvar button = Ext....",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
        "doc": "<p>Convenient shorthand to create a widget by its xtype, also see <a href=\"#/api/Ext.ClassManager-method-instantiateByAlias\" rel=\"Ext.ClassManager-method-instantiateByAlias\" class=\"docClass\">Ext.ClassManager.instantiateByAlias</a></p>\n\n<pre><code>var button = Ext.widget('button'); // Equivalent to Ext.create('widget.button')\nvar panel = Ext.widget('panel'); // Equivalent to Ext.create('widget.panel')\n</code></pre>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>widget instance</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1016,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-method-zip",
        "protected": false,
        "deprecated": {
          "text": "<p>Will be removed in the next major version</p>\n",
          "tagname": "deprecated",
          "version": "4.0.0",
          "doc": null
        },
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Array/NodeList...",
            "properties": [

            ],
            "optional": false,
            "name": "arr",
            "doc": "<p>This argument may be repeated. Array(s) to contribute values.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "zipper",
            "doc": "<p>(optional) The last item in the argument list. This will drive how the items are zipped together.</p>\n"
          }
        ],
        "alias": null,
        "name": "zip",
        "shortDoc": "Zips N sets together. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>Zips N sets together.</p>\n\n\n<pre><code>// Example 1:\nExt.zip([1,2,3],[4,5,6]); // [[1,4],[2,5],[3,6]]\n// Example 2:\nExt.zip(\n    [ \"+\", \"-\", \"+\"],\n    [  12,  10,  22],\n    [  43,  15,  96],\n    function(a, b, c){\n        return \"$\" + a + \"\" + b + \".\" + c\n    }\n); // [\"$+12.43\", \"$-10.15\", \"$+22.96\"]\n</code></pre>\n\n",
        "return": {
          "type": "Array",
          "properties": null,
          "name": "return",
          "doc": "<p>The zipped set.</p>\n"
        }
      }
    ],
    "property": [
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 745,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-BLANK_IMAGE_URL",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "BLANK_IMAGE_URL",
        "shortDoc": "URL to a 1x1 transparent gif image used by Ext to create inline icons with CSS background images. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>URL to a 1x1 transparent gif image used by Ext to create inline icons with CSS background images.\nIn older versions of IE, this defaults to \"http://sencha.com/s.gif\" and you should change this to a URL on your server.\nFor other browsers it uses an inline data URL.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 434,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-SSL_SECURE_URL",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "SSL_SECURE_URL",
        "shortDoc": "URL to a blank file used by Ext when in secure mode for iframe src and onReady src to prevent\nthe IE insecure content...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>URL to a blank file used by Ext when in secure mode for iframe src and onReady src to prevent\nthe IE insecure content warning (<tt>'about:blank'</tt>, except for IE in secure mode, which is <tt>'javascript:\"\"'</tt>).</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 462,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-USE_NATIVE_JSON",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "USE_NATIVE_JSON",
        "shortDoc": "Indicates whether to use native browser parsing for JSON methods. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>Indicates whether to use native browser parsing for JSON methods.\nThis option is ignored if the browser does not support native JSON methods.\n<b>Note: Native JSON methods will not work with objects that have functions.\nAlso, property names must be quoted, otherwise the data will not parse.</b> (Defaults to false)</p>\n"
      },
      {
        "static": false,
        "type": "Ext.env.Browser",
        "inheritable": false,
        "properties": null,
        "linenr": 167,
        "owner": "Ext",
        "html_filename": "Browser.html",
        "href": "Browser.html#Ext-property-browser",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "browser",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/env/Browser.js",
        "doc": "<p>Global convenient instance of <a href=\"#/api/Ext.env.Browser\" rel=\"Ext.env.Browser\" class=\"docClass\">Ext.env.Browser</a>.</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 703,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-chromeVersion",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "chromeVersion",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>The current version of Chrome (0 if the browser is not Chrome).</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 441,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-enableFx",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "enableFx",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>True if the <a href=\"#/api/Ext.fx.Anim\" rel=\"Ext.fx.Anim\" class=\"docClass\">Ext.fx.Anim</a> Class is available</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 45,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-enableGarbageCollector",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "enableGarbageCollector",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>True to automatically uncache orphaned Ext.Elements periodically (defaults to true)</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 51,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-enableListenerCollection",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "enableListenerCollection",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>True to automatically purge event listeners during garbageCollection (defaults to true).</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 455,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-enableNestedListenerRemoval",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "enableNestedListenerRemoval",
        "shortDoc": "EXPERIMENTAL - True to cascade listener removal to child elements when an element is removed. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>EXPERIMENTAL - True to cascade listener removal to child elements when an element is removed.\nCurrently not optimized for performance.</p>\n"
      },
      {
        "static": false,
        "type": "String[]",
        "inheritable": false,
        "properties": null,
        "linenr": 28,
        "owner": "Ext",
        "html_filename": "Ext.html",
        "href": "Ext.html#Ext-property-enumerables",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "enumerables",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext.js",
        "doc": "<p>An array containing extra enumerables for old browsers</p>\n"
      },
      {
        "static": false,
        "type": "Ext.env.FeatureDetector",
        "inheritable": false,
        "properties": null,
        "linenr": 263,
        "owner": "Ext",
        "html_filename": "FeatureDetector.html",
        "href": "FeatureDetector.html#Ext-property-features",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "features",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/env/FeatureDetector.js",
        "doc": "<p>Global convenient instance of <a href=\"#/api/Ext.env.FeatureDetector\" rel=\"Ext.env.FeatureDetector\" class=\"docClass\">Ext.env.FeatureDetector</a>.</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 709,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-firefoxVersion",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "firefoxVersion",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>The current version of Firefox (0 if the browser is not Firefox).</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 715,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-ieVersion",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "ieVersion",
        "shortDoc": "The current version of IE (0 if the browser is not IE). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>The current version of IE (0 if the browser is not IE). This does not account\nfor the documentMode of the current page, which is factored into <a href=\"#/api/Ext-property-isIE7\" rel=\"Ext-property-isIE7\" class=\"docClass\">isIE7</a>,\n<a href=\"#/api/Ext-property-isIE8\" rel=\"Ext-property-isIE8\" class=\"docClass\">isIE8</a> and <a href=\"#/api/Ext-property-isIE9\" rel=\"Ext-property-isIE9\" class=\"docClass\">isIE9</a>. Thus this is not always true:</p>\n\n<pre><code> Ext.isIE8 == (Ext.ieVersion == 8)\n</code></pre>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 565,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-isChrome",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "isChrome",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>True if the detected browser is Chrome.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 655,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-isFF3_0",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "isFF3_0",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>True if the detected browser uses FireFox 3.0</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 661,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-isFF3_5",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "isFF3_5",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>True if the detected browser uses FireFox 3.5</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 667,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-isFF3_6",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "isFF3_6",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>True if the detected browser uses FireFox 3.6</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 673,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-isFF4",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "isFF4",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>True if the detected browser uses FireFox 4</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 679,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-isFF5",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "isFF5",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>True if the detected browser uses FireFox 5</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 631,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-isGecko",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "isGecko",
        "shortDoc": "True if the detected browser uses the Gecko layout engine (e.g. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>True if the detected browser uses the Gecko layout engine (e.g. Mozilla, Firefox).</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 637,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-isGecko3",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "isGecko3",
        "shortDoc": "True if the detected browser uses a Gecko 1.9+ layout engine (e.g. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>True if the detected browser uses a Gecko 1.9+ layout engine (e.g. Firefox 3.x).</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 643,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-isGecko4",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "isGecko4",
        "shortDoc": "True if the detected browser uses a Gecko 2.0+ layout engine (e.g. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>True if the detected browser uses a Gecko 2.0+ layout engine (e.g. Firefox 4.x).</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 649,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-isGecko5",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "isGecko5",
        "shortDoc": "True if the detected browser uses a Gecko 5.0+ layout engine (e.g. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>True if the detected browser uses a Gecko 5.0+ layout engine (e.g. Firefox 5.x).</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 601,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-isIE",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "isIE",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>True if the detected browser is Internet Explorer.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 607,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-isIE6",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "isIE6",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>True if the detected browser is Internet Explorer 6.x.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 613,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-isIE7",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "isIE7",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>True if the detected browser is Internet Explorer 7.x.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 619,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-isIE8",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "isIE8",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>True if the detected browser is Internet Explorer 8.x.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 625,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-isIE9",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "isIE9",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>True if the detected browser is Internet Explorer 9.x.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 685,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-isLinux",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "isLinux",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>True if the detected platform is Linux.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 697,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-isMac",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "isMac",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>True if the detected platform is Mac OS.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 547,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-isOpera",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "isOpera",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>True if the detected browser is Opera.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 553,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-isOpera10_5",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "isOpera10_5",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>True if the detected browser is Opera 10.5x.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 39,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-isReady",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "isReady",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>True when the document is fully initialized and ready for action</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 571,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-isSafari",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "isSafari",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>True if the detected browser is Safari.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 595,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-isSafari2",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "isSafari2",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>True if the detected browser is Safari 2.x.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 577,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-isSafari3",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "isSafari3",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>True if the detected browser is Safari 3.x.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 583,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-isSafari4",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "isSafari4",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>True if the detected browser is Safari 4.x.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 589,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-isSafari5",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "isSafari5",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>True if the detected browser is Safari 5.x.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 559,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-isWebKit",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "isWebKit",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>True if the detected browser uses WebKit.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 691,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-isWindows",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "isWindows",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>True if the detected platform is Windows.</p>\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 917,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-log",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "log",
        "shortDoc": "Logs a message. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>Logs a message. If a console is present it will be used. On Opera, the method\n\"opera.postError\" is called. In other cases, the message is logged to an array\n\"Ext.log.out\". An attached debugger can watch this array and view the log. The\nlog buffer is limited to a maximum of \"Ext.log.max\" entries (defaults to 250).\nThe <code>Ext.log.out</code> array can also be written to a popup window by entering the\nfollowing in the URL bar (a \"bookmarklet\"):</p>\n\n<p>   javascript:void(Ext.log.show());</p>\n\n<p>If additional parameters are passed, they are joined and appended to the message.\nA technique for tracing entry and exit of a function is this:</p>\n\n<pre><code> function foo () {\n     Ext.log({ indent: 1 }, '&gt;&gt; foo');\n\n     // log statements in here or methods called from here will be indented\n     // by one step\n\n     Ext.log({ outdent: 1 }, '&lt;&lt; foo');\n }\n</code></pre>\n\n<p>This method does nothing in a release build.</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 727,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-operaVersion",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "operaVersion",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>The current version of Opera (0 if the browser is not Opera).</p>\n"
      },
      {
        "static": false,
        "type": "Ext.env.OS",
        "inheritable": false,
        "properties": null,
        "linenr": 128,
        "owner": "Ext",
        "html_filename": "OS.html",
        "href": "OS.html#Ext-property-os",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "os",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/env/OS.js",
        "doc": "<p>Global convenient instance of <a href=\"#/api/Ext.env.OS\" rel=\"Ext.env.OS\" class=\"docClass\">Ext.env.OS</a>.</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 733,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-safariVersion",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "safariVersion",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>The current version of Safari (0 if the browser is not Safari).</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 447,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-scopeResetCSS",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "scopeResetCSS",
        "shortDoc": "True to scope the reset CSS to be just applied to Ext components. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>True to scope the reset CSS to be just applied to Ext components. Note that this wraps root containers\nwith an additional element. Also remember that when you turn on this option, you have to use ext-all-scoped {\nunless you use the bootstrap.js to load your javascript, in which case it will be handled for you.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 1078,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-useShims",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "useShims",
        "shortDoc": "By default, Ext intelligently decides whether floating elements should be shimmed. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>By default, Ext intelligently decides whether floating elements should be shimmed. If you are using flash,\nyou may want to set this to true.</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 739,
        "owner": "Ext",
        "html_filename": "Ext-more.html",
        "href": "Ext-more.html#Ext-property-webKitVersion",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "webKitVersion",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
        "doc": "<p>The current version of WebKit (0 if the browser does not use WebKit).</p>\n"
      }
    ]
  },
  "deprecated": null,
  "singleton": true,
  "private": false,
  "tagname": "class",
  "author": null,
  "superclasses": [

  ],
  "alias": null,
  "name": "Ext",
  "mixins": [

  ],
  "code_type": "assignment",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/Ext-more.js",
  "doc": "<p>The Ext namespace (global object) encapsulates all classes, singletons, and utility methods provided by Sencha's libraries.</p>\n Most user interface Components are at a lower level of nesting in the namespace, but many common utility functions are provided\n as direct properties of the Ext namespace.</p>\n\n<p> Also many frequently used methods from other classes are provided as shortcuts within the Ext namespace.\n For example <a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">Ext.getCmp</a> aliases <a href=\"#/api/Ext.ComponentManager-method-get\" rel=\"Ext.ComponentManager-method-get\" class=\"docClass\">Ext.ComponentManager.get</a>.</p>\n\n<p> Many applications are initiated with <a href=\"#/api/Ext-method-onReady\" rel=\"Ext-method-onReady\" class=\"docClass\">Ext.onReady</a> which is called once the DOM is ready.\n This ensures all scripts have been loaded, preventing dependency issues. For example</p>\n\n<pre><code> Ext.onReady(function(){\n     new Ext.Component({\n         renderTo: document.body,\n         html: 'DOM ready!'\n     });\n });\n</code></pre>\n\n<p>For more information about how to use the Ext classes, see</p>\n\n<ul>\n<li><a href=\"http://www.sencha.com/learn/\">The Learning Center</a></li>\n<li><a href=\"http://www.sencha.com/learn/Ext_FAQ\">The FAQ</a></li>\n<li><a href=\"http://www.sencha.com/forum/\">The forums</a></li>\n</ul>\n\n",
  "alternateClassNames": [

  ]
});