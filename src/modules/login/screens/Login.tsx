import { View } from "react-native";

import Button from "../../../shared/components/button/Button";
import { ContainerLogin } from "../styles/login.style";
import Input from "../../../shared/components/input/Input";
import { theme } from "../../../shared/themes/theme";
import { Icon } from "../../../shared/components/icon/icon";



const Login = () => {
    const handleOnPress = () => {
        console.log('CLICOU');
    };
    return (
        <View>
            <ContainerLogin>
                <Icon name="home3"/>
                <Input placeholder="Digite seu email" title="Email:"/>
                <Button type={theme.buttons.buttonsTheme.primary} 
                margin="16px"
                title="ENTRAR"
                onPress={handleOnPress}
                />
            </ContainerLogin>
        </View>
    );
};

export default Login;