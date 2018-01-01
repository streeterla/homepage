Ext.data.JsonP.Ext_util_DelayedTask({
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
  "html_filename": "DelayedTask.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "DelayedTask.html#Ext-util-DelayedTask",
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
        "linenr": 1,
        "owner": "Ext.util.DelayedTask",
        "html_filename": "DelayedTask.html",
        "href": "DelayedTask.html#Ext-util-DelayedTask-method-constructor",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "fn",
            "doc": "<p>(optional) The default function to call. If not specified here, it must be specified during the <a href=\"#/api/Ext.util.DelayedTask-method-delay\" rel=\"Ext.util.DelayedTask-method-delay\" class=\"docClass\">delay</a> call.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The default scope (The <code><b>this</b></code> reference) in which the\nfunction is called. If not specified, <code>this</code> will refer to the browser window.</p>\n"
          },
          {
            "type": "Array",
            "properties": [

            ],
            "optional": true,
            "name": "args",
            "doc": "<p>(optional) The default Array of arguments.</p>\n"
          }
        ],
        "alias": null,
        "name": "constructor",
        "shortDoc": "The parameters to this constructor serve as defaults and are not required. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/DelayedTask.js",
        "doc": "<p>The parameters to this constructor serve as defaults and are not required.</p>\n",
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
        "linenr": 62,
        "owner": "Ext.util.DelayedTask",
        "html_filename": "DelayedTask.html",
        "href": "DelayedTask.html#Ext-util-DelayedTask-method-cancel",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "cancel",
        "shortDoc": "Cancel the last queued timeout ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/DelayedTask.js",
        "doc": "<p>Cancel the last queued timeout</p>\n",
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
        "linenr": 46,
        "owner": "Ext.util.DelayedTask",
        "html_filename": "DelayedTask.html",
        "href": "DelayedTask.html#Ext-util-DelayedTask-method-delay",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "delay",
            "doc": "<p>The milliseconds to delay</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": true,
            "name": "newFn",
            "doc": "<p>(optional) Overrides function passed to constructor</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "newScope",
            "doc": "<p>(optional) Overrides scope passed to constructor. Remember that if no scope\nis specified, <code>this</code> will refer to the browser window.</p>\n"
          },
          {
            "type": "Array",
            "properties": [

            ],
            "optional": true,
            "name": "newArgs",
            "doc": "<p>(optional) Overrides args passed to constructor</p>\n"
          }
        ],
        "alias": null,
        "name": "delay",
        "shortDoc": "Cancels any pending timeout and queues a new one ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/DelayedTask.js",
        "doc": "<p>Cancels any pending timeout and queues a new one</p>\n",
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
  "name": "Ext.util.DelayedTask",
  "mixins": [

  ],
  "code_type": "assignment",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/DelayedTask.js",
  "doc": "<p>The DelayedTask class provides a convenient way to \"buffer\" the execution of a method,\nperforming setTimeout where a new timeout cancels the old timeout. When called, the\ntask will wait the specified time period before executing. If durng that time period,\nthe task is called again, the original call will be cancelled. This continues so that\nthe function is only called a single time for each iteration.</p>\n\n<p>This method is especially useful for things like detecting whether a user has finished\ntyping in a text field. An example would be performing validation on a keypress. You can\nuse this class to buffer the keypress events for a certain number of milliseconds, and\nperform only if they stop for that amount of time.</p>\n\n<h2>Usage</h2>\n\n<pre><code>var task = new Ext.util.DelayedTask(function(){\n    alert(Ext.getDom('myInputField').value.length);\n});\n\n// Wait 500ms before calling our function. If the user presses another key\n// during that 500ms, it will be cancelled and we'll wait another 500ms.\nExt.get('myInputField').on('keypress', function(){\n    task.<a href=\"#/api/Ext.util.DelayedTask-method-delay\" rel=\"Ext.util.DelayedTask-method-delay\" class=\"docClass\">delay</a>(500);\n});\n</code></pre>\n\n<p>Note that we are using a DelayedTask here to illustrate a point. The configuration\noption <code>buffer</code> for <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener/on</a> will\nalso setup a delayed task for you to buffer events.</p>\n",
  "alternateClassNames": [

  ]
});