import { h } from 'preact';
import style from './style.css'

interface PopupProps {
	title: string;
	onClose: EventListener;
	children: any;
}

const defaultPopupProps: PopupProps = {
	title: '',
	onClose: () => '',
	children: ''
}

const Popup = (props: PopupProps = defaultPopupProps) => {
	const { children, title, onClose } = props;
	console.log(style)
	return (
		<div class="popup">
			<div class="popup__inner">
				<button class="popup__close" onClick={onClose} />
				<div class="popup__title">
					{title}
				</div>
				<div class="popup__body">
					{children}
				</div>
			</div>
		</div>
	)
}

export default Popup;