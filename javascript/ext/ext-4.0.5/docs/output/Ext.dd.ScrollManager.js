Ext.data.JsonP.Ext_dd_ScrollManager({
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
  "html_filename": "ScrollManager.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "ScrollManager.html#Ext-dd-ScrollManager",
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
        "linenr": 213,
        "owner": "Ext.dd.ScrollManager",
        "html_filename": "ScrollManager.html",
        "href": "ScrollManager.html#Ext-dd-ScrollManager-method-refreshCache",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "refreshCache",
        "shortDoc": "Manually trigger a cache refresh. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/ScrollManager.js",
        "doc": "<p>Manually trigger a cache refresh.</p>\n",
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
        "linenr": 136,
        "owner": "Ext.dd.ScrollManager",
        "html_filename": "ScrollManager.html",
        "href": "ScrollManager.html#Ext-dd-ScrollManager-method-register",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/HTMLElement/Ext.Element/String[]/HTMLElement[]/Ext.Element[]",
            "properties": [

            ],
            "optional": false,
            "name": "el",
            "doc": "<p>The id of or the element to be scrolled or an array of either</p>\n"
          }
        ],
        "alias": null,
        "name": "register",
        "shortDoc": "Registers new overflow element(s) to auto scroll ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/ScrollManager.js",
        "doc": "<p>Registers new overflow element(s) to auto scroll</p>\n",
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
        "linenr": 152,
        "owner": "Ext.dd.ScrollManager",
        "html_filename": "ScrollManager.html",
        "href": "ScrollManager.html#Ext-dd-ScrollManager-method-unregister",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/HTMLElement/Ext.Element/String[]/HTMLElement[]/Ext.Element[]",
            "properties": [

            ],
            "optional": false,
            "name": "el",
            "doc": "<p>The id of or the element to be removed or an array of either</p>\n"
          }
        ],
        "alias": null,
        "name": "unregister",
        "shortDoc": "Unregisters overflow element(s) so they are no longer scrolled ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/ScrollManager.js",
        "doc": "<p>Unregisters overflow element(s) so they are no longer scrolled</p>\n",
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
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 199,
        "owner": "Ext.dd.ScrollManager",
        "html_filename": "ScrollManager.html",
        "href": "ScrollManager.html#Ext-dd-ScrollManager-property-animDuration",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "animDuration",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/ScrollManager.js",
        "doc": "<p>The animation duration in seconds -\nMUST BE less than Ext.dd.ScrollManager.frequency! (defaults to .4)</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 193,
        "owner": "Ext.dd.ScrollManager",
        "html_filename": "ScrollManager.html",
        "href": "ScrollManager.html#Ext-dd-ScrollManager-property-animate",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "animate",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/ScrollManager.js",
        "doc": "<p>True to animate the scroll (defaults to true)</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 206,
        "owner": "Ext.dd.ScrollManager",
        "html_filename": "ScrollManager.html",
        "href": "ScrollManager.html#Ext-dd-ScrollManager-property-ddGroup",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "ddGroup",
        "shortDoc": "The named drag drop group to which this container belongs (defaults to undefined). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/ScrollManager.js",
        "doc": "<p>The named drag drop <a href=\"#/api/Ext.dd.DragSource-cfg-ddGroup\" rel=\"Ext.dd.DragSource-cfg-ddGroup\" class=\"docClass\">group</a> to which this container belongs (defaults to undefined).\nIf a ddGroup is specified, then container scrolling will only occur when a dragged object is in the same ddGroup.</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 187,
        "owner": "Ext.dd.ScrollManager",
        "html_filename": "ScrollManager.html",
        "href": "ScrollManager.html#Ext-dd-ScrollManager-property-frequency",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "frequency",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/ScrollManager.js",
        "doc": "<p>The frequency of scrolls in milliseconds (defaults to 500)</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 174,
        "owner": "Ext.dd.ScrollManager",
        "html_filename": "ScrollManager.html",
        "href": "ScrollManager.html#Ext-dd-ScrollManager-property-hthresh",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "hthresh",
        "shortDoc": "The number of pixels from the right or left edge of a container the pointer needs to be to\ntrigger scrolling (default...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/ScrollManager.js",
        "doc": "<p>The number of pixels from the right or left edge of a container the pointer needs to be to\ntrigger scrolling (defaults to 25)</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 181,
        "owner": "Ext.dd.ScrollManager",
        "html_filename": "ScrollManager.html",
        "href": "ScrollManager.html#Ext-dd-ScrollManager-property-increment",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "increment",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/ScrollManager.js",
        "doc": "<p>The number of pixels to scroll in each scroll increment (defaults to 100)</p>\n"
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
        "type": "Number",
        "inheritable": false,
        "properties": [

        ],
        "linenr": 168,
        "owner": "Ext.dd.ScrollManager",
        "html_filename": "ScrollManager.html",
        "href": "ScrollManager.html#Ext-dd-ScrollManager-property-vthresh",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "vthresh",
        "shortDoc": "The number of pixels from the top or bottom edge of a container the pointer needs to be to\ntrigger scrolling (default...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/ScrollManager.js",
        "doc": "<p>The number of pixels from the top or bottom edge of a container the pointer needs to be to\ntrigger scrolling (defaults to 25)</p>\n"
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
  "name": "Ext.dd.ScrollManager",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/dd/ScrollManager.js",
  "doc": "<p>Provides automatic scrolling of overflow regions in the page during drag operations.</p>\n\n\n<p>The ScrollManager configs will be used as the defaults for any scroll container registered with it,\nbut you can also override most of the configs per scroll container by adding a\n<tt>ddScrollConfig</tt> object to the target element that contains these properties: <a href=\"#/api/Ext.dd.ScrollManager-property-hthresh\" rel=\"Ext.dd.ScrollManager-property-hthresh\" class=\"docClass\">hthresh</a>,\n<a href=\"#/api/Ext.dd.ScrollManager-property-vthresh\" rel=\"Ext.dd.ScrollManager-property-vthresh\" class=\"docClass\">vthresh</a>, <a href=\"#/api/Ext.dd.ScrollManager-property-increment\" rel=\"Ext.dd.ScrollManager-property-increment\" class=\"docClass\">increment</a> and <a href=\"#/api/Ext.dd.ScrollManager-property-frequency\" rel=\"Ext.dd.ScrollManager-property-frequency\" class=\"docClass\">frequency</a>.  Example usage:\n<pre><code>var el = Ext.get('scroll-ct');\nel.ddScrollConfig = {\n    vthresh: 50,\n    hthresh: -1,\n    frequency: 100,\n    increment: 200\n};\nExt.dd.ScrollManager.register(el);\n</code></pre>\n<b>Note: This class uses \"Point Mode\" and is untested in \"Intersect Mode\".</b>\n\n",
  "alternateClassNames": [

  ]
});