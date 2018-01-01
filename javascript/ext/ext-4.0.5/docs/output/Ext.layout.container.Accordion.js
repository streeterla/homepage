Ext.data.JsonP.Ext_layout_container_Accordion({
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
  "extends": "Ext.layout.container.VBox",
  "html_filename": "Accordion.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "Accordion.html#Ext-layout-container-Accordion",
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
        "linenr": 85,
        "owner": "Ext.layout.container.Accordion",
        "html_filename": "Accordion.html",
        "href": "Accordion.html#Ext-layout-container-Accordion-cfg-activeOnTop",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "activeOnTop",
        "shortDoc": "Not implemented in PR4. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/layout/container/Accordion.js",
        "doc": "<p><b>Not implemented in PR4.</b></p>\n\n\n<p>Only valid when {@link #multi\" is <code>false</code>.</p>\n\n\n<p>True to swap the position of each panel as it is expanded so that it becomes the first item in the container,\nfalse to keep the panels in the rendered order. <b>This is NOT compatible with \"animate:true\"</b> (defaults to false).</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 47,
        "owner": "Ext.layout.container.VBox",
        "html_filename": "VBox.html",
        "href": "VBox.html#Ext-layout-container-VBox-cfg-align",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "align",
        "shortDoc": "Controls how the child items of the container are aligned. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/layout/container/VBox.js",
        "doc": "<p>Controls how the child items of the container are aligned. Acceptable configuration values for this property are:</p>\n\n<ul>\n<li><strong>left</strong> : <strong>Default</strong> child items are aligned horizontally at the <strong>left</strong> side of the container</li>\n<li><strong>center</strong> : child items are aligned horizontally at the <strong>mid-width</strong> of the container</li>\n<li><strong>stretch</strong> : child items are stretched horizontally to fill the width of the container</li>\n<li><strong>stretchmax</strong> : child items are stretched horizontally to the size of the largest item.</li>\n</ul>\n\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 78,
        "owner": "Ext.layout.container.Accordion",
        "html_filename": "Accordion.html",
        "href": "Accordion.html#Ext-layout-container-Accordion-cfg-animate",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "animate",
        "shortDoc": "True to slide the contained panels open and closed during expand/collapse using animation, false to open and\nclose di...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/layout/container/Accordion.js",
        "doc": "<p>True to slide the contained panels open and closed during expand/collapse using animation, false to open and\nclose directly with no animation (defaults to <code>true</code>). Note: The layout performs animated collapsing\nand expanding, <i>not</i> the child Panels.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 52,
        "owner": "Ext.layout.container.Accordion",
        "html_filename": "Accordion.html",
        "href": "Accordion.html#Ext-layout-container-Accordion-cfg-autoWidth",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "autoWidth",
        "shortDoc": "This config is ignored in ExtJS 4.x. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/layout/container/Accordion.js",
        "doc": "<p><b>This config is ignored in ExtJS 4.x.</b></p>\n\n\n<p>Child Panels have their width actively managed to fit within the accordion's width.</p>\n"
      },
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
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 134,
        "owner": "Ext.layout.container.Box",
        "html_filename": "Box.html",
        "href": "Box.html#Ext-layout-container-Box-cfg-clearInnerCtOnLayout",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "clearInnerCtOnLayout",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/layout/container/Box.js",
        "doc": "\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 72,
        "owner": "Ext.layout.container.Accordion",
        "html_filename": "Accordion.html",
        "href": "Accordion.html#Ext-layout-container-Accordion-cfg-collapseFirst",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "collapseFirst",
        "shortDoc": "True to make sure the collapse/expand toggle button always renders first (to the left of) any other tools\nin the cont...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/layout/container/Accordion.js",
        "doc": "<p>True to make sure the collapse/expand toggle button always renders first (to the left of) any other tools\nin the contained Panels' title bars, false to render it last (defaults to false).</p>\n"
      },
      {
        "static": false,
        "type": "Object",
        "inheritable": false,
        "properties": null,
        "linenr": 32,
        "owner": "Ext.layout.container.Box",
        "html_filename": "Box.html",
        "href": "Box.html#Ext-layout-container-Box-cfg-defaultMargins",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "defaultMargins",
        "shortDoc": "If the individual contained items do not have a margins\nproperty specified or margin specified via CSS, the default m...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/layout/container/Box.js",
        "doc": "<p>If the individual contained items do not have a <tt>margins</tt>\nproperty specified or margin specified via CSS, the default margins from this property will be\napplied to each item.</p>\n\n\n<br><p>This property may be specified as an object containing margins\n\n\n<p>to apply in the format:</p></p>\n\n<pre><code>{\n    top: (top margin),\n    right: (right margin),\n    bottom: (bottom margin),\n    left: (left margin)\n}</code></pre>\n\n\n<p>This property may also be specified as a string containing\nspace-separated, numeric margin values. The order of the sides associated\nwith each value matches the way CSS processes margin values:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li>If there is only one value, it applies to all sides.</li>\n<li>If there are two values, the top and bottom borders are set to the\nfirst value and the right and left are set to the second.</li>\n<li>If there are three values, the top is set to the first value, the left\nand right are set to the second, and the bottom is set to the third.</li>\n<li>If there are four values, they apply to the top, right, bottom, and\nleft, respectively.</li>\n</ul></div>\n\n\n<p>Defaults to:</p>\n\n\n<pre><code>{top:0, right:0, bottom:0, left:0}\n</code></pre>\n\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 46,
        "owner": "Ext.layout.container.Accordion",
        "html_filename": "Accordion.html",
        "href": "Accordion.html#Ext-layout-container-Accordion-cfg-fill",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "fill",
        "shortDoc": "True to adjust the active item's height to fill the available space in the container, false to use the\nitem's current...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/layout/container/Accordion.js",
        "doc": "<p>True to adjust the active item's height to fill the available space in the container, false to use the\nitem's current height, or auto height if not explicitly set (defaults to true).</p>\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 102,
        "owner": "Ext.layout.container.Box",
        "html_filename": "Box.html",
        "href": "Box.html#Ext-layout-container-Box-cfg-flex",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "flex",
        "shortDoc": "This configuration option is to be applied to child items of the container managed\nby this layout. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/layout/container/Box.js",
        "doc": "<p>This configuration option is to be applied to <b>child <tt>items</tt></b> of the container managed\nby this layout. Each child item with a <tt>flex</tt> property will be flexed <b>horizontally</b>\naccording to each item's <b>relative</b> <tt>flex</tt> value compared to the sum of all items with\na <tt>flex</tt> value specified.  Any child items that have either a <tt>flex = 0</tt> or\n<tt>flex = undefined</tt> will not be 'flexed' (the initial size will not be changed).</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 66,
        "owner": "Ext.layout.container.Accordion",
        "html_filename": "Accordion.html",
        "href": "Accordion.html#Ext-layout-container-Accordion-cfg-hideCollapseTool",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "hideCollapseTool",
        "shortDoc": "True to hide the contained Panels' collapse/expand toggle buttons, false to display them (defaults to false). ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/layout/container/Accordion.js",
        "doc": "<p>True to hide the contained Panels' collapse/expand toggle buttons, false to display them (defaults to false).\nWhen set to true, <a href=\"#/api/Ext.layout.container.Accordion-cfg-titleCollapse\" rel=\"Ext.layout.container.Accordion-cfg-titleCollapse\" class=\"docClass\">titleCollapse</a> is automatically set to <code>true</code>.</p>\n"
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
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 93,
        "owner": "Ext.layout.container.Accordion",
        "html_filename": "Accordion.html",
        "href": "Accordion.html#Ext-layout-container-Accordion-cfg-multi",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "multi",
        "shortDoc": "Defaults to false. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/layout/container/Accordion.js",
        "doc": "<p>Defaults to <code>false</code>. Set to <code>true</code> to enable multiple accordion items to be open at once.</p>\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 89,
        "owner": "Ext.layout.container.Box",
        "html_filename": "Box.html",
        "href": "Box.html#Ext-layout-container-Box-cfg-pack",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "pack",
        "shortDoc": "Controls how the child items of the container are packed together. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/layout/container/Box.js",
        "doc": "<p>Controls how the child items of the container are packed together. Acceptable configuration values\nfor this property are:</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b><tt>start</tt></b> : <b>Default</b><div class=\"sub-desc\">child items are packed together at\n<b>left</b> side of container</div></li>\n<li><b><tt>center</tt></b> : <div class=\"sub-desc\">child items are packed together at\n<b>mid-width</b> of container</div></li>\n<li><b><tt>end</tt></b> : <div class=\"sub-desc\">child items are packed together at <b>right</b>\nside of container</div></li>\n</ul></div>\n\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 68,
        "owner": "Ext.layout.container.Box",
        "html_filename": "Box.html",
        "href": "Box.html#Ext-layout-container-Box-cfg-padding",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "padding",
        "shortDoc": "Sets the padding to be applied to all child items managed by this layout. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/layout/container/Box.js",
        "doc": "<p>Sets the padding to be applied to all child items managed by this layout.</p>\n\n\n<p>This property must be specified as a string containing\nspace-separated, numeric padding values. The order of the sides associated\nwith each value matches the way CSS processes padding values:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li>If there is only one value, it applies to all sides.</li>\n<li>If there are two values, the top and bottom borders are set to the\nfirst value and the right and left are set to the second.</li>\n<li>If there are three values, the top is set to the first value, the left\nand right are set to the second, and the bottom is set to the third.</li>\n<li>If there are four values, they apply to the top, right, bottom, and\nleft, respectively.</li>\n</ul></div>\n\n\n<p>Defaults to: <code>\"0\"</code></p>\n\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 126,
        "owner": "Ext.layout.container.Box",
        "html_filename": "Box.html",
        "href": "Box.html#Ext-layout-container-Box-cfg-shrinkToFit",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "shrinkToFit",
        "shortDoc": "True (the default) to allow fixed size components to shrink (limited to their\nminimum size) to avoid overflow. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/layout/container/Box.js",
        "doc": "<p>True (the default) to allow fixed size components to shrink (limited to their\nminimum size) to avoid overflow. False to preserve fixed sizes even if they cause\noverflow.</p>\n"
      },
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 58,
        "owner": "Ext.layout.container.Accordion",
        "html_filename": "Accordion.html",
        "href": "Accordion.html#Ext-layout-container-Accordion-cfg-titleCollapse",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "cfg",
        "alias": null,
        "name": "titleCollapse",
        "shortDoc": "Not implemented in PR2. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/layout/container/Accordion.js",
        "doc": "<p><b>Not implemented in PR2.</b></p>\n\n\n<p>True to allow expand/collapse of each contained panel by clicking anywhere on the title bar, false to allow\nexpand/collapse only when the toggle tool button is clicked (defaults to true).  When set to false,\n<a href=\"#/api/Ext.layout.container.Accordion-cfg-hideCollapseTool\" rel=\"Ext.layout.container.Accordion-cfg-hideCollapseTool\" class=\"docClass\">hideCollapseTool</a> should be false also.</p>\n"
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
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 599,
        "owner": "Ext.layout.container.Box",
        "html_filename": "Box.html",
        "href": "Box.html#Ext-layout-container-Box-method-updateChildBoxes",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Object[]",
            "properties": [

            ],
            "optional": false,
            "name": "boxes",
            "doc": "<p>The box measurements</p>\n"
          }
        ],
        "alias": null,
        "name": "updateChildBoxes",
        "shortDoc": "Resizes and repositions each child component ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/layout/container/Box.js",
        "doc": "<p>Resizes and repositions each child component</p>\n",
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
    "Ext.layout.Layout",
    "Ext.layout.container.AbstractContainer",
    "Ext.layout.container.Container",
    "Ext.layout.container.Box",
    "Ext.layout.container.VBox"
  ],
  "alias": null,
  "name": "Ext.layout.container.Accordion",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/extjs/src/layout/container/Accordion.js",
  "doc": "<p>This is a layout that manages multiple Panels in an expandable accordion style such that only\n<strong>one Panel can be expanded at any given time</strong>. Each Panel has built-in support for expanding and collapsing.</p>\n\n<p>Note: Only Ext.Panels <strong>and all subclasses of <a href=\"#/api/Ext.panel.Panel\" rel=\"Ext.panel.Panel\" class=\"docClass\">Ext.panel.Panel</a></strong> may be used in an accordion layout Container.</p>\n\n<pre class=\"inline-example\"><code>Ext.create('Ext.panel.Panel', {\n    title: 'Accordion Layout',\n    width: 300,\n    height: 300,\n    layout:'accordion',\n    defaults: {\n        // applied to each contained panel\n        bodyStyle: 'padding:15px'\n    },\n    layoutConfig: {\n        // layout-specific configs go here\n        titleCollapse: false,\n        animate: true,\n        activeOnTop: true\n    },\n    items: [{\n        title: 'Panel 1',\n        html: 'Panel content!'\n    },{\n        title: 'Panel 2',\n        html: 'Panel content!'\n    },{\n        title: 'Panel 3',\n        html: 'Panel content!'\n    }],\n    renderTo: Ext.getBody()\n});\n</code></pre>\n",
  "alternateClassNames": [
    "Ext.layout.AccordionLayout"
  ]
});