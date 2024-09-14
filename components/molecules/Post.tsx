import { View } from "react-native";
import PostImage from "../atoms/PostImage";
import Message from "../atoms/Message";
import Name from "../atoms/Name";

export default function Post() {
    return <View style={{ justifyContent: "center", alignItems: "center", marginTop: "5rem" }}>
        <PostImage imageSource="https://upload.wikimedia.org/wikipedia/commons/6/60/Juvenile_Female_Mesocricetus_auratus_in_Pet_Store_enclosure%2C_Illinois%2C_USA.jpg" imageAlt="hamster" />
        <Name myName="Becky!" />
        <Message myMessage="The cutest creature to ever exist!" />
    </View>
}