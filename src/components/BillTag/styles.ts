import styled from "styled-components/native";

export const BillTag = styled.View`
	justify-content: center;
	align-items: center;

	height: 22px;
	padding: 2px 10px;
	border-radius: 50%;

	background-color: ${({ theme }) => theme.COLORS.PINK_300};
`;

export const BillTagText = styled.Text`
	font-size: 14px;
	color: ${({ theme }) => theme.COLORS.WHITE};
`;