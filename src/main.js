document.documentElement.lang = navigator.language;

function softkey(e) {
	let { target, key, shiftKey, bubbles, cancelable, repeat, type } = e;
	if (!/Left|Right/.test(key) || !key.startsWith("Arrow") || !shiftKey) return;
	target.dispatchEvent(new KeyboardEvent(type, { key: "Soft" + key.slice(5), bubbles, cancelable, repeat }));
}

window.addEventListener("keyup", softkey);
window.addEventListener("keydown", softkey);

import App from "./App.svelte";
const app = new App({
	target: document.body,
});

export default app;
