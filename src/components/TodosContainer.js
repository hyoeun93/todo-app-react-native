import React, { Component } from 'react'
import { SafeAreaView, Text, View, FlatList, ScrollView, StyleSheet, StatusBar } from 'react-native'
import Constants from 'expo-constants';
import axios from 'axios'
import AddTodoButton from './AddTodoButton'
import Header from './Header'

function Item({ title }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
  
export default class TodosContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
          todos: []
        }
      }

    getTodos() {
        axios.get('http://localhost:3000/api/v1/todos')
        .then(res => {
            this.setState({todos: res.data})
        })
        .catch(error => console.log(error))
    };

    componentDidMount() {
        this.getTodos()
    };

    // list = () => {
    //     if(this.state.todos) {
    //         return this.state.todos.map(todo => {
    //             return(
    //                     <Text>{todo.title}</Text>
    //             )
    //         })
    //     }
    //     else <Text>Loading...</Text>
    // }

    
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Header />
                {/* <StatusBar backgroundColor='#5067FF' barStyle="light-content" /> */}
                <View style={styles.center}>
               
                {console.log(this.state.todos)}
                {/* <Text>{this.list()}</Text> */}
                <FlatList 
                    data={this.state.todos}
                    renderItem={({item}) => <Item title={item.title}/>}
                    keyExtractor={item => item.id}
                />
                <Text>Hi</Text>
                {/* <AddTodoButton /> */}
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32
    }
  });
  