import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput, TouchableOpacity } from "react-native";

type InputType = {
	iconName?: string;
}

export const InputContainer = styled.View`
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-right: 40px;

	background-color: ${({ theme }) => theme.COLORS.GRAY_700};
	border-radius: 8px;
	border: 1px solid ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const InputContent = styled(TextInput)`
	width: 100%;
	padding: 16px 20px;
	background: transparent;

	color: ${({ theme }) => theme.COLORS.GRAY_300};
	font-size: 18px;
`;

export const Button = styled(TouchableOpacity)`
	width: 24px;
	height: 24px;
`;

export const Icon = styled(MaterialIcons).attrs<InputType>(({ theme, iconName }) => ({
	name: iconName,
	size: 24,
	color: theme.COLORS.RED_400
}))``;