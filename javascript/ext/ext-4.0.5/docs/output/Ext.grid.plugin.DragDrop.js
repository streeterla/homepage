Ext.data.JsonP.Ext_grid_plugin_DragDrop({
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
  "extends": "Ext.AbstractPlugin",
  "html_filename": "DragDrop2.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "DragDrop2.html#Ext-grid-plugin-DragDrop",
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
        "linenr": 166,
        "owner": "Ext.grid.plugin.DragDrop",
        "html_filename": "DragDrop2.html",
        "href": "DragDrop2.html#Ext-grid-plugin-DragDrop-cfg-ddGroup",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "ddGroup",
        "shortDoc": "A named drag drop group to which this object belongs. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/grid/plugin/DragDrop.js",
        "doc": "<p>A named drag drop group to which this object belongs. If a group is specified, then both the DragZones and\nDropZone used by this plugin will only interact with other drag drop objects in the same group (defaults to\n'TreeDD').</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 174,
        "owner": "Ext.grid.plugin.DragDrop",
        "html_filename": "DragDrop2.html",
        "href": "DragDrop2.html#Ext-grid-plugin-DragDrop-cfg-dragGroup",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "dragGroup",
        "shortDoc": "The ddGroup to which the DragZone will belong. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/grid/plugin/DragDrop.js",
        "doc": "<p>The ddGroup to which the DragZone will belong.</p>\n\n<p>This defines which other DropZones the DragZone will interact with. Drag/DropZones only interact with other\nDrag/DropZones which are members of the same ddGroup.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 182,
        "owner": "Ext.grid.plugin.DragDrop",
        "html_filename": "DragDrop2.html",
        "href": "DragDrop2.html#Ext-grid-plugin-DragDrop-cfg-dropGroup",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "dropGroup",
        "shortDoc": "The ddGroup to which the DropZone will belong. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/grid/plugin/DragDrop.js",
        "doc": "<p>The ddGroup to which the DropZone will belong.</p>\n\n<p>This defines which other DragZones the DropZone will interact with. Drag/DropZones only interact with other\nDrag/DropZones which are members of the same ddGroup.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 196,
        "owner": "Ext.grid.plugin.DragDrop",
        "html_filename": "DragDrop2.html",
        "href": "DragDrop2.html#Ext-grid-plugin-DragDrop-cfg-enableDrag",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "enableDrag",
        "shortDoc": "False to disallow dragging items from the View. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/grid/plugin/DragDrop.js",
        "doc": "<p>False to disallow dragging items from the View. Defaults to true.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 190,
        "owner": "Ext.grid.plugin.DragDrop",
        "html_filename": "DragDrop2.html",
        "href": "DragDrop2.html#Ext-grid-plugin-DragDrop-cfg-enableDrop",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "enableDrop",
        "shortDoc": "False to disallow the View from accepting drop gestures. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/grid/plugin/DragDrop.js",
        "doc": "<p>False to disallow the View from accepting drop gestures. Defaults to true.</p>\n"
      }
    ],
    "css_mixin": [

    ],
    "event": [
      {
        "static": false,
        "inheritable": false,
        "linenr": 71,
        "owner": "Ext.grid.plugin.DragDrop",
        "html_filename": "DragDrop2.html",
        "href": "DragDrop2.html#Ext-grid-plugin-DragDrop-event-beforedrop",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "node",
            "doc": "<p>The GridView node <strong>if any</strong> over which the mouse was positioned.</p>\n\n<p>Returning <code>false</code> to this event signals that the drop gesture was invalid, and if the drag proxy will animate\nback to the point from which the drag began.</p>\n\n<p>Returning <code>0</code> To this event signals that the data transfer operation should not take place, but that the gesture\nwas valid, and that the repair operation should not take place.</p>\n\n<p>Any other return value continues with the data transfer operation.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "data",
            "doc": "<p>The data object gathered at mousedown time by the cooperating <a href=\"#/api/Ext.dd.DragZone\" rel=\"Ext.dd.DragZone\" class=\"docClass\">DragZone</a>'s <a href=\"#/api/Ext.dd.DragZone-method-getDragData\" rel=\"Ext.dd.DragZone-method-getDragData\" class=\"docClass\">getDragData</a> method it contains the following properties:</p>\n\n<ul>\n<li><p>copy : Boolean</p>\n\n<p>The value of the GridView's <code>copy</code> property, or <code>true</code> if the GridView was configured with <code>allowCopy: true</code> and\nthe control key was pressed when the drag operation was begun</p></li>\n<li><p>view : GridView</p>\n\n<p>The source GridView from which the drag originated.</p></li>\n<li><p>ddel : HtmlElement</p>\n\n<p>The drag proxy element which moves with the mouse</p></li>\n<li><p>item : HtmlElement</p>\n\n<p>The GridView node upon which the mousedown event was registered.</p></li>\n<li><p>records : Array</p>\n\n<p>An Array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>s representing the selected data being dragged from the source GridView.</p></li>\n</ul>\n\n"
          },
          {
            "type": "Ext.data.Model",
            "properties": [

            ],
            "optional": false,
            "name": "overModel",
            "doc": "<p>The Model over which the drop gesture took place.</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "dropPosition",
            "doc": "<p><code>\"before\"</code> or <code>\"after\"</code> depending on whether the mouse is above or below the midline\nof the node.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "dropFunction",
            "doc": "<p>A function to call to complete the data transfer operation and either move or copy Model instances from the\nsource View's Store to the destination View's Store.</p>\n\n<p>This is useful when you want to perform some kind of asynchronous processing before confirming the drop, such as\nan <a href=\"#/api/Ext.window.MessageBox-method-confirm\" rel=\"Ext.window.MessageBox-method-confirm\" class=\"docClass\">confirm</a> call, or an Ajax request.</p>\n\n<p>Return <code>0</code> from this event handler, and call the <code>dropFunction</code> at any time to perform the data transfer.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "beforedrop",
        "shortDoc": "This event is fired through the GridView. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/grid/plugin/DragDrop.js",
        "doc": "<p><strong>This event is fired through the GridView. Add listeners to the GridView object</strong></p>\n\n<p>Fired when a drop gesture has been triggered by a mouseup event in a valid drop position in the GridView.</p>\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 127,
        "owner": "Ext.grid.plugin.DragDrop",
        "html_filename": "DragDrop2.html",
        "href": "DragDrop2.html#Ext-grid-plugin-DragDrop-event-drop",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "event",
        "params": [
          {
            "type": "HTMLElement",
            "properties": [

            ],
            "optional": false,
            "name": "node",
            "doc": "<p>The GridView node <strong>if any</strong> over which the mouse was positioned.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "data",
            "doc": "<p>The data object gathered at mousedown time by the cooperating <a href=\"#/api/Ext.dd.DragZone\" rel=\"Ext.dd.DragZone\" class=\"docClass\">DragZone</a>'s <a href=\"#/api/Ext.dd.DragZone-method-getDragData\" rel=\"Ext.dd.DragZone-method-getDragData\" class=\"docClass\">getDragData</a> method it contains the following properties:</p>\n\n<ul>\n<li><p>copy : Boolean</p>\n\n<p>The value of the GridView's <code>copy</code> property, or <code>true</code> if the GridView was configured with <code>allowCopy: true</code> and\nthe control key was pressed when the drag operation was begun</p></li>\n<li><p>view : GridView</p>\n\n<p>The source GridView from which the drag originated.</p></li>\n<li><p>ddel : HtmlElement</p>\n\n<p>The drag proxy element which moves with the mouse</p></li>\n<li><p>item : HtmlElement</p>\n\n<p>The GridView node upon which the mousedown event was registered.</p></li>\n<li><p>records : Array</p>\n\n<p>An Array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>s representing the selected data being dragged from the source GridView.</p></li>\n</ul>\n\n"
          },
          {
            "type": "Ext.data.Model",
            "properties": [

            ],
            "optional": false,
            "name": "overModel",
            "doc": "<p>The Model over which the drop gesture took place.</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "dropPosition",
            "doc": "<p><code>\"before\"</code> or <code>\"after\"</code> depending on whether the mouse is above or below the midline\nof the node.</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "eOpts",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "drop",
        "shortDoc": "This event is fired through the GridView. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/grid/plugin/DragDrop.js",
        "doc": "<p><strong>This event is fired through the GridView. Add listeners to the GridView object</strong> Fired when a drop operation\nhas been completed and the data has been moved or copied.</p>\n"
      }
    ],
    "method": [
      {
        "static": false,
        "inheritable": false,
        "linenr": 42,
        "owner": "Ext.AbstractPlugin",
        "html_filename": "AbstractPlugin.html",
        "href": "AbstractPlugin.html#Ext-AbstractPlugin-method-destroy",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "destroy",
        "shortDoc": "The destroy method is invoked by the owning Component at the time the Component is being destroyed. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractPlugin.js",
        "doc": "<p>The destroy method is invoked by the owning Component at the time the Component is being destroyed.</p>\n\n\n<p>The supplied implementation is empty. Subclasses should perform plugin cleanup in their own implementation of this method.</p>\n\n",
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
        "linenr": 57,
        "owner": "Ext.AbstractPlugin",
        "html_filename": "AbstractPlugin.html",
        "href": "AbstractPlugin.html#Ext-AbstractPlugin-method-disable",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "disable",
        "shortDoc": "The base implementation just sets the plugin's disabled flag to true\n\n\nPlugin subclasses which need more complex proc...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractPlugin.js",
        "doc": "<p>The base implementation just sets the plugin's <code>disabled</code> flag to <code>true</code></p>\n\n\n<p>Plugin subclasses which need more complex processing may implement an overriding implementation.</p>\n\n",
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
        "linenr": 49,
        "owner": "Ext.AbstractPlugin",
        "html_filename": "AbstractPlugin.html",
        "href": "AbstractPlugin.html#Ext-AbstractPlugin-method-enable",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "enable",
        "shortDoc": "The base implementation just sets the plugin's disabled flag to false\n\n\nPlugin subclasses which need more complex pro...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractPlugin.js",
        "doc": "<p>The base implementation just sets the plugin's <code>disabled</code> flag to <code>false</code></p>\n\n\n<p>Plugin subclasses which need more complex processing may implement an overriding implementation.</p>\n\n",
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
        "linenr": 33,
        "owner": "Ext.AbstractPlugin",
        "html_filename": "AbstractPlugin.html",
        "href": "AbstractPlugin.html#Ext-AbstractPlugin-method-init",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.Component",
            "properties": [

            ],
            "optional": false,
            "name": "client",
            "doc": "<p>The client Component which owns this plugin.</p>\n"
          }
        ],
        "alias": null,
        "name": "init",
        "shortDoc": "The init method is invoked after initComponent method has been run for the client Component. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/AbstractPlugin.js",
        "doc": "<p>The init method is invoked after initComponent method has been run for the client Component.</p>\n\n\n<p>The supplied implementation is empty. Subclasses should perform plugin initialization, and set up bidirectional\nlinks between the plugin and its client Component in their own implementation of this method.</p>\n\n",
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
    "Ext.AbstractPlugin"
  ],
  "alias": null,
  "name": "Ext.grid.plugin.DragDrop",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/grid/plugin/DragDrop.js",
  "doc": "<p>This plugin provides drag and/or drop functionality for a GridView.</p>\n\n<p>It creates a specialized instance of <a href=\"#/api/Ext.dd.DragZone\" rel=\"Ext.dd.DragZone\" class=\"docClass\">DragZone</a> which knows how to drag out of a <a href=\"#/api/Ext.grid.View\" rel=\"Ext.grid.View\" class=\"docClass\">GridView</a> and loads the data object which is passed to a cooperating <a href=\"#/api/Ext.dd.DragZone\" rel=\"Ext.dd.DragZone\" class=\"docClass\">DragZone</a>'s\nmethods with the following properties:</p>\n\n<ul>\n<li><p><code>copy</code> : Boolean</p>\n\n<p>The value of the GridView's <code>copy</code> property, or <code>true</code> if the GridView was configured with <code>allowCopy: true</code> <em>and</em>\nthe control key was pressed when the drag operation was begun.</p></li>\n<li><p><code>view</code> : GridView</p>\n\n<p>The source GridView from which the drag originated.</p></li>\n<li><p><code>ddel</code> : HtmlElement</p>\n\n<p>The drag proxy element which moves with the mouse</p></li>\n<li><p><code>item</code> : HtmlElement</p>\n\n<p>The GridView node upon which the mousedown event was registered.</p></li>\n<li><p><code>records</code> : Array</p>\n\n<p>An Array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>s representing the selected data being dragged from the source GridView.</p></li>\n</ul>\n\n\n<p>It also creates a specialized instance of <a href=\"#/api/Ext.dd.DropZone\" rel=\"Ext.dd.DropZone\" class=\"docClass\">Ext.dd.DropZone</a> which cooperates with other DropZones which are\nmembers of the same ddGroup which processes such data objects.</p>\n\n<p>Adding this plugin to a view means that two new events may be fired from the client GridView, <code><a href=\"#/api/Ext.grid.plugin.DragDrop-event-beforedrop\" rel=\"Ext.grid.plugin.DragDrop-event-beforedrop\" class=\"docClass\">beforedrop</a></code> and <code><a href=\"#/api/Ext.grid.plugin.DragDrop-event-drop\" rel=\"Ext.grid.plugin.DragDrop-event-drop\" class=\"docClass\">drop</a></code></p>\n\n<pre class=\"inline-example\"><code>Ext.create('Ext.data.Store', {\n    storeId:'simpsonsStore',\n    fields:['name'],\n    data: [[\"Lisa\"], [\"Bart\"], [\"Homer\"], [\"Marge\"]],\n    proxy: {\n        type: 'memory',\n        reader: 'array'\n    }\n});\n\nExt.create('Ext.grid.Panel', {\n    store: 'simpsonsStore',\n    columns: [\n        {header: 'Name',  dataIndex: 'name', flex: true}\n    ],\n    viewConfig: {\n        plugins: {\n            ptype: 'gridviewdragdrop',\n            dragText: 'Drag and drop to reorganize'\n        }\n    },\n    height: 200,\n    width: 400,\n    renderTo: Ext.getBody()\n});\n</code></pre>\n",
  "alternateClassNames": [

  ]
});