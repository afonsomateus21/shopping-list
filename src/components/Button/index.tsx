import { TouchableOpacityProps } from "react-native";
import { Container } from "./styles";

export function Button({ ...rest }: TouchableOpacityProps) {
  return (
    <Container {...rest} />
  )
}