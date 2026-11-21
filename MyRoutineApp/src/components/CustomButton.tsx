import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {CustomButtonProps, CustomButtonVariant} from "../utils/types/ButtonProps";
import { palette } from "../theme/palette";

export default function CustomButton({title, onPressButton, variant = "primary", disabled=false}: CustomButtonProps){
    const styles = getStyles(variant);

    return(
        <Pressable 
            style={styles.button} 
            onPress={onPressButton}
            disabled={disabled}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    )
}

// operadores logicos = AND, &&, OR, ||, !
// operadores condicionales = >, <, >=, <=, !=, ==, ===
// evaluacion logica(representa un valor logico {V o F}) = edad >= 18,
/* estructura de seleccion = If(evaluacion logica), 
                             If(evaluacion logica){ V }, Else{ F }, 
                             Op. Ternario (evaluacion logica ? accion si V : accion si F) 


*/
const getStyles = (variant: CustomButtonVariant) => 
    StyleSheet.create({
        button:{
           backgroundColor: variant === "primary" ? palette.brightTeal : 
                                variant === "secondary" ?  palette.steelBlue : 'transparent' ,
            width: 180,
            paddingVertical: 14,
            paddingHorizontal: 18,
            borderRadius: 12,
            alignItems: 'center',
            marginTop: 10,
            borderWidth: variant === "tertiary" ? 1.5 : 0,
            borderColor: variant === "tertiary" ? palette.brightTeal : 'transparent',
            shadowColor: palette.richBlack,
            shadowOffset: { width: 0, height: variant === "tertiary" ? 0 : 4 },
            shadowOpacity: variant === "tertiary" ? 0 : 0.22,
            shadowRadius: variant === "tertiary" ? 0 : 8,
            elevation: variant === "tertiary" ? 0 : 4,
        },
        buttonText:{
            color: variant === "primary" ? palette.richBlack : 
                   variant === "secondary" ? palette.skyBlue : palette.brightTeal,
            fontWeight: '600',
            fontSize: variant === "tertiary" ? 11 : 15,
            letterSpacing: 0.6,
        }
    })
