Ext.data.JsonP.Ext_dd_DragDropManager({
  "static": false,
  "mixedInto": [

  ],
  "inheritable": false,
  "xtypes": [

  ],
  "linenr": 10,
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
  "extends": "Ext.Base",
  "html_filename": "DragDropManager.html",
  "allMixins": [

  ],
  "docauthor": null,
  "xtype": null,
  "href": "DragDropManager.html#Ext-dd-DragDropManager",
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
        "linenr": 740,
        "owner": "Ext.dd.DragDropManager",
        "html_filename": "DragDropManager.html",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getBestMatch",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.dd.DragDrop[]",
            "properties": [

            ],
            "optional": false,
            "name": "dds",
            "doc": "<p>The array of drag and drop objects\ntargeted</p>\n"
          }
        ],
        "alias": null,
        "name": "getBestMatch",
        "shortDoc": "Helper function for getting the best match from the list of drag\nand drop objects returned by the drag and drop event...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
        "doc": "<p>Helper function for getting the best match from the list of drag\nand drop objects returned by the drag and drop events when we are\nin INTERSECT mode.  It returns either the first object that the\ncursor is over, or the object that has the greatest overlap with\nthe dragged element.</p>\n",
        "return": {
          "type": "Ext.dd.DragDrop",
          "properties": null,
          "name": "return",
          "doc": "<p>The best single match</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1022,
        "owner": "Ext.dd.DragDropManager",
        "html_filename": "DragDropManager.html",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getCss",
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
            "doc": "<p>the id of the elment to get</p>\n"
          }
        ],
        "alias": null,
        "name": "getCss",
        "shortDoc": "Returns the style property for the DOM element (i.e.,\ndocument.getElById(id).style) ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
        "doc": "<p>Returns the style property for the DOM element (i.e.,\ndocument.getElById(id).style)</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>The style property of the element</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 421,
        "owner": "Ext.dd.DragDropManager",
        "html_filename": "DragDropManager.html",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getDDById",
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
            "doc": "<p>the id of the DragDrop object</p>\n"
          }
        ],
        "alias": null,
        "name": "getDDById",
        "shortDoc": "Returns the DragDrop instance for a given id ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
        "doc": "<p>Returns the DragDrop instance for a given id</p>\n",
        "return": {
          "type": "Ext.dd.DragDrop",
          "properties": null,
          "name": "return",
          "doc": "<p>the drag drop object, null if it is not found</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1011,
        "owner": "Ext.dd.DragDropManager",
        "html_filename": "DragDropManager.html",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getElement",
        "protected": false,
        "deprecated": {
          "text": "<p>use Ext.lib.Ext.getDom instead</p>\n",
          "tagname": "deprecated",
          "version": null,
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
            "name": "id",
            "doc": "<p>the id of the elment to get</p>\n"
          }
        ],
        "alias": null,
        "name": "getElement",
        "shortDoc": "Returns the actual DOM element ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
        "doc": "<p>Returns the actual DOM element</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>The element</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 854,
        "owner": "Ext.dd.DragDropManager",
        "html_filename": "DragDropManager.html",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getLocation",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.dd.DragDrop",
            "properties": [

            ],
            "optional": false,
            "name": "oDD",
            "doc": "<p>the drag and drop object to get the</p>\n\n<pre><code>                  location for\n</code></pre>\n"
          }
        ],
        "alias": null,
        "name": "getLocation",
        "shortDoc": "Returns a Region object containing the drag and drop element's position\nand size, including the padding configured fo...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
        "doc": "<p>Returns a Region object containing the drag and drop element's position\nand size, including the padding configured for it</p>\n",
        "return": {
          "type": "Ext.util.Region",
          "properties": null,
          "name": "return",
          "doc": "<p>a Region object representing the total area</p>\n\n<pre><code>                        the element occupies, including any padding\n                        the instance is configured for.\n</code></pre>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1061,
        "owner": "Ext.dd.DragDropManager",
        "html_filename": "DragDropManager.html",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getPosX",
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
            "doc": "<p>the element for which to get the position</p>\n"
          }
        ],
        "alias": null,
        "name": "getPosX",
        "shortDoc": "Returns the X position of an html element ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
        "doc": "<p>Returns the X position of an html element</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>the X coordinate</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1070,
        "owner": "Ext.dd.DragDropManager",
        "html_filename": "DragDropManager.html",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getPosY",
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
            "doc": "<p>the element for which to get the position</p>\n"
          }
        ],
        "alias": null,
        "name": "getPosY",
        "shortDoc": "Returns the Y position of an html element ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
        "doc": "<p>Returns the Y position of an html element</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>the Y coordinate</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 349,
        "owner": "Ext.dd.DragDropManager",
        "html_filename": "DragDropManager.html",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getRelated",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.dd.DragDrop",
            "properties": [

            ],
            "optional": false,
            "name": "p_oDD",
            "doc": "<p>the obj to get related data for</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": false,
            "name": "bTargetsOnly",
            "doc": "<p>if true, only return targetable objs</p>\n"
          }
        ],
        "alias": null,
        "name": "getRelated",
        "shortDoc": "Returns the drag and drop instances that are in all groups the\npassed in instance belongs to. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
        "doc": "<p>Returns the drag and drop instances that are in all groups the\npassed in instance belongs to.</p>\n",
        "return": {
          "type": "Ext.dd.DragDrop[]",
          "properties": null,
          "name": "return",
          "doc": "<p>the related instances</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1150,
        "owner": "Ext.dd.DragDropManager",
        "html_filename": "DragDropManager.html",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getScrollLeft",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getScrollLeft",
        "shortDoc": "Gets the scrollLeft ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
        "doc": "<p>Gets the scrollLeft</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>the document's scrollTop</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1142,
        "owner": "Ext.dd.DragDropManager",
        "html_filename": "DragDropManager.html",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getScrollTop",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getScrollTop",
        "shortDoc": "Gets the scrollTop ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
        "doc": "<p>Gets the scrollTop</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>the document's scrollTop</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1132,
        "owner": "Ext.dd.DragDropManager",
        "html_filename": "DragDropManager.html",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getStyle",
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
            "doc": "<p>the element</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "styleProp",
            "doc": "<p>the style property</p>\n"
          }
        ],
        "alias": null,
        "name": "getStyle",
        "shortDoc": "Returns the specified element style property ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
        "doc": "<p>Returns the specified element style property</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The value of the style property</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 1205,
        "owner": "Ext.dd.DragDropManager",
        "html_filename": "DragDropManager.html",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-handleWasClicked",
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
            "doc": "<p>the html element to inspect</p>\n"
          }
        ],
        "alias": null,
        "name": "handleWasClicked",
        "shortDoc": "Recursively searches the immediate parent and all child nodes for\nthe handle element in order to determine wheter or ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
        "doc": "<p>Recursively searches the immediate parent and all child nodes for\nthe handle element in order to determine wheter or not it was\nclicked.</p>\n",
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
        "linenr": 337,
        "owner": "Ext.dd.DragDropManager",
        "html_filename": "DragDropManager.html",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-isDragDrop",
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
            "doc": "<p>the element id to check</p>\n"
          }
        ],
        "alias": null,
        "name": "isDragDrop",
        "shortDoc": "Utility function to determine if a given element has been\nregistered as a drag drop item. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
        "doc": "<p>Utility function to determine if a given element has been\nregistered as a drag drop item.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>true if this element is a DragDrop item,\nfalse otherwise</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 408,
        "owner": "Ext.dd.DragDropManager",
        "html_filename": "DragDropManager.html",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-isHandle",
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
            "doc": "<p>the element id to check</p>\n"
          }
        ],
        "alias": null,
        "name": "isHandle",
        "shortDoc": "Utility function to determine if a given element has been\nregistered as a drag drop handle for the given Drag Drop ob...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
        "doc": "<p>Utility function to determine if a given element has been\nregistered as a drag drop handle for the given Drag Drop object.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>true if this element is a DragDrop handle, false\notherwise</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 374,
        "owner": "Ext.dd.DragDropManager",
        "html_filename": "DragDropManager.html",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-isLegalTarget",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.dd.DragDrop",
            "properties": [

            ],
            "optional": false,
            "name": "oDD",
            "doc": "<p>the drag obj</p>\n"
          },
          {
            "type": "Ext.dd.DragDrop",
            "properties": [

            ],
            "optional": false,
            "name": "oTargetDD",
            "doc": "<p>the target</p>\n"
          }
        ],
        "alias": null,
        "name": "isLegalTarget",
        "shortDoc": "Returns true if the specified dd target is a legal target for\nthe specifice drag obj ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
        "doc": "<p>Returns true if the specified dd target is a legal target for\nthe specifice drag obj</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>true if the target is a legal target for the\ndd obj</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 200,
        "owner": "Ext.dd.DragDropManager",
        "html_filename": "DragDropManager.html",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-isLocked",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isLocked",
        "shortDoc": "Is drag and drop locked? ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
        "doc": "<p>Is drag and drop locked?</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if drag and drop is locked, false otherwise.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 394,
        "owner": "Ext.dd.DragDropManager",
        "html_filename": "DragDropManager.html",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-isTypeOfDD",
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
            "name": "the",
            "doc": "<p>object to evaluate</p>\n"
          }
        ],
        "alias": null,
        "name": "isTypeOfDD",
        "shortDoc": "My goal is to be able to transparently determine if an object is\ntypeof DragDrop, and the exact subclass of DragDrop. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
        "doc": "<p>My goal is to be able to transparently determine if an object is\ntypeof DragDrop, and the exact subclass of DragDrop.  typeof\nreturns \"object\", oDD.constructor.toString() always returns\n\"DragDrop\" and not the name of the subclass.  So for now it just\nevaluates a well-known variable in DragDrop.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>true if typeof oDD = DragDrop</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 188,
        "owner": "Ext.dd.DragDropManager",
        "html_filename": "DragDropManager.html",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-lock",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "lock",
        "shortDoc": "Lock all drag and drop functionality ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
        "doc": "<p>Lock all drag and drop functionality</p>\n",
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
        "linenr": 1158,
        "owner": "Ext.dd.DragDropManager",
        "html_filename": "DragDropManager.html",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-moveToEl",
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
            "name": "moveEl",
            "doc": "<p>The element to move</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "targetEl",
            "doc": "<p>The position reference element</p>\n"
          }
        ],
        "alias": null,
        "name": "moveToEl",
        "shortDoc": "Sets the x/y position of an element to the location of the\ntarget element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
        "doc": "<p>Sets the x/y position of an element to the location of the\ntarget element.</p>\n",
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
        "linenr": 1169,
        "owner": "Ext.dd.DragDropManager",
        "html_filename": "DragDropManager.html",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-numericSort",
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
            "name": "a",
            "doc": "\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "b",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "numericSort",
        "shortDoc": "Numeric array sort function ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
        "doc": "<p>Numeric array sort function</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>positive, negative or 0</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 786,
        "owner": "Ext.dd.DragDropManager",
        "html_filename": "DragDropManager.html",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-refreshCache",
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
            "name": "groups",
            "doc": "<p>an associative array of groups to refresh</p>\n"
          }
        ],
        "alias": null,
        "name": "refreshCache",
        "shortDoc": "Refreshes the cache of the top-left and bottom-right points of the\ndrag and drop objects in the specified group(s). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
        "doc": "<p>Refreshes the cache of the top-left and bottom-right points of the\ndrag and drop objects in the specified group(s).  This is in the\nformat that is stored in the drag and drop instance, so typical\nusage is:\n<code>\nExt.dd.DragDropManager.refreshCache(ddinstance.groups);\n</code>\nAlternatively:\n<code>\nExt.dd.DragDropManager.refreshCache({group1:true, group2:true});\n</code>\n@TODO this really should be an indexed array.  Alternatively this\nmethod could accept both.</p>\n",
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
        "owner": "Ext.dd.DragDropManager",
        "html_filename": "DragDropManager.html",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-regDragDrop",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.dd.DragDrop",
            "properties": [

            ],
            "optional": false,
            "name": "oDD",
            "doc": "<p>the DragDrop object to register</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "sGroup",
            "doc": "<p>the name of the group this element belongs to</p>\n"
          }
        ],
        "alias": null,
        "name": "regDragDrop",
        "shortDoc": "Each DragDrop instance must be registered with the DragDropManager. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
        "doc": "<p>Each DragDrop instance must be registered with the DragDropManager.\nThis is executed in DragDrop.init()</p>\n",
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
        "linenr": 322,
        "owner": "Ext.dd.DragDropManager",
        "html_filename": "DragDropManager.html",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-regHandle",
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
            "name": "sDDId",
            "doc": "<p>the DragDrop id this element is a handle for</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "sHandleId",
            "doc": "<p>the id of the element that is the drag\nhandle</p>\n"
          }
        ],
        "alias": null,
        "name": "regHandle",
        "shortDoc": "Each DragDrop handle element must be registered. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
        "doc": "<p>Each DragDrop handle element must be registered.  This is done\nautomatically when executing DragDrop.setHandleElId()</p>\n",
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
        "linenr": 476,
        "owner": "Ext.dd.DragDropManager",
        "html_filename": "DragDropManager.html",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-startDrag",
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
            "doc": "<p>the X position of the original mousedown</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "y",
            "doc": "<p>the Y position of the original mousedown</p>\n"
          }
        ],
        "alias": null,
        "name": "startDrag",
        "shortDoc": "Fired when either the drag pixel threshol or the mousedown hold\ntime threshold has been met. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
        "doc": "<p>Fired when either the drag pixel threshol or the mousedown hold\ntime threshold has been met.</p>\n",
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
        "linenr": 520,
        "owner": "Ext.dd.DragDropManager",
        "html_filename": "DragDropManager.html",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-stopEvent",
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
            "doc": "<p>the event as returned by this.getEvent()</p>\n"
          }
        ],
        "alias": null,
        "name": "stopEvent",
        "shortDoc": "Utility to stop event propagation and event default, if these\nfeatures are turned on. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
        "doc": "<p>Utility to stop event propagation and event default, if these\nfeatures are turned on.</p>\n",
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
        "linenr": 1079,
        "owner": "Ext.dd.DragDropManager",
        "html_filename": "DragDropManager.html",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-swapNode",
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
            "name": "n1",
            "doc": "<p>the first node to swap</p>\n"
          },
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "n2",
            "doc": "<p>the other node to swap</p>\n"
          }
        ],
        "alias": null,
        "name": "swapNode",
        "shortDoc": "Swap two nodes. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
        "doc": "<p>Swap two nodes.  In IE, we use the native method, for others we\nemulate the IE behavior</p>\n",
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
        "linenr": 194,
        "owner": "Ext.dd.DragDropManager",
        "html_filename": "DragDropManager.html",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-unlock",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "unlock",
        "shortDoc": "Unlock all drag and drop functionality ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
        "doc": "<p>Unlock all drag and drop functionality</p>\n",
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
        "linenr": 827,
        "owner": "Ext.dd.DragDropManager",
        "html_filename": "DragDropManager.html",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-verifyEl",
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
            "doc": "<p>the element to check</p>\n"
          }
        ],
        "alias": null,
        "name": "verifyEl",
        "shortDoc": "This checks to make sure an element exists and is in the DOM. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
        "doc": "<p>This checks to make sure an element exists and is in the DOM.  The\nmain purpose is to handle cases where innerHTML is used to remove\ndrag and drop objects from the DOM.  IE provides an 'unspecified\nerror' when trying to access the offsetParent of such an element</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>true if the element looks usable</p>\n"
        }
      }
    ],
    "property": [
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 129,
        "owner": "Ext.dd.DragDropManager",
        "html_filename": "DragDropManager.html",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-INTERSECT",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "INTERSECT",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
        "doc": "<p>In intersect mode, drag and drop interaction is defined by the\noverlap of two or more drag and drop objects.</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 121,
        "owner": "Ext.dd.DragDropManager",
        "html_filename": "DragDropManager.html",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-POINT",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "POINT",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
        "doc": "<p>In point mode, drag and drop interaction is defined by the\nlocation of the cursor during the drag/drop</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 223,
        "owner": "Ext.dd.DragDropManager",
        "html_filename": "DragDropManager.html",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-clickPixelThresh",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "clickPixelThresh",
        "shortDoc": "The number of pixels that the mouse needs to move after the\nmousedown before the drag is initiated. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
        "doc": "<p>The number of pixels that the mouse needs to move after the\nmousedown before the drag is initiated.  Default=3;</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 231,
        "owner": "Ext.dd.DragDropManager",
        "html_filename": "DragDropManager.html",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-clickTimeThresh",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "clickTimeThresh",
        "shortDoc": "The number of milliseconds after the mousedown event to initiate the\ndrag if we don't get a mouseup event. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
        "doc": "<p>The number of milliseconds after the mousedown event to initiate the\ndrag if we don't get a mouseup event. Default=350</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 137,
        "owner": "Ext.dd.DragDropManager",
        "html_filename": "DragDropManager.html",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-mode",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "mode",
        "shortDoc": "The current drag and drop mode. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
        "doc": "<p>The current drag and drop mode.  Default: POINT</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 78,
        "owner": "Ext.dd.DragDropManager",
        "html_filename": "DragDropManager.html",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-preventDefault",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "preventDefault",
        "shortDoc": "Flag to determine if we should prevent the default behavior of the\nevents we define. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
        "doc": "<p>Flag to determine if we should prevent the default behavior of the\nevents we define. By default this is true, but this can be set to\nfalse if you need the default behavior (not recommended)</p>\n"
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
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 87,
        "owner": "Ext.dd.DragDropManager",
        "html_filename": "DragDropManager.html",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-stopPropagation",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "stopPropagation",
        "shortDoc": "Flag to determine if we should stop the propagation of the events\nwe generate. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
        "doc": "<p>Flag to determine if we should stop the propagation of the events\nwe generate. This is true by default but you may want to set it to\nfalse if the html element contains other features that require the\nmouse click.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 215,
        "owner": "Ext.dd.DragDropManager",
        "html_filename": "DragDropManager.html",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-useCache",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "useCache",
        "shortDoc": "Set useCache to false if you want to force object the lookup of each\ndrag and drop linked element constantly during a...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
        "doc": "<p>Set useCache to false if you want to force object the lookup of each\ndrag and drop linked element constantly during a drag.</p>\n"
      }
    ]
  },
  "deprecated": null,
  "singleton": true,
  "private": false,
  "tagname": "class",
  "author": null,
  "superclasses": [
    "Ext.Base"
  ],
  "alias": null,
  "name": "Ext.dd.DragDropManager",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
  "doc": "<p>DragDropManager is a singleton that tracks the element interaction for\nall DragDrop items in the window.  Generally, you will not call\nthis class directly, but it does have helper methods that could\nbe useful in your DragDrop implementations.</p>\n",
  "alternateClassNames": [
    "Ext.dd.DragDropMgr",
    "Ext.dd.DDM"
  ]
});