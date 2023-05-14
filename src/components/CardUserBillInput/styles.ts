import { TextInput } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";

export const User = styled.View`
	width: 100%;
	padding: 6px 10px;
	border-radius: 5px;
	gap: 12px;
	background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const UserHeader = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const UserName = styled.Text`
	font-size: 16px;
	color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Button = styled(TouchableOpacity)`
	width: 24px;
	height: 24px;
`;

export const DeleteIcon = styled(MaterialIcons).attrs({
	name: 'delete',
	size: 24,
})`
	color: ${({ theme }) => theme.COLORS.RED_400};
`;

export const InputsUser = styled.View``;

export const ButtonUserBill = styled(TouchableOpacity)`
	width: 100%;
	padding: 4px 10px;
	border-top-right-radius: 5px;
	border-top-left-radius: 5px;

	border-width: 1px;
	border-color: ${({ theme }) => theme.COLORS.GRAY_500};
	border-style: solid;

	background-color: ${({ theme }) => theme.COLORS.GRAY_700};
	color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ButtonUserBillText = styled.Text`
	font-size: 16px;
	color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const InputUserDiscount = styled(TextInput).attrs({
	placeholderTextColor: '#FFFFFF'
})`
	width: 100%;
	padding: 4px 10px;
	border-bottom-right-radius: 5px;
	border-bottom-left-radius: 5px;

	border: 1px;
	border-color: ${({ theme }) => theme.COLORS.GRAY_500};
	border-style: solid;

	background-color: ${({ theme }) => theme.COLORS.GRAY_700};
	font-size: 16px;
	color: ${({ theme }) => theme.COLORS.WHITE};
`;
