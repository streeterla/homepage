Ext.data.JsonP.Ext_data_BelongsToAssociation({
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
  "extends": "Ext.data.Association",
  "html_filename": "BelongsToAssociation.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "BelongsToAssociation.html#Ext-data-BelongsToAssociation",
  "subclasses": [

  ],
  "protected": false,
  "members": {
    "css_var": [

    ],
    "cfg": [
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 121,
        "owner": "Ext.data.Association",
        "html_filename": "Association.html",
        "href": "Association.html#Ext-data-Association-cfg-associatedModel",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "associatedModel",
        "shortDoc": "The string name of the model that is being associated with. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Association.js",
        "doc": "<p>The string name of the model that is being associated with. Required</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 135,
        "owner": "Ext.data.Association",
        "html_filename": "Association.html",
        "href": "Association.html#Ext-data-Association-cfg-associationKey",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "associationKey",
        "shortDoc": "The name of the property in the data to read the association from. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Association.js",
        "doc": "<p>The name of the property in the data to read the association from.\nDefaults to the name of the associated model.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 114,
        "owner": "Ext.data.BelongsToAssociation",
        "html_filename": "BelongsToAssociation.html",
        "href": "BelongsToAssociation.html#Ext-data-BelongsToAssociation-cfg-foreignKey",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "foreignKey",
        "shortDoc": "The name of the foreign key on the owner model that links it to the associated\nmodel. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/BelongsToAssociation.js",
        "doc": "<p>The name of the foreign key on the owner model that links it to the associated\nmodel. Defaults to the lowercased name of the associated model plus \"_id\", e.g. an association with a\nmodel called Product would set up a product_id foreign key.</p>\n\n<pre><code>Ext.define('Order', {\n    extend: 'Ext.data.Model',\n    fields: ['id', 'date'],\n    hasMany: 'Product'\n});\n\nExt.define('Product', {\n    extend: 'Ext.data.Model',\n    fields: ['id', 'name', 'order_id'], // refers to the id of the order that this product belongs to\n    belongsTo: 'Group'\n});\nvar product = new Product({\n    id: 1,\n    name: 'Product 1',\n    order_id: 22\n}, 1);\nproduct.getOrder(); // Will make a call to the server asking for order_id 22\n</code></pre>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 139,
        "owner": "Ext.data.BelongsToAssociation",
        "html_filename": "BelongsToAssociation.html",
        "href": "BelongsToAssociation.html#Ext-data-BelongsToAssociation-cfg-getterName",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "getterName",
        "shortDoc": "The name of the getter function that will be added to the local model's prototype. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/BelongsToAssociation.js",
        "doc": "<p>The name of the getter function that will be added to the local model's prototype.\nDefaults to 'get' + the name of the foreign model, e.g. getCategory</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 117,
        "owner": "Ext.data.Association",
        "html_filename": "Association.html",
        "href": "Association.html#Ext-data-Association-cfg-ownerModel",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "ownerModel",
        "shortDoc": "The string name of the model that owns the association. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Association.js",
        "doc": "<p>The string name of the model that owns the association. Required</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 125,
        "owner": "Ext.data.Association",
        "html_filename": "Association.html",
        "href": "Association.html#Ext-data-Association-cfg-primaryKey",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "primaryKey",
        "shortDoc": "The name of the primary key on the associated model. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Association.js",
        "doc": "<p>The name of the primary key on the associated model. Defaults to 'id'.\nIn general this will be the <a href=\"#/api/Ext.data.Model-cfg-idProperty\" rel=\"Ext.data.Model-cfg-idProperty\" class=\"docClass\">Ext.data.Model.idProperty</a> of the Model.</p>\n"
      },
      {
        "static": false,
        "type": "Ext.data.reader.Reader",
        "inheritable": false,
        "properties": null,
        "linenr": 131,
        "owner": "Ext.data.Association",
        "html_filename": "Association.html",
        "href": "Association.html#Ext-data-Association-cfg-reader",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "reader",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Association.js",
        "doc": "<p>A special reader to read associated data</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 144,
        "owner": "Ext.data.BelongsToAssociation",
        "html_filename": "BelongsToAssociation.html",
        "href": "BelongsToAssociation.html#Ext-data-BelongsToAssociation-cfg-setterName",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "setterName",
        "shortDoc": "The name of the setter function that will be added to the local model's prototype. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/BelongsToAssociation.js",
        "doc": "<p>The name of the setter function that will be added to the local model's prototype.\nDefaults to 'set' + the name of the foreign model, e.g. setCategory</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 149,
        "owner": "Ext.data.BelongsToAssociation",
        "html_filename": "BelongsToAssociation.html",
        "href": "BelongsToAssociation.html#Ext-data-BelongsToAssociation-cfg-type",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "type",
        "shortDoc": "The type configuration can be used when creating associations using a configuration object. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/BelongsToAssociation.js",
        "doc": "<p>The type configuration can be used when creating associations using a configuration object.\nUse 'belongsTo' to create a HasManyAssocation</p>\n\n<pre><code>associations: [{\n    type: 'belongsTo',\n    model: 'User'\n}]\n</code></pre>\n"
      }
    ],
    "css_mixin": [

    ],
    "event": [

    ],
    "method": [
      {
        "static": false,
        "inheritable": false,
        "linenr": 169,
        "owner": "Ext.data.Association",
        "html_filename": "Association.html",
        "href": "Association.html#Ext-data-Association-method-constructor",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "config",
            "doc": "<p>(optional) Config object.</p>\n"
          }
        ],
        "alias": null,
        "name": "constructor",
        "shortDoc": "Creates the Association object. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Association.js",
        "doc": "<p>Creates the Association object.</p>\n",
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
        "linenr": 213,
        "owner": "Ext.data.Association",
        "html_filename": "Association.html",
        "href": "Association.html#Ext-data-Association-method-getReader",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getReader",
        "shortDoc": "Get a specialized reader for reading associated data ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Association.js",
        "doc": "<p>Get a specialized reader for reading associated data</p>\n",
        "return": {
          "type": "Ext.data.reader.Reader",
          "properties": null,
          "name": "return",
          "doc": "<p>The reader, null if not supplied</p>\n"
        }
      }
    ],
    "property": [
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 201,
        "owner": "Ext.data.Association",
        "html_filename": "Association.html",
        "href": "Association.html#Ext-data-Association-property-associatedName",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "associatedName",
        "shortDoc": "The name of the model is on the other end of the association (e.g. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Association.js",
        "doc": "<p>The name of the model is on the other end of the association (e.g. if a User model hasMany Orders, this is 'Order')</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 195,
        "owner": "Ext.data.Association",
        "html_filename": "Association.html",
        "href": "Association.html#Ext-data-Association-property-ownerName",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "ownerName",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Association.js",
        "doc": "<p>The name of the model that 'owns' the association</p>\n"
      }
    ]
  },
  "deprecated": null,
  "singleton": false,
  "private": false,
  "tagname": "class",
  "author": "Ed Spencer",
  "superclasses": [
    "Ext.data.Association"
  ],
  "alias": null,
  "name": "Ext.data.BelongsToAssociation",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/BelongsToAssociation.js",
  "doc": "<p>Represents a many to one association with another model. The owner model is expected to have\na foreign key which references the primary key of the associated model:</p>\n\n<pre><code>Ext.define('Category', {\n    extend: 'Ext.data.Model',\n    fields: [\n        { name: 'id',   type: 'int' },\n        { name: 'name', type: 'string' }\n    ]\n});\n\nExt.define('Product', {\n    extend: 'Ext.data.Model',\n    fields: [\n        { name: 'id',          type: 'int' },\n        { name: 'category_id', type: 'int' },\n        { name: 'name',        type: 'string' }\n    ],\n    // we can use the belongsTo shortcut on the model to create a belongsTo association\n    associations: { type: 'belongsTo', model: 'Category' }\n});\n</code></pre>\n\n<p>In the example above we have created models for Products and Categories, and linked them together\nby saying that each Product belongs to a Category. This automatically links each Product to a Category\nbased on the Product's category_id, and provides new functions on the Product model:</p>\n\n<h2>Generated getter function</h2>\n\n<p>The first function that is added to the owner model is a getter function:</p>\n\n<pre><code>var product = new Product({\n    id: 100,\n    category_id: 20,\n    name: 'Sneakers'\n});\n\nproduct.getCategory(function(category, operation) {\n    // do something with the category object\n    alert(category.get('id')); // alerts 20\n}, this);\n</code></pre>\n\n<p>The getCategory function was created on the Product model when we defined the association. This uses the\nCategory's configured <a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">proxy</a> to load the Category asynchronously, calling the provided\ncallback when it has loaded.</p>\n\n<p>The new getCategory function will also accept an object containing success, failure and callback properties\n- callback will always be called, success will only be called if the associated model was loaded successfully\nand failure will only be called if the associatied model could not be loaded:</p>\n\n<pre><code>product.getCategory({\n    callback: function(category, operation) {}, // a function that will always be called\n    success : function(category, operation) {}, // a function that will only be called if the load succeeded\n    failure : function(category, operation) {}, // a function that will only be called if the load did not succeed\n    scope   : this // optionally pass in a scope object to execute the callbacks in\n});\n</code></pre>\n\n<p>In each case above the callbacks are called with two arguments - the associated model instance and the\n<a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">operation</a> object that was executed to load that instance. The Operation object is\nuseful when the instance could not be loaded.</p>\n\n<h2>Generated setter function</h2>\n\n<p>The second generated function sets the associated model instance - if only a single argument is passed to\nthe setter then the following two calls are identical:</p>\n\n<pre><code>// this call...\nproduct.setCategory(10);\n\n// is equivalent to this call:\nproduct.set('category_id', 10);\n</code></pre>\n\n<p>If we pass in a second argument, the model will be automatically saved and the second argument passed to\nthe owner model's <a href=\"#/api/Ext.data.Model-method-save\" rel=\"Ext.data.Model-method-save\" class=\"docClass\">save</a> method:</p>\n\n<pre><code>product.setCategory(10, function(product, operation) {\n    // the product has been saved\n    alert(product.get('category_id')); //now alerts 10\n});\n\n//alternative syntax:\nproduct.setCategory(10, {\n    callback: function(product, operation), // a function that will always be called\n    success : function(product, operation), // a function that will only be called if the load succeeded\n    failure : function(product, operation), // a function that will only be called if the load did not succeed\n    scope   : this //optionally pass in a scope object to execute the callbacks in\n})\n</code></pre>\n\n<h2>Customisation</h2>\n\n<p>Associations reflect on the models they are linking to automatically set up properties such as the\n<a href=\"#/api/Ext.data.BelongsToAssociation-cfg-primaryKey\" rel=\"Ext.data.BelongsToAssociation-cfg-primaryKey\" class=\"docClass\">primaryKey</a> and <a href=\"#/api/Ext.data.BelongsToAssociation-cfg-foreignKey\" rel=\"Ext.data.BelongsToAssociation-cfg-foreignKey\" class=\"docClass\">foreignKey</a>. These can alternatively be specified:</p>\n\n<pre><code>Ext.define('Product', {\n    fields: [...],\n\n    associations: [\n        { type: 'belongsTo', model: 'Category', primaryKey: 'unique_id', foreignKey: 'cat_id' }\n    ]\n});\n</code></pre>\n\n<p>Here we replaced the default primary key (defaults to 'id') and foreign key (calculated as 'category_id')\nwith our own settings. Usually this will not be needed.</p>\n",
  "alternateClassNames": [

  ]
});