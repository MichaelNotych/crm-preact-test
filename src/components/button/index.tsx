import { h } from 'preact';
import style from './style.css'

interface ButtonProps {
	text: string;
	color: string;
	buttonType?: "button" | "submit" | "reset";
	onClick?: EventListener;
}

const defaultButtonProps: ButtonProps = {
    text: '',
    color: '',
	buttonType: 'button',
	onClick: () => ''
}

const Button = (props: ButtonProps = defaultButtonProps) => {
	const { text, color, onClick, buttonType } = props;
	return (
		<button 
			class={`
				${style.button} 
				${color === 'secondary' ? style.button_secondary : ''} 
				${color === 'primary' ? style.button_primary : ''}
			`}
			onClick={onClick} // Update the type of onClick
			type={buttonType}
		>
			{text}
		</button>
	)
}

export default Button;