import { View } from "react-native";

export default function Name({ myName }) {
    return (
        <View>
            <h1>
                {myName}
            </h1>
        </View>
    )
}