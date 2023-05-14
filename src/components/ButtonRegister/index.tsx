import * as S from './styles';

type ButtonRegisterProps = {
	title: string;
}

export default function ButtonRegister({ title }: ButtonRegisterProps) {
	return (
		<S.ButtonRegister>
			<S.ButtonRegisterText>{title}</S.ButtonRegisterText>
		</S.ButtonRegister>
	)
}