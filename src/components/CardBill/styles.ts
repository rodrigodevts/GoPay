import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled(TouchableOpacity)`
	width: 100%;
	padding: 24px;
	margin-bottom: 20px;
	border-radius: 8px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	
	background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const BillDetails = styled.View`
	flex-direction: row;
	align-items: center;
	gap: 20px;
`;

export const BillIcon = styled(MaterialIcons).attrs({
	name: 'note',
	size: 32,
})`
	color: ${({ theme }) => theme.COLORS.GREEN_400};
	transform: rotate(270deg);
`;

export const BillInfo = styled.View`
	gap: 5px;
`;

export const BillName = styled.Text`
	font-size: 18px;
	font-weight: 500;
	text-transform: uppercase;
	color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const BillMaturity = styled.Text`
	font-size: 14px;
	font-weight: 400;
	color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const ButtonDelete = styled(TouchableOpacity)`
	width: 32px;
	height: 32px;
`;

export const DeleteIcon = styled(MaterialIcons).attrs({
	name: 'delete',
	size: 32
})`
	color: ${({ theme }) => theme.COLORS.RED_400};
`;