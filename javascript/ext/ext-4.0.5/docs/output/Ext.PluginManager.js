Ext.data.JsonP.Ext_PluginManager({
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
  "extends": "Ext.AbstractManager",
  "html_filename": "PluginManager.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "PluginManager.html#Ext-PluginManager",
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
        "linenr": 30,
        "owner": "Ext.PluginManager",
        "html_filename": "PluginManager.html",
        "href": "PluginManager.html#Ext-PluginManager-method-create",
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
            "doc": "<p>A configuration object for the Plugin you wish to create.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "defaultType",
            "doc": "<p>(optional) The constructor to provide the default Plugin type if the config object does not\ncontain a <code>ptype</code>. (Optional if the config contains a <code>ptype</code>).</p>\n"
          }
        ],
        "alias": null,
        "name": "create",
        "shortDoc": "Creates a new Plugin from the specified config object using the config object's ptype to determine the class to\ninsta...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/PluginManager.js",
        "doc": "<p>Creates a new Plugin from the specified config object using the config object's ptype to determine the class to\ninstantiate.</p>\n",
        "return": {
          "type": "Ext.Component",
          "properties": null,
          "name": "return",
          "doc": "<p>The newly instantiated Plugin.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 116,
        "owner": "Ext.AbstractManager",
        "html_filename": "AbstractManager.html",
        "href": "AbstractManager.html#Ext-AbstractManager-method-each",
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
            "doc": "<p>The function to execute.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "scope",
            "doc": "<p>The scope to execute in. Defaults to <tt>this</tt>.</p>\n"
          }
        ],
        "alias": null,
        "name": "each",
        "shortDoc": "Executes the specified function once for each item in the collection. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractManager.js",
        "doc": "<p>Executes the specified function once for each item in the collection.\nReturning false from the function will cease iteration.</p>\n\n<p>The paramaters passed to the function are:</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b>key</b> : String<p class=\"sub-desc\">The key of the item</p></li>\n<li><b>value</b> : Number<p class=\"sub-desc\">The value of the item</p></li>\n<li><b>length</b> : Number<p class=\"sub-desc\">The total number of items in the collection</p></li>\n</ul></div>\n\n",
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
        "linenr": 72,
        "owner": "Ext.PluginManager",
        "html_filename": "PluginManager.html",
        "href": "PluginManager.html#Ext-PluginManager-method-findByType",
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
            "name": "type",
            "doc": "<p>The type to search for</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": false,
            "name": "defaultsOnly",
            "doc": "<p>True to only return plugins of this type where the plugin's isDefault property is\ntruthy</p>\n"
          }
        ],
        "alias": null,
        "name": "findByType",
        "shortDoc": "Returns all plugins registered with the given type. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/PluginManager.js",
        "doc": "<p>Returns all plugins registered with the given type. Here, 'type' refers to the type of plugin, not its ptype.</p>\n",
        "return": {
          "type": "Ext.AbstractPlugin[]",
          "properties": null,
          "name": "return",
          "doc": "<p>All matching plugins</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 29,
        "owner": "Ext.AbstractManager",
        "html_filename": "AbstractManager.html",
        "href": "AbstractManager.html#Ext-AbstractManager-method-get",
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
            "doc": "<p>The id of the item</p>\n"
          }
        ],
        "alias": null,
        "name": "get",
        "shortDoc": "Returns an item by id. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractManager.js",
        "doc": "<p>Returns an item by id.\nFor additional details see <a href=\"#/api/Ext.util.HashMap-method-get\" rel=\"Ext.util.HashMap-method-get\" class=\"docClass\">Ext.util.HashMap.get</a>.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>The item, <code>undefined</code> if not found.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 133,
        "owner": "Ext.AbstractManager",
        "html_filename": "AbstractManager.html",
        "href": "AbstractManager.html#Ext-AbstractManager-method-getCount",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getCount",
        "shortDoc": "Gets the number of items in the collection. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractManager.js",
        "doc": "<p>Gets the number of items in the collection.</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>The number of items in the collection.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 65,
        "owner": "Ext.AbstractManager",
        "html_filename": "AbstractManager.html",
        "href": "AbstractManager.html#Ext-AbstractManager-method-isRegistered",
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
            "name": "type",
            "doc": "<p>The mnemonic string by which the class may be looked up</p>\n"
          }
        ],
        "alias": null,
        "name": "isRegistered",
        "shortDoc": "Checks if an item type is registered. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractManager.js",
        "doc": "<p>Checks if an item type is registered.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>Whether the type is registered.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 93,
        "owner": "Ext.AbstractManager",
        "html_filename": "AbstractManager.html",
        "href": "AbstractManager.html#Ext-AbstractManager-method-onAvailable",
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
            "doc": "<p>The item id</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "fn",
            "doc": "<p>The callback function. Called with a single parameter, the item.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "scope",
            "doc": "<p>The scope (<code>this</code> reference) in which the callback is executed. Defaults to the item.</p>\n"
          }
        ],
        "alias": null,
        "name": "onAvailable",
        "shortDoc": "Registers a function that will be called when an item with the specified id is added to the manager. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractManager.js",
        "doc": "<p>Registers a function that will be called when an item with the specified id is added to the manager. This will happen on instantiation.</p>\n",
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
        "linenr": 39,
        "owner": "Ext.AbstractManager",
        "html_filename": "AbstractManager.html",
        "href": "AbstractManager.html#Ext-AbstractManager-method-register",
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
            "name": "item",
            "doc": "<p>The item to register</p>\n"
          }
        ],
        "alias": null,
        "name": "register",
        "shortDoc": "Registers an item to be managed ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractManager.js",
        "doc": "<p>Registers an item to be managed</p>\n",
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
        "owner": "Ext.AbstractManager",
        "html_filename": "AbstractManager.html",
        "href": "AbstractManager.html#Ext-AbstractManager-method-registerType",
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
            "name": "type",
            "doc": "<p>The mnemonic string by which the class may be looked up.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "cls",
            "doc": "<p>The new instance class.</p>\n"
          }
        ],
        "alias": null,
        "name": "registerType",
        "shortDoc": "Registers a new item constructor, keyed by a type key. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractManager.js",
        "doc": "<p>Registers a new item constructor, keyed by a type key.\n\n",
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
        "linenr": 47,
        "owner": "Ext.AbstractManager",
        "html_filename": "AbstractManager.html",
        "href": "AbstractManager.html#Ext-AbstractManager-method-unregister",
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
            "name": "item",
            "doc": "<p>The item to unregister</p>\n"
          }
        ],
        "alias": null,
        "name": "unregister",
        "shortDoc": "Unregisters an item by removing it from this manager ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractManager.js",
        "doc": "<p>Unregisters an item by removing it from this manager</p>\n",
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
        "type": "Ext.util.MixedCollection",
        "inheritable": false,
        "properties": null,
        "linenr": 19,
        "owner": "Ext.AbstractManager",
        "html_filename": "AbstractManager.html",
        "href": "AbstractManager.html#Ext-AbstractManager-property-all",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "all",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractManager.js",
        "doc": "<p>Contains all of the items currently managed</p>\n"
      }
    ]
  },
  "deprecated": null,
  "singleton": true,
  "private": false,
  "tagname": "class",
  "author": null,
  "superclasses": [
    "Ext.AbstractManager"
  ],
  "alias": null,
  "name": "Ext.PluginManager",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/PluginManager.js",
  "doc": "<p>Provides a registry of available Plugin classes indexed by a mnemonic code known as the Plugin's ptype.</p>\n\n<p>A plugin may be specified simply as a <em>config object</em> as long as the correct <code>ptype</code> is specified:</p>\n\n<pre><code>{\n    ptype: 'gridviewdragdrop',\n    dragText: 'Drag and drop to reorganize'\n}\n</code></pre>\n\n<p>Or just use the ptype on its own:</p>\n\n<pre><code>'gridviewdragdrop'\n</code></pre>\n\n<p>Alternatively you can instantiate the plugin with Ext.create:</p>\n\n<pre><code>Ext.create('Ext.view.plugin.AutoComplete', {\n    ptype: 'gridviewdragdrop',\n    dragText: 'Drag and drop to reorganize'\n})\n</code></pre>\n",
  "alternateClassNames": [
    "Ext.PluginMgr"
  ]
});