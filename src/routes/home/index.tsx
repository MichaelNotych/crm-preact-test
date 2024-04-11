import { h } from 'preact';
import style from './style.css';
import Button from '../../components/button';
import { useState } from 'preact/hooks';
import { defaultListArr } from '../../mocks';
import ListsTable from '../../components/lists-table';
import Popup from '../../hoc/popup';
import Input from '../../components/input';

const Home = () => {
	const [listArr, setListArr] = useState(defaultListArr);
	const [creatListPopupIsOpen, setCreateListPopupIsOpen] = useState(false);
	const [newListName, setNewListName] = useState('');

	function newListNameHandler(e: Event) {
		setNewListName((e.target as HTMLInputElement)?.value || '');
	}

	function toggleCreateListFlag() {
		setCreateListPopupIsOpen(!creatListPopupIsOpen);
	}

	function createNewList(e: Event) {
		setListArr([...listArr, {
			id: `${listArr.length + 1}`,
			name: newListName || `Test list ${listArr.length + 1}`,
			lastLead: '',
			leads: 0,
		}]);

		toggleCreateListFlag();
	}

	return (
		<div class={style.crm}>
			<div class={style.crm__container}>
				<section class={style.crm__header}>
					<div class={style.crm_header__title}>Lists:</div>
					<Button text="Create new list" color="primary" onClick={toggleCreateListFlag} />
				</section>
				<ListsTable listArr={listArr} listHeader={['Name', 'Last lead', 'Leads']} />
			</div>
			{
				creatListPopupIsOpen ?
				<Popup title="Create new list" onClose={toggleCreateListFlag}>
					<form onSubmit={createNewList}>
						<Input label="title" id="list_name" value="" placeholder="My new list" onChange={newListNameHandler} />
						<div class={style.crm_popup__btns}>
							<Button text="Cancel" buttonType="button" color="secondary" onClick={toggleCreateListFlag} />
							<Button text="Create" buttonType="submit" color="primary" />
						</div>
					</form>
				</Popup>
				: ''
			}
				
		</div>
	);
};

export default Home;
