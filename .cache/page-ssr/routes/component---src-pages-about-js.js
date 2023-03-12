"use strict";
exports.id = 682;
exports.ids = [682];
exports.modules = {

/***/ 4752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2273);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
const Button=props=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{onClick:props.onClick,className:props.variant},props.children);};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ 1619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2273);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7076);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4752);
/* harmony import */ var _images_ArrowExternal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9170);
const Footer=()=>{var year=new Date().getFullYear();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"footer"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"contact-wrapper"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2",null,"Want to know more?",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"contact-alt header-alt"},"Let's chat about it")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{variant:"button alt"},"Email")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"bottom-wrapper"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"footer-name"},"Michael Watchmaker ",year),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"footer-links"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:"/about"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{variant:"button ghost"},"About")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{variant:"button ghost"},"Resume",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_images_ArrowExternal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,null)))));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ 7004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ nav)
});

// EXTERNAL MODULE: external "/Users/michaelwatchmaker/Documents/GitHub/portfolio/node_modules/react/index.js"
var index_js_ = __webpack_require__(2273);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
// EXTERNAL MODULE: ./src/components/button.js
var components_button = __webpack_require__(4752);
// EXTERNAL MODULE: ./src/images/ArrowExternal.js
var ArrowExternal = __webpack_require__(9170);
;// CONCATENATED MODULE: ./src/images/Logo.js
function Logo({size=44,color="#282725"}){return/*#__PURE__*/index_js_default().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 44 44",width:size,height:size,fill:color},/*#__PURE__*/index_js_default().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22 0C4.4 0 0 4.4 0 22C0 39.6 4.4 44 22 44C39.6 44 44 39.6 44 22C44 4.4 39.6 0 22 0ZM27.7065 24.2051C27.5774 25.4322 27.5569 26.4933 27.8586 27.7002C28.3534 29.1536 29.6393 30.2475 31.2043 30.2475C32.9517 30.2475 34.1504 29.716 35.3004 28.357C35.7819 27.7233 36.0227 27.115 36.0227 26.5321C36.0227 26.0537 35.8438 25.3939 35.4997 25.0416C35.1353 24.6683 34.5674 24.5496 34.0458 24.5496C33.5135 24.5496 32.2969 25.2014 32.2969 25.2014C32.2969 25.2014 32.0787 25.3997 32.0787 24.8108C32.0787 24.4584 32.1457 24.0121 32.2797 23.1193C32.2998 22.9848 32.3216 22.8403 32.3448 22.6843C32.3534 22.6308 32.3623 22.5767 32.3712 22.5221C32.5646 21.338 32.7989 19.9037 32.3448 18.7684C31.8379 17.5518 31.0268 16.9435 29.9116 16.9435C29.0744 16.9435 28.354 17.2746 27.6685 17.7419C27.1109 18.0968 26.3505 18.7051 25.3874 19.5668C25.2962 19.6414 25.2054 19.7215 25.1186 19.7981C24.6842 20.1814 24.3486 20.4774 24.551 19.5668C24.7156 18.6206 24.8283 17.4061 24.475 16.4873C24.1708 15.803 23.7146 15.3214 23.1063 15.0426C22.3771 14.678 21.431 14.6959 20.6731 14.9666C19.6339 15.3468 18.0879 16.538 16.0349 18.5403C15.2587 19.3164 15.2929 19.217 15.544 18.4858C15.5775 18.3883 15.6149 18.2796 15.6547 18.1601C15.6627 18.1425 15.6707 18.1248 15.6788 18.1071C15.984 17.4361 16.339 16.6558 16.339 15.9171C16.339 14.7214 15.3195 13.75 14.1339 13.75C13.0676 13.75 12.3885 14.5022 12.0049 15.4228C11.583 16.351 11.243 17.3163 10.9041 18.279C10.8152 18.5313 10.7264 18.7834 10.6362 19.0346C8.86205 23.7742 7.97496 26.7016 7.97496 27.8168C7.97496 29.0806 8.82671 30.1952 10.142 30.25C11.3107 30.25 12.0108 29.6113 12.7273 28.8053C13.1581 28.3491 13.6397 27.8168 14.172 27.2085C15.1858 26.0173 16.1743 24.8894 17.1374 23.8249C18.1005 22.735 18.7722 22.0127 19.1524 21.6578C19.3679 21.4423 19.5717 21.3123 19.4565 21.6578C19.3551 22.0127 19.2157 22.5703 19.0383 23.3306C18.7342 24.4459 18.5821 25.3076 18.5821 25.9159C18.5821 26.8946 19.0835 27.7437 20.0268 28.121C21.2725 28.6192 22.5413 27.9133 23.4865 27.1325C24.5822 26.2651 25.6119 25.3093 26.6377 24.3572C26.8292 24.1794 27.0206 24.0018 27.2123 23.8249C27.8084 23.3139 27.7886 23.4873 27.7202 24.0848C27.7158 24.1232 27.7112 24.1633 27.7065 24.2051Z"}));}
;// CONCATENATED MODULE: ./src/components/nav.js
const Navigation=()=>{return/*#__PURE__*/index_js_default().createElement("nav",null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/",className:"logo"},/*#__PURE__*/index_js_default().createElement(Logo,null)),/*#__PURE__*/index_js_default().createElement("div",{className:"nav-links"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/about"},/*#__PURE__*/index_js_default().createElement(components_button/* default */.Z,{variant:"button ghost"},"About")),/*#__PURE__*/index_js_default().createElement(components_button/* default */.Z,{variant:"button alt"},"Resume",/*#__PURE__*/index_js_default().createElement(ArrowExternal/* default */.Z,null))));};/* harmony default export */ const nav = (Navigation);

/***/ }),

/***/ 9170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ArrowExternal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2273);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ArrowExternal({size=24,color="#282725"}){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22 22",width:size,height:size,fill:color},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path",{d:"M14.5292 7.99792L6.62292 15.95C6.40903 16.1639 6.16061 16.2708 5.87767 16.2708C5.59533 16.2708 5.34722 16.1639 5.13333 15.95C4.91944 15.7361 4.8125 15.4877 4.8125 15.2047C4.8125 14.9224 4.91944 14.6743 5.13333 14.4604L13.0854 6.55417H6.41667C6.12639 6.55417 5.87828 6.45089 5.67233 6.24433C5.46578 6.03839 5.3625 5.79028 5.3625 5.5C5.3625 5.20972 5.46578 4.96131 5.67233 4.75475C5.87828 4.54881 6.12639 4.44583 6.41667 4.44583H15.5833C15.8736 4.44583 16.1217 4.54881 16.3277 4.75475C16.5342 4.96131 16.6375 5.20972 16.6375 5.5V14.6667C16.6375 14.9569 16.5342 15.2051 16.3277 15.411C16.1217 15.6176 15.8736 15.7208 15.5833 15.7208C15.2931 15.7208 15.0449 15.6176 14.839 15.411C14.6324 15.2051 14.5292 14.9569 14.5292 14.6667V7.99792Z"}));}

/***/ }),

/***/ 8122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ about)
});

// EXTERNAL MODULE: external "/Users/michaelwatchmaker/Documents/GitHub/portfolio/node_modules/react/index.js"
var index_js_ = __webpack_require__(2273);
// EXTERNAL MODULE: ./src/components/nav.js + 1 modules
var nav = __webpack_require__(7004);
// EXTERNAL MODULE: ./src/components/footer.js
var footer = __webpack_require__(1619);
;// CONCATENATED MODULE: ./src/images/beer-pretzel.jpeg
/* harmony default export */ const beer_pretzel = ("/portfolio/static/beer-pretzel-74f9c392197f5862de4d6511f1bcb1ae.jpeg");
;// CONCATENATED MODULE: ./src/images/breakfast.jpeg
/* harmony default export */ const breakfast = ("/portfolio/static/breakfast-dfd49a3a70c04f6d4f0d80ca581912ea.jpeg");
;// CONCATENATED MODULE: ./src/images/disc-bag.jpeg
/* harmony default export */ const disc_bag = ("/portfolio/static/disc-bag-416f1cf7a91e5f074a960a28a3ba93f1.jpeg");
;// CONCATENATED MODULE: ./src/images/giants.jpeg
/* harmony default export */ const giants = ("/portfolio/static/giants-1e4284e24aabd51007c90890dbb3a501.jpeg");
;// CONCATENATED MODULE: ./src/images/hike.jpeg
/* harmony default export */ const hike = ("/portfolio/static/hike-1f90365e09afcaac1ca8fe1942d04fc8.jpeg");
;// CONCATENATED MODULE: ./src/images/sandwich.jpeg
/* harmony default export */ const sandwich = ("/portfolio/static/sandwich-e831392303d1a487f049cc69ca54f5c3.jpeg");
;// CONCATENATED MODULE: ./src/pages/about.js
const About=()=>{return/*#__PURE__*/index_js_.createElement("div",null,/*#__PURE__*/index_js_.createElement(nav/* default */.Z,null),/*#__PURE__*/index_js_.createElement("main",null,/*#__PURE__*/index_js_.createElement("h1",{className:"center"},"A little more about me..."),/*#__PURE__*/index_js_.createElement("div",{className:"about-images"},/*#__PURE__*/index_js_.createElement("div",{className:"about-images-left"},/*#__PURE__*/index_js_.createElement("div",{className:"about-images-section"},/*#__PURE__*/index_js_.createElement("img",{src:beer_pretzel,alt:"beer and pretzel",className:"image-tall"})),/*#__PURE__*/index_js_.createElement("div",{className:"about-images-section"},/*#__PURE__*/index_js_.createElement("img",{src:sandwich,alt:"sandwich",className:"image-square"}),/*#__PURE__*/index_js_.createElement("img",{src:disc_bag,alt:"disc bag",className:"image-tall"}))),/*#__PURE__*/index_js_.createElement("div",{className:"about-images-right"},/*#__PURE__*/index_js_.createElement("div",{className:"about-images-section"},/*#__PURE__*/index_js_.createElement("img",{src:breakfast,alt:"breakfast",className:"image-tall"}),/*#__PURE__*/index_js_.createElement("img",{src:giants,alt:"giants game",className:"image-short"})),/*#__PURE__*/index_js_.createElement("div",{className:"about-images-section"},/*#__PURE__*/index_js_.createElement("img",{src:hike,alt:"hike",className:"image-tall"})))),/*#__PURE__*/index_js_.createElement("div",{className:"text-section"},/*#__PURE__*/index_js_.createElement("p",{className:"display left semibold"},"I'm currently a Senior Product Designer at ",/*#__PURE__*/index_js_.createElement("span",{className:"link"},"GoodRx")," building ",/*#__PURE__*/index_js_.createElement("span",{className:"link"},"Provider Mode")," for healthcare professionals helping their patients access, afford, and adhere to their medications."),/*#__PURE__*/index_js_.createElement("p",{className:"body left"},"During the holidays, people often ask me the same question: What do you do for work? I've never had a clear answer, and it changes depending on who's asking. Here's a couple things top of mind right now."),/*#__PURE__*/index_js_.createElement("p",{className:"body left"},"I love tinkering with things in Figma \u2014 especially creating foundations for others to elevate their products. Some of the recent things I\u2019ve released to the community are a flexible ",/*#__PURE__*/index_js_.createElement("span",{className:"link"},"skeleton loading kit ")," and a basic ",/*#__PURE__*/index_js_.createElement("span",{className:"link"},"iMessage kit"),". You can check out some other doodads on my ",/*#__PURE__*/index_js_.createElement("span",{className:"link"},"profile"),"."),/*#__PURE__*/index_js_.createElement("p",{className:"body left"},"At ",/*#__PURE__*/index_js_.createElement("a",{href:"https://www.heydoctor.co",target:"_blank",rel:"noreferrer",className:"link"},"HeyDoctor")," (now GoodRx Care) I led design for the Electronic Medical Record (EMR). It was a complex platform operating at the center of diagnosis, treatment, and customer support. My team supported growth from 100 to 1,000+ telehealth visits per day. I also led design for a team who\u2019s soul purpose was improving the visit experience for our patients. We reimagined how our video consultations work, and it turned out pretty well. We won an ",/*#__PURE__*/index_js_.createElement("a",{href:"https://www.digitalhealthhub.org/awards/2020/winners",target:"_blank",rel:"noreferrer",className:"link"},"award")," for Best Telehealth Company in 2020."),/*#__PURE__*/index_js_.createElement("p",{className:"body left"},"Recently I\u2019ve taken GoodRx Provider Mode from an idea to one of the largest provider platforms in the United States. We released a ",/*#__PURE__*/index_js_.createElement("a",{href:"https://investors.goodrx.com/",target:"_blank",rel:"noreferrer",className:"link"},"video")," for our investors and the public to learn more about it."),/*#__PURE__*/index_js_.createElement("p",{className:"body left"},"If you'd like to learn more, check out my ",/*#__PURE__*/index_js_.createElement("span",{className:"link"},"resume")," or reach out and ",/*#__PURE__*/index_js_.createElement("span",{className:"link"},"say hi")," \uD83E\uDD1D\uD83C\uDFFC.")),/*#__PURE__*/index_js_.createElement("div",{className:"text-section"},/*#__PURE__*/index_js_.createElement("p",{className:"display left semibold"},"Okay enough with the work talk..."),/*#__PURE__*/index_js_.createElement("p",{className:"body left"},"One of the lockdown hobbies I picked up is disc golf \uD83E\uDD4F. I also got myself a set of cornhole boards and bags to hustle fellow beer drinkers on the weekends. Hit me up if you live close and want to play."),/*#__PURE__*/index_js_.createElement("p",{className:"body left"},"I was one of the many thousand who explored bread science during our hibernation in 2020. I got pretty good at making brioche buns, and haven\u2019t stopped iterating on pizza dough. You could say the kitchen island is my new creative frontier."))),/*#__PURE__*/index_js_.createElement(footer/* default */.Z,null));};/* harmony default export */ const about = (About);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-about-js.js.map