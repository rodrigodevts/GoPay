import Header from '@components/Header';
import ButtonRegister from '@components/ButtonRegister';
import CardAdd from '@components/CardAdd';
import Input from '@components/Input';
import * as S from './styles';
import { FlatList, View } from 'react-native';

const USERS = [
	{
		id: '1',
		email: 'rodrigo@gmail.com'
	},
	{
		id: '2',
		email: 'rodrigo2@gmail.com'
	},
	{
		id: '3',
		email: 'rodrigo3@gmail.com'
	},
]

export default function AddUserToGroup() {
	return (
		<S.Container>
			<Header title='Incluir usuários' isButtonBack isButtonNotification={false} />

			<S.Content>
				<FlatList
					data={USERS}
					keyExtractor={(item) => item.id}
					bounces={false}
					showsVerticalScrollIndicator={false}
					style={{
						width: '100%',
					}}
					renderItem={({ item }) => (
						<Input placeholder='E-mail' value={item.email} iconName='delete' />
					)}
					ListFooterComponent={() => (
						<CardAdd action={() => {}} />
					)}
					ItemSeparatorComponent={() => (
						<View style={{ height: 15, width: '100%' }} />
					)}
				/>
				
				<ButtonRegister title='Incluir usuários' />
			</S.Content>
		</S.Container>
	)
}