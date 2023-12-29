import { TouchableOpacityProps } from "react-native";

import { ButtonContainer } from "./button.style";
import Text from "../text/Text";
import { theme } from "../../themes/theme";
import { textTypes } from "../text/textTypes";


interface ButtonProps extends TouchableOpacityProps{
    title: string;
    margin?: string;
    type?: string;
};

const Button = ({ title, margin, type, ...props }: ButtonProps) => {
    switch (type) {
        case theme.buttons.buttonsTheme.secondary:
            return (
                <ButtonContainer margin={margin} {...props}>
                 <Text type={textTypes.BUTTON_BOLD} color={theme.colors.neutralTheme.white}>
                    {title}
                </Text>
                </ButtonContainer>
            );
        case theme.buttons.buttonsTheme.primary:
        default:
            return (
                <ButtonContainer margin={margin} {...props}>
                 <Text type={textTypes.BUTTON_BOLD} color={theme.colors.neutralTheme.white}>
                    {title}
                </Text>
                </ButtonContainer>
            );
    }

};

export default Button;