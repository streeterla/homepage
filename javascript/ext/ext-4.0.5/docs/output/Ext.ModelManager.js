Ext.data.JsonP.Ext_ModelManager({
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
  "html_filename": "ModelManager.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "ModelManager.html#Ext-ModelManager",
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
        "linenr": 144,
        "owner": "Ext.ModelManager",
        "html_filename": "ModelManager.html",
        "href": "ModelManager.html#Ext-ModelManager-method-create",
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
            "name": "data",
            "doc": "<p>Data to initialize the Model's fields with</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "name",
            "doc": "<p>The name of the model to create</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": true,
            "name": "id",
            "doc": "<p>(Optional) unique id of the Model instance (see <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a>)</p>\n"
          }
        ],
        "alias": null,
        "name": "create",
        "shortDoc": "Creates a new instance of a Model using the given data. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/ModelManager.js",
        "doc": "<p>Creates a new instance of a Model using the given data.</p>\n\n<p>This method is deprecated.  Use <a href=\"#/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a> instead.  For example:</p>\n\n<pre><code>Ext.create('User', {\n    first: 'Ed',\n    last: 'Spencer'\n});\n</code></pre>\n",
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
        "linenr": 131,
        "owner": "Ext.ModelManager",
        "html_filename": "ModelManager.html",
        "href": "ModelManager.html#Ext-ModelManager-method-getModel",
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
            "name": "id",
            "doc": "<p>The id of the model or the model instance.</p>\n"
          }
        ],
        "alias": null,
        "name": "getModel",
        "shortDoc": "Returns the Ext.data.Model for a given model name ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/ModelManager.js",
        "doc": "<p>Returns the <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> for a given model name</p>\n",
        "return": {
          "type": "Ext.data.Model",
          "properties": null,
          "name": "return",
          "doc": "<p>a model class.</p>\n"
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
      },
      {
        "static": false,
        "type": "Ext.data.Association[]",
        "inheritable": false,
        "properties": null,
        "linenr": 65,
        "owner": "Ext.ModelManager",
        "html_filename": "ModelManager.html",
        "href": "ModelManager.html#Ext-ModelManager-property-associationStack",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "associationStack",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/ModelManager.js",
        "doc": "<p>Private stack of associations that must be created once their associated model has been defined</p>\n"
      }
    ]
  },
  "deprecated": null,
  "singleton": true,
  "private": false,
  "tagname": "class",
  "author": "Ed Spencer",
  "superclasses": [
    "Ext.AbstractManager"
  ],
  "alias": null,
  "name": "Ext.ModelManager",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/ModelManager.js",
  "doc": "<p>The ModelManager keeps track of all <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> types defined in your application.</p>\n\n<p><strong>Creating Model Instances</strong></p>\n\n<p>Model instances can be created by using the <a href=\"#/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a> method. Ext.create replaces\nthe deprecated <a href=\"#/api/Ext.ModelManager-method-create\" rel=\"Ext.ModelManager-method-create\" class=\"docClass\">Ext.ModelManager.create</a> method. It is also possible to create a model instance\nthis by using the Model type directly. The following 3 snippets are equivalent:</p>\n\n<pre><code>Ext.define('User', {\n    extend: 'Ext.data.Model',\n    fields: ['first', 'last']\n});\n\n// method 1, create using Ext.create (recommended)\nExt.create('User', {\n    first: 'Ed',\n    last: 'Spencer'\n});\n\n// method 2, create through the manager (deprecated)\nExt.ModelManager.create({\n    first: 'Ed',\n    last: 'Spencer'\n}, 'User');\n\n// method 3, create on the type directly\nnew User({\n    first: 'Ed',\n    last: 'Spencer'\n});\n</code></pre>\n\n<p><strong>Accessing Model Types</strong></p>\n\n<p>A reference to a Model type can be obtained by using the <a href=\"#/api/Ext.ModelManager-method-getModel\" rel=\"Ext.ModelManager-method-getModel\" class=\"docClass\">getModel</a> function. Since models types\nare normal classes, you can access the type directly. The following snippets are equivalent:</p>\n\n<pre><code>Ext.define('User', {\n    extend: 'Ext.data.Model',\n    fields: ['first', 'last']\n});\n\n// method 1, access model type through the manager\nvar UserType = Ext.ModelManager.getModel('User');\n\n// method 2, reference the type directly\nvar UserType = User;\n</code></pre>\n",
  "alternateClassNames": [
    "Ext.ModelMgr"
  ]
});