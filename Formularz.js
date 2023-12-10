import { View, Text, TextInput, Pressable, ToastAndroid } from 'react-native'
import {useState} from "react"
import Header from './Header.js'

const Formularz = () => {

    const [name, setName] = useState("")

    function nameHandler(text){
        setName(text)
    }

    const [surName, setSurName] = useState("")

    function surNameHandler(text){
        setSurName(text)
    }

    const [age, setAge] = useState("")

    function ageHandler(text){
        setAge(text)
    }

    const [adress, setAdress] = useState("")

    function adressHandler(text){
        setAdress(text)
    }

    const [email, setEmail] = useState("")

    function emailHandler(text){
        setEmail(text)
    }

    const [telephone, setTelephone] = useState("")

    function telephoneHandler(text){
        setTelephone(text)
    }
    function showData(){
        let data = `Nazywasz się ${name} ${surName}, masz ${age} lat, mieszkasz w ${adress}, twój adres e-mail to ${email}, a twój numer telefonu to ${telephone}`
        ToastAndroid.show(data, ToastAndroid.LONG)
    }

    return(
        <View style={[styles.form, styles.shadow]}>
            <Header title={"Formulejrorz"}/>
            <TextInput onChangeText={nameHandler} style={styles.paragraph} label="Imię" placeholder="Imię: "/>
            <TextInput onChangeText={surNameHandler} style={styles.paragraph} label="Nazwisko" placeholder="Nazwisko: "/>
            <TextInput onChangeText={ageHandler} style={styles.paragraph} label="Wiek" inputMode="numeric" placeholder="Wiek: "/>
            <TextInput onChangeText={adressHandler} style={styles.paragraph} label="Miejsce zamieszkania" placeholder="Miejsce zamieszkania: "/>
            <TextInput onChangeText={emailHandler} style={styles.paragraph} label="Adres e-mail" inputMode="email" placeholder="Adres e-mail: "/>
            <TextInput onChangeText={telephoneHandler} style={styles.paragraph} label="Numer telefonu" inputMode="tel" placeholder="Numer telefonu: "/>
            <Pressable onPress={showData} style={styles.button}> 
                <Text style={{fontFamily: "Tahoma", fontSize: 18, color: "#D9D9D9"}}>Prześlij swój formularz</Text>
            </Pressable>
        </View>
    );
}

const styles = {
    paragraph: {
        marginTop: 10,
        marginRight: 5,
        marginBottom: 10,
        marginLeft: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderColor: "#FEC0CE",
        backgroundColor: "#FEC0CE",
    },

    form: {
        backgroundColor: "#031927",
        padding: 60,
        borderRadius: 20,
        position: "absolute"
    },

    button: {
        marginTop: 20,
        marginRight: 5,
        marginBottom: 20,
        marginLeft: 5,
        padding: 10,
        borderRadius: 15,
        backgroundColor: "#D81E5B",
        paddingVertical: 10,
        paddingHorizontal: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 5,
        },
        shadowOpacity: .5,
        shadowRadius: 10,

        elevation: 10,
        }
    }

export default Formularz;