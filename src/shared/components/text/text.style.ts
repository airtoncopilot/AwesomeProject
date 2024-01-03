import styled from "styled-components/native";

interface ContainerTextProps {
    color?: string;
    fontSize: string;
    margin?: string;
    fontFamily: 'Poppins-Bold' | 'Poppins-Light' | 'Poppins-Regular' | 'Poppins-SemiBold';

};

export const ContainerText = styled.Text<ContainerTextProps>`
    ${(props: { color: any; }) => (props.color ? `color: ${props.color}` : '')};
    ${(props: { margin: any; }) => (props.margin ? `margin: ${props.margin}` : '')};

    padding-top: 3px;
    font-family: ${(props) => props.fontFamily};
    font-size: ${(props: { fontSize: any; }) => props.fontSize};
`;