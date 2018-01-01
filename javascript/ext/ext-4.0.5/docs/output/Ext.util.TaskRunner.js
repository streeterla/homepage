Ext.data.JsonP.Ext_util_TaskRunner({
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
  "html_filename": "TaskManager.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "TaskManager.html#Ext-util-TaskRunner",
  "subclasses": [
    "Ext.TaskManager"
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
        "owner": "Ext.util.TaskRunner",
        "html_filename": "TaskManager.html",
        "href": "TaskManager.html#Ext-util-TaskRunner-method-constructor",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Number",
            "properties": [

            ],
            "optional": true,
            "name": "interval",
            "doc": "<p>(optional) The minimum precision in milliseconds supported by this TaskRunner instance\n(defaults to 10)</p>\n"
          }
        ],
        "alias": null,
        "name": "constructor",
        "shortDoc": " ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/TaskManager.js",
        "doc": "\n",
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
        "linenr": 104,
        "owner": "Ext.util.TaskRunner",
        "html_filename": "TaskManager.html",
        "href": "TaskManager.html#Ext-util-TaskRunner-method-start",
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
            "name": "task",
            "doc": "<p>A config object that supports the following properties:<ul>\n<li><code>run</code> : Function<div class=\"sub-desc\"><p>The function to execute each time the task is invoked. The\nfunction will be called at each interval and passed the <code>args</code> argument if specified, and the\ncurrent invocation count if not.</p>\n<p>If a particular scope (<code>this</code> reference) is required, be sure to specify it using the <code>scope</code> argument.</p>\n<p>Return <code>false</code> from this function to terminate the task.</p></div></li>\n<li><code>interval</code> : Number<div class=\"sub-desc\">The frequency in milliseconds with which the task\nshould be invoked.</div></li>\n<li><code>args</code> : Array<div class=\"sub-desc\">(optional) An array of arguments to be passed to the function\nspecified by <code>run</code>. If not specified, the current invocation count is passed.</div></li>\n<li><code>scope</code> : Object<div class=\"sub-desc\">(optional) The scope (<tt>this</tt> reference) in which to execute the\n<code>run</code> function. Defaults to the task config object.</div></li>\n<li><code>duration</code> : Number<div class=\"sub-desc\">(optional) The length of time in milliseconds to invoke\nthe task before stopping automatically (defaults to indefinite).</div></li>\n<li><code>repeat</code> : Number<div class=\"sub-desc\">(optional) The number of times to invoke the task before\nstopping automatically (defaults to indefinite).</div></li>\n</ul></p>\n\n\n<p>Before each invocation, Ext injects the property <code>taskRunCount</code> into the task object so\nthat calculations based on the repeat count can be performed.</p>\n\n"
          }
        ],
        "alias": null,
        "name": "start",
        "shortDoc": "Starts a new task. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/TaskManager.js",
        "doc": "<p>Starts a new task.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>The task</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 137,
        "owner": "Ext.util.TaskRunner",
        "html_filename": "TaskManager.html",
        "href": "TaskManager.html#Ext-util-TaskRunner-method-stop",
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
            "name": "task",
            "doc": "<p>The task to stop</p>\n"
          }
        ],
        "alias": null,
        "name": "stop",
        "shortDoc": "Stops an existing running task. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/TaskManager.js",
        "doc": "<p>Stops an existing running task.</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>The task</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 148,
        "owner": "Ext.util.TaskRunner",
        "html_filename": "TaskManager.html",
        "href": "TaskManager.html#Ext-util-TaskRunner-method-stopAll",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "stopAll",
        "shortDoc": "Stops all tasks that are currently running. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/TaskManager.js",
        "doc": "<p>Stops all tasks that are currently running.</p>\n",
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
  "name": "Ext.util.TaskRunner",
  "mixins": [

  ],
  "code_type": "assignment",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/TaskManager.js",
  "doc": "<p>Provides the ability to execute one or more arbitrary tasks in a multithreaded\nmanner.  Generally, you can use the singleton <a href=\"#/api/Ext.TaskManager\" rel=\"Ext.TaskManager\" class=\"docClass\">Ext.TaskManager</a> instead, but\nif needed, you can create separate instances of TaskRunner.  Any number of\nseparate tasks can be started at any time and will run independently of each\nother. Example usage:</p>\n\n<pre><code>// Start a simple clock task that updates a div once per second\nvar updateClock = function(){\n    Ext.fly('clock').update(new Date().format('g:i:s A'));\n} \nvar task = {\n    run: updateClock,\n    interval: 1000 //1 second\n}\nvar runner = new Ext.util.TaskRunner();\nrunner.start(task);\n\n// equivalent using TaskManager\nExt.TaskManager.start({\n    run: updateClock,\n    interval: 1000\n});\n\n</code></pre>\n\n\n<p>See the <a href=\"#/api/Ext.util.TaskRunner-method-start\" rel=\"Ext.util.TaskRunner-method-start\" class=\"docClass\">start</a> method for details about how to configure a task object.</p>\n\n\n<p>Also see <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a>.</p>\n",
  "alternateClassNames": [

  ]
});