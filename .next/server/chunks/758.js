exports.id = 758;
exports.ids = [758];
exports.modules = {

/***/ 1898:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "navbar_navbar__jezZD",
	"logo": "navbar_logo__V0KW6",
	"middle": "navbar_middle__BDV17",
	"auth": "navbar_auth__DN_WI",
	"signupLnk": "navbar_signupLnk__Pn5P2",
	"loginLnk": "navbar_loginLnk__Ix8XJ"
};


/***/ }),

/***/ 9758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": () => (/* binding */ Navbar)
});

// UNUSED EXPORTS: getServerSideProps

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./images/logo.jpg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.2dc97584.jpg","height":266,"width":267,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAABf/aAAwDAQACEAMQAAAAoQVC/8QAHhAAAgEDBQAAAAAAAAAAAAAAAQMRAAJBBBIUIkP/2gAIAQEAAT8A1bEWoJtK+THUem/EZmv/xAAaEQACAgMAAAAAAAAAAAAAAAACAwABESNS/9oACAECAQE/AEgta61iWep//8QAHBEAAQMFAAAAAAAAAAAAAAAAAgEREgADBFJx/9oACAEDAQE/ADxxvK8zBtFi/a//2Q==","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./component/navbar.module.css
var navbar_module = __webpack_require__(1898);
var navbar_module_default = /*#__PURE__*/__webpack_require__.n(navbar_module);
;// CONCATENATED MODULE: ./component/navbar.jsx





// import Style from "./navbar.css"
const Navbar = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (navbar_module_default()).header,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (navbar_module_default()).navbar,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (navbar_module_default()).logo,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: logo
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: "SchedulMeet"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (navbar_module_default()).middle,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: "Individuals"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: "Teams"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: "Enterprise"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: "Product"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: "Priceing"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: "Resources"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (navbar_module_default()).auth,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: (navbar_module_default()).signupLnk,
                        href: "/signinsignup",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (navbar_module_default()).signupBtn,
                            children: "Login/signup"
                        })
                    })
                })
            ]
        })
    });
};
async function getServerSideProps(context) {
    console.log("hello");
} // <div>
 //     <Link href="/">Home</Link>
 //     <Link href="/about">About</Link>
 //     <Link href="/welcome">welcome</Link>
 //     <Link href="/products">products</Link>
 // </div>


/***/ })

};
;