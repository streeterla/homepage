Ext.data.JsonP.Ext_Loader({
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
  "extends": null,
  "html_filename": "Loader.html",
  "allMixins": [

  ],
  "docauthor": "Jacky Nguyen <jacky@sencha.com>",
  "href": "Loader.html#Ext-Loader",
  "subclasses": [

  ],
  "protected": false,
  "members": {
    "css_var": [

    ],
    "cfg": [
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 227,
        "owner": "Ext.Loader",
        "html_filename": "Loader.html",
        "href": "Loader.html#Ext-Loader-cfg-disableCaching",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "disableCaching",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Loader.js",
        "doc": "<p>Appends current timestamp to script files to prevent caching Defaults to true</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 233,
        "owner": "Ext.Loader",
        "html_filename": "Loader.html",
        "href": "Loader.html#Ext-Loader-cfg-disableCachingParam",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "disableCachingParam",
        "shortDoc": "The get parameter name for the cache buster's timestamp. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Loader.js",
        "doc": "<p>The get parameter name for the cache buster's timestamp. Defaults to '_dc'</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 221,
        "owner": "Ext.Loader",
        "html_filename": "Loader.html",
        "href": "Loader.html#Ext-Loader-cfg-enabled",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "enabled",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Loader.js",
        "doc": "<p>Whether or not to enable the dynamic dependency loading feature Defaults to false</p>\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 239,
        "owner": "Ext.Loader",
        "html_filename": "Loader.html",
        "href": "Loader.html#Ext-Loader-cfg-paths",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "paths",
        "shortDoc": "The mapping from namespaces to file paths\n\n{\n    'Ext': '.', // This is set by default, Ext.layout.container.Containe...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Loader.js",
        "doc": "<p>The mapping from namespaces to file paths</p>\n\n<pre><code>{\n    'Ext': '.', // This is set by default, <a href=\"#/api/Ext.layout.container.Container\" rel=\"Ext.layout.container.Container\" class=\"docClass\">Ext.layout.container.Container</a> will be\n                // loaded from ./layout/Container.js\n\n    'My': './src/my_own_folder' // My.layout.Container will be loaded from\n                                // ./src/my_own_folder/layout/Container.js\n}\n</code></pre>\n\n<p>Note that all relative paths are relative to the current HTML document.\nIf not being specified, for example, <code>Other.awesome.Class</code>\nwill simply be loaded from <code>./Other/awesome/Class.js</code></p>\n"
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
        "linenr": 584,
        "owner": "Ext.Loader",
        "html_filename": "Loader.html",
        "href": "Loader.html#Ext-Loader-method-exclude",
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
            "name": "excludes",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "exclude",
        "shortDoc": "Explicitly exclude files from being loaded. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Loader.js",
        "doc": "<p>Explicitly exclude files from being loaded. Useful when used in conjunction with a broad include expression.\nCan be chained with more <code>require</code> and <code>exclude</code> methods, e.g.:</p>\n\n<pre><code>Ext.exclude('Ext.data.*').require('*');\n\nExt.exclude('widget.button*').require('widget.*');\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-exclude\" rel=\"Ext-method-exclude\" class=\"docClass\">Ext.exclude</a> is alias for <a href=\"#/api/Ext.Loader-method-exclude\" rel=\"Ext.Loader-method-exclude\" class=\"docClass\">Ext.Loader.exclude</a> for convenience.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>object contains <code>require</code> method for chaining</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 298,
        "owner": "Ext.Loader",
        "html_filename": "Loader.html",
        "href": "Loader.html#Ext-Loader-method-getConfig",
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
            "name": "name",
            "doc": "<p>The config property name</p>\n"
          }
        ],
        "alias": null,
        "name": "getConfig",
        "shortDoc": "Get the config value corresponding to the specified name. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Loader.js",
        "doc": "<p>Get the config value corresponding to the specified name.\nIf no name is given, will return the config object.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 335,
        "owner": "Ext.Loader",
        "html_filename": "Loader.html",
        "href": "Loader.html#Ext-Loader-method-getPath",
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
            "name": "className",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "getPath",
        "shortDoc": "Translates a className to a file path by adding the the proper prefix and converting the .'s to /'s. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Loader.js",
        "doc": "<p>Translates a className to a file path by adding the the proper prefix and converting the .'s to /'s.\nFor example:</p>\n\n<pre><code>Ext.Loader.setPath('My', '/path/to/My');\n\nalert(Ext.Loader.getPath('My.awesome.Class')); // alerts '/path/to/My/awesome/Class.js'\n</code></pre>\n\n<p>Note that the deeper namespace levels, if explicitly set, are always resolved first. For example:</p>\n\n<pre><code>Ext.Loader.setPath({\n    'My': '/path/to/lib',\n    'My.awesome': '/other/path/for/awesome/stuff',\n    'My.awesome.more': '/more/awesome/path'\n});\n\nalert(Ext.Loader.getPath('My.awesome.Class')); // alerts '/other/path/for/awesome/stuff/Class.js'\n\nalert(Ext.Loader.getPath('My.awesome.more.Class')); // alerts '/more/awesome/path/Class.js'\n\nalert(Ext.Loader.getPath('My.cool.Class')); // alerts '/path/to/lib/cool/Class.js'\n\nalert(Ext.Loader.getPath('Unknown.strange.Stuff')); // alerts 'Unknown/strange/Stuff.js'\n</code></pre>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>path</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 899,
        "owner": "Ext.Loader",
        "html_filename": "Loader.html",
        "href": "Loader.html#Ext-Loader-method-onReady",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "fn",
            "doc": "<p>The function callback to be executed</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "scope",
            "doc": "<p>The execution scope (<code>this</code>) of the callback function</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": false,
            "name": "withDomReady",
            "doc": "<p>Whether or not to wait for document dom ready as well</p>\n"
          }
        ],
        "alias": null,
        "name": "onReady",
        "shortDoc": "Adds new listener to be executed when all required scripts are fully loaded. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Loader.js",
        "doc": "<p>Adds new listener to be executed when all required scripts are fully loaded.</p>\n",
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
        "linenr": 629,
        "owner": "Ext.Loader",
        "html_filename": "Loader.html",
        "href": "Loader.html#Ext-Loader-method-require",
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
            "name": "expressions",
            "doc": "<p>Can either be a string or an array of string</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "fn",
            "doc": "<p>(Optional) The callback function</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(Optional) The execution scope (<code>this</code>) of the callback function</p>\n"
          },
          {
            "type": "String/String[]",
            "properties": [

            ],
            "optional": true,
            "name": "excludes",
            "doc": "<p>(Optional) Classes to be excluded, useful when being used with expressions</p>\n"
          }
        ],
        "alias": null,
        "name": "require",
        "shortDoc": "Loads all classes by the given names and all their direct dependencies;\noptionally executes the given callback functi...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Loader.js",
        "doc": "<p>Loads all classes by the given names and all their direct dependencies;\noptionally executes the given callback function when finishes, within the optional scope.</p>\n\n<p><a href=\"#/api/Ext-method-require\" rel=\"Ext-method-require\" class=\"docClass\">Ext.require</a> is alias for <a href=\"#/api/Ext.Loader-method-require\" rel=\"Ext.Loader-method-require\" class=\"docClass\">Ext.Loader.require</a> for convenience.</p>\n",
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
        "linenr": 260,
        "owner": "Ext.Loader",
        "html_filename": "Loader.html",
        "href": "Loader.html#Ext-Loader-method-setConfig",
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
            "name": "name",
            "doc": "<p>Name of the value to override, or a config object to override multiple values.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "value",
            "doc": "<p>(optional) The new value to set, needed if first parameter is String.</p>\n"
          }
        ],
        "alias": null,
        "name": "setConfig",
        "shortDoc": "Set the configuration for the loader. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Loader.js",
        "doc": "<p>Set the configuration for the loader. This should be called right after ext-core.js\n(or ext-core-debug.js) is included in the page, e.g.:</p>\n\n<pre><code>&lt;script type=\"text/javascript\" src=\"ext-core-debug.js\"&gt;&lt;/script&gt;\n&lt;script type=\"text/javascript\"&gt;\n  Ext.Loader.setConfig({\n      enabled: true,\n      paths: {\n          'My': 'my_own_path'\n      }\n  });\n&lt;script&gt;\n&lt;script type=\"text/javascript\"&gt;\n  Ext.require(...);\n\n  Ext.onReady(function() {\n      // application code here\n  });\n&lt;/script&gt;\n</code></pre>\n\n<p>Refer to config options of <a href=\"#/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a> for the list of possible properties.</p>\n",
        "return": {
          "type": "Ext.Loader",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 312,
        "owner": "Ext.Loader",
        "html_filename": "Loader.html",
        "href": "Loader.html#Ext-Loader-method-setPath",
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
            "name": "name",
            "doc": "<p>See <a href=\"#/api/Ext.Function-method-flexSetter\" rel=\"Ext.Function-method-flexSetter\" class=\"docClass\">flexSetter</a></p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "path",
            "doc": "<p>See <a href=\"#/api/Ext.Function-method-flexSetter\" rel=\"Ext.Function-method-flexSetter\" class=\"docClass\">flexSetter</a></p>\n"
          }
        ],
        "alias": null,
        "name": "setPath",
        "shortDoc": "Sets the path of a namespace. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Loader.js",
        "doc": "<p>Sets the path of a namespace. For Example:</p>\n\n<pre><code>Ext.Loader.setPath('Ext', '.');\n</code></pre>\n",
        "return": {
          "type": "Ext.Loader",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 611,
        "owner": "Ext.Loader",
        "html_filename": "Loader.html",
        "href": "Loader.html#Ext-Loader-method-syncRequire",
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
            "name": "expressions",
            "doc": "<p>Can either be a string or an array of string</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "fn",
            "doc": "<p>(Optional) The callback function</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(Optional) The execution scope (<code>this</code>) of the callback function</p>\n"
          },
          {
            "type": "String/String[]",
            "properties": [

            ],
            "optional": true,
            "name": "excludes",
            "doc": "<p>(Optional) Classes to be excluded, useful when being used with expressions</p>\n"
          }
        ],
        "alias": null,
        "name": "syncRequire",
        "shortDoc": "Synchronously loads all classes by the given names and all their direct dependencies;\noptionally executes the given c...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Loader.js",
        "doc": "<p>Synchronously loads all classes by the given names and all their direct dependencies;\noptionally executes the given callback function when finishes, within the optional scope.</p>\n\n<p><a href=\"#/api/Ext-method-syncRequire\" rel=\"Ext-method-syncRequire\" class=\"docClass\">Ext.syncRequire</a> is alias for <a href=\"#/api/Ext.Loader-method-syncRequire\" rel=\"Ext.Loader-method-syncRequire\" class=\"docClass\">Ext.Loader.syncRequire</a> for convenience.</p>\n",
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
        "type": "String[]",
        "inheritable": false,
        "properties": null,
        "linenr": 209,
        "owner": "Ext.Loader",
        "html_filename": "Loader.html",
        "href": "Loader.html#Ext-Loader-property-history",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "history",
        "shortDoc": "An array of class names to keep track of the dependency loading order. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Loader.js",
        "doc": "<p>An array of class names to keep track of the dependency loading order.\nThis is not guaranteed to be the same everytime due to the asynchronous nature of the Loader.</p>\n"
      }
    ]
  },
  "deprecated": null,
  "singleton": true,
  "private": false,
  "tagname": "class",
  "author": "Jacky Nguyen <jacky@sencha.com>",
  "superclasses": [

  ],
  "alias": null,
  "name": "Ext.Loader",
  "mixins": [

  ],
  "code_type": "nop",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/class/Loader.js",
  "doc": "<p>Ext.Loader is the heart of the new dynamic dependency loading capability in Ext JS 4+. It is most commonly used\nvia the <a href=\"#/api/Ext-method-require\" rel=\"Ext-method-require\" class=\"docClass\">Ext.require</a> shorthand. <a href=\"#/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a> supports both asynchronous and synchronous loading\napproaches, and leverage their advantages for the best development flow. We'll discuss about the pros and cons\nof each approach:</p>\n\n<h1>Asynchronous Loading</h1>\n\n<ul>\n<li><p><em>Advantages:</em></p>\n\n<ul>\n<li> Cross-domain</li>\n<li> No web server needed: you can run the application via the file system protocol\n(i.e: <code>file://path/to/your/index.html</code>)</li>\n<li> Best possible debugging experience: error messages come with the exact file name and line number</li>\n</ul>\n</li>\n<li><p><em>Disadvantages:</em></p>\n\n<ul>\n<li> Dependencies need to be specified before-hand</li>\n</ul>\n</li>\n</ul>\n\n\n<h3>Method 1: Explicitly include what you need:</h3>\n\n<pre><code>// Syntax\nExt.require({String/Array} expressions);\n\n// Example: Single alias\nExt.require('widget.window');\n\n// Example: Single class name\nExt.require('Ext.window.Window');\n\n// Example: Multiple aliases / class names mix\nExt.require(['widget.window', 'layout.border', 'Ext.data.Connection']);\n\n// Wildcards\nExt.require(['widget.*', 'layout.*', 'Ext.data.*']);\n</code></pre>\n\n<h3>Method 2: Explicitly exclude what you don't need:</h3>\n\n<pre><code>// Syntax: Note that it must be in this chaining format.\nExt.exclude({String/Array} expressions)\n   .require({String/Array} expressions);\n\n// Include everything except Ext.data.*\nExt.exclude('Ext.data.*').require('*'); \n\n// Include all widgets except widget.checkbox*,\n// which will match widget.checkbox, widget.checkboxfield, widget.checkboxgroup, etc.\nExt.exclude('widget.checkbox*').require('widget.*');\n</code></pre>\n\n<h1>Synchronous Loading on Demand</h1>\n\n<ul>\n<li><p><em>Advantages:</em></p>\n\n<ul>\n<li> There's no need to specify dependencies before-hand, which is always the convenience of including\next-all.js before</li>\n</ul>\n</li>\n<li><p><em>Disadvantages:</em></p>\n\n<ul>\n<li> Not as good debugging experience since file name won't be shown (except in Firebug at the moment)</li>\n<li> Must be from the same domain due to XHR restriction</li>\n<li> Need a web server, same reason as above</li>\n</ul>\n</li>\n</ul>\n\n\n<p>There's one simple rule to follow: Instantiate everything with Ext.create instead of the <code>new</code> keyword</p>\n\n<pre><code>Ext.create('widget.window', { ... }); // Instead of new Ext.window.Window({...});\n\nExt.create('Ext.window.Window', {}); // Same as above, using full class name instead of alias\n\nExt.widget('window', {}); // Same as above, all you need is the traditional `xtype`\n</code></pre>\n\n<p>Behind the scene, <a href=\"#/api/Ext.ClassManager\" rel=\"Ext.ClassManager\" class=\"docClass\">Ext.ClassManager</a> will automatically check whether the given class name / alias has already\nexisted on the page. If it's not, <a href=\"#/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a> will immediately switch itself to synchronous mode and automatic load\nthe given class and all its dependencies.</p>\n\n<h1>Hybrid Loading - The Best of Both Worlds</h1>\n\n<p>It has all the advantages combined from asynchronous and synchronous loading. The development flow is simple:</p>\n\n<h3>Step 1: Start writing your application using synchronous approach.</h3>\n\n<p>Ext.Loader will automatically fetch all dependencies on demand as they're needed during run-time. For example:</p>\n\n<pre><code>Ext.onReady(function(){\n    var window = Ext.createWidget('window', {\n        width: 500,\n        height: 300,\n        layout: {\n            type: 'border',\n            padding: 5\n        },\n        title: 'Hello Dialog',\n        items: [{\n            title: 'Navigation',\n            collapsible: true,\n            region: 'west',\n            width: 200,\n            html: 'Hello',\n            split: true\n        }, {\n            title: 'TabPanel',\n            region: 'center'\n        }]\n    });\n\n    window.show();\n})\n</code></pre>\n\n<h3>Step 2: Along the way, when you need better debugging ability, watch the console for warnings like these:</h3>\n\n<pre><code>[Ext.Loader] Synchronously loading 'Ext.window.Window'; consider adding Ext.require('Ext.window.Window') before your application's code ClassManager.js:432\n[Ext.Loader] Synchronously loading 'Ext.layout.container.Border'; consider adding Ext.require('Ext.layout.container.Border') before your application's code\n</code></pre>\n\n<p>Simply copy and paste the suggested code above <code>Ext.onReady</code>, e.g.:</p>\n\n<pre><code>Ext.require('Ext.window.Window');\nExt.require('Ext.layout.container.Border');\n\nExt.onReady(...);\n</code></pre>\n\n<p>Everything should now load via asynchronous mode.</p>\n\n<h1>Deployment</h1>\n\n<p>It's important to note that dynamic loading should only be used during development on your local machines.\nDuring production, all dependencies should be combined into one single JavaScript file. <a href=\"#/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a> makes\nthe whole process of transitioning from / to between development / maintenance and production as easy as\npossible. Internally <a href=\"#/api/Ext.Loader-property-history\" rel=\"Ext.Loader-property-history\" class=\"docClass\">Ext.Loader.history</a> maintains the list of all dependencies\nyour application needs in the exact loading sequence. It's as simple as concatenating all files in this\narray into one, then include it on top of your application.</p>\n\n<p>This process will be automated with Sencha Command, to be released and documented towards Ext JS 4 Final.</p>\n",
  "alternateClassNames": [

  ]
});