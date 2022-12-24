import { useState } from "react";
import { useSelector } from "react-redux";
import I18 from "../../i18";
import { AppStore } from "../../model/store.model";

interface ActionBtnProps {
    onClick(): void,
    className: string,
    text: string
}

export default (props: ActionBtnProps) => {
	const [isLoading, setIsLoading] = useState(false);
	const actions = useSelector((store: AppStore) => store.actionBtn);

	const onButtonClick = (event: any) => {
		event.preventDefault();
		if (props.onClick && !isLoading) {
			setIsLoading(true);
			props.onClick();
		}
	};

	if (isLoading !== actions.actionTriggered) {
		setIsLoading(actions.actionTriggered);
	}

	return (
		<button className={props.className ? props.className : "common_button"} disabled={isLoading} onClick={onButtonClick} >
			{isLoading ? <I18 tkey="Loading..."/> : props.text}
		</button>
	);
};