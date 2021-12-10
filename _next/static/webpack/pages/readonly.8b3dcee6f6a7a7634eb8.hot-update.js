webpackHotUpdate_N_E("pages/readonly",{

/***/ "../node_modules/raw-loader/dist/cjs.js!./plugins/customContentPluginTwitter.tsx":
false,

/***/ "./sampleContents/demo.tsx":
/*!*********************************!*\
  !*** ./sampleContents/demo.tsx ***!
  \*********************************/
/*! exports provided: demo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
var demo = {
  "id": "2390df",
  "version": 1,
  "rows": [{
    "id": "4c7d90",
    "cells": [{
      "id": "95d678",
      "size": 12,
      "plugin": {
        "id": "ory/editor/core/content/slate",
        "version": 1
      },
      "dataI18n": {
        "en": {
          "slate": [{
            "children": [{
              "text": "Next  Level Content Editing "
            }],
            "type": "HEADINGS/HEADING-TWO",
            "data": {
              "align": "center"
            }
          }, {
            "children": [{
              "text": "Bakaneko",
              "EMPHASIZE/EM": true,
              "EMPHASIZE/U": true
            }],
            "type": "HEADINGS/HEADING-ONE",
            "data": {
              "align": "center"
            }
          }]
        }
      },
      "rows": [],
      "inline": null
    }]
  }, {
    "id": "wgobwa",
    "cells": [{
      "id": "awukqk",
      "size": 12,
      "plugin": {
        "id": "ory/editor/core/layout/background",
        "version": 1
      },
      "dataI18n": {
        "en": {
          "modeFlag": 5,
          "backgroundColor": {
            "r": 0,
            "g": 0,
            "b": 0,
            "a": 1
          },
          "gradients": [{
            "deg": 180,
            "opacity": 0.75,
            "colors": [{
              "color": {
                "r": 72,
                "g": 39,
                "b": 39,
                "a": 1
              }
            }, {
              "color": {
                "r": 0,
                "g": 0,
                "b": 0,
                "a": 0.83
              }
            }]
          }]
        }
      },
      "rows": [{
        "id": "0wku9m",
        "cells": [{
          "id": "6oj6UO",
          "size": 4,
          "plugin": {
            "id": "ory/editor/core/content/image",
            "version": 1
          },
          "dataI18n": {
            "en": {
              "src": "https://cdn.pentas.io/next-s3-uploads/c964cbdb-6ee2-49ce-a220-b09a21ab776a/IMG_5439.jpg"
            }
          },
          "rows": [],
          "inline": null
        }, {
          "id": "ekzyed",
          "size": 8,
          "plugin": {
            "id": "ory/editor/core/content/slate",
            "version": 1
          },
          "dataI18n": {
            "en": {
              "slate": [{
                "type": "HEADINGS/HEADING-THREE",
                "data": {
                  "align": "start"
                },
                "children": [{
                  "text": "Bakaneko #092"
                }]
              }, {
                "type": "PARAGRAPH/PARAGRAPH",
                "data": {
                  "align": "start"
                },
                "children": [{
                  "text": "Bakaneko is a collection of 500 unique pop culture feline NFTs— entities from the Binance blockchain.★"
                }]
              }]
            }
          },
          "rows": [],
          "inline": null
        }]
      }],
      "inline": null
    }]
  }, {
    "id": "ub23m0",
    "cells": [{
      "id": "omm4wk",
      "size": 6,
      "plugin": {
        "id": "ory/editor/core/content/slate",
        "version": 1
      },
      "dataI18n": {
        "en": {
          "slate": [{
            "type": "PARAGRAPH/PARAGRAPH",
            "children": [{
              "text": "This",
              "EMPHASIZE/STRONG": true
            }, {
              "text": " is a next level content editor for react."
            }]
          }]
        }
      },
      "rows": [],
      "inline": null
    }, {
      "id": "gr1373",
      "isDraftI18n": {
        "en": false
      },
      "size": 6,
      "plugin": {
        "id": "twitter-timeline",
        "version": 1
      },
      "dataI18n": {
        "en": {
          "title": "A Sample Twitter plugin",
          "screenName": "Bakan3koVerse",
          "height": 600
        }
      },
      "rows": [],
      "inline": null
    }]
  }, {
    "id": "Xr2ZzV",
    "cells": [{
      "id": "3024eg",
      "size": 6,
      "rows": [{
        "id": "ifqqC0",
        "cells": [{
          "id": "Vo5LK1",
          "inline": "right",
          "size": 4,
          "plugin": {
            "id": "ory/editor/core/content/image",
            "version": 1
          },
          "dataI18n": {
            "en": {
              "src": "https://pbs.twimg.com/profile_images/1466035154355326982/bV_8vUss_400x400.jpg"
            }
          },
          "rows": []
        }, {
          "id": "cFiB02",
          "size": 12,
          "plugin": {
            "id": "ory/editor/core/content/slate",
            "version": 1
          },
          "dataI18n": {
            "en": {
              "slate": [{
                "children": [{
                  "text": "\r\n\r\n"
                }, {
                  "text": "Bakaneko",
                  "EMPHASIZE/STRONG": true
                }, {
                  "text": " is a collection of 500 unique pop culture feline NFTs— entities from the Binance blockchain. Each Bakaneko is individually designed from scratch.\r\n\r\n"
                }]
              }]
            }
          },
          "hasInlineNeighbour": "Vo5LK1",
          "rows": []
        }]
      }],
      "inline": null,
      "dataI18n": null
    }, {
      "id": "pSz3cW",
      "size": 6,
      "plugin": {
        "id": "code-snippet",
        "version": 1
      },
      "dataI18n": {
        "en": {
          "language": "tsx",
          "code": "\nimport Editor from '@react-page/editor'\n\n// use ReactPage for editing Content\n<Editor\n    cellPlugins={yourCellPlugins}\n    value={theCurrentValue}\n    onChange={newValue => saveTheValue(newValue)}\n/>\n\n// or just for displaying content\n<Editor\n    cellPlugins={yourCellPlugins}\n    value={theCurrentValue}\n    readOnly={true}\n/>\n"
        }
      },
      "rows": [],
      "inline": null
    }]
  }, {
    "id": "LmbnJt",
    "cells": [{
      "id": "KePRMx",
      "size": 12,
      "rows": [{
        "id": "2Qrhaw",
        "cells": [{
          "id": "xnlhoo",
          "size": 6,
          "plugin": {
            "id": "ory/editor/core/content/video",
            "version": 1
          },
          "dataI18n": {
            "en": {
              "src": "https://www.youtube.com/watch?v=YIWSEa5U9_U"
            }
          },
          "rows": [],
          "inline": null
        }, {
          "id": "c3t9oy",
          "size": 6,
          "plugin": {
            "id": "ory/editor/core/content/slate",
            "version": 1
          },
          "dataI18n": {
            "en": {
              "slate": [{
                "type": "HEADINGS/HEADING-TWO",
                "children": [{
                  "text": "Add anything you want"
                }]
              }, {
                "children": [{
                  "text": "Bakaneko",
                  "EMPHASIZE/STRONG": true
                }, {
                  "text": " is a collection of 500 unique pop culture feline NFTs— entities from the Binance blockchain. Each Bakaneko is individually designed from scratch."
                }]
              }]
            }
          },
          "rows": [],
          "inline": null
        }]
      }, {
        "id": "vfFODi",
        "cells": [{
          "id": "IlKIzI",
          "size": 6,
          "plugin": {
            "id": "ory/editor/core/content/slate",
            "version": 1
          },
          "dataI18n": {
            "en": {
              "slate": [{
                "type": "HEADINGS/HEADING-TWO",
                "children": [{
                  "text": "Powerful Rich Text editing"
                }]
              }, {
                "children": [{
                  "text": "We provide a powerful richtext plugin built upon "
                }, {
                  "type": "LINK/LINK",
                  "children": [{
                    "text": ""
                  }],
                  "data": {
                    "href": "https://github.com/vazco/uniforms"
                  }
                }, {
                  "text": ""
                }, {
                  "type": "LINK/LINK",
                  "children": [{
                    "text": "Slate"
                  }],
                  "data": {
                    "href": "https://github.com/ianstormtaylor/slate/"
                  }
                }, {
                  "text": ". It works out-of-the-box, but is fully customizable. You can customize how everything is rendered by providing custom component for headlines, paragraphs, links and so-on and you can add create your own custom plugins to bring in "
                }, {
                  "text": "color",
                  "SetColor": {
                    "color": "green"
                  }
                }, {
                  "text": ", add custom links or custom paragraph styles."
                }]
              }, {
                "type": "HEADINGS/HEADING-TWO",
                "children": [{
                  "text": ""
                }]
              }]
            }
          },
          "rows": [],
          "inline": null
        }, {
          "id": "7wsvt4",
          "size": 6,
          "plugin": {
            "id": "ory/editor/core/content/slate",
            "version": 1
          },
          "dataI18n": {
            "en": {
              "slate": [{
                "type": "PARAGRAPH/PARAGRAPH",
                "children": [{
                  "text": "",
                  "EMPHASIZE/EM": true
                }]
              }, {
                "type": "PARAGRAPH/PARAGRAPH",
                "children": [{
                  "text": "You can customize the rich text editor anyway you like.\nYou can even add formula editing capabilities:",
                  "EMPHASIZE/EM": true
                }],
                "data": {
                  "align": "center"
                }
              }, {
                "type": "PARAGRAPH/PARAGRAPH",
                "children": [{
                  "text": ""
                }, {
                  "type": "Katex",
                  "children": [{
                    "text": "f(x) = x^2 "
                  }],
                  "data": {}
                }, {
                  "text": ""
                }],
                "data": {
                  "align": "center"
                }
              }, {
                "type": "PARAGRAPH/PARAGRAPH",
                "children": [{
                  "text": ""
                }]
              }]
            }
          },
          "rows": [],
          "inline": null
        }]
      }],
      "inline": null,
      "dataI18n": null
    }]
  }, {
    "id": "E1Vhkc",
    "cells": [{
      "id": "x804x5",
      "size": 6,
      "plugin": {
        "id": "ory/editor/core/content/slate",
        "version": 1
      },
      "dataI18n": {
        "en": {
          "slate": [{
            "type": "HEADINGS/HEADING-TWO",
            "children": [{
              "text": "About us"
            }]
          }, {
            "type": "LISTS/ORDERED-LIST",
            "children": [{
              "children": [{
                "text": "\rBakaneko is a collection of 500 unique pop culture feline NFTs— entities from the Binance blockchain. Each Bakaneko is individually designed from scratch.\r\n\r\n"
              }],
              "type": "LISTS/LIST-ITEM"
            }]
          }]
        }
      },
      "rows": [],
      "inline": null
    }, {
      "id": "adbpP9",
      "size": 6,
      "plugin": {
        "id": "code-snippet",
        "version": 1
      },
      "dataI18n": {
        "en": {
          "language": "tsx",
          "code": "import type { CellPlugin } from '@react-page/editor';\r\nimport React from 'react';\r\nimport { Timeline } from 'react-twitter-widgets';\r\n\r\ntype Data = {\r\n  screenName: string;\r\n  height: number;\r\n  title: string;\r\n};\r\n// you can pass the shape of the data as the generic type argument\r\nconst customContentPluginTwitter: CellPlugin<Data> = {\r\n  Renderer: ({ data }) => (\r\n    <div>\r\n      <h4>{data.title}</h4>\r\n      <Timeline\r\n        dataSource={{\r\n          sourceType: 'profile',\r\n          // data has already the right type!\r\n          screenName: data.screenName,\r\n        }}\r\n        options={{\r\n          height: data.height || 600,\r\n        }}\r\n      />\r\n    </div>\r\n  ),\r\n  id: 'twitter-timeline',\r\n  title: 'Twitter timeline',\r\n  description: 'A twitter timeline',\r\n  version: 1,\r\n  controls: {\r\n    type: 'autoform',\r\n    schema: {\r\n      // this JSONschema is type checked against the generic type argument\r\n      // the autocompletion of your IDE helps to create this schema\r\n      properties: {\r\n        title: {\r\n          type: 'string',\r\n          default: 'A Sample Twitter plugin',\r\n        },\r\n        screenName: {\r\n          type: 'string',\r\n          default: 'typescript',\r\n        },\r\n        height: {\r\n          type: 'number',\r\n          default: 600,\r\n        },\r\n      },\r\n      required: ['screenName'],\r\n    },\r\n  },\r\n};\r\n\r\nexport default customContentPluginTwitter;\r\n"
        }
      },
      "rows": [],
      "inline": null
    }]
  }, {
    "id": "KxRm4Q",
    "cells": [{
      "id": "pX3v4h",
      "size": 8,
      "plugin": {
        "id": "ory/editor/core/content/slate",
        "version": 1
      },
      "dataI18n": {
        "en": {
          "slate": [{
            "type": "HEADINGS/HEADING-TWO",
            "children": [{
              "text": "Server Side Rendering out of the box"
            }]
          }, {
            "type": "PARAGRAPH/PARAGRAPH",
            "children": [{
              "text": "This editor ",
              "EMPHASIZE/STRONG": true
            }, {
              "text": "is built with performance in mind. It can be used for "
            }, {
              "text": "server side rendering (SSR)",
              "EMPHASIZE/STRONG": true
            }, {
              "text": ", which makes it not only a great tool for editing, but also for displaying. It's battle tested in nextjs, this example itself is created using nextjs and static page generation."
            }]
          }, {
            "type": "PARAGRAPH/PARAGRAPH",
            "children": [{
              "text": "We try "
            }, {
              "text": "minimize bundle size",
              "EMPHASIZE/STRONG": true
            }, {
              "text": " as much as possible. Any UI solely used for editing is not loaded when in readOnly mode. "
            }]
          }]
        }
      },
      "rows": [],
      "inline": null
    }, {
      "id": "Hl5FKJ",
      "size": 4,
      "rows": [{
        "id": "YFNmnf",
        "cells": [{
          "id": "f6pdG9",
          "size": 12,
          "plugin": {
            "id": "ory/editor/core/content/slate",
            "version": 1
          },
          "dataI18n": {
            "en": {
              "slate": [{
                "type": "PARAGRAPH/PARAGRAPH",
                "children": [{
                  "text": "",
                  "EMPHASIZE/EM": true
                }],
                "data": {
                  "align": "center"
                }
              }, {
                "type": "PARAGRAPH/PARAGRAPH",
                "children": [{
                  "text": "This editor works in any SSR setup like \nNext.js or Gatsby",
                  "EMPHASIZE/EM": true
                }]
              }]
            }
          },
          "rows": [],
          "inline": null
        }]
      }, {
        "id": "VxBY6n",
        "cells": [{
          "id": "MjIkMK",
          "size": 6,
          "plugin": {
            "id": "ory/editor/core/content/image",
            "version": 1
          },
          "dataI18n": {
            "en": {
              "href": "",
              "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
            }
          },
          "rows": [],
          "inline": null
        }, {
          "id": "pdjqHJ",
          "size": 6,
          "plugin": {
            "id": "ory/editor/core/content/image",
            "version": 1
          },
          "dataI18n": {
            "en": {
              "src": "https://www.gatsbyjs.cn/Gatsby-Logo.svg"
            }
          },
          "rows": [],
          "inline": null
        }]
      }],
      "inline": null,
      "dataI18n": null
    }]
  }]
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "../node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FtcGxlQ29udGVudHMvZGVtby50c3giXSwibmFtZXMiOlsiZGVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBTyxJQUFNQSxJQUFXLEdBQUc7QUFDekIsUUFBTSxRQURtQjtBQUV6QixhQUFXLENBRmM7QUFHekIsVUFBUSxDQUNKO0FBQ0ksVUFBTSxRQURWO0FBRUksYUFBUyxDQUNMO0FBQ0ksWUFBTSxRQURWO0FBRUksY0FBUSxFQUZaO0FBR0ksZ0JBQVU7QUFDTixjQUFNLCtCQURBO0FBRU4sbUJBQVc7QUFGTCxPQUhkO0FBT0ksa0JBQVk7QUFDUixjQUFNO0FBQ0YsbUJBQVMsQ0FDTDtBQUNJLHdCQUFZLENBQ1I7QUFDSSxzQkFBUTtBQURaLGFBRFEsQ0FEaEI7QUFNSSxvQkFBUSxzQkFOWjtBQU9JLG9CQUFRO0FBQ0osdUJBQVM7QUFETDtBQVBaLFdBREssRUFZTDtBQUNJLHdCQUFZLENBQ1I7QUFDSSxzQkFBUSxVQURaO0FBRUksOEJBQWdCLElBRnBCO0FBR0ksNkJBQWU7QUFIbkIsYUFEUSxDQURoQjtBQVFJLG9CQUFRLHNCQVJaO0FBU0ksb0JBQVE7QUFDSix1QkFBUztBQURMO0FBVFosV0FaSztBQURQO0FBREUsT0FQaEI7QUFxQ0ksY0FBUSxFQXJDWjtBQXNDSSxnQkFBVTtBQXRDZCxLQURLO0FBRmIsR0FESSxFQThDSjtBQUNJLFVBQU0sUUFEVjtBQUVJLGFBQVMsQ0FDTDtBQUNJLFlBQU0sUUFEVjtBQUVJLGNBQVEsRUFGWjtBQUdJLGdCQUFVO0FBQ04sY0FBTSxtQ0FEQTtBQUVOLG1CQUFXO0FBRkwsT0FIZDtBQU9JLGtCQUFZO0FBQ1IsY0FBTTtBQUNGLHNCQUFZLENBRFY7QUFFRiw2QkFBbUI7QUFDZixpQkFBSyxDQURVO0FBRWYsaUJBQUssQ0FGVTtBQUdmLGlCQUFLLENBSFU7QUFJZixpQkFBSztBQUpVLFdBRmpCO0FBUUYsdUJBQWEsQ0FDVDtBQUNJLG1CQUFPLEdBRFg7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QUFkZCxTQURLLEVBaUJMO0FBQ0ksZ0JBQU0sUUFEVjtBQUVJLGtCQUFRLENBRlo7QUFHSSxvQkFBVTtBQUNOLGtCQUFNLCtCQURBO0FBRU4sdUJBQVc7QUFGTCxXQUhkO0FBT0ksc0JBQVk7QUFDUixrQkFBTTtBQUNGLHFCQUFPO0FBREw7QUFERSxXQVBoQjtBQVlJLGtCQUFRLEVBWlo7QUFhSSxvQkFBVTtBQWJkLFNBakJLO0FBRmIsT0EzQ0ksQ0FIWjtBQW1GSSxnQkFBVSxJQW5GZDtBQW9GSSxrQkFBWTtBQXBGaEIsS0EzREs7QUFGYixHQWxqQkk7QUFIaUIsQ0FBcEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVhZG9ubHkuOGIzZGNlZTZmNmE3YTc2MzRlYjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgVmFsdWUgfSBmcm9tICdAcmVhY3QtcGFnZS9lZGl0b3InO1xyXG5leHBvcnQgY29uc3QgZGVtbzogVmFsdWUgPSB7XHJcbiAgXCJpZFwiOiBcIjIzOTBkZlwiLFxyXG4gIFwidmVyc2lvblwiOiAxLFxyXG4gIFwicm93c1wiOiBbXHJcbiAgICAgIHtcclxuICAgICAgICAgIFwiaWRcIjogXCI0YzdkOTBcIixcclxuICAgICAgICAgIFwiY2VsbHNcIjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjk1ZDY3OFwiLFxyXG4gICAgICAgICAgICAgICAgICBcInNpemVcIjogMTIsXHJcbiAgICAgICAgICAgICAgICAgIFwicGx1Z2luXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJvcnkvZWRpdG9yL2NvcmUvY29udGVudC9zbGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IDFcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJkYXRhSTE4blwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcImVuXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNsYXRlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJOZXh0ICBMZXZlbCBDb250ZW50IEVkaXRpbmcgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiSEVBRElOR1MvSEVBRElORy1UV09cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGlnblwiOiBcImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiQmFrYW5la29cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFTVBIQVNJWkUvRU1cIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFTVBIQVNJWkUvVVwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkhFQURJTkdTL0hFQURJTkctT05FXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxpZ25cIjogXCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcInJvd3NcIjogW10sXHJcbiAgICAgICAgICAgICAgICAgIFwiaW5saW5lXCI6IG51bGxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgIFwiaWRcIjogXCJ3Z29id2FcIixcclxuICAgICAgICAgIFwiY2VsbHNcIjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcImF3dWtxa1wiLFxyXG4gICAgICAgICAgICAgICAgICBcInNpemVcIjogMTIsXHJcbiAgICAgICAgICAgICAgICAgIFwicGx1Z2luXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJvcnkvZWRpdG9yL2NvcmUvbGF5b3V0L2JhY2tncm91bmRcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiAxXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIFwiZGF0YUkxOG5cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJlblwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtb2RlRmxhZ1wiOiA1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ1wiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCI6IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ3JhZGllbnRzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWdcIjogMTgwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDAuNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiclwiOiA3MixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ1wiOiAzOSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYlwiOiAzOSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ1wiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIjogMC44M1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcInJvd3NcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCIwd2t1OW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNlbGxzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjZvajZVT1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBsdWdpblwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIm9yeS9lZGl0b3IvY29yZS9jb250ZW50L2ltYWdlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFJMThuXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVuXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogXCJodHRwczovL2Nkbi5wZW50YXMuaW8vbmV4dC1zMy11cGxvYWRzL2M5NjRjYmRiLTZlZTItNDljZS1hMjIwLWIwOWEyMWFiNzc2YS9JTUdfNTQzOS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvd3NcIjogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlubGluZVwiOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJla3p5ZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwbHVnaW5cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJvcnkvZWRpdG9yL2NvcmUvY29udGVudC9zbGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhSTE4blwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlblwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2xhdGVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkhFQURJTkdTL0hFQURJTkctVEhSRUVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsaWduXCI6IFwic3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIkJha2FuZWtvICMwOTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJQQVJBR1JBUEgvUEFSQUdSQVBIXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGlnblwiOiBcInN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJCYWthbmVrbyBpcyBhIGNvbGxlY3Rpb24gb2YgNTAwIHVuaXF1ZSBwb3AgY3VsdHVyZSBmZWxpbmUgTkZUc+KAlCBlbnRpdGllcyBmcm9tIHRoZSBCaW5hbmNlIGJsb2NrY2hhaW4u4piFXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvd3NcIjogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlubGluZVwiOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIFwiaW5saW5lXCI6IG51bGxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgIFwiaWRcIjogXCJ1YjIzbTBcIixcclxuICAgICAgICAgIFwiY2VsbHNcIjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIm9tbTR3a1wiLFxyXG4gICAgICAgICAgICAgICAgICBcInNpemVcIjogNixcclxuICAgICAgICAgICAgICAgICAgXCJwbHVnaW5cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIm9yeS9lZGl0b3IvY29yZS9jb250ZW50L3NsYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogMVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcImRhdGFJMThuXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiZW5cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic2xhdGVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJQQVJBR1JBUEgvUEFSQUdSQVBIXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIlRoaXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFTVBIQVNJWkUvU1RST05HXCI6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiIGlzIGEgbmV4dCBsZXZlbCBjb250ZW50IGVkaXRvciBmb3IgcmVhY3QuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIFwicm93c1wiOiBbXSxcclxuICAgICAgICAgICAgICAgICAgXCJpbmxpbmVcIjogbnVsbFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBcImlkXCI6IFwiZ3IxMzczXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiaXNEcmFmdEkxOG5cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJlblwiOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcInNpemVcIjogNixcclxuICAgICAgICAgICAgICAgICAgXCJwbHVnaW5cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcInR3aXR0ZXItdGltZWxpbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiAxXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIFwiZGF0YUkxOG5cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJlblwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkEgU2FtcGxlIFR3aXR0ZXIgcGx1Z2luXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzY3JlZW5OYW1lXCI6IFwiQmFrYW4za29WZXJzZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDYwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcInJvd3NcIjogW10sXHJcbiAgICAgICAgICAgICAgICAgIFwiaW5saW5lXCI6IG51bGxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgIFwiaWRcIjogXCJYcjJaelZcIixcclxuICAgICAgICAgIFwiY2VsbHNcIjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjMwMjRlZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBcInNpemVcIjogNixcclxuICAgICAgICAgICAgICAgICAgXCJyb3dzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiaWZxcUMwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjZWxsc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJWbzVMSzFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5saW5lXCI6IFwicmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwbHVnaW5cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJvcnkvZWRpdG9yL2NvcmUvY29udGVudC9pbWFnZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhSTE4blwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlblwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiaHR0cHM6Ly9wYnMudHdpbWcuY29tL3Byb2ZpbGVfaW1hZ2VzLzE0NjYwMzUxNTQzNTUzMjY5ODIvYlZfOHZVc3NfNDAweDQwMC5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvd3NcIjogW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcImNGaUIwMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IDEyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwbHVnaW5cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJvcnkvZWRpdG9yL2NvcmUvY29udGVudC9zbGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhSTE4blwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlblwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2xhdGVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJcXHJcXG5cXHJcXG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJCYWthbmVrb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFTVBIQVNJWkUvU1RST05HXCI6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiIGlzIGEgY29sbGVjdGlvbiBvZiA1MDAgdW5pcXVlIHBvcCBjdWx0dXJlIGZlbGluZSBORlRz4oCUIGVudGl0aWVzIGZyb20gdGhlIEJpbmFuY2UgYmxvY2tjaGFpbi4gRWFjaCBCYWthbmVrbyBpcyBpbmRpdmlkdWFsbHkgZGVzaWduZWQgZnJvbSBzY3JhdGNoLlxcclxcblxcclxcblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoYXNJbmxpbmVOZWlnaGJvdXJcIjogXCJWbzVMSzFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm93c1wiOiBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICBcImlubGluZVwiOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICBcImRhdGFJMThuXCI6IG51bGxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcInBTejNjV1wiLFxyXG4gICAgICAgICAgICAgICAgICBcInNpemVcIjogNixcclxuICAgICAgICAgICAgICAgICAgXCJwbHVnaW5cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcImNvZGUtc25pcHBldFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IDFcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJkYXRhSTE4blwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcImVuXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhbmd1YWdlXCI6IFwidHN4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2RlXCI6IFwiXFxuaW1wb3J0IEVkaXRvciBmcm9tICdAcmVhY3QtcGFnZS9lZGl0b3InXFxuXFxuLy8gdXNlIFJlYWN0UGFnZSBmb3IgZWRpdGluZyBDb250ZW50XFxuPEVkaXRvclxcbiAgICBjZWxsUGx1Z2lucz17eW91ckNlbGxQbHVnaW5zfVxcbiAgICB2YWx1ZT17dGhlQ3VycmVudFZhbHVlfVxcbiAgICBvbkNoYW5nZT17bmV3VmFsdWUgPT4gc2F2ZVRoZVZhbHVlKG5ld1ZhbHVlKX1cXG4vPlxcblxcbi8vIG9yIGp1c3QgZm9yIGRpc3BsYXlpbmcgY29udGVudFxcbjxFZGl0b3JcXG4gICAgY2VsbFBsdWdpbnM9e3lvdXJDZWxsUGx1Z2luc31cXG4gICAgdmFsdWU9e3RoZUN1cnJlbnRWYWx1ZX1cXG4gICAgcmVhZE9ubHk9e3RydWV9XFxuLz5cXG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcInJvd3NcIjogW10sXHJcbiAgICAgICAgICAgICAgICAgIFwiaW5saW5lXCI6IG51bGxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgIFwiaWRcIjogXCJMbWJuSnRcIixcclxuICAgICAgICAgIFwiY2VsbHNcIjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIktlUFJNeFwiLFxyXG4gICAgICAgICAgICAgICAgICBcInNpemVcIjogMTIsXHJcbiAgICAgICAgICAgICAgICAgIFwicm93c1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjJRcmhhd1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2VsbHNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwieG5saG9vXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGx1Z2luXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwib3J5L2VkaXRvci9jb3JlL2NvbnRlbnQvdmlkZW9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YUkxOG5cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9WUlXU0VhNVU5X1VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvd3NcIjogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlubGluZVwiOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJjM3Q5b3lcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiA2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwbHVnaW5cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJvcnkvZWRpdG9yL2NvcmUvY29udGVudC9zbGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhSTE4blwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlblwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2xhdGVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkhFQURJTkdTL0hFQURJTkctVFdPXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIkFkZCBhbnl0aGluZyB5b3Ugd2FudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJCYWthbmVrb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFTVBIQVNJWkUvU1RST05HXCI6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiIGlzIGEgY29sbGVjdGlvbiBvZiA1MDAgdW5pcXVlIHBvcCBjdWx0dXJlIGZlbGluZSBORlRz4oCUIGVudGl0aWVzIGZyb20gdGhlIEJpbmFuY2UgYmxvY2tjaGFpbi4gRWFjaCBCYWthbmVrbyBpcyBpbmRpdmlkdWFsbHkgZGVzaWduZWQgZnJvbSBzY3JhdGNoLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3dzXCI6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbmxpbmVcIjogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwidmZGT0RpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjZWxsc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJJbEtJeklcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiA2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwbHVnaW5cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJvcnkvZWRpdG9yL2NvcmUvY29udGVudC9zbGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhSTE4blwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlblwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2xhdGVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkhFQURJTkdTL0hFQURJTkctVFdPXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIlBvd2VyZnVsIFJpY2ggVGV4dCBlZGl0aW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIldlIHByb3ZpZGUgYSBwb3dlcmZ1bCByaWNodGV4dCBwbHVnaW4gYnVpbHQgdXBvbiBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJMSU5LL0xJTktcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdmF6Y28vdW5pZm9ybXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJMSU5LL0xJTktcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiU2xhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9pYW5zdG9ybXRheWxvci9zbGF0ZS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCIuIEl0IHdvcmtzIG91dC1vZi10aGUtYm94LCBidXQgaXMgZnVsbHkgY3VzdG9taXphYmxlLiBZb3UgY2FuIGN1c3RvbWl6ZSBob3cgZXZlcnl0aGluZyBpcyByZW5kZXJlZCBieSBwcm92aWRpbmcgY3VzdG9tIGNvbXBvbmVudCBmb3IgaGVhZGxpbmVzLCBwYXJhZ3JhcGhzLCBsaW5rcyBhbmQgc28tb24gYW5kIHlvdSBjYW4gYWRkIGNyZWF0ZSB5b3VyIG93biBjdXN0b20gcGx1Z2lucyB0byBicmluZyBpbiBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJjb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTZXRDb2xvclwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcImdyZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiLCBhZGQgY3VzdG9tIGxpbmtzIG9yIGN1c3RvbSBwYXJhZ3JhcGggc3R5bGVzLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkhFQURJTkdTL0hFQURJTkctVFdPXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3dzXCI6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbmxpbmVcIjogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiN3dzdnQ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGx1Z2luXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwib3J5L2VkaXRvci9jb3JlL2NvbnRlbnQvc2xhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YUkxOG5cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNsYXRlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJQQVJBR1JBUEgvUEFSQUdSQVBIXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFTVBIQVNJWkUvRU1cIjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJQQVJBR1JBUEgvUEFSQUdSQVBIXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIllvdSBjYW4gY3VzdG9taXplIHRoZSByaWNoIHRleHQgZWRpdG9yIGFueXdheSB5b3UgbGlrZS5cXG5Zb3UgY2FuIGV2ZW4gYWRkIGZvcm11bGEgZWRpdGluZyBjYXBhYmlsaXRpZXM6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkVNUEhBU0laRS9FTVwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxpZ25cIjogXCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiUEFSQUdSQVBIL1BBUkFHUkFQSFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJLYXRleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJmKHgpID0geF4yIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiB7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsaWduXCI6IFwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlBBUkFHUkFQSC9QQVJBR1JBUEhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvd3NcIjogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlubGluZVwiOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIFwiaW5saW5lXCI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgIFwiZGF0YUkxOG5cIjogbnVsbFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICAgXCJpZFwiOiBcIkUxVmhrY1wiLFxyXG4gICAgICAgICAgXCJjZWxsc1wiOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBcImlkXCI6IFwieDgwNHg1XCIsXHJcbiAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiA2LFxyXG4gICAgICAgICAgICAgICAgICBcInBsdWdpblwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwib3J5L2VkaXRvci9jb3JlL2NvbnRlbnQvc2xhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiAxXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIFwiZGF0YUkxOG5cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJlblwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzbGF0ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkhFQURJTkdTL0hFQURJTkctVFdPXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIkFib3V0IHVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkxJU1RTL09SREVSRUQtTElTVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJcXHJCYWthbmVrbyBpcyBhIGNvbGxlY3Rpb24gb2YgNTAwIHVuaXF1ZSBwb3AgY3VsdHVyZSBmZWxpbmUgTkZUc+KAlCBlbnRpdGllcyBmcm9tIHRoZSBCaW5hbmNlIGJsb2NrY2hhaW4uIEVhY2ggQmFrYW5la28gaXMgaW5kaXZpZHVhbGx5IGRlc2lnbmVkIGZyb20gc2NyYXRjaC5cXHJcXG5cXHJcXG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJMSVNUUy9MSVNULUlURU1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJyb3dzXCI6IFtdLFxyXG4gICAgICAgICAgICAgICAgICBcImlubGluZVwiOiBudWxsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJhZGJwUDlcIixcclxuICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IDYsXHJcbiAgICAgICAgICAgICAgICAgIFwicGx1Z2luXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJjb2RlLXNuaXBwZXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiAxXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIFwiZGF0YUkxOG5cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJlblwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYW5ndWFnZVwiOiBcInRzeFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29kZVwiOiBcImltcG9ydCB0eXBlIHsgQ2VsbFBsdWdpbiB9IGZyb20gJ0ByZWFjdC1wYWdlL2VkaXRvcic7XFxyXFxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcXHJcXG5pbXBvcnQgeyBUaW1lbGluZSB9IGZyb20gJ3JlYWN0LXR3aXR0ZXItd2lkZ2V0cyc7XFxyXFxuXFxyXFxudHlwZSBEYXRhID0ge1xcclxcbiAgc2NyZWVuTmFtZTogc3RyaW5nO1xcclxcbiAgaGVpZ2h0OiBudW1iZXI7XFxyXFxuICB0aXRsZTogc3RyaW5nO1xcclxcbn07XFxyXFxuLy8geW91IGNhbiBwYXNzIHRoZSBzaGFwZSBvZiB0aGUgZGF0YSBhcyB0aGUgZ2VuZXJpYyB0eXBlIGFyZ3VtZW50XFxyXFxuY29uc3QgY3VzdG9tQ29udGVudFBsdWdpblR3aXR0ZXI6IENlbGxQbHVnaW48RGF0YT4gPSB7XFxyXFxuICBSZW5kZXJlcjogKHsgZGF0YSB9KSA9PiAoXFxyXFxuICAgIDxkaXY+XFxyXFxuICAgICAgPGg0PntkYXRhLnRpdGxlfTwvaDQ+XFxyXFxuICAgICAgPFRpbWVsaW5lXFxyXFxuICAgICAgICBkYXRhU291cmNlPXt7XFxyXFxuICAgICAgICAgIHNvdXJjZVR5cGU6ICdwcm9maWxlJyxcXHJcXG4gICAgICAgICAgLy8gZGF0YSBoYXMgYWxyZWFkeSB0aGUgcmlnaHQgdHlwZSFcXHJcXG4gICAgICAgICAgc2NyZWVuTmFtZTogZGF0YS5zY3JlZW5OYW1lLFxcclxcbiAgICAgICAgfX1cXHJcXG4gICAgICAgIG9wdGlvbnM9e3tcXHJcXG4gICAgICAgICAgaGVpZ2h0OiBkYXRhLmhlaWdodCB8fCA2MDAsXFxyXFxuICAgICAgICB9fVxcclxcbiAgICAgIC8+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgKSxcXHJcXG4gIGlkOiAndHdpdHRlci10aW1lbGluZScsXFxyXFxuICB0aXRsZTogJ1R3aXR0ZXIgdGltZWxpbmUnLFxcclxcbiAgZGVzY3JpcHRpb246ICdBIHR3aXR0ZXIgdGltZWxpbmUnLFxcclxcbiAgdmVyc2lvbjogMSxcXHJcXG4gIGNvbnRyb2xzOiB7XFxyXFxuICAgIHR5cGU6ICdhdXRvZm9ybScsXFxyXFxuICAgIHNjaGVtYToge1xcclxcbiAgICAgIC8vIHRoaXMgSlNPTnNjaGVtYSBpcyB0eXBlIGNoZWNrZWQgYWdhaW5zdCB0aGUgZ2VuZXJpYyB0eXBlIGFyZ3VtZW50XFxyXFxuICAgICAgLy8gdGhlIGF1dG9jb21wbGV0aW9uIG9mIHlvdXIgSURFIGhlbHBzIHRvIGNyZWF0ZSB0aGlzIHNjaGVtYVxcclxcbiAgICAgIHByb3BlcnRpZXM6IHtcXHJcXG4gICAgICAgIHRpdGxlOiB7XFxyXFxuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxcclxcbiAgICAgICAgICBkZWZhdWx0OiAnQSBTYW1wbGUgVHdpdHRlciBwbHVnaW4nLFxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIHNjcmVlbk5hbWU6IHtcXHJcXG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXFxyXFxuICAgICAgICAgIGRlZmF1bHQ6ICd0eXBlc2NyaXB0JyxcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBoZWlnaHQ6IHtcXHJcXG4gICAgICAgICAgdHlwZTogJ251bWJlcicsXFxyXFxuICAgICAgICAgIGRlZmF1bHQ6IDYwMCxcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgfSxcXHJcXG4gICAgICByZXF1aXJlZDogWydzY3JlZW5OYW1lJ10sXFxyXFxuICAgIH0sXFxyXFxuICB9LFxcclxcbn07XFxyXFxuXFxyXFxuZXhwb3J0IGRlZmF1bHQgY3VzdG9tQ29udGVudFBsdWdpblR3aXR0ZXI7XFxyXFxuXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJyb3dzXCI6IFtdLFxyXG4gICAgICAgICAgICAgICAgICBcImlubGluZVwiOiBudWxsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgICBcImlkXCI6IFwiS3hSbTRRXCIsXHJcbiAgICAgICAgICBcImNlbGxzXCI6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJwWDN2NGhcIixcclxuICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IDgsXHJcbiAgICAgICAgICAgICAgICAgIFwicGx1Z2luXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJvcnkvZWRpdG9yL2NvcmUvY29udGVudC9zbGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IDFcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJkYXRhSTE4blwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcImVuXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNsYXRlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiSEVBRElOR1MvSEVBRElORy1UV09cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiU2VydmVyIFNpZGUgUmVuZGVyaW5nIG91dCBvZiB0aGUgYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlBBUkFHUkFQSC9QQVJBR1JBUEhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiVGhpcyBlZGl0b3IgXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRU1QSEFTSVpFL1NUUk9OR1wiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcImlzIGJ1aWx0IHdpdGggcGVyZm9ybWFuY2UgaW4gbWluZC4gSXQgY2FuIGJlIHVzZWQgZm9yIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcInNlcnZlciBzaWRlIHJlbmRlcmluZyAoU1NSKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkVNUEhBU0laRS9TVFJPTkdcIjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCIsIHdoaWNoIG1ha2VzIGl0IG5vdCBvbmx5IGEgZ3JlYXQgdG9vbCBmb3IgZWRpdGluZywgYnV0IGFsc28gZm9yIGRpc3BsYXlpbmcuIEl0J3MgYmF0dGxlIHRlc3RlZCBpbiBuZXh0anMsIHRoaXMgZXhhbXBsZSBpdHNlbGYgaXMgY3JlYXRlZCB1c2luZyBuZXh0anMgYW5kIHN0YXRpYyBwYWdlIGdlbmVyYXRpb24uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlBBUkFHUkFQSC9QQVJBR1JBUEhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiV2UgdHJ5IFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIm1pbmltaXplIGJ1bmRsZSBzaXplXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRU1QSEFTSVpFL1NUUk9OR1wiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIiBhcyBtdWNoIGFzIHBvc3NpYmxlLiBBbnkgVUkgc29sZWx5IHVzZWQgZm9yIGVkaXRpbmcgaXMgbm90IGxvYWRlZCB3aGVuIGluIHJlYWRPbmx5IG1vZGUuIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcInJvd3NcIjogW10sXHJcbiAgICAgICAgICAgICAgICAgIFwiaW5saW5lXCI6IG51bGxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIkhsNUZLSlwiLFxyXG4gICAgICAgICAgICAgICAgICBcInNpemVcIjogNCxcclxuICAgICAgICAgICAgICAgICAgXCJyb3dzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiWUZObW5mXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjZWxsc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJmNnBkRzlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiAxMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGx1Z2luXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwib3J5L2VkaXRvci9jb3JlL2NvbnRlbnQvc2xhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YUkxOG5cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNsYXRlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJQQVJBR1JBUEgvUEFSQUdSQVBIXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFTVBIQVNJWkUvRU1cIjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsaWduXCI6IFwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlBBUkFHUkFQSC9QQVJBR1JBUEhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiVGhpcyBlZGl0b3Igd29ya3MgaW4gYW55IFNTUiBzZXR1cCBsaWtlIFxcbk5leHQuanMgb3IgR2F0c2J5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkVNUEhBU0laRS9FTVwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3dzXCI6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbmxpbmVcIjogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiVnhCWTZuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjZWxsc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJNaklrTUtcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiA2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwbHVnaW5cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJvcnkvZWRpdG9yL2NvcmUvY29udGVudC9pbWFnZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhSTE4blwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlblwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvOC84ZS9OZXh0anMtbG9nby5zdmcvODAwcHgtTmV4dGpzLWxvZ28uc3ZnLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm93c1wiOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5saW5lXCI6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcInBkanFISlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IDYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBsdWdpblwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIm9yeS9lZGl0b3IvY29yZS9jb250ZW50L2ltYWdlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFJMThuXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVuXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogXCJodHRwczovL3d3dy5nYXRzYnlqcy5jbi9HYXRzYnktTG9nby5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvd3NcIjogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlubGluZVwiOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIFwiaW5saW5lXCI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgIFwiZGF0YUkxOG5cIjogbnVsbFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgfVxyXG4gIF1cclxufTsiXSwic291cmNlUm9vdCI6IiJ9