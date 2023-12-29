import styled from "styled-components/native";
import { theme } from "../../themes/theme";

interface ButtonContainerProps {
    margin?: string;
};

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
    width: 100%;
    height: 48px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    ${(props: { margin: any; }) => (props.margin ? `margin: ${props.margin};` : '')};
`;

export const ButtonSecondary = styled(ButtonContainer)<ButtonContainerProps>`
    ${(props: { margin: any; }) => (props.margin ? `margin: ${props.margin};` : '')};
  
    background-color: ${theme.colors.neutralTheme.white};
`;