Ext.data.JsonP.Ext_util_Region({
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
        "inheritable": false,
        "linenr": 27,
        "owner": "Ext.util.Region",
        "html_filename": "Region.html",
        "href": "Region.html#Ext-util-Region-method-from",
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
            "name": "o",
            "doc": "<p>An object with <code>top</code>, <code>right</code>, <code>bottom</code> and <code>left</code> properties.</p>\n"
          }
        ],
        "alias": null,
        "name": "from",
        "shortDoc": "Creates a Region from a \"box\" Object which contains four numeric properties top, right, bottom and left. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Region.js",
        "doc": "<p>Creates a Region from a \"box\" Object which contains four numeric properties <code>top</code>, <code>right</code>, <code>bottom</code> and <code>left</code>.</p>\n",
        "return": {
          "type": "Ext.util.Region",
          "properties": null,
          "name": "return",
          "doc": "<p>region The Region constructed based on the passed object</p>\n"
        }
      },
      {
        "static": true,
        "inheritable": false,
        "linenr": 17,
        "owner": "Ext.util.Region",
        "html_filename": "Region.html",
        "href": "Region.html#Ext-util-Region-method-getRegion",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/HTMLElement/Ext.Element",
            "properties": [

            ],
            "optional": false,
            "name": "el",
            "doc": "<p>An element ID, htmlElement or <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> representing an element in the document.</p>\n"
          }
        ],
        "alias": null,
        "name": "getRegion",
        "shortDoc": "Retrieves an Ext.util.Region for a particular element. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Region.js",
        "doc": "<p>Retrieves an <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Ext.util.Region</a> for a particular element.</p>\n",
        "return": {
          "type": "Ext.util.Region",
          "properties": null,
          "name": "return",
          "doc": "<p>region</p>\n"
        }
      }
    ],
    "property": [

    ]
  },
  "extends": "Object",
  "html_filename": "Region.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "Region.html#Ext-util-Region",
  "subclasses": [
    "Ext.util.Point"
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
        "linenr": 40,
        "owner": "Ext.util.Region",
        "html_filename": "Region.html",
        "href": "Region.html#Ext-util-Region-method-constructor",
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
            "name": "top",
            "doc": "<p>Top The topmost pixel of the Region.</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "right",
            "doc": "<p>Right The rightmost pixel of the Region.</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "bottom",
            "doc": "<p>Bottom The bottom pixel of the Region.</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "left",
            "doc": "<p>Left The leftmost pixel of the Region.</p>\n"
          }
        ],
        "alias": null,
        "name": "constructor",
        "shortDoc": "Creates a region from the bounding sides. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Region.js",
        "doc": "<p>Creates a region from the bounding sides.</p>\n",
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
        "linenr": 116,
        "owner": "Ext.util.Region",
        "html_filename": "Region.html",
        "href": "Region.html#Ext-util-Region-method-adjust",
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
            "name": "top",
            "doc": "<p>top offset</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "right",
            "doc": "<p>right offset</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "bottom",
            "doc": "<p>bottom offset</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "left",
            "doc": "<p>left offset</p>\n"
          }
        ],
        "alias": null,
        "name": "adjust",
        "shortDoc": "Modifies the current region to be adjusted by offsets. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Region.js",
        "doc": "<p>Modifies the current region to be adjusted by offsets.</p>\n",
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
        "linenr": 102,
        "owner": "Ext.util.Region",
        "html_filename": "Region.html",
        "href": "Region.html#Ext-util-Region-method-constrainTo",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.util.Region",
            "properties": [

            ],
            "optional": false,
            "name": "targetRegion",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "constrainTo",
        "shortDoc": "Modifies the current region to be constrained to the targetRegion. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Region.js",
        "doc": "<p>Modifies the current region to be constrained to the targetRegion.</p>\n",
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
        "linenr": 55,
        "owner": "Ext.util.Region",
        "html_filename": "Region.html",
        "href": "Region.html#Ext-util-Region-method-contains",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.util.Region",
            "properties": [

            ],
            "optional": false,
            "name": "region",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "contains",
        "shortDoc": "Checks if this region completely contains the region that is passed in. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Region.js",
        "doc": "<p>Checks if this region completely contains the region that is passed in.</p>\n",
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
        "linenr": 313,
        "owner": "Ext.util.Region",
        "html_filename": "Region.html",
        "href": "Region.html#Ext-util-Region-method-copy",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "copy",
        "shortDoc": "Create a copy of this Region. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Region.js",
        "doc": "<p>Create a copy of this Region.</p>\n",
        "return": {
          "type": "Ext.util.Region",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 321,
        "owner": "Ext.util.Region",
        "html_filename": "Region.html",
        "href": "Region.html#Ext-util-Region-method-copyFrom",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.util.Region",
            "properties": [

            ],
            "optional": false,
            "name": "p",
            "doc": "<p>The region to copy from.</p>\n"
          }
        ],
        "alias": null,
        "name": "copyFrom",
        "shortDoc": "Copy the values of another Region to this Region ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Region.js",
        "doc": "<p>Copy the values of another Region to this Region</p>\n",
        "return": {
          "type": "Ext.util.Region",
          "properties": null,
          "name": "return",
          "doc": "<p>This Region</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 379,
        "owner": "Ext.util.Region",
        "html_filename": "Region.html",
        "href": "Region.html#Ext-util-Region-method-equals",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.util.Region",
            "properties": [

            ],
            "optional": false,
            "name": "region",
            "doc": "<p>The region to compare with</p>\n"
          }
        ],
        "alias": null,
        "name": "equals",
        "shortDoc": "Check whether this region is equivalent to the given region ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Region.js",
        "doc": "<p>Check whether this region is equivalent to the given region</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 132,
        "owner": "Ext.util.Region",
        "html_filename": "Region.html",
        "href": "Region.html#Ext-util-Region-method-getOutOfBoundOffset",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "axis",
            "doc": "<p>(optional)</p>\n"
          },
          {
            "type": "Ext.util.Point",
            "properties": [

            ],
            "optional": true,
            "name": "p",
            "doc": "<p>(optional) the point</p>\n"
          }
        ],
        "alias": null,
        "name": "getOutOfBoundOffset",
        "shortDoc": "Get the offset amount of a point outside the region ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Region.js",
        "doc": "<p>Get the offset amount of a point outside the region</p>\n",
        "return": {
          "type": "Ext.util.Offset",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 155,
        "owner": "Ext.util.Region",
        "html_filename": "Region.html",
        "href": "Region.html#Ext-util-Region-method-getOutOfBoundOffsetX",
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
            "name": "p",
            "doc": "<p>the offset</p>\n"
          }
        ],
        "alias": null,
        "name": "getOutOfBoundOffsetX",
        "shortDoc": "Get the offset amount on the x-axis ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Region.js",
        "doc": "<p>Get the offset amount on the x-axis</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 170,
        "owner": "Ext.util.Region",
        "html_filename": "Region.html",
        "href": "Region.html#Ext-util-Region-method-getOutOfBoundOffsetY",
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
            "name": "p",
            "doc": "<p>the offset</p>\n"
          }
        ],
        "alias": null,
        "name": "getOutOfBoundOffsetY",
        "shortDoc": "Get the offset amount on the y-axis ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Region.js",
        "doc": "<p>Get the offset amount on the y-axis</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 68,
        "owner": "Ext.util.Region",
        "html_filename": "Region.html",
        "href": "Region.html#Ext-util-Region-method-intersect",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.util.Region",
            "properties": [

            ],
            "optional": false,
            "name": "region",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "intersect",
        "shortDoc": "Checks if this region intersects the region passed in. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Region.js",
        "doc": "<p>Checks if this region intersects the region passed in.</p>\n",
        "return": {
          "type": "Ext.util.Region/Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>Returns the intersected region or false if there is no intersection.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 185,
        "owner": "Ext.util.Region",
        "html_filename": "Region.html",
        "href": "Region.html#Ext-util-Region-method-isOutOfBound",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "axis",
            "doc": "<p>(optional)</p>\n"
          },
          {
            "type": "Ext.util.Point/Number",
            "properties": [

            ],
            "optional": true,
            "name": "p",
            "doc": "<p>(optional) the point / offset</p>\n"
          }
        ],
        "alias": null,
        "name": "isOutOfBound",
        "shortDoc": "Check whether the point / offset is out of bound ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Region.js",
        "doc": "<p>Check whether the point / offset is out of bound</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 204,
        "owner": "Ext.util.Region",
        "html_filename": "Region.html",
        "href": "Region.html#Ext-util-Region-method-isOutOfBoundX",
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
            "name": "p",
            "doc": "<p>the offset</p>\n"
          }
        ],
        "alias": null,
        "name": "isOutOfBoundX",
        "shortDoc": "Check whether the offset is out of bound in the x-axis ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Region.js",
        "doc": "<p>Check whether the offset is out of bound in the x-axis</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 213,
        "owner": "Ext.util.Region",
        "html_filename": "Region.html",
        "href": "Region.html#Ext-util-Region-method-isOutOfBoundY",
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
            "name": "p",
            "doc": "<p>the offset</p>\n"
          }
        ],
        "alias": null,
        "name": "isOutOfBoundY",
        "shortDoc": "Check whether the offset is out of bound in the y-axis ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Region.js",
        "doc": "<p>Check whether the offset is out of bound in the y-axis</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 365,
        "owner": "Ext.util.Region",
        "html_filename": "Region.html",
        "href": "Region.html#Ext-util-Region-method-round",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "round",
        "shortDoc": "Round all the properties of this region ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Region.js",
        "doc": "<p>Round all the properties of this region</p>\n",
        "return": {
          "type": "Ext.util.Region",
          "properties": null,
          "name": "return",
          "doc": "<p>this This Region</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 344,
        "owner": "Ext.util.Region",
        "html_filename": "Region.html",
        "href": "Region.html#Ext-util-Region-method-translateBy",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.util.Offset/Object",
            "properties": [

            ],
            "optional": false,
            "name": "offset",
            "doc": "<p>Object containing the <code>x</code> and <code>y</code> properties.\nOr the x value is using the two argument form.</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "The",
            "doc": "<p>y value unless using an Offset object.</p>\n"
          }
        ],
        "alias": null,
        "name": "translateBy",
        "shortDoc": "Translate this region by the given offset amount ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Region.js",
        "doc": "<p>Translate this region by the given offset amount</p>\n",
        "return": {
          "type": "Ext.util.Region",
          "properties": null,
          "name": "return",
          "doc": "<p>this This Region</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 88,
        "owner": "Ext.util.Region",
        "html_filename": "Region.html",
        "href": "Region.html#Ext-util-Region-method-union",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.util.Region",
            "properties": [

            ],
            "optional": false,
            "name": "region",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "union",
        "shortDoc": "Returns the smallest region that contains the current AND targetRegion. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Region.js",
        "doc": "<p>Returns the smallest region that contains the current AND targetRegion.</p>\n",
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
  "name": "Ext.util.Region",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Region.js",
  "doc": "<p>This class represents a rectangular region in X,Y space, and performs geometric\ntransformations or tests upon the region.</p>\n\n\n<p>This class may be used to compare the document regions occupied by elements.</p>\n\n",
  "alternateClassNames": [

  ]
});