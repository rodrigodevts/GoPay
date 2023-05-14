import styled from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const ButtonRegister = styled(TouchableOpacity)`
	width: 100%;
	padding: 16px;
	border-radius: 8px;

	align-items: center;
	justify-content: center;

	background-color: ${({ theme }) => theme.COLORS.GREEN_400};
`;

export const ButtonRegisterText = styled.Text`
	font-size: 16px;
	font-weight: 500;
	text-transform: uppercase;
	color: ${({ theme }) => theme.COLORS.WHITE};
`;