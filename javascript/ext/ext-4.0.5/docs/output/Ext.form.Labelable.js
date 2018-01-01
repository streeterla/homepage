Ext.data.JsonP.Ext_form_Labelable({
  "static": false,
  "mixedInto": [
    "Ext.form.field.Base",
    "Ext.form.field.HtmlEditor",
    "Ext.form.FieldContainer"
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
  "html_filename": "Labelable.html",
  "allMixins": [

  ],
  "docauthor": "Jason Johnston <jason@sencha.com>",
  "href": "Labelable.html#Ext-form-Labelable",
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
        "doc": "<p>If specified, then the component will be displayed with this value as its active error when\nfirst rendered. Defaults to undefined. Use <a href=\"#/api/Ext.form.Labelable-method-setActiveError\" rel=\"Ext.form.Labelable-method-setActiveError\" class=\"docClass\">setActiveError</a> or <a href=\"#/api/Ext.form.Labelable-method-unsetActiveError\" rel=\"Ext.form.Labelable-method-unsetActiveError\" class=\"docClass\">unsetActiveError</a> to\nchange it after component creation.</p>\n"
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
        "doc": "<p>The template used to format the Array of error messages passed to <a href=\"#/api/Ext.form.Labelable-method-setActiveErrors\" rel=\"Ext.form.Labelable-method-setActiveErrors\" class=\"docClass\">setActiveErrors</a>\ninto a single HTML string. By default this renders each message as an item in an unordered list.</p>\n"
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
        "doc": "<p>Whether to adjust the component's body area to make room for 'side' or 'under'\n<a href=\"#/api/Ext.form.Labelable-cfg-msgTarget\" rel=\"Ext.form.Labelable-cfg-msgTarget\" class=\"docClass\">error messages</a>. Defaults to <tt>true</tt>.</p>\n"
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
        "doc": "<p>An extra CSS class to be applied to the body content element in addition to <a href=\"#/api/Ext.form.Labelable-cfg-fieldBodyCls\" rel=\"Ext.form.Labelable-cfg-fieldBodyCls\" class=\"docClass\">fieldBodyCls</a>.\nDefaults to empty.</p>\n"
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
        "doc": "<p>The label for the field. It gets appended with the <a href=\"#/api/Ext.form.Labelable-cfg-labelSeparator\" rel=\"Ext.form.Labelable-cfg-labelSeparator\" class=\"docClass\">labelSeparator</a>, and its position\nand sizing is determined by the <a href=\"#/api/Ext.form.Labelable-cfg-labelAlign\" rel=\"Ext.form.Labelable-cfg-labelAlign\" class=\"docClass\">labelAlign</a>, <a href=\"#/api/Ext.form.Labelable-cfg-labelWidth\" rel=\"Ext.form.Labelable-cfg-labelWidth\" class=\"docClass\">labelWidth</a>, and <a href=\"#/api/Ext.form.Labelable-cfg-labelPad\" rel=\"Ext.form.Labelable-cfg-labelPad\" class=\"docClass\">labelPad</a>\nconfigs. Defaults to undefined.</p>\n"
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
        "doc": "<p>When set to <tt>true</tt>, the label element (<a href=\"#/api/Ext.form.Labelable-cfg-fieldLabel\" rel=\"Ext.form.Labelable-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> and <a href=\"#/api/Ext.form.Labelable-cfg-labelSeparator\" rel=\"Ext.form.Labelable-cfg-labelSeparator\" class=\"docClass\">labelSeparator</a>) will be\nautomatically hidden if the <a href=\"#/api/Ext.form.Labelable-cfg-fieldLabel\" rel=\"Ext.form.Labelable-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> is empty. Setting this to <tt>false</tt> will cause the empty\nlabel element to be rendered and space to be reserved for it; this is useful if you want a field without a label\nto line up with other labeled fields in the same form. Defaults to <tt>true</tt>.</p>\n\n\n<p>If you wish to unconditionall hide the label even if a non-empty fieldLabel is configured, then set\nthe <a href=\"#/api/Ext.form.Labelable-cfg-hideLabel\" rel=\"Ext.form.Labelable-cfg-hideLabel\" class=\"docClass\">hideLabel</a> config to <tt>true</tt>.</p>\n\n"
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
        "doc": "<p>Set to <tt>true</tt> to completely hide the label element (<a href=\"#/api/Ext.form.Labelable-cfg-fieldLabel\" rel=\"Ext.form.Labelable-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> and <a href=\"#/api/Ext.form.Labelable-cfg-labelSeparator\" rel=\"Ext.form.Labelable-cfg-labelSeparator\" class=\"docClass\">labelSeparator</a>).\nDefaults to <tt>false</tt>.</p>\n\n\n<p>Also see <a href=\"#/api/Ext.form.Labelable-cfg-hideEmptyLabel\" rel=\"Ext.form.Labelable-cfg-hideEmptyLabel\" class=\"docClass\">hideEmptyLabel</a>, which controls whether space will be reserved for an empty fieldLabel.</p>\n\n"
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
        "doc": "<p>Controls the position and alignment of the <a href=\"#/api/Ext.form.Labelable-cfg-fieldLabel\" rel=\"Ext.form.Labelable-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a>. Valid values are:</p>\n\n\n<ul>\n<li><tt>\"left\"</tt> (the default) - The label is positioned to the left of the field, with its text\naligned to the left. Its width is determined by the <a href=\"#/api/Ext.form.Labelable-cfg-labelWidth\" rel=\"Ext.form.Labelable-cfg-labelWidth\" class=\"docClass\">labelWidth</a> config.</li>\n<li><tt>\"top\"</tt> - The label is positioned above the field.</li>\n<li><tt>\"right\"</tt> - The label is positioned to the left of the field, with its text aligned\nto the right. Its width is determined by the <a href=\"#/api/Ext.form.Labelable-cfg-labelWidth\" rel=\"Ext.form.Labelable-cfg-labelWidth\" class=\"docClass\">labelWidth</a> config.</li>\n</ul>\n\n"
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
        "doc": "<p>The CSS class to be applied to the label element. Defaults to 'x-form-item-label'.\nThis (single) CSS class is used to formulate the renderSelector and drives the field\nlayout where it is concatenated with a hyphen ('-') and <a href=\"#/api/Ext.form.Labelable-cfg-labelAlign\" rel=\"Ext.form.Labelable-cfg-labelAlign\" class=\"docClass\">labelAlign</a>. To add\nadditional classes, use <a href=\"#/api/Ext.form.Labelable-cfg-labelClsExtra\" rel=\"Ext.form.Labelable-cfg-labelClsExtra\" class=\"docClass\">labelClsExtra</a>.</p>\n"
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
        "doc": "<p>The amount of space in pixels between the <a href=\"#/api/Ext.form.Labelable-cfg-fieldLabel\" rel=\"Ext.form.Labelable-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> and the input field. Defaults to <tt>5</tt>.</p>\n"
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
        "doc": "<p>Character(s) to be inserted at the end of the <a href=\"#/api/Ext.form.Labelable-cfg-fieldLabel\" rel=\"Ext.form.Labelable-cfg-fieldLabel\" class=\"docClass\">label text</a>.</p>\n"
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
        "doc": "<p>The width of the <a href=\"#/api/Ext.form.Labelable-cfg-fieldLabel\" rel=\"Ext.form.Labelable-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> in pixels. Only applicable if the <a href=\"#/api/Ext.form.Labelable-cfg-labelAlign\" rel=\"Ext.form.Labelable-cfg-labelAlign\" class=\"docClass\">labelAlign</a> is set\nto \"left\" or \"right\". Defaults to <tt>100</tt>.</p>\n"
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
        "doc": "<p>The rendering template for the field decorations. Component classes using this mixin should include\nlogic to use this as their <a href=\"#/api/Ext.AbstractComponent-cfg-renderTpl\" rel=\"Ext.AbstractComponent-cfg-renderTpl\" class=\"docClass\">renderTpl</a>, and implement the\n<a href=\"#/api/Ext.form.Labelable-method-getSubTplMarkup\" rel=\"Ext.form.Labelable-method-getSubTplMarkup\" class=\"docClass\">getSubTplMarkup</a> method to generate the field body content.</p>\n"
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
        "doc": "<p><tt>true</tt> to disable displaying any <a href=\"#/api/Ext.form.Labelable-method-setActiveError\" rel=\"Ext.form.Labelable-method-setActiveError\" class=\"docClass\">error message</a> set on this object.\nDefaults to <tt>false</tt>.</p>\n"
      }
    ],
    "css_mixin": [

    ],
    "event": [
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
        "doc": "<p>Fires when the active error message is changed via <a href=\"#/api/Ext.form.Labelable-method-setActiveError\" rel=\"Ext.form.Labelable-method-setActiveError\" class=\"docClass\">setActiveError</a>.</p>\n"
      }
    ],
    "method": [
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
        "linenr": 452,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-method-getBodyNaturalWidth",
        "protected": true,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getBodyNaturalWidth",
        "shortDoc": "Calculate and return the natural width of the bodyEl. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>Calculate and return the natural width of the bodyEl. Override to provide custom logic.\nNote for implementors: if at all possible this method should be overridden with a custom implementation\nthat can avoid anything that would cause the browser to reflow, e.g. querying offsetWidth.</p>\n",
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
        "doc": "<p>Returns the label for the field. Defaults to simply returning the <a href=\"#/api/Ext.form.Labelable-cfg-fieldLabel\" rel=\"Ext.form.Labelable-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> config. Can be\noverridden to provide</p>\n",
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
        "linenr": 327,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-method-getInputId",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getInputId",
        "shortDoc": "Get the input id, if any, for this component. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>Get the input id, if any, for this component. This is used as the \"for\" attribute on the label element.\nImplementing subclasses may also use this as e.g. the id for their own <tt>input</tt> element.</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The input id</p>\n"
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
        "doc": "<p>Generates the arguments for the field decorations <a href=\"#/api/Ext.form.Labelable-cfg-labelableRenderTpl\" rel=\"Ext.form.Labelable-cfg-labelableRenderTpl\" class=\"docClass\">rendering template</a>.</p>\n",
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
        "linenr": 317,
        "owner": "Ext.form.Labelable",
        "html_filename": "Labelable.html",
        "href": "Labelable.html#Ext-form-Labelable-method-getSubTplMarkup",
        "protected": true,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getSubTplMarkup",
        "shortDoc": "Gets the markup to be inserted into the outer template's bodyEl. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
        "doc": "<p>Gets the markup to be inserted into the outer template's bodyEl. Defaults to empty string, should\nbe implemented by classes including this mixin as needed.</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The markup to be inserted</p>\n"
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
        "doc": "<p>Sets the active error message to the given string. This replaces the entire error message\ncontents with the given string. Also see <a href=\"#/api/Ext.form.Labelable-method-setActiveErrors\" rel=\"Ext.form.Labelable-method-setActiveErrors\" class=\"docClass\">setActiveErrors</a> which accepts an Array of\nmessages and formats them according to the <a href=\"#/api/Ext.form.Labelable-cfg-activeErrorsTpl\" rel=\"Ext.form.Labelable-cfg-activeErrorsTpl\" class=\"docClass\">activeErrorsTpl</a>.</p>\n\n<p>Note that this only updates the error message element's text and attributes, you'll have\nto call doComponentLayout to actually update the field's layout to match. If the field extends\n<a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> you should call <a href=\"#/api/Ext.form.field.Base-method-markInvalid\" rel=\"Ext.form.field.Base-method-markInvalid\" class=\"docClass\">markInvalid</a> instead.</p>\n",
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
        "doc": "<p>Set the active error message to an Array of error messages. The messages are formatted into\na single message string using the <a href=\"#/api/Ext.form.Labelable-cfg-activeErrorsTpl\" rel=\"Ext.form.Labelable-cfg-activeErrorsTpl\" class=\"docClass\">activeErrorsTpl</a>. Also see <a href=\"#/api/Ext.form.Labelable-method-setActiveError\" rel=\"Ext.form.Labelable-method-setActiveError\" class=\"docClass\">setActiveError</a>\nwhich allows setting the entire error contents with a single string.</p>\n\n<p>Note that this only updates the error message element's text and attributes, you'll have\nto call doComponentLayout to actually update the field's layout to match. If the field extends\n<a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> you should call <a href=\"#/api/Ext.form.field.Base-method-markInvalid\" rel=\"Ext.form.field.Base-method-markInvalid\" class=\"docClass\">markInvalid</a> instead.</p>\n",
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
        "doc": "<p>The div Element that will contain the component's error message(s). Note that depending on the\nconfigured <a href=\"#/api/Ext.form.Labelable-cfg-msgTarget\" rel=\"Ext.form.Labelable-cfg-msgTarget\" class=\"docClass\">msgTarget</a>, this element may be hidden in favor of some other form of\npresentation, but will always be present in the DOM for use by assistive technologies.</p>\n"
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
  "name": "Ext.form.Labelable",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/form/Labelable.js",
  "doc": "<p>A mixin which allows a component to be configured and decorated with a label and/or error message as is\ncommon for form fields. This is used by e.g. <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> and <a href=\"#/api/Ext.form.FieldContainer\" rel=\"Ext.form.FieldContainer\" class=\"docClass\">Ext.form.FieldContainer</a>\nto let them be managed by the Field layout.</p>\n\n<p>*NOTE**: This mixin is mainly for internal library use and most users should not need to use it directly. It\nis more likely you will want to use one of the component classes that import this mixin, such as\n<a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> or <a href=\"#/api/Ext.form.FieldContainer\" rel=\"Ext.form.FieldContainer\" class=\"docClass\">Ext.form.FieldContainer</a>.</p>\n\n<p>Use of this mixin does not make a component a field in the logical sense, meaning it does not provide any\nlogic or state related to values or validation; that is handled by the related <a href=\"#/api/Ext.form.field.Field\" rel=\"Ext.form.field.Field\" class=\"docClass\">Ext.form.field.Field</a>\nmixin. These two mixins may be used separately (for example <a href=\"#/api/Ext.form.FieldContainer\" rel=\"Ext.form.FieldContainer\" class=\"docClass\">Ext.form.FieldContainer</a> is Labelable but not a\nField), or in combination (for example <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> implements both and has logic for connecting the\ntwo.)</p>\n\n<p>Component classes which use this mixin should use the Field layout\nor a derivation thereof to properly size and position the label and message according to the component config.\nThey must also call the <a href=\"#/api/Ext.form.Labelable-method-initLabelable\" rel=\"Ext.form.Labelable-method-initLabelable\" class=\"docClass\">initLabelable</a> method during component initialization to ensure the mixin gets\nset up correctly.</p>\n",
  "alternateClassNames": [

  ]
});