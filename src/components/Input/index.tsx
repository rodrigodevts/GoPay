import { TextInputProps } from 'react-native';
import * as S from './styles';

type InputType = {
	iconName?: string;
} & TextInputProps;

export default function Input({ iconName, ...props }: InputType) {
	return (
		<S.InputContainer>
			<S.InputContent {...props} placeholderTextColor='#CBD5E0' />
			
			{!!iconName && (
				<S.Button>
					<S.Icon iconName={iconName} />
				</S.Button>
			)}
		</S.InputContainer>
	)
}