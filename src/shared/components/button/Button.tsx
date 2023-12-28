import { TouchableOpacityProps } from "react-native";

import { ButtonContainer } from "./button.style";
import Text from "../text/Text";
import { theme } from "../../themes/theme";


interface ButtonProps extends TouchableOpacityProps{
    title: string;
    margin?: string;
    type?: string;
};

const Button = ({ title, margin, type, ...props }: ButtonProps) => {
    return (
        <ButtonContainer margin={margin} {...props}>
         <Text color={theme.colors.neutralTheme.white}>{title}</Text>
        </ButtonContainer>
    );
};

export default Button;