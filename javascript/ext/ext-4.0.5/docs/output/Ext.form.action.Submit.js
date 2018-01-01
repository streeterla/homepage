Ext.data.JsonP.Ext_form_action_Submit({
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
  "extends": "Ext.form.action.Action",
  "html_filename": "Submit.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "Submit.html#Ext-form-action-Submit",
  "subclasses": [
    "Ext.form.action.DirectSubmit",
    "Ext.form.action.StandardSubmit"
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
        "linenr": 65,
        "owner": "Ext.form.action.Submit",
        "html_filename": "Submit.html",
        "href": "Submit.html#Ext-form-action-Submit-cfg-clientValidation",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "clientValidation",
        "shortDoc": "Determines whether a Form's fields are validated\nin a final call to isValid prior to submission. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/action/Submit.js",
        "doc": "<p>Determines whether a Form's fields are validated\nin a final call to <a href=\"#/api/Ext.form.Basic-method-isValid\" rel=\"Ext.form.Basic-method-isValid\" class=\"docClass\">isValid</a> prior to submission.\nPass <tt>false</tt> in the Form's submit options to prevent this. Defaults to true.</p>\n"
      },
      {
        "static": false,
        "type": "Function",
        "inheritable": false,
        "properties": null,
        "linenr": 68,
        "owner": "Ext.form.action.Action",
        "html_filename": "Action2.html",
        "href": "Action2.html#Ext-form-action-Action-cfg-failure",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "failure",
        "shortDoc": "The function to call when a failure packet was received, or when an\nerror ocurred in the Ajax communication. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/action/Action.js",
        "doc": "<p>The function to call when a failure packet was received, or when an\nerror ocurred in the Ajax communication.\nThe function is passed the following parameters:<ul class=\"mdetail-params\">\n<li><b>form</b> : <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Ext.form.Basic</a><div class=\"sub-desc\">The form that requested the action</div></li>\n<li><b>action</b> : <a href=\"#/api/Ext.form.action.Action\" rel=\"Ext.form.action.Action\" class=\"docClass\">Ext.form.action.Action</a><div class=\"sub-desc\">The Action class. If an Ajax\nerror ocurred, the failure type will be in <a href=\"#/api/Ext.form.action.Submit-property-failureType\" rel=\"Ext.form.action.Submit-property-failureType\" class=\"docClass\">failureType</a>. The <a href=\"#/api/Ext.form.action.Submit-property-result\" rel=\"Ext.form.action.Submit-property-result\" class=\"docClass\">result</a>\nproperty of this object may be examined to perform custom postprocessing.</div></li>\n</ul></p>\n"
      },
      {
        "static": false,
        "type": "Ext.form.Basic",
        "inheritable": false,
        "properties": null,
        "linenr": 18,
        "owner": "Ext.form.action.Action",
        "html_filename": "Action2.html",
        "href": "Action2.html#Ext-form-action-Action-cfg-form",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "form",
        "shortDoc": "The BasicForm instance that\nis invoking this Action. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/action/Action.js",
        "doc": "<p>The <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">BasicForm</a> instance that\nis invoking this Action. Required.</p>\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 47,
        "owner": "Ext.form.action.Action",
        "html_filename": "Action2.html",
        "href": "Action2.html#Ext-form-action-Action-cfg-headers",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "headers",
        "shortDoc": "Extra headers to be sent in the AJAX request for submit and load actions. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/action/Action.js",
        "doc": "<p>Extra headers to be sent in the AJAX request for submit and load actions. See\n<a href=\"#/api/Ext.data.proxy.Ajax-cfg-headers\" rel=\"Ext.data.proxy.Ajax-cfg-headers\" class=\"docClass\">Ext.data.proxy.Ajax.headers</a>.</p>\n\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 35,
        "owner": "Ext.form.action.Action",
        "html_filename": "Action2.html",
        "href": "Action2.html#Ext-form-action-Action-cfg-method",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "method",
        "shortDoc": "The HTTP method to use to access the requested URL. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/action/Action.js",
        "doc": "<p>The HTTP method to use to access the requested URL. Defaults to the\n<a href=\"#/api/Ext.form.Basic-cfg-method\" rel=\"Ext.form.Basic-cfg-method\" class=\"docClass\">BasicForm's method</a>, or 'POST' if not specified.</p>\n"
      },
      {
        "static": false,
        "type": "Object/String",
        "inheritable": false,
        "properties": null,
        "linenr": 40,
        "owner": "Ext.form.action.Action",
        "html_filename": "Action2.html",
        "href": "Action2.html#Ext-form-action-Action-cfg-params",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "params",
        "shortDoc": "Extra parameter values to pass. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/action/Action.js",
        "doc": "<p>Extra parameter values to pass. These are added to the Form's\n<a href=\"#/api/Ext.form.Basic-cfg-baseParams\" rel=\"Ext.form.Basic-cfg-baseParams\" class=\"docClass\">Ext.form.Basic.baseParams</a> and passed to the specified URL along with the Form's\ninput fields.</p>\n\n\n<p>Parameters are encoded as standard HTTP parameters using <a href=\"#/api/Ext-method-urlEncode\" rel=\"Ext-method-urlEncode\" class=\"docClass\">Ext.Object.toQueryString</a>.</p>\n\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 28,
        "owner": "Ext.form.action.Action",
        "html_filename": "Action2.html",
        "href": "Action2.html#Ext-form-action-Action-cfg-reset",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "reset",
        "shortDoc": "When set to true, causes the Form to be\nreset on Action success. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/action/Action.js",
        "doc": "<p>When set to <tt><b>true</b></tt>, causes the Form to be\n<a href=\"#/api/Ext.form.Basic-method-reset\" rel=\"Ext.form.Basic-method-reset\" class=\"docClass\">reset</a> on Action success. If specified, this happens\nbefore the <a href=\"#/api/Ext.form.action.Submit-cfg-success\" rel=\"Ext.form.action.Submit-cfg-success\" class=\"docClass\">success</a> callback is called and before the Form's\n<a href=\"#/api/Ext.form.Basic-event-actioncomplete\" rel=\"Ext.form.Basic-event-actioncomplete\" class=\"docClass\">actioncomplete</a> event fires.</p>\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 79,
        "owner": "Ext.form.action.Action",
        "html_filename": "Action2.html",
        "href": "Action2.html#Ext-form-action-Action-cfg-scope",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "scope",
        "shortDoc": "The scope in which to call the configured success and failure\ncallback functions (the this reference for the callback...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/action/Action.js",
        "doc": "<p>The scope in which to call the configured <tt>success</tt> and <tt>failure</tt>\ncallback functions (the <tt>this</tt> reference for the callback functions).</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 94,
        "owner": "Ext.form.action.Action",
        "html_filename": "Action2.html",
        "href": "Action2.html#Ext-form-action-Action-cfg-submitEmptyText",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "submitEmptyText",
        "shortDoc": "If set to true, the emptyText value will be sent with the form\nwhen it is submitted. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/action/Action.js",
        "doc": "<p>If set to <tt>true</tt>, the emptyText value will be sent with the form\nwhen it is submitted. Defaults to <tt>true</tt>.</p>\n"
      },
      {
        "static": false,
        "type": "Function",
        "inheritable": false,
        "properties": null,
        "linenr": 59,
        "owner": "Ext.form.action.Action",
        "html_filename": "Action2.html",
        "href": "Action2.html#Ext-form-action-Action-cfg-success",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "success",
        "shortDoc": "The function to call when a valid success return packet is received. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/action/Action.js",
        "doc": "<p>The function to call when a valid success return packet is received.\nThe function is passed the following parameters:<ul class=\"mdetail-params\">\n<li><b>form</b> : <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Ext.form.Basic</a><div class=\"sub-desc\">The form that requested the action</div></li>\n<li><b>action</b> : <a href=\"#/api/Ext.form.action.Action\" rel=\"Ext.form.action.Action\" class=\"docClass\">Ext.form.action.Action</a><div class=\"sub-desc\">The Action class. The <a href=\"#/api/Ext.form.action.Submit-property-result\" rel=\"Ext.form.action.Submit-property-result\" class=\"docClass\">result</a>\nproperty of this object may be examined to perform custom postprocessing.</div></li>\n</ul></p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 52,
        "owner": "Ext.form.action.Action",
        "html_filename": "Action2.html",
        "href": "Action2.html#Ext-form-action-Action-cfg-timeout",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "timeout",
        "shortDoc": "The number of seconds to wait for a server response before\nfailing with the failureType as Ext.form.action.Action.CON...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/action/Action.js",
        "doc": "<p>The number of seconds to wait for a server response before\nfailing with the <a href=\"#/api/Ext.form.action.Submit-property-failureType\" rel=\"Ext.form.action.Submit-property-failureType\" class=\"docClass\">failureType</a> as <a href=\"#/api/Ext.form.action.Action-property-CONNECT_FAILURE\" rel=\"Ext.form.action.Action-property-CONNECT_FAILURE\" class=\"docClass\">Ext.form.action.Action.CONNECT_FAILURE</a>. If not specified,\ndefaults to the configured <tt><a href=\"#/api/Ext.form.Basic-cfg-timeout\" rel=\"Ext.form.Basic-cfg-timeout\" class=\"docClass\">timeout</a></tt> of the\n<a href=\"#/api/Ext.form.action.Submit-cfg-form\" rel=\"Ext.form.action.Submit-cfg-form\" class=\"docClass\">form</a>.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 23,
        "owner": "Ext.form.action.Action",
        "html_filename": "Action2.html",
        "href": "Action2.html#Ext-form-action-Action-cfg-url",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "url",
        "shortDoc": "The URL that the Action is to invoke. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/action/Action.js",
        "doc": "<p>The URL that the Action is to invoke. Will default to the <a href=\"#/api/Ext.form.Basic-cfg-url\" rel=\"Ext.form.Basic-cfg-url\" class=\"docClass\">url</a>\nconfigured on the <a href=\"#/api/Ext.form.action.Submit-cfg-form\" rel=\"Ext.form.action.Submit-cfg-form\" class=\"docClass\">form</a>.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 84,
        "owner": "Ext.form.action.Action",
        "html_filename": "Action2.html",
        "href": "Action2.html#Ext-form-action-Action-cfg-waitMsg",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "waitMsg",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/action/Action.js",
        "doc": "<p>The message to be displayed by a call to <a href=\"#/api/Ext.window.MessageBox-method-wait\" rel=\"Ext.window.MessageBox-method-wait\" class=\"docClass\">Ext.window.MessageBox.wait</a>\nduring the time the action is being processed.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 89,
        "owner": "Ext.form.action.Action",
        "html_filename": "Action2.html",
        "href": "Action2.html#Ext-form-action-Action-cfg-waitTitle",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "waitTitle",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/action/Action.js",
        "doc": "<p>The title to be displayed by a call to <a href=\"#/api/Ext.window.MessageBox-method-wait\" rel=\"Ext.window.MessageBox-method-wait\" class=\"docClass\">Ext.window.MessageBox.wait</a>\nduring the time the action is being processed.</p>\n"
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
        "linenr": 163,
        "owner": "Ext.form.action.Action",
        "html_filename": "Action2.html",
        "href": "Action2.html#Ext-form-action-Action-method-constructor",
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
        "shortDoc": "Creates new Action. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/action/Action.js",
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
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 106,
        "owner": "Ext.form.action.Action",
        "html_filename": "Action2.html",
        "href": "Action2.html#Ext-form-action-Action-property-failureType",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "failureType",
        "shortDoc": "The type of failure detected will be one of these: Ext.form.action.Action.CLIENT_INVALID,\nExt.form.action.Action.SERV...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/action/Action.js",
        "doc": "<p>The type of failure detected will be one of these: <a href=\"#/api/Ext.form.action.Action-property-CLIENT_INVALID\" rel=\"Ext.form.action.Action-property-CLIENT_INVALID\" class=\"docClass\">Ext.form.action.Action.CLIENT_INVALID</a>,\n<a href=\"#/api/Ext.form.action.Action-property-SERVER_INVALID\" rel=\"Ext.form.action.Action-property-SERVER_INVALID\" class=\"docClass\">Ext.form.action.Action.SERVER_INVALID</a>, <a href=\"#/api/Ext.form.action.Action-property-CONNECT_FAILURE\" rel=\"Ext.form.action.Action-property-CONNECT_FAILURE\" class=\"docClass\">Ext.form.action.Action.CONNECT_FAILURE</a>, or\n<a href=\"#/api/Ext.form.action.Action-property-LOAD_FAILURE\" rel=\"Ext.form.action.Action-property-LOAD_FAILURE\" class=\"docClass\">Ext.form.action.Action.LOAD_FAILURE</a>.  Usage:</p>\n\n<pre><code>var fp = new Ext.form.Panel({\n...\nbuttons: [{\n    text: 'Save',\n    formBind: true,\n    handler: function(){\n        if(fp.getForm().isValid()){\n            fp.getForm().submit({\n                url: 'form-submit.php',\n                waitMsg: 'Submitting your data...',\n                success: function(form, action){\n                    // server responded with success = true\n                    var result = action.<a href=\"#/api/Ext.form.action.Submit-property-result\" rel=\"Ext.form.action.Submit-property-result\" class=\"docClass\">result</a>;\n                },\n                failure: function(form, action){\n                    if (action.<a href=\"#/api/Ext.form.action.Submit-property-failureType\" rel=\"Ext.form.action.Submit-property-failureType\" class=\"docClass\">failureType</a> === <a href=\"#/api/Ext.form.action.Action-property-CONNECT_FAILURE\" rel=\"Ext.form.action.Action-property-CONNECT_FAILURE\" class=\"docClass\">Ext.form.action.Action.CONNECT_FAILURE</a>) {\n                        Ext.Msg.alert('Error',\n                            'Status:'+action.<a href=\"#/api/Ext.form.action.Submit-property-response\" rel=\"Ext.form.action.Submit-property-response\" class=\"docClass\">response</a>.status+': '+\n                            action.<a href=\"#/api/Ext.form.action.Submit-property-response\" rel=\"Ext.form.action.Submit-property-response\" class=\"docClass\">response</a>.statusText);\n                    }\n                    if (action.failureType === <a href=\"#/api/Ext.form.action.Action-property-SERVER_INVALID\" rel=\"Ext.form.action.Action-property-SERVER_INVALID\" class=\"docClass\">Ext.form.action.Action.SERVER_INVALID</a>){\n                        // server responded with success = false\n                        Ext.Msg.alert('Invalid', action.<a href=\"#/api/Ext.form.action.Submit-property-result\" rel=\"Ext.form.action.Submit-property-result\" class=\"docClass\">result</a>.errormsg);\n                    }\n                }\n            });\n        }\n    }\n},{\n    text: 'Reset',\n    handler: function(){\n        fp.getForm().reset();\n    }\n}]\n</code></pre>\n\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 150,
        "owner": "Ext.form.action.Action",
        "html_filename": "Action2.html",
        "href": "Action2.html#Ext-form-action-Action-property-response",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "response",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/action/Action.js",
        "doc": "<p>The raw XMLHttpRequest object used to perform the action.</p>\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 156,
        "owner": "Ext.form.action.Action",
        "html_filename": "Action2.html",
        "href": "Action2.html#Ext-form-action-Action-property-result",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "result",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/action/Action.js",
        "doc": "<p>The decoded response object containing a boolean <tt>success</tt> property and\nother, action-specific properties.</p>\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 179,
        "owner": "Ext.form.action.Action",
        "html_filename": "Action2.html",
        "href": "Action2.html#Ext-form-action-Action-property-run",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "run",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/action/Action.js",
        "doc": "<p>Invokes this action using the current configuration.</p>\n"
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
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 99,
        "owner": "Ext.form.action.Action",
        "html_filename": "Action2.html",
        "href": "Action2.html#Ext-form-action-Action-property-type",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "type",
        "shortDoc": "The type of action this Action instance performs. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/action/Action.js",
        "doc": "<p>The type of action this Action instance performs.\nCurrently only \"submit\" and \"load\" are supported.</p>\n"
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
    "Ext.form.action.Action"
  ],
  "alias": null,
  "name": "Ext.form.action.Submit",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/action/Submit.js",
  "doc": "<p>A class which handles submission of data from <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Form</a>s\nand processes the returned response.</p>\n\n\n<p>Instances of this class are only created by a <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Form</a> when\n<a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">submit</a>ting.</p>\n\n\n<p><u><b>Response Packet Criteria</b></u></p>\n\n\n<p>A response packet may contain:\n<div class=\"mdetail-params\"><ul>\n<li><b><code>success</code></b> property : Boolean\n<div class=\"sub-desc\">The <code>success</code> property is required.</div></li>\n<li><b><code>errors</code></b> property : Object\n<div class=\"sub-desc\"><div class=\"sub-desc\">The <code>errors</code> property,\nwhich is optional, contains error messages for invalid fields.</div></li>\n</ul></div>\n<p><u><b>JSON Packets</b></u></p>\n<p>By default, response packets are assumed to be JSON, so a typical response\npacket may look like this:</p>\n<pre><code>{\n    success: false,\n    errors: {\n        clientCode: \"Client not found\",\n        portOfLoading: \"This field must not be null\"\n    }\n}</code></pre>\n<p>Other data may be placed into the response for processing by the <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Ext.form.Basic</a>'s callback\nor event handler methods. The object decoded from this JSON is available in the\n<a href=\"#/api/Ext.form.action.Action-property-result\" rel=\"Ext.form.action.Action-property-result\" class=\"docClass\">result</a> property.</p>\n<p>Alternatively, if an <a href=\"#/api/Ext.form.Basic-cfg-errorReader\" rel=\"Ext.form.Basic-cfg-errorReader\" class=\"docClass\">errorReader</a> is specified as an <a href=\"#/api/Ext.data.reader.Xml\" rel=\"Ext.data.reader.Xml\" class=\"docClass\">XmlReader</a>:</p>\n<pre><code>    errorReader: new Ext.data.reader.Xml({\n            record : 'field',\n            success: '@success'\n        }, [\n            'id', 'msg'\n        ]\n    )\n</code></pre>\n<p>then the results may be sent back in XML format:</p>\n<pre><code>&lt;?xml version=\"1.0\" encoding=\"UTF-8\"?&gt;\n&lt;message success=\"false\"&gt;\n&lt;errors&gt;\n    &lt;field&gt;\n        &lt;id&gt;clientCode&lt;/id&gt;\n        &lt;msg&gt;&lt;![CDATA[Code not found. &lt;br /&gt;&lt;i&gt;This is a test validation message from the server &lt;/i&gt;]]&gt;&lt;/msg&gt;\n    &lt;/field&gt;\n    &lt;field&gt;\n        &lt;id&gt;portOfLoading&lt;/id&gt;\n        &lt;msg&gt;&lt;![CDATA[Port not found. &lt;br /&gt;&lt;i&gt;This is a test validation message from the server &lt;/i&gt;]]&gt;&lt;/msg&gt;\n    &lt;/field&gt;\n&lt;/errors&gt;\n&lt;/message&gt;\n</code></pre>\n<p>Other elements may be placed into the response XML for processing by the <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Ext.form.Basic</a>'s callback\nor event handler methods. The XML document is available in the <a href=\"#/api/Ext.form.Basic-cfg-errorReader\" rel=\"Ext.form.Basic-cfg-errorReader\" class=\"docClass\">errorReader</a>'s\n<a href=\"#/api/Ext.data.reader.Xml-property-xmlData\" rel=\"Ext.data.reader.Xml-property-xmlData\" class=\"docClass\">xmlData</a> property.</p>\n\n",
  "alternateClassNames": [
    "Ext.form.Action.Submit"
  ]
});