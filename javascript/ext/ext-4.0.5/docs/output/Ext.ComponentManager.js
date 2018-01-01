Ext.data.JsonP.Ext_ComponentManager({
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
  "html_filename": "ComponentManager.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "ComponentManager.html#Ext-ComponentManager",
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
        "linenr": 25,
        "owner": "Ext.ComponentManager",
        "html_filename": "ComponentManager.html",
        "href": "ComponentManager.html#Ext-ComponentManager-method-create",
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
            "doc": "<p>A configuration object for the Component you wish to create.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "defaultType",
            "doc": "<p>(optional) The constructor to provide the default Component type if\nthe config object does not contain a <code>xtype</code>. (Optional if the config contains a <code>xtype</code>).</p>\n"
          }
        ],
        "alias": null,
        "name": "create",
        "shortDoc": "Creates a new Component from the specified config object using the\nconfig object's xtype to determine the class to in...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/ComponentManager.js",
        "doc": "<p>Creates a new Component from the specified config object using the\nconfig object's xtype to determine the class to instantiate.</p>\n",
        "return": {
          "type": "Ext.Component",
          "properties": null,
          "name": "return",
          "doc": "<p>The newly instantiated Component.</p>\n"
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
  "name": "Ext.ComponentManager",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/ComponentManager.js",
  "doc": "<p>Provides a registry of all Components (instances of <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> or any subclass\nthereof) on a page so that they can be easily accessed by <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">component</a>\n<a href=\"#/api/Ext.Component-cfg-id\" rel=\"Ext.Component-cfg-id\" class=\"docClass\">id</a> (see <a href=\"#/api/Ext.ComponentManager-method-get\" rel=\"Ext.ComponentManager-method-get\" class=\"docClass\">get</a>, or the convenience method <a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">Ext.getCmp</a>).</p>\n\n\n<p>This object also provides a registry of available Component <i>classes</i>\nindexed by a mnemonic code known as the Component's <a href=\"#/api/Ext.Component-cfg-xtype\" rel=\"Ext.Component-cfg-xtype\" class=\"docClass\">xtype</a>.\nThe <code>xtype</code> provides a way to avoid instantiating child Components\nwhen creating a full, nested config object for a complete Ext page.</p>\n\n\n<p>A child Component may be specified simply as a <i>config object</i>\nas long as the correct <code><a href=\"#/api/Ext.Component-cfg-xtype\" rel=\"Ext.Component-cfg-xtype\" class=\"docClass\">xtype</a></code> is specified so that if and when the Component\nneeds rendering, the correct type can be looked up for lazy instantiation.</p>\n\n\n<p>For a list of all available <code><a href=\"#/api/Ext.Component-cfg-xtype\" rel=\"Ext.Component-cfg-xtype\" class=\"docClass\">xtypes</a></code>, see <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.</p>\n\n",
  "alternateClassNames": [
    "Ext.ComponentMgr"
  ]
});