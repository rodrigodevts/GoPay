import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";

export const Container = styled.View`
	flex: 1;
	width: 100%;
	background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const ScrollContent = styled.ScrollView`
	flex: 1;
	width: 100%;
	padding: 30px 30px 20px 30px;
	background-color: ${({ theme }) => theme.COLORS.GRAY_800};
`;

export const Content = styled.View`
	width: 100%;
	align-items: center;
	background-color: ${({ theme }) => theme.COLORS.GRAY_800};
	gap: 10px;
	padding-bottom: 10px;
`;

export const InputTags = styled.View`
	width: 100%;
	padding: 10px 20px;
	border-radius: 8px;
	gap: 15px;

	background-color: ${({ theme }) => theme.COLORS.GRAY_700};
	border: 1px solid ${({ theme }) => theme.COLORS.GRAY_600};
	color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const InputTagsHeader = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Title = styled.Text`
	font-size: 18px;
	color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const Button = styled(TouchableOpacity)`
	width: 24px;
	height: 24px;
`;

export const AddIcon = styled(MaterialIcons).attrs({
	name: 'add',
	size: 24,
})`
	color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const BillTags = styled.View`
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	gap: 10px;
`;

export const Users = styled.View`
	width: 100%;
	padding: 10px 20px;
	gap: 15px;

	border-radius: 8px;
	background-color: ${({ theme }) => theme.COLORS.GRAY_700};
	border: 1px solid ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const UsersHeader = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;