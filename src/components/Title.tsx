import { Text } from "react-native"
import { mainStyle } from "../mainStyles"

type Props = {
    content: string
}
export default function Title(props: Props) {
    return (
        <Text
            style={[
                mainStyle.colorViolet1,
                mainStyle.text,
                mainStyle.utendoMedium
            ]}
        >
            {props.content}
        </Text>
    )
}