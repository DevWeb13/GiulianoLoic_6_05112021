function exposeMethod(methodName, method) {
	window[methodName] = method;
}

export { exposeMethod };
