
/*

CyberBootstrap Javascript
© CyberGen49

*/

function _id(id, ancestor = document) {
    return ancestor.getElementById(id);
}
function _class(id, ancestor = document) {
    return ancestor.getElementsByClassName(id);
}
function _qs(selector, ancestor = document) {
    return ancestor.querySelector(selector);
}
function _qsa(selector, ancestor = document) {
    return ancestor.querySelectorAll(selector);
}