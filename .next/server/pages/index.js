(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3930:
/***/ ((module) => {

// Exports
module.exports = {
	"front": "front_front__P_eK3",
	"left": "front_left__pogdG"
};


/***/ }),

/***/ 1177:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Front)
/* harmony export */ });
/* unused harmony export getServerSideProps */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _front_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3930);
/* harmony import */ var _front_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_front_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_4__]);
react_toastify__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// import logo from "../images/logo.jpg"



// import Style from "./navbar.css"
function Front({ justLogdin  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (justLogdin) {
            console.log("logdin yes");
            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success("logdin sucessfull\uD83D\uDE0E");
        } else {
            console.log(justLogdin);
        }
        justLogdin = false;
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_front_module_css__WEBPACK_IMPORTED_MODULE_5___default().front),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {
                    autoClose: 2000
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_front_module_css__WEBPACK_IMPORTED_MODULE_5___default().left),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: "Easy"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: "scheduling"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: "ahead"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: "SchedulMeet is your scheduling automation platform for eliminating the back-and-forth emails for finding the perfect time — and so much more."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                placeholder: "Enter your email"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: "Sign up"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: "Create your free account. No credit card required"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_front_module_css__WEBPACK_IMPORTED_MODULE_5___default().right),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "https://images.ctfassets.net/k0lk9kiuza3o/46W8NE43rD54MveL20rPp5/e18c62fb5617db69691c4ec475005c06/Homepage-Hero-new.png?w=1366&h=1132&q=50&fm=webp"
                })
            })
        ]
    });
}
let getServerSideProps = async (context)=>{
    console.log(process.env.BACKEND_URL, "hello");
    const cookies = cookie.parse(context.req.headers.cookie || "");
    console.log(cookies, "bello");
// let data = await fetch(`${process.env.BACKEND_URL}/islogdin`)
// data = await data.json()
// console.log(data, 'dataaa');
// if (data.msg == 'logdin') {
//     return {
//         props: {
//             islogdin: true
//         }
//     }
// } else {
//     return {
//         props: {
//             islogdin: false
//         }
//     }
// }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9758);
/* harmony import */ var _component_front__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1177);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component_front__WEBPACK_IMPORTED_MODULE_3__]);
_component_front__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'





function Home({ justLogdin  }) {
    const [count, setcount] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_navbar__WEBPACK_IMPORTED_MODULE_2__/* .Navbar */ .w, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_front__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                justLogdin: justLogdin
            })
        ]
    });
}
async function getServerSideProps(context) {
    console.log(process.env.BACKEND_URL, "hello");
    const cookies = cookie__WEBPACK_IMPORTED_MODULE_1___default().parse(context.req.headers.cookie || "");
    context.res.setHeader("Set-Cookie", cookie__WEBPACK_IMPORTED_MODULE_1___default().serialize("justLogdin", "", {
        maxAge: -1,
        path: "/"
    }));
    // console.log(cookies, 'bello', cookies.justLogdin);
    // let data = await fetch(`${process.env.BACKEND_URL}/islogdin`, {
    //   method: "GET",
    //   headers: {
    //     authorization: `bearer ${cookies.token}`,
    //     authorization2: `bearer ${cookies.refresh_token}`,
    //   }
    // })
    // data = await data.json()
    // console.log(data, 'dataaa');
    if (cookies.justLogdin == "true") {
        return {
            props: {
                justLogdin: true
            }
        };
    } else {
        return {
            props: {
                justLogdin: false
            }
        };
    }
} // <Head>
 //         <title>Create Next App</title>
 //         <meta name="description" content="Generated by create next app" />
 //         <meta name="viewport" content="width=device-width, initial-scale=1" />
 //         <link rel="icon" href="/favicon.ico" />
 //       </Head>
 //       <main className={styles.main}>
 //         <div className={styles.description}>
 //           <p>
 //             Get started by editing&nbsp;
 //             <code className={styles.code}>pages/index.js</code>
 //           </p>
 //           <div>
 //             <a
 //               href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
 //               target="_blank"
 //               rel="noopener noreferrer"
 //             >
 //               By{' '}
 //               <Image
 //                 src="/vercel.svg"
 //                 alt="Vercel Logo"
 //                 className={styles.vercelLogo}
 //                 width={100}
 //                 height={24}
 //                 priority
 //               />
 //             </a>
 //           </div>
 //         </div>
 //         <div className={styles.center}>
 //           <Image
 //             className={styles.logo}
 //             src="/next.svg"
 //             alt="Next.js Logo"
 //             width={180}
 //             height={37}
 //             priority
 //           />
 //           <div className={styles.thirteen}>
 //             <Image
 //               src="/thirteen.svg"
 //               alt="13"
 //               width={40}
 //               height={31}
 //               priority
 //             />
 //           </div>
 //         </div>
 //         <div className={styles.grid}>
 //           <a
 //             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
 //             className={styles.card}
 //             target="_blank"
 //             rel="noopener noreferrer"
 //           >
 //             <h2 className={inter.className}>
 //               Docs <span>-&gt;</span>
 //             </h2>
 //             <p className={inter.className}>
 //               Find in-depth information about Next.js features and&nbsp;API.
 //             </p>
 //           </a>
 //           <a
 //             href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
 //             className={styles.card}
 //             target="_blank"
 //             rel="noopener noreferrer"
 //           >
 //             <h2 className={inter.className}>
 //               Learn <span>-&gt;</span>
 //             </h2>
 //             <p className={inter.className}>
 //               Learn about Next.js in an interactive course with&nbsp;quizzes!
 //             </p>
 //           </a>
 //           <a
 //             href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
 //             className={styles.card}
 //             target="_blank"
 //             rel="noopener noreferrer"
 //           >
 //             <h2 className={inter.className}>
 //               Templates <span>-&gt;</span>
 //             </h2>
 //             <p className={inter.className}>
 //               Discover and deploy boilerplate example Next.js&nbsp;projects.
 //             </p>
 //           </a>
 //           <a
 //             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
 //             className={styles.card}
 //             target="_blank"
 //             rel="noopener noreferrer"
 //           >
 //             <h2 className={inter.className}>
 //               Deploy <span>-&gt;</span>
 //             </h2>
 //             <p className={inter.className}>
 //               Instantly deploy your Next.js site to a shareable URL
 //               with&nbsp;Vercel.
 //             </p>
 //           </a>
 //         </div>
 //       </main>

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4802:
/***/ ((module) => {

"use strict";
module.exports = require("cookie");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,675,676,664,758], () => (__webpack_exec__(4369)));
module.exports = __webpack_exports__;

})();