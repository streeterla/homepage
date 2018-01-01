Ext.data.JsonP.Ext_util_Format({
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
  "html_filename": "Format.html",
  "allMixins": [

  ],
  "docauthor": null,
  "href": "Format.html#Ext-util-Format",
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
        "linenr": 442,
        "owner": "Ext.util.Format",
        "html_filename": "Format.html",
        "href": "Format.html#Ext-util-Format-method-capitalize",
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
            "name": "string",
            "doc": "\n"
          }
        ],
        "alias": {
          "cls": "Ext.String",
          "tagname": "alias",
          "member": "capitalize",
          "doc": null
        },
        "name": "capitalize",
        "shortDoc": "Alias for Ext.String.capitalize. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/Format.js",
        "doc": "<p>Alias for <a href=\"#/api/Ext.String-method-capitalize\" rel=\"Ext.String-method-capitalize\" class=\"docClass\">Ext.String.capitalize</a>.</p>\n\n<p>Capitalize the given string</p>\n",
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
        "linenr": 165,
        "owner": "Ext.util.Format",
        "html_filename": "Format.html",
        "href": "Format.html#Ext-util-Format-method-currency",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Number/String",
            "properties": [

            ],
            "optional": false,
            "name": "value",
            "doc": "<p>The numeric value to format</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "sign",
            "doc": "<p>The currency sign to use (defaults to <a href=\"#/api/Ext.util.Format-property-currencySign\" rel=\"Ext.util.Format-property-currencySign\" class=\"docClass\">currencySign</a>)</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "decimals",
            "doc": "<p>The number of decimals to use for the currency (defaults to <a href=\"#/api/Ext.util.Format-property-currencyPrecision\" rel=\"Ext.util.Format-property-currencyPrecision\" class=\"docClass\">currencyPrecision</a>)</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": false,
            "name": "end",
            "doc": "<p>True if the currency sign should be at the end of the string (defaults to <a href=\"#/api/Ext.util.Format-property-currencyAtEnd\" rel=\"Ext.util.Format-property-currencyAtEnd\" class=\"docClass\">currencyAtEnd</a>)</p>\n"
          }
        ],
        "alias": null,
        "name": "currency",
        "shortDoc": "Format a number as a currency ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/Format.js",
        "doc": "<p>Format a number as a currency</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The formatted currency string</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 195,
        "owner": "Ext.util.Format",
        "html_filename": "Format.html",
        "href": "Format.html#Ext-util-Format-method-date",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "String/Date",
            "properties": [

            ],
            "optional": false,
            "name": "value",
            "doc": "<p>The value to format. If a string is passed, it is converted to a Date by the Javascript\nDate object's <a href=\"http://www.w3schools.com/jsref/jsref_parse.asp\">parse()</a> method.</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "format",
            "doc": "<p>(Optional) Any valid date format string. Defaults to <a href=\"#/api/Ext.Date-property-defaultFormat\" rel=\"Ext.Date-property-defaultFormat\" class=\"docClass\">Ext.Date.defaultFormat</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "date",
        "shortDoc": "Formats the passed date using the specified format pattern. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/Format.js",
        "doc": "<p>Formats the passed date using the specified format pattern.</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The formatted date string.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 212,
        "owner": "Ext.util.Format",
        "html_filename": "Format.html",
        "href": "Format.html#Ext-util-Format-method-dateRenderer",
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
            "name": "format",
            "doc": "<p>Any valid date format string. Defaults to <a href=\"#/api/Ext.Date-property-defaultFormat\" rel=\"Ext.Date-property-defaultFormat\" class=\"docClass\">Ext.Date.defaultFormat</a>.</p>\n"
          }
        ],
        "alias": null,
        "name": "dateRenderer",
        "shortDoc": "Returns a date rendering function that can be reused to apply a date format multiple times efficiently ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/Format.js",
        "doc": "<p>Returns a date rendering function that can be reused to apply a date format multiple times efficiently</p>\n",
        "return": {
          "type": "Function",
          "properties": null,
          "name": "return",
          "doc": "<p>The date formatting function</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 117,
        "owner": "Ext.util.Format",
        "html_filename": "Format.html",
        "href": "Format.html#Ext-util-Format-method-defaultValue",
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
            "doc": "<p>Reference to check</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "defaultValue",
            "doc": "<p>The value to insert of it's undefined (defaults to \"\")</p>\n"
          }
        ],
        "alias": null,
        "name": "defaultValue",
        "shortDoc": "Checks a reference and converts it to the default value if it's empty ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/Format.js",
        "doc": "<p>Checks a reference and converts it to the default value if it's empty</p>\n",
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
        "linenr": 449,
        "owner": "Ext.util.Format",
        "html_filename": "Format.html",
        "href": "Format.html#Ext-util-Format-method-ellipsis",
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
            "name": "value",
            "doc": "<p>The string to truncate</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "length",
            "doc": "<p>The maximum length to allow before truncating</p>\n"
          },
          {
            "type": "Boolean",
            "properties": [

            ],
            "optional": false,
            "name": "word",
            "doc": "<p>True to try to find a common word break</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.String",
          "tagname": "alias",
          "member": "ellipsis",
          "doc": null
        },
        "name": "ellipsis",
        "shortDoc": "Alias for Ext.String.ellipsis. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/Format.js",
        "doc": "<p>Alias for <a href=\"#/api/Ext.String-method-ellipsis\" rel=\"Ext.String-method-ellipsis\" class=\"docClass\">Ext.String.ellipsis</a>.</p>\n\n<p>Truncate a string and add an ellipsis ('...') to the end if it exceeds the specified length</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The converted text</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 523,
        "owner": "Ext.util.Format",
        "html_filename": "Format.html",
        "href": "Format.html#Ext-util-Format-method-escapeRegex",
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
            "name": "str",
            "doc": "\n"
          }
        ],
        "alias": null,
        "name": "escapeRegex",
        "shortDoc": "Escapes the passed string for use in a regular expression ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/Format.js",
        "doc": "<p>Escapes the passed string for use in a regular expression</p>\n",
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
        "linenr": 241,
        "owner": "Ext.util.Format",
        "html_filename": "Format.html",
        "href": "Format.html#Ext-util-Format-method-fileSize",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Number/String",
            "properties": [

            ],
            "optional": false,
            "name": "size",
            "doc": "<p>The numeric value to format</p>\n"
          }
        ],
        "alias": null,
        "name": "fileSize",
        "shortDoc": "Simple format for a file size (xxx bytes, xxx KB, xxx MB) ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/Format.js",
        "doc": "<p>Simple format for a file size (xxx bytes, xxx KB, xxx MB)</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The formatted file size</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 456,
        "owner": "Ext.util.Format",
        "html_filename": "Format.html",
        "href": "Format.html#Ext-util-Format-method-format",
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
            "name": "string",
            "doc": "<p>The tokenized string to be formatted</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "value1",
            "doc": "<p>The value to replace token {0}</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "value2",
            "doc": "<p>Etc...</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.String",
          "tagname": "alias",
          "member": "format",
          "doc": null
        },
        "name": "format",
        "shortDoc": "Alias for Ext.String.format. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/Format.js",
        "doc": "<p>Alias for <a href=\"#/api/Ext.String-method-format\" rel=\"Ext.String-method-format\" class=\"docClass\">Ext.String.format</a>.</p>\n\n<p>Allows you to define a tokenized string and pass an arbitrary number of arguments to replace the tokens.  Each\ntoken must be unique, and must increment in the format {0}, {1}, etc.  Example usage:</p>\n\n<pre><code>var cls = 'my-class', text = 'Some text';\nvar s = Ext.String.format('&lt;div class=\"{0}\">{1}&lt;/div>', cls, text);\n// s now contains the string: '&lt;div class=\"my-class\">Some text&lt;/div>'\n       </code></pre>\n\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The formatted string</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 463,
        "owner": "Ext.util.Format",
        "html_filename": "Format.html",
        "href": "Format.html#Ext-util-Format-method-htmlDecode",
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
            "name": "value",
            "doc": "<p>The string to decode</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.String",
          "tagname": "alias",
          "member": "htmlDecode",
          "doc": null
        },
        "name": "htmlDecode",
        "shortDoc": "Alias for Ext.String.htmlDecode. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/Format.js",
        "doc": "<p>Alias for <a href=\"#/api/Ext.String-method-htmlDecode\" rel=\"Ext.String-method-htmlDecode\" class=\"docClass\">Ext.String.htmlDecode</a>.</p>\n\n<p>Convert certain characters (&amp;, &lt;, >, and \") from their HTML character equivalents.</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The decoded text</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 470,
        "owner": "Ext.util.Format",
        "html_filename": "Format.html",
        "href": "Format.html#Ext-util-Format-method-htmlEncode",
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
            "name": "value",
            "doc": "<p>The string to encode</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.String",
          "tagname": "alias",
          "member": "htmlEncode",
          "doc": null
        },
        "name": "htmlEncode",
        "shortDoc": "Alias for Ext.String.htmlEncode. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/Format.js",
        "doc": "<p>Alias for <a href=\"#/api/Ext.String-method-htmlEncode\" rel=\"Ext.String-method-htmlEncode\" class=\"docClass\">Ext.String.htmlEncode</a>.</p>\n\n<p>Convert certain characters (&amp;, &lt;, >, and \") to their HTML character equivalents for literal display in web pages.</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The encoded text</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 477,
        "owner": "Ext.util.Format",
        "html_filename": "Format.html",
        "href": "Format.html#Ext-util-Format-method-leftPad",
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
            "name": "string",
            "doc": "<p>The original string</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "size",
            "doc": "<p>The total length of the output string</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "character",
            "doc": "<p>(optional) The character with which to pad the original string (defaults to empty string \" \")</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.String",
          "tagname": "alias",
          "member": "leftPad",
          "doc": null
        },
        "name": "leftPad",
        "shortDoc": "Alias for Ext.String.leftPad. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/Format.js",
        "doc": "<p>Alias for <a href=\"#/api/Ext.String-method-leftPad\" rel=\"Ext.String-method-leftPad\" class=\"docClass\">Ext.String.leftPad</a>.</p>\n\n<p>Pads the left side of a string with a specified character.  This is especially useful\nfor normalizing number and date strings.  Example usage:</p>\n\n<pre><code>var s = Ext.String.leftPad('123', 5, '0');\n// s now contains the string: '00123'\n       </code></pre>\n\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The padded string</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 138,
        "owner": "Ext.util.Format",
        "html_filename": "Format.html",
        "href": "Format.html#Ext-util-Format-method-lowercase",
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
            "name": "value",
            "doc": "<p>The text to convert</p>\n"
          }
        ],
        "alias": null,
        "name": "lowercase",
        "shortDoc": "Converts a string to all lower case letters ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/Format.js",
        "doc": "<p>Converts a string to all lower case letters</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The converted text</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 256,
        "owner": "Ext.util.Format",
        "html_filename": "Format.html",
        "href": "Format.html#Ext-util-Format-method-math",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [

        ],
        "alias": null,
        "name": "math",
        "shortDoc": "It does simple math for use in a template, for example:\n\nvar tpl = new Ext.Template('{value} * 10 = {value:math(\"* 10...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/Format.js",
        "doc": "<p>It does simple math for use in a template, for example:</p>\n\n<pre><code>var tpl = new Ext.Template('{value} * 10 = {value:math(\"* 10\")}');\n</code></pre>\n\n",
        "return": {
          "type": "Function",
          "properties": null,
          "name": "return",
          "doc": "<p>A function that operates on the passed value.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 433,
        "owner": "Ext.util.Format",
        "html_filename": "Format.html",
        "href": "Format.html#Ext-util-Format-method-nl2br",
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
            "name": "The",
            "doc": "<p>string value to format.</p>\n"
          }
        ],
        "alias": null,
        "name": "nl2br",
        "shortDoc": "Converts newline characters to the HTML tag &lt;br/> ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/Format.js",
        "doc": "<p>Converts newline characters to the HTML tag &lt;br/></p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The string with embedded &lt;br/> tags in place of newlines.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 289,
        "owner": "Ext.util.Format",
        "html_filename": "Format.html",
        "href": "Format.html#Ext-util-Format-method-number",
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
            "name": "v",
            "doc": "<p>The number to format.</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "format",
            "doc": "<p>The way you would like to format this text.</p>\n"
          }
        ],
        "alias": null,
        "name": "number",
        "shortDoc": "Formats the passed number according to the passed format string. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/Format.js",
        "doc": "<p>Formats the passed number according to the passed format string.</p>\n\n\n<p>The number of digits after the decimal separator character specifies the number of\ndecimal places in the resulting string. The <u>local-specific</u> decimal character is used in the result.</p>\n\n\n<p>The <i>presence</i> of a thousand separator character in the format string specifies that\nthe <u>locale-specific</u> thousand separator (if any) is inserted separating thousand groups.</p>\n\n\n<p>By default, \",\" is expected as the thousand separator, and \".\" is expected as the decimal separator.</p>\n\n\n<p><b>New to Ext4</b></p>\n\n\n<p>Locale-specific characters are always used in the formatted output when inserting\nthousand and decimal separators.</p>\n\n\n<p>The format string must specify separator characters according to US/UK conventions (\",\" as the\nthousand separator, and \".\" as the decimal separator)</p>\n\n\n<p>To allow specification of format strings according to local conventions for separator characters, add\nthe string <code>/i</code> to the end of the format string.</p>\n\n\n<div style=\"margin-left:40px\">examples (123456.789):\n<div style=\"margin-left:10px\">\n0 - (123456) show only digits, no precision<br>\n0.00 - (123456.78) show only digits, 2 precision<br>\n0.0000 - (123456.7890) show only digits, 4 precision<br>\n0,000 - (123,456) show comma and digits, no precision<br>\n0,000.00 - (123,456.78) show comma and digits, 2 precision<br>\n0,0.00 - (123,456.78) shortcut method, show comma and digits, 2 precision<br>\nTo allow specification of the formatting string using UK/US grouping characters (,) and decimal (.) for international numbers, add /i to the end.\nFor example: 0.000,00/i\n</div></div>\n\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The formatted number.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 410,
        "owner": "Ext.util.Format",
        "html_filename": "Format.html",
        "href": "Format.html#Ext-util-Format-method-numberRenderer",
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
            "name": "format",
            "doc": "<p>Any valid number format string for <a href=\"#/api/Ext.util.Format-method-number\" rel=\"Ext.util.Format-method-number\" class=\"docClass\">number</a></p>\n"
          }
        ],
        "alias": null,
        "name": "numberRenderer",
        "shortDoc": "Returns a number rendering function that can be reused to apply a number format multiple times efficiently ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/Format.js",
        "doc": "<p>Returns a number rendering function that can be reused to apply a number format multiple times efficiently</p>\n",
        "return": {
          "type": "Function",
          "properties": null,
          "name": "return",
          "doc": "<p>The number formatting function</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 491,
        "owner": "Ext.util.Format",
        "html_filename": "Format.html",
        "href": "Format.html#Ext-util-Format-method-parseBox",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Number/String",
            "properties": [

            ],
            "optional": false,
            "name": "v",
            "doc": "<p>The encoded margins</p>\n"
          }
        ],
        "alias": null,
        "name": "parseBox",
        "shortDoc": "Parses a number or string representing margin sizes into an object. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/Format.js",
        "doc": "<p>Parses a number or string representing margin sizes into an object. Supports CSS-style margin declarations\n(e.g. 10, \"10\", \"10 10\", \"10 10 10\" and \"10 10 10 10\" are all valid options and would return the same result)</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>An object with margin sizes for top, right, bottom and left</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 421,
        "owner": "Ext.util.Format",
        "html_filename": "Format.html",
        "href": "Format.html#Ext-util-Format-method-plural",
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
            "name": "value",
            "doc": "<p>The value to compare against</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": false,
            "name": "singular",
            "doc": "<p>The singular form of the word</p>\n"
          },
          {
            "type": "String",
            "properties": [

            ],
            "optional": true,
            "name": "plural",
            "doc": "<p>(optional) The plural form of the word (defaults to the singular with an \"s\")</p>\n"
          }
        ],
        "alias": null,
        "name": "plural",
        "shortDoc": "Selectively do a plural form of a word based on a numeric value. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/Format.js",
        "doc": "<p>Selectively do a plural form of a word based on a numeric value. For example, in a template,\n{commentCount:plural(\"Comment\")}  would result in \"1 Comment\" if commentCount was 1 or would be \"x Comments\"\nif the value is 0 or greater than 1.</p>\n",
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
        "linenr": 274,
        "owner": "Ext.util.Format",
        "html_filename": "Format.html",
        "href": "Format.html#Ext-util-Format-method-round",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Number/String",
            "properties": [

            ],
            "optional": false,
            "name": "value",
            "doc": "<p>The numeric value to round.</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "precision",
            "doc": "<p>The number of decimal places to which to round the first parameter's value.</p>\n"
          }
        ],
        "alias": null,
        "name": "round",
        "shortDoc": "Rounds the passed number to the required decimal precision. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/Format.js",
        "doc": "<p>Rounds the passed number to the required decimal precision.</p>\n",
        "return": {
          "type": "Number",
          "properties": null,
          "name": "return",
          "doc": "<p>The rounded value.</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 232,
        "owner": "Ext.util.Format",
        "html_filename": "Format.html",
        "href": "Format.html#Ext-util-Format-method-stripScripts",
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
            "doc": "<p>The text from which to strip script tags</p>\n"
          }
        ],
        "alias": null,
        "name": "stripScripts",
        "shortDoc": "Strips all script tags ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/Format.js",
        "doc": "<p>Strips all script tags</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The stripped text</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 223,
        "owner": "Ext.util.Format",
        "html_filename": "Format.html",
        "href": "Format.html#Ext-util-Format-method-stripTags",
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
            "doc": "<p>The text from which to strip tags</p>\n"
          }
        ],
        "alias": null,
        "name": "stripTags",
        "shortDoc": "Strips all HTML tags ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/Format.js",
        "doc": "<p>Strips all HTML tags</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The stripped text</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 127,
        "owner": "Ext.util.Format",
        "html_filename": "Format.html",
        "href": "Format.html#Ext-util-Format-method-substr",
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
            "name": "value",
            "doc": "<p>The original text</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "start",
            "doc": "<p>The start index of the substring</p>\n"
          },
          {
            "type": "Number",
            "properties": [

            ],
            "optional": false,
            "name": "length",
            "doc": "<p>The length of the substring</p>\n"
          }
        ],
        "alias": null,
        "name": "substr",
        "shortDoc": "Returns a substring from within an original string ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/Format.js",
        "doc": "<p>Returns a substring from within an original string</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The substring</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 484,
        "owner": "Ext.util.Format",
        "html_filename": "Format.html",
        "href": "Format.html#Ext-util-Format-method-trim",
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
            "name": "string",
            "doc": "<p>The string to escape</p>\n"
          }
        ],
        "alias": {
          "cls": "Ext.String",
          "tagname": "alias",
          "member": "trim",
          "doc": null
        },
        "name": "trim",
        "shortDoc": "Alias for Ext.String.trim. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/Format.js",
        "doc": "<p>Alias for <a href=\"#/api/Ext.String-method-trim\" rel=\"Ext.String-method-trim\" class=\"docClass\">Ext.String.trim</a>.</p>\n\n<p>Trims whitespace from either end of a string, leaving spaces within the string intact.  Example:\n@example\nvar s = '  foo bar  ';\nalert('-' + s + '-');         //alerts \"- foo bar -\"\nalert('-' + Ext.String.trim(s) + '-');  //alerts \"-foo bar-\"</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The trimmed string</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 108,
        "owner": "Ext.util.Format",
        "html_filename": "Format.html",
        "href": "Format.html#Ext-util-Format-method-undef",
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
            "doc": "<p>Reference to check</p>\n"
          }
        ],
        "alias": null,
        "name": "undef",
        "shortDoc": "Checks a reference and converts it to empty string if it is undefined ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/Format.js",
        "doc": "<p>Checks a reference and converts it to empty string if it is undefined</p>\n",
        "return": {
          "type": "Object",
          "properties": null,
          "name": "return",
          "doc": "<p>Empty string if converted, otherwise the original value</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 147,
        "owner": "Ext.util.Format",
        "html_filename": "Format.html",
        "href": "Format.html#Ext-util-Format-method-uppercase",
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
            "name": "value",
            "doc": "<p>The text to convert</p>\n"
          }
        ],
        "alias": null,
        "name": "uppercase",
        "shortDoc": "Converts a string to all upper case letters ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/Format.js",
        "doc": "<p>Converts a string to all upper case letters</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The converted text</p>\n"
        }
      },
      {
        "static": false,
        "inheritable": false,
        "linenr": 156,
        "owner": "Ext.util.Format",
        "html_filename": "Format.html",
        "href": "Format.html#Ext-util-Format-method-usMoney",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "method",
        "params": [
          {
            "type": "Number/String",
            "properties": [

            ],
            "optional": false,
            "name": "value",
            "doc": "<p>The numeric value to format</p>\n"
          }
        ],
        "alias": null,
        "name": "usMoney",
        "shortDoc": "Format a number as US currency ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/Format.js",
        "doc": "<p>Format a number as US currency</p>\n",
        "return": {
          "type": "String",
          "properties": null,
          "name": "return",
          "doc": "<p>The formatted currency string</p>\n"
        }
      }
    ],
    "property": [
      {
        "static": false,
        "type": "Boolean",
        "inheritable": false,
        "properties": null,
        "linenr": 99,
        "owner": "Ext.util.Format",
        "html_filename": "Format.html",
        "href": "Format.html#Ext-util-Format-property-currencyAtEnd",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "currencyAtEnd",
        "shortDoc": "This may be set to true to make the currency function\nappend the currency sign to the formatted value. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/Format.js",
        "doc": "<p>This may be set to <code>true</code> to make the <a href=\"#/api/Ext.util.Format-method-currency\" rel=\"Ext.util.Format-method-currency\" class=\"docClass\">currency</a> function\nappend the currency sign to the formatted value.</p>\n\n\n<p>This defaults to <code>false</code>, but may be overridden in a locale file.</p>\n\n"
      },
      {
        "static": false,
        "type": "Number",
        "inheritable": false,
        "properties": null,
        "linenr": 83,
        "owner": "Ext.util.Format",
        "html_filename": "Format.html",
        "href": "Format.html#Ext-util-Format-property-currencyPrecision",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "currencyPrecision",
        "shortDoc": "The number of decimal places that the currency function displays. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/Format.js",
        "doc": "<p>The number of decimal places that the <a href=\"#/api/Ext.util.Format-method-currency\" rel=\"Ext.util.Format-method-currency\" class=\"docClass\">currency</a> function displays.</p>\n\n\n<p>This defaults to <code>2</code>, but may be overridden in a locale file.</p>\n\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 91,
        "owner": "Ext.util.Format",
        "html_filename": "Format.html",
        "href": "Format.html#Ext-util-Format-property-currencySign",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "currencySign",
        "shortDoc": "The currency sign that the currency function displays. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/Format.js",
        "doc": "<p>The currency sign that the <a href=\"#/api/Ext.util.Format-method-currency\" rel=\"Ext.util.Format-method-currency\" class=\"docClass\">currency</a> function displays.</p>\n\n\n<p>This defaults to <code>$</code>, but may be overridden in a locale file.</p>\n\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 75,
        "owner": "Ext.util.Format",
        "html_filename": "Format.html",
        "href": "Format.html#Ext-util-Format-property-decimalSeparator",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "decimalSeparator",
        "shortDoc": "The character that the number function uses as a decimal point. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/Format.js",
        "doc": "<p>The character that the <a href=\"#/api/Ext.util.Format-method-number\" rel=\"Ext.util.Format-method-number\" class=\"docClass\">number</a> function uses as a decimal point.</p>\n\n\n<p>This defaults to <code>.</code>, but may be overridden in a locale file.</p>\n\n"
      },
      {
        "static": false,
        "type": "String",
        "inheritable": false,
        "properties": null,
        "linenr": 67,
        "owner": "Ext.util.Format",
        "html_filename": "Format.html",
        "href": "Format.html#Ext-util-Format-property-thousandSeparator",
        "protected": false,
        "deprecated": null,
        "private": false,
        "tagname": "property",
        "alias": null,
        "name": "thousandSeparator",
        "shortDoc": "The character that the number function uses as a thousand separator. ...",
        "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/Format.js",
        "doc": "<p>The character that the <a href=\"#/api/Ext.util.Format-method-number\" rel=\"Ext.util.Format-method-number\" class=\"docClass\">number</a> function uses as a thousand separator.</p>\n\n\n<p>This defaults to <code>,</code>, but may be overridden in a locale file.</p>\n\n"
      }
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
  "name": "Ext.util.Format",
  "mixins": [

  ],
  "code_type": "nop",
  "component": false,
  "filename": "/Users/nickpoulden/Projects/sencha/SDK/platform/core/src/util/Format.js",
  "doc": "<p>This class is a centralized place for formatting functions inside the library. It includes\nfunctions to format various different types of data, such as text, dates and numeric values.</p>\n\n<p><strong>Localization</strong>\nThis class contains several options for localization. These can be set once the library has loaded,\nall calls to the functions from that point will use the locale settings that were specified.\nOptions include:\n- thousandSeparator\n- decimalSeparator\n- currenyPrecision\n- currencySign\n- currencyAtEnd\nThis class also uses the default date format defined here: <a href=\"#/api/Ext.Date-property-defaultFormat\" rel=\"Ext.Date-property-defaultFormat\" class=\"docClass\">Ext.Date.defaultFormat</a>.</p>\n\n<p><strong>Using with renderers</strong>\nThere are two helper functions that return a new function that can be used in conjunction with\ngrid renderers:</p>\n\n<pre><code>columns: [{\n    dataIndex: 'date',\n    renderer: Ext.util.Format.dateRenderer('Y-m-d')\n}, {\n    dataIndex: 'time',\n    renderer: Ext.util.Format.numberRenderer('0.000')\n}]\n</code></pre>\n\n<p>Functions that only take a single argument can also be passed directly:</p>\n\n<pre><code>columns: [{\n    dataIndex: 'cost',\n    renderer: Ext.util.Format.usMoney\n}, {\n    dataIndex: 'productCode',\n    renderer: Ext.util.Format.uppercase\n}]\n</code></pre>\n\n<p><strong>Using with XTemplates</strong>\nXTemplates can also directly use <a href=\"#/api/Ext.util.Format\" rel=\"Ext.util.Format\" class=\"docClass\">Ext.util.Format</a> functions:</p>\n\n<pre><code>new Ext.XTemplate([\n    'Date: {startDate:date(\"Y-m-d\")}',\n    'Cost: {cost:usMoney}'\n]);\n</code></pre>\n",
  "alternateClassNames": [

  ]
});