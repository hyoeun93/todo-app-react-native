import React, { Component } from 'react'
import { Text, View, FlatList, ScrollView, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants';
import axios from 'axios'
import update from 'immutability-helper'
import AddTodoButton from './AddTodoButton'
import AddTodo from './AddTodo'
import Header from './Header'
import { CheckBox, Body } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import { loadTodos, addTodo, toggleTodo, deleteTodo } from '../actions/actionCreators'

class TodosContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
        
          addingTodo: false
        }
      }

    getTodos() {
        axios.get('http://localhost:3000/api/v1/todos')
        .then(res => {
            this.props.dispatch(loadTodos(res.data))
        })
        .catch(error => console.log(error))
    };

    createTodo = (data) => {
        axios.post('http://localhost:3000/api/v1/todos', {todo: {title: data}})
        .then(res => {
            this.props.dispatch(addTodo(res.data.id, res.data.title))
            data = '';

        })
        .catch(error => console.log(error))
    }

    updateTodo = (data, id) => {
        axios.put(`http://localhost:3000/api/v1/todos/${id}`, {todo: {done: data}})
        .then(res => {
            this.props.dispatch(toggleTodo(id))
        })
        .catch(error => console.log(error))
    }

    deleteTodo = (id) => {
        axios.delete(`http://localhost:3000/api/v1/todos/${id}`)
        .then(res => {
            this.props.dispatch(deleteTodo(id))
        })
        .catch(error => console.log(error))
    }

    componentDidMount() {
        this.getTodos()
    };

    
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <ScrollView>
                {this.state.addingTodo ? (
                    <View style={styles.row}>
                    <AddTodo 
                        onAdd={(todo) => {
                            this.setState({ addingTodo: false });
                            this.createTodo(todo);
                        }}
                        onCancelDelete={() => this.setState({ addingTodo: false })}
                        onBlur={() => this.setState({ addingTodo: false })}
                    />
                    </View>
                ) : null}
                <FlatList 
                    data={this.props.todos}
                    renderItem={({ item }) => 
                        <TodoItem 
                            todo={item}
                            onUpdate={(data) => {
                                this.updateTodo(data, item.id)
                            }}
                            onDelete={(data) => {
                                this.deleteTodo(data.id)
                            }}
                        />
                    }
                    keyExtractor={item => item.id}
                />
                </ScrollView>
                <AddTodoButton onPress={() => this.setState({ addingTodo: true })}/>
            </View>
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
        fontSize: 24
    },
    row: {
        top: 15,
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    list: {
        flex: 1,
        width: '100%',
        flexDirection: 'row'
    },
    title: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft:25
    },
    subrow: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
        paddingVertical: 5
    }
  });

  const mapStateToProps = (state) => {
      return {
        todos: state.todos
      }
  }
  
  export default connect(mapStateToProps)(TodosContainer);