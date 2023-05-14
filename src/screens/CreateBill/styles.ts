import styled from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Content = styled.View`
	flex: 1;
	width: 100%;
	padding: 30px 30px 20px 30px;
	
	background-color: ${({ theme }) => theme.COLORS.GRAY_800};
`;

export const Form = styled.View`
	flex: 1;
	width: 100%;
	gap: 15px;
`;

export const DatePickerContainer = styled(TouchableOpacity)`
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	padding: 10px 20px;
	border-radius: 8px;

	background-color: ${({ theme }) => theme.COLORS.GRAY_700};
	border: 1px solid ${({ theme }) => theme.COLORS.GRAY_600};
	color: '#FFF';
`;

export const DatePickerText = styled.Text`
	color: ${({ theme }) => theme.COLORS.GRAY_300};
	font-size: 18px;
`;