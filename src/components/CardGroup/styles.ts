import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
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

export const GroupDetails = styled.View`
	flex-direction: row;
	align-items: center;
	gap: 20px;
`;

export const GroupIcon = styled(MaterialIcons).attrs({
	name: 'groups',
	size: 32,
})`
	color: ${({ theme }) => theme.COLORS.GREEN_400};
`;

export const GroupName = styled.Text`
	font-size: 18px;
	font-weight: 500;
	text-transform: uppercase;
	color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Users = styled.View`
	flex-direction: row;
	gap: -10px;
`;

export const Avatar = styled.Image`
	width: 30px;
	height: 30px;

	border-radius: 9999px;
`;