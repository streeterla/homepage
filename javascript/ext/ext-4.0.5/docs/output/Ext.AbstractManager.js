Ext.data.JsonP.Ext_AbstractManager({
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
  "html_filename": "AbstractManager.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "AbstractManager.html#Ext-AbstractManager",
  "subclasses": [
    "Ext.ComponentManager",
    "Ext.ModelManager",
    "Ext.PluginManager"
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
        "linenr": 74,
        "owner": "Ext.AbstractManager",
        "html_filename": "AbstractManager.html",
        "href": "AbstractManager.html#Ext-AbstractManager-method-create",
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
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "defaultType",
            "doc": "<p>If no type is discovered in the config object, we fall back to this type</p>\n"
          }
        ],
        "alias": null,
        "name": "create",
        "shortDoc": "Creates and returns an instance of whatever this manager manages, based on the supplied type and config object ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractManager.js",
        "doc": "<p>Creates and returns an instance of whatever this manager manages, based on the supplied type and config object</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>The instance of whatever this manager is managing</p>\n"
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
  "singleton": false,
  "private": false,
  "tagname": "class",
  "author": null,
  "superclasses": [

  ],
  "alias": null,
  "name": "Ext.AbstractManager",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractManager.js",
  "doc": "<p>Base Manager class</p>\n",
  "alternateClassNames": [

  ]
});