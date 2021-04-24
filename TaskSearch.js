import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, multiline, Button, SafeAreaView, ActivityIndicator, Alert, AppRegistry } from 'react-native';

class TaskSearchScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            servicePersonID: '',
            Type: '',
            Amount: '',
            Description: '',
            OrderID: '',
            ServicePersonID: ''
        }

    }

    SearchRecord = () => {
        
        const { servicePersonID }  = this.state ;

        if (servicePersonID.length == 0) {
            alert("required field is Missing");
        } else {
            fetch('http://192.168.43.233/search.php', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
          
                body: JSON.stringify({
                    servicePersonID:servicePersonID 
           
            })
        })
           .then((response)=>response.json())
            .then((response)=> {
                this.setState({Type:response[0].Type});
                this.setState({Amount:response[0].Amount});
                this.setState({Description:response[0].Description});
                this.setState({OrderID:response[0].OrderID});
                this.setState({ServicePersonID:response[0].ServicePersonID});
              
            })
            .catch((error)=>
            {
                console.error(error);
            })
        }
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <TextInput
                    style={styles.inputs}

                    onChangeText={servicePersonID => this.setState({ servicePersonID })}
                    underlineColorAndroid="transparent"
                >
                </TextInput>
                <Button title="View"
                    onPress={this.SearchRecord}>

                </Button>

                <TextInput style={styles.inputs}
                    value={this.state.Type} >

                </TextInput>
                <TextInput style={styles.inputs}
                    value={this.state.Amount} >

                </TextInput>
                <TextInput style={styles.inputs}
                    value={this.state.Description} >

                </TextInput>
                <TextInput style={styles.inputs}
                    value={this.state.OrderID} >

                </TextInput>
                <TextInput style={styles.inputs}
                    value={this.state.ServicePersonID} >

                </TextInput>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    MainContainer: {

        justifyContent: 'center',
        flex: 1,
        margin: 10
    },

    inputs: {

        marginTop: 5,
        paddingVertical: 4,
        borderWidth: 2,
        borderColor: "#233554",
        borderRadius: 6,
        // backgroundColor: "#61dafb",
        color: "#233554",
        paddingHorizontal: 4,

        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 10,
    },
})

AppRegistry.registerComponent('TaskSearchScreen', () => TaskSearchScreen);
export default TaskSearchScreen;