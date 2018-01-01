Ext.data.JsonP.Ext_tip_QuickTipManager({
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
  "html_filename": "QuickTipManager.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "QuickTipManager.html#Ext-tip-QuickTipManager",
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
        "linenr": 147,
        "owner": "Ext.tip.QuickTipManager",
        "html_filename": "QuickTipManager.html",
        "href": "QuickTipManager.html#Ext-tip-QuickTipManager-method-destroy",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "destroy",
        "shortDoc": "Destroy the QuickTips instance. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/tip/QuickTipManager.js",
        "doc": "<p>Destroy the QuickTips instance.</p>\n",
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
        "linenr": 184,
        "owner": "Ext.tip.QuickTipManager",
        "html_filename": "QuickTipManager.html",
        "href": "QuickTipManager.html#Ext-tip-QuickTipManager-method-disable",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "disable",
        "shortDoc": "Disable quick tips globally. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/tip/QuickTipManager.js",
        "doc": "<p>Disable quick tips globally.</p>\n",
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
        "linenr": 174,
        "owner": "Ext.tip.QuickTipManager",
        "html_filename": "QuickTipManager.html",
        "href": "QuickTipManager.html#Ext-tip-QuickTipManager-method-enable",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "enable",
        "shortDoc": "Enable quick tips globally. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/tip/QuickTipManager.js",
        "doc": "<p>Enable quick tips globally.</p>\n",
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
        "linenr": 202,
        "owner": "Ext.tip.QuickTipManager",
        "html_filename": "QuickTipManager.html",
        "href": "QuickTipManager.html#Ext-tip-QuickTipManager-method-getQuickTip",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getQuickTip",
        "shortDoc": "Gets the single QuickTip instance used to show tips from all registered elements. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/tip/QuickTipManager.js",
        "doc": "<p>Gets the single <a href=\"#/api/Ext.tip.QuickTip\" rel=\"Ext.tip.QuickTip\" class=\"docClass\">QuickTip</a> instance used to show tips from all registered elements.</p>\n",
        "return": {
          "type": "Ext.tip.QuickTip",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 100,
        "owner": "Ext.tip.QuickTipManager",
        "html_filename": "QuickTipManager.html",
        "href": "QuickTipManager.html#Ext-tip-QuickTipManager-method-init",
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
            "name": "autoRender",
            "doc": "<p>(optional) True to render the QuickTips container immediately to\npreload images. (Defaults to true)</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "config",
            "doc": "<p>(optional) config object for the created QuickTip. By\ndefault, the <a href=\"#/api/Ext.tip.QuickTip\" rel=\"Ext.tip.QuickTip\" class=\"docClass\">QuickTip</a> class is instantiated, but this can\nbe changed by supplying an xtype property or a className property in this object.\nAll other properties on this object are configuration for the created component.</p>\n"
          }
        ],
        "alias": null,
        "name": "init",
        "shortDoc": "Initialize the global QuickTips instance and prepare any quick tips. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/tip/QuickTipManager.js",
        "doc": "<p>Initialize the global QuickTips instance and prepare any quick tips.</p>\n",
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
        "linenr": 194,
        "owner": "Ext.tip.QuickTipManager",
        "html_filename": "QuickTipManager.html",
        "href": "QuickTipManager.html#Ext-tip-QuickTipManager-method-isEnabled",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "isEnabled",
        "shortDoc": "Returns true if quick tips are enabled, else false. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/tip/QuickTipManager.js",
        "doc": "<p>Returns true if quick tips are enabled, else false.</p>\n",
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
        "linenr": 210,
        "owner": "Ext.tip.QuickTipManager",
        "html_filename": "QuickTipManager.html",
        "href": "QuickTipManager.html#Ext-tip-QuickTipManager-method-register",
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
            "doc": "<p>The config object</p>\n"
          }
        ],
        "alias": null,
        "name": "register",
        "shortDoc": "Configures a new quick tip instance and assigns it to a target element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/tip/QuickTipManager.js",
        "doc": "<p>Configures a new quick tip instance and assigns it to a target element.  See\n<a href=\"#/api/Ext.tip.QuickTip-method-register\" rel=\"Ext.tip.QuickTip-method-register\" class=\"docClass\">Ext.tip.QuickTip.register</a> for details.</p>\n",
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
        "linenr": 227,
        "owner": "Ext.tip.QuickTipManager",
        "html_filename": "QuickTipManager.html",
        "href": "QuickTipManager.html#Ext-tip-QuickTipManager-method-tips",
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
            "doc": "<p>The config object</p>\n"
          }
        ],
        "alias": null,
        "name": "tips",
        "shortDoc": "Alias of register. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/tip/QuickTipManager.js",
        "doc": "<p>Alias of <a href=\"#/api/Ext.tip.QuickTipManager-method-register\" rel=\"Ext.tip.QuickTipManager-method-register\" class=\"docClass\">register</a>.</p>\n",
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
        "linenr": 219,
        "owner": "Ext.tip.QuickTipManager",
        "html_filename": "QuickTipManager.html",
        "href": "QuickTipManager.html#Ext-tip-QuickTipManager-method-unregister",
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
            "doc": "<p>The element from which the quick tip is to be removed or ID of the element.</p>\n"
          }
        ],
        "alias": null,
        "name": "unregister",
        "shortDoc": "Removes any registered quick tip from the target element and destroys it. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/tip/QuickTipManager.js",
        "doc": "<p>Removes any registered quick tip from the target element and destroys it.</p>\n",
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
  "name": "Ext.tip.QuickTipManager",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/tip/QuickTipManager.js",
  "doc": "<p>Provides attractive and customizable tooltips for any element. The QuickTips\nsingleton is used to configure and manage tooltips globally for multiple elements\nin a generic manner.  To create individual tooltips with maximum customizability,\nyou should consider either <a href=\"#/api/Ext.tip.Tip\" rel=\"Ext.tip.Tip\" class=\"docClass\">Ext.tip.Tip</a> or <a href=\"#/api/Ext.tip.ToolTip\" rel=\"Ext.tip.ToolTip\" class=\"docClass\">Ext.tip.ToolTip</a>.</p>\n\n<p>Quicktips can be configured via tag attributes directly in markup, or by\nregistering quick tips programmatically via the <a href=\"#/api/Ext.tip.QuickTipManager-method-register\" rel=\"Ext.tip.QuickTipManager-method-register\" class=\"docClass\">register</a> method.</p>\n\n<p>The singleton's instance of <a href=\"#/api/Ext.tip.QuickTip\" rel=\"Ext.tip.QuickTip\" class=\"docClass\">Ext.tip.QuickTip</a> is available via\n<a href=\"#/api/Ext.tip.QuickTipManager-method-getQuickTip\" rel=\"Ext.tip.QuickTipManager-method-getQuickTip\" class=\"docClass\">getQuickTip</a>, and supports all the methods, and all the all the\nconfiguration properties of <a href=\"#/api/Ext.tip.QuickTip\" rel=\"Ext.tip.QuickTip\" class=\"docClass\">Ext.tip.QuickTip</a>. These settings will apply to all\ntooltips shown by the singleton.</p>\n\n<p>Below is the summary of the configuration properties which can be used.\nFor detailed descriptions see the config options for the <a href=\"#/api/Ext.tip.QuickTip\" rel=\"Ext.tip.QuickTip\" class=\"docClass\">QuickTip</a> class</p>\n\n<h2>QuickTips singleton configs (all are optional)</h2>\n\n<ul>\n<li><code>dismissDelay</code></li>\n<li><code>hideDelay</code></li>\n<li><code>maxWidth</code></li>\n<li><code>minWidth</code></li>\n<li><code>showDelay</code></li>\n<li><code>trackMouse</code></li>\n</ul>\n\n\n<h2>Target element configs (optional unless otherwise noted)</h2>\n\n<ul>\n<li><code>autoHide</code></li>\n<li><code>cls</code></li>\n<li><code>dismissDelay</code> (overrides singleton value)</li>\n<li><code>target</code> (required)</li>\n<li><code>text</code> (required)</li>\n<li><code>title</code></li>\n<li><code>width</code></li>\n</ul>\n\n\n<p>Here is an example showing how some of these config options could be used:</p>\n\n<pre class=\"inline-example\"><code>// Init the singleton.  Any tag-based quick tips will start working.\nExt.tip.QuickTipManager.init();\n\n// Apply a set of config properties to the singleton\nExt.apply(Ext.tip.QuickTipManager.getQuickTip(), {\n    maxWidth: 200,\n    minWidth: 100,\n    showDelay: 50      // Show 50ms after entering target\n});\n\n// Create a small panel to add a quick tip to\nExt.create('Ext.container.Container', {\n    id: 'quickTipContainer',\n    width: 200,\n    height: 150,\n    style: {\n        backgroundColor:'#000000'\n    },\n    renderTo: Ext.getBody()\n});\n\n\n// Manually register a quick tip for a specific element\nExt.tip.QuickTipManager.register({\n    target: 'quickTipContainer',\n    title: 'My Tooltip',\n    text: 'This tooltip was added in code',\n    width: 100,\n    dismissDelay: 10000 // Hide after 10 seconds hover\n});\n</code></pre>\n\n<p>To register a quick tip in markup, you simply add one or more of the valid QuickTip attributes prefixed with\nthe <strong>data-</strong> namespace.  The HTML element itself is automatically set as the quick tip target. Here is the summary\nof supported attributes (optional unless otherwise noted):</p>\n\n<ul>\n<li><code>hide</code>: Specifying \"user\" is equivalent to setting autoHide = false.  Any other value will be the same as autoHide = true.</li>\n<li><code>qclass</code>: A CSS class to be applied to the quick tip (equivalent to the 'cls' target element config).</li>\n<li><code>qtip (required)</code>: The quick tip text (equivalent to the 'text' target element config).</li>\n<li><code>qtitle</code>: The quick tip title (equivalent to the 'title' target element config).</li>\n<li><code>qwidth</code>: The quick tip width (equivalent to the 'width' target element config).</li>\n</ul>\n\n\n<p>Here is an example of configuring an HTML element to display a tooltip from markup:</p>\n\n<pre><code>// Add a quick tip to an HTML button\n&lt;input type=\"button\" value=\"OK\" data-qtitle=\"OK Button\" data-qwidth=\"100\"\n     data-qtip=\"This is a quick tip from markup!\"&gt;&lt;/input&gt;\n</code></pre>\n",
  "alternateClassNames": [

  ]
});