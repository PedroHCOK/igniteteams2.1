import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native'; //tem difereça entre a importação direta com {{useTheme}} e {{import theme}}. Usar desta forma ao usar styled-components

import { Container } from './styles';

export function Input({ ...rest}: TextInputProps){
    const { COLORS } = useTheme();

    return (
        <Container
            placeholderTextColor={COLORS.GRAY_300}
            {...rest}
        />
    );
}