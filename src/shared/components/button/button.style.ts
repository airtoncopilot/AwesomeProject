import styled from "styled-components/native";

interface ButtonContainerProps {
    margin?: string;
};

export const ButtonContainer = styled.TouchableOpacity`
    width: 100%;
    height: 48px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    ${(props: { margin: any; }) => (props.margin ? `margin: ${props.margin};` : '')};
    background-color: blue;
`;