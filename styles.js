import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        backgroundColor: 'gray',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        padding: 20,
        fontWeight: 'bold',
        fontFamily: 'Playfair Display',
    },
    textinput: {
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Lobster',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 3,
        margin: 10,
        width: '30%',
    },
    
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    label: {
        fontSize: 20,
        marginRight: 10,

    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    }
});

export default styles;