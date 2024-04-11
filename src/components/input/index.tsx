import { h } from 'preact';
import style from './style.css';

interface InputProps {
	id: string;
	placeholder: string;
	label: string;
	value: string;
	onChange: EventListener;
}

const defaultInputProps: InputProps = {
	id: '',
	placeholder: '',
	label: '',
	value: '',
	onChange: () => ''
}

const Input = (props: InputProps = defaultInputProps) => {
	const { id, placeholder, label, value, onChange } = props;
	return (
		<div class={style.wrapper}>
			<label for={id}>{label}</label>
			<input
				id={id}
				class={style.input}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				/>
		</div>
	)
};

export default Input;