import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
	flex: 1;
	position: relative;
	align-items: center;
	gap: 105px;
	background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Logo = styled.Image`
	width: 132px;
	height: 115px;

	margin-top: 150px;
`;

export const TitleWrapper = styled.View`
	flex-direction: column;
	align-items: center;
	gap: 9px;
`;

export const Title = styled.Text`
	font-size: 24px;
	font-weight: 700;
	text-align: center;
	color: ${({theme}) => theme.COLORS.WHITE};
`;

export const SubTitle = styled.Text`
	font-size: 18px;
	font-weight: 400;
	text-align: center;
	color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Footer = styled.View`
	width: 100%;
	height: 167px;
	position: absolute;
	bottom: 0;

	align-items: center;
	background-color: ${({ theme }) => theme.COLORS.GREEN_300};
`;

export const SignInWrapper = styled.View`
	width: 100%;
	align-items: center;
	gap: 19px;
	margin-top: -85px;
`;

export const SocialButton = styled(TouchableOpacity)`
	position: relative;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	width: 100%;
	max-width: 327px;
	padding: 18px;
	border-radius: 5px;

	background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const SocialIcon = styled.Image`
	width: 25px;
	height: 25px;

	position: absolute;
	left: 16px;
`;

export const SocialButtonTitle = styled.Text`
	font-size: 16px;
	font-weight: 500;
	text-align: center;
	color: ${({ theme }) => theme.COLORS.GRAY_700};
`;
