import styled from "styled-components/native";

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Content = styled.View`
	flex: 1;
	width: 100%;
	padding: 30px 30px 20px 30px;
	gap: 10px;

	background-color: ${({ theme }) => theme.COLORS.GRAY_800};
`;