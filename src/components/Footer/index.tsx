import { View } from "react-native";
import { styles } from "./styles";
import { Buttons } from "../Buttons"
import { IPage } from "../../../App";

export function Footer({setPage, page}:IPage){
    const select = require("../../assets/wheelstop.png");
    const free = require("../../assets/wheel.png");
    return(
        <View style={styles.footer}>
            <Buttons page={page} setPage={setPage} />
        </View>
    ) 
}
