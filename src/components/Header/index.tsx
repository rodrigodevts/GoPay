import { useNavigation } from '@react-navigation/native';
import * as S from './styles';
import { StackNavigationProp } from '@react-navigation/stack';

type HeaderType = {
	title: string;
	isButtonBack?: boolean;
	isButtonNotification?: boolean;
}

export default function Header({ title, isButtonBack = false, isButtonNotification = true }: HeaderType) {
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
					<S.NotificationButton>
						<S.NotificationIcon />
						<S.Badge>
							<S.AmountNotification>3</S.AmountNotification>
						</S.Badge>
					</S.NotificationButton>
				)
			}
		</S.Container>
	)
}