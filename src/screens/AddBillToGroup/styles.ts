import { MaterialIcons } from '@expo/vector-icons';
import styled from "styled-components/native";

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Content = styled.View`
	flex: 1;
	width: 100%;
	padding: 30px 30px 20px 30px;
	gap: 10px;

	background-color: ${({ theme }) => theme.COLORS.GRAY_800};
`;

export const CardBill = styled.TouchableOpacity`
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 20px;

	background-color: ${({ theme }) => theme.COLORS.GRAY_700};
	border-radius: 8px;
	border: 1px solid ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const BillName = styled.Text`
	font-size: 18px;
	text-transform: uppercase;
	color: ${({ theme }) => theme.COLORS.GRAY_50};
`;

export const CheckBoxIcon = styled(MaterialIcons).attrs(({ theme }) => ({
	size: 24,
	color: theme.COLORS.GREEN_300
}))``;