Ext.data.JsonP.Ext_form_field_Field({
  "static": false,
  "mixedInto": [
    "Ext.form.CheckboxGroup",
    "Ext.form.field.Base",
    "Ext.form.field.HtmlEditor"
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
  "html_filename": "Field.html",
  "allMixins": [

  ],
  "docauthor": "Jason Johnston <jason@sencha.com>",
  "href": "Field.html#Ext-form-field-Field",
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
        "linenr": 40,
        "owner": "Ext.form.field.Field",
        "html_filename": "Field.html",
        "href": "Field.html#Ext-form-field-Field-cfg-disabled",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "disabled",
        "shortDoc": "True to disable the field (defaults to false). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Field.js",
        "doc": "<p>True to disable the field (defaults to false). Disabled Fields will not be <a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">submitted</a>.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 33,
        "owner": "Ext.form.field.Field",
        "html_filename": "Field.html",
        "href": "Field.html#Ext-form-field-Field-cfg-name",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "name",
        "shortDoc": "The name of the field (defaults to undefined). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Field.js",
        "doc": "<p>The name of the field (defaults to undefined). By default this is used as the parameter name when including the\n<a href=\"#/api/Ext.form.field.Field-method-getSubmitData\" rel=\"Ext.form.field.Field-method-getSubmitData\" class=\"docClass\">field value</a> in a <a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">form submit()</a>. To prevent the field from\nbeing included in the form submit, set <a href=\"#/api/Ext.form.field.Field-cfg-submitValue\" rel=\"Ext.form.field.Field-cfg-submitValue\" class=\"docClass\">submitValue</a> to false.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 46,
        "owner": "Ext.form.field.Field",
        "html_filename": "Field.html",
        "href": "Field.html#Ext-form-field-Field-cfg-submitValue",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "submitValue",
        "shortDoc": "Setting this to false will prevent the field from being submitted even when it is\nnot disabled. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Field.js",
        "doc": "<p>Setting this to false will prevent the field from being <a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">submitted</a> even when it is\nnot disabled. Defaults to true.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 53,
        "owner": "Ext.form.field.Field",
        "html_filename": "Field.html",
        "href": "Field.html#Ext-form-field-Field-cfg-validateOnChange",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "validateOnChange",
        "shortDoc": "Specifies whether this field should be validated immediately whenever a change in its value is detected. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Field.js",
        "doc": "<p>Specifies whether this field should be validated immediately whenever a change in its value is detected. Defaults\nto true. If the validation results in a change in the field's validity, a <a href=\"#/api/Ext.form.field.Field-event-validitychange\" rel=\"Ext.form.field.Field-event-validitychange\" class=\"docClass\">validitychange</a> event will be\nfired. This allows the field to show feedback about the validity of its contents immediately as the user is\ntyping.</p>\n\n<p>When set to false, feedback will not be immediate. However the form will still be validated before submitting if\nthe clientValidation option to <a href=\"#/api/Ext.form.Basic-method-doAction\" rel=\"Ext.form.Basic-method-doAction\" class=\"docClass\">Ext.form.Basic.doAction</a> is enabled, or if the field or form are validated\nmanually.</p>\n\n<p>See also <a href=\"#/api/Ext.form.field.Base-cfg-checkChangeEvents\" rel=\"Ext.form.field.Base-cfg-checkChangeEvents\" class=\"docClass\">Ext.form.field.Base.checkChangeEvents</a> for controlling how changes to the field's value are\ndetected.</p>\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 28,
        "owner": "Ext.form.field.Field",
        "html_filename": "Field.html",
        "href": "Field.html#Ext-form-field-Field-cfg-value",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "value",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Field.js",
        "doc": "<p>A value to initialize this field with (defaults to undefined).</p>\n"
      }
    ],
    "css_mixin": [

    ],
    "event": [
      {
        "static": false,
        "inheritable": false,
        "linenr": 80,
        "owner": "Ext.form.field.Field",
        "html_filename": "Field.html",
        "href": "Field.html#Ext-form-field-Field-event-change",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.form.field.Field",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "newValue",
            "doc": "<p>The new value</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "oldValue",
            "doc": "<p>The original value</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "change",
        "shortDoc": "Fires when a user-initiated change is detected in the value of the field. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Field.js",
        "doc": "<p>Fires when a user-initiated change is detected in the value of the field.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 95,
        "owner": "Ext.form.field.Field",
        "html_filename": "Field.html",
        "href": "Field.html#Ext-form-field-Field-event-dirtychange",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.form.field.Field",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": false,
            "name": "isDirty",
            "doc": "<p>Whether or not the field is now dirty</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "dirtychange",
        "shortDoc": "Fires when a change in the field's isDirty state is detected. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Field.js",
        "doc": "<p>Fires when a change in the field's <a href=\"#/api/Ext.form.field.Field-method-isDirty\" rel=\"Ext.form.field.Field-method-isDirty\" class=\"docClass\">isDirty</a> state is detected.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 88,
        "owner": "Ext.form.field.Field",
        "html_filename": "Field.html",
        "href": "Field.html#Ext-form-field-Field-event-validitychange",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.form.field.Field",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": false,
            "name": "isValid",
            "doc": "<p>Whether or not the field is now valid</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "validitychange",
        "shortDoc": "Fires when a change in the field's validity is detected. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Field.js",
        "doc": "<p>Fires when a change in the field's validity is detected.</p>\n"
      }
    ],
    "method": [
      {
        "static": false,
        "inheritable": false,
        "linenr": 354,
        "owner": "Ext.form.field.Field",
        "html_filename": "Field.html",
        "href": "Field.html#Ext-form-field-Field-method-batchChanges",
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
            "doc": "<p>A function containing the transaction code</p>\n"
          }
        ],
        "alias": null,
        "name": "batchChanges",
        "shortDoc": "A utility for grouping a set of modifications which may trigger value changes into a single transaction, to\nprevent e...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Field.js",
        "doc": "<p>A utility for grouping a set of modifications which may trigger value changes into a single transaction, to\nprevent excessive firing of <a href=\"#/api/Ext.form.field.Field-event-change\" rel=\"Ext.form.field.Field-event-change\" class=\"docClass\">change</a> events. This is useful for instance if the field has sub-fields which\nare being updated as a group; you don't want the container field to check its own changed state for each subfield\nchange.</p>\n",
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
        "linenr": 236,
        "owner": "Ext.form.field.Field",
        "html_filename": "Field.html",
        "href": "Field.html#Ext-form-field-Field-method-checkChange",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "checkChange",
        "shortDoc": "Checks whether the value of the field has changed since the last time it was checked. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Field.js",
        "doc": "<p>Checks whether the value of the field has changed since the last time it was checked.\nIf the value has changed, it:</p>\n\n<ol>\n<li>Fires the <a href=\"#/api/Ext.form.field.Field-event-change\" rel=\"Ext.form.field.Field-event-change\" class=\"docClass\">change event</a>,</li>\n<li>Performs validation if the <a href=\"#/api/Ext.form.field.Field-cfg-validateOnChange\" rel=\"Ext.form.field.Field-cfg-validateOnChange\" class=\"docClass\">validateOnChange</a> config is enabled, firing the\n<a href=\"#/api/Ext.form.field.Field-event-validitychange\" rel=\"Ext.form.field.Field-event-validitychange\" class=\"docClass\">validitychange event</a> if the validity has changed, and</li>\n<li>Checks the <a href=\"#/api/Ext.form.field.Field-method-isDirty\" rel=\"Ext.form.field.Field-method-isDirty\" class=\"docClass\">dirty state</a> of the field and fires the <a href=\"#/api/Ext.form.field.Field-event-dirtychange\" rel=\"Ext.form.field.Field-event-dirtychange\" class=\"docClass\">dirtychange event</a>\nif it has changed.</li>\n</ol>\n\n",
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
        "linenr": 286,
        "owner": "Ext.form.field.Field",
        "html_filename": "Field.html",
        "href": "Field.html#Ext-form-field-Field-method-checkDirty",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "checkDirty",
        "shortDoc": "Checks the isDirty state of the field and if it has changed since the last time it was checked,\nfires the dirtychange...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Field.js",
        "doc": "<p>Checks the <a href=\"#/api/Ext.form.field.Field-method-isDirty\" rel=\"Ext.form.field.Field-method-isDirty\" class=\"docClass\">isDirty</a> state of the field and if it has changed since the last time it was checked,\nfires the <a href=\"#/api/Ext.form.field.Field-event-dirtychange\" rel=\"Ext.form.field.Field-event-dirtychange\" class=\"docClass\">dirtychange</a> event.</p>\n",
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
        "linenr": 402,
        "owner": "Ext.form.field.Field",
        "html_filename": "Field.html",
        "href": "Field.html#Ext-form-field-Field-method-clearInvalid",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "clearInvalid",
        "shortDoc": "Clear any invalid styles/messages for this field. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Field.js",
        "doc": "<p>Clear any invalid styles/messages for this field. Components using this mixin should implement this method to\nupdate the components rendering to clear any existing messages.</p>\n\n<p><strong>Note</strong>: this method does not cause the Field's <a href=\"#/api/Ext.form.field.Field-method-validate\" rel=\"Ext.form.field.Field-method-validate\" class=\"docClass\">validate</a> or <a href=\"#/api/Ext.form.field.Field-method-isValid\" rel=\"Ext.form.field.Field-method-isValid\" class=\"docClass\">isValid</a> methods to return <code>true</code>\nif the value does not <em>pass</em> validation. So simply clearing a field's errors will not necessarily allow\nsubmission of forms submitted with the <a href=\"#/api/Ext.form.action.Submit-cfg-clientValidation\" rel=\"Ext.form.action.Submit-cfg-clientValidation\" class=\"docClass\">Ext.form.action.Submit.clientValidation</a> option set.</p>\n",
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
        "linenr": 379,
        "owner": "Ext.form.field.Field",
        "html_filename": "Field.html",
        "href": "Field.html#Ext-form-field-Field-method-extractFileInput",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "extractFileInput",
        "shortDoc": "Only relevant if the instance's isFileUpload method returns true. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Field.js",
        "doc": "<p>Only relevant if the instance's <a href=\"#/api/Ext.form.field.Field-method-isFileUpload\" rel=\"Ext.form.field.Field-method-isFileUpload\" class=\"docClass\">isFileUpload</a> method returns true. Returns a reference to the file input\nDOM element holding the user's selected file. The input will be appended into the submission form and will not be\nreturned, so this method should also create a replacement.</p>\n",
        "return": {
          "type": "HTMLElement",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 306,
        "owner": "Ext.form.field.Field",
        "html_filename": "Field.html",
        "href": "Field.html#Ext-form-field-Field-method-getErrors",
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
            "doc": "<p>The value to get errors for (defaults to the current field value)</p>\n"
          }
        ],
        "alias": null,
        "name": "getErrors",
        "shortDoc": "Runs this field's validators and returns an array of error messages for any validation failures. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Field.js",
        "doc": "<p>Runs this field's validators and returns an array of error messages for any validation failures. This is called\ninternally during validation and would not usually need to be used manually.</p>\n\n<p>Each subclass should override or augment the return value to provide their own errors.</p>\n",
        "return": {
          "type": "String[]",
          "properties": null,
          "name": "return",
          "doc": "<p>All error messages for this field; an empty Array if none.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 189,
        "owner": "Ext.form.field.Field",
        "html_filename": "Field.html",
        "href": "Field.html#Ext-form-field-Field-method-getModelData",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getModelData",
        "shortDoc": "Returns the value(s) that should be saved to the Ext.data.Model instance for this field, when Ext.form.Basic.updateRe...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Field.js",
        "doc": "<p>Returns the value(s) that should be saved to the <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> instance for this field, when <a href=\"#/api/Ext.form.Basic-method-updateRecord\" rel=\"Ext.form.Basic-method-updateRecord\" class=\"docClass\">Ext.form.Basic.updateRecord</a> is called. Typically this will be an object with a single name-value pair, the name\nbeing this field's <a href=\"#/api/Ext.form.field.Field-method-getName\" rel=\"Ext.form.field.Field-method-getName\" class=\"docClass\">name</a> and the value being its current data value. More advanced field\nimplementations may return more than one name-value pair. The returned values will be saved to the corresponding\nfield names in the Model.</p>\n\n<p>Note that the values returned from this method are not guaranteed to have been successfully <a href=\"#/api/Ext.form.field.Field-method-validate\" rel=\"Ext.form.field.Field-method-validate\" class=\"docClass\">validated</a>.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>A mapping of submit parameter names to values; each value should be a string, or an array of\nstrings if that particular name has multiple values. It can also return null if there are no parameters to be\nsubmitted.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 126,
        "owner": "Ext.form.field.Field",
        "html_filename": "Field.html",
        "href": "Field.html#Ext-form-field-Field-method-getName",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getName",
        "shortDoc": "Returns the name attribute of the field. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Field.js",
        "doc": "<p>Returns the <a href=\"#/api/Ext.form.field.Field-cfg-name\" rel=\"Ext.form.field.Field-cfg-name\" class=\"docClass\">name</a> attribute of the field. This is used as the parameter name\nwhen including the field value in a <a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">form submit()</a>.</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>name The field <a href=\"#/api/Ext.form.field.Field-cfg-name\" rel=\"Ext.form.field.Field-cfg-name\" class=\"docClass\">name</a></p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 167,
        "owner": "Ext.form.field.Field",
        "html_filename": "Field.html",
        "href": "Field.html#Ext-form-field-Field-method-getSubmitData",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getSubmitData",
        "shortDoc": "Returns the parameter(s) that would be included in a standard form submit for this field. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Field.js",
        "doc": "<p>Returns the parameter(s) that would be included in a standard form submit for this field. Typically this will be\nan object with a single name-value pair, the name being this field's <a href=\"#/api/Ext.form.field.Field-method-getName\" rel=\"Ext.form.field.Field-method-getName\" class=\"docClass\">name</a> and the value being\nits current stringified value. More advanced field implementations may return more than one name-value pair.</p>\n\n<p>Note that the values returned from this method are not guaranteed to have been successfully <a href=\"#/api/Ext.form.field.Field-method-validate\" rel=\"Ext.form.field.Field-method-validate\" class=\"docClass\">validated</a>.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>A mapping of submit parameter names to values; each value should be a string, or an array of\nstrings if that particular name has multiple values. It can also return null if there are no parameters to be\nsubmitted.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 135,
        "owner": "Ext.form.field.Field",
        "html_filename": "Field.html",
        "href": "Field.html#Ext-form-field-Field-method-getValue",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getValue",
        "shortDoc": "Returns the current data value of the field. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Field.js",
        "doc": "<p>Returns the current data value of the field. The type of value returned is particular to the type of the\nparticular field (e.g. a Date object for <a href=\"#/api/Ext.form.field.Date\" rel=\"Ext.form.field.Date\" class=\"docClass\">Ext.form.field.Date</a>).</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>value The field value</p>\n"
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
        "linenr": 74,
        "owner": "Ext.form.field.Field",
        "html_filename": "Field.html",
        "href": "Field.html#Ext-form-field-Field-method-initField",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "initField",
        "shortDoc": "Initializes this Field mixin on the current instance. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Field.js",
        "doc": "<p>Initializes this Field mixin on the current instance. Components using this mixin should call this method during\ntheir own initialization process.</p>\n",
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
        "linenr": 107,
        "owner": "Ext.form.field.Field",
        "html_filename": "Field.html",
        "href": "Field.html#Ext-form-field-Field-method-initValue",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "initValue",
        "shortDoc": "Initializes the field's value based on the initial config. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Field.js",
        "doc": "<p>Initializes the field's value based on the initial config.</p>\n",
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
        "linenr": 271,
        "owner": "Ext.form.field.Field",
        "html_filename": "Field.html",
        "href": "Field.html#Ext-form-field-Field-method-isDirty",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isDirty",
        "shortDoc": "Returns true if the value of this Field has been changed from its originalValue. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Field.js",
        "doc": "<p>Returns true if the value of this Field has been changed from its <a href=\"#/api/Ext.form.field.Field-property-originalValue\" rel=\"Ext.form.field.Field-property-originalValue\" class=\"docClass\">originalValue</a>.\nWill always return false if the field is disabled.</p>\n\n<p>Note that if the owning <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">form</a> was configured with\n<a href=\"#/api/Ext.form.Basic-cfg-trackResetOnLoad\" rel=\"Ext.form.Basic-cfg-trackResetOnLoad\" class=\"docClass\">trackResetOnLoad</a> then the <a href=\"#/api/Ext.form.field.Field-property-originalValue\" rel=\"Ext.form.field.Field-property-originalValue\" class=\"docClass\">originalValue</a> is updated when\nthe values are loaded by <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Ext.form.Basic</a>.<a href=\"#/api/Ext.form.Basic-method-setValues\" rel=\"Ext.form.Basic-method-setValues\" class=\"docClass\">setValues</a>.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if this field has been changed from its original value (and is not disabled),\nfalse otherwise.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 156,
        "owner": "Ext.form.field.Field",
        "html_filename": "Field.html",
        "href": "Field.html#Ext-form-field-Field-method-isEqual",
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
            "name": "value1",
            "doc": "<p>The first value to compare</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "value2",
            "doc": "<p>The second value to compare</p>\n"
          }
        ],
        "alias": null,
        "name": "isEqual",
        "shortDoc": "Returns whether two field values are logically equal. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Field.js",
        "doc": "<p>Returns whether two field <a href=\"#/api/Ext.form.field.Field-method-getValue\" rel=\"Ext.form.field.Field-method-getValue\" class=\"docClass\">values</a> are logically equal. Field implementations may override this\nto provide custom comparison logic appropriate for the particular field's data type.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if the values are equal, false if inequal.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 368,
        "owner": "Ext.form.field.Field",
        "html_filename": "Field.html",
        "href": "Field.html#Ext-form-field-Field-method-isFileUpload",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isFileUpload",
        "shortDoc": "Returns whether this Field is a file upload field; if it returns true, forms will use special techniques for\nsubmitti...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Field.js",
        "doc": "<p>Returns whether this Field is a file upload field; if it returns true, forms will use special techniques for\n<a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">submitting the form</a> via AJAX. See <a href=\"#/api/Ext.form.Basic-method-hasUpload\" rel=\"Ext.form.Basic-method-hasUpload\" class=\"docClass\">Ext.form.Basic.hasUpload</a> for details. If\nthis returns true, the <a href=\"#/api/Ext.form.field.Field-method-extractFileInput\" rel=\"Ext.form.field.Field-method-extractFileInput\" class=\"docClass\">extractFileInput</a> method must also be implemented to return the corresponding file\ninput element.</p>\n",
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
        "linenr": 319,
        "owner": "Ext.form.field.Field",
        "html_filename": "Field.html",
        "href": "Field.html#Ext-form-field-Field-method-isValid",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isValid",
        "shortDoc": "Returns whether or not the field value is currently valid by validating the field's current\nvalue. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Field.js",
        "doc": "<p>Returns whether or not the field value is currently valid by <a href=\"#/api/Ext.form.field.Field-method-getErrors\" rel=\"Ext.form.field.Field-method-getErrors\" class=\"docClass\">validating</a> the field's current\nvalue. The <a href=\"#/api/Ext.form.field.Field-event-validitychange\" rel=\"Ext.form.field.Field-event-validitychange\" class=\"docClass\">validitychange</a> event will not be fired; use <a href=\"#/api/Ext.form.field.Field-method-validate\" rel=\"Ext.form.field.Field-method-validate\" class=\"docClass\">validate</a> instead if you want the event\nto fire. <strong>Note</strong>: <a href=\"#/api/Ext.form.field.Field-cfg-disabled\" rel=\"Ext.form.field.Field-cfg-disabled\" class=\"docClass\">disabled</a> fields are always treated as valid.</p>\n\n<p>Implementations are encouraged to ensure that this method does not have side-effects such as triggering error\nmessage display.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if the value is valid, else false</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 389,
        "owner": "Ext.form.field.Field",
        "html_filename": "Field.html",
        "href": "Field.html#Ext-form-field-Field-method-markInvalid",
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
            "name": "errors",
            "doc": "<p>The error message(s) for the field.</p>\n"
          }
        ],
        "alias": null,
        "name": "markInvalid",
        "shortDoc": "Associate one or more error messages with this field. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Field.js",
        "doc": "<p>Associate one or more error messages with this field. Components using this mixin should implement this method to\nupdate the component's rendering to display the messages.</p>\n\n<p><strong>Note</strong>: this method does not cause the Field's <a href=\"#/api/Ext.form.field.Field-method-validate\" rel=\"Ext.form.field.Field-method-validate\" class=\"docClass\">validate</a> or <a href=\"#/api/Ext.form.field.Field-method-isValid\" rel=\"Ext.form.field.Field-method-isValid\" class=\"docClass\">isValid</a> methods to return <code>false</code>\nif the value does <em>pass</em> validation. So simply marking a Field as invalid will not prevent submission of forms\nsubmitted with the <a href=\"#/api/Ext.form.action.Submit-cfg-clientValidation\" rel=\"Ext.form.action.Submit-cfg-clientValidation\" class=\"docClass\">Ext.form.action.Submit.clientValidation</a> option set.</p>\n",
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
        "linenr": 213,
        "owner": "Ext.form.field.Field",
        "html_filename": "Field.html",
        "href": "Field.html#Ext-form-field-Field-method-reset",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "reset",
        "shortDoc": "Resets the current field value to the originally loaded value and clears any validation messages. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Field.js",
        "doc": "<p>Resets the current field value to the originally loaded value and clears any validation messages. See <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Ext.form.Basic</a>.<a href=\"#/api/Ext.form.Basic-cfg-trackResetOnLoad\" rel=\"Ext.form.Basic-cfg-trackResetOnLoad\" class=\"docClass\">trackResetOnLoad</a></p>\n",
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
        "linenr": 226,
        "owner": "Ext.form.field.Field",
        "html_filename": "Field.html",
        "href": "Field.html#Ext-form-field-Field-method-resetOriginalValue",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "resetOriginalValue",
        "shortDoc": "Resets the field's originalValue property so it matches the current value. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Field.js",
        "doc": "<p>Resets the field's <a href=\"#/api/Ext.form.field.Field-property-originalValue\" rel=\"Ext.form.field.Field-property-originalValue\" class=\"docClass\">originalValue</a> property so it matches the current <a href=\"#/api/Ext.form.field.Field-method-getValue\" rel=\"Ext.form.field.Field-method-getValue\" class=\"docClass\">value</a>. This is\ncalled by <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Ext.form.Basic</a>.<a href=\"#/api/Ext.form.Basic-method-setValues\" rel=\"Ext.form.Basic-method-setValues\" class=\"docClass\">setValues</a> if the form's\n<a href=\"#/api/Ext.form.Basic-cfg-trackResetOnLoad\" rel=\"Ext.form.Basic-cfg-trackResetOnLoad\" class=\"docClass\">trackResetOnLoad</a> property is set to true.</p>\n",
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
        "linenr": 144,
        "owner": "Ext.form.field.Field",
        "html_filename": "Field.html",
        "href": "Field.html#Ext-form-field-Field-method-setValue",
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
            "doc": "<p>The value to set</p>\n"
          }
        ],
        "alias": null,
        "name": "setValue",
        "shortDoc": "Sets a data value into the field and runs the change detection and validation. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Field.js",
        "doc": "<p>Sets a data value into the field and runs the change detection and validation.</p>\n",
        "return": {
          "type": "Ext.form.field.Field",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
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
        "linenr": 334,
        "owner": "Ext.form.field.Field",
        "html_filename": "Field.html",
        "href": "Field.html#Ext-form-field-Field-method-validate",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "validate",
        "shortDoc": "Returns whether or not the field value is currently valid by validating the field's current\nvalue, and fires the vali...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Field.js",
        "doc": "<p>Returns whether or not the field value is currently valid by <a href=\"#/api/Ext.form.field.Field-method-getErrors\" rel=\"Ext.form.field.Field-method-getErrors\" class=\"docClass\">validating</a> the field's current\nvalue, and fires the <a href=\"#/api/Ext.form.field.Field-event-validitychange\" rel=\"Ext.form.field.Field-event-validitychange\" class=\"docClass\">validitychange</a> event if the field's validity has changed since the last validation.\n<strong>Note</strong>: <a href=\"#/api/Ext.form.field.Field-cfg-disabled\" rel=\"Ext.form.field.Field-cfg-disabled\" class=\"docClass\">disabled</a> fields are always treated as valid.</p>\n\n<p>Custom implementations of this method are allowed to have side-effects such as triggering error message display.\nTo validate without side-effects, use <a href=\"#/api/Ext.form.field.Field-method-isValid\" rel=\"Ext.form.field.Field-method-isValid\" class=\"docClass\">isValid</a>.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if the value is valid, else false</p>\n"
        }
      }
    ],
    "property": [
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 22,
        "owner": "Ext.form.field.Field",
        "html_filename": "Field.html",
        "href": "Field.html#Ext-form-field-Field-property-isFormField",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "isFormField",
        "shortDoc": "Flag denoting that this component is a Field. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Field.js",
        "doc": "<p>Flag denoting that this component is a Field. Always true.</p>\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 113,
        "owner": "Ext.form.field.Field",
        "html_filename": "Field.html",
        "href": "Field.html#Ext-form-field-Field-property-originalValue",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "originalValue",
        "shortDoc": "The original value of the field as configured in the value configuration, or as loaded by the last\nform load operatio...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Field.js",
        "doc": "<p>The original value of the field as configured in the <a href=\"#/api/Ext.form.field.Field-cfg-value\" rel=\"Ext.form.field.Field-cfg-value\" class=\"docClass\">value</a> configuration, or as loaded by the last\nform load operation if the form's <a href=\"#/api/Ext.form.Basic-cfg-trackResetOnLoad\" rel=\"Ext.form.Basic-cfg-trackResetOnLoad\" class=\"docClass\">trackResetOnLoad</a> setting is <code>true</code>.</p>\n"
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
  "name": "Ext.form.field.Field",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Field.js",
  "doc": "<p>This mixin provides a common interface for the logical behavior and state of form fields, including:</p>\n\n<ul>\n<li>Getter and setter methods for field values</li>\n<li>Events and methods for tracking value and validity changes</li>\n<li>Methods for triggering validation</li>\n</ul>\n\n\n<p><strong>NOTE</strong>: When implementing custom fields, it is most likely that you will want to extend the <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a>\ncomponent class rather than using this mixin directly, as BaseField contains additional logic for generating an\nactual DOM complete with <a href=\"#/api/Ext.form.Labelable\" rel=\"Ext.form.Labelable\" class=\"docClass\">label and error message</a> display and a form input field,\nplus methods that bind the Field value getters and setters to the input field's value.</p>\n\n<p>If you do want to implement this mixin directly and don't want to extend <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a>, then\nyou will most likely want to override the following methods with custom implementations: <a href=\"#/api/Ext.form.field.Field-method-getValue\" rel=\"Ext.form.field.Field-method-getValue\" class=\"docClass\">getValue</a>,\n<a href=\"#/api/Ext.form.field.Field-method-setValue\" rel=\"Ext.form.field.Field-method-setValue\" class=\"docClass\">setValue</a>, and <a href=\"#/api/Ext.form.field.Field-method-getErrors\" rel=\"Ext.form.field.Field-method-getErrors\" class=\"docClass\">getErrors</a>. Other methods may be overridden as needed but their base\nimplementations should be sufficient for common cases. You will also need to make sure that <a href=\"#/api/Ext.form.field.Field-method-initField\" rel=\"Ext.form.field.Field-method-initField\" class=\"docClass\">initField</a>\nis called during the component's initialization.</p>\n",
  "alternateClassNames": [

  ]
});