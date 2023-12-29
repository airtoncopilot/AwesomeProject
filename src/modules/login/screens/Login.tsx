import { View } from "react-native";

import Button from "../../../shared/components/button/Button";
import { ContainerLogin } from "../styles/login.style";
import Input from "../../../shared/components/input/Input";



const Login = () => {
    const handleOnPress = () => {
        console.log('CLICOU');
    };
    return (
        <View>
            <ContainerLogin>
                <Input />
                <Button margin="16px" title="ENTRAR" onPress={handleOnPress} />
            </ContainerLogin>
        </View>
    );
};

export default Login;