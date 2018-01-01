export function setInStorage(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
};

export function getFromStorage(key) {
	return localStorage.getItem(key);
};

export function removeFromStorage(key) {
	localStorage.removeItem(key);
};