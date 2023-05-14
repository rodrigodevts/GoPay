import logoImg from '@assets/logo_login.png';
import googleImg from '@assets/google-icon.png';

import * as S from './styles';

export default function SignIn() {
	return (
		<S.Container>
			<S.Logo
				source={logoImg}
			/>
			<S.TitleWrapper>
				<S.Title>Evite confusão na {'\n'}casa</S.Title>
				<S.SubTitle>Defina os lembretes e Organize {'\n'}os pagamentos da casa</S.SubTitle>
			</S.TitleWrapper>
			<S.Footer>
				<S.SignInWrapper>
					<S.SubTitle>Faça seu login com {'\n'}uma das contas abaixo</S.SubTitle>
					<S.SocialButton>
						<S.SocialIcon
							source={googleImg}
						/>
						<S.SocialButtonTitle>Entrar com Google</S.SocialButtonTitle>
					</S.SocialButton>
				</S.SignInWrapper>
			</S.Footer>
		</S.Container>
	)
}