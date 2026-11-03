import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {CustomButtonProps, CustomButtonVariant} from "../utils/types/ButtonProps";


    return(
        <TouchableOpacity style={styles.button} onPress={onPressButton}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: 'navy',
        padding: 12,
        marginTop: 10,
        width: 180,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: 'white',
        fontWeight: '500'
    }
})