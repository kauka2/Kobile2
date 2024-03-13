import { ImageBackground, Image, View, Text } from "react-native";
import { globalStyle } from "../../styles/GlobalStyle";
import { Footer } from '../../components/Footer/index';
import { styles } from "./styles";
import { IPage } from "../../../App";

export function Slide3({setPage, page}:IPage){
    const background = require("../../assets/rx7.png");
    const car = require("../../assets/sport-car.png");
    const title = require("../../assets/title.png");
    return(
        <ImageBackground source={background} style={globalStyle.container}> 
            <View style={globalStyle.background}>
                <View style={styles.primary}>
                    <Image source={title}/>
                    <Image source={car}/> 
                    <Text style={styles.text}>Antigos e perolas raras</Text>
                </View>
                <Footer page={page} setPage={setPage}/>
            </View>
        </ImageBackground>
    )
}