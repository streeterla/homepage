Ext.data.JsonP.Ext_resizer_Resizer({
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
  "html_filename": "Resizer.html",
  "allMixins": [
    "Ext.util.Observable"
  ],
  "docauthor": null,
  "href": "Resizer.html#Ext-resizer-Resizer",
  "subclasses": [

  ],
  "protected": false,
  "members": {
    "css_var": [

    ],
    "cfg": [
      {
        "static": false,
        "type": "Ext.Element/Ext.util.Region",
        "inheritable": false,
        "properties": null,
        "linenr": 136,
        "owner": "Ext.resizer.Resizer",
        "html_filename": "Resizer.html",
        "href": "Resizer.html#Ext-resizer-Resizer-cfg-constrainTo",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "constrainTo",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/resizer/Resizer.js",
        "doc": "<p>An element, or a <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Region</a> into which the resize operation must be constrained.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 50,
        "owner": "Ext.resizer.Resizer",
        "html_filename": "Resizer.html",
        "href": "Resizer.html#Ext-resizer-Resizer-cfg-dynamic",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "dynamic",
        "shortDoc": "Specify as true to update the target (Element or Component) dynamically during\ndragging. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/resizer/Resizer.js",
        "doc": "<p>Specify as true to update the <a href=\"#/api/Ext.resizer.Resizer-cfg-target\" rel=\"Ext.resizer.Resizer-cfg-target\" class=\"docClass\">target</a> (Element or <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a>) dynamically during\ndragging. This is <code>true</code> by default, but the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a> class passes <code>false</code> when it is\nconfigured as <a href=\"#/api/Ext.Component-cfg-resizable\" rel=\"Ext.Component-cfg-resizable\" class=\"docClass\">Ext.Component.resizable</a>.</p>\n\n<p>If specified as <code>false</code>, a proxy element is displayed during the resize operation, and the <a href=\"#/api/Ext.resizer.Resizer-cfg-target\" rel=\"Ext.resizer.Resizer-cfg-target\" class=\"docClass\">target</a> is\nupdated on mouseup.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 61,
        "owner": "Ext.resizer.Resizer",
        "html_filename": "Resizer.html",
        "href": "Resizer.html#Ext-resizer-Resizer-cfg-handles",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "handles",
        "shortDoc": "String consisting of the resize handles to display. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/resizer/Resizer.js",
        "doc": "<p>String consisting of the resize handles to display. Defaults to 's e se' for Elements and fixed position\nComponents. Defaults to 8 point resizing for floating Components (such as Windows). Specify either <code>'all'</code> or any\nof <code>'n s e w ne nw se sw'</code>.</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 69,
        "owner": "Ext.resizer.Resizer",
        "html_filename": "Resizer.html",
        "href": "Resizer.html#Ext-resizer-Resizer-cfg-height",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "height",
        "shortDoc": "Optional. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/resizer/Resizer.js",
        "doc": "<p>Optional. The height to set target to in pixels (defaults to null)</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 81,
        "owner": "Ext.resizer.Resizer",
        "html_filename": "Resizer.html",
        "href": "Resizer.html#Ext-resizer-Resizer-cfg-heightIncrement",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "heightIncrement",
        "shortDoc": "The increment to snap the height resize in pixels. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/resizer/Resizer.js",
        "doc": "<p>The increment to snap the height resize in pixels. Defaults to <code>0</code>.</p>\n"
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
        "doc": "<p>A config object containing one or more event handlers to be added to this object during initialization. This\nshould be a valid listeners config object as specified in the <a href=\"#/api/Ext.resizer.Resizer-method-addListener\" rel=\"Ext.resizer.Resizer-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple\nhandlers at once.</p>\n\n<p><strong>DOM events from ExtJS <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></strong></p>\n\n<p>While <em>some</em> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this is usually\nonly done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s <strong><code><a href=\"#/api/Ext.view.View-event-itemclick\" rel=\"Ext.view.View-event-itemclick\" class=\"docClass\">itemclick</a></code></strong> event passing the node clicked on. To access DOM events directly from a\nchild element of a Component, we need to specify the <code>element</code> option to identify the Component property to add a\nDOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 105,
        "owner": "Ext.resizer.Resizer",
        "html_filename": "Resizer.html",
        "href": "Resizer.html#Ext-resizer-Resizer-cfg-maxHeight",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "maxHeight",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/resizer/Resizer.js",
        "doc": "<p>The maximum height for the element (defaults to 10000)</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 111,
        "owner": "Ext.resizer.Resizer",
        "html_filename": "Resizer.html",
        "href": "Resizer.html#Ext-resizer-Resizer-cfg-maxWidth",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "maxWidth",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/resizer/Resizer.js",
        "doc": "<p>The maximum width for the element (defaults to 10000)</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 93,
        "owner": "Ext.resizer.Resizer",
        "html_filename": "Resizer.html",
        "href": "Resizer.html#Ext-resizer-Resizer-cfg-minHeight",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "minHeight",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/resizer/Resizer.js",
        "doc": "<p>The minimum height for the element (defaults to 20)</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 99,
        "owner": "Ext.resizer.Resizer",
        "html_filename": "Resizer.html",
        "href": "Resizer.html#Ext-resizer-Resizer-cfg-minWidth",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "minWidth",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/resizer/Resizer.js",
        "doc": "<p>The minimum width for the element (defaults to 20)</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 117,
        "owner": "Ext.resizer.Resizer",
        "html_filename": "Resizer.html",
        "href": "Resizer.html#Ext-resizer-Resizer-cfg-pinned",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "pinned",
        "shortDoc": "True to ensure that the resize handles are always visible, false indicates resizing by cursor changes only\n(defaults ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/resizer/Resizer.js",
        "doc": "<p>True to ensure that the resize handles are always visible, false indicates resizing by cursor changes only\n(defaults to false)</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 124,
        "owner": "Ext.resizer.Resizer",
        "html_filename": "Resizer.html",
        "href": "Resizer.html#Ext-resizer-Resizer-cfg-preserveRatio",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "preserveRatio",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/resizer/Resizer.js",
        "doc": "<p>True to preserve the original ratio between height and width during resize (defaults to false)</p>\n"
      },
      {
        "static": false,
        "type": "Ext.Element/Ext.Component",
        "inheritable": false,
        "properties": null,
        "linenr": 152,
        "owner": "Ext.resizer.Resizer",
        "html_filename": "Resizer.html",
        "href": "Resizer.html#Ext-resizer-Resizer-cfg-target",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "target",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/resizer/Resizer.js",
        "doc": "<p>The Element or Component to resize.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 130,
        "owner": "Ext.resizer.Resizer",
        "html_filename": "Resizer.html",
        "href": "Resizer.html#Ext-resizer-Resizer-cfg-transparent",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "transparent",
        "shortDoc": "True for transparent handles. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/resizer/Resizer.js",
        "doc": "<p>True for transparent handles. This is only applied at config time. (defaults to false)</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 75,
        "owner": "Ext.resizer.Resizer",
        "html_filename": "Resizer.html",
        "href": "Resizer.html#Ext-resizer-Resizer-cfg-width",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "width",
        "shortDoc": "Optional. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/resizer/Resizer.js",
        "doc": "<p>Optional. The width to set the target to in pixels (defaults to null)</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 87,
        "owner": "Ext.resizer.Resizer",
        "html_filename": "Resizer.html",
        "href": "Resizer.html#Ext-resizer-Resizer-cfg-widthIncrement",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "widthIncrement",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/resizer/Resizer.js",
        "doc": "<p>The increment to snap the width resize in pixels Defaults to <code>0</code>.</p>\n"
      }
    ],
    "css_mixin": [

    ],
    "event": [
      {
        "static": false,
        "inheritable": false,
        "linenr": 174,
        "owner": "Ext.resizer.Resizer",
        "html_filename": "Resizer.html",
        "href": "Resizer.html#Ext-resizer-Resizer-event-beforeresize",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.resizer.Resizer",
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
            "name": "width",
            "doc": "<p>The start width</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "height",
            "doc": "<p>The start height</p>\n"
          },
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The mousedown event</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "beforeresize",
        "shortDoc": "Fired before resize is allowed. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/resizer/Resizer.js",
        "doc": "<p>Fired before resize is allowed. Return false to cancel resize.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 192,
        "owner": "Ext.resizer.Resizer",
        "html_filename": "Resizer.html",
        "href": "Resizer.html#Ext-resizer-Resizer-event-resize",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.resizer.Resizer",
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
            "name": "width",
            "doc": "<p>The new width</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "height",
            "doc": "<p>The new height</p>\n"
          },
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The mouseup event</p>\n"
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
        "shortDoc": "Fired after a resize. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/resizer/Resizer.js",
        "doc": "<p>Fired after a resize.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 183,
        "owner": "Ext.resizer.Resizer",
        "html_filename": "Resizer.html",
        "href": "Resizer.html#Ext-resizer-Resizer-event-resizedrag",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.resizer.Resizer",
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
            "name": "width",
            "doc": "<p>The new width</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "height",
            "doc": "<p>The new height</p>\n"
          },
          {
            "type": "Ext.EventObject",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>The mousedown event</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "resizedrag",
        "shortDoc": "Fires during resizing. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/resizer/Resizer.js",
        "doc": "<p>Fires during resizing. Return false to cancel resize.</p>\n"
      }
    ],
    "method": [
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
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.resizer.Resizer-method-fireEvent\" rel=\"Ext.resizer.Resizer-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n"
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
        "doc": "<p>Fires the specified event with the passed parameters (minus the event name, plus the <code>options</code> object passed\nto <a href=\"#/api/Ext.resizer.Resizer-method-addListener\" rel=\"Ext.resizer.Resizer-method-addListener\" class=\"docClass\">addListener</a>).</p>\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>) by\ncalling <a href=\"#/api/Ext.resizer.Resizer-method-enableBubble\" rel=\"Ext.resizer.Resizer-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n",
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
        "linenr": 399,
        "owner": "Ext.resizer.Resizer",
        "html_filename": "Resizer.html",
        "href": "Resizer.html#Ext-resizer-Resizer-method-getEl",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getEl",
        "shortDoc": "Returns the element that was configured with the el or target config property. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/resizer/Resizer.js",
        "doc": "<p>Returns the element that was configured with the el or target config property. If a component was configured with\nthe target property then this will return the element of this component.</p>\n\n<p>Textarea and img elements will be wrapped with an additional div because these elements do not support child\nnodes. The original element can be accessed through the originalTarget property.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>element</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 411,
        "owner": "Ext.resizer.Resizer",
        "html_filename": "Resizer.html",
        "href": "Resizer.html#Ext-resizer-Resizer-method-getTarget",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getTarget",
        "shortDoc": "Returns the element or component that was configured with the target config property. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/resizer/Resizer.js",
        "doc": "<p>Returns the element or component that was configured with the target config property.</p>\n\n<p>Textarea and img elements will be wrapped with an additional div because these elements do not support child\nnodes. The original element can be accessed through the originalTarget property.</p>\n",
        "return": {
          "type": "Ext.Element/Ext.Component",
          "properties": null,
          "name": "return",
          "doc": "\n"
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.resizer.Resizer-method-addManagedListener\" rel=\"Ext.resizer.Resizer-method-addManagedListener\" class=\"docClass\">addManagedListener</a>.</p>\n\n<p>Adds listeners to any Observable object (or Ext.Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.resizer.Resizer-method-removeManagedListener\" rel=\"Ext.resizer.Resizer-method-removeManagedListener\" class=\"docClass\">removeManagedListener</a>.</p>\n\n<p>Removes listeners that were added by the <a href=\"#/api/Ext.resizer.Resizer-method-mon\" rel=\"Ext.resizer.Resizer-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
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
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.resizer.Resizer-method-fireEvent\" rel=\"Ext.resizer.Resizer-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n"
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.resizer.Resizer-method-addListener\" rel=\"Ext.resizer.Resizer-method-addListener\" class=\"docClass\">addListener</a>.</p>\n\n<p>Appends an event handler to this object.</p>\n",
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
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.resizer.Resizer-method-addListener\" rel=\"Ext.resizer.Resizer-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope originally specified for the handler. It must be the same as the\nscope argument specified in the original call to <a href=\"#/api/Ext.resizer.Resizer-method-addListener\" rel=\"Ext.resizer.Resizer-method-addListener\" class=\"docClass\">addListener</a> or the listener will not be removed.</p>\n"
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
        "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.resizer.Resizer-method-mon\" rel=\"Ext.resizer.Resizer-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
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
        "linenr": 389,
        "owner": "Ext.resizer.Resizer",
        "html_filename": "Resizer.html",
        "href": "Resizer.html#Ext-resizer-Resizer-method-resizeTo",
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
            "doc": "\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "height",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "resizeTo",
        "shortDoc": "Perform a manual resize and fires the 'resize' event. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/resizer/Resizer.js",
        "doc": "<p>Perform a manual resize and fires the 'resize' event.</p>\n",
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
        "doc": "<p>Resumes firing events (see <a href=\"#/api/Ext.resizer.Resizer-method-suspendEvents\" rel=\"Ext.resizer.Resizer-method-suspendEvents\" class=\"docClass\">suspendEvents</a>).</p>\n\n<p>If events were suspended using the <code>**queueSuspended**</code> parameter, then all events fired\nduring event suspension will be sent to any listeners now.</p>\n",
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
            "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.resizer.Resizer-method-resumeEvents\" rel=\"Ext.resizer.Resizer-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events.</p>\n"
          }
        ],
        "alias": null,
        "name": "suspendEvents",
        "shortDoc": "Suspends the firing of all events. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Suspends the firing of all events. (see <a href=\"#/api/Ext.resizer.Resizer-method-resumeEvents\" rel=\"Ext.resizer.Resizer-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
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
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.resizer.Resizer-method-addListener\" rel=\"Ext.resizer.Resizer-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope originally specified for the handler. It must be the same as the\nscope argument specified in the original call to <a href=\"#/api/Ext.resizer.Resizer-method-addListener\" rel=\"Ext.resizer.Resizer-method-addListener\" class=\"docClass\">addListener</a> or the listener will not be removed.</p>\n"
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.resizer.Resizer-method-removeListener\" rel=\"Ext.resizer.Resizer-method-removeListener\" class=\"docClass\">removeListener</a>.</p>\n\n<p>Removes an event handler.</p>\n",
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
        "linenr": 157,
        "owner": "Ext.resizer.Resizer",
        "html_filename": "Resizer.html",
        "href": "Resizer.html#Ext-resizer-Resizer-property-el",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "el",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/resizer/Resizer.js",
        "doc": "<p>Outer element for resizing behavior.</p>\n"
      },
      {
        "static": false,
        "type": "Ext.Element/Ext.Component",
        "inheritable": false,
        "properties": null,
        "linenr": 248,
        "owner": "Ext.resizer.Resizer",
        "html_filename": "Resizer.html",
        "href": "Resizer.html#Ext-resizer-Resizer-property-originalTarget",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "originalTarget",
        "shortDoc": "Reference to the original resize target if the element of the original resize target was an IMG or a\nTEXTAREA which m...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/resizer/Resizer.js",
        "doc": "<p>Reference to the original resize target if the element of the original resize target was an IMG or a\nTEXTAREA which must be wrapped in a DIV.</p>\n"
      },
      {
        "static": false,
        "type": "Ext.resizer.ResizeTracker",
        "inheritable": false,
        "properties": null,
        "linenr": 273,
        "owner": "Ext.resizer.Resizer",
        "html_filename": "Resizer.html",
        "href": "Resizer.html#Ext-resizer-Resizer-property-resizeTracker",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "resizeTracker",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/resizer/Resizer.js",
        "doc": "\n"
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
  "name": "Ext.resizer.Resizer",
  "mixins": [
    "Ext.util.Observable"
  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/resizer/Resizer.js",
  "doc": "<p>Applies drag handles to an element or component to make it resizable. The drag handles are inserted into the element\n(or component's element) and positioned absolute.</p>\n\n<p>Textarea and img elements will be wrapped with an additional div because these elements do not support child nodes.\nThe original element can be accessed through the originalTarget property.</p>\n\n<p>Here is the list of valid resize handles:</p>\n\n<pre><code>Value   Description\n------  -------------------\n 'n'     north\n 's'     south\n 'e'     east\n 'w'     west\n 'nw'    northwest\n 'sw'    southwest\n 'se'    southeast\n 'ne'    northeast\n 'all'   all\n</code></pre>\n\n<p><p><img src=\"doc-resources/Ext.resizer.Resizer/Ext.resizer.Resizer.png\" alt=\"Ext.resizer.Resizer component\"></p></p>\n\n<p>Here's an example showing the creation of a typical Resizer:</p>\n\n<pre><code>Ext.create('Ext.resizer.Resizer', {\n    el: 'elToResize',\n    handles: 'all',\n    minWidth: 200,\n    minHeight: 100,\n    maxWidth: 500,\n    maxHeight: 400,\n    pinned: true\n});\n</code></pre>\n",
  "alternateClassNames": [
    "Ext.Resizable"
  ]
});