import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import Input from '@components/Input';
import Header from '@components/Header';
import BillTag from '@components/BillTag';
import CardUserBillInput from '@components/CardUserBillInput';
import ButtonRegister from '@components/ButtonRegister';

import * as S from './styles';

export default function CreateGroup() {
	const navigation = useNavigation<StackNavigationProp<any>>();

	return (
		<S.Container>
			<Header title='Grupo' isButtonBack isButtonNotification={false} />
			<S.ScrollContent>
				<S.Content>
					<Input placeholder='Nome' />
					<Input placeholder='Intervalo de Pagamento' keyboardType='number-pad' />

					<S.InputTags>
						<S.InputTagsHeader>
							<S.Title>Contas</S.Title>
							<S.Button onPress={() => navigation.navigate('addBillToGroup')}>
								<S.AddIcon />
							</S.Button>
						</S.InputTagsHeader>
						<S.BillTags>
							<BillTag title='Luz' />
						</S.BillTags>
					</S.InputTags>

					<S.Users>
						<S.UsersHeader>
							<S.Title>Usuários</S.Title>
							<S.Button onPress={() => navigation.navigate('addUserToGroup')}>
								<S.AddIcon />
							</S.Button>
						</S.UsersHeader>
						<CardUserBillInput username='Rodrigo A.' bill='Luz' />
						<CardUserBillInput username='Kaio Cezar' bill='Água' />
						<CardUserBillInput username='Kaio Cezar' bill='Água' />
						<CardUserBillInput username='Kaio Cezar' bill='Água' />
					</S.Users>
				</S.Content>
				<ButtonRegister title='Registrar' />
				<View style={{ height: 80 }} />
			</S.ScrollContent>
		</S.Container>
	)
}