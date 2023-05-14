import { MaterialIcons } from '@expo/vector-icons';
import styled from "styled-components/native";

export const CardContainer = styled.TouchableOpacity`
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 20px;

	background-color: ${({ theme }) => theme.COLORS.GRAY_700};
	border-radius: 8px;
	border: 1px solid ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Name = styled.Text`
	font-size: 18px;
	text-transform: uppercase;
	color: ${({ theme }) => theme.COLORS.GRAY_50};
`;

export const CheckBoxIcon = styled(MaterialIcons).attrs(({ theme }) => ({
	size: 24,
	color: theme.COLORS.GREEN_300
}))``;