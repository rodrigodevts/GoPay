import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
	flex: 1;
	align-items: center;
	background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Content = styled.View`
	flex: 1;
	width: 100%;
	align-items: center;
	padding: 30px;
	background-color: ${({ theme }) => theme.COLORS.GRAY_800};
	gap: 10px;
`;

export const CardResponsibility = styled.View`
	gap: 15px;
	width: 100%;
	height: 132px;
	padding: 12px;
	border-radius: 5px;
	background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const SelectDate = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const TextDate = styled.Text`
	font-size: 16px;
	font-weight: 500;
	text-transform: uppercase;
	color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const NavigateDateButton = styled(TouchableOpacity)`
	width: 54px;
	height: 34px;
	border-radius: 50%;

	align-items: center;
	justify-content: center;
`;

export const BackIcon = styled(MaterialIcons).attrs({
	name: 'arrow-back-ios',
	size: 24
})`
	color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const NextIcon = styled(MaterialIcons).attrs({
	name: 'arrow-forward-ios',
	size: 24
})`
	color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Responsibility = styled.View`
	flex-direction: row;
	gap: 10px;
`;

export const Info = styled.View`
	justify-content: center;
	gap: 5px;
`;

export const Title = styled.Text`
	font-size: 16px;
	font-weight: 300;
	color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Name = styled.Text`
	font-size: 20px;
	font-weight: 700;
	color: ${({ theme }) => theme.COLORS.GREEN_300};
`;

export const Avatar = styled.Image`
	width: 60px;
	height: 60px;

	border-radius: 5px;
`;