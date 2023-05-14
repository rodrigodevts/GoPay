import { useState } from 'react';
import { FlatList, View } from 'react-native';
import Header from '@components/Header';
import CardCheckbox from '@components/CardCheckbox';
import * as S from './styles';
import ButtonRegister from '@components/ButtonRegister';

const BILLS = [
	{
		id: '1',
		name: 'Água'
	},
	{
		id: '2',
		name: 'Internet'
	},
	{
		id: '3',
		name: 'Luz'
	},
]

export default function AddBillToGroup() {
	const [selectedItems, setSelectedItems] = useState(['']);
	
	const toggleItem = (itemId: string) => {
		if (selectedItems.includes(itemId)) {
			setSelectedItems(selectedItems.filter((id) => id !== itemId));
		} else {
			setSelectedItems([...selectedItems, itemId]);
		}
	}

	return (
		<S.Container>
			<Header title='Incluir Contas' isButtonBack isButtonNotification={false} />

			<S.Content>
				<FlatList
					data={BILLS}
					keyExtractor={(item) => item.id}
					bounces={false}
					showsVerticalScrollIndicator={false}
					style={{
						width: '100%',
					}}
					renderItem={({ item }) => (
						<CardCheckbox
							id={item.id}
							name={item.name}
							onValueChange={() => toggleItem(item.id)}
							isChecked={selectedItems.includes(item.id)}
						/>
					)}
					ItemSeparatorComponent={() => (
						<View style={{ height: 15, width: '100%' }} />
					)}
				/>

				<ButtonRegister title='Incluir contas' />
			</S.Content>
		</S.Container>
	)
}