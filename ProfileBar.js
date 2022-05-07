import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';



const ProfileBar = (props) => {
    return(
        <View styles={styles.compmain}>
            <View style={styles.compmains}>
                <View style={styles.round}><Text style={styles.textcomp}>{props.title}</Text></View>
            </View>
        </View>
        
    )
}
const styles = StyleSheet.create({
    compmains: {
        display: 'flex',
        marginTop: 25,
        alignContent: 'center',
        marginLeft: 50,
        backgroundColor: '#697A70',
        height: 50,
        width: 250,
        borderRadius: 5,
},
    textcomp: {
        marginLeft: 50,
        color: 'darkseagreen',
        fontSize: 15,
        height: 50,
        width: 100,
},
    round: {
        marginLeft: 25,
        marginTop: 10,
        backgroundColor: '#425047',
        height: 30,
        width: 30,
        borderRadius: 25,
},

});
export default ProfileBar;