import { View, Text, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { colors } from "../styles/theme";
import { Image } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

interface AppBarProps {
    navigation: NavigationProp<ParamListBase>;
}

export const AppBar: React.FC<AppBarProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image source={require('../assets/icons/insites-logo.png')} style={styles.logo} />
                <Text style={styles.title}>InSites</Text>
            </View>
            <View style={styles.rightContainer}>
                <Image source={require('../assets/icons/user-purple.png')} style={{ width: 40, height: 40 }}></Image>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 120,
        padding: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightContainer: {
        padding:10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    logo: {
        width:45,
        height:45,
    }
});
