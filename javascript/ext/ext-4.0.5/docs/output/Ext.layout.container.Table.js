Ext.data.JsonP.Ext_layout_container_Table({
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
  "extends": "Ext.layout.container.Auto",
  "html_filename": "Table.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "Table.html#Ext-layout-container-Table",
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
        "linenr": 17,
        "owner": "Ext.layout.container.AbstractContainer",
        "html_filename": "AbstractContainer2.html",
        "href": "AbstractContainer2.html#Ext-layout-container-AbstractContainer-cfg-bindToOwnerCtComponent",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "bindToOwnerCtComponent",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/layout/container/AbstractContainer.js",
        "doc": "<p>Flag to notify the ownerCt Component on afterLayout of a change</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 23,
        "owner": "Ext.layout.container.AbstractContainer",
        "html_filename": "AbstractContainer2.html",
        "href": "AbstractContainer2.html#Ext-layout-container-AbstractContainer-cfg-bindToOwnerCtContainer",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "bindToOwnerCtContainer",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/layout/container/AbstractContainer.js",
        "doc": "<p>Flag to notify the ownerCt Container on afterLayout of a change</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 65,
        "owner": "Ext.layout.container.Table",
        "html_filename": "Table.html",
        "href": "Table.html#Ext-layout-container-Table-cfg-columns",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "columns",
        "shortDoc": "The total number of columns to create in the table for this layout. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/layout/container/Table.js",
        "doc": "<p>The total number of columns to create in the table for this layout. If not specified, all Components added to\nthis layout will be rendered into a single row using one column per Component.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 29,
        "owner": "Ext.layout.container.AbstractContainer",
        "html_filename": "AbstractContainer2.html",
        "href": "AbstractContainer2.html#Ext-layout-container-AbstractContainer-cfg-itemCls",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "itemCls",
        "shortDoc": "An optional extra CSS class that will be added to the container. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/layout/container/AbstractContainer.js",
        "doc": "<p>An optional extra CSS class that will be added to the container. This can be useful for adding\ncustomized styles to the container or any of its children using standard CSS rules. See\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.<a href=\"#/api/Ext.Component-cfg-componentCls\" rel=\"Ext.Component-cfg-componentCls\" class=\"docClass\">componentCls</a> also.</p>\n\n\n<p></p></p>\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 86,
        "owner": "Ext.layout.container.Table",
        "html_filename": "Table.html",
        "href": "Table.html#Ext-layout-container-Table-cfg-tableAttrs",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "tableAttrs",
        "shortDoc": "An object containing properties which are added to the DomHelper specification used to\ncreate the layout's  element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/layout/container/Table.js",
        "doc": "<p>An object containing properties which are added to the <a href=\"#/api/Ext.DomHelper\" rel=\"Ext.DomHelper\" class=\"docClass\">DomHelper</a> specification used to\ncreate the layout's <table> element. Example:</p>\n\n<pre><code>{\n    xtype: 'panel',\n    layout: {\n        type: 'table',\n        columns: 3,\n        tableAttrs: {\n            style: {\n                width: '100%'\n            }\n        }\n    }\n}\n</code></pre>\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 112,
        "owner": "Ext.layout.container.Table",
        "html_filename": "Table.html",
        "href": "Table.html#Ext-layout-container-Table-cfg-tdAttrs",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "tdAttrs",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/layout/container/Table.js",
        "doc": "<p>An object containing properties which are added to the <a href=\"#/api/Ext.DomHelper\" rel=\"Ext.DomHelper\" class=\"docClass\">DomHelper</a> specification used to\ncreate the layout's <td> elements.</p>\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 106,
        "owner": "Ext.layout.container.Table",
        "html_filename": "Table.html",
        "href": "Table.html#Ext-layout-container-Table-cfg-trAttrs",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "trAttrs",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/layout/container/Table.js",
        "doc": "<p>An object containing properties which are added to the <a href=\"#/api/Ext.DomHelper\" rel=\"Ext.DomHelper\" class=\"docClass\">DomHelper</a> specification used to\ncreate the layout's <tr> elements.</p>\n"
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
        "linenr": 58,
        "owner": "Ext.layout.container.AbstractContainer",
        "html_filename": "AbstractContainer2.html",
        "href": "AbstractContainer2.html#Ext-layout-container-AbstractContainer-method-beforeLayout",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "beforeLayout",
        "shortDoc": "Containers should not lay out child components when collapsed. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/layout/container/AbstractContainer.js",
        "doc": "<p>Containers should not lay out child components when collapsed.</p>\n",
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
        "owner": "Ext.layout.container.AbstractContainer",
        "html_filename": "AbstractContainer2.html",
        "href": "AbstractContainer2.html#Ext-layout-container-AbstractContainer-method-getLayoutItems",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getLayoutItems",
        "shortDoc": "Returns an array of child components either for a render phase (Performed in the beforeLayout method of the layout's\n...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/layout/container/AbstractContainer.js",
        "doc": "<p>Returns an array of child components either for a render phase (Performed in the beforeLayout method of the layout's\nbase class), or the layout phase (onLayout).</p>\n\n",
        "return": {
          "type": "Ext.Component[]",
          "properties": null,
          "name": "return",
          "doc": "<p>of child components</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 75,
        "owner": "Ext.layout.container.AbstractContainer",
        "html_filename": "AbstractContainer2.html",
        "href": "AbstractContainer2.html#Ext-layout-container-AbstractContainer-method-getRenderTarget",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getRenderTarget",
        "shortDoc": "Returns the element into which rendering must take place. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/layout/container/AbstractContainer.js",
        "doc": "<p>Returns the element into which rendering must take place. Defaults to the owner Container's target element.</p>\n\n\n<p>May be overridden in layout managers which implement an inner element.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 53,
        "owner": "Ext.layout.container.Container",
        "html_filename": "Container3.html",
        "href": "Container3.html#Ext-layout-container-Container-method-getRenderedItems",
        "protected": true,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getRenderedItems",
        "shortDoc": "Returns all items that are rendered ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/layout/container/Container.js",
        "doc": "<p>Returns all items that are rendered</p>\n",
        "return": {
          "type": "Array",
          "properties": null,
          "name": "return",
          "doc": "<p>All matching items</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 68,
        "owner": "Ext.layout.container.AbstractContainer",
        "html_filename": "AbstractContainer2.html",
        "href": "AbstractContainer2.html#Ext-layout-container-AbstractContainer-method-getTarget",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getTarget",
        "shortDoc": "Returns the owner component's resize element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/layout/container/AbstractContainer.js",
        "doc": "<p>Returns the owner component's resize element.</p>\n",
        "return": {
          "type": "Ext.Element",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 76,
        "owner": "Ext.layout.container.Container",
        "html_filename": "Container3.html",
        "href": "Container3.html#Ext-layout-container-Container-method-getVisibleItems",
        "protected": true,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getVisibleItems",
        "shortDoc": "Returns all items that are both rendered and visible ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/layout/container/Container.js",
        "doc": "<p>Returns all items that are both rendered and visible</p>\n",
        "return": {
          "type": "Array",
          "properties": null,
          "name": "return",
          "doc": "<p>All matching items</p>\n"
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
    "Ext.layout.Layout",
    "Ext.layout.container.AbstractContainer",
    "Ext.layout.container.Container",
    "Ext.layout.container.Auto"
  ],
  "alias": null,
  "name": "Ext.layout.container.Table",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/layout/container/Table.js",
  "doc": "<p>This layout allows you to easily render content into an HTML table. The total number of columns can be specified, and\nrowspan and colspan can be used to create complex layouts within the table. This class is intended to be extended or\ncreated via the <code>layout: {type: 'table'}</code> <a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">Ext.container.Container.layout</a> config, and should generally not\nneed to be created directly via the new keyword.</p>\n\n<p>Note that when creating a layout via config, the layout-specific config properties must be passed in via the <a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">Ext.container.Container.layout</a> object which will then be applied internally to the layout. In the case of\nTableLayout, the only valid layout config properties are <a href=\"#/api/Ext.layout.container.Table-cfg-columns\" rel=\"Ext.layout.container.Table-cfg-columns\" class=\"docClass\">columns</a> and <a href=\"#/api/Ext.layout.container.Table-cfg-tableAttrs\" rel=\"Ext.layout.container.Table-cfg-tableAttrs\" class=\"docClass\">tableAttrs</a>. However, the items\nadded to a TableLayout can supply the following table-specific config properties:</p>\n\n<ul>\n<li><strong>rowspan</strong> Applied to the table cell containing the item.</li>\n<li><strong>colspan</strong> Applied to the table cell containing the item.</li>\n<li><strong>cellId</strong> An id applied to the table cell containing the item.</li>\n<li><strong>cellCls</strong> A CSS class name added to the table cell containing the item.</li>\n</ul>\n\n\n<p>The basic concept of building up a TableLayout is conceptually very similar to building up a standard HTML table. You\nsimply add each panel (or \"cell\") that you want to include along with any span attributes specified as the special\nconfig properties of rowspan and colspan which work exactly like their HTML counterparts. Rather than explicitly\ncreating and nesting rows and columns as you would in HTML, you simply specify the total column count in the\nlayoutConfig and start adding panels in their natural order from left to right, top to bottom. The layout will\nautomatically figure out, based on the column count, rowspans and colspans, how to position each panel within the\ntable. Just like with HTML tables, your rowspans and colspans must add up correctly in your overall layout or you'll\nend up with missing and/or extra cells! Example usage:</p>\n\n<pre class=\"inline-example\"><code>Ext.create('Ext.panel.Panel', {\n    title: 'Table Layout',\n    width: 300,\n    height: 150,\n    layout: {\n        type: 'table',\n        // The total column count must be specified here\n        columns: 3\n    },\n    defaults: {\n        // applied to each contained panel\n        bodyStyle: 'padding:20px'\n    },\n    items: [{\n        html: 'Cell A content',\n        rowspan: 2\n    },{\n        html: 'Cell B content',\n        colspan: 2\n    },{\n        html: 'Cell C content',\n        cellCls: 'highlight'\n    },{\n        html: 'Cell D content'\n    }],\n    renderTo: Ext.getBody()\n});\n</code></pre>\n",
  "alternateClassNames": [
    "Ext.layout.TableLayout"
  ]
});