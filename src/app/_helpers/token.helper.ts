import { now } from './time.helper'

export function tokenNotExpired(token) {
	if (token == null) return false;
	var data = parseJwt(token);
	var exp = new Date(data.expiry_date);
	console.log(exp);
	if (exp > now()) return true;
	return false;
}

function parseJwt(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(atob(base64));
}