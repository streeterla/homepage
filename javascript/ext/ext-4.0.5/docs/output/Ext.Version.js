Ext.data.JsonP.Ext_Version({
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
        "linenr": 212,
        "owner": "Ext.Version",
        "html_filename": "Version.html",
        "href": "Version.html#Ext-Version-method-compare",
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
            "name": "current",
            "doc": "<p>The current version to compare to</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "target",
            "doc": "<p>The target version to compare to</p>\n"
          }
        ],
        "alias": null,
        "name": "compare",
        "shortDoc": "Compare 2 specified versions, starting from left to right. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/version/Version.js",
        "doc": "<p>Compare 2 specified versions, starting from left to right. If a part contains special version strings,\nthey are handled in the following order:\n'dev' &lt; 'alpha' = 'a' &lt; 'beta' = 'b' &lt; 'RC' = 'rc' &lt; '#' &lt; 'pl' = 'p' &lt; 'anything else'</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>Returns -1 if the current version is smaller than the target version, 1 if greater, and 0 if they're equivalent</p>\n"
        }
      },
      {
        "static": true,
        "inheritable": false,
        "linenr": 201,
        "owner": "Ext.Version",
        "html_filename": "Version.html",
        "href": "Version.html#Ext-Version-method-getComponentValue",
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
            "name": "value",
            "doc": "<p>The value to convert</p>\n"
          }
        ],
        "alias": null,
        "name": "getComponentValue",
        "shortDoc": "Converts a version component to a comparable value ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/version/Version.js",
        "doc": "<p>Converts a version component to a comparable value</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      }
    ],
    "property": [

    ]
  },
  "extends": null,
  "html_filename": "Version.html",
  "allMixins": [

  ],
  "docauthor": "Jacky Nguyen <jacky@sencha.com>",
  "href": "Version.html#Ext-Version",
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
        "linenr": 35,
        "owner": "Ext.Version",
        "html_filename": "Version.html",
        "href": "Version.html#Ext-Version-method-constructor",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/Number",
            "properties": [

            ],
            "optional": false,
            "name": "version",
            "doc": "<p>The version number in the follow standard format: major[.minor[.patch[.build[release]]]]\nExamples: 1.0 or 1.2.3beta or 1.2.3.4RC</p>\n"
          }
        ],
        "alias": null,
        "name": "constructor",
        "shortDoc": " ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/version/Version.js",
        "doc": "\n",
        "return": {
          "type": "Ext.Version",
          "properties": null,
          "name": "return",
          "doc": "<p>this</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 283,
        "owner": "Ext.Version",
        "html_filename": "Version.html",
        "href": "Version.html#Ext-Version-method-deprecate",
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
            "name": "packageName",
            "doc": "<p>The package name</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "since",
            "doc": "<p>The last version before it's deprecated</p>\n"
          },
          {
            "type": "Function",
            "properties": [

            ],
            "optional": false,
            "name": "closure",
            "doc": "<p>The callback function to be executed with the specified version is less than the current version</p>\n"
          },
          {
            "type": "Object",
            "properties": [

            ],
            "optional": false,
            "name": "scope",
            "doc": "<p>The execution scope (<tt>this</tt>) if the closure</p>\n"
          }
        ],
        "alias": null,
        "name": "deprecate",
        "shortDoc": "Create a closure for deprecated code. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/version/Version.js",
        "doc": "<p>Create a closure for deprecated code.</p>\n\n<pre><code>// This means Ext.oldMethod is only supported in 4.0.0beta and older.\n// If Ext.getVersion('extjs') returns a version that is later than '4.0.0beta', for example '4.0.0RC',\n// the closure will not be invoked\nExt.deprecate('extjs', '4.0.0beta', function() {\n    Ext.oldMethod = Ext.newMethod;\n\n    ...\n});\n</code></pre>\n",
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
        "linenr": 144,
        "owner": "Ext.Version",
        "html_filename": "Version.html",
        "href": "Version.html#Ext-Version-method-equals",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/Number",
            "properties": [

            ],
            "optional": false,
            "name": "target",
            "doc": "<p>The version to compare with</p>\n"
          }
        ],
        "alias": null,
        "name": "equals",
        "shortDoc": "Returns whether this version equals to the supplied argument ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/version/Version.js",
        "doc": "<p>Returns whether this version equals to the supplied argument</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if this version equals to the target, false otherwise</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 110,
        "owner": "Ext.Version",
        "html_filename": "Version.html",
        "href": "Version.html#Ext-Version-method-getBuild",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getBuild",
        "shortDoc": "Returns the build component value ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/version/Version.js",
        "doc": "<p>Returns the build component value</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>build</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 86,
        "owner": "Ext.Version",
        "html_filename": "Version.html",
        "href": "Version.html#Ext-Version-method-getMajor",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getMajor",
        "shortDoc": "Returns the major component value ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/version/Version.js",
        "doc": "<p>Returns the major component value</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>major</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 94,
        "owner": "Ext.Version",
        "html_filename": "Version.html",
        "href": "Version.html#Ext-Version-method-getMinor",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getMinor",
        "shortDoc": "Returns the minor component value ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/version/Version.js",
        "doc": "<p>Returns the minor component value</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>minor</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 102,
        "owner": "Ext.Version",
        "html_filename": "Version.html",
        "href": "Version.html#Ext-Version-method-getPatch",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getPatch",
        "shortDoc": "Returns the patch component value ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/version/Version.js",
        "doc": "<p>Returns the patch component value</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>patch</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 118,
        "owner": "Ext.Version",
        "html_filename": "Version.html",
        "href": "Version.html#Ext-Version-method-getRelease",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getRelease",
        "shortDoc": "Returns the release component value ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/version/Version.js",
        "doc": "<p>Returns the release component value</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>release</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 178,
        "owner": "Ext.Version",
        "html_filename": "Version.html",
        "href": "Version.html#Ext-Version-method-getShortVersion",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "getShortVersion",
        "shortDoc": "Returns shortVersion version without dots and release ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/version/Version.js",
        "doc": "<p>Returns shortVersion version without dots and release</p>\n",
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
        "linenr": 268,
        "owner": "Ext.Version",
        "html_filename": "Version.html",
        "href": "Version.html#Ext-Version-method-getVersion",
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
            "name": "packageName",
            "doc": "<p>(Optional) The package name, for example: 'core', 'touch', 'extjs'</p>\n"
          }
        ],
        "alias": null,
        "name": "getVersion",
        "shortDoc": "Get the version number of the supplied package name; will return the last registered version\n(last Ext.setVersion cal...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/version/Version.js",
        "doc": "<p>Get the version number of the supplied package name; will return the last registered version\n(last Ext.setVersion call) if there's no package name given.</p>\n",
        "return": {
          "type": "Ext.Version",
          "properties": null,
          "name": "return",
          "doc": "<p>The version</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 126,
        "owner": "Ext.Version",
        "html_filename": "Version.html",
        "href": "Version.html#Ext-Version-method-isGreaterThan",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/Number",
            "properties": [

            ],
            "optional": false,
            "name": "target",
            "doc": "<p>The version to compare with</p>\n"
          }
        ],
        "alias": null,
        "name": "isGreaterThan",
        "shortDoc": "Returns whether this version if greater than the supplied argument ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/version/Version.js",
        "doc": "<p>Returns whether this version if greater than the supplied argument</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if this version if greater than the target, false otherwise</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 135,
        "owner": "Ext.Version",
        "html_filename": "Version.html",
        "href": "Version.html#Ext-Version-method-isLessThan",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/Number",
            "properties": [

            ],
            "optional": false,
            "name": "target",
            "doc": "<p>The version to compare with</p>\n"
          }
        ],
        "alias": null,
        "name": "isLessThan",
        "shortDoc": "Returns whether this version if smaller than the supplied argument ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/version/Version.js",
        "doc": "<p>Returns whether this version if smaller than the supplied argument</p>\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if this version if smaller than the target, false otherwise</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 153,
        "owner": "Ext.Version",
        "html_filename": "Version.html",
        "href": "Version.html#Ext-Version-method-match",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/Number",
            "properties": [

            ],
            "optional": false,
            "name": "target",
            "doc": "<p>The version to compare with</p>\n"
          }
        ],
        "alias": null,
        "name": "match",
        "shortDoc": "Returns whether this version matches the supplied argument. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/version/Version.js",
        "doc": "<p>Returns whether this version matches the supplied argument. Example:</p>\n\n<pre><code>var version = new Ext.Version('1.0.2beta');\nconsole.log(version.match(1)); // True\nconsole.log(version.match(1.0)); // True\nconsole.log(version.match('1.0.2')); // True\nconsole.log(version.match('1.0.2RC')); // False\n</code></pre>\n\n",
        "return": {
          "type": "Boolean",
          "properties": null,
          "name": "return",
          "doc": "<p>True if this version matches the target, false otherwise</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 254,
        "owner": "Ext.Version",
        "html_filename": "Version.html",
        "href": "Version.html#Ext-Version-method-setVersion",
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
            "name": "packageName",
            "doc": "<p>The package name, for example: 'core', 'touch', 'extjs'</p>\n"
          },
          {
            "type": "String/Ext.Version",
            "properties": [

            ],
            "optional": false,
            "name": "version",
            "doc": "<p>The version, for example: '1.2.3alpha', '2.4.0-dev'</p>\n"
          }
        ],
        "alias": null,
        "name": "setVersion",
        "shortDoc": "Set version number for the given package name. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/version/Version.js",
        "doc": "<p>Set version number for the given package name.</p>\n",
        "return": {
          "type": "Ext",
          "properties": null,
          "name": "return",
          "doc": "\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 170,
        "owner": "Ext.Version",
        "html_filename": "Version.html",
        "href": "Version.html#Ext-Version-method-toArray",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "toArray",
        "shortDoc": "Returns this format: [major, minor, patch, build, release]. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/version/Version.js",
        "doc": "<p>Returns this format: [major, minor, patch, build, release]. Useful for comparison</p>\n",
        "return": {
          "type": "Number[]",
          "properties": null,
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
  "author": "Jacky Nguyen <jacky@sencha.com>",
  "superclasses": [

  ],
  "alias": null,
  "name": "Ext.Version",
  "mixins": [

  ],
  "code_type": "nop",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/version/Version.js",
  "doc": "<p>A utility class that wrap around a string version number and provide convenient\nmethod to perform comparison. See also: <a href=\"#/api/Ext.Version-method-compare\" rel=\"Ext.Version-method-compare\" class=\"docClass\">compare</a>. Example:</p>\n\n<pre><code>var version = new Ext.Version('1.0.2beta');\nconsole.log(\"Version is \" + version); // Version is 1.0.2beta\n\nconsole.log(version.getMajor()); // 1\nconsole.log(version.getMinor()); // 0\nconsole.log(version.getPatch()); // 2\nconsole.log(version.getBuild()); // 0\nconsole.log(version.getRelease()); // beta\n\nconsole.log(version.isGreaterThan('1.0.1')); // True\nconsole.log(version.isGreaterThan('1.0.2alpha')); // True\nconsole.log(version.isGreaterThan('1.0.2RC')); // False\nconsole.log(version.isGreaterThan('1.0.2')); // False\nconsole.log(version.isLessThan('1.0.2')); // True\n\nconsole.log(version.match(1.0)); // True\nconsole.log(version.match('1.0.2')); // True\n</code></pre>\n",
  "alternateClassNames": [

  ]
});