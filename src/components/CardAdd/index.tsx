import { GestureResponderEvent, TouchableOpacityProps } from 'react-native';
import * as S from './styles';

type CardAddProps = {
	action: ((event: GestureResponderEvent) => void) | undefined;
	height?: number;
} & TouchableOpacityProps;

export default function CardAdd({ action, height }: CardAddProps) {
	return (
		<S.Container onPress={action} height={height} >
			<S.AddIcon />
		</S.Container>
	)
}