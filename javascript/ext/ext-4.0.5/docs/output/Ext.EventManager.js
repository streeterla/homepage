Ext.data.JsonP.Ext_EventManager({
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
  "html_filename": "EventManager.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "EventManager.html#Ext-EventManager",
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
        "linenr": 285,
        "owner": "Ext.EventManager",
        "html_filename": "EventManager.html",
        "href": "EventManager.html#Ext-EventManager-method-addListener",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "el",
            "doc": "<p>The html element or id to assign the event handler to.</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "eventName",
            "doc": "<p>The name of the event to listen for.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "handler",
            "doc": "<p>The handler function the event invokes. This function is passed\nthe following parameters:<ul>\n<li>evt : EventObject<div class=\"sub-desc\">The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">EventObject</a> describing the event.</div></li>\n<li>t : Element<div class=\"sub-desc\">The <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Element</a> which was the target of the event.\nNote that this may be filtered by using the <tt>delegate</tt> option.</div></li>\n<li>o : Object<div class=\"sub-desc\">The options object from the addListener call.</div></li>\n</ul></p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope (<b><code>this</code></b> reference) in which the handler function is executed. <b>Defaults to the Element</b>.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "options",
            "doc": "<p>(optional) An object containing handler configuration properties.\nThis may contain any of the following properties:<ul>\n<li>scope : Object<div class=\"sub-desc\">The scope (<b><code>this</code></b> reference) in which the handler function is executed. <b>Defaults to the Element</b>.</div></li>\n<li>delegate : String<div class=\"sub-desc\">A simple selector to filter the target or look for a descendant of the target</div></li>\n<li>stopEvent : Boolean<div class=\"sub-desc\">True to stop the event. That is stop propagation, and prevent the default action.</div></li>\n<li>preventDefault : Boolean<div class=\"sub-desc\">True to prevent the default action</div></li>\n<li>stopPropagation : Boolean<div class=\"sub-desc\">True to prevent event propagation</div></li>\n<li>normalized : Boolean<div class=\"sub-desc\">False to pass a browser event to the handler function instead of an <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a></div></li>\n<li>delay : Number<div class=\"sub-desc\">The number of milliseconds to delay the invocation of the handler after te event fires.</div></li>\n<li>single : Boolean<div class=\"sub-desc\">True to add a handler to handle just the next firing of the event, and then remove itself.</div></li>\n<li>buffer : Number<div class=\"sub-desc\">Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed\nby the specified number of milliseconds. If the event fires again within that time, the original\nhandler is <em>not</em> invoked, but the new handler is scheduled in its place.</div></li>\n<li>target : Element<div class=\"sub-desc\">Only call the handler if the event was fired on the target Element, <i>not</i> if the event was bubbled up from a child node.</div></li>\n</ul><br></p>\n\n<p>See <a href=\"#/api/Ext.Element-method-addListener\" rel=\"Ext.Element-method-addListener\" class=\"docClass\">Ext.Element.addListener</a> for examples of how to use these options.</p>\n\n"
          }
        ],
        "alias": null,
        "name": "addListener",
        "shortDoc": "Appends an event handler to an element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventManager.js",
        "doc": "<p>Appends an event handler to an element.  The shorthand version <a href=\"#/api/Ext.EventManager-method-on\" rel=\"Ext.EventManager-method-on\" class=\"docClass\">on</a> is equivalent.  Typically you will\nuse <a href=\"#/api/Ext.Element-method-addListener\" rel=\"Ext.Element-method-addListener\" class=\"docClass\">Ext.Element.addListener</a> directly on an Element in favor of calling this version.</p>\n",
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
        "linenr": 171,
        "owner": "Ext.EventManager",
        "html_filename": "EventManager.html",
        "href": "EventManager.html#Ext-EventManager-method-getId",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "HTMLElement/Ext.Element",
            "properties": [

            ],
            "optional": false,
            "name": "element",
            "doc": "<p>The element to get the id for.</p>\n"
          }
        ],
        "alias": null,
        "name": "getId",
        "shortDoc": "Get the id of the element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventManager.js",
        "doc": "<p>Get the id of the element. If one has not been assigned, automatically assign it.</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>id</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 835,
        "owner": "Ext.EventManager",
        "html_filename": "EventManager.html",
        "href": "EventManager.html#Ext-EventManager-method-getKeyEvent",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getKeyEvent",
        "shortDoc": "Indicates which event to use for getting key presses. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventManager.js",
        "doc": "<p>Indicates which event to use for getting key presses.</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The appropriate event name.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 657,
        "owner": "Ext.EventManager",
        "html_filename": "EventManager.html",
        "href": "EventManager.html#Ext-EventManager-method-getPageX",
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
            "name": "event",
            "doc": "<p>The event</p>\n"
          }
        ],
        "alias": null,
        "name": "getPageX",
        "shortDoc": "Gets the x coordinate from the event ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventManager.js",
        "doc": "<p>Gets the x coordinate from the event</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>The x coordinate</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 675,
        "owner": "Ext.EventManager",
        "html_filename": "EventManager.html",
        "href": "EventManager.html#Ext-EventManager-method-getPageXY",
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
            "name": "event",
            "doc": "<p>The event</p>\n"
          }
        ],
        "alias": null,
        "name": "getPageXY",
        "shortDoc": "Gets the x &amp; ycoordinate from the event ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventManager.js",
        "doc": "<p>Gets the x &amp; ycoordinate from the event</p>\n",
        "return": {
          "type": "Number[]",
          "properties": null,
          "name": "return",
          "doc": "<p>The x/y coordinate</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 666,
        "owner": "Ext.EventManager",
        "html_filename": "EventManager.html",
        "href": "EventManager.html#Ext-EventManager-method-getPageY",
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
            "name": "event",
            "doc": "<p>The event</p>\n"
          }
        ],
        "alias": null,
        "name": "getPageY",
        "shortDoc": "Gets the y coordinate from the event ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventManager.js",
        "doc": "<p>Gets the y coordinate from the event</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>The y coordinate</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 639,
        "owner": "Ext.EventManager",
        "html_filename": "EventManager.html",
        "href": "EventManager.html#Ext-EventManager-method-getRelatedTarget",
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
            "name": "event",
            "doc": "<p>The event</p>\n"
          }
        ],
        "alias": null,
        "name": "getRelatedTarget",
        "shortDoc": "Gets the related target from the event. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventManager.js",
        "doc": "<p>Gets the related target from the event.</p>\n",
        "return": {
          "type": "HTMLElement",
          "properties": null,
          "name": "return",
          "doc": "<p>The related target.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 695,
        "owner": "Ext.EventManager",
        "html_filename": "EventManager.html",
        "href": "EventManager.html#Ext-EventManager-method-getTarget",
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
            "name": "event",
            "doc": "<p>The event</p>\n"
          }
        ],
        "alias": null,
        "name": "getTarget",
        "shortDoc": "Gets the target of the event. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventManager.js",
        "doc": "<p>Gets the target of the event.</p>\n",
        "return": {
          "type": "HTMLElement",
          "properties": null,
          "name": "return",
          "doc": "<p>target</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 860,
        "owner": "Ext.EventManager",
        "html_filename": "EventManager.html",
        "href": "EventManager.html#Ext-EventManager-method-on",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "on",
        "shortDoc": "Alias for Ext.EventManager.addListener ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventManager.js",
        "doc": "<p>Alias for <a href=\"#/api/Ext.EventManager-method-addListener\" rel=\"Ext.EventManager-method-addListener\" class=\"docClass\">Ext.EventManager.addListener</a></p>\n",
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
        "linenr": 130,
        "owner": "Ext.EventManager",
        "html_filename": "EventManager.html",
        "href": "EventManager.html#Ext-EventManager-method-onDocumentReady",
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
            "doc": "<p>The method the event invokes.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function executes. Defaults to the browser window.</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": true,
            "name": "options",
            "doc": "<p>(optional) Options object as passed to <a href=\"#/api/Ext.Element-method-addListener\" rel=\"Ext.Element-method-addListener\" class=\"docClass\">Ext.Element.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "onDocumentReady",
        "shortDoc": "Adds a listener to be notified when the document is ready (before onload and before images are loaded). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventManager.js",
        "doc": "<p>Adds a listener to be notified when the document is ready (before onload and before images are loaded). Can be\naccessed shorthanded as Ext.onReady().</p>\n",
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
        "linenr": 733,
        "owner": "Ext.EventManager",
        "html_filename": "EventManager.html",
        "href": "EventManager.html#Ext-EventManager-method-onWindowResize",
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
            "doc": "<p>The handler function the window resize event invokes.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "scope",
            "doc": "<p>The scope (<code>this</code> reference) in which the handler function executes. Defaults to the browser window.</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": false,
            "name": "options",
            "doc": "<p>Options object as passed to <a href=\"#/api/Ext.Element-method-addListener\" rel=\"Ext.Element-method-addListener\" class=\"docClass\">Ext.Element.addListener</a></p>\n"
          }
        ],
        "alias": null,
        "name": "onWindowResize",
        "shortDoc": "Adds a listener to be notified when the browser window is resized and provides resize event buffering (100 millisecon...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventManager.js",
        "doc": "<p>Adds a listener to be notified when the browser window is resized and provides resize event buffering (100 milliseconds),\npasses new viewport width and height to handlers.</p>\n",
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
        "linenr": 617,
        "owner": "Ext.EventManager",
        "html_filename": "EventManager.html",
        "href": "EventManager.html#Ext-EventManager-method-preventDefault",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Event",
            "properties": [

            ],
            "optional": false,
            "name": "The",
            "doc": "<p>event to prevent the default</p>\n"
          }
        ],
        "alias": null,
        "name": "preventDefault",
        "shortDoc": "Prevents the browsers default handling of the event. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventManager.js",
        "doc": "<p>Prevents the browsers default handling of the event.</p>\n",
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
        "linenr": 453,
        "owner": "Ext.EventManager",
        "html_filename": "EventManager.html",
        "href": "EventManager.html#Ext-EventManager-method-purgeElement",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "el",
            "doc": "<p>The id or html element from which to remove all event handlers.</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "eventName",
            "doc": "<p>(optional) The name of the event.</p>\n"
          }
        ],
        "alias": null,
        "name": "purgeElement",
        "shortDoc": "Recursively removes all previous added listeners from an element and its children. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventManager.js",
        "doc": "<p>Recursively removes all previous added listeners from an element and its children. Typically you will use <a href=\"#/api/Ext.Element-method-purgeAllListeners\" rel=\"Ext.Element-method-purgeAllListeners\" class=\"docClass\">Ext.Element.purgeAllListeners</a>\ndirectly on an Element in favor of calling this version.</p>\n",
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
        "linenr": 432,
        "owner": "Ext.EventManager",
        "html_filename": "EventManager.html",
        "href": "EventManager.html#Ext-EventManager-method-removeAll",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "el",
            "doc": "<p>The id or html element from which to remove all event handlers.</p>\n"
          }
        ],
        "alias": null,
        "name": "removeAll",
        "shortDoc": "Removes all event handers from an element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventManager.js",
        "doc": "<p>Removes all event handers from an element.  Typically you will use <a href=\"#/api/Ext.Element-method-removeAllListeners\" rel=\"Ext.Element-method-removeAllListeners\" class=\"docClass\">Ext.Element.removeAllListeners</a>\ndirectly on an Element in favor of calling this version.</p>\n",
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
        "linenr": 372,
        "owner": "Ext.EventManager",
        "html_filename": "EventManager.html",
        "href": "EventManager.html#Ext-EventManager-method-removeListener",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "el",
            "doc": "<p>The id or html element from which to remove the listener.</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "eventName",
            "doc": "<p>The name of the event.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "fn",
            "doc": "<p>The handler function to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.EventManager-method-addListener\" rel=\"Ext.EventManager-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "scope",
            "doc": "<p>If a scope (<b><code>this</code></b> reference) was specified when the listener was added,\nthen this must refer to the same object.</p>\n"
          }
        ],
        "alias": null,
        "name": "removeListener",
        "shortDoc": "Removes an event handler from an element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventManager.js",
        "doc": "<p>Removes an event handler from an element.  The shorthand version <a href=\"#/api/Ext.EventManager-method-un\" rel=\"Ext.EventManager-method-un\" class=\"docClass\">un</a> is equivalent.  Typically\nyou will use <a href=\"#/api/Ext.Element-method-removeListener\" rel=\"Ext.Element-method-removeListener\" class=\"docClass\">Ext.Element.removeListener</a> directly on an Element in favor of calling this version.</p>\n",
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
        "linenr": 766,
        "owner": "Ext.EventManager",
        "html_filename": "EventManager.html",
        "href": "EventManager.html#Ext-EventManager-method-removeResizeListener",
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
            "doc": "<p>The method the event invokes</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "scope",
            "doc": "<p>The scope of handler</p>\n"
          }
        ],
        "alias": null,
        "name": "removeResizeListener",
        "shortDoc": "Removes the passed window resize listener. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventManager.js",
        "doc": "<p>Removes the passed window resize listener.</p>\n",
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
        "linenr": 814,
        "owner": "Ext.EventManager",
        "html_filename": "EventManager.html",
        "href": "EventManager.html#Ext-EventManager-method-removeUnloadListener",
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
            "doc": "<p>The method the event invokes</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "scope",
            "doc": "<p>The scope of handler</p>\n"
          }
        ],
        "alias": null,
        "name": "removeUnloadListener",
        "shortDoc": "Removes the passed window unload listener. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventManager.js",
        "doc": "<p>Removes the passed window unload listener.</p>\n",
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
        "linenr": 595,
        "owner": "Ext.EventManager",
        "html_filename": "EventManager.html",
        "href": "EventManager.html#Ext-EventManager-method-stopEvent",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Event",
            "properties": [

            ],
            "optional": false,
            "name": "The",
            "doc": "<p>event to stop</p>\n"
          }
        ],
        "alias": null,
        "name": "stopEvent",
        "shortDoc": "Stop the event (preventDefault and stopPropagation) ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventManager.js",
        "doc": "<p>Stop the event (preventDefault and stopPropagation)</p>\n",
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
        "linenr": 604,
        "owner": "Ext.EventManager",
        "html_filename": "EventManager.html",
        "href": "EventManager.html#Ext-EventManager-method-stopPropagation",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Event",
            "properties": [

            ],
            "optional": false,
            "name": "The",
            "doc": "<p>event to stop bubbling.</p>\n"
          }
        ],
        "alias": null,
        "name": "stopPropagation",
        "shortDoc": "Cancels bubbling of the event. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventManager.js",
        "doc": "<p>Cancels bubbling of the event.</p>\n",
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
        "linenr": 867,
        "owner": "Ext.EventManager",
        "html_filename": "EventManager.html",
        "href": "EventManager.html#Ext-EventManager-method-un",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "un",
        "shortDoc": "Alias for Ext.EventManager.removeListener ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventManager.js",
        "doc": "<p>Alias for <a href=\"#/api/Ext.EventManager-method-removeListener\" rel=\"Ext.EventManager-method-removeListener\" class=\"docClass\">Ext.EventManager.removeListener</a></p>\n",
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
  "singleton": true,
  "private": false,
  "tagname": "class",
  "author": null,
  "superclasses": [

  ],
  "alias": null,
  "name": "Ext.EventManager",
  "mixins": [

  ],
  "code_type": "assignment",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/EventManager.js",
  "doc": "<p>Registers event handlers that want to receive a normalized EventObject instead of the standard browser event and provides\nseveral useful events directly.\nSee <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> for more details on normalized event objects.</p>\n",
  "alternateClassNames": [

  ]
});