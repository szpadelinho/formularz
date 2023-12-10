import { Text, View, StyleSheet } from 'react-native';

const Header = ({title}) => {
    return(
        <View>
            <Text style={styles.header}>{title}</Text>
        </View>
    )
}

const styles = {
    header: {
        fontSize: 35, 
        fontFamily: "Tahoma", 
        margin: 15, 
        marginBottom: 50, 
        color: "#D9D9D9", 
        textAlign: "center", 
        fontWeight: 800
    }
}

export default Header;