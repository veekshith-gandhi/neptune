// import { useSelector } from "react-redux";
import { I18Props } from "../model/i18.types";
// import { AppStore } from "../model/store.model";
import { Language } from "../constants";

function evalTemplate(strans: string, params: any) {
	let tString = strans;
	if (params && Object.keys(params).length && params.S && Object.keys(params.S).length) {
		Object.keys(params.S).forEach((k) => {
			tString = tString.replace(`\${S.${k}}`, params.S[k]);
		});
	}
	return tString;
}

export function i18Get(key: string, lang: string, S?: any) {
	// const translations = useSelector((store: AppStore) => store.translations);
	// const trans = translations.translations && translations.translations.translations ? 
	// translations.translations.translations[lang] : '';
	const trans: any = {};
	try {
		let transText = key;
		if (trans && key in trans) {
			transText = trans[key];
		} else {
			transText = key;
		}
		// transText = '' + transText + '';
		return evalTemplate(transText, { S });
	} catch (err) {
		// console.log(err)
		// nothing to catch
	}
	return key;
}

export default (props: I18Props) => {
	const key = props.tkey;
	// const translations = useSelector((store: AppStore) => store.translations);
	// const language = translations && translations.language && translations.language.languageCode ? 
	// translations.language.languageCode : Language.ENGLISH;
	const language: string = Language.ENGLISH;
	const S = props.params;
	const replaceKey = props.replaceKey;
	const replaceVal = props.replaceVal;
	let value = i18Get(key, language, S);
	if (replaceKey && replaceKey.length && replaceVal && replaceVal.length) {
		replaceKey.forEach((key: string, index: number) => {
			if (key && replaceVal[index]) {
				value = value.replace(key, replaceVal[index]);
			}
		});
	}
	return <>{value}</>;
};