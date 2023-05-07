import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

type CardHouseBillsType = {
	isPaidOut: boolean;
}

export const Container = styled.View<CardHouseBillsType>`
	width: 356px;
	height: 100px;
	border-radius: 8px;
	margin-top: 20px;

	background-color: ${({ theme }) => theme.COLORS.GRAY_700};
	border-left-width: 5px;
	border-left-style: solid;
	border-left-color: ${({ theme, isPaidOut }) => 
		isPaidOut ? theme.COLORS.GREEN_300 : theme.COLORS.YELLOW_300
	};

	align-items: center;
	justify-content: center;
	gap: 8px;
`;

export const Content = styled.View`
	width: 100%;
	height: 100%;
	padding: 18px 24px;

	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const InfoBill = styled.View`
	flex-direction: column;	
	gap: 10px;
`;

export const BillName = styled.Text`
	font-size: 20px;
	font-weight: 500;
	text-transform: uppercase;
	color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const InfoAmountBill = styled.View`
	flex-direction: row;	
	gap: 12px;
`;

export const ValueContent = styled.View`
	flex-direction: column;
	gap: 3px;
`;

export const ValueTitle = styled.Text`
	font-size: 14px;
	font-weight: 500;
	color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const Value = styled.TextInput`
	font-size: 16px;
	font-weight: 500;
	color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Payment = styled(TouchableOpacity)`
	justify-content: center;
	align-items: center;
	gap: 5px;
`;

export const PaymentIcon = styled(MaterialCommunityIcons).attrs({
	name: 'barcode',
	size: 43,
})`
	color: ${({ theme }) => theme.COLORS.YELLOW_300};
`;

export const PaidOutIcon = styled(MaterialIcons).attrs({
	name: 'attach-money',
	size: 43,
})`
	color: ${({ theme }) => theme.COLORS.GREEN_300};
`;

export const PaymentInfo = styled.Text<CardHouseBillsType>`
	font-size: 16px;
	font-weight: 500;
	text-transform: uppercase;
	color: ${({ theme, isPaidOut }) => isPaidOut ? theme.COLORS.GREEN_300 : theme.COLORS.YELLOW_300};
`;