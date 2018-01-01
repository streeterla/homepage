Ext.data.JsonP.Ext_util_Point({
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
        "linenr": 19,
        "owner": "Ext.util.Point",
        "html_filename": "Point.html",
        "href": "Point.html#Ext-util-Point-method-fromEvent",
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
            "name": "e",
            "doc": "<p>The event</p>\n"
          }
        ],
        "alias": null,
        "name": "fromEvent",
        "shortDoc": "Returns a new instance of Ext.util.Point base on the pageX / pageY values of the given event ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Point.js",
        "doc": "<p>Returns a new instance of <a href=\"#/api/Ext.util.Point\" rel=\"Ext.util.Point\" class=\"docClass\">Ext.util.Point</a> base on the pageX / pageY values of the given event</p>\n",
        "return": {
          "type": "undefined",
          "properties": null,
          "name": "return",
          "doc": "<p>Ext.util.Point</p>\n"
        }
      }
    ],
    "property": [

    ]
  },
  "extends": "Ext.util.Region",
  "html_filename": "Point.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "Point.html#Ext-util-Point",
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
        "linenr": 46,
        "owner": "Ext.util.Point",
        "html_filename": "Point.html",
        "href": "Point.html#Ext-util-Point-method-equals",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.util.Point/Object",
            "properties": [

            ],
            "optional": false,
            "name": "The",
            "doc": "<p>point to compare with, either an instance\nof <a href=\"#/api/Ext.util.Point\" rel=\"Ext.util.Point\" class=\"docClass\">Ext.util.Point</a> or an object with left and top properties</p>\n"
          }
        ],
        "alias": null,
        "name": "equals",
        "shortDoc": "Compare this point and another point ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Point.js",
        "doc": "<p>Compare this point and another point</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>Returns whether they are equivalent</p>\n"
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
        "linenr": 56,
        "owner": "Ext.util.Point",
        "html_filename": "Point.html",
        "href": "Point.html#Ext-util-Point-method-isWithin",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.util.Point/Object",
            "properties": [

            ],
            "optional": false,
            "name": "The",
            "doc": "<p>point to check with, either an instance\nof <a href=\"#/api/Ext.util.Point\" rel=\"Ext.util.Point\" class=\"docClass\">Ext.util.Point</a> or an object with left and top properties</p>\n"
          },
          {
            "type": "Object/Number",
            "properties": [

            ],
            "optional": false,
            "name": "threshold",
            "doc": "<p>Can be either an object with x and y properties or a number</p>\n"
          }
        ],
        "alias": null,
        "name": "isWithin",
        "shortDoc": "Whether the given point is not away from this point within the given threshold amount. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Point.js",
        "doc": "<p>Whether the given point is not away from this point within the given threshold amount.\nTODO: Rename this isNear.</p>\n",
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
        "linenr": 76,
        "owner": "Ext.util.Point",
        "html_filename": "Point.html",
        "href": "Point.html#Ext-util-Point-method-roundedEquals",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Ext.util.Point/Object",
            "properties": [

            ],
            "optional": false,
            "name": "The",
            "doc": "<p>point to compare with, either an instance\nof <a href=\"#/api/Ext.util.Point\" rel=\"Ext.util.Point\" class=\"docClass\">Ext.util.Point</a> or an object with x and y properties</p>\n"
          }
        ],
        "alias": null,
        "name": "roundedEquals",
        "shortDoc": "Compare this point with another point when the x and y values of both points are rounded. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Point.js",
        "doc": "<p>Compare this point with another point when the x and y values of both points are rounded. E.g:\n[100.3,199.8] will equals to [100, 200]</p>\n",
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
        "linenr": 37,
        "owner": "Ext.util.Point",
        "html_filename": "Point.html",
        "href": "Point.html#Ext-util-Point-method-toString",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "toString",
        "shortDoc": "Returns a human-eye-friendly string that represents this point,\nuseful for debugging ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Point.js",
        "doc": "<p>Returns a human-eye-friendly string that represents this point,\nuseful for debugging</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 87,
        "owner": "Ext.util.Point",
        "html_filename": "Point.html",
        "href": "Point.html#Ext-util-Point-method-translate",
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
        "name": "translate",
        "shortDoc": "Translate this region by the given offset amount. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Point.js",
        "doc": "<p>Translate this region by the given offset amount. TODO: Either use translate or translateBy!</p>\n",
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
    "Ext.util.Region"
  ],
  "alias": null,
  "name": "Ext.util.Point",
  "mixins": [

  ],
  "code_type": "ext_define",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/src/util/Point.js",
  "doc": "<p>Represents a 2D point with x and y properties, useful for comparison and instantiation\nfrom an event:</p>\n\n<pre><code>var point = Ext.util.Point.fromEvent(e);\n</code></pre>\n\n",
  "alternateClassNames": [

  ]
});