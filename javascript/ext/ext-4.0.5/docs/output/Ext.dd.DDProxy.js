Ext.data.JsonP.Ext_dd_DDProxy({
  "static": false,
  "mixedInto": [

  ],
  "inheritable": false,
  "xtypes": [

  ],
  "linenr": 9,
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
        "html_filename": "Base3.html",
        "owner": "Ext.Base",
        "linenr": 392,
        "href": "Base3.html#Ext-Base-method-addStatics",
        "protected": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "properties": [

            ],
            "name": "members",
            "doc": "\n"
          }
        ],
        "tagname": "method",
        "private": false,
        "name": "addStatics",
        "alias": null,
        "shortDoc": "Add / override static properties of this class. ...",
        "return": {
          "type": "Ext.Base",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n\n"
        },
        "doc": "<p>Add / override static properties of this class.</p>\n\n\n\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.addStatics({\n    someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'\n    method1: function() { ... },    // My.cool.Class.method1 = function() { ... };\n    method2: function() { ... }     // My.cool.Class.method2 = function() { ... };\n});\n</code></pre>\n\n",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js"
      },
      {
        "static": true,
        "inheritable": true,
        "html_filename": "Base3.html",
        "owner": "Ext.Base",
        "linenr": 482,
        "href": "Base3.html#Ext-Base-method-borrow",
        "protected": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.Base",
            "optional": false,
            "properties": [

            ],
            "name": "fromClass",
            "doc": "<p>The class to borrow members from</p>\n\n"
          },
          {
            "type": "String/String[]",
            "optional": false,
            "properties": [

            ],
            "name": "members",
            "doc": "<p>The names of the members to borrow</p>\n\n"
          }
        ],
        "tagname": "method",
        "private": false,
        "name": "borrow",
        "alias": null,
        "shortDoc": "Borrow another class' members to the prototype of this class. ...",
        "return": {
          "type": "Ext.Base",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n\n"
        },
        "doc": "<p>Borrow another class' members to the prototype of this class.</p>\n\n\n\n\n<pre><code>Ext.define('Bank', {\n    money: '$$$',\n    printMoney: function() {\n        alert('$$$$$$$');\n    }\n});\n\nExt.define('Thief', {\n    ...\n});\n\nThief.borrow(Bank, ['money', 'printMoney']);\n\nvar steve = new Thief();\n\nalert(steve.money); // alerts '$$$'\nsteve.printMoney(); // alerts '$$$$$$$'\n</code></pre>\n\n",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js"
      },
      {
        "static": true,
        "inheritable": true,
        "html_filename": "Base3.html",
        "owner": "Ext.Base",
        "linenr": 330,
        "href": "Base3.html#Ext-Base-method-create",
        "protected": false,
        "deprecated": null,
        "params": [

        ],
        "tagname": "method",
        "private": false,
        "name": "create",
        "alias": null,
        "shortDoc": "Create a new instance of this Class. ...",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>the created instance.</p>\n\n"
        },
        "doc": "<p>Create a new instance of this Class.</p>\n\n\n\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.create({\n    someConfig: true\n});\n</code></pre>\n\n\n\n\n<p>All parameters are passed to the constructor of the class.</p>\n\n",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js"
      },
      {
        "static": true,
        "inheritable": true,
        "html_filename": "Base3.html",
        "owner": "Ext.Base",
        "linenr": 658,
        "href": "Base3.html#Ext-Base-method-createAlias",
        "protected": false,
        "deprecated": null,
        "params": [
          {
            "type": "String/Object",
            "optional": false,
            "properties": [

            ],
            "name": "alias",
            "doc": "<p>The new method name, or an object to set multiple aliases. See\n<a href=\"#/api/Ext.Function-method-flexSetter\" rel=\"Ext.Function-method-flexSetter\" class=\"docClass\">flexSetter</a></p>\n\n"
          },
          {
            "type": "String/Object",
            "optional": false,
            "properties": [

            ],
            "name": "origin",
            "doc": "<p>The original method name</p>\n\n"
          }
        ],
        "tagname": "method",
        "private": false,
        "name": "createAlias",
        "alias": null,
        "shortDoc": "Create aliases for existing prototype methods. ...",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        },
        "doc": "<p>Create aliases for existing prototype methods. Example:</p>\n\n\n\n\n<pre><code>Ext.define('My.cool.Class', {\n    method1: function() { ... },\n    method2: function() { ... }\n});\n\nvar test = new My.cool.Class();\n\nMy.cool.Class.createAlias({\n    method3: 'method1',\n    method4: 'method2'\n});\n\ntest.method3(); // test.method1()\n\nMy.cool.Class.createAlias('method5', 'method3');\n\ntest.method5(); // test.method3() -&gt; test.method1()\n</code></pre>\n\n",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js"
      },
      {
        "static": true,
        "inheritable": true,
        "html_filename": "Base3.html",
        "owner": "Ext.Base",
        "linenr": 639,
        "href": "Base3.html#Ext-Base-method-getName",
        "protected": false,
        "deprecated": null,
        "params": [

        ],
        "tagname": "method",
        "private": false,
        "name": "getName",
        "alias": null,
        "shortDoc": "Get the current class' name in string format. ...",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>className</p>\n\n"
        },
        "doc": "<p>Get the current class' name in string format.</p>\n\n\n\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n\n",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js"
      },
      {
        "static": true,
        "inheritable": true,
        "html_filename": "Base3.html",
        "owner": "Ext.Base",
        "linenr": 420,
        "href": "Base3.html#Ext-Base-method-implement",
        "protected": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "properties": [

            ],
            "name": "members",
            "doc": "\n"
          }
        ],
        "tagname": "method",
        "private": false,
        "name": "implement",
        "alias": null,
        "shortDoc": "Add methods / properties to the prototype of this class. ...",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        },
        "doc": "<p>Add methods / properties to the prototype of this class.</p>\n\n\n\n\n<pre><code>Ext.define('My.awesome.Cat', {\n    constructor: function() {\n        ...\n    }\n});\n\n My.awesome.Cat.implement({\n     meow: function() {\n        alert('Meowww...');\n     }\n });\n\n var kitty = new My.awesome.Cat;\n kitty.meow();\n</code></pre>\n\n",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js"
      },
      {
        "static": true,
        "inheritable": true,
        "html_filename": "Base3.html",
        "owner": "Ext.Base",
        "linenr": 524,
        "href": "Base3.html#Ext-Base-method-override",
        "protected": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "properties": [

            ],
            "name": "members",
            "doc": "\n"
          }
        ],
        "tagname": "method",
        "private": false,
        "name": "override",
        "alias": null,
        "shortDoc": "Override prototype members of this class. ...",
        "return": {
          "type": "Ext.Base",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n\n"
        },
        "doc": "<p>Override prototype members of this class. Overridden methods can be invoked via\n<a href=\"#/api/Ext.Base-method-callOverridden\" rel=\"Ext.Base-method-callOverridden\" class=\"docClass\">Ext.Base.callOverridden</a></p>\n\n\n\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n\n",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js"
      }
    ],
    "property": [
      {
        "static": true,
        "type": "String",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 25,
        "owner": "Ext.dd.DDProxy",
        "html_filename": "DDProxy.html",
        "href": "DDProxy.html#Ext-dd-DDProxy-property-dragElId",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "dragElId",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DDProxy.js",
        "doc": "<p>The default drag frame div id</p>\n"
      }
    ]
  },
  "extends": "Ext.dd.DD",
  "html_filename": "DDProxy.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "DDProxy.html#Ext-dd-DDProxy",
  "subclasses": [
    "Ext.dd.DragSource"
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
        "linenr": 32,
        "owner": "Ext.dd.DDProxy",
        "html_filename": "DDProxy.html",
        "href": "DDProxy.html#Ext-dd-DDProxy-method-constructor",
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
            "doc": "<p>the id of the linked html element</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "sGroup",
            "doc": "<p>the group of related DragDrop objects</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "config",
            "doc": "<p>an object containing configurable attributes.\nValid properties for DDProxy in addition to those in DragDrop:</p>\n\n<ul>\n<li>resizeFrame</li>\n<li>centerFrame</li>\n<li>dragElId</li>\n</ul>\n\n"
          }
        ],
        "alias": null,
        "name": "constructor",
        "shortDoc": "Creates new DDProxy. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DDProxy.js",
        "doc": "<p>Creates new DDProxy.</p>\n",
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
        "linenr": 860,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-addInvalidHandleClass",
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
            "name": "cssClass",
            "doc": "<p>the class of the elements you wish to ignore</p>\n"
          }
        ],
        "alias": null,
        "name": "addInvalidHandleClass",
        "shortDoc": "Lets you specify a css class of elements that will not initiate a drag ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Lets you specify a css class of elements that will not initiate a drag</p>\n",
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
        "linenr": 847,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-addInvalidHandleId",
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
            "doc": "<p>the element id of the element you wish to ignore</p>\n"
          }
        ],
        "alias": null,
        "name": "addInvalidHandleId",
        "shortDoc": "Lets you to specify an element id for a child of a drag handle\nthat should not initiate a drag ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Lets you to specify an element id for a child of a drag handle\nthat should not initiate a drag</p>\n",
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
        "linenr": 835,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-addInvalidHandleType",
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
            "name": "tagName",
            "doc": "<p>the type of element to exclude</p>\n"
          }
        ],
        "alias": null,
        "name": "addInvalidHandleType",
        "shortDoc": "Allows you to specify a tag name that should not start a drag operation\nwhen clicked. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Allows you to specify a tag name that should not start a drag operation\nwhen clicked.  This is designed to facilitate embedding links within a\ndrag handle that do something other than start the drag.</p>\n",
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
        "linenr": 704,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-addToGroup",
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
            "name": "sGroup",
            "doc": "<p>the name of the group</p>\n"
          }
        ],
        "alias": null,
        "name": "addToGroup",
        "shortDoc": "Adds this instance to a group of related drag/drop objects. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Adds this instance to a group of related drag/drop objects.  All\ninstances belong to at least one group, and can belong to as many\ngroups as needed.</p>\n",
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
        "linenr": 85,
        "owner": "Ext.dd.DD",
        "html_filename": "DD.html",
        "href": "DD.html#Ext-dd-DD-method-alignElWithMouse",
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
            "name": "el",
            "doc": "<p>the element to move</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "iPageX",
            "doc": "<p>the X coordinate of the mousedown or drag event</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "iPageY",
            "doc": "<p>the Y coordinate of the mousedown or drag event</p>\n"
          }
        ],
        "alias": null,
        "name": "alignElWithMouse",
        "shortDoc": "Sets the element to the location of the mousedown or click event,\nmaintaining the cursor location relative to the loc...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DD.js",
        "doc": "<p>Sets the element to the location of the mousedown or click event,\nmaintaining the cursor location relative to the location on the element\nthat was clicked.  Override this if you want to place the element in a\nlocation other than where the cursor is.</p>\n",
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
        "linenr": 259,
        "owner": "Ext.dd.DD",
        "html_filename": "DD.html",
        "href": "DD.html#Ext-dd-DD-method-applyConfig",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "applyConfig",
        "shortDoc": "Sets up config options specific to this class. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DD.js",
        "doc": "<p>Sets up config options specific to this class. Overrides\nExt.dd.DragDrop, but all versions of this method through the\ninheritance chain are called</p>\n",
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
        "linenr": 42,
        "owner": "Ext.dd.DD",
        "html_filename": "DD.html",
        "href": "DD.html#Ext-dd-DD-method-autoOffset",
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
            "name": "iPageX",
            "doc": "<p>the X coordinate of the click</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "iPageY",
            "doc": "<p>the Y coordinate of the click</p>\n"
          }
        ],
        "alias": null,
        "name": "autoOffset",
        "shortDoc": "Sets the pointer offset to the distance between the linked element's top\nleft corner and the location the element was...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DD.js",
        "doc": "<p>Sets the pointer offset to the distance between the linked element's top\nleft corner and the location the element was clicked</p>\n",
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
        "owner": "Ext.dd.DD",
        "html_filename": "DD.html",
        "href": "DD.html#Ext-dd-DD-method-b4Drag",
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
            "name": "e",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "b4Drag",
        "shortDoc": "Event that fires prior to the onDrag event. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DD.js",
        "doc": "<p>Event that fires prior to the onDrag event.  Overrides\nExt.dd.DragDrop.</p>\n",
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
        "owner": "Ext.dd.DD",
        "html_filename": "DD.html",
        "href": "DD.html#Ext-dd-DD-method-b4MouseDown",
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
            "name": "e",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "b4MouseDown",
        "shortDoc": "Event that fires prior to the onMouseDown event. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DD.js",
        "doc": "<p>Event that fires prior to the onMouseDown event.  Overrides\nExt.dd.DragDrop.</p>\n",
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
        "linenr": 125,
        "owner": "Ext.dd.DD",
        "html_filename": "DD.html",
        "href": "DD.html#Ext-dd-DD-method-cachePosition",
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
            "name": "iPageX",
            "doc": "<p>(optional) the current x position (this just makes it so we\ndon't have to look it up again)</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": true,
            "name": "iPageY",
            "doc": "<p>(optional) the current y position (this just makes it so we\ndon't have to look it up again)</p>\n"
          }
        ],
        "alias": null,
        "name": "cachePosition",
        "shortDoc": "Saves the most recent position so that we can reset the constraints and\ntick marks on-demand. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DD.js",
        "doc": "<p>Saves the most recent position so that we can reset the constraints and\ntick marks on-demand.  We need to know this so that we can calculate the\nnumber of pixels the element is offset from its original position.</p>\n",
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
        "linenr": 1006,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-clearConstraints",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "clearConstraints",
        "shortDoc": "Clears any constraints applied to this instance. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Clears any constraints applied to this instance.  Also clears ticks\nsince they can't exist independent of a constraint at this time.</p>\n",
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
        "linenr": 1016,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-clearTicks",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "clearTicks",
        "shortDoc": "Clears any tick interval defined for this instance ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Clears any tick interval defined for this instance</p>\n",
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
        "linenr": 477,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-constrainTo",
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
            "name": "constrainTo",
            "doc": "<p>The element or element ID to constrain to.</p>\n"
          },
          {
            "type": "Object/Number",
            "properties": [

            ],
            "optional": true,
            "name": "pad",
            "doc": "<p>(optional) Pad provides a way to specify \"padding\" of the constraints,\nand can be either a number for symmetrical padding (4 would be equal to <code>{left:4, right:4, top:4, bottom:4}</code>) or\nan object containing the sides to pad. For example: <code>{right:10, bottom:10}</code></p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "inContent",
            "doc": "<p>(optional) Constrain the draggable in the content box of the element (inside padding and borders)</p>\n"
          }
        ],
        "alias": null,
        "name": "constrainTo",
        "shortDoc": "Initializes the drag drop object's constraints to restrict movement to a certain element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Initializes the drag drop object's constraints to restrict movement to a certain element.</p>\n\n<p>Usage:</p>\n\n<pre><code>var dd = new Ext.dd.DDProxy(\"dragDiv1\", \"proxytest\",\n               { dragElId: \"existingProxyDiv\" });\ndd.startDrag = function(){\n    this.constrainTo(\"parent-id\");\n};\n</code></pre>\n\n<p>Or you can initalize it using the <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> object:</p>\n\n<pre><code>Ext.get(\"dragDiv1\").initDDProxy(\"proxytest\", {dragElId: \"existingProxyDiv\"}, {\n    startDrag : function(){\n        this.constrainTo(\"parent-id\");\n    }\n});\n</code></pre>\n",
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
        "linenr": 69,
        "owner": "Ext.dd.DDProxy",
        "html_filename": "DDProxy.html",
        "href": "DDProxy.html#Ext-dd-DDProxy-method-createFrame",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "createFrame",
        "shortDoc": "Creates the proxy element if it does not yet exist ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DDProxy.js",
        "doc": "<p>Creates the proxy element if it does not yet exist</p>\n",
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
        "linenr": 434,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-endDrag",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Event",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>the mouseup event</p>\n"
          }
        ],
        "alias": null,
        "name": "endDrag",
        "shortDoc": "Called when we are done dragging the object ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Called when we are done dragging the object</p>\n",
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
        "linenr": 546,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-getDragEl",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getDragEl",
        "shortDoc": "Returns a reference to the actual element to drag. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Returns a reference to the actual element to drag.  By default this is\nthe same as the html element, but it can be assigned to another\nelement. An example of this can be found in <a href=\"#/api/Ext.dd.DDProxy\" rel=\"Ext.dd.DDProxy\" class=\"docClass\">Ext.dd.DDProxy</a></p>\n",
        "return": {
          "type": "HTMLElement",
          "properties": null,
          "name": "return",
          "doc": "<p>the html element</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 534,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-getEl",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getEl",
        "shortDoc": "Returns a reference to the linked element ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Returns a reference to the linked element</p>\n",
        "return": {
          "type": "HTMLElement",
          "properties": null,
          "name": "return",
          "doc": "<p>the html element</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 556,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-init",
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
            "doc": "<p>the id of the linked element</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "sGroup",
            "doc": "<p>the group of related items</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "config",
            "doc": "<p>configuration attributes</p>\n"
          }
        ],
        "alias": null,
        "name": "init",
        "shortDoc": "Sets up the DragDrop object. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Sets up the DragDrop object.  Must be called in the constructor of any\n<a href=\"#/api/Ext.dd.DragDrop\" rel=\"Ext.dd.DragDrop\" class=\"docClass\">Ext.dd.DragDrop</a> subclass</p>\n",
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
        "linenr": 102,
        "owner": "Ext.dd.DDProxy",
        "html_filename": "DDProxy.html",
        "href": "DDProxy.html#Ext-dd-DDProxy-method-initFrame",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "initFrame",
        "shortDoc": "Initialization for the drag frame element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DDProxy.js",
        "doc": "<p>Initialization for the drag frame element.  Must be called in the\nconstructor of all subclasses</p>\n",
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
        "linenr": 569,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-initTarget",
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
            "doc": "<p>the id of the linked element</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "sGroup",
            "doc": "<p>the group of related items</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "config",
            "doc": "<p>configuration attributes</p>\n"
          }
        ],
        "alias": null,
        "name": "initTarget",
        "shortDoc": "Initializes Targeting functionality only... ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Initializes Targeting functionality only... the object does not\nget a mousedown handler.</p>\n",
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
        "linenr": 782,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-isLocked",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isLocked",
        "shortDoc": "Returns true if this instance is locked, or the drag drop mgr is locked\n(meaning that all drag/drop is disabled on th...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Returns true if this instance is locked, or the drag drop mgr is locked\n(meaning that all drag/drop is disabled on the page.)</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>true if this obj or all drag/drop is locked, else\nfalse</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 902,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-isValidHandleChild",
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
            "doc": "<p>the HTMLElement to evaluate</p>\n"
          }
        ],
        "alias": null,
        "name": "isValidHandleChild",
        "shortDoc": "Checks the tag exclusion list to see if this click should be ignored ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Checks the tag exclusion list to see if this click should be ignored</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>true if this is a valid tag type, false if not</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 182,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-lock",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "lock",
        "shortDoc": "Locks this instance ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Locks this instance</p>\n",
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
        "linenr": 459,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onAvailable",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "onAvailable",
        "shortDoc": "Override the onAvailable method to do what is needed after the initial\nposition was determined. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Override the onAvailable method to do what is needed after the initial\nposition was determined.</p>\n",
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
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onDrag",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Event",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>the mousemove event</p>\n"
          }
        ],
        "alias": null,
        "name": "onDrag",
        "shortDoc": "Abstract method called during the onMouseMove event while dragging an\nobject. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Abstract method called during the onMouseMove event while dragging an\nobject.</p>\n",
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
        "linenr": 411,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onDragDrop",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Event",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>the mouseup event</p>\n"
          },
          {
            "type": "String/Ext.dd.DragDrop[]",
            "properties": [

            ],
            "optional": false,
            "name": "id",
            "doc": "<p>In POINT mode, the element\nid this was dropped on.  In INTERSECT mode, an array of dd items this\nwas dropped on.</p>\n"
          }
        ],
        "alias": null,
        "name": "onDragDrop",
        "shortDoc": "Abstract method called when this item is dropped on another DragDrop\nobj ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Abstract method called when this item is dropped on another DragDrop\nobj</p>\n",
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
        "linenr": 364,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onDragEnter",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Event",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>the mousemove event</p>\n"
          },
          {
            "type": "String/Ext.dd.DragDrop[]",
            "properties": [

            ],
            "optional": false,
            "name": "id",
            "doc": "<p>In POINT mode, the element\nid this is hovering over.  In INTERSECT mode, an array of one or more\ndragdrop items being hovered over.</p>\n"
          }
        ],
        "alias": null,
        "name": "onDragEnter",
        "shortDoc": "Abstract method called when this element fist begins hovering over\nanother DragDrop obj ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Abstract method called when this element fist begins hovering over\nanother DragDrop obj</p>\n",
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
        "linenr": 396,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onDragOut",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Event",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>the mousemove event</p>\n"
          },
          {
            "type": "String/Ext.dd.DragDrop[]",
            "properties": [

            ],
            "optional": false,
            "name": "id",
            "doc": "<p>In POINT mode, the element\nid this was hovering over.  In INTERSECT mode, an array of dd items\nthat the mouse is no longer over.</p>\n"
          }
        ],
        "alias": null,
        "name": "onDragOut",
        "shortDoc": "Abstract method called when we are no longer hovering over an element ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Abstract method called when we are no longer hovering over an element</p>\n",
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
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onDragOver",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Event",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>the mousemove event</p>\n"
          },
          {
            "type": "String/Ext.dd.DragDrop[]",
            "properties": [

            ],
            "optional": false,
            "name": "id",
            "doc": "<p>In POINT mode, the element\nid this is hovering over.  In INTERSECT mode, an array of dd items\nbeing hovered over.</p>\n"
          }
        ],
        "alias": null,
        "name": "onDragOver",
        "shortDoc": "Abstract method called when this element is hovering over another\nDragDrop obj ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Abstract method called when this element is hovering over another\nDragDrop obj</p>\n",
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
        "linenr": 421,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onInvalidDrop",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Event",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>the mouseup event</p>\n"
          }
        ],
        "alias": null,
        "name": "onInvalidDrop",
        "shortDoc": "Abstract method called when this item is dropped on an area with no\ndrop target ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Abstract method called when this item is dropped on an area with no\ndrop target</p>\n",
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
        "linenr": 447,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onMouseDown",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Event",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>the mousedown event</p>\n"
          }
        ],
        "alias": null,
        "name": "onMouseDown",
        "shortDoc": "Called when a drag/drop obj gets a mousedown ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Called when a drag/drop obj gets a mousedown</p>\n",
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
        "linenr": 453,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onMouseUp",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Event",
            "properties": [

            ],
            "optional": false,
            "name": "e",
            "doc": "<p>the mouseup event</p>\n"
          }
        ],
        "alias": null,
        "name": "onMouseUp",
        "shortDoc": "Called when a drag/drop obj gets a mouseup ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Called when a drag/drop obj gets a mouseup</p>\n",
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
        "linenr": 715,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-removeFromGroup",
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
            "name": "sGroup",
            "doc": "<p>The group to drop</p>\n"
          }
        ],
        "alias": null,
        "name": "removeFromGroup",
        "shortDoc": "Removes this instance from the supplied interaction group ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Removes this instance from the supplied interaction group</p>\n",
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
        "linenr": 889,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-removeInvalidHandleClass",
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
            "name": "cssClass",
            "doc": "<p>the class of the element(s) you wish to\nre-enable</p>\n"
          }
        ],
        "alias": null,
        "name": "removeInvalidHandleClass",
        "shortDoc": "Unsets an invalid css class ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Unsets an invalid css class</p>\n",
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
        "linenr": 878,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-removeInvalidHandleId",
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
            "doc": "<p>the id of the element to re-enable</p>\n"
          }
        ],
        "alias": null,
        "name": "removeInvalidHandleId",
        "shortDoc": "Unsets an invalid handle id ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Unsets an invalid handle id</p>\n",
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
        "linenr": 868,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-removeInvalidHandleType",
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
            "name": "tagName",
            "doc": "<p>the type of element to unexclude</p>\n"
          }
        ],
        "alias": null,
        "name": "removeInvalidHandleType",
        "shortDoc": "Unsets an excluded tag name set by addInvalidHandleType ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Unsets an excluded tag name set by addInvalidHandleType</p>\n",
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
        "linenr": 1047,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-resetConstraints",
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
            "name": "maintainOffset",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "resetConstraints",
        "shortDoc": "Must be called if you manually reposition a dd element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Must be called if you manually reposition a dd element.</p>\n",
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
        "linenr": 55,
        "owner": "Ext.dd.DD",
        "html_filename": "DD.html",
        "href": "DD.html#Ext-dd-DD-method-setDelta",
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
            "name": "iDeltaX",
            "doc": "<p>the distance from the left</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "iDeltaY",
            "doc": "<p>the distance from the top</p>\n"
          }
        ],
        "alias": null,
        "name": "setDelta",
        "shortDoc": "Sets the pointer offset. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DD.js",
        "doc": "<p>Sets the pointer offset.  You can call this directly to force the\noffset to be in a particular location (e.g., pass in 0,0 to set it\nto the center of the object)</p>\n",
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
        "linenr": 727,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-setDragElId",
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
            "doc": "<p>the id of the element that will be used to initiate the drag</p>\n"
          }
        ],
        "alias": null,
        "name": "setDragElId",
        "shortDoc": "Allows you to specify that an element other than the linked element\nwill be moved with the cursor during a drag ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Allows you to specify that an element other than the linked element\nwill be moved with the cursor during a drag</p>\n",
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
        "linenr": 68,
        "owner": "Ext.dd.DD",
        "html_filename": "DD.html",
        "href": "DD.html#Ext-dd-DD-method-setDragElPos",
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
            "name": "iPageX",
            "doc": "<p>the X coordinate of the mousedown or drag event</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "iPageY",
            "doc": "<p>the Y coordinate of the mousedown or drag event</p>\n"
          }
        ],
        "alias": null,
        "name": "setDragElPos",
        "shortDoc": "Sets the drag element to the location of the mousedown or click event,\nmaintaining the cursor location relative to th...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DD.js",
        "doc": "<p>Sets the drag element to the location of the mousedown or click event,\nmaintaining the cursor location relative to the location on the element\nthat was clicked.  Override this if you want to place the element in a\nlocation other than where the cursor is.</p>\n",
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
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-setHandleElId",
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
            "doc": "<p>the id of the element that will be used to\ninitiate the drag.</p>\n"
          }
        ],
        "alias": null,
        "name": "setHandleElId",
        "shortDoc": "Allows you to specify a child of the linked element that should be\nused to initiate the drag operation. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Allows you to specify a child of the linked element that should be\nused to initiate the drag operation.  An example of this would be if\nyou have a content div with text and links.  Clicking anywhere in the\ncontent area would normally start the drag operation.  Use this method\nto specify that an element inside of the content div is the element\nthat starts the drag operation.</p>\n",
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
        "linenr": 664,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-setInitPosition",
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
            "name": "diffX",
            "doc": "<p>the X offset, default 0</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "diffY",
            "doc": "<p>the Y offset, default 0</p>\n"
          }
        ],
        "alias": null,
        "name": "setInitPosition",
        "shortDoc": "Stores the initial placement of the linked element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Stores the initial placement of the linked element.</p>\n",
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
        "linenr": 754,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-setOuterHandleElId",
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
            "doc": "<p>the id of the element that will be used to initiate the drag</p>\n"
          }
        ],
        "alias": null,
        "name": "setOuterHandleElId",
        "shortDoc": "Allows you to set an element outside of the linked element as a drag\nhandle ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Allows you to set an element outside of the linked element as a drag\nhandle</p>\n",
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
        "linenr": 642,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-setPadding",
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
            "name": "iTop",
            "doc": "<p>Top pad</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "iRight",
            "doc": "<p>Right pad</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "iBot",
            "doc": "<p>Bot pad</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "iLeft",
            "doc": "<p>Left pad</p>\n"
          }
        ],
        "alias": null,
        "name": "setPadding",
        "shortDoc": "Configures the padding for the target zone in px. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Configures the padding for the target zone in px.  Effectively expands\n(or reduces) the virtual object size for targeting calculations.\nSupports css-style shorthand; if only one parameter is passed, all sides\nwill have that padding, and if only two are passed, the top and bottom\nwill have the first param, the left and right the second.</p>\n",
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
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-setXConstraint",
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
            "name": "iLeft",
            "doc": "<p>the number of pixels the element can move to the left</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "iRight",
            "doc": "<p>the number of pixels the element can move to the\nright</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": true,
            "name": "iTickSize",
            "doc": "<p>(optional) parameter for specifying that the\nelement should move iTickSize pixels at a time.</p>\n"
          }
        ],
        "alias": null,
        "name": "setXConstraint",
        "shortDoc": "By default, the element can be dragged any place on the screen. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>By default, the element can be dragged any place on the screen.  Use\nthis method to limit the horizontal travel of the element.  Pass in\n0,0 for the parameters if you want to lock the drag to the y axis.</p>\n",
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
        "linenr": 1026,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-setYConstraint",
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
            "name": "iUp",
            "doc": "<p>the number of pixels the element can move up</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "iDown",
            "doc": "<p>the number of pixels the element can move down</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": true,
            "name": "iTickSize",
            "doc": "<p>(optional) parameter for specifying that the\nelement should move iTickSize pixels at a time.</p>\n"
          }
        ],
        "alias": null,
        "name": "setYConstraint",
        "shortDoc": "By default, the element can be dragged any place on the screen. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>By default, the element can be dragged any place on the screen.  Set\nthis to limit the vertical travel of the element.  Pass in 0,0 for the\nparameters if you want to lock the drag to the x axis.</p>\n",
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
        "linenr": 343,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-startDrag",
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
            "name": "X",
            "doc": "<p>click location</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "Y",
            "doc": "<p>click location</p>\n"
          }
        ],
        "alias": null,
        "name": "startDrag",
        "shortDoc": "Abstract method called after a drag/drop object is clicked\nand the drag or mousedown time thresholds have beeen met. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Abstract method called after a drag/drop object is clicked\nand the drag or mousedown time thresholds have beeen met.</p>\n",
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
        "linenr": 1112,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-toString",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "toString",
        "shortDoc": "toString method ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>toString method</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>string representation of the dd obj</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 197,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-unlock",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "unlock",
        "shortDoc": "Unlocks this instace ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Unlocks this instace</p>\n",
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
        "linenr": 769,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-unreg",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "unreg",
        "shortDoc": "Removes all drag and drop hooks for this element ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Removes all drag and drop hooks for this element</p>\n",
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
        "linenr": 318,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-available",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "available",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>The available property is false until the linked dom element is accessible.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 59,
        "owner": "Ext.dd.DDProxy",
        "html_filename": "DDProxy.html",
        "href": "DDProxy.html#Ext-dd-DDProxy-property-centerFrame",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "centerFrame",
        "shortDoc": "By default the frame is positioned exactly where the drag element is, so\nwe use the cursor offset provided by Ext.dd.DD. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DDProxy.js",
        "doc": "<p>By default the frame is positioned exactly where the drag element is, so\nwe use the cursor offset provided by <a href=\"#/api/Ext.dd.DD\" rel=\"Ext.dd.DD\" class=\"docClass\">Ext.dd.DD</a>.  Another option that works only if\nyou do not have constraints on the obj is to have the drag frame centered\naround the cursor.  Set centerFrame to true for this effect.</p>\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 87,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-config",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "config",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Configuration attributes passed into the constructor</p>\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 466,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-defaultPadding",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "defaultPadding",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Provides default constraint padding to \"constrainTo\" elements (defaults to <code>{left:0, right:0, top:0, bottom:0}</code>).</p>\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 163,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-groups",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "groups",
        "shortDoc": "The group defines a logical collection of DragDrop objects that are\nrelated. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>The group defines a logical collection of DragDrop objects that are\nrelated.  Instances only get events when interacting with other\nDragDrop object in the same group.  This lets us define multiple\ngroups using a single DragDrop subclass if we want. An object in the format {'group1':true, 'group2':true}</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 325,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-hasOuterHandles",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "hasOuterHandles",
        "shortDoc": "By default, drags can only be initiated if the mousedown occurs in the\nregion the linked element is. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>By default, drags can only be initiated if the mousedown occurs in the\nregion the linked element is.  This is done in part to work around a\nbug in some browsers that mis-report the mousedown if the previous\nmouseup happened outside of the window.  This property is set to true\nif outer handles are defined. Defaults to false.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 77,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-id",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "id",
        "shortDoc": "The id of the element associated with this object. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>The id of the element associated with this object.  This is what we\nrefer to as the \"linked element\" because the size and position of\nthis element is used to determine when the drag and drop objects have\ninteracted.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 69,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-ignoreSelf",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "ignoreSelf",
        "shortDoc": "Set to false to enable a DragDrop object to fire drag events while dragging\nover its own Element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Set to false to enable a DragDrop object to fire drag events while dragging\nover its own Element. Defaults to true - DragDrop objects do not by default\nfire drag events to themselves.</p>\n"
      },
      {
        "static": false,
        "type": "String[]",
        "inheritable": false,
        "properties": null,
        "linenr": 139,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-invalidHandleClasses",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "invalidHandleClasses",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>An Array of CSS class names for elements to be considered in valid as drag handles.</p>\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 127,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-invalidHandleIds",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "invalidHandleIds",
        "shortDoc": "An object who's property names identify the IDs of elements to be considered invalid as drag handles. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>An object who's property names identify the IDs of elements to be considered invalid as drag handles.\nA non-null property value identifies the ID as invalid. For example, to prevent\ndragging from being initiated on element ID \"foo\", use:</p>\n\n<pre><code>{\n    foo: true\n}</code></pre>\n\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 115,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-invalidHandleTypes",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "invalidHandleTypes",
        "shortDoc": "An object who's property names identify HTML tags to be considered invalid as drag handles. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>An object who's property names identify HTML tags to be considered invalid as drag handles.\nA non-null property value identifies the tag as invalid. Defaults to the\nfollowing value which prevents drag operations from being initiated by &lt;a> elements:</p>\n\n<pre><code>{\n    A: \"A\"\n}</code></pre>\n\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 204,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-isTarget",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "isTarget",
        "shortDoc": "By default, all instances can be a drop target. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>By default, all instances can be a drop target.  This can be disabled by\nsetting isTarget to false.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 282,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-maintainOffset",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "maintainOffset",
        "shortDoc": "Maintain offsets when we resetconstraints. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Maintain offsets when we resetconstraints.  Set to true when you want\nthe position of the element relative to its parent to stay the same\nwhen the page changes</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 189,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-moveOnly",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "moveOnly",
        "shortDoc": "When set to true, other DD objects in cooperating DDGroups do not receive\nnotification events when this DD object is ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>When set to true, other DD objects in cooperating DDGroups do not receive\nnotification events when this DD object is dragged over them. Defaults to false.</p>\n"
      },
      {
        "static": false,
        "type": "Number[]",
        "inheritable": false,
        "properties": null,
        "linenr": 212,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-padding",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "padding",
        "shortDoc": "The padding configured for this drag and drop object for calculating\nthe drop zone intersection with this object. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>The padding configured for this drag and drop object for calculating\nthe drop zone intersection with this object.\nAn array containing the 4 padding values: [top, right, bottom, left]</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 308,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-primaryButtonOnly",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "primaryButtonOnly",
        "shortDoc": "By default the drag and drop instance will only respond to the primary\nbutton click (left button for a right-handed m...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>By default the drag and drop instance will only respond to the primary\nbutton click (left button for a right-handed mouse).  Set to true to\nallow drag and drop to start with any mouse click that is propogated\nby the browser</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 50,
        "owner": "Ext.dd.DDProxy",
        "html_filename": "DDProxy.html",
        "href": "DDProxy.html#Ext-dd-DDProxy-property-resizeFrame",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "resizeFrame",
        "shortDoc": "By default we resize the drag frame to be the same size as the element\nwe want to drag (this is to get the frame effe...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DDProxy.js",
        "doc": "<p>By default we resize the drag frame to be the same size as the element\nwe want to drag (this is to get the frame effect).  We can turn it off\nif we want a different behavior.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 33,
        "owner": "Ext.dd.DD",
        "html_filename": "DD.html",
        "href": "DD.html#Ext-dd-DD-property-scroll",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "scroll",
        "shortDoc": "When set to true, the utility automatically tries to scroll the browser\nwindow when a drag and drop element is dragge...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DD.js",
        "doc": "<p>When set to true, the utility automatically tries to scroll the browser\nwindow when a drag and drop element is dragged near the viewport boundary.\nDefaults to true.</p>\n"
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
        "type": "Number[]",
        "inheritable": false,
        "properties": null,
        "linenr": 292,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-xTicks",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "xTicks",
        "shortDoc": "Array of pixel locations the element will snap to if we specified a\nhorizontal graduation/interval. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Array of pixel locations the element will snap to if we specified a\nhorizontal graduation/interval.  This array is generated automatically\nwhen you define a tick interval.</p>\n"
      },
      {
        "static": false,
        "type": "Number[]",
        "inheritable": false,
        "properties": null,
        "linenr": 300,
        "owner": "Ext.dd.DragDrop",
        "html_filename": "DragDrop.html",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-yTicks",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "yTicks",
        "shortDoc": "Array of pixel locations the element will snap to if we specified a\nvertical graduation/interval. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
        "doc": "<p>Array of pixel locations the element will snap to if we specified a\nvertical graduation/interval.  This array is generated automatically\nwhen you define a tick interval.</p>\n"
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
    "Ext.dd.DragDrop",
    "Ext.dd.DD"
  ],
  "alias": null,
  "name": "Ext.dd.DDProxy",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DDProxy.js",
  "doc": "<p>A DragDrop implementation that inserts an empty, bordered div into\nthe document that follows the cursor during drag operations.  At the time of\nthe click, the frame div is resized to the dimensions of the linked html\nelement, and moved to the exact location of the linked element.</p>\n\n<p>References to the \"frame\" element refer to the single proxy element that\nwas created to be dragged in place of all DDProxy elements on the\npage.</p>\n",
  "alternateClassNames": [

  ]
});