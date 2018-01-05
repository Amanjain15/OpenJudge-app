export function now() {
	return new Date();
}

export function isValidDate(s) {
    var dateFormat = /^\d{4}[-]\d{2}[-]\d{2}[ ]\d{2}[:]\d{2}[:]\d{2}([.]\d{1,6})?[+|-]\d{2}[:]\d{2}/;

    if (dateFormat.test(s)) {
    	// format correct

    	// further checks are required though
    	return true;
    } else {
    	return false;
    }
}