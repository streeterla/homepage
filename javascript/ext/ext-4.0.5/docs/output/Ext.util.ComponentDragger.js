Ext.data.JsonP.Ext_util_ComponentDragger({
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
  "extends": "Ext.dd.DragTracker",
  "html_filename": "ComponentDragger.html",
  "allMixins": [
    "Ext.util.Observable"
  ],
  "docauthor": null,
  "href": "ComponentDragger.html#Ext-util-ComponentDragger",
  "subclasses": [

  ],
  "protected": false,
  "members": {
    "css_var": [

    ],
    "cfg": [
      {
        "static": false,
        "type": "Boolean/Number",
        "inheritable": false,
        "properties": null,
        "linenr": 61,
        "owner": "Ext.dd.DragTracker",
        "html_filename": "DragTracker.html",
        "href": "DragTracker.html#Ext-dd-DragTracker-cfg-autoStart",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "autoStart",
        "shortDoc": "Defaults to false. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
        "doc": "<p>Defaults to <code>false</code>. Specify <code>true</code> to defer trigger start by 1000 ms.\nSpecify a Number for the number of milliseconds to defer trigger start.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 12,
        "owner": "Ext.util.ComponentDragger",
        "html_filename": "ComponentDragger.html",
        "href": "ComponentDragger.html#Ext-util-ComponentDragger-cfg-constrain",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "constrain",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/util/ComponentDragger.js",
        "doc": "<p>Specify as <code>true</code> to constrain the Component to within the bounds of the <a href=\"#/api/Ext.util.ComponentDragger-cfg-constrainTo\" rel=\"Ext.util.ComponentDragger-cfg-constrainTo\" class=\"docClass\">constrainTo</a> region.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 24,
        "owner": "Ext.util.ComponentDragger",
        "html_filename": "ComponentDragger.html",
        "href": "ComponentDragger.html#Ext-util-ComponentDragger-cfg-constrainDelegate",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "constrainDelegate",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/util/ComponentDragger.js",
        "doc": "<p>Specify as <code>true</code> to constrain the drag handles within the <a href=\"#/api/Ext.util.ComponentDragger-cfg-constrainTo\" rel=\"Ext.util.ComponentDragger-cfg-constrainTo\" class=\"docClass\">constrainTo</a> region.</p>\n"
      },
      {
        "static": false,
        "type": "Ext.util.Region/Ext.Element",
        "inheritable": false,
        "properties": null,
        "linenr": 47,
        "owner": "Ext.dd.DragTracker",
        "html_filename": "DragTracker.html",
        "href": "DragTracker.html#Ext-dd-DragTracker-cfg-constrainTo",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "constrainTo",
        "shortDoc": "A Region (Or an element from which a Region measurement will be read) which is used to constrain\nthe result of the ge...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
        "doc": "<p>A <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Region</a> (Or an element from which a Region measurement will be read) which is used to constrain\nthe result of the <a href=\"#/api/Ext.util.ComponentDragger-method-getOffset\" rel=\"Ext.util.ComponentDragger-method-getOffset\" class=\"docClass\">getOffset</a> call.</p>\n\n\n<p>This may be set any time during the DragTracker's lifecycle to set a dynamic constraining region.</p>\n\n"
      },
      {
        "static": false,
        "type": "String/Ext.Element",
        "inheritable": false,
        "properties": null,
        "linenr": 17,
        "owner": "Ext.util.ComponentDragger",
        "html_filename": "ComponentDragger.html",
        "href": "ComponentDragger.html#Ext-util-ComponentDragger-cfg-delegate",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "delegate",
        "shortDoc": "Optional. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/util/ComponentDragger.js",
        "doc": "<p>Optional. <p>A <a href=\"#/api/Ext.DomQuery\" rel=\"Ext.DomQuery\" class=\"docClass\">DomQuery</a> selector which identifies child elements within the Component's encapsulating\nElement which are the drag handles. This limits dragging to only begin when the matching elements are mousedowned.</p></p>\n\n<p>This may also be a specific child element within the Component's encapsulating element to use as the drag handle.</p>\n\n"
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
        "doc": "<p>A config object containing one or more event handlers to be added to this object during initialization. This\nshould be a valid listeners config object as specified in the <a href=\"#/api/Ext.util.ComponentDragger-method-addListener\" rel=\"Ext.util.ComponentDragger-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple\nhandlers at once.</p>\n\n<p><strong>DOM events from ExtJS <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></strong></p>\n\n<p>While <em>some</em> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this is usually\nonly done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s <strong><code><a href=\"#/api/Ext.view.View-event-itemclick\" rel=\"Ext.view.View-event-itemclick\" class=\"docClass\">itemclick</a></code></strong> event passing the node clicked on. To access DOM events directly from a\nchild element of a Component, we need to specify the <code>element</code> option to identify the Component property to add a\nDOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 40,
        "owner": "Ext.dd.DragTracker",
        "html_filename": "DragTracker.html",
        "href": "DragTracker.html#Ext-dd-DragTracker-cfg-overCls",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "overCls",
        "shortDoc": "A CSS class to add to the DragTracker's target element when the element (or, if the delegate option is used,\nwhen a d...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
        "doc": "<p>A CSS class to add to the DragTracker's target element when the element (or, if the <a href=\"#/api/Ext.util.ComponentDragger-cfg-delegate\" rel=\"Ext.util.ComponentDragger-cfg-delegate\" class=\"docClass\">delegate</a> option is used,\nwhen a delegate element) is mouseovered.</p>\n\n\n<p><b>If the <a href=\"#/api/Ext.util.ComponentDragger-cfg-delegate\" rel=\"Ext.util.ComponentDragger-cfg-delegate\" class=\"docClass\">delegate</a> option is used, these events fire only when a delegate element is entered of left.</b>.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 75,
        "owner": "Ext.dd.DragTracker",
        "html_filename": "DragTracker.html",
        "href": "DragTracker.html#Ext-dd-DragTracker-cfg-preventDefault",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "preventDefault",
        "shortDoc": "Specify false to enable default actions on onMouseDown events. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
        "doc": "<p>Specify <code>false</code> to enable default actions on onMouseDown events. Defaults to <code>true</code>.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 80,
        "owner": "Ext.dd.DragTracker",
        "html_filename": "DragTracker.html",
        "href": "DragTracker.html#Ext-dd-DragTracker-cfg-stopEvent",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "stopEvent",
        "shortDoc": "Specify true to stop the mousedown event from bubbling to outer listeners from the target element (or its delegates). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
        "doc": "<p>Specify <code>true</code> to stop the <code>mousedown</code> event from bubbling to outer listeners from the target element (or its delegates). Defaults to <code>false</code>.</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 54,
        "owner": "Ext.dd.DragTracker",
        "html_filename": "DragTracker.html",
        "href": "DragTracker.html#Ext-dd-DragTracker-cfg-tolerance",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "tolerance",
        "shortDoc": "Number of pixels the drag target must be moved before dragging is\nconsidered to have started. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
        "doc": "<p>Number of pixels the drag target must be moved before dragging is\nconsidered to have started. Defaults to <code>5</code>.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 32,
        "owner": "Ext.dd.DragTracker",
        "html_filename": "DragTracker.html",
        "href": "DragTracker.html#Ext-dd-DragTracker-cfg-trackOver",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "trackOver",
        "shortDoc": "Defaults to false. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
        "doc": "<p>Defaults to <code>false</code>. Set to true to fire mouseover and mouseout events when the mouse enters or leaves the target element.</p>\n\n\n<p>This is implicitly set when an <a href=\"#/api/Ext.util.ComponentDragger-cfg-overCls\" rel=\"Ext.util.ComponentDragger-cfg-overCls\" class=\"docClass\">overCls</a> is specified.</p>\n\n\n<p><b>If the <a href=\"#/api/Ext.util.ComponentDragger-cfg-delegate\" rel=\"Ext.util.ComponentDragger-cfg-delegate\" class=\"docClass\">delegate</a> option is used, these events fire only when a delegate element is entered of left.</b>.</p>\n"
      }
    ],
    "css_mixin": [

    ],
    "event": [
      {
        "static": false,
        "inheritable": false,
        "linenr": 131,
        "owner": "Ext.dd.DragTracker",
        "html_filename": "DragTracker.html",
        "href": "DragTracker.html#Ext-dd-DragTracker-event-beforestart",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Object",
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
            "name": "e",
            "doc": "<p>event object</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "beforestart",
        "shortDoc": " ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
        "doc": "\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 152,
        "owner": "Ext.dd.DragTracker",
        "html_filename": "DragTracker.html",
        "href": "DragTracker.html#Ext-dd-DragTracker-event-drag",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Object",
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
            "name": "e",
            "doc": "<p>event object</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "drag",
        "shortDoc": " ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
        "doc": "\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 145,
        "owner": "Ext.dd.DragTracker",
        "html_filename": "DragTracker.html",
        "href": "DragTracker.html#Ext-dd-DragTracker-event-dragend",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Object",
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
            "name": "e",
            "doc": "<p>event object</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "dragend",
        "shortDoc": " ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
        "doc": "\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 138,
        "owner": "Ext.dd.DragTracker",
        "html_filename": "DragTracker.html",
        "href": "DragTracker.html#Ext-dd-DragTracker-event-dragstart",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Object",
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
            "name": "e",
            "doc": "<p>event object</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "dragstart",
        "shortDoc": " ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
        "doc": "\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 107,
        "owner": "Ext.dd.DragTracker",
        "html_filename": "DragTracker.html",
        "href": "DragTracker.html#Ext-dd-DragTracker-event-mousedown",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Object",
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
            "name": "e",
            "doc": "<p>event object</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "mousedown",
        "shortDoc": "Fires when the mouse button is pressed down, but before a drag operation begins. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
        "doc": "<p>Fires when the mouse button is pressed down, but before a drag operation begins. The\ndrag operation begins after either the mouse has been moved by <a href=\"#/api/Ext.util.ComponentDragger-cfg-tolerance\" rel=\"Ext.util.ComponentDragger-cfg-tolerance\" class=\"docClass\">tolerance</a> pixels, or after\nthe <a href=\"#/api/Ext.util.ComponentDragger-cfg-autoStart\" rel=\"Ext.util.ComponentDragger-cfg-autoStart\" class=\"docClass\">autoStart</a> timer fires.</p>\n\n\n<p>Return false to veto the drag operation.</p>\n\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 124,
        "owner": "Ext.dd.DragTracker",
        "html_filename": "DragTracker.html",
        "href": "DragTracker.html#Ext-dd-DragTracker-event-mousemove",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Object",
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
            "name": "e",
            "doc": "<p>event object</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "mousemove",
        "shortDoc": "Fired when the mouse is moved. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
        "doc": "<p>Fired when the mouse is moved. Returning false cancels the drag operation.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 98,
        "owner": "Ext.dd.DragTracker",
        "html_filename": "DragTracker.html",
        "href": "DragTracker.html#Ext-dd-DragTracker-event-mouseout",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Object",
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
            "name": "e",
            "doc": "<p>event object</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "mouseout",
        "shortDoc": "Only available when trackOver is true\n\n\nFires when the mouse exits the DragTracker's target element (or if delegate i...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
        "doc": "<p><b>Only available when <a href=\"#/api/Ext.util.ComponentDragger-cfg-trackOver\" rel=\"Ext.util.ComponentDragger-cfg-trackOver\" class=\"docClass\">trackOver</a> is <code>true</code></b></p>\n\n\n<p>Fires when the mouse exits the DragTracker's target element (or if <a href=\"#/api/Ext.util.ComponentDragger-cfg-delegate\" rel=\"Ext.util.ComponentDragger-cfg-delegate\" class=\"docClass\">delegate</a> is\nused, when the mouse exits a delegate element).</p>\n\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 88,
        "owner": "Ext.dd.DragTracker",
        "html_filename": "DragTracker.html",
        "href": "DragTracker.html#Ext-dd-DragTracker-event-mouseover",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Object",
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
            "name": "e",
            "doc": "<p>event object</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "target",
            "doc": "<p>The element mouseovered.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "mouseover",
        "shortDoc": "Only available when trackOver is true\n\n\nFires when the mouse enters the DragTracker's target element (or if delegate ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
        "doc": "<p><b>Only available when <a href=\"#/api/Ext.util.ComponentDragger-cfg-trackOver\" rel=\"Ext.util.ComponentDragger-cfg-trackOver\" class=\"docClass\">trackOver</a> is <code>true</code></b></p>\n\n\n<p>Fires when the mouse enters the DragTracker's target element (or if <a href=\"#/api/Ext.util.ComponentDragger-cfg-delegate\" rel=\"Ext.util.ComponentDragger-cfg-delegate\" class=\"docClass\">delegate</a> is\nused, when the mouse enters a delegate element).</p>\n\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 117,
        "owner": "Ext.dd.DragTracker",
        "html_filename": "DragTracker.html",
        "href": "DragTracker.html#Ext-dd-DragTracker-event-mouseup",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Object",
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
            "name": "e",
            "doc": "<p>event object</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "mouseup",
        "shortDoc": " ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
        "doc": "\n"
      }
    ],
    "method": [
      {
        "static": false,
        "inheritable": false,
        "linenr": 33,
        "owner": "Ext.util.ComponentDragger",
        "html_filename": "ComponentDragger.html",
        "href": "ComponentDragger.html#Ext-util-ComponentDragger-method-constructor",
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
            "name": "comp",
            "doc": "<p>The Component to provide dragging for.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "config",
            "doc": "<p>(optional) Config object</p>\n"
          }
        ],
        "alias": null,
        "name": "constructor",
        "shortDoc": "Creates new ComponentDragger. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/util/ComponentDragger.js",
        "doc": "<p>Creates new ComponentDragger.</p>\n",
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
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.util.ComponentDragger-method-fireEvent\" rel=\"Ext.util.ComponentDragger-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n"
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
        "doc": "<p>Fires the specified event with the passed parameters (minus the event name, plus the <code>options</code> object passed\nto <a href=\"#/api/Ext.util.ComponentDragger-method-addListener\" rel=\"Ext.util.ComponentDragger-method-addListener\" class=\"docClass\">addListener</a>).</p>\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>) by\ncalling <a href=\"#/api/Ext.util.ComponentDragger-method-enableBubble\" rel=\"Ext.util.ComponentDragger-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n",
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
        "linenr": 415,
        "owner": "Ext.dd.DragTracker",
        "html_filename": "DragTracker.html",
        "href": "DragTracker.html#Ext-dd-DragTracker-method-getDragTarget",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getDragTarget",
        "shortDoc": "Returns the drag target. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
        "doc": "<p></p>Returns the drag target. This is usually the DragTracker's encapsulating element.</p></p>\n\n<p>If the <a href=\"#/api/Ext.util.ComponentDragger-cfg-delegate\" rel=\"Ext.util.ComponentDragger-cfg-delegate\" class=\"docClass\">delegate</a> option is being used, this may be a child element which matches the\n<a href=\"#/api/Ext.util.ComponentDragger-cfg-delegate\" rel=\"Ext.util.ComponentDragger-cfg-delegate\" class=\"docClass\">delegate</a> selector.</p>\n\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "<p>The element currently being tracked.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 459,
        "owner": "Ext.dd.DragTracker",
        "html_filename": "DragTracker.html",
        "href": "DragTracker.html#Ext-dd-DragTracker-method-getOffset",
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
            "name": "constrainMode",
            "doc": "<p>{String} (Optional) If omitted the true mouse position is returned. May be passed\nas <code>point</code> or <code>dragTarget</code>. See above.</p>\n"
          }
        ],
        "alias": null,
        "name": "getOffset",
        "shortDoc": "Returns the X, Y offset of the current mouse position from the mousedown point. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
        "doc": "<p>Returns the X, Y offset of the current mouse position from the mousedown point.</p>\n\n<p>This method may optionally constrain the real offset values, and returns a point coerced in one\nof two modes:</p>\n\n<ul>\n<li><code>point</code>\nThe current mouse position is coerced into the constrainRegion and the resulting position is returned.</li>\n<li><code>dragTarget</code>\nThe new <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Region</a> of the <a href=\"#/api/Ext.util.ComponentDragger-method-getDragTarget\" rel=\"Ext.util.ComponentDragger-method-getDragTarget\" class=\"docClass\">dragTarget</a> is calculated\nbased upon the current mouse position, and then coerced into the constrainRegion. The returned\nmouse position is then adjusted by the same delta as was used to coerce the region.\\</li>\n</ul>\n\n",
        "return": {
          "type": "Number[]",
          "properties": null,
          "name": "return",
          "doc": "<p>The <code>X, Y</code> offset from the mousedown point, optionally constrained.</p>\n"
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
        "linenr": 174,
        "owner": "Ext.dd.DragTracker",
        "html_filename": "DragTracker.html",
        "href": "DragTracker.html#Ext-dd-DragTracker-method-initEl",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.Element/HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "el",
            "doc": "<p>The element</p>\n"
          }
        ],
        "alias": null,
        "name": "initEl",
        "shortDoc": "Initializes the DragTracker on a given element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
        "doc": "<p>Initializes the DragTracker on a given element.</p>\n",
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.util.ComponentDragger-method-addManagedListener\" rel=\"Ext.util.ComponentDragger-method-addManagedListener\" class=\"docClass\">addManagedListener</a>.</p>\n\n<p>Adds listeners to any Observable object (or Ext.Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.util.ComponentDragger-method-removeManagedListener\" rel=\"Ext.util.ComponentDragger-method-removeManagedListener\" class=\"docClass\">removeManagedListener</a>.</p>\n\n<p>Removes listeners that were added by the <a href=\"#/api/Ext.util.ComponentDragger-method-mon\" rel=\"Ext.util.ComponentDragger-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
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
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.util.ComponentDragger-method-fireEvent\" rel=\"Ext.util.ComponentDragger-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n"
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.util.ComponentDragger-method-addListener\" rel=\"Ext.util.ComponentDragger-method-addListener\" class=\"docClass\">addListener</a>.</p>\n\n<p>Appends an event handler to this object.</p>\n",
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
        "owner": "Ext.dd.DragTracker",
        "html_filename": "DragTracker.html",
        "href": "DragTracker.html#Ext-dd-DragTracker-method-onBeforeStart",
        "protected": false,
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
            "doc": "<p>The event object</p>\n"
          }
        ],
        "alias": null,
        "name": "onBeforeStart",
        "shortDoc": "Template method which should be overridden by each DragTracker instance. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
        "doc": "<p>Template method which should be overridden by each DragTracker instance. Called when the user first clicks and\nholds the mouse button down. Return false to disallow the drag</p>\n",
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
        "linenr": 398,
        "owner": "Ext.dd.DragTracker",
        "html_filename": "DragTracker.html",
        "href": "DragTracker.html#Ext-dd-DragTracker-method-onDrag",
        "protected": false,
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
            "doc": "<p>The event object</p>\n"
          }
        ],
        "alias": null,
        "name": "onDrag",
        "shortDoc": "Template method which should be overridden by each DragTracker instance. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
        "doc": "<p>Template method which should be overridden by each DragTracker instance. Called whenever a drag has been detected.</p>\n",
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
        "linenr": 406,
        "owner": "Ext.dd.DragTracker",
        "html_filename": "DragTracker.html",
        "href": "DragTracker.html#Ext-dd-DragTracker-method-onEnd",
        "protected": false,
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
            "doc": "<p>The event object</p>\n"
          }
        ],
        "alias": null,
        "name": "onEnd",
        "shortDoc": "Template method which should be overridden by each DragTracker instance. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
        "doc": "<p>Template method which should be overridden by each DragTracker instance. Called when a drag operation has been completed\n(e.g. the user clicked and held the mouse down, dragged the element and then released the mouse button)</p>\n",
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
        "owner": "Ext.dd.DragTracker",
        "html_filename": "DragTracker.html",
        "href": "DragTracker.html#Ext-dd-DragTracker-method-onStart",
        "protected": false,
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
            "doc": "<p>The event object</p>\n"
          }
        ],
        "alias": null,
        "name": "onStart",
        "shortDoc": "Template method which should be overridden by each DragTracker instance. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
        "doc": "<p>Template method which should be overridden by each DragTracker instance. Called when a drag operation starts\n(e.g. the user has moved the tracked element beyond the specified tolerance)</p>\n",
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
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.util.ComponentDragger-method-addListener\" rel=\"Ext.util.ComponentDragger-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope originally specified for the handler. It must be the same as the\nscope argument specified in the original call to <a href=\"#/api/Ext.util.ComponentDragger-method-addListener\" rel=\"Ext.util.ComponentDragger-method-addListener\" class=\"docClass\">addListener</a> or the listener will not be removed.</p>\n"
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
        "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.util.ComponentDragger-method-mon\" rel=\"Ext.util.ComponentDragger-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
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
        "doc": "<p>Resumes firing events (see <a href=\"#/api/Ext.util.ComponentDragger-method-suspendEvents\" rel=\"Ext.util.ComponentDragger-method-suspendEvents\" class=\"docClass\">suspendEvents</a>).</p>\n\n<p>If events were suspended using the <code>**queueSuspended**</code> parameter, then all events fired\nduring event suspension will be sent to any listeners now.</p>\n",
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
            "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.util.ComponentDragger-method-resumeEvents\" rel=\"Ext.util.ComponentDragger-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events.</p>\n"
          }
        ],
        "alias": null,
        "name": "suspendEvents",
        "shortDoc": "Suspends the firing of all events. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Suspends the firing of all events. (see <a href=\"#/api/Ext.util.ComponentDragger-method-resumeEvents\" rel=\"Ext.util.ComponentDragger-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
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
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.util.ComponentDragger-method-addListener\" rel=\"Ext.util.ComponentDragger-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope originally specified for the handler. It must be the same as the\nscope argument specified in the original call to <a href=\"#/api/Ext.util.ComponentDragger-method-addListener\" rel=\"Ext.util.ComponentDragger-method-addListener\" class=\"docClass\">addListener</a> or the listener will not be removed.</p>\n"
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.util.ComponentDragger-method-removeListener\" rel=\"Ext.util.ComponentDragger-method-removeListener\" class=\"docClass\">removeListener</a>.</p>\n\n<p>Removes an event handler.</p>\n",
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
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 18,
        "owner": "Ext.dd.DragTracker",
        "html_filename": "DragTracker.html",
        "href": "DragTracker.html#Ext-dd-DragTracker-property-active",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "active",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
        "doc": "<p>Read-only property indicated whether the user is currently dragging this\ntracker.</p>\n"
      },
      {
        "static": false,
        "type": "HTMLElement",
        "inheritable": false,
        "properties": null,
        "linenr": 25,
        "owner": "Ext.dd.DragTracker",
        "html_filename": "DragTracker.html",
        "href": "DragTracker.html#Ext-dd-DragTracker-property-dragTarget",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "dragTarget",
        "shortDoc": "Only valid during drag operations. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
        "doc": "<p><b>Only valid during drag operations. Read-only.</b></p>\n\n\n<p>The element being dragged.</p>\n\n\n<p>If the <a href=\"#/api/Ext.util.ComponentDragger-cfg-delegate\" rel=\"Ext.util.ComponentDragger-cfg-delegate\" class=\"docClass\">delegate</a> option is used, this will be the delegate element which was mousedowned.</p>\n\n"
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
    "Ext.Base",
    "Ext.dd.DragTracker"
  ],
  "alias": null,
  "name": "Ext.util.ComponentDragger",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/util/ComponentDragger.js",
  "doc": "<p>A subclass of <a href=\"#/api/Ext.dd.DragTracker\" rel=\"Ext.dd.DragTracker\" class=\"docClass\">Ext.dd.DragTracker</a> which handles dragging any Component.</p>\n\n\n<p>This is configured with a Component to be made draggable, and a config object for the\n<a href=\"#/api/Ext.dd.DragTracker\" rel=\"Ext.dd.DragTracker\" class=\"docClass\">Ext.dd.DragTracker</a> class.</p>\n\n\n<p>A <a href=\"#/api/Ext.util.ComponentDragger-cfg-delegate\" rel=\"Ext.util.ComponentDragger-cfg-delegate\" class=\"docClass\">delegate</a> may be provided which may be either the element to use as the mousedown target\nor a <a href=\"#/api/Ext.DomQuery\" rel=\"Ext.DomQuery\" class=\"docClass\">Ext.DomQuery</a> selector to activate multiple mousedown targets.</p>\n\n",
  "alternateClassNames": [

  ]
});