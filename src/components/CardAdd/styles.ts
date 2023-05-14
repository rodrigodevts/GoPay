import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

type CardAddType = {
	height?: number;
}

export const Container = styled(TouchableOpacity)<CardAddType>`
	width: 100%;
	height: ${({ height }) => height || 57}px;
	border-radius: 5px;
	margin-top: 15px;

	align-items: center;
	justify-content: center;

	background-color: ${({ theme }) => theme.COLORS.GRAY_700};
	border: 1px dashed ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const AddIcon = styled(MaterialIcons).attrs({
	name: 'add',
	size: 24,
})`
	color: ${({ theme }) => theme.COLORS.GRAY_400};
`;