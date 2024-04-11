import { h } from 'preact';
import styles from './style.css'

const ListsTable = ({ listArr, listHeader }) => {
	return (
		<section class={styles.list}>
			<ul class={styles.list__header}>
				{
					listHeader.map((header, index) => (
						<li key={index} class={styles.list__col}>{header}</li>
					))
				}
			</ul>
			<ul class={styles.list__content}>
				{
					listArr.map((list, index) => (
						<li class={styles.list__item} key={index}>
							<div class={`${styles.list__col} ${styles.list__col_name}`}>{list.name}</div>
							<div class={styles.list__col}>{list.lastLead}</div>
							<div class={styles.list__col}>{list.leads}</div>
						</li>
					))
				}
			</ul>
		</section>
	);
}

export default ListsTable;