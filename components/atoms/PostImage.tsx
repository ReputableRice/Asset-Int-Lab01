import { View } from "react-native";

export default function PostImage({ imageSource , imageAlt }) {
    return <View>
        <img src={imageSource} alt={imageAlt} width={400} />
    </View>
}