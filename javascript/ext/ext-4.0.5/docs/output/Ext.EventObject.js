Ext.data.JsonP.Ext_EventObject({
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
  "extends": "Ext.Base",
  "html_filename": "EventObject.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "EventObject.html#Ext-EventObject",
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
        "linenr": 468,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-method-correctWheelDelta",
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
            "name": "delta",
            "doc": "<p>The delta value.</p>\n"
          }
        ],
        "alias": null,
        "name": "correctWheelDelta",
        "shortDoc": "Correctly scales a given wheel delta. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Correctly scales a given wheel delta.</p>\n",
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
        "linenr": 367,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-method-getCharCode",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getCharCode",
        "shortDoc": "Gets the character code for the event. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Gets the character code for the event.</p>\n",
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
        "linenr": 375,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-method-getKey",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getKey",
        "shortDoc": "Returns a normalized keyCode for the event. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Returns a normalized keyCode for the event.</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>The key code</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 394,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-method-getPageX",
        "protected": false,
        "deprecated": {
          "text": "<p>Replaced by <a href=\"#/api/Ext.EventObject-method-getX\" rel=\"Ext.EventObject-method-getX\" class=\"docClass\">getX</a></p>\n",
          "tagname": "deprecated",
          "version": "4.0",
          "doc": null
        },
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getPageX",
        "shortDoc": "Gets the x coordinate of the event. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Gets the x coordinate of the event.</p>\n",
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
        "linenr": 403,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-method-getPageY",
        "protected": false,
        "deprecated": {
          "text": "<p>Replaced by <a href=\"#/api/Ext.EventObject-method-getY\" rel=\"Ext.EventObject-method-getY\" class=\"docClass\">getY</a></p>\n",
          "tagname": "deprecated",
          "version": "4.0",
          "doc": null
        },
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getPageY",
        "shortDoc": "Gets the y coordinate of the event. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Gets the y coordinate of the event.</p>\n",
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
        "linenr": 598,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-method-getPoint",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getPoint",
        "shortDoc": "Returns a point object that consists of the object coordinates. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Returns a point object that consists of the object coordinates.</p>\n",
        "return": {
          "type": "Ext.util.Point",
          "properties": null,
          "name": "return",
          "doc": "<p>point</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 454,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-method-getRelatedTarget",
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
            "doc": "<p>(optional) A simple selector to filter the target or look for an ancestor of the target</p>\n"
          },
          {
            "type": "Number/HTMLElement",
            "properties": [

            ],
            "optional": true,
            "name": "maxDepth",
            "doc": "<p>(optional) The max depth to search as a number or element (defaults to 10 || document.body)</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "returnEl",
            "doc": "<p>(optional) True to return a <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> object instead of DOM node</p>\n"
          }
        ],
        "alias": null,
        "name": "getRelatedTarget",
        "shortDoc": "Gets the related target. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Gets the related target.</p>\n",
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
        "linenr": 440,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-method-getTarget",
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
            "doc": "<p>(optional) A simple selector to filter the target or look for an ancestor of the target</p>\n"
          },
          {
            "type": "Number/HTMLElement",
            "properties": [

            ],
            "optional": true,
            "name": "maxDepth",
            "doc": "<p>(optional) The max depth to search as a number or element (defaults to 10 || document.body)</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "returnEl",
            "doc": "<p>(optional) True to return a <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> object instead of DOM node</p>\n"
          }
        ],
        "alias": null,
        "name": "getTarget",
        "shortDoc": "Gets the target for the event. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Gets the target for the event.</p>\n",
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
        "linenr": 522,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-method-getWheelDelta",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getWheelDelta",
        "shortDoc": "Normalizes mouse wheel y-delta across browsers. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Normalizes mouse wheel y-delta across browsers. To get x-delta information, use\n<a href=\"#/api/Ext.EventObject-method-getWheelDeltas\" rel=\"Ext.EventObject-method-getWheelDeltas\" class=\"docClass\">getWheelDeltas</a> instead.</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>The mouse wheel y-delta</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 483,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-method-getWheelDeltas",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getWheelDeltas",
        "shortDoc": "Returns the mouse wheel deltas for this event. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Returns the mouse wheel deltas for this event.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>An object with \"x\" and \"y\" properties holding the mouse wheel deltas.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 412,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-method-getX",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getX",
        "shortDoc": "Gets the x coordinate of the event. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Gets the x coordinate of the event.</p>\n",
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
        "linenr": 428,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-method-getXY",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getXY",
        "shortDoc": "Gets the page coordinates of the event. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Gets the page coordinates of the event.</p>\n",
        "return": {
          "type": "Number[]",
          "properties": null,
          "name": "return",
          "doc": "<p>The xy values like [x, y]</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 420,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-method-getY",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getY",
        "shortDoc": "Gets the y coordinate of the event. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Gets the y coordinate of the event.</p>\n",
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
        "linenr": 607,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-method-hasModifier",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "hasModifier",
        "shortDoc": "Returns true if the control, meta, shift or alt key was pressed during this event. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Returns true if the control, meta, shift or alt key was pressed during this event.</p>\n",
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
        "linenr": 615,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-method-injectEvent",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.Element/HTMLElement",
            "properties": [

            ],
            "optional": true,
            "name": "target",
            "doc": "<p>(optional) If specified, the target for the event. This\nis likely to be used when relaying a DOM event. If not specified, <a href=\"#/api/Ext.EventObject-method-getTarget\" rel=\"Ext.EventObject-method-getTarget\" class=\"docClass\">getTarget</a>\nis used to determine the target.</p>\n"
          }
        ],
        "alias": null,
        "name": "injectEvent",
        "shortDoc": "Injects a DOM event using the data in this object and (optionally) a new target. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Injects a DOM event using the data in this object and (optionally) a new target.\nThis is a low-level technique and not likely to be used by application code. The\ncurrently supported event types are:</p>\n\n<p><b>HTMLEvents</b></p>\n\n\n<ul>\n<li>load</li>\n<li>unload</li>\n<li>select</li>\n<li>change</li>\n<li>submit</li>\n<li>reset</li>\n<li>resize</li>\n<li>scroll</li>\n</ul>\n\n\n<p><b>MouseEvents</b></p>\n\n\n<ul>\n<li>click</li>\n<li>dblclick</li>\n<li>mousedown</li>\n<li>mouseup</li>\n<li>mouseover</li>\n<li>mousemove</li>\n<li>mouseout</li>\n</ul>\n\n\n<p><b>UIEvents</b></p>\n\n\n<ul>\n<li>focusin</li>\n<li>focusout</li>\n<li>activate</li>\n<li>focus</li>\n<li>blur</li>\n</ul>\n\n",
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
        "linenr": 571,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-method-isNavKeyPress",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isNavKeyPress",
        "shortDoc": "Checks if the key pressed was a \"navigation\" key ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Checks if the key pressed was a \"navigation\" key</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if the press is a navigation keypress</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 585,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-method-isSpecialKey",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isSpecialKey",
        "shortDoc": "Checks if the key pressed was a \"special\" key ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Checks if the key pressed was a \"special\" key</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if the press is a special keypress</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 344,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-method-preventDefault",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "preventDefault",
        "shortDoc": "Prevents the browsers default handling of the event. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Prevents the browsers default handling of the event.</p>\n",
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
        "linenr": 336,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-method-stopEvent",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "stopEvent",
        "shortDoc": "Stop the event (preventDefault and stopPropagation) ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Stop the event (preventDefault and stopPropagation)</p>\n",
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
        "linenr": 353,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-method-stopPropagation",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "stopPropagation",
        "shortDoc": "Cancels bubbling of the event. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Cancels bubbling of the event.</p>\n",
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
        "linenr": 533,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-method-within",
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
            "doc": "<p>The id, DOM element or <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> to check</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "related",
            "doc": "<p>(optional) true to test if the related target is within el instead of the target</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "allowEl",
            "doc": "<p>(optional) true to also check if the passed element is the target or related target</p>\n"
          }
        ],
        "alias": null,
        "name": "within",
        "shortDoc": "Returns true if the target of this event is a child of el. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Returns true if the target of this event is a child of el.  Unless the allowEl parameter is set, it will return false if if the target is el.\nExample usage:</p>\n\n<pre><code>// Handle click on any child of an element\nExt.getBody().on('click', function(e){\n    if(e.within('some-el')){\n        alert('Clicked on a child of some-el!');\n    }\n});\n\n// Handle click directly on an element, ignoring clicks on child nodes\nExt.getBody().on('click', function(e,t){\n    if((t.id == 'some-el') && !e.within(t, true)){\n        alert('Clicked directly on some-el!');\n    }\n});\n</code></pre>\n\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      }
    ],
    "property": [
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 99,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-A",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "A",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 47,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-ALT",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "ALT",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 101,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-B",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "B",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 33,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-BACKSPACE",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "BACKSPACE",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 103,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-C",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "C",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 51,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-CAPS_LOCK",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "CAPS_LOCK",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 151,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-CONTEXT_MENU",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "CONTEXT_MENU",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 45,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-CTRL",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "CTRL",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 105,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-D",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "D",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 77,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-DELETE",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "DELETE",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 71,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-DOWN",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "DOWN",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 107,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-E",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "E",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 95,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-EIGHT",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "EIGHT",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 61,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-END",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "END",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 39,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-ENTER",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "ENTER",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 53,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-ESC",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "ESC",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 109,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-F",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "F",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 183,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-F1",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "F1",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 201,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-F10",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "F10",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 203,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-F11",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "F11",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 205,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-F12",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "F12",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 185,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-F2",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "F2",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 187,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-F3",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "F3",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 189,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-F4",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "F4",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 191,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-F5",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "F5",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 193,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-F6",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "F6",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 195,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-F7",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "F7",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 197,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-F8",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "F8",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 199,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-F9",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "F9",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 89,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-FIVE",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "FIVE",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 87,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-FOUR",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "FOUR",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 111,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-G",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "G",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 113,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-H",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "H",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 63,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-HOME",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "HOME",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 115,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-I",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "I",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 75,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-INSERT",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "INSERT",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 117,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-J",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "J",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 119,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-K",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "K",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 121,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-L",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "L",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 65,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-LEFT",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "LEFT",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 123,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-M",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "M",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 125,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-N",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "N",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 97,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-NINE",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "NINE",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 37,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-NUM_CENTER",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "NUM_CENTER",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 181,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-NUM_DIVISION",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "NUM_DIVISION",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 169,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-NUM_EIGHT",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "NUM_EIGHT",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 163,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-NUM_FIVE",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "NUM_FIVE",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 161,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-NUM_FOUR",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "NUM_FOUR",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 177,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-NUM_MINUS",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "NUM_MINUS",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 173,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-NUM_MULTIPLY",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "NUM_MULTIPLY",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 171,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-NUM_NINE",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "NUM_NINE",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 155,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-NUM_ONE",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "NUM_ONE",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 179,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-NUM_PERIOD",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "NUM_PERIOD",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 175,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-NUM_PLUS",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "NUM_PLUS",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 167,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-NUM_SEVEN",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "NUM_SEVEN",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 165,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-NUM_SIX",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "NUM_SIX",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 159,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-NUM_THREE",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "NUM_THREE",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 157,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-NUM_TWO",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "NUM_TWO",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 153,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-NUM_ZERO",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "NUM_ZERO",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 127,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-O",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "O",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 81,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-ONE",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "ONE",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 129,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-P",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "P",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 59,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-PAGE_DOWN",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "PAGE_DOWN",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 57,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-PAGE_UP",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "PAGE_UP",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 49,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-PAUSE",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "PAUSE",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 73,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-PRINT_SCREEN",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "PRINT_SCREEN",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 131,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-Q",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "Q",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 133,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-R",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "R",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 41,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-RETURN",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "RETURN",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 69,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-RIGHT",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "RIGHT",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 135,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-S",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "S",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 93,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-SEVEN",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "SEVEN",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 43,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-SHIFT",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "SHIFT",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 91,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-SIX",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "SIX",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 55,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-SPACE",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "SPACE",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 137,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-T",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "T",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 35,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-TAB",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "TAB",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 85,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-THREE",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "THREE",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 83,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-TWO",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "TWO",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 139,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-U",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "U",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 67,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-UP",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "UP",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 141,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-V",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "V",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 143,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-W",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "W",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 207,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-WHEEL_SCALE",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "WHEEL_SCALE",
        "shortDoc": "The mouse wheel delta scaling factor. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>The mouse wheel delta scaling factor. This value depends on browser version and OS and\nattempts to produce a similar scrolling experience across all platforms and browsers.</p>\n\n<p>To change this value:</p>\n\n<pre><code> Ext.EventObjectImpl.prototype.WHEEL_SCALE = 72;\n</code></pre>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 145,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-X",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "X",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 147,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-Y",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "Y",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 149,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-Z",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "Z",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 79,
        "owner": "Ext.EventObject",
        "html_filename": "EventObject.html",
        "href": "EventObject.html#Ext-EventObject-property-ZERO",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "ZERO",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
        "doc": "<p>Key constant</p>\n"
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
  "singleton": true,
  "private": false,
  "tagname": "class",
  "author": null,
  "superclasses": [
    "Ext.Base"
  ],
  "alias": null,
  "name": "Ext.EventObject",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventObject.js",
  "doc": "<p>Just as <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> wraps around a native DOM node, <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a>\nwraps the browser's native event-object normalizing cross-browser differences,\nsuch as which mouse button is clicked, keys pressed, mechanisms to stop\nevent-propagation along with a method to prevent default actions from taking place.</p>\n\n<p>For example:</p>\n\n<pre><code>function handleClick(e, t){ // e is not a standard event object, it is a <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a>\n    e.preventDefault();\n    var target = e.getTarget(); // same as t (the target HTMLElement)\n    ...\n}\n\nvar myDiv = <a href=\"#/api/Ext-method-get\" rel=\"Ext-method-get\" class=\"docClass\">Ext.get</a>(\"myDiv\");  // get reference to an <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>\nmyDiv.on(         // 'on' is shorthand for addListener\n    \"click\",      // perform an action on click of myDiv\n    handleClick   // reference to the action handler\n);\n\n// other methods to do the same:\nExt.EventManager.on(\"myDiv\", 'click', handleClick);\nExt.EventManager.addListener(\"myDiv\", 'click', handleClick);\n</code></pre>\n",
  "alternateClassNames": [

  ]
});