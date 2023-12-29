import { View } from "react-native";

import Button from "../../../shared/components/button/Button";
import { ContainerLogin } from "../styles/login.style";
import Input from "../../../shared/components/input/Input";
import { theme } from "../../../shared/themes/theme";



const Login = () => {
    const handleOnPress = () => {
        console.log('CLICOU');
    };
    return (
        <View>
            <ContainerLogin>
                <Input />
                <Button type={theme.buttons.buttonsTheme.secondary} 
                margin="16px"
                title="ENTRAR"
                onPress={handleOnPress}
                />
            </ContainerLogin>
        </View>
    );
};

export default Login;