/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allTasks": () => (/* binding */ allTasks),
/* harmony export */   "renderTaskList": () => (/* binding */ renderTaskList),
/* harmony export */   "storeLocal": () => (/* binding */ storeLocal),
/* harmony export */   "taskArray": () => (/* binding */ taskArray),
/* harmony export */   "today": () => (/* binding */ today),
/* harmony export */   "week": () => (/* binding */ week)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/addTasks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/modifyTasks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/listTasks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




let taskArray = [];

// get DOM Elements
const addProjectButton = document.querySelector(".add-new-task");

const allTasks = document.getElementById("all-tasks");
const today = document.getElementById("today");
const week = document.getElementById("week");
// add Event Listeners
addProjectButton.addEventListener("click", Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/addTasks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

allTasks.addEventListener("click", Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/listTasks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
today.addEventListener("click", Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/listTasks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
week.addEventListener("click", Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/listTasks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

function renderTaskList() {
  const listElements = document.querySelectorAll("tr");
  for (let i = 0; i < listElements.length; i++) {
    listElements[i].addEventListener("click", Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/modifyTasks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
  }
}
const clearButton = document.querySelector(".clear-tasks");

clearButton.addEventListener("click", clearTasks);

function clearTasks() {
  let newArray = [];
  for (let i = 0; i < taskArray.length; i++) {
    if (taskArray[i].striked === false) {
      newArray.push({
        title: taskArray[i].title,
        description: taskArray[i].description,
        priority: taskArray[i].priority,
        date: taskArray[i].date,
        striked: taskArray[i].striked,
      });
    }
  }
  
  taskArray = newArray;
  
  Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/listTasks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
  Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/addTasks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
  Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/addTasks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();

  renderAfterClear();
}

function renderAfterClear() {
    if (allTasks.style.color === "red") {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/listTasks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    } else if (today.style.color === "red") {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/listTasks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    } else if (week.style.color === "red") {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/listTasks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    }
}
// store taskArray in local storage

function storeLocal() {
    let jsontaskArray = JSON.stringify(taskArray);
  
    window.localStorage.setItem("taskArray", jsontaskArray);
  }
  
  // load from storage
  
  (function loadStorage() {
    let getItem = localStorage.getItem("taskArray");
  
    let item = JSON.parse(getItem);
    if (!item) {
      return;
    } else {
      taskArray = item;
      Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/listTasks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
      Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/addTasks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
      Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/addTasks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
      
    }
})();
  

/******/ })()
;