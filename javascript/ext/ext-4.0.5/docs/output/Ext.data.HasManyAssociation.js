Ext.data.JsonP.Ext_data_HasManyAssociation({
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
  "html_filename": "HasManyAssociation.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "HasManyAssociation.html#Ext-data-HasManyAssociation",
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
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 167,
        "owner": "Ext.data.HasManyAssociation",
        "html_filename": "HasManyAssociation.html",
        "href": "HasManyAssociation.html#Ext-data-HasManyAssociation-cfg-autoLoad",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "autoLoad",
        "shortDoc": "True to automatically load the related store from a remote source when instantiated. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/HasManyAssociation.js",
        "doc": "<p>True to automatically load the related store from a remote source when instantiated.\nDefaults to <tt>false</tt>.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 161,
        "owner": "Ext.data.HasManyAssociation",
        "html_filename": "HasManyAssociation.html",
        "href": "HasManyAssociation.html#Ext-data-HasManyAssociation-cfg-filterProperty",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "filterProperty",
        "shortDoc": "Optionally overrides the default filter that is set up on the associated Store. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/HasManyAssociation.js",
        "doc": "<p>Optionally overrides the default filter that is set up on the associated Store. If\nthis is not set, a filter is automatically created which filters the association based on the configured\n<a href=\"#/api/Ext.data.HasManyAssociation-cfg-foreignKey\" rel=\"Ext.data.HasManyAssociation-cfg-foreignKey\" class=\"docClass\">foreignKey</a>. See intro docs for more details. Defaults to undefined</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 111,
        "owner": "Ext.data.HasManyAssociation",
        "html_filename": "HasManyAssociation.html",
        "href": "HasManyAssociation.html#Ext-data-HasManyAssociation-cfg-foreignKey",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "foreignKey",
        "shortDoc": "The name of the foreign key on the associated model that links it to the owner\nmodel. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/HasManyAssociation.js",
        "doc": "<p>The name of the foreign key on the associated model that links it to the owner\nmodel. Defaults to the lowercased name of the owner model plus \"_id\", e.g. an association with a where a\nmodel called Group hasMany Users would create 'group_id' as the foreign key. When the remote store is loaded,\nthe store is automatically filtered so that only records with a matching foreign key are included in the\nresulting child store. This can be overridden by specifying the <a href=\"#/api/Ext.data.HasManyAssociation-cfg-filterProperty\" rel=\"Ext.data.HasManyAssociation-cfg-filterProperty\" class=\"docClass\">filterProperty</a>.</p>\n\n<pre><code>Ext.define('Group', {\n    extend: 'Ext.data.Model',\n    fields: ['id', 'name'],\n    hasMany: 'User'\n});\n\nExt.define('User', {\n    extend: 'Ext.data.Model',\n    fields: ['id', 'name', 'group_id'], // refers to the id of the group that this user belongs to\n    belongsTo: 'Group'\n});\n</code></pre>\n\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 132,
        "owner": "Ext.data.HasManyAssociation",
        "html_filename": "HasManyAssociation.html",
        "href": "HasManyAssociation.html#Ext-data-HasManyAssociation-cfg-name",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "name",
        "shortDoc": "The name of the function to create on the owner model to retrieve the child store. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/HasManyAssociation.js",
        "doc": "<p>The name of the function to create on the owner model to retrieve the child store.\nIf not specified, the pluralized name of the child model is used.</p>\n\n<pre><code>// This will create a users() method on any Group model instance\nExt.define('Group', {\n    extend: 'Ext.data.Model',\n    fields: ['id', 'name'],\n    hasMany: 'User'\n});\nvar group = new Group();\nconsole.log(group.users());\n\n// The method to retrieve the users will now be getUserList\nExt.define('Group', {\n    extend: 'Ext.data.Model',\n    fields: ['id', 'name'],\n    hasMany: {model: 'User', name: 'getUserList'}\n});\nvar group = new Group();\nconsole.log(group.getUserList());\n</code></pre>\n\n"
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
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 156,
        "owner": "Ext.data.HasManyAssociation",
        "html_filename": "HasManyAssociation.html",
        "href": "HasManyAssociation.html#Ext-data-HasManyAssociation-cfg-storeConfig",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "storeConfig",
        "shortDoc": "Optional configuration object that will be passed to the generated Store. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/HasManyAssociation.js",
        "doc": "<p>Optional configuration object that will be passed to the generated Store. Defaults to\nundefined.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 172,
        "owner": "Ext.data.HasManyAssociation",
        "html_filename": "HasManyAssociation.html",
        "href": "HasManyAssociation.html#Ext-data-HasManyAssociation-cfg-type",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "type",
        "shortDoc": "The type configuration can be used when creating associations using a configuration object. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/HasManyAssociation.js",
        "doc": "<p>The type configuration can be used when creating associations using a configuration object.\nUse 'hasMany' to create a HasManyAssocation</p>\n\n<pre><code>associations: [{\n    type: 'hasMany',\n    model: 'User'\n}]\n</code></pre>\n\n"
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
  "name": "Ext.data.HasManyAssociation",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/HasManyAssociation.js",
  "doc": "<p>Represents a one-to-many relationship between two models. Usually created indirectly via a model definition:</p>\n\n\n\n\n<pre><code>Ext.define('Product', {\n    extend: 'Ext.data.Model',\n    fields: [\n        {name: 'id',      type: 'int'},\n        {name: 'user_id', type: 'int'},\n        {name: 'name',    type: 'string'}\n    ]\n});\n\nExt.define('User', {\n    extend: 'Ext.data.Model',\n    fields: [\n        {name: 'id',   type: 'int'},\n        {name: 'name', type: 'string'}\n    ],\n    // we can use the hasMany shortcut on the model to create a hasMany association\n    hasMany: {model: 'Product', name: 'products'}\n});\n</pre>\n\n\n<p></code></p>\n\n<p>Above we created Product and User models, and linked them by saying that a User hasMany Products. This gives\nus a new function on every User instance, in this case the function is called 'products' because that is the name\nwe specified in the association configuration above.</p>\n\n\n\n\n<p>This new function returns a specialized <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a> which is automatically filtered to load\nonly Products for the given model instance:</p>\n\n\n\n\n<pre><code>//first, we load up a User with id of 1\nvar user = Ext.create('User', {id: 1, name: 'Ed'});\n\n//the user.products function was created automatically by the association and returns a <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a>\n//the created store is automatically scoped to the set of Products for the User with id of 1\nvar products = user.products();\n\n//we still have all of the usual Store functions, for example it's easy to add a Product for this User\nproducts.add({\n    name: 'Another Product'\n});\n\n//saves the changes to the store - this automatically sets the new Product's user_id to 1 before saving\nproducts.sync();\n</code></pre>\n\n\n\n\n<p>The new Store is only instantiated the first time you call products() to conserve memory and processing time,\nthough calling products() a second time returns the same store instance.</p>\n\n\n\n\n<p><u>Custom filtering</u></p>\n\n\n\n\n<p>The Store is automatically furnished with a filter - by default this filter tells the store to only return\nrecords where the associated model's foreign key matches the owner model's primary key. For example, if a User\nwith ID = 100 hasMany Products, the filter loads only Products with user_id == 100.</p>\n\n\n\n\n<p>Sometimes we want to filter by another field - for example in the case of a Twitter search application we may\nhave models for Search and Tweet:</p>\n\n\n\n\n<pre><code>Ext.define('Search', {\n    extend: 'Ext.data.Model',\n    fields: [\n        'id', 'query'\n    ],\n\n    hasMany: {\n        model: 'Tweet',\n        name : 'tweets',\n        filterProperty: 'query'\n    }\n});\n\nExt.define('Tweet', {\n    extend: 'Ext.data.Model',\n    fields: [\n        'id', 'text', 'from_user'\n    ]\n});\n\n//returns a Store filtered by the filterProperty\nvar store = new Search({query: 'Sencha Touch'}).tweets();\n</code></pre>\n\n\n\n\n<p>The tweets association above is filtered by the query property by setting the <a href=\"#/api/Ext.data.HasManyAssociation-cfg-filterProperty\" rel=\"Ext.data.HasManyAssociation-cfg-filterProperty\" class=\"docClass\">filterProperty</a>, and is\nequivalent to this:</p>\n\n\n\n\n<pre><code>var store = Ext.create('Ext.data.Store', {\n    model: 'Tweet',\n    filters: [\n        {\n            property: 'query',\n            value   : 'Sencha Touch'\n        }\n    ]\n});\n</code></pre>\n\n",
  "alternateClassNames": [

  ]
});