import { MaterialIcons } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

type CardAmountInfoType = {
	isAmount: boolean;
};

export const Container = styled.View<CardAmountInfoType>`
	position: relative;
	
	width: 100%;
	height: 80px;
	border-radius: 5px;
	background-color: ${({ theme }) => theme.COLORS.GRAY_700};

	${(props) => !props.isAmount && css`
		border: 1px solid ${({ theme }) => theme.COLORS.YELLOW_300};
	`};
	
	align-items: center;
	justify-content: center;
	gap: 8px;
`;

export const Title = styled.Text`
	font-size: 16px;
	font-weight: 500;
	text-transform: uppercase;
	color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Amount = styled.Text<CardAmountInfoType>`
	font-size: ${(props) => props.isAmount ? 22 : 14}px;
	font-weight: 500;
	color: ${({ theme }) => theme.COLORS.YELLOW_300};
`;

export const InfoIcon = styled(MaterialIcons).attrs({
	name: 'info',
	size: 20
})`
	position: absolute;
	left: 8px;
	top: 8px;
	color: ${({ theme }) => theme.COLORS.YELLOW_300};
`;
