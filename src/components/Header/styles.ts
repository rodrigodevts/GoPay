import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
	width: 100%;
	position: relative;

	flex-direction: row;
	justify-content: center;
	align-items: center;

	margin-top: ${getStatusBarHeight()}px;
	padding: 30px;
`;

export const Title = styled.Text`
	font-size: 20px;
	font-weight: 500;
	text-transform: uppercase;
	color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const BackButton = styled(TouchableOpacity)`
	position: absolute;
	left: 24px;
	width: 54px;
	height: 34px;
	border-radius: 50%;
	padding-left: 10px;

	align-items: center;
	justify-content: center;
`;

export const Icon = styled(MaterialIcons).attrs({
	name: 'arrow-back-ios',
	size: 24
})`
	color: ${({ theme }) => theme.COLORS.WHITE};
`;