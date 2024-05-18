import { Text, TextStyle } from "react-native"
import { mainStyle } from "../mainStyles"

type Props = {
    content: string
    color?: TextStyle
}

export default function Title(props: Props) {
    return (
        <Text
            style={[
                mainStyle.colorViolet1,
                mainStyle.text,
                mainStyle.utendoMedium,
                props.color
            ]}
        >
            {props.content}
        </Text>
    )
}