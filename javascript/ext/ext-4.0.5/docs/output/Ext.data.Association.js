Ext.data.JsonP.Ext_data_Association({
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
  "html_filename": "Association.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "Association.html#Ext-data-Association",
  "subclasses": [
    "Ext.data.BelongsToAssociation",
    "Ext.data.HasManyAssociation"
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

  ],
  "alias": null,
  "name": "Ext.data.Association",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/Association.js",
  "doc": "<p>Associations enable you to express relationships between different <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Models</a>. Let's say we're\nwriting an ecommerce system where Users can make Orders - there's a relationship between these Models that we can\nexpress like this:</p>\n\n\n\n\n<pre><code>Ext.define('User', {\n    extend: 'Ext.data.Model',\n    fields: ['id', 'name', 'email'],\n\n    hasMany: {model: 'Order', name: 'orders'}\n});\n\nExt.define('Order', {\n    extend: 'Ext.data.Model',\n    fields: ['id', 'user_id', 'status', 'price'],\n\n    belongsTo: 'User'\n});\n</code></pre>\n\n\n\n\n<p>We've set up two models - User and Order - and told them about each other. You can set up as many associations on\neach Model as you need using the two default types - <a href=\"#/api/Ext.data.HasManyAssociation\" rel=\"Ext.data.HasManyAssociation\" class=\"docClass\">hasMany</a> and\n<a href=\"#/api/Ext.data.BelongsToAssociation\" rel=\"Ext.data.BelongsToAssociation\" class=\"docClass\">belongsTo</a>. There's much more detail on the usage of each of those inside their\ndocumentation pages. If you're not familiar with Models already, <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">there is plenty on those too</a>.</p>\n\n\n\n\n<p><u>Further Reading</u></p>\n\n\n\n\n<ul style=\"list-style-type: disc; padding-left: 20px;\">\n  <li><a href=\"#/api/Ext.data.HasManyAssociation\" rel=\"Ext.data.HasManyAssociation\" class=\"docClass\">hasMany associations</a>\n  <li><a href=\"#/api/Ext.data.BelongsToAssociation\" rel=\"Ext.data.BelongsToAssociation\" class=\"docClass\">belongsTo associations</a>\n  <li><a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">using Models</a>\n</ul>\n\n\n<p><b>Self association models</b></p>\n\n<p>We can also have models that create parent/child associations between the same type. Below is an example, where\ngroups can be nested inside other groups:</p>\n\n\n<pre><code>\n// Server Data\n{\n    \"groups\": {\n        \"id\": 10,\n        \"parent_id\": 100,\n        \"name\": \"Main Group\",\n        \"parent_group\": {\n            \"id\": 100,\n            \"parent_id\": null,\n            \"name\": \"Parent Group\"\n        },\n        \"child_groups\": [{\n            \"id\": 2,\n            \"parent_id\": 10,\n            \"name\": \"Child Group 1\"\n        },{\n            \"id\": 3,\n            \"parent_id\": 10,\n            \"name\": \"Child Group 2\"\n        },{\n            \"id\": 4,\n            \"parent_id\": 10,\n            \"name\": \"Child Group 3\"\n        }]\n    }\n}\n\n// Client code\nExt.define('Group', {\n    extend: 'Ext.data.Model',\n    fields: ['id', 'parent_id', 'name'],\n    proxy: {\n        type: 'ajax',\n        url: 'data.json',\n        reader: {\n            type: 'json',\n            root: 'groups'\n        }\n    },\n    associations: [{\n        type: 'hasMany',\n        model: 'Group',\n        primaryKey: 'id',\n        foreignKey: 'parent_id',\n        autoLoad: true,\n        associationKey: 'child_groups' // read child data from child_groups\n    }, {\n        type: 'belongsTo',\n        model: 'Group',\n        primaryKey: 'id',\n        foreignKey: 'parent_id',\n        associationKey: 'parent_group' // read parent data from parent_group\n    }]\n});\n\n\nExt.onReady(function(){\n    \n    Group.load(10, {\n        success: function(group){\n            console.log(group.getGroup().get('name'));\n            \n            group.groups().each(function(rec){\n                console.log(rec.get('name'));\n            });\n        }\n    });\n    \n});\n</code></pre>\n\n",
  "alternateClassNames": [

  ]
});