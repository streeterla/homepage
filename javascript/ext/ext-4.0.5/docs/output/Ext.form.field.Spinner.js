Ext.data.JsonP.Ext_form_field_Spinner({
  "static": false,
  "mixedInto": [

  ],
  "inheritable": false,
  "xtypes": [
    "spinnerfield"
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
  "extends": "Ext.form.field.Trigger",
  "html_filename": "Spinner.html",
  "allMixins": [
    "Ext.form.Labelable",
    "Ext.form.field.Field",
    "Ext.util.Floating",
    "Ext.util.Observable",
    "Ext.util.Animate",
    "Ext.state.Stateful"
  ],
  "docauthor": null,
  "href": "Spinner.html#Ext-form-field-Spinner",
  "subclasses": [
    "Ext.form.field.Number"
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
        "linenr": 216,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-cfg-activeError",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "activeError",
        "shortDoc": "If specified, then the component will be displayed with this value as its active error when\nfirst rendered. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>If specified, then the component will be displayed with this value as its active error when\nfirst rendered. Defaults to undefined. Use <a href=\"#/api/Ext.form.field.Spinner-method-setActiveError\" rel=\"Ext.form.field.Spinner-method-setActiveError\" class=\"docClass\">setActiveError</a> or <a href=\"#/api/Ext.form.field.Spinner-method-unsetActiveError\" rel=\"Ext.form.field.Spinner-method-unsetActiveError\" class=\"docClass\">unsetActiveError</a> to\nchange it after component creation.</p>\n"
      },
      {
        "static": false,
        "type": "Ext.XTemplate",
        "inheritable": false,
        "properties": null,
        "linenr": 51,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-cfg-activeErrorsTpl",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "activeErrorsTpl",
        "shortDoc": "The template used to format the Array of error messages passed to setActiveErrors\ninto a single HTML string. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>The template used to format the Array of error messages passed to <a href=\"#/api/Ext.form.field.Spinner-method-setActiveErrors\" rel=\"Ext.form.field.Spinner-method-setActiveErrors\" class=\"docClass\">setActiveErrors</a>\ninto a single HTML string. By default this renders each message as an item in an unordered list.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 124,
        "owner": "Ext.form.field.Text",
        "html_filename": "Text.html",
        "href": "Text.html#Ext-form-field-Text-cfg-allowBlank",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "allowBlank",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Text.js",
        "doc": "<p>Specify false to validate that the value's length is > 0 (defaults to true)</p>\n"
      },
      {
        "static": false,
        "type": "String/Object",
        "inheritable": false,
        "properties": null,
        "linenr": 127,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-autoEl",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "autoEl",
        "shortDoc": "A tag name or DomHelper spec used to create the Element which will\nencapsulate this Component. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>A tag name or <a href=\"#/api/Ext.DomHelper\" rel=\"Ext.DomHelper\" class=\"docClass\">DomHelper</a> spec used to create the <a href=\"#/api/Ext.form.field.Spinner-method-getEl\" rel=\"Ext.form.field.Spinner-method-getEl\" class=\"docClass\">Element</a> which will\nencapsulate this Component.</p>\n\n\n<p>You do not normally need to specify this. For the base classes <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> and <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a>,\nthis defaults to <b><tt>'div'</tt></b>. The more complex Sencha classes use a more complex\nDOM structure specified by their own <a href=\"#/api/Ext.form.field.Spinner-cfg-renderTpl\" rel=\"Ext.form.field.Spinner-cfg-renderTpl\" class=\"docClass\">renderTpl</a>s.</p>\n\n\n<p>This is intended to allow the developer to create application-specific utility Components encapsulated by\ndifferent DOM elements. Example usage:</p>\n\n\n<pre><code>{\n    xtype: 'component',\n    autoEl: {\n        tag: 'img',\n        src: 'http://www.example.com/example.jpg'\n    }\n}, {\n    xtype: 'component',\n    autoEl: {\n        tag: 'blockquote',\n        html: 'autoEl is cool!'\n    }\n}, {\n    xtype: 'container',\n    autoEl: 'ul',\n    cls: 'ux-unordered-list',\n    items: {\n        xtype: 'component',\n        autoEl: 'li',\n        html: 'First list item'\n    }\n}\n</code></pre>\n\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 194,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-cfg-autoFitErrors",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "autoFitErrors",
        "shortDoc": "Whether to adjust the component's body area to make room for 'side' or 'under'\nerror messages. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>Whether to adjust the component's body area to make room for 'side' or 'under'\n<a href=\"#/api/Ext.form.field.Spinner-cfg-msgTarget\" rel=\"Ext.form.field.Spinner-cfg-msgTarget\" class=\"docClass\">error messages</a>. Defaults to <tt>true</tt>.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean/String/HTMLElement/Ext.Element",
        "inheritable": false,
        "properties": null,
        "linenr": 577,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-autoRender",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "autoRender",
        "shortDoc": "This config is intended mainly for floating Components which may or may not be shown. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>This config is intended mainly for <a href=\"#/api/Ext.form.field.Spinner-cfg-floating\" rel=\"Ext.form.field.Spinner-cfg-floating\" class=\"docClass\">floating</a> Components which may or may not be shown. Instead\nof using <a href=\"#/api/Ext.form.field.Spinner-cfg-renderTo\" rel=\"Ext.form.field.Spinner-cfg-renderTo\" class=\"docClass\">renderTo</a> in the configuration, and rendering upon construction, this allows a Component\nto render itself upon first <i><a href=\"#/api/Ext.form.field.Spinner-method-show\" rel=\"Ext.form.field.Spinner-method-show\" class=\"docClass\">show</a></i>.</p>\n\n\n<p>Specify as <code>true</code> to have this Component render to the document body upon first show.</p>\n\n\n<p>Specify as an element, or the ID of an element to have this Component render to a specific element upon first show.</p>\n\n\n<p><b>This defaults to <code>true</code> for the <a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a> class.</b></p>\n\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 176,
        "owner": "Ext.Component",
        "html_filename": "Component.html",
        "href": "Component.html#Ext-Component-cfg-autoScroll",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "autoScroll",
        "shortDoc": "true to use overflow:'auto' on the components layout element and show scroll bars automatically when\nnecessary, false...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Component.js",
        "doc": "<p><code>true</code> to use overflow:'auto' on the components layout element and show scroll bars automatically when\nnecessary, <code>false</code> to clip any overflowing content (defaults to <code>false</code>).</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 570,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-autoShow",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "autoShow",
        "shortDoc": "True to automatically show the component upon creation. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>True to automatically show the component upon creation.\nThis config option may only be used for <a href=\"#/api/Ext.form.field.Spinner-cfg-floating\" rel=\"Ext.form.field.Spinner-cfg-floating\" class=\"docClass\">floating</a> components or components\nthat use <a href=\"#/api/Ext.form.field.Spinner-cfg-autoRender\" rel=\"Ext.form.field.Spinner-cfg-autoRender\" class=\"docClass\">autoRender</a>. Defaults to <tt>false</tt>.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 97,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-cfg-baseBodyCls",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "baseBodyCls",
        "shortDoc": "The CSS class to be applied to the body content element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>The CSS class to be applied to the body content element. Defaults to 'x-form-item-body'.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 351,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-baseCls",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "baseCls",
        "shortDoc": "The base CSS class to apply to this components's element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>The base CSS class to apply to this components's element. This will also be prepended to\nelements within this component like Panel's body will get a class x-panel-body. This means\nthat if you create a subclass of Panel, and you want it to get all the Panels styling for the\nelement and the body, you leave the baseCls x-panel and use componentCls to add specific styling for this\ncomponent.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 169,
        "owner": "Ext.form.field.Text",
        "html_filename": "Text.html",
        "href": "Text.html#Ext-form-field-Text-cfg-blankText",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "blankText",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Text.js",
        "doc": "<p>The error text to display if the <strong><a href=\"#/api/Ext.form.field.Spinner-cfg-allowBlank\" rel=\"Ext.form.field.Spinner-cfg-allowBlank\" class=\"docClass\">allowBlank</a></strong> validation fails (defaults to 'This field is required')</p>\n"
      },
      {
        "static": false,
        "type": "Number/String",
        "inheritable": false,
        "properties": null,
        "linenr": 438,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-border",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "border",
        "shortDoc": "Specifies the border for this component. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Specifies the border for this component. The border can be a single numeric value to apply to all sides or\nit can be a CSS style specification for each style, for example: '10 5 3 10'.</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 188,
        "owner": "Ext.form.field.Base",
        "html_filename": "Base.html",
        "href": "Base.html#Ext-form-field-Base-cfg-checkChangeBuffer",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "checkChangeBuffer",
        "shortDoc": "Defines a timeout in milliseconds for buffering checkChangeEvents that fire in rapid succession. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Base.js",
        "doc": "<p>Defines a timeout in milliseconds for buffering <a href=\"#/api/Ext.form.field.Spinner-cfg-checkChangeEvents\" rel=\"Ext.form.field.Spinner-cfg-checkChangeEvents\" class=\"docClass\">checkChangeEvents</a> that fire in rapid succession.\nDefaults to 50 milliseconds.</p>\n"
      },
      {
        "static": false,
        "type": "String[]",
        "inheritable": false,
        "properties": null,
        "linenr": 164,
        "owner": "Ext.form.field.Base",
        "html_filename": "Base.html",
        "href": "Base.html#Ext-form-field-Base-cfg-checkChangeEvents",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "checkChangeEvents",
        "shortDoc": "A list of event names that will be listened for on the field's input element, which will cause\nthe field's value to b...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Base.js",
        "doc": "<p>A list of event names that will be listened for on the field's <a href=\"#/api/Ext.form.field.Spinner-property-inputEl\" rel=\"Ext.form.field.Spinner-property-inputEl\" class=\"docClass\">input element</a>, which will cause\nthe field's value to be checked for changes. If a change is detected, the <a href=\"#/api/Ext.form.field.Spinner-event-change\" rel=\"Ext.form.field.Spinner-event-change\" class=\"docClass\">change event</a> will be\nfired, followed by validation if the <a href=\"#/api/Ext.form.field.Spinner-cfg-validateOnChange\" rel=\"Ext.form.field.Spinner-cfg-validateOnChange\" class=\"docClass\">validateOnChange</a> option is enabled.</p>\n\n<p>Defaults to ['change', 'propertychange'] in Internet Explorer, and ['change', 'input', 'textInput', 'keyup',\n'dragdrop'] in other browsers. This catches all the ways that field values can be changed in most supported\nbrowsers; the only known exceptions at the time of writing are:</p>\n\n<ul>\n<li>Safari 3.2 and older: cut/paste in textareas via the context menu, and dragging text into textareas</li>\n<li>Opera 10 and 11: dragging text into text fields and textareas, and cut via the context menu in text fields\nand textareas</li>\n<li>Opera 9: Same as Opera 10 and 11, plus paste from context menu in text fields and textareas</li>\n</ul>\n\n\n<p>If you need to guarantee on-the-fly change notifications including these edge cases, you can call the\n<a href=\"#/api/Ext.form.field.Spinner-method-checkChange\" rel=\"Ext.form.field.Spinner-method-checkChange\" class=\"docClass\">checkChange</a> method on a repeating interval, e.g. using <a href=\"#/api/Ext.TaskManager\" rel=\"Ext.TaskManager\" class=\"docClass\">Ext.TaskManager</a>, or if the field is within\na <a href=\"#/api/Ext.form.Panel\" rel=\"Ext.form.Panel\" class=\"docClass\">Ext.form.Panel</a>, you can use the FormPanel's <a href=\"#/api/Ext.form.Panel-cfg-pollForChanges\" rel=\"Ext.form.Panel-cfg-pollForChanges\" class=\"docClass\">Ext.form.Panel.pollForChanges</a> configuration to set up\nsuch a task automatically.</p>\n"
      },
      {
        "static": false,
        "type": "Object[]",
        "inheritable": false,
        "properties": null,
        "linenr": 203,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-childEls",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "childEls",
        "shortDoc": "An array describing the child elements of the Component. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>An array describing the child elements of the Component. Each member of the array\nis an object with these properties:</p>\n\n<pre><code>* `name` - The property name on the Component for the child element.\n* `itemId` - The id to combine with the Component's id that is the id of the child element.\n* `id` - The id of the child element.\n</code></pre>\n\n<p>If the array member is a string, it is equivalent to <code>{ name: m, itemId: m }</code>.</p>\n\n<p>For example, a Component which renders two nested div's:</p>\n\n<p>   renderTpl: '&lt;div id=\"{id}-foo\">&lt;div id=\"{id}-bar\">{description}&gt;/div&lt;&gt;/div&lt;',</p>\n\n<p>   childEls: [ 'foo', 'bar' ]</p>\n\n<p>After rendering, the Component will have <code>foo</code> and <code>bar</code> properties that refer to the\nchild elements. The key is that the rendered elements have id's equal to this component's\nid and the given name (separated by a '-'). For example, \"mycmp-foo\" and \"mycmp-bar\"\nare the element id's given a component id of \"mycmp\".</p>\n\n<p>A more flexible, but somewhat slower, approach is <a href=\"#/api/Ext.form.field.Spinner-cfg-renderSelectors\" rel=\"Ext.form.field.Spinner-cfg-renderSelectors\" class=\"docClass\">renderSelectors</a>.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 110,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-cfg-clearCls",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "clearCls",
        "shortDoc": "The CSS class to be applied to the special clearing div rendered directly after the field\ncontents wrapper to provide...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>The CSS class to be applied to the special clearing div rendered directly after the field\ncontents wrapper to provide field clearing (defaults to <tt>'x-clear'</tt>).</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 367,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-cls",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "cls",
        "shortDoc": "An optional extra CSS class that will be added to this component's Element (defaults to ''). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>An optional extra CSS class that will be added to this component's Element (defaults to '').  This can be\nuseful for adding customized styles to the component or any of its children using standard CSS rules.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 361,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-componentCls",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "componentCls",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>CSS Class to be added to a components root level element to give distinction to it\nvia styling.</p>\n"
      },
      {
        "static": false,
        "type": "String/Object",
        "inheritable": false,
        "properties": null,
        "linenr": 269,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-componentLayout",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "componentLayout",
        "shortDoc": "The sizing and positioning of a Component's internal Elements is the responsibility of\nthe Component's layout manager...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>The sizing and positioning of a Component's internal Elements is the responsibility of\nthe Component's layout manager which sizes a Component's internal structure in response to the Component being sized.</p>\n\n\n<p>Generally, developers will not use this configuration as all provided Components which need their internal\nelements sizing (Such as <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">input fields</a>) come with their own componentLayout managers.</p>\n\n\n<p>The <a href=\"#/api/Ext.layout.container.Auto\" rel=\"Ext.layout.container.Auto\" class=\"docClass\">default layout manager</a> will be used on instances of the base <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> class\nwhich simply sizes the Component's encapsulating element to the height and width specified in the <a href=\"#/api/Ext.form.field.Spinner-method-setSize\" rel=\"Ext.form.field.Spinner-method-setSize\" class=\"docClass\">setSize</a> method.</p>\n\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 500,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-contentEl",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "contentEl",
        "shortDoc": "Optional. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Optional. Specify an existing HTML element, or the <code>id</code> of an existing HTML element to use as the content\nfor this component.</p>\n\n\n<ul>\n<li><b>Description</b> :\n<div class=\"sub-desc\">This config option is used to take an existing HTML element and place it in the layout element\nof a new component (it simply moves the specified DOM element <i>after the Component is rendered</i> to use as the content.</div></li>\n<li><b>Notes</b> :\n<div class=\"sub-desc\">The specified HTML element is appended to the layout element of the component <i>after any configured\n<a href=\"#/api/Ext.form.field.Spinner-cfg-html\" rel=\"Ext.form.field.Spinner-cfg-html\" class=\"docClass\">HTML</a> has been inserted</i>, and so the document will not contain this element at the time the <a href=\"#/api/Ext.form.field.Spinner-event-render\" rel=\"Ext.form.field.Spinner-event-render\" class=\"docClass\">render</a> event is fired.</div>\n<div class=\"sub-desc\">The specified HTML element used will not participate in any <code><b><a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">layout</a></b></code>\nscheme that the Component may use. It is just HTML. Layouts operate on child <code><b><a href=\"#/api/Ext.container.Container-property-items\" rel=\"Ext.container.Container-property-items\" class=\"docClass\">items</a></b></code>.</div>\n<div class=\"sub-desc\">Add either the <code>x-hidden</code> or the <code>x-hide-display</code> CSS class to\nprevent a brief flicker of the content before it is rendered to the panel.</div></li>\n</ul>\n\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 287,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-data",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "data",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>The initial set of data to apply to the <code><a href=\"#/api/Ext.form.field.Spinner-cfg-tpl\" rel=\"Ext.form.field.Spinner-cfg-tpl\" class=\"docClass\">tpl</a></code> to\nupdate the content area of the Component.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 158,
        "owner": "Ext.form.field.Base",
        "html_filename": "Base.html",
        "href": "Base.html#Ext-form-field-Base-cfg-dirtyCls",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "dirtyCls",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Base.js",
        "doc": "<p>The CSS class to use when the field value <a href=\"#/api/Ext.form.field.Spinner-method-isDirty\" rel=\"Ext.form.field.Spinner-method-isDirty\" class=\"docClass\">is dirty</a>.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 119,
        "owner": "Ext.form.field.Text",
        "html_filename": "Text.html",
        "href": "Text.html#Ext-form-field-Text-cfg-disableKeyFilter",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "disableKeyFilter",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Text.js",
        "doc": "<p>Specify true to disable input keystroke filtering (defaults to false)</p>\n"
      },
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
        "linenr": 380,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-disabledCls",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "disabledCls",
        "shortDoc": "CSS class to add when the Component is disabled. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>CSS class to add when the Component is disabled. Defaults to 'x-item-disabled'.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean/Object",
        "inheritable": false,
        "properties": null,
        "linenr": 241,
        "owner": "Ext.Component",
        "html_filename": "Component.html",
        "href": "Component.html#Ext-Component-cfg-draggable",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "draggable",
        "shortDoc": "Specify as true to make a floating Component draggable using the Component's encapsulating element as the drag handle. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Component.js",
        "doc": "<p>Specify as true to make a <a href=\"#/api/Ext.form.field.Spinner-cfg-floating\" rel=\"Ext.form.field.Spinner-cfg-floating\" class=\"docClass\">floating</a> Component draggable using the Component's encapsulating element as the drag handle.</p>\n\n\n<p>This may also be specified as a config object for the <a href=\"#/api/Ext.util.ComponentDragger\" rel=\"Ext.util.ComponentDragger\" class=\"docClass\">ComponentDragger</a> which is instantiated to perform dragging.</p>\n\n\n<p>For example to create a Component which may only be dragged around using a certain internal element as the drag handle,\nuse the delegate option:</p>\n\n\n<p><code></p>\n\n<pre>new Ext.Component({\n    constrain: true,\n    floating:true,\n    style: {\n        backgroundColor: '#fff',\n        border: '1px solid black'\n    },\n    html: '&lt;h1 style=\"cursor:move\"&gt;The title&lt;/h1&gt;&lt;p&gt;The content&lt;/p&gt;',\n    draggable: {\n        delegate: 'h1'\n    }\n}).show();\n</pre>\n\n\n<p></code></p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 83,
        "owner": "Ext.form.field.Trigger",
        "html_filename": "Trigger.html",
        "href": "Trigger.html#Ext-form-field-Trigger-cfg-editable",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "editable",
        "shortDoc": "false to prevent the user from typing text directly into the field; the field can only have its value set via an\nacti...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Trigger.js",
        "doc": "<p>false to prevent the user from typing text directly into the field; the field can only have its value set via an\naction invoked by the trigger. (defaults to true).</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 214,
        "owner": "Ext.form.field.Text",
        "html_filename": "Text.html",
        "href": "Text.html#Ext-form-field-Text-cfg-emptyCls",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "emptyCls",
        "shortDoc": "The CSS class to apply to an empty field to style the emptyText (defaults to 'x-form-empty-field'). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Text.js",
        "doc": "<p>The CSS class to apply to an empty field to style the <strong><a href=\"#/api/Ext.form.field.Spinner-cfg-emptyText\" rel=\"Ext.form.field.Spinner-cfg-emptyText\" class=\"docClass\">emptyText</a></strong> (defaults to 'x-form-empty-field').\nThis class is automatically added and removed as needed depending on the current field value.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 202,
        "owner": "Ext.form.field.Text",
        "html_filename": "Text.html",
        "href": "Text.html#Ext-form-field-Text-cfg-emptyText",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "emptyText",
        "shortDoc": "The default text to place into an empty field (defaults to undefined). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Text.js",
        "doc": "<p>The default text to place into an empty field (defaults to undefined).</p>\n\n<p>Note that normally this value will be submitted to the server if this field is enabled; to prevent this you can\nset the <a href=\"#/api/Ext.form.action.Action-cfg-submitEmptyText\" rel=\"Ext.form.action.Action-cfg-submitEmptyText\" class=\"docClass\">submitEmptyText</a> option of <a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">Ext.form.Basic.submit</a> to\nfalse.</p>\n\n<p>Also note that if you use <a href=\"#/api/Ext.form.field.Spinner-cfg-inputType\" rel=\"Ext.form.field.Spinner-cfg-inputType\" class=\"docClass\">inputType</a>:'file', <a href=\"#/api/Ext.form.field.Spinner-cfg-emptyText\" rel=\"Ext.form.field.Spinner-cfg-emptyText\" class=\"docClass\">emptyText</a> is not supported and should be\navoided.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 223,
        "owner": "Ext.form.field.Text",
        "html_filename": "Text.html",
        "href": "Text.html#Ext-form-field-Text-cfg-enableKeyEvents",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "enableKeyEvents",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Text.js",
        "doc": "<p>true to enable the proxying of key events for the HTML input field (defaults to false)</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 145,
        "owner": "Ext.form.field.Text",
        "html_filename": "Text.html",
        "href": "Text.html#Ext-form-field-Text-cfg-enforceMaxLength",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "enforceMaxLength",
        "shortDoc": "True to set the maxLength property on the underlying input field. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Text.js",
        "doc": "<p>True to set the maxLength property on the underlying input field. Defaults to false</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 91,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-cfg-errorMsgCls",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "errorMsgCls",
        "shortDoc": "The CSS class to be applied to the error message element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>The CSS class to be applied to the error message element. Defaults to 'x-form-error-msg'.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 103,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-cfg-fieldBodyCls",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "fieldBodyCls",
        "shortDoc": "An extra CSS class to be applied to the body content element in addition to fieldBodyCls. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>An extra CSS class to be applied to the body content element in addition to <a href=\"#/api/Ext.form.field.Spinner-cfg-fieldBodyCls\" rel=\"Ext.form.field.Spinner-cfg-fieldBodyCls\" class=\"docClass\">fieldBodyCls</a>.\nDefaults to empty.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 139,
        "owner": "Ext.form.field.Base",
        "html_filename": "Base.html",
        "href": "Base.html#Ext-form-field-Base-cfg-fieldCls",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "fieldCls",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Base.js",
        "doc": "<p>The default CSS class for the field input (defaults to 'x-form-field')</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 123,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-cfg-fieldLabel",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "fieldLabel",
        "shortDoc": "The label for the field. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>The label for the field. It gets appended with the <a href=\"#/api/Ext.form.field.Spinner-cfg-labelSeparator\" rel=\"Ext.form.field.Spinner-cfg-labelSeparator\" class=\"docClass\">labelSeparator</a>, and its position\nand sizing is determined by the <a href=\"#/api/Ext.form.field.Spinner-cfg-labelAlign\" rel=\"Ext.form.field.Spinner-cfg-labelAlign\" class=\"docClass\">labelAlign</a>, <a href=\"#/api/Ext.form.field.Spinner-cfg-labelWidth\" rel=\"Ext.form.field.Spinner-cfg-labelWidth\" class=\"docClass\">labelWidth</a>, and <a href=\"#/api/Ext.form.field.Spinner-cfg-labelPad\" rel=\"Ext.form.field.Spinner-cfg-labelPad\" class=\"docClass\">labelPad</a>\nconfigs. Defaults to undefined.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 145,
        "owner": "Ext.form.field.Base",
        "html_filename": "Base.html",
        "href": "Base.html#Ext-form-field-Base-cfg-fieldStyle",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "fieldStyle",
        "shortDoc": "Optional CSS style(s) to be applied to the field input element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Base.js",
        "doc": "<p>Optional CSS style(s) to be applied to the <a href=\"#/api/Ext.form.field.Spinner-property-inputEl\" rel=\"Ext.form.field.Spinner-property-inputEl\" class=\"docClass\">field input element</a>. Should be a valid argument to\n<a href=\"#/api/Ext.Element-method-applyStyles\" rel=\"Ext.Element-method-applyStyles\" class=\"docClass\">Ext.Element.applyStyles</a>. Defaults to undefined. See also the <a href=\"#/api/Ext.form.field.Spinner-method-setFieldStyle\" rel=\"Ext.form.field.Spinner-method-setFieldStyle\" class=\"docClass\">setFieldStyle</a> method for changing\nthe style after initialization.</p>\n"
      },
      {
        "static": false,
        "type": "Ext.XTemplate",
        "inheritable": false,
        "properties": null,
        "linenr": 91,
        "owner": "Ext.form.field.Base",
        "html_filename": "Base.html",
        "href": "Base.html#Ext-form-field-Base-cfg-fieldSubTpl",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "fieldSubTpl",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Base.js",
        "doc": "<p>The content of the field body is defined by this config option.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 182,
        "owner": "Ext.Component",
        "html_filename": "Component.html",
        "href": "Component.html#Ext-Component-cfg-floating",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "floating",
        "shortDoc": "Specify as true to float the Component outside of the document flow using CSS absolute positioning. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Component.js",
        "doc": "<p>Specify as true to float the Component outside of the document flow using CSS absolute positioning.</p>\n\n\n<p>Components such as <a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a>s and <a href=\"#/api/Ext.menu.Menu\" rel=\"Ext.menu.Menu\" class=\"docClass\">Menu</a>s are floating\nby default.</p>\n\n\n<p>Floating Components that are programatically <a href=\"#/api/Ext.Component-event-render\" rel=\"Ext.Component-event-render\" class=\"docClass\">rendered</a> will register themselves with the global\n<a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">ZIndexManager</a></p>\n\n\n<h3 class=\"pa\">Floating Components as child items of a Container</h3>\n\n\n<p>A floating Component may be used as a child item of a Container. This just allows the floating Component to seek a ZIndexManager by\nexamining the ownerCt chain.</p>\n\n\n<p>When configured as floating, Components acquire, at render time, a <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a> which manages a stack\nof related floating Components. The ZIndexManager brings a single floating Component to the top of its stack when\nthe Component's <a href=\"#/api/Ext.form.field.Spinner-method-toFront\" rel=\"Ext.form.field.Spinner-method-toFront\" class=\"docClass\">toFront</a> method is called.</p>\n\n\n<p>The ZIndexManager is found by traversing up the <a href=\"#/api/Ext.form.field.Spinner-property-ownerCt\" rel=\"Ext.form.field.Spinner-property-ownerCt\" class=\"docClass\">ownerCt</a> chain to find an ancestor which itself is floating. This is so that\ndescendant floating Components of floating <i>Containers</i> (Such as a ComboBox dropdown within a Window) can have its zIndex managed relative\nto any siblings, but always <b>above</b> that floating ancestor Container.</p>\n\n\n<p>If no floating ancestor is found, a floating Component registers itself with the default <a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">ZIndexManager</a>.</p>\n\n\n<p>Floating components <i>do not participate in the Container's layout</i>. Because of this, they are not rendered until you explicitly\n<a href=\"#/api/Ext.form.field.Spinner-method-show\" rel=\"Ext.form.field.Spinner-method-show\" class=\"docClass\">show</a> them.</p>\n\n\n<p>After rendering, the ownerCt reference is deleted, and the <a href=\"#/api/Ext.form.field.Spinner-property-floatParent\" rel=\"Ext.form.field.Spinner-property-floatParent\" class=\"docClass\">floatParent</a> property is set to the found floating ancestor Container.\nIf no floating ancestor Container was found the <a href=\"#/api/Ext.form.field.Spinner-property-floatParent\" rel=\"Ext.form.field.Spinner-property-floatParent\" class=\"docClass\">floatParent</a> property will not be set.</p>\n\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 152,
        "owner": "Ext.form.field.Base",
        "html_filename": "Base.html",
        "href": "Base.html#Ext-form-field-Base-cfg-focusCls",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "focusCls",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Base.js",
        "doc": "<p>The CSS class to use when the field receives focus (defaults to 'x-form-focus')</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 8,
        "owner": "Ext.util.Floating",
        "html_filename": "Floating.html",
        "href": "Floating.html#Ext-util-Floating-cfg-focusOnToFront",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "focusOnToFront",
        "shortDoc": "Specifies whether the floated component should be automatically focused when\nit is brought to the front. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/util/Floating.js",
        "doc": "<p>Specifies whether the floated component should be automatically <a href=\"#/api/Ext.Component-method-focus\" rel=\"Ext.Component-method-focus\" class=\"docClass\">focused</a> when\nit is <a href=\"#/api/Ext.form.field.Spinner-method-toFront\" rel=\"Ext.form.field.Spinner-method-toFront\" class=\"docClass\">brought to the front</a>. Defaults to true.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 69,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-cfg-formItemCls",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "formItemCls",
        "shortDoc": "A CSS class to be applied to the outermost element to denote that it is participating in the form\nfield layout. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>A CSS class to be applied to the outermost element to denote that it is participating in the form\nfield layout. Defaults to 'x-form-item'.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 246,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-frame",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "frame",
        "shortDoc": "Specify as true to have the Component inject framing elements within the Component at render time to\nprovide a graphi...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Specify as <code>true</code> to have the Component inject framing elements within the Component at render time to\nprovide a graphical rounded frame around the Component content.</p>\n\n\n<p>This is only necessary when running on outdated, or non standard-compliant browsers such as Microsoft's Internet Explorer\nprior to version 9 which do not support rounded corners natively.</p>\n\n\n<p>The extra space taken up by this framing is available from the read only property <a href=\"#/api/Ext.form.field.Spinner-property-frameSize\" rel=\"Ext.form.field.Spinner-property-frameSize\" class=\"docClass\">frameSize</a>.</p>\n\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 83,
        "owner": "Ext.form.field.Text",
        "html_filename": "Text.html",
        "href": "Text.html#Ext-form-field-Text-cfg-grow",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "grow",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Text.js",
        "doc": "<p>true if this field should automatically grow and shrink to its content (defaults to false)</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 100,
        "owner": "Ext.form.field.Text",
        "html_filename": "Text.html",
        "href": "Text.html#Ext-form-field-Text-cfg-growAppend",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "growAppend",
        "shortDoc": "A string that will be appended to the field's current value for the purposes of calculating the target field\nsize. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Text.js",
        "doc": "<p>A string that will be appended to the field's current value for the purposes of calculating the target field\nsize. Only used when the <a href=\"#/api/Ext.form.field.Spinner-cfg-grow\" rel=\"Ext.form.field.Spinner-cfg-grow\" class=\"docClass\">grow</a> config is true. Defaults to a single capital \"W\" (the widest character in\ncommon fonts) to leave enough space for the next typed character and avoid the field value shifting before the\nwidth is adjusted.</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 94,
        "owner": "Ext.form.field.Text",
        "html_filename": "Text.html",
        "href": "Text.html#Ext-form-field-Text-cfg-growMax",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "growMax",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Text.js",
        "doc": "<p>The maximum width to allow when <code>**<a href=\"#/api/Ext.form.field.Spinner-cfg-grow\" rel=\"Ext.form.field.Spinner-cfg-grow\" class=\"docClass\">grow</a>** = true</code> (defaults to 800)</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 88,
        "owner": "Ext.form.field.Text",
        "html_filename": "Text.html",
        "href": "Text.html#Ext-form-field-Text-cfg-growMin",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "growMin",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Text.js",
        "doc": "<p>The minimum width to allow when <code>**<a href=\"#/api/Ext.form.field.Spinner-cfg-grow\" rel=\"Ext.form.field.Spinner-cfg-grow\" class=\"docClass\">grow</a>** = true</code> (defaults to 30)</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 433,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-height",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "height",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>The height of this component in pixels.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 456,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-hidden",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "hidden",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Defaults to false.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 176,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-cfg-hideEmptyLabel",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "hideEmptyLabel",
        "shortDoc": "When set to true, the label element (fieldLabel and labelSeparator) will be\nautomatically hidden if the fieldLabel is...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>When set to <tt>true</tt>, the label element (<a href=\"#/api/Ext.form.field.Spinner-cfg-fieldLabel\" rel=\"Ext.form.field.Spinner-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> and <a href=\"#/api/Ext.form.field.Spinner-cfg-labelSeparator\" rel=\"Ext.form.field.Spinner-cfg-labelSeparator\" class=\"docClass\">labelSeparator</a>) will be\nautomatically hidden if the <a href=\"#/api/Ext.form.field.Spinner-cfg-fieldLabel\" rel=\"Ext.form.field.Spinner-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> is empty. Setting this to <tt>false</tt> will cause the empty\nlabel element to be rendered and space to be reserved for it; this is useful if you want a field without a label\nto line up with other labeled fields in the same form. Defaults to <tt>true</tt>.</p>\n\n\n<p>If you wish to unconditionall hide the label even if a non-empty fieldLabel is configured, then set\nthe <a href=\"#/api/Ext.form.field.Spinner-cfg-hideLabel\" rel=\"Ext.form.field.Spinner-cfg-hideLabel\" class=\"docClass\">hideLabel</a> config to <tt>true</tt>.</p>\n\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 168,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-cfg-hideLabel",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "hideLabel",
        "shortDoc": "Set to true to completely hide the label element (fieldLabel and labelSeparator). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>Set to <tt>true</tt> to completely hide the label element (<a href=\"#/api/Ext.form.field.Spinner-cfg-fieldLabel\" rel=\"Ext.form.field.Spinner-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> and <a href=\"#/api/Ext.form.field.Spinner-cfg-labelSeparator\" rel=\"Ext.form.field.Spinner-cfg-labelSeparator\" class=\"docClass\">labelSeparator</a>).\nDefaults to <tt>false</tt>.</p>\n\n\n<p>Also see <a href=\"#/api/Ext.form.field.Spinner-cfg-hideEmptyLabel\" rel=\"Ext.form.field.Spinner-cfg-hideEmptyLabel\" class=\"docClass\">hideEmptyLabel</a>, which controls whether space will be reserved for an empty fieldLabel.</p>\n\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 487,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-hideMode",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "hideMode",
        "shortDoc": "A String which specifies how this Component's encapsulating DOM element will be hidden. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>A String which specifies how this Component's encapsulating DOM element will be hidden.\nValues may be<div class=\"mdetail-params\"><ul>\n<li><code>'display'</code> : The Component will be hidden using the <code>display: none</code> style.</li>\n<li><code>'visibility'</code> : The Component will be hidden using the <code>visibility: hidden</code> style.</li>\n<li><code>'offsets'</code> : The Component will be hidden by absolutely positioning it out of the visible area of the document. This\nis useful when a hidden Component must maintain measurable dimensions. Hiding using <code>display</code> results\nin a Component having zero dimensions.</li></ul></div>\nDefaults to <code>'display'</code>.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 77,
        "owner": "Ext.form.field.Trigger",
        "html_filename": "Trigger.html",
        "href": "Trigger.html#Ext-form-field-Trigger-cfg-hideTrigger",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "hideTrigger",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Trigger.js",
        "doc": "<p>true to hide the trigger element and display only the base text field (defaults to false)</p>\n"
      },
      {
        "static": false,
        "type": "String/Object",
        "inheritable": false,
        "properties": null,
        "linenr": 518,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-html",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "html",
        "shortDoc": "An HTML fragment, or a DomHelper specification to use as the layout element\ncontent (defaults to ''). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>An HTML fragment, or a <a href=\"#/api/Ext.DomHelper\" rel=\"Ext.DomHelper\" class=\"docClass\">DomHelper</a> specification to use as the layout element\ncontent (defaults to ''). The HTML content is added after the component is rendered,\nso the document will not contain this HTML at the time the <a href=\"#/api/Ext.form.field.Spinner-event-render\" rel=\"Ext.form.field.Spinner-event-render\" class=\"docClass\">render</a> event is fired.\nThis content is inserted into the body <i>before</i> any configured <a href=\"#/api/Ext.form.field.Spinner-cfg-contentEl\" rel=\"Ext.form.field.Spinner-cfg-contentEl\" class=\"docClass\">contentEl</a> is appended.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 47,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-id",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "id",
        "shortDoc": "The unique id of this component instance (defaults to an auto-assigned id). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>The <b><u>unique id of this component instance</u></b> (defaults to an <a href=\"#/api/Ext.form.field.Spinner-method-getId\" rel=\"Ext.form.field.Spinner-method-getId\" class=\"docClass\">auto-assigned id</a>).</p>\n\n\n<p>It should not be necessary to use this configuration except for singleton objects in your application.\nComponents created with an id may be accessed globally using <a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">Ext.getCmp</a>.</p>\n\n\n<p>Instead of using assigned ids, use the <a href=\"#/api/Ext.form.field.Spinner-cfg-itemId\" rel=\"Ext.form.field.Spinner-cfg-itemId\" class=\"docClass\">itemId</a> config, and <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> which\nprovides selector-based searching for Sencha Components analogous to DOM querying. The <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a>\nclass contains <a href=\"#/api/Ext.container.Container-method-down\" rel=\"Ext.container.Container-method-down\" class=\"docClass\">shortcut methods</a> to query its descendant Components by selector.</p>\n\n\n<p>Note that this id will also be used as the element id for the containing HTML element\nthat is rendered to the page for this component. This allows you to write id-based CSS\nrules to style the specific instance of this component uniquely, and also to select\nsub-elements using this component's id as the parent.</p>\n\n\n<p><b>Note</b>: to avoid complications imposed by a unique <tt>id</tt> also see <code><a href=\"#/api/Ext.form.field.Spinner-cfg-itemId\" rel=\"Ext.form.field.Spinner-cfg-itemId\" class=\"docClass\">itemId</a></code>.</p>\n\n\n<p><b>Note</b>: to access the container of a Component see <code><a href=\"#/api/Ext.form.field.Spinner-property-ownerCt\" rel=\"Ext.form.field.Spinner-property-ownerCt\" class=\"docClass\">ownerCt</a></code>.</p>\n\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 213,
        "owner": "Ext.form.field.Base",
        "html_filename": "Base.html",
        "href": "Base.html#Ext-form-field-Base-cfg-inputId",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "inputId",
        "shortDoc": "The id that will be given to the generated input DOM element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Base.js",
        "doc": "<p>The id that will be given to the generated input DOM element. Defaults to an automatically generated id. If you\nconfigure this manually, you must make sure it is unique in the document.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 114,
        "owner": "Ext.form.field.Base",
        "html_filename": "Base.html",
        "href": "Base.html#Ext-form-field-Base-cfg-inputType",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "inputType",
        "shortDoc": "The type attribute for input fields -- e.g. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Base.js",
        "doc": "<p>The type attribute for input fields -- e.g. radio, text, password, file (defaults to 'text'). The extended types\nsupported by HTML5 inputs (url, email, etc.) may also be used, though using them will cause older browsers to\nfall back to 'text'.</p>\n\n<p>The type 'password' must be used to render that field type currently -- there is no separate Ext component for\nthat. You can use <a href=\"#/api/Ext.form.field.File\" rel=\"Ext.form.field.File\" class=\"docClass\">Ext.form.field.File</a> which creates a custom-rendered file upload field, but if you want\na plain unstyled file input you can use a BaseField with inputType:'file'.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 117,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-cfg-invalidCls",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "invalidCls",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>The CSS class to use when marking the component invalid (defaults to 'x-form-invalid')</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 132,
        "owner": "Ext.form.field.Base",
        "html_filename": "Base.html",
        "href": "Base.html#Ext-form-field-Base-cfg-invalidText",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "invalidText",
        "shortDoc": "The error text to use when marking a field invalid and no message is provided (defaults to 'The value in this\nfield i...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Base.js",
        "doc": "<p>The error text to use when marking a field invalid and no message is provided (defaults to 'The value in this\nfield is invalid')</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 63,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-itemId",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "itemId",
        "shortDoc": "An itemId can be used as an alternative way to get a reference to a component\nwhen no object reference is available. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>An <tt>itemId</tt> can be used as an alternative way to get a reference to a component\nwhen no object reference is available.  Instead of using an <code><a href=\"#/api/Ext.form.field.Spinner-cfg-id\" rel=\"Ext.form.field.Spinner-cfg-id\" class=\"docClass\">id</a></code> with\n<a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a>.<a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">getCmp</a>, use <code>itemId</code> with\n<a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a>.<a href=\"#/api/Ext.container.Container-method-getComponent\" rel=\"Ext.container.Container-method-getComponent\" class=\"docClass\">getComponent</a> which will retrieve\n<code>itemId</code>'s or <tt><a href=\"#/api/Ext.form.field.Spinner-cfg-id\" rel=\"Ext.form.field.Spinner-cfg-id\" class=\"docClass\">id</a></tt>'s. Since <code>itemId</code>'s are an index to the\ncontainer's internal MixedCollection, the <code>itemId</code> is scoped locally to the container --\navoiding potential conflicts with <a href=\"#/api/Ext.ComponentManager\" rel=\"Ext.ComponentManager\" class=\"docClass\">Ext.ComponentManager</a> which requires a <b>unique</b>\n<code><a href=\"#/api/Ext.form.field.Spinner-cfg-id\" rel=\"Ext.form.field.Spinner-cfg-id\" class=\"docClass\">id</a></code>.</p>\n\n\n<pre><code>var c = new Ext.panel.Panel({ //\n    <a href=\"#/api/Ext.Component-cfg-height\" rel=\"Ext.Component-cfg-height\" class=\"docClass\">height</a>: 300,\n    <a href=\"#/api/Ext.form.field.Spinner-cfg-renderTo\" rel=\"Ext.form.field.Spinner-cfg-renderTo\" class=\"docClass\">renderTo</a>: document.body,\n    <a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">layout</a>: 'auto',\n    <a href=\"#/api/Ext.container.Container-property-items\" rel=\"Ext.container.Container-property-items\" class=\"docClass\">items</a>: [\n        {\n            itemId: 'p1',\n            <a href=\"#/api/Ext.panel.Panel-cfg-title\" rel=\"Ext.panel.Panel-cfg-title\" class=\"docClass\">title</a>: 'Panel 1',\n            <a href=\"#/api/Ext.Component-cfg-height\" rel=\"Ext.Component-cfg-height\" class=\"docClass\">height</a>: 150\n        },\n        {\n            itemId: 'p2',\n            <a href=\"#/api/Ext.panel.Panel-cfg-title\" rel=\"Ext.panel.Panel-cfg-title\" class=\"docClass\">title</a>: 'Panel 2',\n            <a href=\"#/api/Ext.Component-cfg-height\" rel=\"Ext.Component-cfg-height\" class=\"docClass\">height</a>: 150\n        }\n    ]\n})\np1 = c.<a href=\"#/api/Ext.container.Container-method-getComponent\" rel=\"Ext.container.Container-method-getComponent\" class=\"docClass\">getComponent</a>('p1'); // not the same as <a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">Ext.getCmp()</a>\np2 = p1.<a href=\"#/api/Ext.form.field.Spinner-property-ownerCt\" rel=\"Ext.form.field.Spinner-property-ownerCt\" class=\"docClass\">ownerCt</a>.<a href=\"#/api/Ext.container.Container-method-getComponent\" rel=\"Ext.container.Container-method-getComponent\" class=\"docClass\">getComponent</a>('p2'); // reference via a sibling\n</code></pre>\n\n\n<p>Also see <tt><a href=\"#/api/Ext.form.field.Spinner-cfg-id\" rel=\"Ext.form.field.Spinner-cfg-id\" class=\"docClass\">id</a></tt>, <code><a href=\"#/api/Ext.container.Container-method-query\" rel=\"Ext.container.Container-method-query\" class=\"docClass\">Ext.container.Container.query</a></code>,\n<code><a href=\"#/api/Ext.container.Container-method-down\" rel=\"Ext.container.Container-method-down\" class=\"docClass\">Ext.container.Container.down</a></code> and <code><a href=\"#/api/Ext.container.Container-method-child\" rel=\"Ext.container.Container-method-child\" class=\"docClass\">Ext.container.Container.child</a></code>.</p>\n\n\n<p><b>Note</b>: to access the container of an item see <tt><a href=\"#/api/Ext.form.field.Spinner-property-ownerCt\" rel=\"Ext.form.field.Spinner-property-ownerCt\" class=\"docClass\">ownerCt</a></tt>.</p>\n\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 77,
        "owner": "Ext.form.field.Spinner",
        "html_filename": "Spinner.html",
        "href": "Spinner.html#Ext-form-field-Spinner-cfg-keyNavEnabled",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "keyNavEnabled",
        "shortDoc": "Specifies whether the up and down arrow keys should trigger spinning up and down. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Spinner.js",
        "doc": "<p>Specifies whether the up and down arrow keys should trigger spinning up and down. Defaults to true.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 131,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-cfg-labelAlign",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "labelAlign",
        "shortDoc": "Controls the position and alignment of the fieldLabel. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>Controls the position and alignment of the <a href=\"#/api/Ext.form.field.Spinner-cfg-fieldLabel\" rel=\"Ext.form.field.Spinner-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a>. Valid values are:</p>\n\n\n<ul>\n<li><tt>\"left\"</tt> (the default) - The label is positioned to the left of the field, with its text\naligned to the left. Its width is determined by the <a href=\"#/api/Ext.form.field.Spinner-cfg-labelWidth\" rel=\"Ext.form.field.Spinner-cfg-labelWidth\" class=\"docClass\">labelWidth</a> config.</li>\n<li><tt>\"top\"</tt> - The label is positioned above the field.</li>\n<li><tt>\"right\"</tt> - The label is positioned to the left of the field, with its text aligned\nto the right. Its width is determined by the <a href=\"#/api/Ext.form.field.Spinner-cfg-labelWidth\" rel=\"Ext.form.field.Spinner-cfg-labelWidth\" class=\"docClass\">labelWidth</a> config.</li>\n</ul>\n\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 76,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-cfg-labelCls",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "labelCls",
        "shortDoc": "The CSS class to be applied to the label element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>The CSS class to be applied to the label element. Defaults to 'x-form-item-label'.\nThis (single) CSS class is used to formulate the renderSelector and drives the field\nlayout where it is concatenated with a hyphen ('-') and <a href=\"#/api/Ext.form.field.Spinner-cfg-labelAlign\" rel=\"Ext.form.field.Spinner-cfg-labelAlign\" class=\"docClass\">labelAlign</a>. To add\nadditional classes, use <a href=\"#/api/Ext.form.field.Spinner-cfg-labelClsExtra\" rel=\"Ext.form.field.Spinner-cfg-labelClsExtra\" class=\"docClass\">labelClsExtra</a>.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 85,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-cfg-labelClsExtra",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "labelClsExtra",
        "shortDoc": "An optional string of one or more additional CSS classes to add to the label element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>An optional string of one or more additional CSS classes to add to the label element.\nDefaults to empty.</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 151,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-cfg-labelPad",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "labelPad",
        "shortDoc": "The amount of space in pixels between the fieldLabel and the input field. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>The amount of space in pixels between the <a href=\"#/api/Ext.form.field.Spinner-cfg-fieldLabel\" rel=\"Ext.form.field.Spinner-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> and the input field. Defaults to <tt>5</tt>.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 157,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-cfg-labelSeparator",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "labelSeparator",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>Character(s) to be inserted at the end of the <a href=\"#/api/Ext.form.field.Spinner-cfg-fieldLabel\" rel=\"Ext.form.field.Spinner-cfg-fieldLabel\" class=\"docClass\">label text</a>.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 163,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-cfg-labelStyle",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "labelStyle",
        "shortDoc": "A CSS style specification string to apply directly to this field's label. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>A CSS style specification string to apply directly to this field's label. Defaults to undefined.</p>\n\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 144,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-cfg-labelWidth",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "labelWidth",
        "shortDoc": "The width of the fieldLabel in pixels. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>The width of the <a href=\"#/api/Ext.form.field.Spinner-cfg-fieldLabel\" rel=\"Ext.form.field.Spinner-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> in pixels. Only applicable if the <a href=\"#/api/Ext.form.field.Spinner-cfg-labelAlign\" rel=\"Ext.form.field.Spinner-cfg-labelAlign\" class=\"docClass\">labelAlign</a> is set\nto \"left\" or \"right\". Defaults to <tt>100</tt>.</p>\n"
      },
      {
        "static": false,
        "type": "String/String[]/Ext.XTemplate",
        "inheritable": false,
        "properties": null,
        "linenr": 29,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-cfg-labelableRenderTpl",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "labelableRenderTpl",
        "shortDoc": "The rendering template for the field decorations. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>The rendering template for the field decorations. Component classes using this mixin should include\nlogic to use this as their <a href=\"#/api/Ext.AbstractComponent-cfg-renderTpl\" rel=\"Ext.AbstractComponent-cfg-renderTpl\" class=\"docClass\">renderTpl</a>, and implement the\n<a href=\"#/api/Ext.form.field.Spinner-method-getSubTplMarkup\" rel=\"Ext.form.field.Spinner-method-getSubTplMarkup\" class=\"docClass\">getSubTplMarkup</a> method to generate the field body content.</p>\n"
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
        "doc": "<p>A config object containing one or more event handlers to be added to this object during initialization. This\nshould be a valid listeners config object as specified in the <a href=\"#/api/Ext.form.field.Spinner-method-addListener\" rel=\"Ext.form.field.Spinner-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple\nhandlers at once.</p>\n\n<p><strong>DOM events from ExtJS <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></strong></p>\n\n<p>While <em>some</em> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this is usually\nonly done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s <strong><code><a href=\"#/api/Ext.view.View-event-itemclick\" rel=\"Ext.view.View-event-itemclick\" class=\"docClass\">itemclick</a></code></strong> event passing the node clicked on. To access DOM events directly from a\nchild element of a Component, we need to specify the <code>element</code> option to identify the Component property to add a\nDOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n"
      },
      {
        "static": false,
        "type": "Ext.ComponentLoader/Object",
        "inheritable": false,
        "properties": null,
        "linenr": 561,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-loader",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "loader",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>A configuration object or an instance of a <a href=\"#/api/Ext.ComponentLoader\" rel=\"Ext.ComponentLoader\" class=\"docClass\">Ext.ComponentLoader</a> to load remote\ncontent for this Component.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 263,
        "owner": "Ext.Component",
        "html_filename": "Component.html",
        "href": "Component.html#Ext-Component-cfg-maintainFlex",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "maintainFlex",
        "shortDoc": "Only valid when a sibling element of a Splitter within a VBox or\nHBox layout. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Component.js",
        "doc": "<p><b>Only valid when a sibling element of a <a href=\"#/api/Ext.resizer.Splitter\" rel=\"Ext.resizer.Splitter\" class=\"docClass\">Splitter</a> within a <a href=\"#/api/Ext.layout.container.VBox\" rel=\"Ext.layout.container.VBox\" class=\"docClass\">VBox</a> or\n<a href=\"#/api/Ext.layout.container.HBox\" rel=\"Ext.layout.container.HBox\" class=\"docClass\">HBox</a> layout.</b></p>\n\n\n<p>Specifies that if an immediate sibling Splitter is moved, the Component on the <i>other</i> side is resized, and this\nComponent maintains its configured <a href=\"#/api/Ext.layout.container.Box-cfg-flex\" rel=\"Ext.layout.container.Box-cfg-flex\" class=\"docClass\">flex</a> value.</p>\n\n"
      },
      {
        "static": false,
        "type": "Number/String",
        "inheritable": false,
        "properties": null,
        "linenr": 450,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-margin",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "margin",
        "shortDoc": "Specifies the margin for this component. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Specifies the margin for this component. The margin can be a single numeric value to apply to all sides or\nit can be a CSS style specification for each style, for example: '10 5 3 10'.</p>\n"
      },
      {
        "static": false,
        "type": "RegExp",
        "inheritable": false,
        "properties": null,
        "linenr": 114,
        "owner": "Ext.form.field.Text",
        "html_filename": "Text.html",
        "href": "Text.html#Ext-form-field-Text-cfg-maskRe",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "maskRe",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Text.js",
        "doc": "<p>An input mask regular expression that will be used to filter keystrokes that do not match (defaults to undefined)</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 550,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-maxHeight",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "maxHeight",
        "shortDoc": "The maximum value in pixels which this Component will set its height to. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>The maximum value in pixels which this Component will set its height to.</p>\n\n\n<p><b>Warning:</b> This will override any size management applied by layout managers.</p>\n\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 136,
        "owner": "Ext.form.field.Text",
        "html_filename": "Text.html",
        "href": "Text.html#Ext-form-field-Text-cfg-maxLength",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "maxLength",
        "shortDoc": "Maximum input field length allowed by validation (defaults to Number.MAX_VALUE). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Text.js",
        "doc": "<p>Maximum input field length allowed by validation (defaults to Number.MAX_VALUE). This behavior is intended to\nprovide instant feedback to the user by improving usability to allow pasting and editing or overtyping and back\ntracking. To restrict the maximum number of characters that can be entered into the field use the <strong><a href=\"#/api/Ext.form.field.Text-cfg-enforceMaxLength\" rel=\"Ext.form.field.Text-cfg-enforceMaxLength\" class=\"docClass\">enforceMaxLength</a></strong> option.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 157,
        "owner": "Ext.form.field.Text",
        "html_filename": "Text.html",
        "href": "Text.html#Ext-form-field-Text-cfg-maxLengthText",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "maxLengthText",
        "shortDoc": "Error text to display if the maximum length validation fails (defaults to 'The maximum\nlength for this field is {maxL...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Text.js",
        "doc": "<p>Error text to display if the <strong><a href=\"#/api/Ext.form.field.Spinner-cfg-maxLength\" rel=\"Ext.form.field.Spinner-cfg-maxLength\" class=\"docClass\">maximum length</a></strong> validation fails (defaults to 'The maximum\nlength for this field is {maxLength}')</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 555,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-maxWidth",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "maxWidth",
        "shortDoc": "The maximum value in pixels which this Component will set its width to. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>The maximum value in pixels which this Component will set its width to.</p>\n\n\n<p><b>Warning:</b> This will override any size management applied by layout managers.</p>\n\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 540,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-minHeight",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "minHeight",
        "shortDoc": "The minimum value in pixels which this Component will set its height to. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>The minimum value in pixels which this Component will set its height to.</p>\n\n\n<p><b>Warning:</b> This will override any size management applied by layout managers.</p>\n\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 130,
        "owner": "Ext.form.field.Text",
        "html_filename": "Text.html",
        "href": "Text.html#Ext-form-field-Text-cfg-minLength",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "minLength",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Text.js",
        "doc": "<p>Minimum input field length required (defaults to 0)</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 150,
        "owner": "Ext.form.field.Text",
        "html_filename": "Text.html",
        "href": "Text.html#Ext-form-field-Text-cfg-minLengthText",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "minLengthText",
        "shortDoc": "Error text to display if the minimum length validation fails (defaults to 'The minimum\nlength for this field is {minL...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Text.js",
        "doc": "<p>Error text to display if the <strong><a href=\"#/api/Ext.form.field.Spinner-cfg-minLength\" rel=\"Ext.form.field.Spinner-cfg-minLength\" class=\"docClass\">minimum length</a></strong> validation fails (defaults to 'The minimum\nlength for this field is {minLength}')</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 545,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-minWidth",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "minWidth",
        "shortDoc": "The minimum value in pixels which this Component will set its width to. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>The minimum value in pixels which this Component will set its width to.</p>\n\n\n<p><b>Warning:</b> This will override any size management applied by layout managers.</p>\n\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 83,
        "owner": "Ext.form.field.Spinner",
        "html_filename": "Spinner.html",
        "href": "Spinner.html#Ext-form-field-Spinner-cfg-mouseWheelEnabled",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "mouseWheelEnabled",
        "shortDoc": "Specifies whether the mouse wheel should trigger spinning up and down while the field has focus. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Spinner.js",
        "doc": "<p>Specifies whether the mouse wheel should trigger spinning up and down while the field has focus.\nDefaults to true.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 201,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-cfg-msgTarget",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "msgTarget",
        "shortDoc": "The location where the error message text should display. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>The location where the error message text should display.\nMust be one of the following values:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li><code>qtip</code> Display a quick tip containing the message when the user hovers over the field. This is the default.\n<div class=\"subdesc\"><b><a href=\"#/api/Ext.tip.QuickTipManager-method-init\" rel=\"Ext.tip.QuickTipManager-method-init\" class=\"docClass\">Ext.tip.QuickTipManager.init</a> must have been called for this setting to work.</b></div></li>\n<li><code>title</code> Display the message in a default browser title attribute popup.</li>\n<li><code>under</code> Add a block div beneath the field containing the error message.</li>\n<li><code>side</code> Add an error icon to the right of the field, displaying the message in a popup on hover.</li>\n<li><code>none</code> Don't display any error message. This might be useful if you are implementing custom error display.</li>\n<li><code>[element id]</code> Add the error message directly to the innerHTML of the specified element.</li>\n</ul></div>\n\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 107,
        "owner": "Ext.form.field.Base",
        "html_filename": "Base.html",
        "href": "Base.html#Ext-form-field-Base-cfg-name",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "name",
        "shortDoc": "The name of the field (defaults to undefined). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Base.js",
        "doc": "<p>The name of the field (defaults to undefined). This is used as the parameter name when including the field value\nin a <a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">form submit()</a>. If no name is configured, it falls back to the <a href=\"#/api/Ext.form.field.Spinner-cfg-inputId\" rel=\"Ext.form.field.Spinner-cfg-inputId\" class=\"docClass\">inputId</a>.\nTo prevent the field from being included in the form submit, set <a href=\"#/api/Ext.form.field.Spinner-cfg-submitValue\" rel=\"Ext.form.field.Spinner-cfg-submitValue\" class=\"docClass\">submitValue</a> to false.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 373,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-overCls",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "overCls",
        "shortDoc": "An optional extra CSS class that will be added to this component's Element when the mouse moves\nover the Element, and...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>An optional extra CSS class that will be added to this component's Element when the mouse moves\nover the Element, and removed when the mouse moves out. (defaults to '').  This can be\nuseful for adding customized 'active' or 'hover' styles to the component or any of its children using standard CSS rules.</p>\n"
      },
      {
        "static": false,
        "type": "Number/String",
        "inheritable": false,
        "properties": null,
        "linenr": 444,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-padding",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "padding",
        "shortDoc": "Specifies the padding for this component. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Specifies the padding for this component. The padding can be a single numeric value to apply to all sides or\nit can be a CSS style specification for each style, for example: '10 5 3 10'.</p>\n"
      },
      {
        "static": false,
        "type": "Object/Object[]",
        "inheritable": false,
        "properties": null,
        "linenr": 590,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-plugins",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "plugins",
        "shortDoc": "An object or array of objects that will provide custom functionality for this component. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>An object or array of objects that will provide custom functionality for this component.  The only\nrequirement for a valid plugin is that it contain an init method that accepts a reference of type <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.\nWhen a component is created, if any plugins are available, the component will call the init method on each\nplugin, passing a reference to itself.  Each plugin can then call methods or respond to events on the\ncomponent as needed to provide its functionality.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 187,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-cfg-preventMark",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "preventMark",
        "shortDoc": "true to disable displaying any error message set on this object. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p><tt>true</tt> to disable displaying any <a href=\"#/api/Ext.form.field.Spinner-method-setActiveError\" rel=\"Ext.form.field.Spinner-method-setActiveError\" class=\"docClass\">error message</a> set on this object.\nDefaults to <tt>false</tt>.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 90,
        "owner": "Ext.form.field.Trigger",
        "html_filename": "Trigger.html",
        "href": "Trigger.html#Ext-form-field-Trigger-cfg-readOnly",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "readOnly",
        "shortDoc": "true to prevent the user from changing the field, and hides the trigger. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Trigger.js",
        "doc": "<p>true to prevent the user from changing the field, and hides the trigger. Supercedes the editable and hideTrigger\noptions if the value is true. (defaults to false)</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 207,
        "owner": "Ext.form.field.Base",
        "html_filename": "Base.html",
        "href": "Base.html#Ext-form-field-Base-cfg-readOnlyCls",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "readOnlyCls",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Base.js",
        "doc": "<p>The CSS class applied to the component's main element when it is <a href=\"#/api/Ext.form.field.Spinner-cfg-readOnly\" rel=\"Ext.form.field.Spinner-cfg-readOnly\" class=\"docClass\">readOnly</a>.</p>\n"
      },
      {
        "static": false,
        "type": "RegExp",
        "inheritable": false,
        "properties": null,
        "linenr": 190,
        "owner": "Ext.form.field.Text",
        "html_filename": "Text.html",
        "href": "Text.html#Ext-form-field-Text-cfg-regex",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "regex",
        "shortDoc": "A JavaScript RegExp object to be tested against the field value during validation (defaults to undefined). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Text.js",
        "doc": "<p>A JavaScript RegExp object to be tested against the field value during validation (defaults to undefined). If the\ntest fails, the field will be marked invalid using <strong><a href=\"#/api/Ext.form.field.Spinner-cfg-regexText\" rel=\"Ext.form.field.Spinner-cfg-regexText\" class=\"docClass\">regexText</a></strong>.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 196,
        "owner": "Ext.form.field.Text",
        "html_filename": "Text.html",
        "href": "Text.html#Ext-form-field-Text-cfg-regexText",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "regexText",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Text.js",
        "doc": "<p>The error text to display if <strong><a href=\"#/api/Ext.form.field.Spinner-cfg-regex\" rel=\"Ext.form.field.Spinner-cfg-regex\" class=\"docClass\">regex</a></strong> is used and the test fails during validation (defaults to '')</p>\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 176,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-renderSelectors",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "renderSelectors",
        "shortDoc": "An object containing properties specifying DomQuery selectors which identify child elements\ncreated by the render pro...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>An object containing properties specifying <a href=\"#/api/Ext.DomQuery\" rel=\"Ext.DomQuery\" class=\"docClass\">DomQuery</a> selectors which identify child elements\ncreated by the render process.</p>\n\n<p>After the Component's internal structure is rendered according to the <a href=\"#/api/Ext.form.field.Spinner-cfg-renderTpl\" rel=\"Ext.form.field.Spinner-cfg-renderTpl\" class=\"docClass\">renderTpl</a>, this object is iterated through,\nand the found Elements are added as properties to the Component using the <code>renderSelector</code> property name.</p>\n\n<p>For example, a Component which rendered an image, and description into its element might use the following properties\ncoded into its prototype:</p>\n\n<pre><code>renderTpl: '&amp;lt;img src=\"{imageUrl}\" class=\"x-image-component-img\"&gt;&amp;lt;div class=\"x-image-component-desc\"&gt;{description}&amp;gt;/div&amp;lt;',\n\nrenderSelectors: {\n    image: 'img.x-image-component-img',\n    descEl: 'div.x-image-component-desc'\n}\n</code></pre>\n\n<p>After rendering, the Component would have a property <code>image</code> referencing its child <code>img</code> Element,\nand a property <code>descEl</code> referencing the <code>div</code> Element which contains the description.</p>\n\n<p>For a faster, but less flexible, alternative that achieves the same end result (properties for child elements on the\nComponent after render), see <a href=\"#/api/Ext.form.field.Spinner-cfg-childEls\" rel=\"Ext.form.field.Spinner-cfg-childEls\" class=\"docClass\">childEls</a> and <a href=\"#/api/Ext.form.field.Spinner-method-addChildEls\" rel=\"Ext.form.field.Spinner-method-addChildEls\" class=\"docClass\">addChildEls</a>.</p>\n"
      },
      {
        "static": false,
        "type": "String/HTMLElement/Ext.Element",
        "inheritable": false,
        "properties": null,
        "linenr": 231,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-renderTo",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "renderTo",
        "shortDoc": "Specify the id of the element, a DOM element or an existing Element that this component\nwill be rendered into. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Specify the id of the element, a DOM element or an existing Element that this component\nwill be rendered into.</p>\n\n\n<div><ul>\n<li><b>Notes</b> : <ul>\n<div class=\"sub-desc\">Do <u>not</u> use this option if the Component is to be a child item of\na <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a>. It is the responsibility of the\n<a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a>'s <a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">layout manager</a>\nto render and manage its child items.</div>\n<div class=\"sub-desc\">When using this config, a call to render() is not required.</div>\n</ul></li>\n</ul></div>\n\n\n<p>See <code><a href=\"#/api/Ext.form.field.Spinner-event-render\" rel=\"Ext.form.field.Spinner-event-render\" class=\"docClass\">render</a></code> also.</p>\n\n"
      },
      {
        "static": false,
        "type": "Ext.XTemplate/String/String[]",
        "inheritable": false,
        "properties": null,
        "linenr": 161,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-renderTpl",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "renderTpl",
        "shortDoc": "An XTemplate used to create the internal structure inside this Component's\nencapsulating Element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>An <a href=\"#/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">XTemplate</a> used to create the internal structure inside this Component's\nencapsulating <a href=\"#/api/Ext.form.field.Spinner-method-getEl\" rel=\"Ext.form.field.Spinner-method-getEl\" class=\"docClass\">Element</a>.</p>\n\n\n<p>You do not normally need to specify this. For the base classes <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>\nand <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a>, this defaults to <b><code>null</code></b> which means that they will be initially rendered\nwith no internal structure; they render their <a href=\"#/api/Ext.form.field.Spinner-method-getEl\" rel=\"Ext.form.field.Spinner-method-getEl\" class=\"docClass\">Element</a> empty. The more specialized ExtJS and Touch classes\nwhich use a more complex DOM structure, provide their own template definitions.</p>\n\n\n<p>This is intended to allow the developer to create application-specific utility Components with customized\ninternal structure.</p>\n\n\n<p>Upon rendering, any created child elements may be automatically imported into object properties using the\n<a href=\"#/api/Ext.form.field.Spinner-cfg-renderSelectors\" rel=\"Ext.form.field.Spinner-cfg-renderSelectors\" class=\"docClass\">renderSelectors</a> option.</p>\n\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 90,
        "owner": "Ext.form.field.Spinner",
        "html_filename": "Spinner.html",
        "href": "Spinner.html#Ext-form-field-Spinner-cfg-repeatTriggerClick",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "repeatTriggerClick",
        "shortDoc": "Whether a click repeater should be attached to the spinner buttons. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Spinner.js",
        "doc": "<p>Whether a <a href=\"#/api/Ext.util.ClickRepeater\" rel=\"Ext.util.ClickRepeater\" class=\"docClass\">click repeater</a> should be attached to the spinner buttons.\nDefaults to true.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean/Object",
        "inheritable": false,
        "properties": null,
        "linenr": 161,
        "owner": "Ext.Component",
        "html_filename": "Component.html",
        "href": "Component.html#Ext-Component-cfg-resizable",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "resizable",
        "shortDoc": "Specify as true to apply a Resizer to this Component\nafter rendering. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Component.js",
        "doc": "<p>Specify as <code>true</code> to apply a <a href=\"#/api/Ext.resizer.Resizer\" rel=\"Ext.resizer.Resizer\" class=\"docClass\">Resizer</a> to this Component\nafter rendering.</p>\n\n\n<p>May also be specified as a config object to be passed to the constructor of <a href=\"#/api/Ext.resizer.Resizer\" rel=\"Ext.resizer.Resizer\" class=\"docClass\">Resizer</a>\nto override any defaults. By default the Component passes its minimum and maximum size, and uses\n<code><a href=\"#/api/Ext.resizer.Resizer-cfg-dynamic\" rel=\"Ext.resizer.Resizer-cfg-dynamic\" class=\"docClass\">Ext.resizer.Resizer.dynamic</a>: false</code></p>\n\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 170,
        "owner": "Ext.Component",
        "html_filename": "Component.html",
        "href": "Component.html#Ext-Component-cfg-resizeHandles",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "resizeHandles",
        "shortDoc": "A valid Ext.resizer.Resizer handles config string (defaults to 'all'). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Component.js",
        "doc": "<p>A valid <a href=\"#/api/Ext.resizer.Resizer\" rel=\"Ext.resizer.Resizer\" class=\"docClass\">Ext.resizer.Resizer</a> handles config string (defaults to 'all').  Only applies when resizable = true.</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 74,
        "owner": "Ext.state.Stateful",
        "html_filename": "Stateful.html",
        "href": "Stateful.html#Ext-state-Stateful-cfg-saveBuffer",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "saveBuffer",
        "shortDoc": "A buffer to be applied if many state events are fired within\na short period. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/state/Stateful.js",
        "doc": "<p>A buffer to be applied if many state events are fired within\na short period. Defaults to 100.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 97,
        "owner": "Ext.form.field.Trigger",
        "html_filename": "Trigger.html",
        "href": "Trigger.html#Ext-form-field-Trigger-cfg-selectOnFocus",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "selectOnFocus",
        "shortDoc": "true to select any existing text in the field immediately on focus. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Trigger.js",
        "doc": "<p>true to select any existing text in the field immediately on focus. Only applies when\n<a href=\"#/api/Ext.form.field.Spinner-cfg-editable\" rel=\"Ext.form.field.Spinner-cfg-editable\" class=\"docClass\">editable</a> = true (defaults to false).</p>\n"
      },
      {
        "static": false,
        "type": "String/Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 15,
        "owner": "Ext.util.Floating",
        "html_filename": "Floating.html",
        "href": "Floating.html#Ext-util-Floating-cfg-shadow",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "shadow",
        "shortDoc": "Specifies whether the floating component should be given a shadow. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/util/Floating.js",
        "doc": "<p>Specifies whether the floating component should be given a shadow. Set to true to automatically create an <a href=\"#/api/Ext.Shadow\" rel=\"Ext.Shadow\" class=\"docClass\">Ext.Shadow</a>, or a string indicating the shadow's display <a href=\"#/api/Ext.Shadow-cfg-mode\" rel=\"Ext.Shadow-cfg-mode\" class=\"docClass\">Ext.Shadow.mode</a>. Set to false to disable the\nshadow. (Defaults to 'sides'.)</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 76,
        "owner": "Ext.form.field.Text",
        "html_filename": "Text.html",
        "href": "Text.html#Ext-form-field-Text-cfg-size",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "size",
        "shortDoc": "An initial value for the 'size' attribute on the text input element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Text.js",
        "doc": "<p>An initial value for the 'size' attribute on the text input element. This is only used if the field has no\nconfigured <a href=\"#/api/Ext.form.field.Spinner-cfg-width\" rel=\"Ext.form.field.Spinner-cfg-width\" class=\"docClass\">width</a> and is not given a width by its container's layout. Defaults to 20.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 70,
        "owner": "Ext.form.field.Spinner",
        "html_filename": "Spinner.html",
        "href": "Spinner.html#Ext-form-field-Spinner-cfg-spinDownEnabled",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "spinDownEnabled",
        "shortDoc": "Specifies whether the down spinner button is enabled. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Spinner.js",
        "doc": "<p>Specifies whether the down spinner button is enabled. Defaults to true. To change this after the component is\ncreated, use the <a href=\"#/api/Ext.form.field.Spinner-method-setSpinDownEnabled\" rel=\"Ext.form.field.Spinner-method-setSpinDownEnabled\" class=\"docClass\">setSpinDownEnabled</a> method.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 63,
        "owner": "Ext.form.field.Spinner",
        "html_filename": "Spinner.html",
        "href": "Spinner.html#Ext-form-field-Spinner-cfg-spinUpEnabled",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "spinUpEnabled",
        "shortDoc": "Specifies whether the up spinner button is enabled. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Spinner.js",
        "doc": "<p>Specifies whether the up spinner button is enabled. Defaults to true. To change this after the component is\ncreated, use the <a href=\"#/api/Ext.form.field.Spinner-method-setSpinUpEnabled\" rel=\"Ext.form.field.Spinner-method-setSpinUpEnabled\" class=\"docClass\">setSpinUpEnabled</a> method.</p>\n"
      },
      {
        "static": false,
        "type": "String[]",
        "inheritable": false,
        "properties": null,
        "linenr": 64,
        "owner": "Ext.state.Stateful",
        "html_filename": "Stateful.html",
        "href": "Stateful.html#Ext-state-Stateful-cfg-stateEvents",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "stateEvents",
        "shortDoc": "An array of events that, when fired, should trigger this object to\nsave its state (defaults to none). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/state/Stateful.js",
        "doc": "<p>An array of events that, when fired, should trigger this object to\nsave its state (defaults to none). <code>stateEvents</code> may be any type\nof event supported by this object, including browser or custom events\n(e.g., <tt>['click', 'customerchange']</tt>).</p>\n\n\n<p>See <code><a href=\"#/api/Ext.form.field.Spinner-cfg-stateful\" rel=\"Ext.form.field.Spinner-cfg-stateful\" class=\"docClass\">stateful</a></code> for an explanation of saving and\nrestoring object state.</p>\n\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 58,
        "owner": "Ext.state.Stateful",
        "html_filename": "Stateful.html",
        "href": "Stateful.html#Ext-state-Stateful-cfg-stateId",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "stateId",
        "shortDoc": "The unique id for this object to use for state management purposes. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/state/Stateful.js",
        "doc": "<p>The unique id for this object to use for state management purposes.</p>\n\n<p>See <a href=\"#/api/Ext.form.field.Spinner-cfg-stateful\" rel=\"Ext.form.field.Spinner-cfg-stateful\" class=\"docClass\">stateful</a> for an explanation of saving and restoring state.</p>\n\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 18,
        "owner": "Ext.state.Stateful",
        "html_filename": "Stateful.html",
        "href": "Stateful.html#Ext-state-Stateful-cfg-stateful",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "stateful",
        "shortDoc": "A flag which causes the object to attempt to restore the state of\ninternal properties from a saved state on startup. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/state/Stateful.js",
        "doc": "<p>A flag which causes the object to attempt to restore the state of\ninternal properties from a saved state on startup. The object must have\na <code><a href=\"#/api/Ext.form.field.Spinner-cfg-stateId\" rel=\"Ext.form.field.Spinner-cfg-stateId\" class=\"docClass\">stateId</a></code> for state to be managed.\nAuto-generated ids are not guaranteed to be stable across page loads and\ncannot be relied upon to save and restore the same state for a object.<p>\n<p>For state saving to work, the state manager's provider must have been\nset to an implementation of <a href=\"#/api/Ext.state.Provider\" rel=\"Ext.state.Provider\" class=\"docClass\">Ext.state.Provider</a> which overrides the\n<a href=\"#/api/Ext.state.Provider-method-set\" rel=\"Ext.state.Provider-method-set\" class=\"docClass\">set</a> and <a href=\"#/api/Ext.state.Provider-method-get\" rel=\"Ext.state.Provider-method-get\" class=\"docClass\">get</a>\nmethods to save and recall name/value pairs. A built-in implementation,\n<a href=\"#/api/Ext.state.CookieProvider\" rel=\"Ext.state.CookieProvider\" class=\"docClass\">Ext.state.CookieProvider</a> is available.</p>\n<p>To set the state provider for the current page:</p>\n<pre><code>Ext.state.Manager.setProvider(new Ext.state.CookieProvider({\n    expires: new Date(new Date().getTime()+(1000*60*60*24*7)), //7 days from now\n}));\n</code></pre>\n<p>A stateful object attempts to save state when one of the events\nlisted in the <code><a href=\"#/api/Ext.form.field.Spinner-cfg-stateEvents\" rel=\"Ext.form.field.Spinner-cfg-stateEvents\" class=\"docClass\">stateEvents</a></code> configuration fires.</p>\n<p>To save state, a stateful object first serializes its state by\ncalling <b><code><a href=\"#/api/Ext.form.field.Spinner-method-getState\" rel=\"Ext.form.field.Spinner-method-getState\" class=\"docClass\">getState</a></code></b>. By default, this function does\nnothing. The developer must provide an implementation which returns an\nobject hash which represents the restorable state of the object.</p>\n<p>The value yielded by getState is passed to <a href=\"#/api/Ext.state.Manager-method-set\" rel=\"Ext.state.Manager-method-set\" class=\"docClass\">Ext.state.Manager.set</a>\nwhich uses the configured <a href=\"#/api/Ext.state.Provider\" rel=\"Ext.state.Provider\" class=\"docClass\">Ext.state.Provider</a> to save the object\nkeyed by the <code><a href=\"#/api/Ext.form.field.Spinner-cfg-stateId\" rel=\"Ext.form.field.Spinner-cfg-stateId\" class=\"docClass\">stateId</a></code></p>.\n<p>During construction, a stateful object attempts to <i>restore</i>\nits state by calling <a href=\"#/api/Ext.state.Manager-method-get\" rel=\"Ext.state.Manager-method-get\" class=\"docClass\">Ext.state.Manager.get</a> passing the\n<code><a href=\"#/api/Ext.form.field.Spinner-cfg-stateId\" rel=\"Ext.form.field.Spinner-cfg-stateId\" class=\"docClass\">stateId</a></code></p>\n<p>The resulting object is passed to <b><code><a href=\"#/api/Ext.form.field.Spinner-method-applyState\" rel=\"Ext.form.field.Spinner-method-applyState\" class=\"docClass\">applyState</a></code></b>.\nThe default implementation of <code><a href=\"#/api/Ext.form.field.Spinner-method-applyState\" rel=\"Ext.form.field.Spinner-method-applyState\" class=\"docClass\">applyState</a></code> simply copies\nproperties into the object, but a developer may override this to support\nmore behaviour.</p>\n<p>You can perform extra processing on state save and restore by attaching\nhandlers to the <a href=\"#/api/Ext.form.field.Spinner-event-beforestaterestore\" rel=\"Ext.form.field.Spinner-event-beforestaterestore\" class=\"docClass\">beforestaterestore</a>, <a href=\"#/api/Ext.form.field.Spinner-event-staterestore\" rel=\"Ext.form.field.Spinner-event-staterestore\" class=\"docClass\">staterestore</a>,\n<a href=\"#/api/Ext.form.field.Spinner-event-beforestatesave\" rel=\"Ext.form.field.Spinner-event-beforestatesave\" class=\"docClass\">beforestatesave</a> and <a href=\"#/api/Ext.form.field.Spinner-event-statesave\" rel=\"Ext.form.field.Spinner-event-statesave\" class=\"docClass\">statesave</a> events.</p>\n\n"
      },
      {
        "static": false,
        "type": "RegExp",
        "inheritable": false,
        "properties": null,
        "linenr": 70,
        "owner": "Ext.form.field.Text",
        "html_filename": "Text.html",
        "href": "Text.html#Ext-form-field-Text-cfg-stripCharsRe",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "stripCharsRe",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Text.js",
        "doc": "<p>A JavaScript RegExp object used to strip unwanted content from the value before validation (defaults to\nundefined).</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 399,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-style",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "style",
        "shortDoc": "A custom style specification to be applied to this component's Element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>A custom style specification to be applied to this component's Element.  Should be a valid argument to\n<a href=\"#/api/Ext.Element-method-applyStyles\" rel=\"Ext.Element-method-applyStyles\" class=\"docClass\">Ext.Element.applyStyles</a>.</p>\n\n<pre><code>        new Ext.panel.Panel({\n            title: 'Some Title',\n            renderTo: Ext.getBody(),\n            width: 400, height: 300,\n            layout: 'form',\n            items: [{\n                xtype: 'textarea',\n                style: {\n                    width: '95%',\n                    marginBottom: '10px'\n                }\n            },\n            new Ext.button.Button({\n                text: 'Send',\n                minWidth: '100',\n                style: {\n                    marginBottom: '10px'\n                }\n            })\n            ]\n        });\n     </code></pre>\n\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 533,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-styleHtmlCls",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "styleHtmlCls",
        "shortDoc": "The class that is added to the content target when you set styleHtmlContent to true. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>The class that is added to the content target when you set styleHtmlContent to true.\nDefaults to 'x-html'</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 526,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-styleHtmlContent",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "styleHtmlContent",
        "shortDoc": "True to automatically style the html inside the content target of this component (body for panels). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>True to automatically style the html inside the content target of this component (body for panels).\nDefaults to false.</p>\n"
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
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 126,
        "owner": "Ext.form.field.Base",
        "html_filename": "Base.html",
        "href": "Base.html#Ext-form-field-Base-cfg-tabIndex",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "tabIndex",
        "shortDoc": "The tabIndex for this field. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Base.js",
        "doc": "<p>The tabIndex for this field. Note this only applies to fields that are rendered, not those which are built via\napplyTo (defaults to undefined).</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 206,
        "owner": "Ext.Component",
        "html_filename": "Component.html",
        "href": "Component.html#Ext-Component-cfg-toFrontOnShow",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "toFrontOnShow",
        "shortDoc": "True to automatically call toFront when the show method is called\non an already visible, floating component (default ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Component.js",
        "doc": "<p>True to automatically call <a href=\"#/api/Ext.form.field.Spinner-method-toFront\" rel=\"Ext.form.field.Spinner-method-toFront\" class=\"docClass\">toFront</a> when the <a href=\"#/api/Ext.form.field.Spinner-method-show\" rel=\"Ext.form.field.Spinner-method-show\" class=\"docClass\">show</a> method is called\non an already visible, floating component (default is <code>true</code>).</p>\n\n"
      },
      {
        "static": false,
        "type": "Ext.XTemplate/Ext.Template/String/String[]",
        "inheritable": false,
        "properties": null,
        "linenr": 279,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-tpl",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "tpl",
        "shortDoc": "An Ext.Template, Ext.XTemplate\nor an array of strings to form an Ext.XTemplate. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>An <bold><a href=\"#/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a></bold>, <bold><a href=\"#/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">Ext.XTemplate</a></bold>\nor an array of strings to form an <a href=\"#/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">Ext.XTemplate</a>.\nUsed in conjunction with the <code><a href=\"#/api/Ext.form.field.Spinner-cfg-data\" rel=\"Ext.form.field.Spinner-cfg-data\" class=\"docClass\">data</a></code> and\n<code><a href=\"#/api/Ext.form.field.Spinner-cfg-tplWriteMode\" rel=\"Ext.form.field.Spinner-cfg-tplWriteMode\" class=\"docClass\">tplWriteMode</a></code> configurations.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 344,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-tplWriteMode",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "tplWriteMode",
        "shortDoc": "The Ext.(X)Template method to use when\nupdating the content area of the Component. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>The Ext.(X)Template method to use when\nupdating the content area of the Component. Defaults to <code>'overwrite'</code>\n(see <code><a href=\"#/api/Ext.XTemplate-method-overwrite\" rel=\"Ext.XTemplate-method-overwrite\" class=\"docClass\">Ext.XTemplate.overwrite</a></code>).</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 64,
        "owner": "Ext.form.field.Trigger",
        "html_filename": "Trigger.html",
        "href": "Trigger.html#Ext-form-field-Trigger-cfg-triggerBaseCls",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "triggerBaseCls",
        "shortDoc": "The base CSS class that is always added to the trigger button. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Trigger.js",
        "doc": "<p>The base CSS class that is always added to the trigger button. The <a href=\"#/api/Ext.form.field.Spinner-cfg-triggerCls\" rel=\"Ext.form.field.Spinner-cfg-triggerCls\" class=\"docClass\">triggerCls</a> will be appended in\naddition to this class.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 58,
        "owner": "Ext.form.field.Trigger",
        "html_filename": "Trigger.html",
        "href": "Trigger.html#Ext-form-field-Trigger-cfg-triggerCls",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "triggerCls",
        "shortDoc": "An additional CSS class used to style the trigger button. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Trigger.js",
        "doc": "<p>An additional CSS class used to style the trigger button. The trigger will always get the <a href=\"#/api/Ext.form.field.Spinner-cfg-triggerBaseCls\" rel=\"Ext.form.field.Spinner-cfg-triggerBaseCls\" class=\"docClass\">triggerBaseCls</a>\nby default and triggerCls will be <strong>appended</strong> if specified. Defaults to undefined.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 71,
        "owner": "Ext.form.field.Trigger",
        "html_filename": "Trigger.html",
        "href": "Trigger.html#Ext-form-field-Trigger-cfg-triggerWrapCls",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "triggerWrapCls",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Trigger.js",
        "doc": "<p>The CSS class that is added to the div wrapping the trigger button(s).</p>\n"
      },
      {
        "static": false,
        "type": "String/String[]",
        "inheritable": false,
        "properties": null,
        "linenr": 386,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-ui",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "ui",
        "shortDoc": "A set style for a component. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>A set style for a component. Can be a string or an Array of multiple strings (UIs)</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 219,
        "owner": "Ext.form.field.Base",
        "html_filename": "Base.html",
        "href": "Base.html#Ext-form-field-Base-cfg-validateOnBlur",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "validateOnBlur",
        "shortDoc": "Whether the field should validate when it loses focus (defaults to true). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Base.js",
        "doc": "<p>Whether the field should validate when it loses focus (defaults to true). This will cause fields to be validated\nas the user steps through the fields in the form regardless of whether they are making changes to those fields\nalong the way. See also <a href=\"#/api/Ext.form.field.Spinner-cfg-validateOnChange\" rel=\"Ext.form.field.Spinner-cfg-validateOnChange\" class=\"docClass\">validateOnChange</a>.</p>\n"
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
        "doc": "<p>Specifies whether this field should be validated immediately whenever a change in its value is detected. Defaults\nto true. If the validation results in a change in the field's validity, a <a href=\"#/api/Ext.form.field.Spinner-event-validitychange\" rel=\"Ext.form.field.Spinner-event-validitychange\" class=\"docClass\">validitychange</a> event will be\nfired. This allows the field to show feedback about the validity of its contents immediately as the user is\ntyping.</p>\n\n<p>When set to false, feedback will not be immediate. However the form will still be validated before submitting if\nthe clientValidation option to <a href=\"#/api/Ext.form.Basic-method-doAction\" rel=\"Ext.form.Basic-method-doAction\" class=\"docClass\">Ext.form.Basic.doAction</a> is enabled, or if the field or form are validated\nmanually.</p>\n\n<p>See also <a href=\"#/api/Ext.form.field.Base-cfg-checkChangeEvents\" rel=\"Ext.form.field.Base-cfg-checkChangeEvents\" class=\"docClass\">Ext.form.field.Base.checkChangeEvents</a> for controlling how changes to the field's value are\ndetected.</p>\n"
      },
      {
        "static": false,
        "type": "Function",
        "inheritable": false,
        "properties": [
          {
            "type": "Object",
            "tagname": "cfg",
            "name": "value",
            "doc": "<p>The current field value</p>\n"
          },
          {
            "type": "Boolean/String",
            "tagname": "cfg",
            "name": "return",
            "doc": "<ul>\n<li>True if the value is valid</li>\n<li>An error message if the value is invalid</li>\n</ul>\n\n"
          }
        ],
        "linenr": 175,
        "owner": "Ext.form.field.Text",
        "html_filename": "Text.html",
        "href": "Text.html#Ext-form-field-Text-cfg-validator",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "validator",
        "shortDoc": "A custom validation function to be called during field validation (getErrors) (defaults to undefined). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Text.js",
        "doc": "<p>A custom validation function to be called during field validation (<a href=\"#/api/Ext.form.field.Spinner-method-getErrors\" rel=\"Ext.form.field.Spinner-method-getErrors\" class=\"docClass\">getErrors</a>) (defaults to undefined).\nIf specified, this function will be called first, allowing the developer to override the default validation\nprocess.</p>\n\n<p>This function will be passed the following parameters:</p>\n"
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
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 109,
        "owner": "Ext.form.field.Text",
        "html_filename": "Text.html",
        "href": "Text.html#Ext-form-field-Text-cfg-vtype",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "vtype",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Text.js",
        "doc": "<p>A validation type name as defined in <a href=\"#/api/Ext.form.field.VTypes\" rel=\"Ext.form.field.VTypes\" class=\"docClass\">Ext.form.field.VTypes</a> (defaults to undefined)</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 64,
        "owner": "Ext.form.field.Text",
        "html_filename": "Text.html",
        "href": "Text.html#Ext-form-field-Text-cfg-vtypeText",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "vtypeText",
        "shortDoc": "A custom error message to display in place of the default message provided for the vtype currently\nset for this field...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Text.js",
        "doc": "<p>A custom error message to display in place of the default message provided for the <strong><code><a href=\"#/api/Ext.form.field.Spinner-cfg-vtype\" rel=\"Ext.form.field.Spinner-cfg-vtype\" class=\"docClass\">vtype</a></code></strong> currently\nset for this field (defaults to undefined). <strong>Note</strong>: only applies if <strong><code><a href=\"#/api/Ext.form.field.Spinner-cfg-vtype\" rel=\"Ext.form.field.Spinner-cfg-vtype\" class=\"docClass\">vtype</a></code></strong> is set, else ignored.</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 428,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-width",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "width",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>The width of this component in pixels.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 293,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-xtype",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "xtype",
        "shortDoc": "The xtype configuration option can be used to optimize\nComponent creation and rendering. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>The <code>xtype</code> configuration option can be used to optimize\nComponent creation and rendering. It serves as a shortcut to the full componet\nname. For example, the component <code>Ext.button.Button</code> has an xtype of <code>button</code>.</p>\n\n<p>You can define your own xtype on a custom <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">component</a> by\nspecifying the <a href=\"#/api/Ext.Class-cfg-alias\" rel=\"Ext.Class-cfg-alias\" class=\"docClass\">alias</a> config option with a prefix of\n<code>widget</code>. For example:</p>\n\n<pre><code>Ext.define({\n    extend: 'Ext.button.Button',\n    alias: 'widget.pressmebutton',\n    text: 'Press Me'\n})\n</code></pre>\n\n<p>Any Component can be created implicitly\nas an object config with an xtype specified, allowing it to be declared and\npassed into the rendering pipeline without actually being instantiated as\nan object. Not only is rendering deferred, but the actual creation of the\nobject itself is also deferred, saving memory and resources until they are\nactually needed. In complex, nested layouts containing many Components,\nthis can make a noticeable improvement in performance.</p>\n\n<pre><code>// Explicit creation of contained Components:\nvar panel = new Ext.Panel({\n   ...\n   items: [\n      Ext.create('Ext.button.Button', {\n         text: 'OK'\n      })\n   ]\n};\n\n// Implicit creation using xtype:\nvar panel = new Ext.Panel({\n   ...\n   items: [{\n      xtype: 'button',\n      text: 'OK'\n   }]\n};\n</code></pre>\n\n<p>In the first example, the button will always be created immediately\nduring the panel's initialization. With many added Components, this\napproach could potentially slow the rendering of the page. In the\nsecond example, the button will not be created or rendered until the\npanel is actually displayed in the browser. If the panel is never\ndisplayed (for example, if it is a tab that remains hidden) then the\nbutton will never be created and will never consume any resources whatsoever.</p>\n"
      }
    ],
    "css_mixin": [

    ],
    "event": [
      {
        "static": false,
        "inheritable": false,
        "linenr": 651,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-activate",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.Component",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "activate",
        "shortDoc": "Fires after a Component has been visually activated. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Fires after a Component has been visually activated.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 671,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-added",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.Component",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "Ext.container.Container",
            "properties": [

            ],
            "optional": false,
            "name": "container",
            "doc": "<p>Parent Container</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "pos",
            "doc": "<p>position of Component</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "added",
        "shortDoc": "Fires after a Component had been added to a Container. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Fires after a Component had been added to a Container.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 738,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-afterrender",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.Component",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "afterrender",
        "shortDoc": "Fires after the component rendering is finished. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Fires after the component rendering is finished.</p>\n\n\n<p>The afterrender event is fired after this Component has been <a href=\"#/api/Ext.form.field.Spinner-property-rendered\" rel=\"Ext.form.field.Spinner-property-rendered\" class=\"docClass\">rendered</a>, been postprocesed\nby any afterRender method defined for the Component.</p>\n\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 233,
        "owner": "Ext.form.field.Text",
        "html_filename": "Text.html",
        "href": "Text.html#Ext-form-field-Text-event-autosize",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.form.field.Text",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "<p>This text field</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "width",
            "doc": "<p>The new field width</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "autosize",
        "shortDoc": "Fires when the autoSize function is triggered and the field is resized according to the\ngrow/growMin/growMax configs ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Text.js",
        "doc": "<p>Fires when the <strong><a href=\"#/api/Ext.form.field.Spinner-method-autoSize\" rel=\"Ext.form.field.Spinner-method-autoSize\" class=\"docClass\">autoSize</a></strong> function is triggered and the field is resized according to the\n<a href=\"#/api/Ext.form.field.Spinner-cfg-grow\" rel=\"Ext.form.field.Spinner-cfg-grow\" class=\"docClass\">grow</a>/<a href=\"#/api/Ext.form.field.Spinner-cfg-growMin\" rel=\"Ext.form.field.Spinner-cfg-growMin\" class=\"docClass\">growMin</a>/<a href=\"#/api/Ext.form.field.Spinner-cfg-growMax\" rel=\"Ext.form.field.Spinner-cfg-growMax\" class=\"docClass\">growMax</a> configs as a result. This event provides a hook for the\ndeveloper to apply additional logic at runtime to resize the field if needed.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 643,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforeactivate",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.Component",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "beforeactivate",
        "shortDoc": "Fires before a Component has been visually activated. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Fires before a Component has been visually activated.\nReturning false from an event listener can prevent the activate\nfrom occurring.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 657,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforedeactivate",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.Component",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "beforedeactivate",
        "shortDoc": "Fires before a Component has been visually deactivated. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Fires before a Component has been visually deactivated.\nReturning false from an event listener can prevent the deactivate\nfrom occurring.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 746,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforedestroy",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.Component",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "beforedestroy",
        "shortDoc": "Fires before the component is destroyed. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Fires before the component is <a href=\"#/api/Ext.form.field.Spinner-method-destroy\" rel=\"Ext.form.field.Spinner-method-destroy\" class=\"docClass\">destroy</a>ed. Return false from an event handler to stop the <a href=\"#/api/Ext.form.field.Spinner-method-destroy\" rel=\"Ext.form.field.Spinner-method-destroy\" class=\"docClass\">destroy</a>.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 704,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforehide",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.Component",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "beforehide",
        "shortDoc": "Fires before the component is hidden when calling the hide method. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Fires before the component is hidden when calling the <a href=\"#/api/Ext.form.field.Spinner-method-hide\" rel=\"Ext.form.field.Spinner-method-hide\" class=\"docClass\">hide</a> method.\nReturn false from an event handler to stop the hide.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 725,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforerender",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.Component",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "beforerender",
        "shortDoc": "Fires before the component is rendered. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Fires before the component is <a href=\"#/api/Ext.form.field.Spinner-property-rendered\" rel=\"Ext.form.field.Spinner-property-rendered\" class=\"docClass\">rendered</a>. Return false from an\nevent handler to stop the <a href=\"#/api/Ext.form.field.Spinner-event-render\" rel=\"Ext.form.field.Spinner-event-render\" class=\"docClass\">render</a>.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 691,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforeshow",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.Component",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "beforeshow",
        "shortDoc": "Fires before the component is shown when calling the show method. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Fires before the component is shown when calling the <a href=\"#/api/Ext.form.field.Spinner-method-show\" rel=\"Ext.form.field.Spinner-method-show\" class=\"docClass\">show</a> method.\nReturn false from an event handler to stop the show.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 101,
        "owner": "Ext.state.Stateful",
        "html_filename": "Stateful.html",
        "href": "Stateful.html#Ext-state-Stateful-event-beforestaterestore",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.state.Stateful",
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
            "name": "state",
            "doc": "<p>The hash of state values returned from the StateProvider. If this\nevent is not vetoed, then the state object is passed to <b><tt>applyState</tt></b>. By default,\nthat simply copies property values into this object. The method maybe overriden to\nprovide custom state restoration.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "beforestaterestore",
        "shortDoc": "Fires before the state of the object is restored. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/state/Stateful.js",
        "doc": "<p>Fires before the state of the object is restored. Return false from an event handler to stop the restore.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 122,
        "owner": "Ext.state.Stateful",
        "html_filename": "Stateful.html",
        "href": "Stateful.html#Ext-state-Stateful-event-beforestatesave",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.state.Stateful",
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
            "name": "state",
            "doc": "<p>The hash of state values. This is determined by calling\n<b><tt>getState()</tt></b> on the object. This method must be provided by the\ndeveloper to return whetever representation of state is required, by default, <a href=\"#/api/Ext.state.Stateful\" rel=\"Ext.state.Stateful\" class=\"docClass\">Ext.state.Stateful</a>\nhas a null implementation.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "beforestatesave",
        "shortDoc": "Fires before the state of the object is saved to the configured state provider. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/state/Stateful.js",
        "doc": "<p>Fires before the state of the object is saved to the configured state provider. Return false to stop the save.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 249,
        "owner": "Ext.form.field.Base",
        "html_filename": "Base.html",
        "href": "Base.html#Ext-form-field-Base-event-blur",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.form.field.Base",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "blur",
        "shortDoc": "Fires when this field loses input focus. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Base.js",
        "doc": "<p>Fires when this field loses input focus.</p>\n"
      },
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
        "linenr": 665,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-deactivate",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.Component",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "deactivate",
        "shortDoc": "Fires after a Component has been visually deactivated. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Fires after a Component has been visually deactivated.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 752,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-destroy",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.Component",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "destroy",
        "shortDoc": "Fires after the component is destroyed. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Fires after the component is <a href=\"#/api/Ext.form.field.Spinner-method-destroy\" rel=\"Ext.form.field.Spinner-method-destroy\" class=\"docClass\">destroy</a>ed.</p>\n"
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
        "doc": "<p>Fires when a change in the field's <a href=\"#/api/Ext.form.field.Spinner-method-isDirty\" rel=\"Ext.form.field.Spinner-method-isDirty\" class=\"docClass\">isDirty</a> state is detected.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 679,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-disable",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.Component",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "disable",
        "shortDoc": "Fires after the component is disabled. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Fires after the component is disabled.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 685,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-enable",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.Component",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "enable",
        "shortDoc": "Fires after the component is enabled. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Fires after the component is enabled.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 232,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-event-errorchange",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.form.Labelable",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "error",
            "doc": "<p>The active error message</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "errorchange",
        "shortDoc": "Fires when the active error message is changed via setActiveError. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>Fires when the active error message is changed via <a href=\"#/api/Ext.form.field.Spinner-method-setActiveError\" rel=\"Ext.form.field.Spinner-method-setActiveError\" class=\"docClass\">setActiveError</a>.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 243,
        "owner": "Ext.form.field.Base",
        "html_filename": "Base.html",
        "href": "Base.html#Ext-form-field-Base-event-focus",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.form.field.Base",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "focus",
        "shortDoc": "Fires when this field receives input focus. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Base.js",
        "doc": "<p>Fires when this field receives input focus.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 711,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-hide",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.Component",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "hide",
        "shortDoc": "Fires after the component is hidden. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Fires after the component is hidden.\nFires after the component is hidden when calling the <a href=\"#/api/Ext.form.field.Spinner-method-hide\" rel=\"Ext.form.field.Spinner-method-hide\" class=\"docClass\">hide</a> method.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 243,
        "owner": "Ext.form.field.Text",
        "html_filename": "Text.html",
        "href": "Text.html#Ext-form-field-Text-event-keydown",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.form.field.Text",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "<p>This text field</p>\n"
          },
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "keydown",
        "shortDoc": "Keydown input field event. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Text.js",
        "doc": "<p>Keydown input field event. This event only fires if <strong><a href=\"#/api/Ext.form.field.Spinner-cfg-enableKeyEvents\" rel=\"Ext.form.field.Spinner-cfg-enableKeyEvents\" class=\"docClass\">enableKeyEvents</a></strong> is set to true.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 257,
        "owner": "Ext.form.field.Text",
        "html_filename": "Text.html",
        "href": "Text.html#Ext-form-field-Text-event-keypress",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.form.field.Text",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "<p>This text field</p>\n"
          },
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "keypress",
        "shortDoc": "Keypress input field event. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Text.js",
        "doc": "<p>Keypress input field event. This event only fires if <strong><a href=\"#/api/Ext.form.field.Spinner-cfg-enableKeyEvents\" rel=\"Ext.form.field.Spinner-cfg-enableKeyEvents\" class=\"docClass\">enableKeyEvents</a></strong> is set to true.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 250,
        "owner": "Ext.form.field.Text",
        "html_filename": "Text.html",
        "href": "Text.html#Ext-form-field-Text-event-keyup",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.form.field.Text",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "<p>This text field</p>\n"
          },
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "keyup",
        "shortDoc": "Keyup input field event. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Text.js",
        "doc": "<p>Keyup input field event. This event only fires if <strong><a href=\"#/api/Ext.form.field.Spinner-cfg-enableKeyEvents\" rel=\"Ext.form.field.Spinner-cfg-enableKeyEvents\" class=\"docClass\">enableKeyEvents</a></strong> is set to true.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 766,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-move",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.Component",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "x",
            "doc": "<p>The new x position</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "y",
            "doc": "<p>The new y position</p>\n"
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
        "shortDoc": "Fires after the component is moved. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Fires after the component is moved.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 718,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-removed",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.Component",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "Ext.container.Container",
            "properties": [

            ],
            "optional": false,
            "name": "ownerCt",
            "doc": "<p>Container which holds the component</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "removed",
        "shortDoc": "Fires when a component is removed from an Ext.container.Container ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Fires when a component is removed from an <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a></p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 732,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-render",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.Component",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "render",
        "shortDoc": "Fires after the component markup is rendered. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Fires after the component markup is <a href=\"#/api/Ext.form.field.Spinner-property-rendered\" rel=\"Ext.form.field.Spinner-property-rendered\" class=\"docClass\">rendered</a>.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 758,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-resize",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.Component",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "adjWidth",
            "doc": "<p>The box-adjusted width that was set</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "adjHeight",
            "doc": "<p>The box-adjusted height that was set</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "resize",
        "shortDoc": "Fires after the component is resized. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Fires after the component is resized.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 698,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-show",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.Component",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "show",
        "shortDoc": "Fires after the component is shown when calling the show method. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Fires after the component is shown when calling the <a href=\"#/api/Ext.form.field.Spinner-method-show\" rel=\"Ext.form.field.Spinner-method-show\" class=\"docClass\">show</a> method.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 255,
        "owner": "Ext.form.field.Base",
        "html_filename": "Base.html",
        "href": "Base.html#Ext-form-field-Base-event-specialkey",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.form.field.Base",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The event object</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "specialkey",
        "shortDoc": "Fires when any key related to navigation (arrows, tab, enter, esc, etc.) is pressed. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Base.js",
        "doc": "<p>Fires when any key related to navigation (arrows, tab, enter, esc, etc.) is pressed. To handle other keys\nsee <a href=\"#/api/Ext.util.KeyMap\" rel=\"Ext.util.KeyMap\" class=\"docClass\">Ext.util.KeyMap</a>. You can check <a href=\"#/api/Ext.EventObject-method-getKey\" rel=\"Ext.EventObject-method-getKey\" class=\"docClass\">Ext.EventObject.getKey</a> to determine which key was\npressed. For example:</p>\n\n<pre><code>var form = new Ext.form.Panel({\n    ...\n    items: [{\n            fieldLabel: 'Field 1',\n            name: 'field1',\n            allowBlank: false\n        },{\n            fieldLabel: 'Field 2',\n            name: 'field2',\n            listeners: {\n                specialkey: function(field, e){\n                    // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,\n                    // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN\n                    if (e.<a href=\"#/api/Ext.EventObject-method-getKey\" rel=\"Ext.EventObject-method-getKey\" class=\"docClass\">getKey()</a> == e.ENTER) {\n                        var form = field.up('form').getForm();\n                        form.submit();\n                    }\n                }\n            }\n        }\n    ],\n    ...\n});\n</code></pre>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 117,
        "owner": "Ext.form.field.Spinner",
        "html_filename": "Spinner.html",
        "href": "Spinner.html#Ext-form-field-Spinner-event-spin",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.form.field.Spinner",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "direction",
            "doc": "<p>Either 'up' if spinning up, or 'down' if spinning down.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "spin",
        "shortDoc": "Fires when the spinner is made to spin up or down. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Spinner.js",
        "doc": "<p>Fires when the spinner is made to spin up or down.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 132,
        "owner": "Ext.form.field.Spinner",
        "html_filename": "Spinner.html",
        "href": "Spinner.html#Ext-form-field-Spinner-event-spindown",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.form.field.Spinner",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "spindown",
        "shortDoc": "Fires when the spinner is made to spin down. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Spinner.js",
        "doc": "<p>Fires when the spinner is made to spin down.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 125,
        "owner": "Ext.form.field.Spinner",
        "html_filename": "Spinner.html",
        "href": "Spinner.html#Ext-form-field-Spinner-event-spinup",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.form.field.Spinner",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "spinup",
        "shortDoc": "Fires when the spinner is made to spin up. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Spinner.js",
        "doc": "<p>Fires when the spinner is made to spin up.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 112,
        "owner": "Ext.state.Stateful",
        "html_filename": "Stateful.html",
        "href": "Stateful.html#Ext-state-Stateful-event-staterestore",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.state.Stateful",
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
            "name": "state",
            "doc": "<p>The hash of state values returned from the StateProvider. This is passed\nto <b><tt>applyState</tt></b>. By default, that simply copies property values into this\nobject. The method maybe overriden to provide custom state restoration.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "staterestore",
        "shortDoc": "Fires after the state of the object is restored. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/state/Stateful.js",
        "doc": "<p>Fires after the state of the object is restored.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 133,
        "owner": "Ext.state.Stateful",
        "html_filename": "Stateful.html",
        "href": "Stateful.html#Ext-state-Stateful-event-statesave",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.state.Stateful",
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
            "name": "state",
            "doc": "<p>The hash of state values. This is determined by calling\n<b><tt>getState()</tt></b> on the object. This method must be provided by the\ndeveloper to return whetever representation of state is required, by default, <a href=\"#/api/Ext.state.Stateful\" rel=\"Ext.state.Stateful\" class=\"docClass\">Ext.state.Stateful</a>\nhas a null implementation.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "statesave",
        "shortDoc": "Fires after the state of the object is saved to the configured state provider. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/state/Stateful.js",
        "doc": "<p>Fires after the state of the object is saved to the configured state provider.</p>\n"
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
        "linenr": 1,
        "owner": "Ext.Component",
        "html_filename": "Component.html",
        "href": "Component.html#Ext-Component-method-constructor",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.Element/String/Object",
            "properties": [

            ],
            "optional": false,
            "name": "config",
            "doc": "<p>The configuration options may be specified as either:</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b>an element</b> :\n<p class=\"sub-desc\">it is set as the internal element and its id used as the component id</p></li>\n<li><b>a string</b> :\n<p class=\"sub-desc\">it is assumed to be the id of an existing element and is used as the component id</p></li>\n<li><b>anything else</b> :\n<p class=\"sub-desc\">it is assumed to be a standard config object and is applied to the component</p></li>\n</ul></div>\n\n"
          }
        ],
        "alias": null,
        "name": "constructor",
        "shortDoc": "Creates new Component. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Component.js",
        "doc": "<p>Creates new Component.</p>\n",
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
        "linenr": 2037,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-addChildEls",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "addChildEls",
        "shortDoc": "Adds each argument passed to this method to the childEls array. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Adds each argument passed to this method to the <a href=\"#/api/Ext.form.field.Spinner-cfg-childEls\" rel=\"Ext.form.field.Spinner-cfg-childEls\" class=\"docClass\">childEls</a> array.</p>\n",
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
        "linenr": 2554,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-addClass",
        "protected": false,
        "deprecated": {
          "text": "<p>Replaced by <a href=\"#/api/Ext.button.Split-method-addCls\" rel=\"Ext.button.Split-method-addCls\" class=\"docClass\">addCls</a></p>\n\n\n\n",
          "tagname": "deprecated",
          "version": "4.0",
          "doc": "Adds a CSS class to the top level element representing this component."
        },
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "cls",
            "doc": "<p>The CSS class name to add</p>\n"
          }
        ],
        "alias": null,
        "name": "addClass",
        "shortDoc": "Adds a CSS class to the top level element representing this component. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Adds a CSS class to the top level element representing this component.</p>\n",
        "return": {
          "type": "Ext.Component",
          "properties": null,
          "name": "return",
          "doc": "<p>Returns the Component to allow method chaining.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 2532,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-addCls",
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
            "doc": "<p>The CSS class name to add</p>\n"
          }
        ],
        "alias": null,
        "name": "addCls",
        "shortDoc": "Adds a CSS class to the top level element representing this component. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Adds a CSS class to the top level element representing this component.</p>\n",
        "return": {
          "type": "Ext.Component",
          "properties": null,
          "name": "return",
          "doc": "<p>Returns the Component to allow method chaining.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1615,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-addClsWithUI",
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
            "name": "cls",
            "doc": "<p>A string or an array of strings to add to the uiCls</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "skip",
            "doc": "<p>(Boolean) skip True to skip adding it to the class and do it later (via the return)</p>\n"
          }
        ],
        "alias": null,
        "name": "addClsWithUI",
        "shortDoc": "Adds a cls to the uiCls array, which will also call addUIClsToElement and adds\nto all elements of this component. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Adds a cls to the uiCls array, which will also call <a href=\"#/api/Ext.form.field.Spinner-method-addUIClsToElement\" rel=\"Ext.form.field.Spinner-method-addUIClsToElement\" class=\"docClass\">addUIClsToElement</a> and adds\nto all elements of this component.</p>\n",
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
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.form.field.Spinner-method-fireEvent\" rel=\"Ext.form.field.Spinner-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n"
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
        "linenr": 159,
        "owner": "Ext.state.Stateful",
        "html_filename": "Stateful.html",
        "href": "Stateful.html#Ext-state-Stateful-method-addStateEvents",
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
            "doc": "<p>The event name or an array of event names.</p>\n"
          }
        ],
        "alias": null,
        "name": "addStateEvents",
        "shortDoc": "Add events that will trigger the state to be saved. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/state/Stateful.js",
        "doc": "<p>Add events that will trigger the state to be saved.</p>\n",
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
        "linenr": 1686,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-addUIClsToElement",
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
            "name": "ui",
            "doc": "<p>The UI to remove from the element</p>\n"
          }
        ],
        "alias": null,
        "name": "addUIClsToElement",
        "shortDoc": "Method which adds a specified UI + uiCls to the components element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Method which adds a specified UI + uiCls to the components element.\nCan be overridden to remove the UI from more than just the components element.</p>\n",
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
        "linenr": 2923,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-afterComponentLayout",
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
            "name": "adjWidth",
            "doc": "<p>The box-adjusted width that was set</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "adjHeight",
            "doc": "<p>The box-adjusted height that was set</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": false,
            "name": "isSetSize",
            "doc": "<p>Whether or not the height/width are stored on the component permanently</p>\n"
          },
          {
            "type": "Ext.Component",
            "properties": [

            ],
            "optional": false,
            "name": "callingContainer",
            "doc": "<p>Container requesting the layout. Only used when isSetSize is false.</p>\n"
          }
        ],
        "alias": null,
        "name": "afterComponentLayout",
        "shortDoc": " ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "\n",
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
        "linenr": 177,
        "owner": "Ext.util.Floating",
        "html_filename": "Floating.html",
        "href": "Floating.html#Ext-util-Floating-method-alignTo",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.Component/Ext.Element/HTMLElement/String",
            "properties": [

            ],
            "optional": false,
            "name": "element",
            "doc": "<p>The element or <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> to align to. If passing a component, it must be a\nomponent instance. If a string id is passed, it will be used as an element id.</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "position",
            "doc": "<p>(optional), (defaults to \"tl-bl?\") The position to align to (see <a href=\"#/api/Ext.Element-method-alignTo\" rel=\"Ext.Element-method-alignTo\" class=\"docClass\">Ext.Element.alignTo</a> for more details).</p>\n"
          },
          {
            "type": "Number[]",
            "properties": [

            ],
            "optional": true,
            "name": "offsets",
            "doc": "<p>(optional) Offset the positioning by [x, y]</p>\n"
          }
        ],
        "alias": null,
        "name": "alignTo",
        "shortDoc": "Aligns this floating Component to the specified element ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/util/Floating.js",
        "doc": "<p>Aligns this floating Component to the specified element</p>\n",
        "return": {
          "type": "Ext.Component",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 207,
        "owner": "Ext.util.Animate",
        "html_filename": "Animate.html",
        "href": "Animate.html#Ext-util-Animate-method-animate",
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
            "doc": "<p>An object containing properties which describe the animation's start and end states, and the timeline of the animation.</p>\n"
          }
        ],
        "alias": null,
        "name": "animate",
        "shortDoc": "Perform custom animation on this object. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/util/Animate.js",
        "doc": "<p>Perform custom animation on this object.<p>\n<p>This method is applicable to both the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a> class and the <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Element</a> class.\nIt performs animated transitions of certain properties of this object over a specified timeline.</p>\n<p>The sole parameter is an object which specifies start property values, end property values, and properties which\ndescribe the timeline. Of the properties listed below, only <b><code>to</code></b> is mandatory.</p>\n<p>Properties include<ul>\n<li><code>from</code> <div class=\"sub-desc\">An object which specifies start values for the properties being animated.\nIf not supplied, properties are animated from current settings. The actual properties which may be animated depend upon\nths object being animated. See the sections below on Element and Component animation.<div></li>\n<li><code>to</code> <div class=\"sub-desc\">An object which specifies end values for the properties being animated.</div></li>\n<li><code>duration</code><div class=\"sub-desc\">The duration <b>in milliseconds</b> for which the animation will run.</div></li>\n<li><code>easing</code> <div class=\"sub-desc\">A string value describing an easing type to modify the rate of change from the default linear to non-linear. Values may be one of:<code><ul>\n<li>ease</li>\n<li>easeIn</li>\n<li>easeOut</li>\n<li>easeInOut</li>\n<li>backIn</li>\n<li>backOut</li>\n<li>elasticIn</li>\n<li>elasticOut</li>\n<li>bounceIn</li>\n<li>bounceOut</li>\n</ul></code></div></li>\n<li><code>keyframes</code> <div class=\"sub-desc\">This is an object which describes the state of animated properties at certain points along the timeline.\nit is an object containing properties who's names are the percentage along the timeline being described and who's values specify the animation state at that point.</div></li>\n<li><code>listeners</code> <div class=\"sub-desc\">This is a standard <a href=\"#/api/Ext.util.Observable-cfg-listeners\" rel=\"Ext.util.Observable-cfg-listeners\" class=\"docClass\">listeners</a> configuration object which may be used\nto inject behaviour at either the <code>beforeanimate</code> event or the <code>afteranimate</code> event.</div></li>\n</ul></p>\n<h3>Animating an <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Element</a></h3>\nWhen animating an Element, the following properties may be specified in <code>from</code>, <code>to</code>, and <code>keyframe</code> objects:<ul>\n<li><code>x</code> <div class=\"sub-desc\">The page X position in pixels.</div></li>\n<li><code>y</code> <div class=\"sub-desc\">The page Y position in pixels</div></li>\n<li><code>left</code> <div class=\"sub-desc\">The element's CSS <code>left</code> value. Units must be supplied.</div></li>\n<li><code>top</code> <div class=\"sub-desc\">The element's CSS <code>top</code> value. Units must be supplied.</div></li>\n<li><code>width</code> <div class=\"sub-desc\">The element's CSS <code>width</code> value. Units must be supplied.</div></li>\n<li><code>height</code> <div class=\"sub-desc\">The element's CSS <code>height</code> value. Units must be supplied.</div></li>\n<li><code>scrollLeft</code> <div class=\"sub-desc\">The element's <code>scrollLeft</code> value.</div></li>\n<li><code>scrollTop</code> <div class=\"sub-desc\">The element's <code>scrollLeft</code> value.</div></li>\n<li><code>opacity</code> <div class=\"sub-desc\">The element's <code>opacity</code> value. This must be a value between <code>0</code> and <code>1</code>.</div></li>\n</ul>\n<p><b>Be aware than animating an Element which is being used by an Ext Component without in some way informing the Component about the changed element state\nwill result in incorrect Component behaviour. This is because the Component will be using the old state of the element. To avoid this problem, it is now possible to\ndirectly animate certain properties of Components.</b></p>\n<h3>Animating a <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a></h3>\nWhen animating an Element, the following properties may be specified in <code>from</code>, <code>to</code>, and <code>keyframe</code> objects:<ul>\n<li><code>x</code> <div class=\"sub-desc\">The Component's page X position in pixels.</div></li>\n<li><code>y</code> <div class=\"sub-desc\">The Component's page Y position in pixels</div></li>\n<li><code>left</code> <div class=\"sub-desc\">The Component's <code>left</code> value in pixels.</div></li>\n<li><code>top</code> <div class=\"sub-desc\">The Component's <code>top</code> value in pixels.</div></li>\n<li><code>width</code> <div class=\"sub-desc\">The Component's <code>width</code> value in pixels.</div></li>\n<li><code>width</code> <div class=\"sub-desc\">The Component's <code>width</code> value in pixels.</div></li>\n<li><code>dynamic</code> <div class=\"sub-desc\">Specify as true to update the Component's layout (if it is a Container) at every frame\nof the animation. <i>Use sparingly as laying out on every intermediate size change is an expensive operation</i>.</div></li>\n</ul>\n<p>For example, to animate a Window to a new size, ensuring that its internal layout, and any shadow is correct:</p>\n<pre><code>myWindow = Ext.create('Ext.window.Window', {\n    title: 'Test Component animation',\n    width: 500,\n    height: 300,\n    layout: {\n        type: 'hbox',\n        align: 'stretch'\n    },\n    items: [{\n        title: 'Left: 33%',\n        margins: '5 0 5 5',\n        flex: 1\n    }, {\n        title: 'Left: 66%',\n        margins: '5 5 5 5',\n        flex: 2\n    }]\n});\nmyWindow.show();\nmyWindow.header.el.on('click', function() {\n    myWindow.animate({\n        to: {\n            width: (myWindow.getWidth() == 500) ? 700 : 500,\n            height: (myWindow.getHeight() == 300) ? 400 : 300,\n        }\n    });\n});\n</code></pre>\n<p>For performance reasons, by default, the internal layout is only updated when the Window reaches its final <code>\"to\"</code> size. If dynamic updating of the Window's child\nComponents is required, then configure the animation with <code>dynamic: true</code> and the two child items will maintain their proportions during the animation.</p>\n\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 225,
        "owner": "Ext.state.Stateful",
        "html_filename": "Stateful.html",
        "href": "Stateful.html#Ext-state-Stateful-method-applyState",
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
            "name": "state",
            "doc": "<p>The state</p>\n"
          }
        ],
        "alias": null,
        "name": "applyState",
        "shortDoc": "Applies the state to the object. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/state/Stateful.js",
        "doc": "<p>Applies the state to the object. This should be overridden in subclasses to do\nmore complex state operations. By default it applies the state properties onto\nthe current object.</p>\n",
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
        "linenr": 635,
        "owner": "Ext.form.field.Text",
        "html_filename": "Text.html",
        "href": "Text.html#Ext-form-field-Text-method-autoSize",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "autoSize",
        "shortDoc": "Automatically grows the field to accomodate the width of the text up to the maximum field width allowed. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Text.js",
        "doc": "<p>Automatically grows the field to accomodate the width of the text up to the maximum field width allowed. This\nonly takes effect if <a href=\"#/api/Ext.form.field.Spinner-cfg-grow\" rel=\"Ext.form.field.Spinner-cfg-grow\" class=\"docClass\">grow</a> = true, and fires the <a href=\"#/api/Ext.form.field.Spinner-event-autosize\" rel=\"Ext.form.field.Spinner-event-autosize\" class=\"docClass\">autosize</a> event if the width changes.</p>\n",
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
        "doc": "<p>A utility for grouping a set of modifications which may trigger value changes into a single transaction, to\nprevent excessive firing of <a href=\"#/api/Ext.form.field.Spinner-event-change\" rel=\"Ext.form.field.Spinner-event-change\" class=\"docClass\">change</a> events. This is useful for instance if the field has sub-fields which\nare being updated as a group; you don't want the container field to check its own changed state for each subfield\nchange.</p>\n",
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
        "linenr": 2934,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-beforeComponentLayout",
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
            "name": "adjWidth",
            "doc": "<p>The box-adjusted width that was set</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "adjHeight",
            "doc": "<p>The box-adjusted height that was set</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": false,
            "name": "isSetSize",
            "doc": "<p>Whether or not the height/width are stored on the component permanently</p>\n"
          },
          {
            "type": "Ext.Component",
            "properties": [

            ],
            "optional": false,
            "name": "callingContainer",
            "doc": "<p>Container requesting sent the layout. Only used when isSetSize is false.</p>\n"
          }
        ],
        "alias": null,
        "name": "beforeComponentLayout",
        "shortDoc": "Occurs before componentLayout is run. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Occurs before componentLayout is run. Returning false from this method will prevent the componentLayout\nfrom being executed.</p>\n",
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
        "owner": "Ext.Component",
        "html_filename": "Component.html",
        "href": "Component.html#Ext-Component-method-bubble",
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
            "doc": "<p>(optional) The scope of the function (defaults to current node)</p>\n"
          },
          {
            "type": "Array",
            "properties": [

            ],
            "optional": true,
            "name": "args",
            "doc": "<p>(optional) The args to call the function with (default to passing the current component)</p>\n"
          }
        ],
        "alias": null,
        "name": "bubble",
        "shortDoc": "Bubbles up the component/container heirarchy, calling the specified function with each component. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Component.js",
        "doc": "<p>Bubbles up the component/container heirarchy, calling the specified function with each component. The scope (<i>this</i>) of\nfunction call will be the scope provided or the current component. The arguments to the function\nwill be the args provided or the current component. If the function returns false at any point,\nthe bubble is stopped.</p>\n",
        "return": {
          "type": "Ext.Component",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
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
        "linenr": 265,
        "owner": "Ext.util.Floating",
        "html_filename": "Floating.html",
        "href": "Floating.html#Ext-util-Floating-method-center",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "center",
        "shortDoc": "Center this Component in its container. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/util/Floating.js",
        "doc": "<p>Center this Component in its container.</p>\n",
        "return": {
          "type": "Ext.Component",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
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
        "doc": "<p>Checks whether the value of the field has changed since the last time it was checked.\nIf the value has changed, it:</p>\n\n<ol>\n<li>Fires the <a href=\"#/api/Ext.form.field.Spinner-event-change\" rel=\"Ext.form.field.Spinner-event-change\" class=\"docClass\">change event</a>,</li>\n<li>Performs validation if the <a href=\"#/api/Ext.form.field.Spinner-cfg-validateOnChange\" rel=\"Ext.form.field.Spinner-cfg-validateOnChange\" class=\"docClass\">validateOnChange</a> config is enabled, firing the\n<a href=\"#/api/Ext.form.field.Spinner-event-validitychange\" rel=\"Ext.form.field.Spinner-event-validitychange\" class=\"docClass\">validitychange event</a> if the validity has changed, and</li>\n<li>Checks the <a href=\"#/api/Ext.form.field.Spinner-method-isDirty\" rel=\"Ext.form.field.Spinner-method-isDirty\" class=\"docClass\">dirty state</a> of the field and fires the <a href=\"#/api/Ext.form.field.Spinner-event-dirtychange\" rel=\"Ext.form.field.Spinner-event-dirtychange\" class=\"docClass\">dirtychange event</a>\nif it has changed.</li>\n</ol>\n\n",
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
        "doc": "<p>Checks the <a href=\"#/api/Ext.form.field.Spinner-method-isDirty\" rel=\"Ext.form.field.Spinner-method-isDirty\" class=\"docClass\">isDirty</a> state of the field and if it has changed since the last time it was checked,\nfires the <a href=\"#/api/Ext.form.field.Spinner-event-dirtychange\" rel=\"Ext.form.field.Spinner-event-dirtychange\" class=\"docClass\">dirtychange</a> event.</p>\n",
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
        "linenr": 761,
        "owner": "Ext.form.field.Base",
        "html_filename": "Base.html",
        "href": "Base.html#Ext-form-field-Base-method-clearInvalid",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "clearInvalid",
        "shortDoc": "Clear any invalid styles/messages for this field. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Base.js",
        "doc": "<p>Clear any invalid styles/messages for this field.</p>\n\n<p><strong>Note</strong>: this method does not cause the Field's <a href=\"#/api/Ext.form.field.Spinner-method-validate\" rel=\"Ext.form.field.Spinner-method-validate\" class=\"docClass\">validate</a> or <a href=\"#/api/Ext.form.field.Spinner-method-isValid\" rel=\"Ext.form.field.Spinner-method-isValid\" class=\"docClass\">isValid</a> methods to return <code>true</code>\nif the value does not <em>pass</em> validation. So simply clearing a field's errors will not necessarily allow\nsubmission of forms submitted with the <a href=\"#/api/Ext.form.action.Submit-cfg-clientValidation\" rel=\"Ext.form.action.Submit-cfg-clientValidation\" class=\"docClass\">Ext.form.action.Submit.clientValidation</a> option set.</p>\n",
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
        "linenr": 964,
        "owner": "Ext.Component",
        "html_filename": "Component.html",
        "href": "Component.html#Ext-Component-method-cloneConfig",
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
            "name": "overrides",
            "doc": "<p>A new config containing any properties to override in the cloned version.\nAn id property can be passed on this object, otherwise one will be generated to avoid duplicates.</p>\n"
          }
        ],
        "alias": null,
        "name": "cloneConfig",
        "shortDoc": "Clone the current component using the original config values passed into this instance by default. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Component.js",
        "doc": "<p>Clone the current component using the original config values passed into this instance by default.</p>\n",
        "return": {
          "type": "Ext.Component",
          "properties": null,
          "name": "return",
          "doc": "<p>clone The cloned copy of this component</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1009,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-constructPlugins",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "constructPlugins",
        "shortDoc": "Ensures that the plugins array contains fully constructed plugin instances. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Ensures that the plugins array contains fully constructed plugin instances. This\nconverts any configs into their appropriate instances.</p>\n",
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
        "linenr": 3119,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-destroy",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "destroy",
        "shortDoc": "Destroys the Component. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Destroys the Component.</p>\n",
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
        "linenr": 2471,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-disable",
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
            "doc": "<p>Passing true, will supress the 'disable' event from being fired.</p>\n"
          }
        ],
        "alias": null,
        "name": "disable",
        "shortDoc": "Disable the component. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Disable the component.</p>\n",
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
        "linenr": 1033,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-doAutoRender",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "doAutoRender",
        "shortDoc": "Handles autoRender. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Handles autoRender.\nFloating Components may have an ownerCt. If they are asking to be constrained, constrain them within that\nownerCt, and have their z-index managed locally. Floating Components are always rendered to document.body</p>\n",
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
        "linenr": 2856,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-doComponentLayout",
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
            "name": "width",
            "doc": "\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "height",
            "doc": "\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "isSetSize",
            "doc": "\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "callingContainer",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "doComponentLayout",
        "shortDoc": "This method needs to be called whenever you change something on this component that requires the Component's\nlayout t...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>This method needs to be called whenever you change something on this component that requires the Component's\nlayout to be recalculated.</p>\n",
        "return": {
          "type": "Ext.container.Container",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 136,
        "owner": "Ext.util.Floating",
        "html_filename": "Floating.html",
        "href": "Floating.html#Ext-util-Floating-method-doConstrain",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/HTMLElement/Ext.Element/Ext.util.Region",
            "properties": [

            ],
            "optional": true,
            "name": "constrainTo",
            "doc": "<p>(Optional) The Element or <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Region</a> into which this Component is\nto be constrained. Defaults to the element into which this floating Component was rendered.</p>\n"
          }
        ],
        "alias": null,
        "name": "doConstrain",
        "shortDoc": "Moves this floating Component into a constrain region. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/util/Floating.js",
        "doc": "<p>Moves this floating Component into a constrain region.</p>\n\n<p>By default, this Component is constrained to be within the container it was added to, or the element it was\nrendered to.</p>\n\n<p>An alternative constraint may be passed.</p>\n",
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
        "linenr": 2448,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-enable",
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
            "doc": "<p>Passing false will supress the 'enable' event from being fired.</p>\n"
          }
        ],
        "alias": null,
        "name": "enable",
        "shortDoc": "Enable the component ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Enable the component</p>\n",
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
        "doc": "<p>Only relevant if the instance's <a href=\"#/api/Ext.form.field.Spinner-method-isFileUpload\" rel=\"Ext.form.field.Spinner-method-isFileUpload\" class=\"docClass\">isFileUpload</a> method returns true. Returns a reference to the file input\nDOM element holding the user's selected file. The input will be appended into the submission form and will not be\nreturned, so this method should also create a replacement.</p>\n",
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
        "linenr": 972,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-findLayoutController",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "findLayoutController",
        "shortDoc": "This method finds the topmost active layout who's processing will eventually determine the size and position of this\n...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>This method finds the topmost active layout who's processing will eventually determine the size and position of this\nComponent.<p>\n<p>This method is useful when dynamically adding Components into Containers, and some processing must take place after the\nfinal sizing and positioning of the Component has been performed.</p>\n\n",
        "return": {
          "type": "undefined",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 995,
        "owner": "Ext.Component",
        "html_filename": "Component.html",
        "href": "Component.html#Ext-Component-method-findParentBy",
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
            "doc": "<p>The custom function to call with the arguments (container, this component).</p>\n"
          }
        ],
        "alias": null,
        "name": "findParentBy",
        "shortDoc": "Find a container above this component at any level by a custom function. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Component.js",
        "doc": "<p>Find a container above this component at any level by a custom function. If the passed function returns\ntrue, the container will be returned.</p>\n",
        "return": {
          "type": "Ext.container.Container",
          "properties": null,
          "name": "return",
          "doc": "<p>The first Container for which the custom function returns true</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1009,
        "owner": "Ext.Component",
        "html_filename": "Component.html",
        "href": "Component.html#Ext-Component-method-findParentByType",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/Ext.Class",
            "properties": [

            ],
            "optional": false,
            "name": "xtype",
            "doc": "<p>The xtype string for a component, or the class of the component directly</p>\n"
          }
        ],
        "alias": null,
        "name": "findParentByType",
        "shortDoc": "Find a container above this component at any level by xtype or class\n\n\nSee also the up method. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Component.js",
        "doc": "<p>Find a container above this component at any level by xtype or class</p>\n\n\n<p>See also the <a href=\"#/api/Ext.Component-method-up\" rel=\"Ext.Component-method-up\" class=\"docClass\">up</a> method.</p>\n\n",
        "return": {
          "type": "Ext.container.Container",
          "properties": null,
          "name": "return",
          "doc": "<p>The first Container which matches the given xtype or class</p>\n"
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
        "doc": "<p>Fires the specified event with the passed parameters (minus the event name, plus the <code>options</code> object passed\nto <a href=\"#/api/Ext.form.field.Spinner-method-addListener\" rel=\"Ext.form.field.Spinner-method-addListener\" class=\"docClass\">addListener</a>).</p>\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>) by\ncalling <a href=\"#/api/Ext.form.field.Spinner-method-enableBubble\" rel=\"Ext.form.field.Spinner-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n",
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
        "linenr": 873,
        "owner": "Ext.Component",
        "html_filename": "Component.html",
        "href": "Component.html#Ext-Component-method-focus",
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
            "name": "selectText",
            "doc": "<p>(optional) If applicable, true to also select the text in this component</p>\n"
          },
          {
            "type": "Boolean/Number",
            "properties": [

            ],
            "optional": true,
            "name": "delay",
            "doc": "<p>(optional) Delay the focus this number of milliseconds (true for 10 milliseconds).</p>\n"
          }
        ],
        "alias": null,
        "name": "focus",
        "shortDoc": "Try to focus this component. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Component.js",
        "doc": "<p>Try to focus this component.</p>\n",
        "return": {
          "type": "Ext.Component",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 2897,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-forceComponentLayout",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "forceComponentLayout",
        "shortDoc": "Forces this component to redo its componentLayout. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Forces this component to redo its componentLayout.</p>\n",
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
        "linenr": 376,
        "owner": "Ext.util.Animate",
        "html_filename": "Animate.html",
        "href": "Animate.html#Ext-util-Animate-method-getActiveAnimation",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getActiveAnimation",
        "shortDoc": "Returns the current animation if this object has any effects actively running or queued, else returns false. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/util/Animate.js",
        "doc": "<p>Returns the current animation if this object has any effects actively running or queued, else returns false.</p>\n",
        "return": {
          "type": "Ext.fx.Anim/Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>Anim if element has active effects, else false</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 336,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-method-getActiveError",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getActiveError",
        "shortDoc": "Gets the active error message for this component, if any. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>Gets the active error message for this component, if any. This does not trigger\nvalidation on its own, it merely returns any message that the component may already hold.</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The active error message on the component; if there is no error, an empty string is returned.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 371,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-method-getActiveErrors",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getActiveErrors",
        "shortDoc": "Gets an Array of any active error messages currently applied to the field. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>Gets an Array of any active error messages currently applied to the field. This does not trigger\nvalidation on its own, it merely returns any messages that the component may already hold.</p>\n",
        "return": {
          "type": "String[]",
          "properties": null,
          "name": "return",
          "doc": "<p>The active error messages on the component; if there are no errors, an empty Array is returned.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 657,
        "owner": "Ext.form.field.Text",
        "html_filename": "Text.html",
        "href": "Text.html#Ext-form-field-Text-method-getBodyNaturalWidth",
        "protected": true,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getBodyNaturalWidth",
        "shortDoc": "To get the natural width of the inputEl, we do a simple calculation based on the 'size' config. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Text.js",
        "doc": "<p>To get the natural width of the inputEl, we do a simple calculation based on the 'size' config. We use\nhard-coded numbers to approximate what browsers do natively, to avoid having to read any styles which would hurt\nperformance. Overrides Labelable method.</p>\n",
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
        "linenr": 548,
        "owner": "Ext.Component",
        "html_filename": "Component.html",
        "href": "Component.html#Ext-Component-method-getBox",
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
            "name": "local",
            "doc": "<p>(optional) If true the element's left and top are returned instead of page XY (defaults to false)</p>\n"
          }
        ],
        "alias": null,
        "name": "getBox",
        "shortDoc": "Gets the current box measurements of the component's underlying element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Component.js",
        "doc": "<p>Gets the current box measurements of the component's underlying element.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>box An object in the format {x, y, width, height}</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 2669,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getBubbleTarget",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getBubbleTarget",
        "shortDoc": "Provides the link for Observable's fireEvent method to bubble up the ownership hierarchy. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Provides the link for Observable's fireEvent method to bubble up the ownership hierarchy.</p>\n",
        "return": {
          "type": "Ext.container.Container",
          "properties": null,
          "name": "return",
          "doc": "<p>the Container which owns this Component.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 2284,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getEl",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getEl",
        "shortDoc": "Retrieves the top level element representing this component. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Retrieves the top level element representing this component.</p>\n",
        "return": {
          "type": "Ext.core.Element",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 499,
        "owner": "Ext.form.field.Text",
        "html_filename": "Text.html",
        "href": "Text.html#Ext-form-field-Text-method-getErrors",
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
            "doc": "<p>The value to validate. The processed raw value will be used if nothing is passed.</p>\n"
          }
        ],
        "alias": null,
        "name": "getErrors",
        "shortDoc": "Validates a value according to the field's validation rules and returns an array of errors\nfor any failing validations. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Text.js",
        "doc": "<p>Validates a value according to the field's validation rules and returns an array of errors\nfor any failing validations. Validation rules are processed in the following order:</p>\n\n<ol>\n<li><p><strong>Field specific validator</strong></p>\n\n<p> A validator offers a way to customize and reuse a validation specification.\n If a field is configured with a <code><a href=\"#/api/Ext.form.field.Spinner-cfg-validator\" rel=\"Ext.form.field.Spinner-cfg-validator\" class=\"docClass\">validator</a></code>\n function, it will be passed the current field value.  The <code><a href=\"#/api/Ext.form.field.Spinner-cfg-validator\" rel=\"Ext.form.field.Spinner-cfg-validator\" class=\"docClass\">validator</a></code>\n function is expected to return either:</p>\n\n<ul>\n<li>Boolean <code>true</code>  if the value is valid (validation continues).</li>\n<li>a String to represent the invalid message if invalid (validation halts).</li>\n</ul>\n</li>\n<li><p><strong>Basic Validation</strong></p>\n\n<p> If the <code><a href=\"#/api/Ext.form.field.Spinner-cfg-validator\" rel=\"Ext.form.field.Spinner-cfg-validator\" class=\"docClass\">validator</a></code> has not halted validation,\n basic validation proceeds as follows:</p>\n\n<ul>\n<li><p><code><a href=\"#/api/Ext.form.field.Spinner-cfg-allowBlank\" rel=\"Ext.form.field.Spinner-cfg-allowBlank\" class=\"docClass\">allowBlank</a></code> : (Invalid message = <code><a href=\"#/api/Ext.form.field.Spinner-cfg-emptyText\" rel=\"Ext.form.field.Spinner-cfg-emptyText\" class=\"docClass\">emptyText</a></code>)</p>\n\n<p>  Depending on the configuration of <code><a href=\"#/api/Ext.form.field.Spinner-cfg-allowBlank\" rel=\"Ext.form.field.Spinner-cfg-allowBlank\" class=\"docClass\">allowBlank</a></code>, a\n  blank field will cause validation to halt at this step and return\n  Boolean true or false accordingly.</p></li>\n<li><p><code><a href=\"#/api/Ext.form.field.Spinner-cfg-minLength\" rel=\"Ext.form.field.Spinner-cfg-minLength\" class=\"docClass\">minLength</a></code> : (Invalid message = <code><a href=\"#/api/Ext.form.field.Spinner-cfg-minLengthText\" rel=\"Ext.form.field.Spinner-cfg-minLengthText\" class=\"docClass\">minLengthText</a></code>)</p>\n\n<p>  If the passed value does not satisfy the <code><a href=\"#/api/Ext.form.field.Spinner-cfg-minLength\" rel=\"Ext.form.field.Spinner-cfg-minLength\" class=\"docClass\">minLength</a></code>\n  specified, validation halts.</p></li>\n<li><p><code><a href=\"#/api/Ext.form.field.Spinner-cfg-maxLength\" rel=\"Ext.form.field.Spinner-cfg-maxLength\" class=\"docClass\">maxLength</a></code> : (Invalid message = <code><a href=\"#/api/Ext.form.field.Spinner-cfg-maxLengthText\" rel=\"Ext.form.field.Spinner-cfg-maxLengthText\" class=\"docClass\">maxLengthText</a></code>)</p>\n\n<p> If the passed value does not satisfy the <code><a href=\"#/api/Ext.form.field.Spinner-cfg-maxLength\" rel=\"Ext.form.field.Spinner-cfg-maxLength\" class=\"docClass\">maxLength</a></code>\n specified, validation halts.</p></li>\n</ul>\n</li>\n<li><p><strong>Preconfigured Validation Types (VTypes)</strong></p>\n\n<p> If none of the prior validation steps halts validation, a field\n configured with a <code><a href=\"#/api/Ext.form.field.Spinner-cfg-vtype\" rel=\"Ext.form.field.Spinner-cfg-vtype\" class=\"docClass\">vtype</a></code> will utilize the\n corresponding <a href=\"#/api/Ext.form.field.VTypes\" rel=\"Ext.form.field.VTypes\" class=\"docClass\">VTypes</a> validation function.\n If invalid, either the field's <code><a href=\"#/api/Ext.form.field.Spinner-cfg-vtypeText\" rel=\"Ext.form.field.Spinner-cfg-vtypeText\" class=\"docClass\">vtypeText</a></code> or\n the VTypes vtype Text property will be used for the invalid message.\n Keystrokes on the field will be filtered according to the VTypes\n vtype Mask property.</p></li>\n<li><p><strong>Field specific regex test</strong></p>\n\n<p> If none of the prior validation steps halts validation, a field's\n configured <code><a href=\"#/api/Ext.form.field.Spinner-cfg-regex\" rel=\"Ext.form.field.Spinner-cfg-regex\" class=\"docClass\">regex</a></code> test will be processed.\n The invalid message for this test is configured with <code><a href=\"#/api/Ext.form.field.Spinner-cfg-regexText\" rel=\"Ext.form.field.Spinner-cfg-regexText\" class=\"docClass\">regexText</a></code></p></li>\n</ol>\n\n",
        "return": {
          "type": "String[]",
          "properties": null,
          "name": "return",
          "doc": "<p>Array of any validation errors</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 242,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-method-getFieldLabel",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getFieldLabel",
        "shortDoc": "Returns the label for the field. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>Returns the label for the field. Defaults to simply returning the <a href=\"#/api/Ext.form.field.Spinner-cfg-fieldLabel\" rel=\"Ext.form.field.Spinner-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> config. Can be\noverridden to provide</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The configured field label, or empty string if not defined</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 3023,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getHeight",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getHeight",
        "shortDoc": "Gets the current height of the component's underlying element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Gets the current height of the component's underlying element.</p>\n",
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
        "linenr": 2271,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getId",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getId",
        "shortDoc": "Retrieves the id of this component. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Retrieves the id of this component.\nWill autogenerate an id if one has not already been set.</p>\n",
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
        "linenr": 301,
        "owner": "Ext.form.field.Base",
        "html_filename": "Base.html",
        "href": "Base.html#Ext-form-field-Base-method-getInputId",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getInputId",
        "shortDoc": "Returns the input id for this field. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Base.js",
        "doc": "<p>Returns the input id for this field. If none was specified via the <a href=\"#/api/Ext.form.field.Spinner-cfg-inputId\" rel=\"Ext.form.field.Spinner-cfg-inputId\" class=\"docClass\">inputId</a> config, then an id will be\nautomatically generated.</p>\n",
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
        "linenr": 1832,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getInsertPosition",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/Number/Ext.Element/HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "position",
            "doc": "<p>Index, element id or element you want\nto put this component before.</p>\n"
          }
        ],
        "alias": null,
        "name": "getInsertPosition",
        "shortDoc": "This function takes the position argument passed to onRender and returns a\nDOM element that you can use in the insert...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>This function takes the position argument passed to onRender and returns a\nDOM element that you can use in the insertBefore.</p>\n",
        "return": {
          "type": "HTMLElement",
          "properties": null,
          "name": "return",
          "doc": "<p>DOM element that you can use in the insertBefore</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 251,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-method-getLabelableRenderData",
        "protected": true,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getLabelableRenderData",
        "shortDoc": "Generates the arguments for the field decorations rendering template. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>Generates the arguments for the field decorations <a href=\"#/api/Ext.form.field.Spinner-cfg-labelableRenderTpl\" rel=\"Ext.form.field.Spinner-cfg-labelableRenderTpl\" class=\"docClass\">rendering template</a>.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>The template arguments</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 3031,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getLoader",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getLoader",
        "shortDoc": "Gets the Ext.ComponentLoader for this Component. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Gets the <a href=\"#/api/Ext.ComponentLoader\" rel=\"Ext.ComponentLoader\" class=\"docClass\">Ext.ComponentLoader</a> for this Component.</p>\n",
        "return": {
          "type": "Ext.ComponentLoader",
          "properties": null,
          "name": "return",
          "doc": "<p>The loader instance, null if it doesn't exist.</p>\n"
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
        "doc": "<p>Returns the value(s) that should be saved to the <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> instance for this field, when <a href=\"#/api/Ext.form.Basic-method-updateRecord\" rel=\"Ext.form.Basic-method-updateRecord\" class=\"docClass\">Ext.form.Basic.updateRecord</a> is called. Typically this will be an object with a single name-value pair, the name\nbeing this field's <a href=\"#/api/Ext.form.field.Spinner-method-getName\" rel=\"Ext.form.field.Spinner-method-getName\" class=\"docClass\">name</a> and the value being its current data value. More advanced field\nimplementations may return more than one name-value pair. The returned values will be saved to the corresponding\nfield names in the Model.</p>\n\n<p>Note that the values returned from this method are not guaranteed to have been successfully <a href=\"#/api/Ext.form.field.Spinner-method-validate\" rel=\"Ext.form.field.Spinner-method-validate\" class=\"docClass\">validated</a>.</p>\n",
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
        "linenr": 3162,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getPlugin",
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
            "name": "pluginId",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "getPlugin",
        "shortDoc": "Retrieves a plugin by its pluginId which has been bound to this\ncomponent. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Retrieves a plugin by its pluginId which has been bound to this\ncomponent.</p>\n",
        "return": {
          "type": "Ext.AbstractPlugin",
          "properties": null,
          "name": "return",
          "doc": "<p>pluginInstance</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 613,
        "owner": "Ext.Component",
        "html_filename": "Component.html",
        "href": "Component.html#Ext-Component-method-getPosition",
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
            "name": "local",
            "doc": "<p>(optional) If true the element's left and top are returned instead of page XY (defaults to false)</p>\n"
          }
        ],
        "alias": null,
        "name": "getPosition",
        "shortDoc": "Gets the current XY position of the component's underlying element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Component.js",
        "doc": "<p>Gets the current XY position of the component's underlying element.</p>\n",
        "return": {
          "type": "Number[]",
          "properties": null,
          "name": "return",
          "doc": "<p>The XY position of the element (e.g., [100, 200])</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 464,
        "owner": "Ext.form.field.Text",
        "html_filename": "Text.html",
        "href": "Text.html#Ext-form-field-Text-method-getRawValue",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getRawValue",
        "shortDoc": "Returns the raw String value of the field, without performing any normalization, conversion, or validation. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Text.js",
        "doc": "<p>Returns the raw String value of the field, without performing any normalization, conversion, or validation. Gets\nthe current value of the input element if the field has been rendered, ignoring the value if it is the\n<a href=\"#/api/Ext.form.field.Spinner-cfg-emptyText\" rel=\"Ext.form.field.Spinner-cfg-emptyText\" class=\"docClass\">emptyText</a>. To get a normalized and converted value see <a href=\"#/api/Ext.form.field.Spinner-method-getValue\" rel=\"Ext.form.field.Spinner-method-getValue\" class=\"docClass\">getValue</a>.</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The raw String value of the field</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 3007,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getSize",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getSize",
        "shortDoc": "Gets the current size of the component's underlying element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Gets the current size of the component's underlying element.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>An object containing the element's size {width: (element width), height: (element height)}</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 838,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getState",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getState",
        "shortDoc": "The supplied default state gathering method for the AbstractComponent class. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p></p>The supplied default state gathering method for the AbstractComponent class.</p>\nThis method returns dimension setings such as <code>flex</code>, <code>anchor</code>, <code>width</code>\nand <code>height</code> along with <code>collapsed</code> state.</p></p>\n\n<p>Subclasses which implement more complex state should call the superclass's implementation, and apply their state\nto the result if this basic state is to be saved.</p>\n\n\n<p>Note that Component state will only be saved if the Component has a <a href=\"#/api/Ext.form.field.Spinner-cfg-stateId\" rel=\"Ext.form.field.Spinner-cfg-stateId\" class=\"docClass\">stateId</a> and there as a StateProvider\nconfigured for the document.</p>\n\n",
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
        "linenr": 237,
        "owner": "Ext.state.Stateful",
        "html_filename": "Stateful.html",
        "href": "Stateful.html#Ext-state-Stateful-method-getStateId",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getStateId",
        "shortDoc": "Gets the state id for this object. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/state/Stateful.js",
        "doc": "<p>Gets the state id for this object.</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The state id, null if not found.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 309,
        "owner": "Ext.form.field.Base",
        "html_filename": "Base.html",
        "href": "Base.html#Ext-form-field-Base-method-getSubTplData",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getSubTplData",
        "shortDoc": "Creates and returns the data object to be used when rendering the fieldSubTpl. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Base.js",
        "doc": "<p>Creates and returns the data object to be used when rendering the <a href=\"#/api/Ext.form.field.Spinner-cfg-fieldSubTpl\" rel=\"Ext.form.field.Spinner-cfg-fieldSubTpl\" class=\"docClass\">fieldSubTpl</a>.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>The template data</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 331,
        "owner": "Ext.form.field.Base",
        "html_filename": "Base.html",
        "href": "Base.html#Ext-form-field-Base-method-getSubTplMarkup",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getSubTplMarkup",
        "shortDoc": "Gets the markup to be inserted into the outer template's bodyEl. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Base.js",
        "doc": "<p>Gets the markup to be inserted into the outer template's bodyEl. For fields this is the actual input element.</p>\n",
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
        "doc": "<p>Returns the parameter(s) that would be included in a standard form submit for this field. Typically this will be\nan object with a single name-value pair, the name being this field's <a href=\"#/api/Ext.form.field.Spinner-method-getName\" rel=\"Ext.form.field.Spinner-method-getName\" class=\"docClass\">name</a> and the value being\nits current stringified value. More advanced field implementations may return more than one name-value pair.</p>\n\n<p>Note that the values returned from this method are not guaranteed to have been successfully <a href=\"#/api/Ext.form.field.Spinner-method-validate\" rel=\"Ext.form.field.Spinner-method-validate\" class=\"docClass\">validated</a>.</p>\n",
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
        "linenr": 438,
        "owner": "Ext.form.field.Base",
        "html_filename": "Base.html",
        "href": "Base.html#Ext-form-field-Base-method-getSubmitValue",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getSubmitValue",
        "shortDoc": "Returns the value that would be included in a standard form submit for this field. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Base.js",
        "doc": "<p>Returns the value that would be included in a standard form submit for this field. This will be combined with the\nfield's name to form a name=value pair in the <a href=\"#/api/Ext.form.field.Spinner-method-getSubmitData\" rel=\"Ext.form.field.Spinner-method-getSubmitData\" class=\"docClass\">submitted parameters</a>. If an empty string is\nreturned then just the name= will be submitted; if null is returned then nothing will be submitted.</p>\n\n<p>Note that the value returned will have been <a href=\"#/api/Ext.form.field.Spinner-method-processRawValue\" rel=\"Ext.form.field.Spinner-method-processRawValue\" class=\"docClass\">processed</a> but may or may not have been\nsuccessfully <a href=\"#/api/Ext.form.field.Spinner-method-validate\" rel=\"Ext.form.field.Spinner-method-validate\" class=\"docClass\">validated</a>.</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The value to be submitted, or null.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 225,
        "owner": "Ext.form.field.Trigger",
        "html_filename": "Trigger.html",
        "href": "Trigger.html#Ext-form-field-Trigger-method-getTriggerWidth",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getTriggerWidth",
        "shortDoc": "Get the total width of the trigger button area. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Trigger.js",
        "doc": "<p>Get the total width of the trigger button area. Only useful after the field has been rendered.</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>The trigger width</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 531,
        "owner": "Ext.form.field.Base",
        "html_filename": "Base.html",
        "href": "Base.html#Ext-form-field-Base-method-getValue",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getValue",
        "shortDoc": "Returns the current data value of the field. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Base.js",
        "doc": "<p>Returns the current data value of the field. The type of value returned is particular to the type of the\nparticular field (e.g. a Date object for <a href=\"#/api/Ext.form.field.Date\" rel=\"Ext.form.field.Date\" class=\"docClass\">Ext.form.field.Date</a>), as the result of calling <a href=\"#/api/Ext.form.field.Spinner-method-rawToValue\" rel=\"Ext.form.field.Spinner-method-rawToValue\" class=\"docClass\">rawToValue</a> on\nthe field's <a href=\"#/api/Ext.form.field.Spinner-method-processRawValue\" rel=\"Ext.form.field.Spinner-method-processRawValue\" class=\"docClass\">processed</a> String value. To return the raw String value, see <a href=\"#/api/Ext.form.field.Spinner-method-getRawValue\" rel=\"Ext.form.field.Spinner-method-getRawValue\" class=\"docClass\">getRawValue</a>.</p>\n",
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
        "linenr": 3015,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getWidth",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getWidth",
        "shortDoc": "Gets the current width of the component's underlying element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Gets the current width of the component's underlying element.</p>\n",
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
        "linenr": 982,
        "owner": "Ext.Component",
        "html_filename": "Component.html",
        "href": "Component.html#Ext-Component-method-getXType",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getXType",
        "shortDoc": "Gets the xtype for this component as registered with Ext.ComponentManager. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Component.js",
        "doc": "<p>Gets the xtype for this component as registered with <a href=\"#/api/Ext.ComponentManager\" rel=\"Ext.ComponentManager\" class=\"docClass\">Ext.ComponentManager</a>. For a list of all\navailable xtypes, see the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> header. Example usage:</p>\n\n<pre><code>var t = new Ext.form.field.Text();\nalert(t.getXType());  // alerts 'textfield'\n</code></pre>\n\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The xtype</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 2331,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getXTypes",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getXTypes",
        "shortDoc": "Returns this Component's xtype hierarchy as a slash-delimited string. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Returns this Component's xtype hierarchy as a slash-delimited string. For a list of all\navailable xtypes, see the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> header.</p>\n\n\n<p><b>If using your own subclasses, be aware that a Component must register its own xtype\nto participate in determination of inherited xtypes.</b></p>\n\n\n<p>Example usage:</p>\n\n\n<pre><code>var t = new Ext.form.field.Text();\nalert(t.getXTypes());  // alerts 'component/field/textfield'\n</code></pre>\n\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The xtype hierarchy string</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 345,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-method-hasActiveError",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "hasActiveError",
        "shortDoc": "Tells whether the field currently has an active error message. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>Tells whether the field currently has an active error message. This does not trigger\nvalidation on its own, it merely looks for any message that the component may already hold.</p>\n",
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
        "linenr": 369,
        "owner": "Ext.util.Animate",
        "html_filename": "Animate.html",
        "href": "Animate.html#Ext-util-Animate-method-hasActiveFx",
        "protected": false,
        "deprecated": {
          "text": "<p>Replaced by <a href=\"#/api/Ext.button.Split-method-getActiveAnimation\" rel=\"Ext.button.Split-method-getActiveAnimation\" class=\"docClass\">getActiveAnimation</a></p>\n\n\n\n",
          "tagname": "deprecated",
          "version": "4.0",
          "doc": null
        },
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": {
          "cls": "Ext.util.Animate",
          "tagname": "alias",
          "member": "getActiveAnimation",
          "doc": null
        },
        "name": "hasActiveFx",
        "shortDoc": "Returns the current animation if this object has any effects actively running or queued, else returns false. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/util/Animate.js",
        "doc": "<p>Returns the current animation if this object has any effects actively running or queued, else returns false.</p>\n",
        "return": {
          "type": "Ext.fx.Anim/Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>Anim if element has active effects, else false</p>\n"
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
        "linenr": 1675,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-hasUICls",
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
            "doc": "<p>The cls to check</p>\n"
          }
        ],
        "alias": null,
        "name": "hasUICls",
        "shortDoc": "Checks if there is currently a specified uiCls ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Checks if there is currently a specified uiCls</p>\n",
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
        "linenr": 768,
        "owner": "Ext.Component",
        "html_filename": "Component.html",
        "href": "Component.html#Ext-Component-method-hide",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/Ext.Element/Ext.Component",
            "properties": [

            ],
            "optional": true,
            "name": "animateTarget",
            "doc": "<p>(optional) <b>only valid for <a href=\"#/api/Ext.form.field.Spinner-cfg-floating\" rel=\"Ext.form.field.Spinner-cfg-floating\" class=\"docClass\">floating</a> Components such as\n<a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a>s or <a href=\"#/api/Ext.tip.ToolTip\" rel=\"Ext.tip.ToolTip\" class=\"docClass\">ToolTip</a>s, or regular Components which have been configured\nwith <code>floating: true</code>.</b>.\nThe target to which the Component should animate while hiding (defaults to null with no animation)</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "callback",
            "doc": "<p>(optional) A callback function to call after the Component is hidden.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the callback is executed. Defaults to this Component.</p>\n"
          }
        ],
        "alias": null,
        "name": "hide",
        "shortDoc": "Hides this Component, setting it to invisible using the configured hideMode. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Component.js",
        "doc": "<p>Hides this Component, setting it to invisible using the configured <a href=\"#/api/Ext.form.field.Spinner-cfg-hideMode\" rel=\"Ext.form.field.Spinner-cfg-hideMode\" class=\"docClass\">hideMode</a>.</p>\n",
        "return": {
          "type": "Ext.Component",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
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
        "linenr": 224,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-method-initLabelable",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "initLabelable",
        "shortDoc": "Performs initialization of this mixin. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>Performs initialization of this mixin. Component classes using this mixin should call this method\nduring their own initialization.</p>\n",
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
        "linenr": 2110,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-is",
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
            "name": "selector",
            "doc": "<p>The selector string to test against.</p>\n"
          }
        ],
        "alias": null,
        "name": "is",
        "shortDoc": "Tests whether this Component matches the selector string. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Tests whether this Component matches the selector string.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if this Component matches the selector.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 3178,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isDescendantOf",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.Container",
            "properties": [

            ],
            "optional": false,
            "name": "container",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "isDescendantOf",
        "shortDoc": "Determines whether this component is the descendant of a particular container. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Determines whether this component is the descendant of a particular container.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>isDescendant</p>\n"
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
        "doc": "<p>Returns true if the value of this Field has been changed from its <a href=\"#/api/Ext.form.field.Spinner-property-originalValue\" rel=\"Ext.form.field.Spinner-property-originalValue\" class=\"docClass\">originalValue</a>.\nWill always return false if the field is disabled.</p>\n\n<p>Note that if the owning <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">form</a> was configured with\n<a href=\"#/api/Ext.form.Basic-cfg-trackResetOnLoad\" rel=\"Ext.form.Basic-cfg-trackResetOnLoad\" class=\"docClass\">trackResetOnLoad</a> then the <a href=\"#/api/Ext.form.field.Spinner-property-originalValue\" rel=\"Ext.form.field.Spinner-property-originalValue\" class=\"docClass\">originalValue</a> is updated when\nthe values are loaded by <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Ext.form.Basic</a>.<a href=\"#/api/Ext.form.Basic-method-setValues\" rel=\"Ext.form.Basic-method-setValues\" class=\"docClass\">setValues</a>.</p>\n",
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
        "linenr": 2508,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isDisabled",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isDisabled",
        "shortDoc": "Method to determine whether this Component is currently disabled. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Method to determine whether this Component is currently disabled.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>the disabled state of this Component.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 2685,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isDraggable",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isDraggable",
        "shortDoc": "Method to determine whether this Component is draggable. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Method to determine whether this Component is draggable.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>the draggable state of this component.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 2693,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isDroppable",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isDroppable",
        "shortDoc": "Method to determine whether this Component is droppable. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Method to determine whether this Component is droppable.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>the droppable state of this component.</p>\n"
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
        "doc": "<p>Returns whether two field <a href=\"#/api/Ext.form.field.Spinner-method-getValue\" rel=\"Ext.form.field.Spinner-method-getValue\" class=\"docClass\">values</a> are logically equal. Field implementations may override this\nto provide custom comparison logic appropriate for the particular field's data type.</p>\n",
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
        "doc": "<p>Returns whether this Field is a file upload field; if it returns true, forms will use special techniques for\n<a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">submitting the form</a> via AJAX. See <a href=\"#/api/Ext.form.Basic-method-hasUpload\" rel=\"Ext.form.Basic-method-hasUpload\" class=\"docClass\">Ext.form.Basic.hasUpload</a> for details. If\nthis returns true, the <a href=\"#/api/Ext.form.field.Spinner-method-extractFileInput\" rel=\"Ext.form.field.Spinner-method-extractFileInput\" class=\"docClass\">extractFileInput</a> method must also be implemented to return the corresponding file\ninput element.</p>\n",
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
        "linenr": 2677,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isFloating",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isFloating",
        "shortDoc": "Method to determine whether this Component is floating. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Method to determine whether this Component is floating.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>the floating state of this component.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 2524,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isHidden",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isHidden",
        "shortDoc": "Method to determine whether this Component is currently set to hidden. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Method to determine whether this Component is currently set to hidden.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>the hidden state of this Component.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 703,
        "owner": "Ext.form.field.Base",
        "html_filename": "Base.html",
        "href": "Base.html#Ext-form-field-Base-method-isValid",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isValid",
        "shortDoc": "Returns whether or not the field value is currently valid by validating the\nprocessed raw value of the field. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Base.js",
        "doc": "<p>Returns whether or not the field value is currently valid by <a href=\"#/api/Ext.form.field.Spinner-method-getErrors\" rel=\"Ext.form.field.Spinner-method-getErrors\" class=\"docClass\">validating</a> the\n<a href=\"#/api/Ext.form.field.Spinner-method-processRawValue\" rel=\"Ext.form.field.Spinner-method-processRawValue\" class=\"docClass\">processed raw value</a> of the field. <strong>Note</strong>: <a href=\"#/api/Ext.form.field.Spinner-cfg-disabled\" rel=\"Ext.form.field.Spinner-cfg-disabled\" class=\"docClass\">disabled</a> fields are\nalways treated as valid.</p>\n",
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
        "linenr": 2408,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isVisible",
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
            "name": "deep",
            "doc": "<p>(optional) Pass <code>true</code> to interrogate the visibility status of all\nparent Containers to determine whether this Component is truly visible to the user.</p>\n\n<p>Generally, to determine whether a Component is hidden, the no argument form is needed. For example\nwhen creating dynamically laid out UIs in a hidden Container before showing them.</p>\n\n"
          }
        ],
        "alias": null,
        "name": "isVisible",
        "shortDoc": "Returns true if this component is visible. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Returns true if this component is visible.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if this component is visible, false otherwise.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 2300,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isXType",
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
            "name": "xtype",
            "doc": "<p>The xtype to check for this Component</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "shallow",
            "doc": "<p>(optional) False to check whether this Component is descended from the xtype (this is\nthe default), or true to check whether this Component is directly of the specified xtype.</p>\n"
          }
        ],
        "alias": null,
        "name": "isXType",
        "shortDoc": "Tests whether or not this Component is of a specific xtype. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Tests whether or not this Component is of a specific xtype. This can test whether this Component is descended\nfrom the xtype (default) or whether it is directly of the xtype specified (shallow = true).</p>\n\n\n<p><b>If using your own subclasses, be aware that a Component must register its own xtype\nto participate in determination of inherited xtypes.</b></p>\n\n\n<p>For a list of all available xtypes, see the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> header.</p>\n\n\n<p>Example usage:</p>\n\n\n<pre><code>var t = new Ext.form.field.Text();\nvar isText = t.isXType('textfield');        // true\nvar isBoxSubclass = t.isXType('field');       // true, descended from <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a>\nvar isBoxInstance = t.isXType('field', true); // false, not a direct <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> instance\n</code></pre>\n\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if this component descends from the specified xtype, false otherwise.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 741,
        "owner": "Ext.form.field.Base",
        "html_filename": "Base.html",
        "href": "Base.html#Ext-form-field-Base-method-markInvalid",
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
            "doc": "<p>The validation message(s) to display.</p>\n"
          }
        ],
        "alias": null,
        "name": "markInvalid",
        "shortDoc": "Display one or more error messages associated with this field, using msgTarget to determine how to\ndisplay the messag...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Base.js",
        "doc": "<p>Display one or more error messages associated with this field, using <a href=\"#/api/Ext.form.field.Spinner-cfg-msgTarget\" rel=\"Ext.form.field.Spinner-cfg-msgTarget\" class=\"docClass\">msgTarget</a> to determine how to\ndisplay the messages and applying <a href=\"#/api/Ext.form.field.Spinner-cfg-invalidCls\" rel=\"Ext.form.field.Spinner-cfg-invalidCls\" class=\"docClass\">invalidCls</a> to the field's UI element.</p>\n\n<p><strong>Note</strong>: this method does not cause the Field's <a href=\"#/api/Ext.form.field.Spinner-method-validate\" rel=\"Ext.form.field.Spinner-method-validate\" class=\"docClass\">validate</a> or <a href=\"#/api/Ext.form.field.Spinner-method-isValid\" rel=\"Ext.form.field.Spinner-method-isValid\" class=\"docClass\">isValid</a> methods to return <code>false</code>\nif the value does <em>pass</em> validation. So simply marking a Field as invalid will not prevent submission of forms\nsubmitted with the <a href=\"#/api/Ext.form.action.Submit-cfg-clientValidation\" rel=\"Ext.form.action.Submit-cfg-clientValidation\" class=\"docClass\">Ext.form.action.Submit.clientValidation</a> option set.</p>\n",
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.form.field.Spinner-method-addManagedListener\" rel=\"Ext.form.field.Spinner-method-addManagedListener\" class=\"docClass\">addManagedListener</a>.</p>\n\n<p>Adds listeners to any Observable object (or Ext.Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.form.field.Spinner-method-removeManagedListener\" rel=\"Ext.form.field.Spinner-method-removeManagedListener\" class=\"docClass\">removeManagedListener</a>.</p>\n\n<p>Removes listeners that were added by the <a href=\"#/api/Ext.form.field.Spinner-method-mon\" rel=\"Ext.form.field.Spinner-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
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
        "linenr": 2236,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-nextNode",
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
            "name": "selector",
            "doc": "<p>(Optional) A <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector to filter the following nodes.</p>\n"
          }
        ],
        "alias": null,
        "name": "nextNode",
        "shortDoc": "Returns the next node in the Component tree in tree traversal order. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Returns the next node in the Component tree in tree traversal order.</p>\n\n\n<p>Note that this is not limited to siblings, and if invoked upon a node with no matching siblings, will\nwalk the tree to attempt to find a match. Contrast with <a href=\"#/api/Ext.form.field.Spinner-method-nextSibling\" rel=\"Ext.form.field.Spinner-method-nextSibling\" class=\"docClass\">nextSibling</a>.</p>\n\n",
        "return": {
          "type": "undefined",
          "properties": null,
          "name": "return",
          "doc": "<p>The next node (or the next node which matches the selector). Returns null if there is no matching node.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 2140,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-nextSibling",
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
            "name": "selector",
            "doc": "<p>(Optional) A <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector to filter the following items.</p>\n"
          }
        ],
        "alias": null,
        "name": "nextSibling",
        "shortDoc": "Returns the next sibling of this Component. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Returns the next sibling of this Component.</p>\n\n\n<p>Optionally selects the next sibling which matches the passed <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector.</p>\n\n\n<p>May also be refered to as <code><b>next()</b></code></p>\n\n\n<p>Note that this is limited to siblings, and if no siblings of the item match, <code>null</code> is returned. Contrast with <a href=\"#/api/Ext.form.field.Spinner-method-nextNode\" rel=\"Ext.form.field.Spinner-method-nextNode\" class=\"docClass\">nextNode</a></p>\n\n",
        "return": {
          "type": "undefined",
          "properties": null,
          "name": "return",
          "doc": "<p>The next sibling (or the next sibling which matches the selector). Returns null if there is no matching sibling.</p>\n"
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
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.form.field.Spinner-method-fireEvent\" rel=\"Ext.form.field.Spinner-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n"
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.form.field.Spinner-method-addListener\" rel=\"Ext.form.field.Spinner-method-addListener\" class=\"docClass\">addListener</a>.</p>\n\n<p>Appends an event handler to this object.</p>\n",
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
        "linenr": 105,
        "owner": "Ext.form.field.Spinner",
        "html_filename": "Spinner.html",
        "href": "Spinner.html#Ext-form-field-Spinner-method-onSpinDown",
        "protected": true,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "onSpinDown",
        "shortDoc": "This method is called when the spinner down button is clicked, or when the down arrow key is pressed if\nkeyNavEnabled...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Spinner.js",
        "doc": "<p>This method is called when the spinner down button is clicked, or when the down arrow key is pressed if\n<a href=\"#/api/Ext.form.field.Spinner-cfg-keyNavEnabled\" rel=\"Ext.form.field.Spinner-cfg-keyNavEnabled\" class=\"docClass\">keyNavEnabled</a> is true. Must be implemented by subclasses.</p>\n",
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
        "linenr": 97,
        "owner": "Ext.form.field.Spinner",
        "html_filename": "Spinner.html",
        "href": "Spinner.html#Ext-form-field-Spinner-method-onSpinUp",
        "protected": true,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "onSpinUp",
        "shortDoc": "This method is called when the spinner up button is clicked, or when the up arrow key is pressed if\nkeyNavEnabled is ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Spinner.js",
        "doc": "<p>This method is called when the spinner up button is clicked, or when the up arrow key is pressed if\n<a href=\"#/api/Ext.form.field.Spinner-cfg-keyNavEnabled\" rel=\"Ext.form.field.Spinner-cfg-keyNavEnabled\" class=\"docClass\">keyNavEnabled</a> is true. Must be implemented by subclasses.</p>\n",
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
        "linenr": 386,
        "owner": "Ext.form.field.Trigger",
        "html_filename": "Trigger.html",
        "href": "Trigger.html#Ext-form-field-Trigger-method-onTriggerClick",
        "protected": true,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "onTriggerClick",
        "shortDoc": "The function that should handle the trigger's click event. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Trigger.js",
        "doc": "<p>The function that should handle the trigger's click event. This method does nothing by default until overridden\nby an implementing function. See Ext.form.field.ComboBox and <a href=\"#/api/Ext.form.field.Date\" rel=\"Ext.form.field.Date\" class=\"docClass\">Ext.form.field.Date</a> for sample implementations.</p>\n",
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
        "linenr": 2200,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-previousNode",
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
            "name": "selector",
            "doc": "<p>(Optional) A <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector to filter the preceding nodes.</p>\n"
          }
        ],
        "alias": null,
        "name": "previousNode",
        "shortDoc": "Returns the previous node in the Component tree in tree traversal order. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Returns the previous node in the Component tree in tree traversal order.</p>\n\n\n<p>Note that this is not limited to siblings, and if invoked upon a node with no matching siblings, will\nwalk the tree in reverse order to attempt to find a match. Contrast with <a href=\"#/api/Ext.form.field.Spinner-method-previousSibling\" rel=\"Ext.form.field.Spinner-method-previousSibling\" class=\"docClass\">previousSibling</a>.</p>\n\n",
        "return": {
          "type": "undefined",
          "properties": null,
          "name": "return",
          "doc": "<p>The previous node (or the previous node which matches the selector). Returns null if there is no matching node.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 2170,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-previousSibling",
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
            "name": "selector",
            "doc": "<p>(Optional) A <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector to filter the preceding items.</p>\n"
          }
        ],
        "alias": null,
        "name": "previousSibling",
        "shortDoc": "Returns the previous sibling of this Component. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Returns the previous sibling of this Component.</p>\n\n\n<p>Optionally selects the previous sibling which matches the passed <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector.</p>\n\n\n<p>May also be refered to as <code><b>prev()</b></code></p>\n\n\n<p>Note that this is limited to siblings, and if no siblings of the item match, <code>null</code> is returned. Contrast with <a href=\"#/api/Ext.form.field.Spinner-method-previousNode\" rel=\"Ext.form.field.Spinner-method-previousNode\" class=\"docClass\">previousNode</a></p>\n\n",
        "return": {
          "type": "undefined",
          "properties": null,
          "name": "return",
          "doc": "<p>The previous sibling (or the previous sibling which matches the selector). Returns null if there is no matching sibling.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 324,
        "owner": "Ext.form.field.Text",
        "html_filename": "Text.html",
        "href": "Text.html#Ext-form-field-Text-method-processRawValue",
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
            "doc": "<p>The unprocessed string value</p>\n"
          }
        ],
        "alias": null,
        "name": "processRawValue",
        "shortDoc": "Performs any necessary manipulation of a raw String value to prepare it for conversion and/or\nvalidation. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Text.js",
        "doc": "<p>Performs any necessary manipulation of a raw String value to prepare it for conversion and/or\n<a href=\"#/api/Ext.form.field.Spinner-method-validate\" rel=\"Ext.form.field.Spinner-method-validate\" class=\"docClass\">validation</a>. For text fields this applies the configured <a href=\"#/api/Ext.form.field.Spinner-cfg-stripCharsRe\" rel=\"Ext.form.field.Spinner-cfg-stripCharsRe\" class=\"docClass\">stripCharsRe</a>\nto the raw value.</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The processed string value</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 500,
        "owner": "Ext.form.field.Base",
        "html_filename": "Base.html",
        "href": "Base.html#Ext-form-field-Base-method-rawToValue",
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
            "name": "rawValue",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "rawToValue",
        "shortDoc": "Converts a raw input field value into a mixed-type value that is suitable for this particular field type. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Base.js",
        "doc": "<p>Converts a raw input field value into a mixed-type value that is suitable for this particular field type. This\nallows controlling the normalization and conversion of user-entered values into field-type-appropriate values,\ne.g. a Date object for <a href=\"#/api/Ext.form.field.Date\" rel=\"Ext.form.field.Date\" class=\"docClass\">Ext.form.field.Date</a>, and is invoked by <a href=\"#/api/Ext.form.field.Spinner-method-getValue\" rel=\"Ext.form.field.Spinner-method-getValue\" class=\"docClass\">getValue</a>.</p>\n\n<p>It is up to individual implementations to decide how to handle raw values that cannot be successfully converted\nto the desired object type.</p>\n\n<p>See <a href=\"#/api/Ext.form.field.Spinner-method-valueToRaw\" rel=\"Ext.form.field.Spinner-method-valueToRaw\" class=\"docClass\">valueToRaw</a> for the opposite conversion.</p>\n\n<p>The base implementation does no conversion, returning the raw value untouched.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>The converted value.</p>\n"
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
        "linenr": 2047,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-removeChildEls",
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
            "name": "testFn",
            "doc": "<p>The test function.</p>\n"
          }
        ],
        "alias": null,
        "name": "removeChildEls",
        "shortDoc": "Removes items in the childEls array based on the return value of a supplied test\nfunction. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Removes items in the childEls array based on the return value of a supplied test\nfunction. The function is called with a entry in childEls and if the test function\nreturn true, that entry is removed. If false, that entry is kept.</p>\n",
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
        "linenr": 2564,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-removeCls",
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
            "name": "className",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "removeCls",
        "shortDoc": "Removes a CSS class from the top level element representing this component. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Removes a CSS class from the top level element representing this component.</p>\n",
        "return": {
          "type": "Ext.Component",
          "properties": null,
          "name": "return",
          "doc": "<p>Returns the Component to allow method chaining.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1646,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-removeClsWithUI",
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
            "name": "cls",
            "doc": "<p>A string or an array of strings to remove to the uiCls</p>\n"
          }
        ],
        "alias": null,
        "name": "removeClsWithUI",
        "shortDoc": "Removes a cls to the uiCls array, which will also call removeUIClsFromElement and removes\nit from all elements of thi...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Removes a cls to the uiCls array, which will also call <a href=\"#/api/Ext.form.field.Spinner-method-removeUIClsFromElement\" rel=\"Ext.form.field.Spinner-method-removeUIClsFromElement\" class=\"docClass\">removeUIClsFromElement</a> and removes\nit from all elements of this component.</p>\n",
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
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.form.field.Spinner-method-addListener\" rel=\"Ext.form.field.Spinner-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope originally specified for the handler. It must be the same as the\nscope argument specified in the original call to <a href=\"#/api/Ext.form.field.Spinner-method-addListener\" rel=\"Ext.form.field.Spinner-method-addListener\" class=\"docClass\">addListener</a> or the listener will not be removed.</p>\n"
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
        "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.form.field.Spinner-method-mon\" rel=\"Ext.form.field.Spinner-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
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
        "linenr": 1726,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-removeUIClsFromElement",
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
            "name": "ui",
            "doc": "<p>The UI to add to the element</p>\n"
          }
        ],
        "alias": null,
        "name": "removeUIClsFromElement",
        "shortDoc": "Method which removes a specified UI + uiCls from the components element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Method which removes a specified UI + uiCls from the components element.\nThe cls which is added to the element will be: <code>this.baseCls + '-' + ui</code></p>\n",
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
        "linenr": 374,
        "owner": "Ext.form.field.Text",
        "html_filename": "Text.html",
        "href": "Text.html#Ext-form-field-Text-method-reset",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "reset",
        "shortDoc": "Resets the current field value to the originally-loaded value and clears any validation messages. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Text.js",
        "doc": "<p>Resets the current field value to the originally-loaded value and clears any validation messages.\nAlso adds <strong><a href=\"#/api/Ext.form.field.Spinner-cfg-emptyText\" rel=\"Ext.form.field.Spinner-cfg-emptyText\" class=\"docClass\">emptyText</a></strong> and <strong><a href=\"#/api/Ext.form.field.Spinner-cfg-emptyCls\" rel=\"Ext.form.field.Spinner-cfg-emptyCls\" class=\"docClass\">emptyCls</a></strong> if the original value was blank.</p>\n",
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
        "doc": "<p>Resets the field's <a href=\"#/api/Ext.form.field.Spinner-property-originalValue\" rel=\"Ext.form.field.Spinner-property-originalValue\" class=\"docClass\">originalValue</a> property so it matches the current <a href=\"#/api/Ext.form.field.Spinner-method-getValue\" rel=\"Ext.form.field.Spinner-method-getValue\" class=\"docClass\">value</a>. This is\ncalled by <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Ext.form.Basic</a>.<a href=\"#/api/Ext.form.Basic-method-setValues\" rel=\"Ext.form.Basic-method-setValues\" class=\"docClass\">setValues</a> if the form's\n<a href=\"#/api/Ext.form.Basic-cfg-trackResetOnLoad\" rel=\"Ext.form.Basic-cfg-trackResetOnLoad\" class=\"docClass\">trackResetOnLoad</a> property is set to true.</p>\n",
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
        "doc": "<p>Resumes firing events (see <a href=\"#/api/Ext.form.field.Spinner-method-suspendEvents\" rel=\"Ext.form.field.Spinner-method-suspendEvents\" class=\"docClass\">suspendEvents</a>).</p>\n\n<p>If events were suspended using the <code>**queueSuspended**</code> parameter, then all events fired\nduring event suspension will be sent to any listeners now.</p>\n",
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
        "linenr": 274,
        "owner": "Ext.state.Stateful",
        "html_filename": "Stateful.html",
        "href": "Stateful.html#Ext-state-Stateful-method-savePropToState",
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
            "name": "propName",
            "doc": "<p>The name of the property to save.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "state",
            "doc": "<p>The state object in to which to save the property.</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "stateName",
            "doc": "<p>(optional) The name to use for the property in state.</p>\n"
          }
        ],
        "alias": null,
        "name": "savePropToState",
        "shortDoc": "Conditionally saves a single property from this object to the given state object. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/state/Stateful.js",
        "doc": "<p>Conditionally saves a single property from this object to the given state object.\nThe idea is to only save state which has changed from the initial state so that\ncurrent software settings do not override future software settings. Only those\nvalues that are user-changed state should be saved.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if the property was saved, false if not.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 603,
        "owner": "Ext.form.field.Text",
        "html_filename": "Text.html",
        "href": "Text.html#Ext-form-field-Text-method-selectText",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Number",
            "properties": [

            ],
            "optional": true,
            "name": "start",
            "doc": "<p>(optional) The index where the selection should start (defaults to 0)</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": true,
            "name": "end",
            "doc": "<p>(optional) The index where the selection should end (defaults to the text length)</p>\n"
          }
        ],
        "alias": null,
        "name": "selectText",
        "shortDoc": "Selects text in this field ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Text.js",
        "doc": "<p>Selects text in this field</p>\n",
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
        "linenr": 357,
        "owner": "Ext.util.Animate",
        "html_filename": "Animate.html",
        "href": "Animate.html#Ext-util-Animate-method-sequenceFx",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "sequenceFx",
        "shortDoc": "Ensures that all effects queued after sequenceFx is called on this object are\nrun in sequence. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/util/Animate.js",
        "doc": "<p>Ensures that all effects queued after sequenceFx is called on this object are\nrun in sequence.  This is the opposite of <a href=\"#/api/Ext.form.field.Spinner-method-syncFx\" rel=\"Ext.form.field.Spinner-method-syncFx\" class=\"docClass\">syncFx</a>.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 228,
        "owner": "Ext.util.Floating",
        "html_filename": "Floating.html",
        "href": "Floating.html#Ext-util-Floating-method-setActive",
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
            "name": "active",
            "doc": "<p>True to activate the Component, false to deactivate it (defaults to false)</p>\n"
          },
          {
            "type": "Ext.Component",
            "properties": [

            ],
            "optional": false,
            "name": "newActive",
            "doc": "<p>The newly active Component which is taking over topmost zIndex position.</p>\n"
          }
        ],
        "alias": null,
        "name": "setActive",
        "shortDoc": "This method is called internally by Ext.ZIndexManager to signal that a floating Component has either been\nmoved to th...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/util/Floating.js",
        "doc": "<p>This method is called internally by <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">Ext.ZIndexManager</a> to signal that a floating Component has either been\nmoved to the top of its zIndex stack, or pushed from the top of its zIndex stack.</p>\n\n<p>If a <em>Window</em> is superceded by another Window, deactivating it hides its shadow.</p>\n\n<p>This method also fires the <a href=\"#/api/Ext.Component-event-activate\" rel=\"Ext.Component-event-activate\" class=\"docClass\">activate</a> or\n<a href=\"#/api/Ext.Component-event-deactivate\" rel=\"Ext.Component-event-deactivate\" class=\"docClass\">deactivate</a> event depending on which action occurred.</p>\n",
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
        "linenr": 354,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-method-setActiveError",
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
            "name": "msg",
            "doc": "<p>The error message</p>\n"
          }
        ],
        "alias": null,
        "name": "setActiveError",
        "shortDoc": "Sets the active error message to the given string. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>Sets the active error message to the given string. This replaces the entire error message\ncontents with the given string. Also see <a href=\"#/api/Ext.form.field.Spinner-method-setActiveErrors\" rel=\"Ext.form.field.Spinner-method-setActiveErrors\" class=\"docClass\">setActiveErrors</a> which accepts an Array of\nmessages and formats them according to the <a href=\"#/api/Ext.form.field.Spinner-cfg-activeErrorsTpl\" rel=\"Ext.form.field.Spinner-cfg-activeErrorsTpl\" class=\"docClass\">activeErrorsTpl</a>.</p>\n\n<p>Note that this only updates the error message element's text and attributes, you'll have\nto call doComponentLayout to actually update the field's layout to match. If the field extends\n<a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> you should call <a href=\"#/api/Ext.form.field.Base-method-markInvalid\" rel=\"Ext.form.field.Base-method-markInvalid\" class=\"docClass\">markInvalid</a> instead.</p>\n",
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
        "linenr": 380,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-method-setActiveErrors",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String[]",
            "properties": [

            ],
            "optional": false,
            "name": "errors",
            "doc": "<p>The error messages</p>\n"
          }
        ],
        "alias": null,
        "name": "setActiveErrors",
        "shortDoc": "Set the active error message to an Array of error messages. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>Set the active error message to an Array of error messages. The messages are formatted into\na single message string using the <a href=\"#/api/Ext.form.field.Spinner-cfg-activeErrorsTpl\" rel=\"Ext.form.field.Spinner-cfg-activeErrorsTpl\" class=\"docClass\">activeErrorsTpl</a>. Also see <a href=\"#/api/Ext.form.field.Spinner-method-setActiveError\" rel=\"Ext.form.field.Spinner-method-setActiveError\" class=\"docClass\">setActiveError</a>\nwhich allows setting the entire error contents with a single string.</p>\n\n<p>Note that this only updates the error message element's text and attributes, you'll have\nto call doComponentLayout to actually update the field's layout to match. If the field extends\n<a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> you should call <a href=\"#/api/Ext.form.field.Base-method-markInvalid\" rel=\"Ext.form.field.Base-method-markInvalid\" class=\"docClass\">markInvalid</a> instead.</p>\n",
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
        "linenr": 368,
        "owner": "Ext.Component",
        "html_filename": "Component.html",
        "href": "Component.html#Ext-Component-method-setAutoScroll",
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
            "name": "scroll",
            "doc": "<p>True to allow the Component to auto scroll.</p>\n"
          }
        ],
        "alias": null,
        "name": "setAutoScroll",
        "shortDoc": "Sets the overflow on the content element of the component. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Component.js",
        "doc": "<p>Sets the overflow on the content element of the component.</p>\n",
        "return": {
          "type": "Ext.Component",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 2516,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setDisabled",
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
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "setDisabled",
        "shortDoc": "Enable or disable the component. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Enable or disable the component.</p>\n",
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
        "linenr": 3090,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setDocked",
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
            "name": "dock",
            "doc": "\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "layoutParent",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "setDocked",
        "shortDoc": "Sets the dock position of this component in its parent panel. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Sets the dock position of this component in its parent panel. Note that\nthis only has effect if this item is part of the dockedItems collection\nof a parent that has a DockLayout (note that any Panel has a DockLayout\nby default)</p>\n",
        "return": {
          "type": "Ext.Component",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 249,
        "owner": "Ext.form.field.Trigger",
        "html_filename": "Trigger.html",
        "href": "Trigger.html#Ext-form-field-Trigger-method-setEditable",
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
            "name": "editable",
            "doc": "<p>True to allow the user to directly edit the field text. If false is passed, the user\nwill only be able to modify the field using the trigger. Will also add a click event to the text field which\nwill call the trigger.</p>\n"
          }
        ],
        "alias": null,
        "name": "setEditable",
        "shortDoc": "Sets the editable state of this field. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Trigger.js",
        "doc": "<p>Sets the editable state of this field. This method is the runtime equivalent of setting the 'editable' config\noption at config time.</p>\n",
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
        "linenr": 437,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-method-setFieldDefaults",
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
            "name": "defaults",
            "doc": "<p>The defaults to apply to the object.</p>\n"
          }
        ],
        "alias": null,
        "name": "setFieldDefaults",
        "shortDoc": "Applies a set of default configuration values to this Labelable instance. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>Applies a set of default configuration values to this Labelable instance. For each of the\nproperties in the given object, check if this component hasOwnProperty that config; if not\nthen it's inheriting a default value from its prototype and we should apply the default value.</p>\n",
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
        "linenr": 350,
        "owner": "Ext.form.field.Base",
        "html_filename": "Base.html",
        "href": "Base.html#Ext-form-field-Base-method-setFieldStyle",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/Object/Function",
            "properties": [

            ],
            "optional": false,
            "name": "style",
            "doc": "<p>The style(s) to apply. Should be a valid argument to <a href=\"#/api/Ext.Element-method-applyStyles\" rel=\"Ext.Element-method-applyStyles\" class=\"docClass\">Ext.Element.applyStyles</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "setFieldStyle",
        "shortDoc": "Set the CSS style of the field input element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Base.js",
        "doc": "<p>Set the <a href=\"#/api/Ext.form.field.Spinner-cfg-fieldStyle\" rel=\"Ext.form.field.Spinner-cfg-fieldStyle\" class=\"docClass\">CSS style</a> of the <a href=\"#/api/Ext.form.field.Spinner-property-inputEl\" rel=\"Ext.form.field.Spinner-property-inputEl\" class=\"docClass\">field input element</a>.</p>\n",
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
        "linenr": 2994,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setHeight",
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
            "name": "height",
            "doc": "<p>The new height to set. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new height in the <a href=\"#/api/Ext.form.field.Spinner-method-getEl\" rel=\"Ext.form.field.Spinner-method-getEl\" class=\"docClass\">Element</a>'s <a href=\"#/api/Ext.Element-property-defaultUnit\" rel=\"Ext.Element-property-defaultUnit\" class=\"docClass\">Ext.Element.defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS height style.</li>\n<li><i>undefined</i> to leave the height unchanged.</li>\n</ul></div></p>\n"
          }
        ],
        "alias": null,
        "name": "setHeight",
        "shortDoc": "Sets the height of the component. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Sets the height of the component.  This method fires the <a href=\"#/api/Ext.form.field.Spinner-event-resize\" rel=\"Ext.form.field.Spinner-event-resize\" class=\"docClass\">resize</a> event.</p>\n",
        "return": {
          "type": "Ext.Component",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 3055,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setLoading",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Boolean/Object/String",
            "properties": [

            ],
            "optional": false,
            "name": "load",
            "doc": "<p>True to show the default LoadMask, a config object\nthat will be passed to the LoadMask constructor, or a message String to show. False to\nhide the current LoadMask.</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": false,
            "name": "targetEl",
            "doc": "<p>True to mask the targetEl of this Component instead of the this.el.\nFor example, setting this to true on a Panel will cause only the body to be masked. (defaults to false)</p>\n"
          }
        ],
        "alias": null,
        "name": "setLoading",
        "shortDoc": "This method allows you to show or hide a LoadMask on top of this component. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>This method allows you to show or hide a LoadMask on top of this component.</p>\n",
        "return": {
          "type": "Ext.LoadMask",
          "properties": null,
          "name": "return",
          "doc": "<p>The LoadMask instance that has just been shown.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 511,
        "owner": "Ext.Component",
        "html_filename": "Component.html",
        "href": "Component.html#Ext-Component-method-setPagePosition",
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
            "name": "x",
            "doc": "<p>The new x position</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "y",
            "doc": "<p>The new y position</p>\n"
          },
          {
            "type": "Boolean/Object",
            "properties": [

            ],
            "optional": false,
            "name": "animate",
            "doc": "<p>True to animate the Component into its new position.\nYou may also pass an animation configuration.</p>\n"
          }
        ],
        "alias": null,
        "name": "setPagePosition",
        "shortDoc": "Sets the page XY position of the component. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Component.js",
        "doc": "<p>Sets the page XY position of the component.  To set the left and top instead, use <a href=\"#/api/Ext.form.field.Spinner-method-setPosition\" rel=\"Ext.form.field.Spinner-method-setPosition\" class=\"docClass\">setPosition</a>.\nThis method fires the <a href=\"#/api/Ext.form.field.Spinner-event-move\" rel=\"Ext.form.field.Spinner-event-move\" class=\"docClass\">move</a> event.</p>\n",
        "return": {
          "type": "Ext.Component",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 427,
        "owner": "Ext.Component",
        "html_filename": "Component.html",
        "href": "Component.html#Ext-Component-method-setPosition",
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
            "name": "left",
            "doc": "<p>The new left</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "top",
            "doc": "<p>The new top</p>\n"
          },
          {
            "type": "Boolean/Object",
            "properties": [

            ],
            "optional": false,
            "name": "animate",
            "doc": "<p>If true, the Component is <i>animated</i> into its new position. You may also pass an animation configuration.</p>\n"
          }
        ],
        "alias": null,
        "name": "setPosition",
        "shortDoc": "Sets the left and top of the component. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Component.js",
        "doc": "<p>Sets the left and top of the component.  To set the page XY position instead, use <a href=\"#/api/Ext.form.field.Spinner-method-setPagePosition\" rel=\"Ext.form.field.Spinner-method-setPagePosition\" class=\"docClass\">setPagePosition</a>.\nThis method fires the <a href=\"#/api/Ext.form.field.Spinner-event-move\" rel=\"Ext.form.field.Spinner-event-move\" class=\"docClass\">move</a> event.</p>\n",
        "return": {
          "type": "Ext.Component",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 464,
        "owner": "Ext.form.field.Base",
        "html_filename": "Base.html",
        "href": "Base.html#Ext-form-field-Base-method-setRawValue",
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
        "name": "setRawValue",
        "shortDoc": "Sets the field's raw value directly, bypassing value conversion, change detection, and\nvalidation. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Base.js",
        "doc": "<p>Sets the field's raw value directly, bypassing <a href=\"#/api/Ext.form.field.Spinner-method-valueToRaw\" rel=\"Ext.form.field.Spinner-method-valueToRaw\" class=\"docClass\">value conversion</a>, change detection, and\nvalidation. To set the value with these additional inspections see <a href=\"#/api/Ext.form.field.Spinner-method-setValue\" rel=\"Ext.form.field.Spinner-method-setValue\" class=\"docClass\">setValue</a>.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>value The field value that is set</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 263,
        "owner": "Ext.form.field.Trigger",
        "html_filename": "Trigger.html",
        "href": "Trigger.html#Ext-form-field-Trigger-method-setReadOnly",
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
            "name": "readOnly",
            "doc": "<p>True to prevent the user changing the field and explicitly hide the trigger. Setting\nthis to true will superceed settings editable and hideTrigger. Setting this to false will defer back to editable\nand hideTrigger.</p>\n"
          }
        ],
        "alias": null,
        "name": "setReadOnly",
        "shortDoc": "Sets the read-only state of this field. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Trigger.js",
        "doc": "<p>Sets the read-only state of this field. This method is the runtime equivalent of setting the 'readOnly' config\noption at config time.</p>\n",
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
        "linenr": 2733,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setSize",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Number/String/Object",
            "properties": [

            ],
            "optional": false,
            "name": "width",
            "doc": "<p>The new width to set. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new width in the <a href=\"#/api/Ext.form.field.Spinner-method-getEl\" rel=\"Ext.form.field.Spinner-method-getEl\" class=\"docClass\">Element</a>'s <a href=\"#/api/Ext.Element-property-defaultUnit\" rel=\"Ext.Element-property-defaultUnit\" class=\"docClass\">Ext.Element.defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS width style.</li>\n<li>A size object in the format <code>{width: widthValue, height: heightValue}</code>.</li>\n<li><code>undefined</code> to leave the width unchanged.</li>\n</ul></div></p>\n"
          },
          {
            "type": "Number/String",
            "properties": [

            ],
            "optional": false,
            "name": "height",
            "doc": "<p>The new height to set (not required if a size object is passed as the first arg).\nThis may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new height in the <a href=\"#/api/Ext.form.field.Spinner-method-getEl\" rel=\"Ext.form.field.Spinner-method-getEl\" class=\"docClass\">Element</a>'s <a href=\"#/api/Ext.Element-property-defaultUnit\" rel=\"Ext.Element-property-defaultUnit\" class=\"docClass\">Ext.Element.defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS height style. Animation may <b>not</b> be used.</li>\n<li><code>undefined</code> to leave the height unchanged.</li>\n</ul></div></p>\n"
          }
        ],
        "alias": null,
        "name": "setSize",
        "shortDoc": "Sets the width and height of this Component. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Sets the width and height of this Component. This method fires the <a href=\"#/api/Ext.form.field.Spinner-event-resize\" rel=\"Ext.form.field.Spinner-event-resize\" class=\"docClass\">resize</a> event. This method can accept\neither width and height as separate arguments, or you can pass a size object like <code>{width:10, height:20}</code>.</p>\n",
        "return": {
          "type": "Ext.Component",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 247,
        "owner": "Ext.form.field.Spinner",
        "html_filename": "Spinner.html",
        "href": "Spinner.html#Ext-form-field-Spinner-method-setSpinDownEnabled",
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
            "name": "enabled",
            "doc": "<p>true to enable the button, false to disable it.</p>\n"
          }
        ],
        "alias": null,
        "name": "setSpinDownEnabled",
        "shortDoc": "Sets whether the spinner down button is enabled. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Spinner.js",
        "doc": "<p>Sets whether the spinner down button is enabled.</p>\n",
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
        "linenr": 234,
        "owner": "Ext.form.field.Spinner",
        "html_filename": "Spinner.html",
        "href": "Spinner.html#Ext-form-field-Spinner-method-setSpinUpEnabled",
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
            "name": "enabled",
            "doc": "<p>true to enable the button, false to disable it.</p>\n"
          }
        ],
        "alias": null,
        "name": "setSpinUpEnabled",
        "shortDoc": "Sets whether the spinner up button is enabled. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Spinner.js",
        "doc": "<p>Sets whether the spinner up button is enabled.</p>\n",
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
        "linenr": 1569,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setUI",
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
            "name": "ui",
            "doc": "<p>The new UI for the component</p>\n"
          }
        ],
        "alias": null,
        "name": "setUI",
        "shortDoc": "Sets the UI for the component. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Sets the UI for the component. This will remove any existing UIs on the component. It will also\nloop through any uiCls set on the component and rename them so they include the new UI</p>\n",
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
        "linenr": 479,
        "owner": "Ext.form.field.Text",
        "html_filename": "Text.html",
        "href": "Text.html#Ext-form-field-Text-method-setValue",
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
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Text.js",
        "doc": "<p>Sets a data value into the field and runs the change detection and validation. Also applies any configured\n<a href=\"#/api/Ext.form.field.Spinner-cfg-emptyText\" rel=\"Ext.form.field.Spinner-cfg-emptyText\" class=\"docClass\">emptyText</a> for text fields. To set the value directly without these inspections see <a href=\"#/api/Ext.form.field.Spinner-method-setRawValue\" rel=\"Ext.form.field.Spinner-method-setRawValue\" class=\"docClass\">setRawValue</a>.</p>\n",
        "return": {
          "type": "Ext.form.field.Text",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 2399,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setVisible",
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
            "name": "visible",
            "doc": "<p>True to show, false to hide</p>\n"
          }
        ],
        "alias": null,
        "name": "setVisible",
        "shortDoc": "Convenience function to hide or show this component by boolean. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Convenience function to hide or show this component by boolean.</p>\n",
        "return": {
          "type": "Ext.Component",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 2982,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setWidth",
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
            "name": "width",
            "doc": "<p>The new width to setThis may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new width in the <a href=\"#/api/Ext.form.field.Spinner-method-getEl\" rel=\"Ext.form.field.Spinner-method-getEl\" class=\"docClass\">Element</a>'s <a href=\"#/api/Ext.Element-property-defaultUnit\" rel=\"Ext.Element-property-defaultUnit\" class=\"docClass\">Ext.Element.defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS width style.</li>\n</ul></div></p>\n"
          }
        ],
        "alias": null,
        "name": "setWidth",
        "shortDoc": "Sets the width of the component. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Sets the width of the component.  This method fires the <a href=\"#/api/Ext.form.field.Spinner-event-resize\" rel=\"Ext.form.field.Spinner-event-resize\" class=\"docClass\">resize</a> event.</p>\n",
        "return": {
          "type": "Ext.Component",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 664,
        "owner": "Ext.Component",
        "html_filename": "Component.html",
        "href": "Component.html#Ext-Component-method-show",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/Ext.Element",
            "properties": [

            ],
            "optional": true,
            "name": "animateTarget",
            "doc": "<p>(optional) <b>only valid for <a href=\"#/api/Ext.form.field.Spinner-cfg-floating\" rel=\"Ext.form.field.Spinner-cfg-floating\" class=\"docClass\">floating</a> Components such as\n<a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a>s or <a href=\"#/api/Ext.tip.ToolTip\" rel=\"Ext.tip.ToolTip\" class=\"docClass\">ToolTip</a>s, or regular Components which have been configured\nwith <code>floating: true</code>.</b> The target from which the Component should\nanimate from while opening (defaults to null with no animation)</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "callback",
            "doc": "<p>(optional) A callback function to call after the Component is displayed. Only necessary if animation was specified.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the callback is executed. Defaults to this Component.</p>\n"
          }
        ],
        "alias": null,
        "name": "show",
        "shortDoc": "Shows this Component, rendering it first if autoRender or floating are true. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Component.js",
        "doc": "<p>Shows this Component, rendering it first if <a href=\"#/api/Ext.form.field.Spinner-cfg-autoRender\" rel=\"Ext.form.field.Spinner-cfg-autoRender\" class=\"docClass\">autoRender</a> or <a href=\"#/api/Ext.form.field.Spinner-cfg-floating\" rel=\"Ext.form.field.Spinner-cfg-floating\" class=\"docClass\">floating</a> are <code>true</code>.</p>\n\n\n<p>After being shown, a <a href=\"#/api/Ext.form.field.Spinner-cfg-floating\" rel=\"Ext.form.field.Spinner-cfg-floating\" class=\"docClass\">floating</a> Component (such as a <a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Ext.window.Window</a>), is activated it and brought to the front of\nits <a href=\"#/api/Ext.form.field.Spinner-property-zIndexManager\" rel=\"Ext.form.field.Spinner-property-zIndexManager\" class=\"docClass\">z-index stack</a>.</p>\n\n",
        "return": {
          "type": "Ext.Component",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 220,
        "owner": "Ext.form.field.Spinner",
        "html_filename": "Spinner.html",
        "href": "Spinner.html#Ext-form-field-Spinner-method-spinDown",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "spinDown",
        "shortDoc": "Triggers the spinner to step down; fires the spin and spindown events and calls the\nonSpinDown method. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Spinner.js",
        "doc": "<p>Triggers the spinner to step down; fires the <a href=\"#/api/Ext.form.field.Spinner-event-spin\" rel=\"Ext.form.field.Spinner-event-spin\" class=\"docClass\">spin</a> and <a href=\"#/api/Ext.form.field.Spinner-event-spindown\" rel=\"Ext.form.field.Spinner-event-spindown\" class=\"docClass\">spindown</a> events and calls the\n<a href=\"#/api/Ext.form.field.Spinner-method-onSpinDown\" rel=\"Ext.form.field.Spinner-method-onSpinDown\" class=\"docClass\">onSpinDown</a> method. Does nothing if the field is <a href=\"#/api/Ext.form.field.Spinner-cfg-disabled\" rel=\"Ext.form.field.Spinner-cfg-disabled\" class=\"docClass\">disabled</a> or if <a href=\"#/api/Ext.form.field.Spinner-cfg-spinDownEnabled\" rel=\"Ext.form.field.Spinner-cfg-spinDownEnabled\" class=\"docClass\">spinDownEnabled</a>\nis false.</p>\n",
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
        "linenr": 206,
        "owner": "Ext.form.field.Spinner",
        "html_filename": "Spinner.html",
        "href": "Spinner.html#Ext-form-field-Spinner-method-spinUp",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "spinUp",
        "shortDoc": "Triggers the spinner to step up; fires the spin and spinup events and calls the\nonSpinUp method. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Spinner.js",
        "doc": "<p>Triggers the spinner to step up; fires the <a href=\"#/api/Ext.form.field.Spinner-event-spin\" rel=\"Ext.form.field.Spinner-event-spin\" class=\"docClass\">spin</a> and <a href=\"#/api/Ext.form.field.Spinner-event-spinup\" rel=\"Ext.form.field.Spinner-event-spinup\" class=\"docClass\">spinup</a> events and calls the\n<a href=\"#/api/Ext.form.field.Spinner-method-onSpinUp\" rel=\"Ext.form.field.Spinner-method-onSpinUp\" class=\"docClass\">onSpinUp</a> method. Does nothing if the field is <a href=\"#/api/Ext.form.field.Spinner-cfg-disabled\" rel=\"Ext.form.field.Spinner-cfg-disabled\" class=\"docClass\">disabled</a> or if <a href=\"#/api/Ext.form.field.Spinner-cfg-spinUpEnabled\" rel=\"Ext.form.field.Spinner-cfg-spinUpEnabled\" class=\"docClass\">spinUpEnabled</a>\nis false.</p>\n",
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
        "linenr": 335,
        "owner": "Ext.util.Animate",
        "html_filename": "Animate.html",
        "href": "Animate.html#Ext-util-Animate-method-stopAnimation",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "stopAnimation",
        "shortDoc": "Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/util/Animate.js",
        "doc": "<p>Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that haven't started yet.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>The Element</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 326,
        "owner": "Ext.util.Animate",
        "html_filename": "Animate.html",
        "href": "Animate.html#Ext-util-Animate-method-stopFx",
        "protected": false,
        "deprecated": {
          "text": "<p>Replaced by <a href=\"#/api/Ext.button.Split-method-stopAnimation\" rel=\"Ext.button.Split-method-stopAnimation\" class=\"docClass\">stopAnimation</a></p>\n\n\n\n",
          "tagname": "deprecated",
          "version": "4.0",
          "doc": "Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that haven't started yet."
        },
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "stopFx",
        "shortDoc": "Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/util/Animate.js",
        "doc": "<p>Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that haven't started yet.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>The Element</p>\n"
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
            "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.form.field.Spinner-method-resumeEvents\" rel=\"Ext.form.field.Spinner-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events.</p>\n"
          }
        ],
        "alias": null,
        "name": "suspendEvents",
        "shortDoc": "Suspends the firing of all events. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Suspends the firing of all events. (see <a href=\"#/api/Ext.form.field.Spinner-method-resumeEvents\" rel=\"Ext.form.field.Spinner-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
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
        "linenr": 345,
        "owner": "Ext.util.Animate",
        "html_filename": "Animate.html",
        "href": "Animate.html#Ext-util-Animate-method-syncFx",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "syncFx",
        "shortDoc": "Ensures that all effects queued after syncFx is called on this object are\nrun concurrently. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/util/Animate.js",
        "doc": "<p>Ensures that all effects queued after syncFx is called on this object are\nrun concurrently.  This is the opposite of <a href=\"#/api/Ext.form.field.Spinner-method-sequenceFx\" rel=\"Ext.form.field.Spinner-method-sequenceFx\" class=\"docClass\">sequenceFx</a>.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 256,
        "owner": "Ext.util.Floating",
        "html_filename": "Floating.html",
        "href": "Floating.html#Ext-util-Floating-method-toBack",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "toBack",
        "shortDoc": "Sends this Component to the back of (lower z-index than) any other visible windows ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/util/Floating.js",
        "doc": "<p>Sends this Component to the back of (lower z-index than) any other visible windows</p>\n",
        "return": {
          "type": "Ext.Component",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 197,
        "owner": "Ext.util.Floating",
        "html_filename": "Floating.html",
        "href": "Floating.html#Ext-util-Floating-method-toFront",
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
            "name": "preventFocus",
            "doc": "<p>(optional) Specify <code>true</code> to prevent the Component from being focused.</p>\n"
          }
        ],
        "alias": null,
        "name": "toFront",
        "shortDoc": "Brings this floating Component to the front of any other visible, floating Components managed by the same ZIndexManag...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/util/Floating.js",
        "doc": "<p>Brings this floating Component to the front of any other visible, floating Components managed by the same <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a></p>\n\n<p>If this Component is modal, inserts the modal mask just below this Component in the z-index stack.</p>\n",
        "return": {
          "type": "Ext.Component",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
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
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.form.field.Spinner-method-addListener\" rel=\"Ext.form.field.Spinner-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope originally specified for the handler. It must be the same as the\nscope argument specified in the original call to <a href=\"#/api/Ext.form.field.Spinner-method-addListener\" rel=\"Ext.form.field.Spinner-method-addListener\" class=\"docClass\">addListener</a> or the listener will not be removed.</p>\n"
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.form.field.Spinner-method-removeListener\" rel=\"Ext.form.field.Spinner-method-removeListener\" class=\"docClass\">removeListener</a>.</p>\n\n<p>Removes an event handler.</p>\n",
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
        "linenr": 397,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-method-unsetActiveError",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "unsetActiveError",
        "shortDoc": "Clears the active error message(s). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>Clears the active error message(s).</p>\n\n<p>Note that this only clears the error message element's text and attributes, you'll have\nto call doComponentLayout to actually update the field's layout to match. If the field extends\n<a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> you should call <a href=\"#/api/Ext.form.field.Base-method-clearInvalid\" rel=\"Ext.form.field.Base-method-clearInvalid\" class=\"docClass\">clearInvalid</a> instead.</p>\n",
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
        "linenr": 2119,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-up",
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
            "name": "selector",
            "doc": "<p>(Optional) The simple selector to test.</p>\n"
          }
        ],
        "alias": null,
        "name": "up",
        "shortDoc": "Walks up the ownerCt axis looking for an ancestor Container which matches\nthe passed simple selector. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Walks up the <code>ownerCt</code> axis looking for an ancestor Container which matches\nthe passed simple selector.</p>\n\n\n<p>Example:\n<pre><code>var owningTabPanel = grid.up('tabpanel');\n</code></pre>\n\n",
        "return": {
          "type": "Ext.container.Container",
          "properties": null,
          "name": "return",
          "doc": "<p>The matching ancestor Container (or <code>undefined</code> if no match was found).</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 2367,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-update",
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
            "name": "htmlOrData",
            "doc": "<p>If this component has been configured with a template via the tpl config\nthen it will use this argument as data to populate the template.\nIf this component was not configured with a template, the components\ncontent area will be updated via <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> update</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "loadScripts",
            "doc": "<p>(optional) Only legitimate when using the html configuration. Defaults to false</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "callback",
            "doc": "<p>(optional) Only legitimate when using the html configuration. Callback to execute when scripts have finished loading</p>\n"
          }
        ],
        "alias": null,
        "name": "update",
        "shortDoc": "Update the content area of a component. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Update the content area of a component.</p>\n",
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
        "linenr": 561,
        "owner": "Ext.Component",
        "html_filename": "Component.html",
        "href": "Component.html#Ext-Component-method-updateBox",
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
            "name": "box",
            "doc": "<p>An object in the format {x, y, width, height}</p>\n"
          }
        ],
        "alias": null,
        "name": "updateBox",
        "shortDoc": "Sets the current box measurements of the component's underlying element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Component.js",
        "doc": "<p>Sets the current box measurements of the component's underlying element.</p>\n",
        "return": {
          "type": "Ext.Component",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
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
        "doc": "<p>Returns whether or not the field value is currently valid by <a href=\"#/api/Ext.form.field.Spinner-method-getErrors\" rel=\"Ext.form.field.Spinner-method-getErrors\" class=\"docClass\">validating</a> the field's current\nvalue, and fires the <a href=\"#/api/Ext.form.field.Spinner-event-validitychange\" rel=\"Ext.form.field.Spinner-event-validitychange\" class=\"docClass\">validitychange</a> event if the field's validity has changed since the last validation.\n<strong>Note</strong>: <a href=\"#/api/Ext.form.field.Spinner-cfg-disabled\" rel=\"Ext.form.field.Spinner-cfg-disabled\" class=\"docClass\">disabled</a> fields are always treated as valid.</p>\n\n<p>Custom implementations of this method are allowed to have side-effects such as triggering error message display.\nTo validate without side-effects, use <a href=\"#/api/Ext.form.field.Spinner-method-isValid\" rel=\"Ext.form.field.Spinner-method-isValid\" class=\"docClass\">isValid</a>.</p>\n",
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
        "linenr": 716,
        "owner": "Ext.form.field.Base",
        "html_filename": "Base.html",
        "href": "Base.html#Ext-form-field-Base-method-validateValue",
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
            "doc": "<p>The value to validate</p>\n"
          }
        ],
        "alias": null,
        "name": "validateValue",
        "shortDoc": "Uses getErrors to build an array of validation errors. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Base.js",
        "doc": "<p>Uses <a href=\"#/api/Ext.form.field.Spinner-method-getErrors\" rel=\"Ext.form.field.Spinner-method-getErrors\" class=\"docClass\">getErrors</a> to build an array of validation errors. If any errors are found, they are passed to\n<a href=\"#/api/Ext.form.field.Spinner-method-markInvalid\" rel=\"Ext.form.field.Spinner-method-markInvalid\" class=\"docClass\">markInvalid</a> and false is returned, otherwise true is returned.</p>\n\n<p>Previously, subclasses were invited to provide an implementation of this to process validations - from 3.2\nonwards <a href=\"#/api/Ext.form.field.Spinner-method-getErrors\" rel=\"Ext.form.field.Spinner-method-getErrors\" class=\"docClass\">getErrors</a> should be overridden instead.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if all validations passed, false if one or more failed</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 482,
        "owner": "Ext.form.field.Base",
        "html_filename": "Base.html",
        "href": "Base.html#Ext-form-field-Base-method-valueToRaw",
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
            "doc": "<p>The mixed-type value to convert to the raw representation.</p>\n"
          }
        ],
        "alias": null,
        "name": "valueToRaw",
        "shortDoc": "Converts a mixed-type value to a raw representation suitable for displaying in the field. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Base.js",
        "doc": "<p>Converts a mixed-type value to a raw representation suitable for displaying in the field. This allows controlling\nhow value objects passed to <a href=\"#/api/Ext.form.field.Spinner-method-setValue\" rel=\"Ext.form.field.Spinner-method-setValue\" class=\"docClass\">setValue</a> are shown to the user, including localization. For instance, for a\n<a href=\"#/api/Ext.form.field.Date\" rel=\"Ext.form.field.Date\" class=\"docClass\">Ext.form.field.Date</a>, this would control how a Date object passed to <a href=\"#/api/Ext.form.field.Spinner-method-setValue\" rel=\"Ext.form.field.Spinner-method-setValue\" class=\"docClass\">setValue</a> would be converted\nto a String for display in the field.</p>\n\n<p>See <a href=\"#/api/Ext.form.field.Spinner-method-rawToValue\" rel=\"Ext.form.field.Spinner-method-rawToValue\" class=\"docClass\">rawToValue</a> for the opposite conversion.</p>\n\n<p>The base implementation simply does a standard toString conversion, and converts <a href=\"#/api/Ext-method-isEmpty\" rel=\"Ext-method-isEmpty\" class=\"docClass\">empty values</a>\nto an empty string.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>The converted raw value.</p>\n"
        }
      }
    ],
    "property": [
      {
        "static": false,
        "type": "Ext.Element",
        "inheritable": false,
        "properties": null,
        "linenr": 299,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-property-bodyEl",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "bodyEl",
        "shortDoc": "The div Element wrapping the component's contents. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>The div Element wrapping the component's contents. Only available after the component has been rendered.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 473,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-draggable",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "draggable",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Read-only property indicating whether or not the component can be dragged</p>\n"
      },
      {
        "static": false,
        "type": "Ext.Element",
        "inheritable": false,
        "properties": null,
        "linenr": 306,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-property-errorEl",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "errorEl",
        "shortDoc": "The div Element that will contain the component's error message(s). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>The div Element that will contain the component's error message(s). Note that depending on the\nconfigured <a href=\"#/api/Ext.form.field.Spinner-cfg-msgTarget\" rel=\"Ext.form.field.Spinner-cfg-msgTarget\" class=\"docClass\">msgTarget</a>, this element may be hidden in favor of some other form of\npresentation, but will always be present in the DOM for use by assistive technologies.</p>\n"
      },
      {
        "static": false,
        "type": "Ext.Container",
        "inheritable": false,
        "properties": null,
        "linenr": 228,
        "owner": "Ext.Component",
        "html_filename": "Component.html",
        "href": "Component.html#Ext-Component-property-floatParent",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "floatParent",
        "shortDoc": "Optional. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Component.js",
        "doc": "<p>Optional. Only present for <a href=\"#/api/Ext.form.field.Spinner-cfg-floating\" rel=\"Ext.form.field.Spinner-cfg-floating\" class=\"docClass\">floating</a> Components which were inserted as descendant items of floating Containers.</p>\n\n\n<p>Floating Components that are programatically <a href=\"#/api/Ext.Component-event-render\" rel=\"Ext.Component-event-render\" class=\"docClass\">rendered</a> will not have a <code>floatParent</code> property.</p>\n\n\n<p>For <a href=\"#/api/Ext.form.field.Spinner-cfg-floating\" rel=\"Ext.form.field.Spinner-cfg-floating\" class=\"docClass\">floating</a> Components which are child items of a Container, the floatParent will be the floating ancestor Container which is\nresponsible for the base z-index value of all its floating descendants. It provides a <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a> which provides\nz-indexing services for all its descendant floating Components.</p>\n\n\n<p>For example, the dropdown <a href=\"#/api/Ext.view.BoundList\" rel=\"Ext.view.BoundList\" class=\"docClass\">BoundList</a> of a ComboBox which is in a Window will have the Window as its\n<code>floatParent</code></p>\n\n\n<p>See <a href=\"#/api/Ext.form.field.Spinner-cfg-floating\" rel=\"Ext.form.field.Spinner-cfg-floating\" class=\"docClass\">floating</a> and <a href=\"#/api/Ext.form.field.Spinner-property-zIndexManager\" rel=\"Ext.form.field.Spinner-property-zIndexManager\" class=\"docClass\">zIndexManager</a></p>\n\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 255,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-frameSize",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "frameSize",
        "shortDoc": "Read-only property indicating the width of any framing elements which were added within the encapsulating element\nto ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Read-only property indicating the width of any framing elements which were added within the encapsulating element\nto provide graphical, rounded borders. See the <a href=\"#/api/Ext.form.field.Spinner-cfg-frame\" rel=\"Ext.form.field.Spinner-cfg-frame\" class=\"docClass\">frame</a> config.</p>\n\n\n<p> This is an object containing the frame width in pixels for all four sides of the Component containing\nthe following properties:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li><code>top</code> The width of the top framing element in pixels.</li>\n<li><code>right</code> The width of the right framing element in pixels.</li>\n<li><code>bottom</code> The width of the bottom framing element in pixels.</li>\n<li><code>left</code> The width of the left framing element in pixels.</li>\n</ul></div>\n\n"
      },
      {
        "static": false,
        "type": "Ext.Element",
        "inheritable": false,
        "properties": null,
        "linenr": 371,
        "owner": "Ext.form.field.Base",
        "html_filename": "Base.html",
        "href": "Base.html#Ext-form-field-Base-property-inputEl",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "inputEl",
        "shortDoc": "The input Element for this Field. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Base.js",
        "doc": "<p>The input Element for this Field. Only available after the field has been rendered.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 62,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-property-isFieldLabelable",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "isFieldLabelable",
        "shortDoc": "Flag denoting that this object is labelable as a field. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>Flag denoting that this object is labelable as a field. Always true.</p>\n"
      },
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
        "type": "Ext.Element",
        "inheritable": false,
        "properties": null,
        "linenr": 292,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-property-labelEl",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "labelEl",
        "shortDoc": "The label Element for this component. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>The label Element for this component. Only available after the component has been rendered.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 620,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-maskOnDisable",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "maskOnDisable",
        "shortDoc": "This is an internal flag that you use when creating custom components. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>This is an internal flag that you use when creating custom components.\nBy default this is set to true which means that every component gets a mask when its disabled.\nComponents like FieldContainer, FieldSet, Field, Button, Tab override this property to false\nsince they want to implement custom disable logic.</p>\n"
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
        "doc": "<p>The original value of the field as configured in the <a href=\"#/api/Ext.form.field.Spinner-cfg-value\" rel=\"Ext.form.field.Spinner-cfg-value\" class=\"docClass\">value</a> configuration, or as loaded by the last\nform load operation if the form's <a href=\"#/api/Ext.form.Basic-cfg-trackResetOnLoad\" rel=\"Ext.form.Basic-cfg-trackResetOnLoad\" class=\"docClass\">trackResetOnLoad</a> setting is <code>true</code>.</p>\n"
      },
      {
        "static": false,
        "type": "Ext.Container",
        "inheritable": false,
        "properties": null,
        "linenr": 99,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-ownerCt",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "ownerCt",
        "shortDoc": "This Component's owner Container (defaults to undefined, and is set automatically when\nthis Component is added to a C...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>This Component's owner <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a> (defaults to undefined, and is set automatically when\nthis Component is added to a Container).  Read-only.</p>\n\n<p><b>Note</b>: to access items within the Container see <tt><a href=\"#/api/Ext.form.field.Spinner-cfg-itemId\" rel=\"Ext.form.field.Spinner-cfg-itemId\" class=\"docClass\">itemId</a></tt>.</p>\n\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 599,
        "owner": "Ext.AbstractComponent",
        "html_filename": "AbstractComponent.html",
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-rendered",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "rendered",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractComponent.js",
        "doc": "<p>Read-only property indicating whether or not the component has been rendered.</p>\n"
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
        "type": "Ext.Element",
        "inheritable": false,
        "properties": null,
        "linenr": 157,
        "owner": "Ext.form.field.Spinner",
        "html_filename": "Spinner.html",
        "href": "Spinner.html#Ext-form-field-Spinner-property-spinDownEl",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "spinDownEl",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Spinner.js",
        "doc": "<p>The spinner down button element</p>\n"
      },
      {
        "static": false,
        "type": "Ext.Element",
        "inheritable": false,
        "properties": null,
        "linenr": 152,
        "owner": "Ext.form.field.Spinner",
        "html_filename": "Spinner.html",
        "href": "Spinner.html#Ext-form-field-Spinner-property-spinUpEl",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "spinUpEl",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Spinner.js",
        "doc": "<p>The spinner up button element</p>\n"
      },
      {
        "static": false,
        "type": "Ext.CompositeElement",
        "inheritable": false,
        "properties": null,
        "linenr": 169,
        "owner": "Ext.form.field.Trigger",
        "html_filename": "Trigger.html",
        "href": "Trigger.html#Ext-form-field-Trigger-property-triggerEl",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "triggerEl",
        "shortDoc": "A composite of all the trigger button elements. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Trigger.js",
        "doc": "<p>A composite of all the trigger button elements. Only set after the field has been rendered.</p>\n"
      },
      {
        "static": false,
        "type": "Ext.Element",
        "inheritable": false,
        "properties": null,
        "linenr": 155,
        "owner": "Ext.form.field.Trigger",
        "html_filename": "Trigger.html",
        "href": "Trigger.html#Ext-form-field-Trigger-property-triggerWrap",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "triggerWrap",
        "shortDoc": "A reference to the div element wrapping the trigger button(s). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Trigger.js",
        "doc": "<p>A reference to the div element wrapping the trigger button(s). Only set after the field has been rendered.</p>\n"
      },
      {
        "static": false,
        "type": "Ext.ZIndexManager",
        "inheritable": false,
        "properties": null,
        "linenr": 213,
        "owner": "Ext.Component",
        "html_filename": "Component.html",
        "href": "Component.html#Ext-Component-property-zIndexManager",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "zIndexManager",
        "shortDoc": "Optional. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/Component.js",
        "doc": "<p>Optional. Only present for <a href=\"#/api/Ext.form.field.Spinner-cfg-floating\" rel=\"Ext.form.field.Spinner-cfg-floating\" class=\"docClass\">floating</a> Components after they have been rendered.</p>\n\n\n<p>A reference to the ZIndexManager which is managing this Component's z-index.</p>\n\n\n<p>The <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a> maintains a stack of floating Component z-indices, and also provides a single modal\nmask which is insert just beneath the topmost visible modal floating Component.</p>\n\n\n<p>Floating Components may be <a href=\"#/api/Ext.form.field.Spinner-method-toFront\" rel=\"Ext.form.field.Spinner-method-toFront\" class=\"docClass\">brought to the front</a> or <a href=\"#/api/Ext.form.field.Spinner-method-toBack\" rel=\"Ext.form.field.Spinner-method-toBack\" class=\"docClass\">sent to the back</a> of the z-index stack.</p>\n\n\n<p>This defaults to the global <a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">ZIndexManager</a> for floating Components that are programatically\n<a href=\"#/api/Ext.Component-event-render\" rel=\"Ext.Component-event-render\" class=\"docClass\">rendered</a>.</p>\n\n\n<p>For <a href=\"#/api/Ext.form.field.Spinner-cfg-floating\" rel=\"Ext.form.field.Spinner-cfg-floating\" class=\"docClass\">floating</a> Components which are added to a Container, the ZIndexManager is acquired from the first ancestor Container found\nwhich is floating, or if not found the global <a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">ZIndexManager</a> is used.</p>\n\n\n<p>See <a href=\"#/api/Ext.form.field.Spinner-cfg-floating\" rel=\"Ext.form.field.Spinner-cfg-floating\" class=\"docClass\">floating</a> and <a href=\"#/api/Ext.form.field.Spinner-property-floatParent\" rel=\"Ext.form.field.Spinner-property-floatParent\" class=\"docClass\">floatParent</a></p>\n\n"
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
    "Ext.AbstractComponent",
    "Ext.Component",
    "Ext.form.field.Base",
    "Ext.form.field.Text",
    "Ext.form.field.Trigger"
  ],
  "alias": null,
  "name": "Ext.form.field.Spinner",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": true,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/field/Spinner.js",
  "doc": "<p>A field with a pair of up/down spinner buttons. This class is not normally instantiated directly,\ninstead it is subclassed and the <a href=\"#/api/Ext.form.field.Spinner-method-onSpinUp\" rel=\"Ext.form.field.Spinner-method-onSpinUp\" class=\"docClass\">onSpinUp</a> and <a href=\"#/api/Ext.form.field.Spinner-method-onSpinDown\" rel=\"Ext.form.field.Spinner-method-onSpinDown\" class=\"docClass\">onSpinDown</a> methods are implemented\nto handle when the buttons are clicked. A good example of this is the <a href=\"#/api/Ext.form.field.Number\" rel=\"Ext.form.field.Number\" class=\"docClass\">Ext.form.field.Number</a>\nfield which uses the spinner to increment and decrement the field's value by its\n<a href=\"#/api/Ext.form.field.Number-cfg-step\" rel=\"Ext.form.field.Number-cfg-step\" class=\"docClass\">step</a> config value.</p>\n\n<p>For example:</p>\n\n<pre class=\"inline-example\"><code>Ext.define('Ext.ux.CustomSpinner', {\n    extend: 'Ext.form.field.Spinner',\n    alias: 'widget.customspinner',\n\n    // override onSpinUp (using step isn't neccessary)\n    onSpinUp: function() {\n        var me = this;\n        if (!me.readOnly) {\n            var val = me.step; // set the default value to the step value\n            if(me.getValue() !== '') {\n                val = parseInt(me.getValue().slice(0, -5)); // gets rid of \" Pack\"\n            }\n            me.setValue((val + me.step) + ' Pack');\n        }\n    },\n\n    // override onSpinDown\n    onSpinDown: function() {\n        var val, me = this;\n        if (!me.readOnly) {\n            if(me.getValue() !== '') {\n                val = parseInt(me.getValue().slice(0, -5)); // gets rid of \" Pack\"\n            }\n            me.setValue((val - me.step) + ' Pack');\n        }\n    }\n});\n\nExt.create('Ext.form.FormPanel', {\n    title: 'Form with SpinnerField',\n    bodyPadding: 5,\n    width: 350,\n    renderTo: Ext.getBody(),\n    items:[{\n        xtype: 'customspinner',\n        fieldLabel: 'How Much Beer?',\n        step: 6\n    }]\n});\n</code></pre>\n\n<p>By default, pressing the up and down arrow keys will also trigger the onSpinUp and onSpinDown methods;\nto prevent this, set <code><a href=\"#/api/Ext.form.field.Spinner-cfg-keyNavEnabled\" rel=\"Ext.form.field.Spinner-cfg-keyNavEnabled\" class=\"docClass\">keyNavEnabled</a> = false</code>.</p>\n",
  "alternateClassNames": [
    "Ext.form.Spinner"
  ]
});