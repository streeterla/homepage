Ext.data.JsonP.Ext_data_proxy_Rest({
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
      {
        "static": true,
        "inheritable": true,
        "linenr": 392,
        "owner": "Ext.Base",
        "html_filename": "Base3.html",
        "href": "Base3.html#Ext-Base-method-addStatics",
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
            "name": "members",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "addStatics",
        "shortDoc": "Add / override static properties of this class. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js",
        "doc": "<p>Add / override static properties of this class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.addStatics({\n    someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'\n    method1: function() { ... },    // My.cool.Class.method1 = function() { ... };\n    method2: function() { ... }     // My.cool.Class.method2 = function() { ... };\n});\n</code></pre>\n",
        "return": {
          "type": "Ext.Base",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": true,
        "inheritable": true,
        "linenr": 482,
        "owner": "Ext.Base",
        "html_filename": "Base3.html",
        "href": "Base3.html#Ext-Base-method-borrow",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.Base",
            "properties": [

            ],
            "optional": false,
            "name": "fromClass",
            "doc": "<p>The class to borrow members from</p>\n"
          },
          {
            "type": "String/String[]",
            "properties": [

            ],
            "optional": false,
            "name": "members",
            "doc": "<p>The names of the members to borrow</p>\n"
          }
        ],
        "alias": null,
        "name": "borrow",
        "shortDoc": "Borrow another class' members to the prototype of this class. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js",
        "doc": "<p>Borrow another class' members to the prototype of this class.</p>\n\n<pre><code>Ext.define('Bank', {\n    money: '$$$',\n    printMoney: function() {\n        alert('$$$$$$$');\n    }\n});\n\nExt.define('Thief', {\n    ...\n});\n\nThief.borrow(Bank, ['money', 'printMoney']);\n\nvar steve = new Thief();\n\nalert(steve.money); // alerts '$$$'\nsteve.printMoney(); // alerts '$$$$$$$'\n</code></pre>\n",
        "return": {
          "type": "Ext.Base",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": true,
        "inheritable": true,
        "linenr": 330,
        "owner": "Ext.Base",
        "html_filename": "Base3.html",
        "href": "Base3.html#Ext-Base-method-create",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "create",
        "shortDoc": "Create a new instance of this Class. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js",
        "doc": "<p>Create a new instance of this Class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.create({\n    someConfig: true\n});\n</code></pre>\n\n<p>All parameters are passed to the constructor of the class.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>the created instance.</p>\n"
        }
      },
      {
        "static": true,
        "inheritable": true,
        "linenr": 658,
        "owner": "Ext.Base",
        "html_filename": "Base3.html",
        "href": "Base3.html#Ext-Base-method-createAlias",
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
            "name": "alias",
            "doc": "<p>The new method name, or an object to set multiple aliases. See\n<a href=\"#/api/Ext.Function-method-flexSetter\" rel=\"Ext.Function-method-flexSetter\" class=\"docClass\">flexSetter</a></p>\n"
          },
          {
            "type": "String/Object",
            "properties": [

            ],
            "optional": false,
            "name": "origin",
            "doc": "<p>The original method name</p>\n"
          }
        ],
        "alias": null,
        "name": "createAlias",
        "shortDoc": "Create aliases for existing prototype methods. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js",
        "doc": "<p>Create aliases for existing prototype methods. Example:</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    method1: function() { ... },\n    method2: function() { ... }\n});\n\nvar test = new My.cool.Class();\n\nMy.cool.Class.createAlias({\n    method3: 'method1',\n    method4: 'method2'\n});\n\ntest.method3(); // test.method1()\n\nMy.cool.Class.createAlias('method5', 'method3');\n\ntest.method5(); // test.method3() -&gt; test.method1()\n</code></pre>\n",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": true,
        "inheritable": true,
        "linenr": 639,
        "owner": "Ext.Base",
        "html_filename": "Base3.html",
        "href": "Base3.html#Ext-Base-method-getName",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getName",
        "shortDoc": "Get the current class' name in string format. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js",
        "doc": "<p>Get the current class' name in string format.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>className</p>\n"
        }
      },
      {
        "static": true,
        "inheritable": true,
        "linenr": 420,
        "owner": "Ext.Base",
        "html_filename": "Base3.html",
        "href": "Base3.html#Ext-Base-method-implement",
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
            "name": "members",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "implement",
        "shortDoc": "Add methods / properties to the prototype of this class. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js",
        "doc": "<p>Add methods / properties to the prototype of this class.</p>\n\n<pre><code>Ext.define('My.awesome.Cat', {\n    constructor: function() {\n        ...\n    }\n});\n\n My.awesome.Cat.implement({\n     meow: function() {\n        alert('Meowww...');\n     }\n });\n\n var kitty = new My.awesome.Cat;\n kitty.meow();\n</code></pre>\n",
        "return": {
          "type": "undefined",
          "properties": [

          ],
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": true,
        "inheritable": true,
        "linenr": 524,
        "owner": "Ext.Base",
        "html_filename": "Base3.html",
        "href": "Base3.html#Ext-Base-method-override",
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
            "name": "members",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "override",
        "shortDoc": "Override prototype members of this class. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Base.js",
        "doc": "<p>Override prototype members of this class. Overridden methods can be invoked via\n<a href=\"#/api/Ext.Base-method-callOverridden\" rel=\"Ext.Base-method-callOverridden\" class=\"docClass\">Ext.Base.callOverridden</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
        "return": {
          "type": "Ext.Base",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      }
    ],
    "property": [

    ]
  },
  "extends": "Ext.data.proxy.Ajax",
  "html_filename": "Rest.html",
  "allMixins": [
    "Ext.util.Observable"
  ],
  "docauthor": null,
  "href": "Rest.html#Ext-data-proxy-Rest",
  "subclasses": [

  ],
  "protected": false,
  "members": {
    "css_var": [

    ],
    "cfg": [
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 97,
        "owner": "Ext.data.proxy.Server",
        "html_filename": "Server.html",
        "href": "Server.html#Ext-data-proxy-Server-cfg-api",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "api",
        "shortDoc": "Specific urls to call on CRUD action methods \"create\", \"read\", \"update\" and \"destroy\". ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
        "doc": "<p>Specific urls to call on CRUD action methods \"create\", \"read\", \"update\" and \"destroy\". Defaults to:</p>\n\n<pre><code>api: {\n    create  : undefined,\n    read    : undefined,\n    update  : undefined,\n    destroy : undefined\n}\n</code></pre>\n\n<p>The url is built based upon the action being executed [create|read|update|destroy] using the commensurate\n<a href=\"#/api/Ext.data.proxy.Rest-cfg-api\" rel=\"Ext.data.proxy.Rest-cfg-api\" class=\"docClass\">api</a> property, or if undefined default to the configured\n<a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a>.<a href=\"#/api/Ext.data.proxy.Server-cfg-url\" rel=\"Ext.data.proxy.Server-cfg-url\" class=\"docClass\">url</a>.</p>\n\n<p>For example:</p>\n\n<pre><code>api: {\n    create  : '/controller/new',\n    read    : '/controller/load',\n    update  : '/controller/update',\n    destroy : '/controller/destroy_action'\n}\n</code></pre>\n\n<p>If the specific URL for a given CRUD action is undefined, the CRUD action request will be directed to the\nconfigured <a href=\"#/api/Ext.data.proxy.Server-cfg-url\" rel=\"Ext.data.proxy.Server-cfg-url\" class=\"docClass\">url</a>.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 103,
        "owner": "Ext.data.proxy.Rest",
        "html_filename": "Rest.html",
        "href": "Rest.html#Ext-data-proxy-Rest-cfg-appendId",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "appendId",
        "shortDoc": "True to automatically append the ID of a Model instance when performing a request based on that single instance. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Rest.js",
        "doc": "<p>True to automatically append the ID of a Model instance when performing a request based on that single instance.\nSee RestProxy intro docs for more details. Defaults to true.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 116,
        "owner": "Ext.data.proxy.Rest",
        "html_filename": "Rest.html",
        "href": "Rest.html#Ext-data-proxy-Rest-cfg-batchActions",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "batchActions",
        "shortDoc": "True to batch actions of a particular type when synchronizing the store. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Rest.js",
        "doc": "<p>True to batch actions of a particular type when synchronizing the store. Defaults to false.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 50,
        "owner": "Ext.data.proxy.Proxy",
        "html_filename": "Proxy2.html",
        "href": "Proxy2.html#Ext-data-proxy-Proxy-cfg-batchOrder",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "batchOrder",
        "shortDoc": "Comma-separated ordering 'create', 'update' and 'destroy' actions when batching. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Proxy.js",
        "doc": "<p>Comma-separated ordering 'create', 'update' and 'destroy' actions when batching. Override this to set a different\norder for the batched CRUD actions to be executed in. Defaults to 'create,update,destroy'.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 85,
        "owner": "Ext.data.proxy.Server",
        "html_filename": "Server.html",
        "href": "Server.html#Ext-data-proxy-Server-cfg-cacheString",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "cacheString",
        "shortDoc": "The name of the cache param added to the url when using noCache. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
        "doc": "<p>The name of the cache param added to the url when using noCache. Defaults to \"_dc\".</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 64,
        "owner": "Ext.data.proxy.Server",
        "html_filename": "Server.html",
        "href": "Server.html#Ext-data-proxy-Server-cfg-directionParam",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "directionParam",
        "shortDoc": "The name of the direction parameter to send in a request. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
        "doc": "<p>The name of the direction parameter to send in a request. <strong>This is only used when simpleSortMode is set to\ntrue.</strong> Defaults to 'dir'.</p>\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 141,
        "owner": "Ext.data.proxy.Server",
        "html_filename": "Server.html",
        "href": "Server.html#Ext-data-proxy-Server-cfg-extraParams",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "extraParams",
        "shortDoc": "Extra parameters that will be included on every request. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
        "doc": "<p>Extra parameters that will be included on every request. Individual requests with params of the same name\nwill override these params when they are in conflict.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 57,
        "owner": "Ext.data.proxy.Server",
        "html_filename": "Server.html",
        "href": "Server.html#Ext-data-proxy-Server-cfg-filterParam",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "filterParam",
        "shortDoc": "The name of the 'filter' parameter to send in a request. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
        "doc": "<p>The name of the 'filter' parameter to send in a request. Defaults to 'filter'. Set this to undefined if you don't\nwant to send a filter parameter.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 110,
        "owner": "Ext.data.proxy.Rest",
        "html_filename": "Rest.html",
        "href": "Rest.html#Ext-data-proxy-Rest-cfg-format",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "format",
        "shortDoc": "Optional data format to send to the server when making any request (e.g. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Rest.js",
        "doc": "<p>Optional data format to send to the server when making any request (e.g. 'json'). See the RestProxy intro docs\nfor full details. Defaults to undefined.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 43,
        "owner": "Ext.data.proxy.Server",
        "html_filename": "Server.html",
        "href": "Server.html#Ext-data-proxy-Server-cfg-groupParam",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "groupParam",
        "shortDoc": "The name of the 'group' parameter to send in a request. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
        "doc": "<p>The name of the 'group' parameter to send in a request. Defaults to 'group'. Set this to undefined if you don't\nwant to send a group parameter.</p>\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 224,
        "owner": "Ext.data.proxy.Ajax",
        "html_filename": "Ajax2.html",
        "href": "Ajax2.html#Ext-data-proxy-Ajax-cfg-headers",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "headers",
        "shortDoc": "Any headers to add to the Ajax request. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Ajax.js",
        "doc": "<p>Any headers to add to the Ajax request. Defaults to undefined.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 36,
        "owner": "Ext.data.proxy.Server",
        "html_filename": "Server.html",
        "href": "Server.html#Ext-data-proxy-Server-cfg-limitParam",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "limitParam",
        "shortDoc": "The name of the 'limit' parameter to send in a request. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
        "doc": "<p>The name of the 'limit' parameter to send in a request. Defaults to 'limit'. Set this to undefined if you don't\nwant to send a limit parameter.</p>\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 102,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-cfg-listeners",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "listeners",
        "shortDoc": "A config object containing one or more event handlers to be added to this object during initialization. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>A config object containing one or more event handlers to be added to this object during initialization. This\nshould be a valid listeners config object as specified in the <a href=\"#/api/Ext.data.proxy.Rest-method-addListener\" rel=\"Ext.data.proxy.Rest-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple\nhandlers at once.</p>\n\n<p><strong>DOM events from ExtJS <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></strong></p>\n\n<p>While <em>some</em> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this is usually\nonly done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s <strong><code><a href=\"#/api/Ext.view.View-event-itemclick\" rel=\"Ext.view.View-event-itemclick\" class=\"docClass\">itemclick</a></code></strong> event passing the node clicked on. To access DOM events directly from a\nchild element of a Component, we need to specify the <code>element</code> option to identify the Component property to add a\nDOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n"
      },
      {
        "static": false,
        "type": "String/Ext.data.Model",
        "inheritable": false,
        "properties": null,
        "linenr": 77,
        "owner": "Ext.data.proxy.Proxy",
        "html_filename": "Proxy2.html",
        "href": "Proxy2.html#Ext-data-proxy-Proxy-cfg-model",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "model",
        "shortDoc": "The name of the Model to tie to this Proxy. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Proxy.js",
        "doc": "<p>The name of the Model to tie to this Proxy. Can be either the string name of the Model, or a reference to the\nModel constructor. Required.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 79,
        "owner": "Ext.data.proxy.Server",
        "html_filename": "Server.html",
        "href": "Server.html#Ext-data-proxy-Server-cfg-noCache",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "noCache",
        "shortDoc": "Disable caching by adding a unique parameter name to the request. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
        "doc": "<p>Disable caching by adding a unique parameter name to the request. Set to false to allow caching. Defaults to true.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 22,
        "owner": "Ext.data.proxy.Server",
        "html_filename": "Server.html",
        "href": "Server.html#Ext-data-proxy-Server-cfg-pageParam",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "pageParam",
        "shortDoc": "The name of the 'page' parameter to send in a request. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
        "doc": "<p>The name of the 'page' parameter to send in a request. Defaults to 'page'. Set this to undefined if you don't\nwant to send a page parameter.</p>\n"
      },
      {
        "static": false,
        "type": "Object/String/Ext.data.reader.Reader",
        "inheritable": false,
        "properties": null,
        "linenr": 83,
        "owner": "Ext.data.proxy.Proxy",
        "html_filename": "Proxy2.html",
        "href": "Proxy2.html#Ext-data-proxy-Proxy-cfg-reader",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "reader",
        "shortDoc": "The Ext.data.reader.Reader to use to decode the server's response or data read from client. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Proxy.js",
        "doc": "<p>The <a href=\"#/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Ext.data.reader.Reader</a> to use to decode the server's response or data read from client. This can either be a\nReader instance, a config object or just a valid Reader type name (e.g. 'json', 'xml').</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 71,
        "owner": "Ext.data.proxy.Server",
        "html_filename": "Server.html",
        "href": "Server.html#Ext-data-proxy-Server-cfg-simpleSortMode",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "simpleSortMode",
        "shortDoc": "Enabling simpleSortMode in conjunction with remoteSort will only send one sort property and a direction when a\nremote...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
        "doc": "<p>Enabling simpleSortMode in conjunction with remoteSort will only send one sort property and a direction when a\nremote sort is requested. The directionParam and sortParam will be sent with the property name and either 'ASC'\nor 'DESC'.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 50,
        "owner": "Ext.data.proxy.Server",
        "html_filename": "Server.html",
        "href": "Server.html#Ext-data-proxy-Server-cfg-sortParam",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "sortParam",
        "shortDoc": "The name of the 'sort' parameter to send in a request. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
        "doc": "<p>The name of the 'sort' parameter to send in a request. Defaults to 'sort'. Set this to undefined if you don't\nwant to send a sort parameter.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 29,
        "owner": "Ext.data.proxy.Server",
        "html_filename": "Server.html",
        "href": "Server.html#Ext-data-proxy-Server-cfg-startParam",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "startParam",
        "shortDoc": "The name of the 'start' parameter to send in a request. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
        "doc": "<p>The name of the 'start' parameter to send in a request. Defaults to 'start'. Set this to undefined if you don't\nwant to send a start parameter.</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 91,
        "owner": "Ext.data.proxy.Server",
        "html_filename": "Server.html",
        "href": "Server.html#Ext-data-proxy-Server-cfg-timeout",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "timeout",
        "shortDoc": "The number of milliseconds to wait for a response. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
        "doc": "<p>The number of milliseconds to wait for a response. Defaults to 30000 milliseconds (30 seconds).</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 17,
        "owner": "Ext.data.proxy.Server",
        "html_filename": "Server.html",
        "href": "Server.html#Ext-data-proxy-Server-cfg-url",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "url",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
        "doc": "<p>The URL from which to request the data object.</p>\n"
      },
      {
        "static": false,
        "type": "Object/String/Ext.data.writer.Writer",
        "inheritable": false,
        "properties": null,
        "linenr": 89,
        "owner": "Ext.data.proxy.Proxy",
        "html_filename": "Proxy2.html",
        "href": "Proxy2.html#Ext-data-proxy-Proxy-cfg-writer",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "writer",
        "shortDoc": "The Ext.data.writer.Writer to use to encode any request sent to the server or saved to client. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Proxy.js",
        "doc": "<p>The <a href=\"#/api/Ext.data.writer.Writer\" rel=\"Ext.data.writer.Writer\" class=\"docClass\">Ext.data.writer.Writer</a> to use to encode any request sent to the server or saved to client. This can either be\na Writer instance, a config object or just a valid Writer type name (e.g. 'json', 'xml').</p>\n"
      }
    ],
    "css_mixin": [

    ],
    "event": [
      {
        "static": false,
        "inheritable": false,
        "linenr": 130,
        "owner": "Ext.data.proxy.Server",
        "html_filename": "Server.html",
        "href": "Server.html#Ext-data-proxy-Server-event-exception",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "Ext.data.proxy.Proxy",
            "properties": [

            ],
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "response",
            "doc": "<p>The response from the AJAX request</p>\n"
          },
          {
            "type": "Ext.data.Operation",
            "properties": [

            ],
            "optional": false,
            "name": "operation",
            "doc": "<p>The operation that triggered request</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "exception",
        "shortDoc": "Fires when the server returns an exception ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
        "doc": "<p>Fires when the server returns an exception</p>\n"
      }
    ],
    "method": [
      {
        "static": false,
        "inheritable": false,
        "linenr": 1,
        "owner": "Ext.data.proxy.Ajax",
        "html_filename": "Ajax2.html",
        "href": "Ajax2.html#Ext-data-proxy-Ajax-method-constructor",
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
            "doc": "<p>(optional) Config object.\nIf an options parameter is passed, the singleton <a href=\"#/api/Ext.Ajax\" rel=\"Ext.Ajax\" class=\"docClass\">Ext.Ajax</a> object will be used to make the request.</p>\n"
          }
        ],
        "alias": null,
        "name": "constructor",
        "shortDoc": "Note that if this HttpProxy is being used by a Store, then the Store's call to\nload will override any specified callb...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Ajax.js",
        "doc": "<p>Note that if this HttpProxy is being used by a <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a>, then the Store's call to\n<a href=\"#/api/Ext.data.Store-method-load\" rel=\"Ext.data.Store-method-load\" class=\"docClass\">load</a> will override any specified callback and params options. In this case, use the\n<a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a>'s events to modify parameters, or react to loading events.</p>\n",
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
        "linenr": 495,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-addEvents",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Object/String",
            "properties": [

            ],
            "optional": false,
            "name": "o",
            "doc": "<p>Either an object with event names as properties with a value of <code>true</code> or the first\nevent name string if multiple event names are being passed as separate parameters. Usage:</p>\n\n<pre><code>this.addEvents({\n    storeloaded: true,\n    storecleared: true\n});\n</code></pre>\n"
          },
          {
            "type": "String...",
            "properties": [

            ],
            "optional": true,
            "name": "more",
            "doc": "<p>(optional) Additional event names if multiple event names are being passed as separate\nparameters. Usage:</p>\n\n<pre><code>this.addEvents('storeloaded', 'storecleared');\n</code></pre>\n"
          }
        ],
        "alias": null,
        "name": "addEvents",
        "shortDoc": "Adds the specified events to the list of events which this Observable may fire. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Adds the specified events to the list of events which this Observable may fire.</p>\n",
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
        "linenr": 278,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-addListener",
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
            "name": "eventName",
            "doc": "<p>The name of the event to listen for. May also be an object who's property names are\nevent names.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "handler",
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.data.proxy.Rest-method-fireEvent\" rel=\"Ext.data.proxy.Rest-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function is executed. <strong>If\nomitted, defaults to the object which fired the event.</strong></p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "options",
            "doc": "<p>(optional) An object containing handler configuration.</p>\n\n<p><strong>Note:</strong> Unlike in ExtJS 3.x, the options object will also be passed as the last argument to every event handler.</p>\n\n<p>This object may contain any of the following properties:</p>\n\n<ul>\n<li><p><strong>scope</strong> : Object</p>\n\n<p>The scope (<code>this</code> reference) in which the handler function is executed. <strong>If omitted, defaults to the object\nwhich fired the event.</strong></p></li>\n<li><p><strong>delay</strong> : Number</p>\n\n<p>The number of milliseconds to delay the invocation of the handler after the event fires.</p></li>\n<li><p><strong>single</strong> : Boolean</p>\n\n<p>True to add a handler to handle just the next firing of the event, and then remove itself.</p></li>\n<li><p><strong>buffer</strong> : Number</p>\n\n<p>Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed by the specified number of\nmilliseconds. If the event fires again within that time, the original handler is <em>not</em> invoked, but the new\nhandler is scheduled in its place.</p></li>\n<li><p><strong>target</strong> : Observable</p>\n\n<p>Only call the handler if the event was fired on the target Observable, <em>not</em> if the event was bubbled up from a\nchild Observable.</p></li>\n<li><p><strong>element</strong> : String</p>\n\n<p><strong>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</strong> The name of a Component\nproperty which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which will exist only after the Component is rendered.\nFor example, to add a click listener to a Panel's body:</p>\n\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></li>\n</ul>\n\n\n<p><strong>Combining Options</strong></p>\n\n<p>Using the options argument, it is possible to combine different types of listeners:</p>\n\n<p>A delayed, one-time listener.</p>\n\n<pre><code>myPanel.on('hide', this.handleClick, this, {\n    single: true,\n    delay: 100\n});\n</code></pre>\n\n<p><strong>Attaching multiple handlers in 1 call</strong></p>\n\n<p>The method also allows for a single argument to be passed which is a config object containing properties which\nspecify multiple events. For example:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>\n\n<p>One can also specify options for each event handler separately:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: {fn: this.onCellClick, scope: this, single: true},\n    mouseover: {fn: panel.onMouseOver, scope: panel}\n});\n</code></pre>\n"
          }
        ],
        "alias": null,
        "name": "addListener",
        "shortDoc": "Appends an event handler to this object. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Appends an event handler to this object.</p>\n",
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
        "linenr": 156,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-addManagedListener",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.util.Observable/Ext.Element",
            "properties": [

            ],
            "optional": false,
            "name": "item",
            "doc": "<p>The item to which to add a listener/listeners.</p>\n"
          },
          {
            "type": "Object/String",
            "properties": [

            ],
            "optional": false,
            "name": "ename",
            "doc": "<p>The event name, or an object containing event name properties.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "fn",
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "opt",
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the\n<a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n"
          }
        ],
        "alias": null,
        "name": "addManagedListener",
        "shortDoc": "Adds listeners to any Observable object (or Ext.Element) which are automatically removed when this Component is\ndestr...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Adds listeners to any Observable object (or Ext.Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
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
        "linenr": 429,
        "owner": "Ext.data.proxy.Server",
        "html_filename": "Server.html",
        "href": "Server.html#Ext-data-proxy-Server-method-afterRequest",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.data.Request",
            "properties": [

            ],
            "optional": false,
            "name": "request",
            "doc": "<p>The Request object</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": false,
            "name": "success",
            "doc": "<p>True if the request was successful</p>\n"
          }
        ],
        "alias": null,
        "name": "afterRequest",
        "shortDoc": "Optional callback function which can be used to clean up after a request has been completed. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
        "doc": "<p>Optional callback function which can be used to clean up after a request has been completed.</p>\n",
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
        "linenr": 256,
        "owner": "Ext.data.proxy.Proxy",
        "html_filename": "Proxy2.html",
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-batch",
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
            "name": "operations",
            "doc": "<p>Object containing the Model instances to act upon, keyed by action name</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "listeners",
            "doc": "<p>(optional) listeners object passed straight through to the Batch -\nsee <a href=\"#/api/Ext.data.Batch\" rel=\"Ext.data.Batch\" class=\"docClass\">Ext.data.Batch</a></p>\n"
          }
        ],
        "alias": null,
        "name": "batch",
        "shortDoc": "Performs a batch of Operations, in the order specified by batchOrder. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Proxy.js",
        "doc": "<p>Performs a batch of <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Operations</a>, in the order specified by <a href=\"#/api/Ext.data.proxy.Rest-cfg-batchOrder\" rel=\"Ext.data.proxy.Rest-cfg-batchOrder\" class=\"docClass\">batchOrder</a>. Used\ninternally by <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a>'s <a href=\"#/api/Ext.data.Store-method-sync\" rel=\"Ext.data.Store-method-sync\" class=\"docClass\">sync</a> method. Example usage:</p>\n\n<pre><code>myProxy.batch({\n    create : [myModel1, myModel2],\n    update : [myModel3],\n    destroy: [myModel4, myModel5]\n});\n</code></pre>\n\n<p>Where the myModel* above are <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> instances - in this case 1 and 2 are new instances and\nhave not been saved before, 3 has been saved previously but needs to be updated, and 4 and 5 have already been\nsaved but should now be destroyed.</p>\n",
        "return": {
          "type": "Ext.data.Batch",
          "properties": null,
          "name": "return",
          "doc": "<p>The newly created <a href=\"#/api/Ext.data.Batch\" rel=\"Ext.data.Batch\" class=\"docClass\">Ext.data.Batch</a> object</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 171,
        "owner": "Ext.data.proxy.Server",
        "html_filename": "Server.html",
        "href": "Server.html#Ext-data-proxy-Server-method-buildRequest",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.data.Operation",
            "properties": [

            ],
            "optional": false,
            "name": "operation",
            "doc": "<p>The <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Operation</a> object to execute</p>\n"
          }
        ],
        "alias": null,
        "name": "buildRequest",
        "shortDoc": "Creates and returns an Ext.data.Request object based on the options passed by the Store\nthat this Proxy is attached to. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
        "doc": "<p>Creates and returns an <a href=\"#/api/Ext.data.Request\" rel=\"Ext.data.Request\" class=\"docClass\">Ext.data.Request</a> object based on the options passed by the <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a>\nthat this Proxy is attached to.</p>\n",
        "return": {
          "type": "Ext.data.Request",
          "properties": null,
          "name": "return",
          "doc": "<p>The request object</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 122,
        "owner": "Ext.data.proxy.Rest",
        "html_filename": "Rest.html",
        "href": "Rest.html#Ext-data-proxy-Rest-method-buildUrl",
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
            "name": "request",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "buildUrl",
        "shortDoc": "Specialized version of buildUrl that incorporates the appendId and format options into the\ngenerated url. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Rest.js",
        "doc": "<p>Specialized version of buildUrl that incorporates the <a href=\"#/api/Ext.data.proxy.Rest-cfg-appendId\" rel=\"Ext.data.proxy.Rest-cfg-appendId\" class=\"docClass\">appendId</a> and <a href=\"#/api/Ext.data.proxy.Rest-cfg-format\" rel=\"Ext.data.proxy.Rest-cfg-format\" class=\"docClass\">format</a> options into the\ngenerated url. Override this to provide further customizations, but remember to call the superclass buildUrl so\nthat additional parameters like the cache buster string are appended.</p>\n",
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
        "linenr": 426,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-clearListeners",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "clearListeners",
        "shortDoc": "Removes all listeners for this object including the managed listeners ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Removes all listeners for this object including the managed listeners</p>\n",
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
        "linenr": 455,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-clearManagedListeners",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "clearManagedListeners",
        "shortDoc": "Removes all managed listeners for this object. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Removes all managed listeners for this object.</p>\n",
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
        "linenr": 220,
        "owner": "Ext.data.proxy.Proxy",
        "html_filename": "Proxy2.html",
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-create",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.data.Operation",
            "properties": [

            ],
            "optional": false,
            "name": "operation",
            "doc": "<p>The Operation to perform</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "callback",
            "doc": "<p>Callback function to be called when the Operation has completed (whether successful or not)</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "scope",
            "doc": "<p>Scope to execute the callback function in</p>\n"
          }
        ],
        "alias": null,
        "name": "create",
        "shortDoc": "Performs the given create operation. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Proxy.js",
        "doc": "<p>Performs the given create operation.</p>\n",
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
        "linenr": 247,
        "owner": "Ext.data.proxy.Proxy",
        "html_filename": "Proxy2.html",
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-destroy",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.data.Operation",
            "properties": [

            ],
            "optional": false,
            "name": "operation",
            "doc": "<p>The Operation to perform</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "callback",
            "doc": "<p>Callback function to be called when the Operation has completed (whether successful or not)</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "scope",
            "doc": "<p>Scope to execute the callback function in</p>\n"
          }
        ],
        "alias": null,
        "name": "destroy",
        "shortDoc": "Performs the given destroy operation. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Proxy.js",
        "doc": "<p>Performs the given destroy operation.</p>\n",
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
        "linenr": 413,
        "owner": "Ext.data.proxy.Server",
        "html_filename": "Server.html",
        "href": "Server.html#Ext-data-proxy-Server-method-doRequest",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.data.Operation",
            "properties": [

            ],
            "optional": false,
            "name": "operation",
            "doc": "<p>The <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Ext.data.Operation</a> object</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "callback",
            "doc": "<p>The callback function to call when the Operation has completed</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "scope",
            "doc": "<p>The scope in which to execute the callback</p>\n"
          }
        ],
        "alias": null,
        "name": "doRequest",
        "shortDoc": "In ServerProxy subclasses, the create, read, update and destroy methods all\npass through to doRequest. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
        "doc": "<p>In ServerProxy subclasses, the <a href=\"#/api/Ext.data.proxy.Rest-method-create\" rel=\"Ext.data.proxy.Rest-method-create\" class=\"docClass\">create</a>, <a href=\"#/api/Ext.data.proxy.Rest-method-read\" rel=\"Ext.data.proxy.Rest-method-read\" class=\"docClass\">read</a>, <a href=\"#/api/Ext.data.proxy.Rest-method-update\" rel=\"Ext.data.proxy.Rest-method-update\" class=\"docClass\">update</a> and <a href=\"#/api/Ext.data.proxy.Rest-method-destroy\" rel=\"Ext.data.proxy.Rest-method-destroy\" class=\"docClass\">destroy</a> methods all\npass through to doRequest. Each ServerProxy subclass must implement the doRequest method - see <a href=\"#/api/Ext.data.proxy.JsonP\" rel=\"Ext.data.proxy.JsonP\" class=\"docClass\">Ext.data.proxy.JsonP</a> and <a href=\"#/api/Ext.data.proxy.Ajax\" rel=\"Ext.data.proxy.Ajax\" class=\"docClass\">Ext.data.proxy.Ajax</a> for examples. This method carries the same signature as\neach of the methods that delegate to it.</p>\n",
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
        "linenr": 610,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-enableBubble",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/String[]",
            "properties": [

            ],
            "optional": false,
            "name": "events",
            "doc": "<p>The event name to bubble, or an Array of event names.</p>\n"
          }
        ],
        "alias": null,
        "name": "enableBubble",
        "shortDoc": "Enables events fired by this Observable to bubble up an owner hierarchy by calling this.getBubbleTarget() if\npresent. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Enables events fired by this Observable to bubble up an owner hierarchy by calling <code>this.getBubbleTarget()</code> if\npresent. There is no implementation in the Observable base class.</p>\n\n<p>This is commonly used by Ext.Components to bubble events to owner Containers.\nSee <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>. The default implementation in <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> returns the\nComponent's immediate owner. But if a known target is required, this can be overridden to access the\nrequired target more quickly.</p>\n\n<p>Example:</p>\n\n<pre><code>Ext.override(Ext.form.field.Base, {\n    //  Add functionality to Field's initComponent to enable the change event to bubble\n    initComponent : Ext.Function.createSequence(Ext.form.field.Base.prototype.initComponent, function() {\n        this.enableBubble('change');\n    }),\n\n    //  We know that we want Field's events to bubble directly to the FormPanel.\n    getBubbleTarget : function() {\n        if (!this.formPanel) {\n            this.formPanel = this.findParentByType('form');\n        }\n        return this.formPanel;\n    }\n});\n\nvar myForm = new Ext.formPanel({\n    title: 'User Details',\n    items: [{\n        ...\n    }],\n    listeners: {\n        change: function() {\n            // Title goes red if form has been modified.\n            myForm.header.setStyle('color', 'red');\n        }\n    }\n});\n</code></pre>\n",
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
        "linenr": 298,
        "owner": "Ext.data.proxy.Server",
        "html_filename": "Server.html",
        "href": "Server.html#Ext-data-proxy-Server-method-encodeFilters",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.util.Filter[]",
            "properties": [

            ],
            "optional": false,
            "name": "filters",
            "doc": "<p>The array of <a href=\"#/api/Ext.util.Filter\" rel=\"Ext.util.Filter\" class=\"docClass\">Filter</a> objects</p>\n"
          }
        ],
        "alias": null,
        "name": "encodeFilters",
        "shortDoc": "Encodes the array of Ext.util.Filter objects into a string to be sent in the request url. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
        "doc": "<p>Encodes the array of <a href=\"#/api/Ext.util.Filter\" rel=\"Ext.util.Filter\" class=\"docClass\">Ext.util.Filter</a> objects into a string to be sent in the request url. By default,\nthis simply JSON-encodes the filter data</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The encoded filters</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 277,
        "owner": "Ext.data.proxy.Server",
        "html_filename": "Server.html",
        "href": "Server.html#Ext-data-proxy-Server-method-encodeSorters",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.util.Sorter[]",
            "properties": [

            ],
            "optional": false,
            "name": "sorters",
            "doc": "<p>The array of <a href=\"#/api/Ext.util.Sorter\" rel=\"Ext.util.Sorter\" class=\"docClass\">Sorter</a> objects</p>\n"
          }
        ],
        "alias": null,
        "name": "encodeSorters",
        "shortDoc": "Encodes the array of Ext.util.Sorter objects into a string to be sent in the request url. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
        "doc": "<p>Encodes the array of <a href=\"#/api/Ext.util.Sorter\" rel=\"Ext.util.Sorter\" class=\"docClass\">Ext.util.Sorter</a> objects into a string to be sent in the request url. By default,\nthis simply JSON-encodes the sorter data</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The encoded sorters</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 233,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-fireEvent",
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
            "name": "eventName",
            "doc": "<p>The name of the event to fire.</p>\n"
          },
          {
            "type": "Object...",
            "properties": [

            ],
            "optional": false,
            "name": "args",
            "doc": "<p>Variable number of parameters are passed to handlers.</p>\n"
          }
        ],
        "alias": null,
        "name": "fireEvent",
        "shortDoc": "Fires the specified event with the passed parameters (minus the event name, plus the options object passed\nto addList...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Fires the specified event with the passed parameters (minus the event name, plus the <code>options</code> object passed\nto <a href=\"#/api/Ext.data.proxy.Rest-method-addListener\" rel=\"Ext.data.proxy.Rest-method-addListener\" class=\"docClass\">addListener</a>).</p>\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>) by\ncalling <a href=\"#/api/Ext.data.proxy.Rest-method-enableBubble\" rel=\"Ext.data.proxy.Rest-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>returns false if any of the handlers return false otherwise it returns true.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 254,
        "owner": "Ext.data.proxy.Ajax",
        "html_filename": "Ajax2.html",
        "href": "Ajax2.html#Ext-data-proxy-Ajax-method-getMethod",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.data.Request",
            "properties": [

            ],
            "optional": false,
            "name": "request",
            "doc": "<p>The request object</p>\n"
          }
        ],
        "alias": null,
        "name": "getMethod",
        "shortDoc": "Returns the HTTP method name for a given request. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Ajax.js",
        "doc": "<p>Returns the HTTP method name for a given request. By default this returns based on a lookup on\n<a href=\"#/api/Ext.data.proxy.Rest-property-actionMethods\" rel=\"Ext.data.proxy.Rest-property-actionMethods\" class=\"docClass\">actionMethods</a>.</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The HTTP method to use (should be one of 'GET', 'POST', 'PUT' or 'DELETE')</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 136,
        "owner": "Ext.data.proxy.Proxy",
        "html_filename": "Proxy2.html",
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-getModel",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getModel",
        "shortDoc": "Returns the model attached to this Proxy ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Proxy.js",
        "doc": "<p>Returns the model attached to this Proxy</p>\n",
        "return": {
          "type": "Ext.data.Model",
          "properties": null,
          "name": "return",
          "doc": "<p>The model</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 176,
        "owner": "Ext.data.proxy.Proxy",
        "html_filename": "Proxy2.html",
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-getReader",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getReader",
        "shortDoc": "Returns the reader currently attached to this proxy instance ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Proxy.js",
        "doc": "<p>Returns the reader currently attached to this proxy instance</p>\n",
        "return": {
          "type": "Ext.data.reader.Reader",
          "properties": null,
          "name": "return",
          "doc": "<p>The Reader instance</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 212,
        "owner": "Ext.data.proxy.Proxy",
        "html_filename": "Proxy2.html",
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-getWriter",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getWriter",
        "shortDoc": "Returns the writer currently attached to this proxy instance ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Proxy.js",
        "doc": "<p>Returns the writer currently attached to this proxy instance</p>\n",
        "return": {
          "type": "Ext.data.writer.Writer",
          "properties": null,
          "name": "return",
          "doc": "<p>The Writer instance</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 531,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-hasListener",
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
            "name": "eventName",
            "doc": "<p>The name of the event to check for</p>\n"
          }
        ],
        "alias": null,
        "name": "hasListener",
        "shortDoc": "Checks to see if this object has any listeners for a specified event ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Checks to see if this object has any listeners for a specified event</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if the event is being listened for, else false</p>\n"
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
        "linenr": 682,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-mon",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.util.Observable/Ext.Element",
            "properties": [

            ],
            "optional": false,
            "name": "item",
            "doc": "<p>The item to which to add a listener/listeners.</p>\n"
          },
          {
            "type": "Object/String",
            "properties": [

            ],
            "optional": false,
            "name": "ename",
            "doc": "<p>The event name, or an object containing event name properties.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "fn",
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "opt",
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the\n<a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.util.Observable",
          "tagname": "alias",
          "member": "addManagedListener",
          "doc": null
        },
        "name": "mon",
        "shortDoc": "Shorthand for addManagedListener. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.proxy.Rest-method-addManagedListener\" rel=\"Ext.data.proxy.Rest-method-addManagedListener\" class=\"docClass\">addManagedListener</a>.</p>\n\n<p>Adds listeners to any Observable object (or Ext.Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
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
        "linenr": 688,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-mun",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.util.Observable/Ext.Element",
            "properties": [

            ],
            "optional": false,
            "name": "item",
            "doc": "<p>The item from which to remove a listener/listeners.</p>\n"
          },
          {
            "type": "Object/String",
            "properties": [

            ],
            "optional": false,
            "name": "ename",
            "doc": "<p>The event name, or an object containing event name properties.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "fn",
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.util.Observable",
          "tagname": "alias",
          "member": "removeManagedListener",
          "doc": null
        },
        "name": "mun",
        "shortDoc": "Shorthand for removeManagedListener. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.proxy.Rest-method-removeManagedListener\" rel=\"Ext.data.proxy.Rest-method-removeManagedListener\" class=\"docClass\">removeManagedListener</a>.</p>\n\n<p>Removes listeners that were added by the <a href=\"#/api/Ext.data.proxy.Rest-method-mon\" rel=\"Ext.data.proxy.Rest-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
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
        "linenr": 670,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-on",
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
            "name": "eventName",
            "doc": "<p>The name of the event to listen for. May also be an object who's property names are\nevent names.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "handler",
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.data.proxy.Rest-method-fireEvent\" rel=\"Ext.data.proxy.Rest-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function is executed. <strong>If\nomitted, defaults to the object which fired the event.</strong></p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "options",
            "doc": "<p>(optional) An object containing handler configuration.</p>\n\n<p><strong>Note:</strong> Unlike in ExtJS 3.x, the options object will also be passed as the last argument to every event handler.</p>\n\n<p>This object may contain any of the following properties:</p>\n\n<ul>\n<li><p><strong>scope</strong> : Object</p>\n\n<p>The scope (<code>this</code> reference) in which the handler function is executed. <strong>If omitted, defaults to the object\nwhich fired the event.</strong></p></li>\n<li><p><strong>delay</strong> : Number</p>\n\n<p>The number of milliseconds to delay the invocation of the handler after the event fires.</p></li>\n<li><p><strong>single</strong> : Boolean</p>\n\n<p>True to add a handler to handle just the next firing of the event, and then remove itself.</p></li>\n<li><p><strong>buffer</strong> : Number</p>\n\n<p>Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed by the specified number of\nmilliseconds. If the event fires again within that time, the original handler is <em>not</em> invoked, but the new\nhandler is scheduled in its place.</p></li>\n<li><p><strong>target</strong> : Observable</p>\n\n<p>Only call the handler if the event was fired on the target Observable, <em>not</em> if the event was bubbled up from a\nchild Observable.</p></li>\n<li><p><strong>element</strong> : String</p>\n\n<p><strong>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</strong> The name of a Component\nproperty which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which will exist only after the Component is rendered.\nFor example, to add a click listener to a Panel's body:</p>\n\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></li>\n</ul>\n\n\n<p><strong>Combining Options</strong></p>\n\n<p>Using the options argument, it is possible to combine different types of listeners:</p>\n\n<p>A delayed, one-time listener.</p>\n\n<pre><code>myPanel.on('hide', this.handleClick, this, {\n    single: true,\n    delay: 100\n});\n</code></pre>\n\n<p><strong>Attaching multiple handlers in 1 call</strong></p>\n\n<p>The method also allows for a single argument to be passed which is a config object containing properties which\nspecify multiple events. For example:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>\n\n<p>One can also specify options for each event handler separately:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: {fn: this.onCellClick, scope: this, single: true},\n    mouseover: {fn: panel.onMouseOver, scope: panel}\n});\n</code></pre>\n"
          }
        ],
        "alias": {
          "cls": "Ext.util.Observable",
          "tagname": "alias",
          "member": "addListener",
          "doc": null
        },
        "name": "on",
        "shortDoc": "Shorthand for addListener. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.proxy.Rest-method-addListener\" rel=\"Ext.data.proxy.Rest-method-addListener\" class=\"docClass\">addListener</a>.</p>\n\n<p>Appends an event handler to this object.</p>\n",
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
        "linenr": 229,
        "owner": "Ext.data.proxy.Proxy",
        "html_filename": "Proxy2.html",
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-read",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.data.Operation",
            "properties": [

            ],
            "optional": false,
            "name": "operation",
            "doc": "<p>The Operation to perform</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "callback",
            "doc": "<p>Callback function to be called when the Operation has completed (whether successful or not)</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "scope",
            "doc": "<p>Scope to execute the callback function in</p>\n"
          }
        ],
        "alias": null,
        "name": "read",
        "shortDoc": "Performs the given read operation. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Proxy.js",
        "doc": "<p>Performs the given read operation.</p>\n",
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
        "linenr": 574,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-relayEvents",
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
            "name": "origin",
            "doc": "<p>The Observable whose events this object is to relay.</p>\n"
          },
          {
            "type": "String[]",
            "properties": [

            ],
            "optional": false,
            "name": "events",
            "doc": "<p>Array of event names to relay.</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "prefix",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "relayEvents",
        "shortDoc": "Relays selected events from the specified Observable as if the events were fired by this. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Relays selected events from the specified Observable as if the events were fired by <code>this</code>.</p>\n",
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
        "linenr": 392,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-removeListener",
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
            "name": "eventName",
            "doc": "<p>The type of event the handler was associated with.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "handler",
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.data.proxy.Rest-method-addListener\" rel=\"Ext.data.proxy.Rest-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope originally specified for the handler. It must be the same as the\nscope argument specified in the original call to <a href=\"#/api/Ext.data.proxy.Rest-method-addListener\" rel=\"Ext.data.proxy.Rest-method-addListener\" class=\"docClass\">addListener</a> or the listener will not be removed.</p>\n"
          }
        ],
        "alias": null,
        "name": "removeListener",
        "shortDoc": "Removes an event handler. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Removes an event handler.</p>\n",
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
        "linenr": 197,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-removeManagedListener",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.util.Observable/Ext.Element",
            "properties": [

            ],
            "optional": false,
            "name": "item",
            "doc": "<p>The item from which to remove a listener/listeners.</p>\n"
          },
          {
            "type": "Object/String",
            "properties": [

            ],
            "optional": false,
            "name": "ename",
            "doc": "<p>The event name, or an object containing event name properties.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "fn",
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n"
          }
        ],
        "alias": null,
        "name": "removeManagedListener",
        "shortDoc": "Removes listeners that were added by the mon method. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.data.proxy.Rest-method-mon\" rel=\"Ext.data.proxy.Rest-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
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
        "linenr": 555,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-resumeEvents",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "resumeEvents",
        "shortDoc": "Resumes firing events (see suspendEvents). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Resumes firing events (see <a href=\"#/api/Ext.data.proxy.Rest-method-suspendEvents\" rel=\"Ext.data.proxy.Rest-method-suspendEvents\" class=\"docClass\">suspendEvents</a>).</p>\n\n<p>If events were suspended using the <code>**queueSuspended**</code> parameter, then all events fired\nduring event suspension will be sent to any listeners now.</p>\n",
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
        "linenr": 115,
        "owner": "Ext.data.proxy.Proxy",
        "html_filename": "Proxy2.html",
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-setModel",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/Ext.data.Model",
            "properties": [

            ],
            "optional": false,
            "name": "model",
            "doc": "<p>The new model. Can be either the model name string,\nor a reference to the model's constructor</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": false,
            "name": "setOnStore",
            "doc": "<p>Sets the new model on the associated Store, if one is present</p>\n"
          }
        ],
        "alias": null,
        "name": "setModel",
        "shortDoc": "Sets the model associated with this proxy. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Proxy.js",
        "doc": "<p>Sets the model associated with this proxy. This will only usually be called by a Store</p>\n",
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
        "linenr": 144,
        "owner": "Ext.data.proxy.Proxy",
        "html_filename": "Proxy2.html",
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-setReader",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/Object/Ext.data.reader.Reader",
            "properties": [

            ],
            "optional": false,
            "name": "reader",
            "doc": "<p>The new Reader, which can be either a type string,\na configuration object or an <a href=\"#/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Ext.data.reader.Reader</a> instance</p>\n"
          }
        ],
        "alias": null,
        "name": "setReader",
        "shortDoc": "Sets the Proxy's Reader by string, config object or Reader instance ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Proxy.js",
        "doc": "<p>Sets the Proxy's Reader by string, config object or Reader instance</p>\n",
        "return": {
          "type": "Ext.data.reader.Reader",
          "properties": null,
          "name": "return",
          "doc": "<p>The attached Reader object</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 184,
        "owner": "Ext.data.proxy.Proxy",
        "html_filename": "Proxy2.html",
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-setWriter",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/Object/Ext.data.writer.Writer",
            "properties": [

            ],
            "optional": false,
            "name": "writer",
            "doc": "<p>The new Writer, which can be either a type string,\na configuration object or an <a href=\"#/api/Ext.data.writer.Writer\" rel=\"Ext.data.writer.Writer\" class=\"docClass\">Ext.data.writer.Writer</a> instance</p>\n"
          }
        ],
        "alias": null,
        "name": "setWriter",
        "shortDoc": "Sets the Proxy's Writer by string, config object or Writer instance ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Proxy.js",
        "doc": "<p>Sets the Proxy's Writer by string, config object or Writer instance</p>\n",
        "return": {
          "type": "Ext.data.writer.Writer",
          "properties": null,
          "name": "return",
          "doc": "<p>The attached Writer object</p>\n"
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
        "linenr": 542,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-suspendEvents",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": false,
            "name": "queueSuspended",
            "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.data.proxy.Rest-method-resumeEvents\" rel=\"Ext.data.proxy.Rest-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events.</p>\n"
          }
        ],
        "alias": null,
        "name": "suspendEvents",
        "shortDoc": "Suspends the firing of all events. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Suspends the firing of all events. (see <a href=\"#/api/Ext.data.proxy.Rest-method-resumeEvents\" rel=\"Ext.data.proxy.Rest-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
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
        "linenr": 676,
        "owner": "Ext.util.Observable",
        "html_filename": "Observable.html",
        "href": "Observable.html#Ext-util-Observable-method-un",
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
            "name": "eventName",
            "doc": "<p>The type of event the handler was associated with.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "handler",
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.data.proxy.Rest-method-addListener\" rel=\"Ext.data.proxy.Rest-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope originally specified for the handler. It must be the same as the\nscope argument specified in the original call to <a href=\"#/api/Ext.data.proxy.Rest-method-addListener\" rel=\"Ext.data.proxy.Rest-method-addListener\" class=\"docClass\">addListener</a> or the listener will not be removed.</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.util.Observable",
          "tagname": "alias",
          "member": "removeListener",
          "doc": null
        },
        "name": "un",
        "shortDoc": "Shorthand for removeListener. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Observable.js",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.proxy.Rest-method-removeListener\" rel=\"Ext.data.proxy.Rest-method-removeListener\" class=\"docClass\">removeListener</a>.</p>\n\n<p>Removes an event handler.</p>\n",
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
        "linenr": 238,
        "owner": "Ext.data.proxy.Proxy",
        "html_filename": "Proxy2.html",
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-update",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.data.Operation",
            "properties": [

            ],
            "optional": false,
            "name": "operation",
            "doc": "<p>The Operation to perform</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "callback",
            "doc": "<p>Callback function to be called when the Operation has completed (whether successful or not)</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "scope",
            "doc": "<p>Scope to execute the callback function in</p>\n"
          }
        ],
        "alias": null,
        "name": "update",
        "shortDoc": "Performs the given update operation. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Proxy.js",
        "doc": "<p>Performs the given update operation.</p>\n",
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
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 159,
        "owner": "Ext.data.proxy.Rest",
        "html_filename": "Rest.html",
        "href": "Rest.html#Ext-data-proxy-Rest-property-actionMethods",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "actionMethods",
        "shortDoc": "Mapping of action name to HTTP request method. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Rest.js",
        "doc": "<p>Mapping of action name to HTTP request method. These default to RESTful conventions for the 'create', 'read',\n'update' and 'destroy' actions (which map to 'POST', 'GET', 'PUT' and 'DELETE' respectively). This object\nshould not be changed except globally via <a href=\"#/api/Ext-method-override\" rel=\"Ext-method-override\" class=\"docClass\">Ext.override</a> - the <a href=\"#/api/Ext.data.proxy.Rest-method-getMethod\" rel=\"Ext.data.proxy.Rest-method-getMethod\" class=\"docClass\">getMethod</a> function\ncan be overridden instead.</p>\n"
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
      }
    ]
  },
  "deprecated": null,
  "singleton": false,
  "private": false,
  "tagname": "class",
  "author": "Ed Spencer",
  "superclasses": [
    "Ext.Base",
    "Ext.data.proxy.Proxy",
    "Ext.data.proxy.Server",
    "Ext.data.proxy.Ajax"
  ],
  "alias": null,
  "name": "Ext.data.proxy.Rest",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/data/proxy/Rest.js",
  "doc": "<p>RestProxy is a specialization of the <a href=\"#/api/Ext.data.proxy.Ajax\" rel=\"Ext.data.proxy.Ajax\" class=\"docClass\">AjaxProxy</a> which simply maps the four actions\n(create, read, update and destroy) to RESTful HTTP verbs. For example, let's set up a <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>\nwith an inline RestProxy</p>\n\n<pre><code>Ext.define('User', {\n    extend: 'Ext.data.Model',\n    fields: ['id', 'name', 'email'],\n\n    proxy: {\n        type: 'rest',\n        url : '/users'\n    }\n});\n</code></pre>\n\n<p>Now we can create a new User instance and save it via the RestProxy. Doing this will cause the Proxy to send a POST\nrequest to '/users':</p>\n\n<pre><code>var user = Ext.create('User', {name: 'Ed Spencer', email: 'ed@sencha.com'});\n\nuser.save(); //POST /users\n</code></pre>\n\n<p>Let's expand this a little and provide a callback for the <a href=\"#/api/Ext.data.Model-method-save\" rel=\"Ext.data.Model-method-save\" class=\"docClass\">Ext.data.Model.save</a> call to update the Model once\nit has been created. We'll assume the creation went successfully and that the server gave this user an ID of 123:</p>\n\n<pre><code>user.save({\n    success: function(user) {\n        user.set('name', 'Khan Noonien Singh');\n\n        user.save(); //PUT /users/123\n    }\n});\n</code></pre>\n\n<p>Now that we're no longer creating a new Model instance, the request method is changed to an HTTP PUT, targeting the\nrelevant url for that user. Now let's delete this user, which will use the DELETE method:</p>\n\n<pre><code>    user.destroy(); //DELETE /users/123\n</code></pre>\n\n<p>Finally, when we perform a load of a Model or Store, RestProxy will use the GET method:</p>\n\n<pre><code>//1. Load via Store\n\n//the Store automatically picks up the Proxy from the User model\nvar store = Ext.create('Ext.data.Store', {\n    model: 'User'\n});\n\nstore.load(); //GET /users\n\n//2. Load directly from the Model\n\n//GET /users/123\nExt.ModelManager.getModel('User').load(123, {\n    success: function(user) {\n        console.log(user.getId()); //outputs 123\n    }\n});\n</code></pre>\n\n<h1>Url generation</h1>\n\n<p>RestProxy is able to automatically generate the urls above based on two configuration options - <a href=\"#/api/Ext.data.proxy.Rest-cfg-appendId\" rel=\"Ext.data.proxy.Rest-cfg-appendId\" class=\"docClass\">appendId</a> and\n<a href=\"#/api/Ext.data.proxy.Rest-cfg-format\" rel=\"Ext.data.proxy.Rest-cfg-format\" class=\"docClass\">format</a>. If appendId is true (it is by default) then RestProxy will automatically append the ID of the Model\ninstance in question to the configured url, resulting in the '/users/123' that we saw above.</p>\n\n<p>If the request is not for a specific Model instance (e.g. loading a Store), the url is not appended with an id.\nRestProxy will automatically insert a '/' before the ID if one is not already present.</p>\n\n<pre><code>new Ext.data.proxy.Rest({\n    url: '/users',\n    appendId: true //default\n});\n\n// Collection url: /users\n// Instance url  : /users/123\n</code></pre>\n\n<p>RestProxy can also optionally append a format string to the end of any generated url:</p>\n\n<pre><code>new Ext.data.proxy.Rest({\n    url: '/users',\n    format: 'json'\n});\n\n// Collection url: /users.json\n// Instance url  : /users/123.json\n</code></pre>\n\n<p>If further customization is needed, simply implement the <a href=\"#/api/Ext.data.proxy.Rest-method-buildUrl\" rel=\"Ext.data.proxy.Rest-method-buildUrl\" class=\"docClass\">buildUrl</a> method and add your custom generated url\nonto the <a href=\"#/api/Ext.data.Request\" rel=\"Ext.data.Request\" class=\"docClass\">Request</a> object that is passed to buildUrl. See <a href=\"source/RestProxy.html#method-Ext.data.proxy.Rest-buildUrl\">RestProxy's implementation</a> for\nan example of how to achieve this.</p>\n\n<p>Note that RestProxy inherits from <a href=\"#/api/Ext.data.proxy.Ajax\" rel=\"Ext.data.proxy.Ajax\" class=\"docClass\">AjaxProxy</a>, which already injects all of the sorter,\nfilter, group and paging options into the generated url. See the <a href=\"#/api/Ext.data.proxy.Ajax\" rel=\"Ext.data.proxy.Ajax\" class=\"docClass\">AjaxProxy docs</a> for more\ndetails.</p>\n",
  "alternateClassNames": [
    "Ext.data.RestProxy"
  ]
});