Ext.data.JsonP.Ext_tree_plugin_TreeViewDragDrop({
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
  "html_filename": "TreeViewDragDrop.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "TreeViewDragDrop.html#Ext-tree-plugin-TreeViewDragDrop",
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
        "linenr": 100,
        "owner": "Ext.tree.plugin.TreeViewDragDrop",
        "html_filename": "TreeViewDragDrop.html",
        "href": "TreeViewDragDrop.html#Ext-tree-plugin-TreeViewDragDrop-cfg-allowContainerDrop",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "allowContainerDrop",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "doc": "<p>True if drops on the tree container (outside of a specific tree node) are allowed (defaults to false)</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 93,
        "owner": "Ext.tree.plugin.TreeViewDragDrop",
        "html_filename": "TreeViewDragDrop.html",
        "href": "TreeViewDragDrop.html#Ext-tree-plugin-TreeViewDragDrop-cfg-allowParentInsert",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "allowParentInsert",
        "shortDoc": "Allow inserting a dragged node between an expanded parent node and its first child that will become a\nsibling of the ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "doc": "<p>Allow inserting a dragged node between an expanded parent node and its first child that will become a\nsibling of the parent when dropped (defaults to false)</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 106,
        "owner": "Ext.tree.plugin.TreeViewDragDrop",
        "html_filename": "TreeViewDragDrop.html",
        "href": "TreeViewDragDrop.html#Ext-tree-plugin-TreeViewDragDrop-cfg-appendOnly",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "appendOnly",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "doc": "<p>True if the tree should only allow append drops (use for trees which are sorted, defaults to false)</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 112,
        "owner": "Ext.tree.plugin.TreeViewDragDrop",
        "html_filename": "TreeViewDragDrop.html",
        "href": "TreeViewDragDrop.html#Ext-tree-plugin-TreeViewDragDrop-cfg-ddGroup",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "ddGroup",
        "shortDoc": "A named drag drop group to which this object belongs. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "doc": "<p>A named drag drop group to which this object belongs.  If a group is specified, then both the DragZones and DropZone\nused by this plugin will only interact with other drag drop objects in the same group (defaults to 'TreeDD').</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 119,
        "owner": "Ext.tree.plugin.TreeViewDragDrop",
        "html_filename": "TreeViewDragDrop.html",
        "href": "TreeViewDragDrop.html#Ext-tree-plugin-TreeViewDragDrop-cfg-dragGroup",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "dragGroup",
        "shortDoc": "The ddGroup to which the DragZone will belong. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "doc": "<p>The ddGroup to which the DragZone will belong.</p>\n\n\n<p>This defines which other DropZones the DragZone will interact with. Drag/DropZones only interact with other Drag/DropZones\nwhich are members of the same ddGroup.</p>\n\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 126,
        "owner": "Ext.tree.plugin.TreeViewDragDrop",
        "html_filename": "TreeViewDragDrop.html",
        "href": "TreeViewDragDrop.html#Ext-tree-plugin-TreeViewDragDrop-cfg-dropGroup",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "dropGroup",
        "shortDoc": "The ddGroup to which the DropZone will belong. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "doc": "<p>The ddGroup to which the DropZone will belong.</p>\n\n\n<p>This defines which other DragZones the DropZone will interact with. Drag/DropZones only interact with other Drag/DropZones\nwhich are members of the same ddGroup.</p>\n\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 147,
        "owner": "Ext.tree.plugin.TreeViewDragDrop",
        "html_filename": "TreeViewDragDrop.html",
        "href": "TreeViewDragDrop.html#Ext-tree-plugin-TreeViewDragDrop-cfg-enableDrag",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "enableDrag",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "doc": "<p>Defaults to <code>true</code></p>\n\n\n<p>Set to <code>false</code> to disallow dragging items from the View </p>\n\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 140,
        "owner": "Ext.tree.plugin.TreeViewDragDrop",
        "html_filename": "TreeViewDragDrop.html",
        "href": "TreeViewDragDrop.html#Ext-tree-plugin-TreeViewDragDrop-cfg-enableDrop",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "enableDrop",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "doc": "<p>Defaults to <code>true</code></p>\n\n\n<p>Set to <code>false</code> to disallow the View from accepting drop gestures</p>\n\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 133,
        "owner": "Ext.tree.plugin.TreeViewDragDrop",
        "html_filename": "TreeViewDragDrop.html",
        "href": "TreeViewDragDrop.html#Ext-tree-plugin-TreeViewDragDrop-cfg-expandDelay",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "expandDelay",
        "shortDoc": "The delay in milliseconds to wait before expanding a target tree node while dragging a droppable node\nover the target...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "doc": "<p>The delay in milliseconds to wait before expanding a target tree node while dragging a droppable node\nover the target (defaults to 1000)</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 154,
        "owner": "Ext.tree.plugin.TreeViewDragDrop",
        "html_filename": "TreeViewDragDrop.html",
        "href": "TreeViewDragDrop.html#Ext-tree-plugin-TreeViewDragDrop-cfg-nodeHighlightColor",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "nodeHighlightColor",
        "shortDoc": "The color to use when visually highlighting the dragged\nor dropped node (defaults to 'c3daf9' - light blue). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "doc": "<p>The color to use when visually highlighting the dragged\nor dropped node (defaults to 'c3daf9' - light blue). The color must be a 6 digit hex value, without\na preceding '#'. See also <a href=\"#/api/Ext.tree.plugin.TreeViewDragDrop-cfg-nodeHighlightOnDrop\" rel=\"Ext.tree.plugin.TreeViewDragDrop-cfg-nodeHighlightOnDrop\" class=\"docClass\">nodeHighlightOnDrop</a> and <a href=\"#/api/Ext.tree.plugin.TreeViewDragDrop-cfg-nodeHighlightOnRepair\" rel=\"Ext.tree.plugin.TreeViewDragDrop-cfg-nodeHighlightOnRepair\" class=\"docClass\">nodeHighlightOnRepair</a>.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 161,
        "owner": "Ext.tree.plugin.TreeViewDragDrop",
        "html_filename": "TreeViewDragDrop.html",
        "href": "TreeViewDragDrop.html#Ext-tree-plugin-TreeViewDragDrop-cfg-nodeHighlightOnDrop",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "nodeHighlightOnDrop",
        "shortDoc": "Whether or not to highlight any nodes after they are\nsuccessfully dropped on their target. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "doc": "<p>Whether or not to highlight any nodes after they are\nsuccessfully dropped on their target. Defaults to the value of <code>Ext.enableFx</code>.\nSee also <a href=\"#/api/Ext.tree.plugin.TreeViewDragDrop-cfg-nodeHighlightColor\" rel=\"Ext.tree.plugin.TreeViewDragDrop-cfg-nodeHighlightColor\" class=\"docClass\">nodeHighlightColor</a> and <a href=\"#/api/Ext.tree.plugin.TreeViewDragDrop-cfg-nodeHighlightOnRepair\" rel=\"Ext.tree.plugin.TreeViewDragDrop-cfg-nodeHighlightOnRepair\" class=\"docClass\">nodeHighlightOnRepair</a>.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 169,
        "owner": "Ext.tree.plugin.TreeViewDragDrop",
        "html_filename": "TreeViewDragDrop.html",
        "href": "TreeViewDragDrop.html#Ext-tree-plugin-TreeViewDragDrop-cfg-nodeHighlightOnRepair",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "nodeHighlightOnRepair",
        "shortDoc": "Whether or not to highlight any nodes after they are\nrepaired from an unsuccessful drag/drop. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "doc": "<p>Whether or not to highlight any nodes after they are\nrepaired from an unsuccessful drag/drop. Defaults to the value of <code>Ext.enableFx</code>.\nSee also <a href=\"#/api/Ext.tree.plugin.TreeViewDragDrop-cfg-nodeHighlightColor\" rel=\"Ext.tree.plugin.TreeViewDragDrop-cfg-nodeHighlightColor\" class=\"docClass\">nodeHighlightColor</a> and <a href=\"#/api/Ext.tree.plugin.TreeViewDragDrop-cfg-nodeHighlightOnDrop\" rel=\"Ext.tree.plugin.TreeViewDragDrop-cfg-nodeHighlightOnDrop\" class=\"docClass\">nodeHighlightOnDrop</a>.</p>\n"
      }
    ],
    "css_mixin": [

    ],
    "event": [
      {
        "static": false,
        "inheritable": false,
        "linenr": 33,
        "owner": "Ext.tree.plugin.TreeViewDragDrop",
        "html_filename": "TreeViewDragDrop.html",
        "href": "TreeViewDragDrop.html#Ext-tree-plugin-TreeViewDragDrop-event-beforedrop",
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
            "doc": "<p>The TreeView node <b>if any</b> over which the mouse was positioned.</p></p>\n\n<p>Returning <code>false</code> to this event signals that the drop gesture was invalid, and if the drag proxy\nwill animate back to the point from which the drag began.</p>\n\n\n<p>Returning <code>0</code> To this event signals that the data transfer operation should not take place, but\nthat the gesture was valid, and that the repair operation should not take place.</p>\n\n\n<p>Any other return value continues with the data transfer operation.</p>\n\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "data",
            "doc": "<p>The data object gathered at mousedown time by the cooperating <a href=\"#/api/Ext.dd.DragZone\" rel=\"Ext.dd.DragZone\" class=\"docClass\">DragZone</a>'s\n<a href=\"#/api/Ext.dd.DragZone-method-getDragData\" rel=\"Ext.dd.DragZone-method-getDragData\" class=\"docClass\">getDragData</a> method it contains the following properties:<ul>\n<li>copy : Boolean\n <div class=\"sub-desc\">The value of the TreeView's <code>copy</code> property, or <code>true</code> if the TreeView was configured\n with <code>allowCopy: true</code> and the control key was pressed when the drag operation was begun</div></li>\n<li>view : TreeView\n <div class=\"sub-desc\">The source TreeView from which the drag originated.</div></li>\n<li>ddel : HtmlElement\n <div class=\"sub-desc\">The drag proxy element which moves with the mouse</div></li>\n<li>item : HtmlElement\n <div class=\"sub-desc\">The TreeView node upon which the mousedown event was registered.</div></li>\n<li>records : Array\n <div class=\"sub-desc\">An Array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>s representing the selected data being dragged from the source TreeView.</div></li>\n</ul></p>\n"
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
            "doc": "<p><code>\"before\"</code>, <code>\"after\"</code> or <code>\"append\"</code> depending on whether the mouse is above or below the midline of the node,\nor the node is a branch node which accepts new child nodes.</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "dropFunction",
            "doc": "<p>A function to call to complete the data transfer operation and either move or copy Model instances from the source\nView's Store to the destination View's Store.</p>\n\n\n<p>This is useful when you want to perform some kind of asynchronous processing before confirming\nthe drop, such as an <a href=\"#/api/Ext.window.MessageBox-method-confirm\" rel=\"Ext.window.MessageBox-method-confirm\" class=\"docClass\">confirm</a> call, or an Ajax request.</p>\n\n\n<p>Return <code>0</code> from this event handler, and call the <code>dropFunction</code> at any time to perform the data transfer.</p>\n\n"
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
        "shortDoc": "This event is fired through the TreeView. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "doc": "<p><b>This event is fired through the TreeView. Add listeners to the TreeView object</b></p>\n\n\n<p>Fired when a drop gesture has been triggered by a mouseup event in a valid drop position in the TreeView.\n\n"
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 67,
        "owner": "Ext.tree.plugin.TreeViewDragDrop",
        "html_filename": "TreeViewDragDrop.html",
        "href": "TreeViewDragDrop.html#Ext-tree-plugin-TreeViewDragDrop-event-drop",
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
            "doc": "<p>The TreeView node <b>if any</b> over which the mouse was positioned.</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "data",
            "doc": "<p>The data object gathered at mousedown time by the cooperating <a href=\"#/api/Ext.dd.DragZone\" rel=\"Ext.dd.DragZone\" class=\"docClass\">DragZone</a>'s\n<a href=\"#/api/Ext.dd.DragZone-method-getDragData\" rel=\"Ext.dd.DragZone-method-getDragData\" class=\"docClass\">getDragData</a> method it contains the following properties:<ul>\n<li>copy : Boolean\n <div class=\"sub-desc\">The value of the TreeView's <code>copy</code> property, or <code>true</code> if the TreeView was configured\n with <code>allowCopy: true</code> and the control key was pressed when the drag operation was begun</div></li>\n<li>view : TreeView\n <div class=\"sub-desc\">The source TreeView from which the drag originated.</div></li>\n<li>ddel : HtmlElement\n <div class=\"sub-desc\">The drag proxy element which moves with the mouse</div></li>\n<li>item : HtmlElement\n <div class=\"sub-desc\">The TreeView node upon which the mousedown event was registered.</div></li>\n<li>records : Array\n <div class=\"sub-desc\">An Array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>s representing the selected data being dragged from the source TreeView.</div></li>\n</ul></p>\n"
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
            "doc": "<p><code>\"before\"</code>, <code>\"after\"</code> or <code>\"append\"</code> depending on whether the mouse is above or below the midline of the node,\nor the node is a branch node which accepts new child nodes.</p>\n"
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
        "shortDoc": "This event is fired through the TreeView. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "doc": "<p><b>This event is fired through the TreeView. Add listeners to the TreeView object</b>\nFired when a drop operation has been completed and the data has been moved or copied.</p>\n"
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
  "name": "Ext.tree.plugin.TreeViewDragDrop",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
  "doc": "<p>This plugin provides drag and/or drop functionality for a TreeView.</p>\n\n\n<p>It creates a specialized instance of <a href=\"#/api/Ext.dd.DragZone\" rel=\"Ext.dd.DragZone\" class=\"docClass\">DragZone</a> which knows how to drag out of a <a href=\"#/api/Ext.tree.View\" rel=\"Ext.tree.View\" class=\"docClass\">TreeView</a>\nand loads the data object which is passed to a cooperating <a href=\"#/api/Ext.dd.DragZone\" rel=\"Ext.dd.DragZone\" class=\"docClass\">DragZone</a>'s methods with the following properties:<ul>\n<li>copy : Boolean\n <div class=\"sub-desc\">The value of the TreeView's <code>copy</code> property, or <code>true</code> if the TreeView was configured\n with <code>allowCopy: true</code> <u>and</u> the control key was pressed when the drag operation was begun.</div></li>\n<li>view : TreeView\n <div class=\"sub-desc\">The source TreeView from which the drag originated.</div></li>\n<li>ddel : HtmlElement\n <div class=\"sub-desc\">The drag proxy element which moves with the mouse</div></li>\n<li>item : HtmlElement\n <div class=\"sub-desc\">The TreeView node upon which the mousedown event was registered.</div></li>\n<li>records : Array\n <div class=\"sub-desc\">An Array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>s representing the selected data being dragged from the source TreeView.</div></li>\n</ul></p>\n\n\n<p>It also creates a specialized instance of <a href=\"#/api/Ext.dd.DropZone\" rel=\"Ext.dd.DropZone\" class=\"docClass\">Ext.dd.DropZone</a> which cooperates with other DropZones which are members of the same\nddGroup which processes such data objects.</p>\n\n\n<p>Adding this plugin to a view means that two new events may be fired from the client TreeView, <code><a href=\"#/api/Ext.tree.plugin.TreeViewDragDrop-event-beforedrop\" rel=\"Ext.tree.plugin.TreeViewDragDrop-event-beforedrop\" class=\"docClass\">beforedrop</a></code> and\n<code><a href=\"#/api/Ext.tree.plugin.TreeViewDragDrop-event-drop\" rel=\"Ext.tree.plugin.TreeViewDragDrop-event-drop\" class=\"docClass\">drop</a></code></p>\n\n",
  "alternateClassNames": [

  ]
});