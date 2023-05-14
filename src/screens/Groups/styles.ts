import styled from "styled-components/native";

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Content = styled.View`
	flex: 1;
	width: 100%;
	align-items: center;
	padding: 30px 30px 0px 30px;
	background-color: ${({ theme }) => theme.COLORS.GRAY_800};
	gap: 10px;
`;
