
/*

CyberBootstrap Javascript
https://github.com/CyberGen49/cyber-bootstrap

*/

function _id(id, ancestor = document) {
    return ancestor.getElementById(id);
}
function _class(id, ancestor = document) {
    return ancestor.getElementsByClassName(id);
}
function _tag(tag, ancestor = document) {
    return ancestor.getElementsByTagName(tag);
}
function _qs(selector, ancestor = document) {
    return ancestor.querySelector(selector);
}
function _qsa(selector, ancestor = document) {
    return ancestor.querySelectorAll(selector);
}

function randomHex(length = 8) {
    let chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let str = '';
    for (i = 0; i < length; i++) {
        str += chars[Math.round(Math.random()*15)];
    }
    return str;
}

function clamp(num, min, max) {
    if (num < min) return min;
    if (num > max) return max;
    return num;
}

function randomInt(min, max) { 
    return Math.round(Math.random() * (max - min) + min);
}

// Continuously scan for and adjust dynamic form elements
setInterval(() => {
    const dropdowns = _tag('select');
    Array.from(dropdowns).forEach((dropdown) => {
        if (dropdown.dataset.adjusted === undefined && !dropdown.multiple && dropdown.dataset.default === undefined) {
            const showCustomDropdown = () => {
                const options = _tag('option', dropdown);
                const rect = dropdown.getBoundingClientRect();
                const id = `dropdown-${Date.now()}`;
                const hideDropdown = () => {
                    _id(`${id}-hitArea`).remove();
                    _id(id).classList.remove('visible');
                    setTimeout(() => {
                        _id(id).remove();
                    }, 200);
                    dropdown.focus();
                };
                document.body.insertAdjacentHTML('beforeend', `
                    <div id="${id}-hitArea" class="customDropdownHitArea"></div>
                    <div id="${id}" class="customDropdown"></div>
                `);
                _id(`${id}-hitArea`).addEventListener('click', (e) => {
                    e.stopPropagation();
                    hideDropdown();
                });
                _id(id).addEventListener('click', (e) => {
                    e.stopPropagation();
                });
                let i = 0;
                let foundFocus = false;
                Array.from(options).forEach((option) => {
                    const optId = `${id}-option-${i}`;
                    _id(id).insertAdjacentHTML('beforeend', `
                        <button id="${optId}" class="option ${(option.selected) ? 'selected':''}" ${(option.disabled) ? 'disabled':''}>${option.innerText}</button>
                    `);
                    _id(optId).addEventListener('click', (e) => {
                        e.stopPropagation();
                        hideDropdown();
                        if (option.value)
                            dropdown.value = option.value;
                        else
                            dropdown.value = option.innerHTML;
                        dropdown.dispatchEvent(new Event('change'));
                    });
                    // if (!foundFocus && !option.disabled) {
                    //     _id(optId).focus();
                    //     foundFocus = true;
                    // }
                    i++;
                });
                _id(id).style.top = `${(rect.bottom+window.scrollY+5)}px`;
                _id(id).style.left = `${rect.left}px`;
                _id(id).style.width = `${dropdown.offsetWidth}px`;
                setTimeout(() => {
                    _id(id).classList.add('visible');
                }, 5);
                escapeQueue.push(hideDropdown);
                resizeQueue.push(hideDropdown);
            }
            dropdown.addEventListener('mousedown', (e) => {
                e.preventDefault();
            });
            dropdown.addEventListener('click', (e) => {
                e.stopPropagation();
                showCustomDropdown();
            });
            dropdown.addEventListener('keydown', (e) => {
                if (e.code == 'Enter' || e.code == 'Space') {
                    e.preventDefault();
                    showCustomDropdown();
                }
            });
            dropdown.dataset.adjusted = true;
        }
    });
}, 100);

// Handle popups
function showPopup(title, innerHtml, closeable = true) {
    let id = `popup-${Date.now()}`;
    document.documentElement.insertAdjacentHTML('beforeend', `
        <div id="${id}" class="popupCont">
            <div id="${id}-box" class="popup">
                <div class="titlebar">
                    <div class="title">${title}</div>
                    ${(closeable) ? `<button id="${id}-close" class="close">close</button>`:''}
                </div>
                <div class="content">${innerHtml}</div>
            </div>
        </div>
    `);
    if (closeable) {
        _id(id).addEventListener('click', (e) => {
            hidePopup(id);
        });
        _id(`${id}-close`).addEventListener('click', (e) => {
            hidePopup(id);
        });
    }
    _id(`${id}-box`).addEventListener('click', (e) => {
        e.stopPropagation();
    });
    setTimeout(() => { _id(id).classList.add('visible') }, 50);
    return id;
}
function hidePopup(id) {
    _id(id).classList.remove('visible');
    setTimeout(() => { _id(id).remove() }, 200);
    _id(id).dispatchEvent(new Event('close'));
}

// Handle the Escape queue
let escapeQueue = [];
function shiftEscapeQueue() {
    while (escapeQueue.length > 0) {
        let action = escapeQueue.shift();
        try {
            action();
        } catch (error) {
            continue;
        }
        break;
    }
}
window.addEventListener('keyup', (e) => {
    if (e.code == 'Escape') {
        shiftEscapeQueue();
    }
});

// Handle the resize queue
let resizeQueue = [];
function shiftResizeQueue() {
    while (resizeQueue.length > 0) {
        let action = resizeQueue.shift();
        try {
            action();
        } catch (error) {
            continue;
        }
        break;
    }
}
window.addEventListener('resize', shiftResizeQueue);