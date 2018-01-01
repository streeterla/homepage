Ext.data.JsonP.Ext_AbstractPlugin({
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
  "extends": "Object",
  "html_filename": "AbstractPlugin.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "AbstractPlugin.html#Ext-AbstractPlugin",
  "subclasses": [
    "Ext.grid.plugin.DragDrop",
    "Ext.tree.plugin.TreeViewDragDrop"
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
        "linenr": 42,
        "owner": "Ext.AbstractPlugin",
        "html_filename": "AbstractPlugin.html",
        "href": "AbstractPlugin.html#Ext-AbstractPlugin-method-destroy",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "destroy",
        "shortDoc": "The destroy method is invoked by the owning Component at the time the Component is being destroyed. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractPlugin.js",
        "doc": "<p>The destroy method is invoked by the owning Component at the time the Component is being destroyed.</p>\n\n\n<p>The supplied implementation is empty. Subclasses should perform plugin cleanup in their own implementation of this method.</p>\n\n",
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
        "linenr": 57,
        "owner": "Ext.AbstractPlugin",
        "html_filename": "AbstractPlugin.html",
        "href": "AbstractPlugin.html#Ext-AbstractPlugin-method-disable",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "disable",
        "shortDoc": "The base implementation just sets the plugin's disabled flag to true\n\n\nPlugin subclasses which need more complex proc...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractPlugin.js",
        "doc": "<p>The base implementation just sets the plugin's <code>disabled</code> flag to <code>true</code></p>\n\n\n<p>Plugin subclasses which need more complex processing may implement an overriding implementation.</p>\n\n",
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
        "linenr": 49,
        "owner": "Ext.AbstractPlugin",
        "html_filename": "AbstractPlugin.html",
        "href": "AbstractPlugin.html#Ext-AbstractPlugin-method-enable",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "enable",
        "shortDoc": "The base implementation just sets the plugin's disabled flag to false\n\n\nPlugin subclasses which need more complex pro...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractPlugin.js",
        "doc": "<p>The base implementation just sets the plugin's <code>disabled</code> flag to <code>false</code></p>\n\n\n<p>Plugin subclasses which need more complex processing may implement an overriding implementation.</p>\n\n",
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
        "linenr": 33,
        "owner": "Ext.AbstractPlugin",
        "html_filename": "AbstractPlugin.html",
        "href": "AbstractPlugin.html#Ext-AbstractPlugin-method-init",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.Component",
            "properties": [

            ],
            "optional": false,
            "name": "client",
            "doc": "<p>The client Component which owns this plugin.</p>\n"
          }
        ],
        "alias": null,
        "name": "init",
        "shortDoc": "The init method is invoked after initComponent method has been run for the client Component. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractPlugin.js",
        "doc": "<p>The init method is invoked after initComponent method has been run for the client Component.</p>\n\n\n<p>The supplied implementation is empty. Subclasses should perform plugin initialization, and set up bidirectional\nlinks between the plugin and its client Component in their own implementation of this method.</p>\n\n",
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

    ]
  },
  "deprecated": null,
  "singleton": false,
  "private": false,
  "tagname": "class",
  "author": null,
  "superclasses": [

  ],
  "alias": null,
  "name": "Ext.AbstractPlugin",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractPlugin.js",
  "doc": "<p>The AbstractPlugin class is the base class from which user-implemented plugins should inherit.</p>\n\n\n<p>This class defines the essential API of plugins as used by Components by defining the following methods:</p>\n\n\n<ul>\n<li><code>init</code> : The plugin initialization method which the owning Component calls at Component initialization\ntime.<div class=\"sub-desc\"><p>The Component passes itself as the sole parameter.</p><p>Subclasses should set up bidirectional\nlinks between the plugin and its client Component here.</p></div></li>\n<li><code>destroy</code> : The plugin cleanup method which the owning Component calls at Component destruction time.<div class=\"sub-desc\">Use\nthis method to break links between the plugin and the Component and to free any allocated resources.</div></li>\n<li><code>enable</code> : The base implementation just sets the plugin's <code>disabled</code> flag to <code>false</code><div class=\"sub-desc\"></div></li>\n<li><code>disable</code> : The base implementation just sets the plugin's <code>disabled</code> flag to <code>true</code><div class=\"sub-desc\"></div></li>\n</ul>\n\n",
  "alternateClassNames": [

  ]
});