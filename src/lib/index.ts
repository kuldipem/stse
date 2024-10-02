const selectStyle = (condition: boolean, styleOnPass: Object, styleOnFail: Object): Object => {
	return condition ? styleOnPass : styleOnFail;
}

const buildStyle = (condition: boolean, styleKey: string, styleValueOnPass: string | number, styleValueOnFail: string | number): Object => {
	return {[styleKey]: condition ? styleValueOnPass : styleValueOnFail};
}

export {
  selectStyle,
	selectStyle as sest,
	buildStyle,
	buildStyle as bust,
}
