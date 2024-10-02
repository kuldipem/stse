declare const selectStyle: (condition: boolean, styleOnPass: Object, styleOnFail: Object) => Object;
declare const buildStyle: (condition: boolean, styleKey: string, styleValueOnPass: string | number, styleValueOnFail: string | number) => Object;
export { selectStyle, selectStyle as sest, buildStyle, buildStyle as bust, };
