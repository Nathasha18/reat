import React, { Component } from 'react';

import { ActivityIndicator, Alert, FlatList, Text, StyleSheet, View, TextInput, TouchableHighlight, SafeAreaView, ScrollView, Button, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
export default class ViewNotes extends Component {

    constructor(props) {

        super(props);

        this.state = {
            id: '',
            description: '',
            type: '',
            orderID: '',
            added_By: '',
            isLoading: true,
            text: '',
            data: [],

        }

        this.arrayholder = [];
    }

    componentDidMount() {

        return fetch('http://192.168.43.233/noteView.php')
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson);
                this.setState({
                    isLoading: false,
                    data: responseJson,
                }, () => {
                    // In this block you can do something with new state.
                    this.arrayholder = responseJson;
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    GetFlatListItem(name) {
        Alert.alert(name);
    }

    searchData(text) {
        const newData = this.arrayholder.filter(item => {
            const itemData = item.OrderID.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1


        });

        this.setState({
            data: newData,
            text: text
        })
    }

    itemSeparator = () => {
        return (
            <View
                style={{
                    height: .5,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    }

    UpdateDataToServer = (index) => {

        // const date = new Date()

        if (this.state.data[index].Description.length == 0 || this.state.data[index].Type.length == 0 || this.state.data[index].OrderID.length == 0 || this.state.data[index].Added_By.length == 0) {
            alert("required field is Missing");
        } else {
            fetch('http://192.168.43.233/noteUpdate.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({

                    id: this.state.data[index].NoteID,

                    description: this.state.data[index].Description,

                    type: this.state.data[index].Type,

                    orderID: this.state.data[index].OrderID,

                    added_By: this.state.data[index].Added_By,

                    updatedAt: new Date()

                })

            }).then((response) => response.json())
                .then((responseJson) => {

                    // Showing response message coming from server after inserting records.
                    Alert.alert(responseJson);

                }).catch((error) => {
                    console.error(error);
                });


        }
    }
    DeleteDataToServer = (index) => {

        // const date = new Date()

        
            fetch('http://192.168.43.233/noteDelete.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({

                   
                    id: this.state.data[index].NoteID,

                    description: this.state.data[index].Description,

                    type: this.state.data[index].Type,

                    orderID: this.state.data[index].OrderID,

                    added_By: this.state.data[index].Added_By,

                    deletedAt: new Date()
                    


                })

            }).then((response) => response.json())
                .then((responseJson) => {

                    // Showing response message coming from server after inserting records.
                    Alert.alert(responseJson);

                }).catch((error) => {
                    console.error(error);
                });


        }
   

    onChangeHandler = ({ key, value }, index) => {
        // console.log(key, value, index);
        const newDataSet = [...this.state.data.map((item, itemIndex) => {
            if (index == itemIndex) return { ...item, [key]: value }
            else return item
        })]
        this.setState(cur => ({ ...cur, data: newDataSet }), callBack => {
            console.log(this.state.data[index]);
        })
    }


    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (

            <View style={styles.MainContainer}>



                <Text
                    style={{
                        color: '#233554',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 20,
                        marginTop: 10
                    }}>
                    View Extrachrges
                            </Text>



                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.searchData(text)}
                    value={this.state.text}
                    underlineColorAndroid='transparent'
                    placeholder="Search Here" />

                <FlatList
                    data={this.state.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) =>

                        <View style={{ backgroundColor: "#D5D8DC", padding: 10, margin: 10 }}>
                            <Text> NoteID</Text>
                            <TextInput
                                // onChangeText={text => this.onChangeHandler({ key: 'ExtraChargeID', value: text }, index)}
                                value={item.NoteID}
                                style={styles.inputs}
                                editable={false}
                            />
                            <Text>Description</Text>
                            <TextInput
                                onChangeText={text => this.onChangeHandler({ key: 'Description', value: text }, index)}
                                value={item.Description}
                                style={styles.inputs} />
                            <Text>Type</Text>
                            <TextInput
                                onChangeText={text => this.onChangeHandler({ key: 'Type', value: text }, index)}
                                value={item.Type}
                                style={styles.inputs} />
                            <Text>orderID</Text>
                            <TextInput
                                onChangeText={text => this.onChangeHandler({ key: 'OrderID', value: text }, index)}
                                value={item.OrderID}
                                style={styles.inputs} />
                            <Text>AddedBy</Text>
                            <TextInput
                                onChangeText={text => this.onChangeHandler({ key: 'Added_By', value: text }, index)}
                                value={item.Added_By}
                                style={styles.inputs} />
                           
                            <View style={styles.fixToText}>
                                <Button title="Update"
                                    color="#233554"
                                    onPress={() => this.UpdateDataToServer(index)}

                                />
                                <TouchableOpacity title="Delete"
                                    color="#233554"
                                    onPress={() => this.DeleteDataToServer(index)}
                                >
                                    <MaterialIcons name='delete' size={18} color='#333' />
                                </TouchableOpacity>

                            </View>

                        </View>


                    }

                />

            </View>
        );
    }
}

const styles = StyleSheet.create({

    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        margin: 5,

    },

    row: {
        fontSize: 18,
        padding: 12
    },

    textInput: {

        textAlign: 'center',
        height: 42,
        borderWidth: 1,
        borderColor: '#009688',
        borderRadius: 8,
        backgroundColor: "#FFFF"

    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 3,


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
});