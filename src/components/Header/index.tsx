import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';
import * as S from './styles';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

type HeaderType = {
	title: string;
	isButtonBack?: boolean;
	isButtonNotification?: boolean;
}

const NOTIFICATIONS = [
	{
		id: '1',
		title: 'Água',
		description: 'Allan, a conta de água vai vencer amanhã no valor de R$ 300,30. Não esqueça de registrar o pagamento no aplicativo.',
		dateNotification: '14 de Maio de 2023'
	},
	{
		id: '2',
		title: 'Internet',
		description: 'Allan, a conta de água vai vencer amanhã no valor de R$ 300,30. Não esqueça de registrar o pagamento no aplicativo.',
		dateNotification: '14 de Maio de 2023'
	},
	{
		id: '3',
		title: 'Luz',
		description: 'Allan, a conta de água vai vencer amanhã no valor de R$ 300,30. Não esqueça de registrar o pagamento no aplicativo.',
		dateNotification: '14 de Maio de 2023'
	},
	{
		id: '4',
		title: 'Luz',
		description: 'Allan, a conta de água vai vencer amanhã no valor de R$ 300,30. Não esqueça de registrar o pagamento no aplicativo.',
		dateNotification: '14 de Maio de 2023'
	},
	{
		id: '5',
		title: 'Luz',
		description: 'Allan, a conta de água vai vencer amanhã no valor de R$ 300,30. Não esqueça de registrar o pagamento no aplicativo.',
		dateNotification: '14 de Maio de 2023'
	},
]

export default function Header({ title, isButtonBack = false, isButtonNotification = true }: HeaderType) {
	const [ modalVisible, setModalVisible ] = useState(false);
	const navigation = useNavigation<StackNavigationProp<any>>();

	return (
		<S.Container>
			{isButtonBack && (
				<S.BackButton onPress={() => navigation.goBack()}>
					<S.BackIcon />
				</S.BackButton>
			)}
			<S.Title>{title}</S.Title>
			{
				isButtonNotification && (
					<S.NotificationButton
						onPress={() => setModalVisible(true)}
					>
						<S.NotificationIcon />
						<S.Badge>
							<S.AmountNotification>3</S.AmountNotification>
						</S.Badge>
					</S.NotificationButton>
				)
			}

			<S.ModalNotification
				visible={modalVisible}
				animationType='fade'
				transparent
			>
				<S.ModalNotificationContainer>
					<S.ModalNotificationContent>
						<S.ModalHeader>
							<S.ModalTitle>Notificações</S.ModalTitle>
							<TouchableOpacity
								onPress={() => setModalVisible(false)}
							>
								<MaterialIcons name="close" size={24} color="white" />
							</TouchableOpacity>
						</S.ModalHeader>
						
						<FlatList
							data={NOTIFICATIONS}
							keyExtractor={(item) => item.id}
							style={{
								width: '100%',
							}}
							bounces={false}
							showsVerticalScrollIndicator={false}
							renderItem={({ item }) => (
								<S.Notification>
									<S.NotificationTitle>{item.title}</S.NotificationTitle>
									<S.NotificationDescription>{item.description}</S.NotificationDescription>
									<S.NotificationDate>{item.dateNotification}</S.NotificationDate>
								</S.Notification>
							)}
							ItemSeparatorComponent={() => (
								<View style={{ height: 15, width: '100%' }} />
							)}
						/>
					</S.ModalNotificationContent>
				</S.ModalNotificationContainer>
			</S.ModalNotification>
		</S.Container>
	)
}