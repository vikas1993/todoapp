import React, { Component } from 'react';
import {
  FlatList,
  ActivityIndicator,
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import TodoCard from './TodoCard';
import { getTodo } from './api';


class TodoList extends Component {
    state = {
      todo:[],
      loading : false,
      refreshing: false,
      error: null,
      status:false
    }
    componentDidMount(){
      this.makeRemoteRequest();
        
    }

    makeRemoteRequest = () => {
      this.setState({ loading: true });
      console.log("makereq");
      getTodo().then(todo=> {
        this.setState({ todo:todo,loading: false ,refreshing: false,status:false});
        


      }).catch(error => {
        this.setState({error:error,loading:false,status:true})
      })
    };

    handleRefresh = () => {
      this.setState(
        {
          refreshing: true,todo:[]
        },
        () => {
          this.makeRemoteRequest();
        }
      );
    };
renderFooter = () =>{
  if (!this.state.loading) return null;

  return (
    <View
    style ={{
      paddingVertical:20,
      borderTopWidth:1,
      borderTopColor:"#CED0CE"
      }
      }>
      <ActivityIndicator animating size="large" />
    </View>
  )
}

 render(){ 
     return (
      <View style={styles.container}>
          <Text style={styles.textStyle}>Todo List</Text>
          <FlatList
            key="flatlist"
            
            data = {this.state.todo}
            renderItem ={({item}) => <TodoCard todo={item}/>}
            keyExtractor = {item=> item.id.toString()}
            ListFooterComponent = {this.renderFooter}
            onRefresh={this.handleRefresh}
            refreshing={this.state.refreshing}/>
        {
          this.state.status ? <Button title={"Retry"} style= {{ fontSize: 25, color: "#000", textAlign: 'center' }} onPress={this.makeRemoteRequest}/> : null      
        } 

      </View>

  
  );
}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#ECF0F1',
    padding: 2
  },
  buttonContainer:{
    padding: 10
  },
  textStyle:{
    textAlign: 'center',
    fontWeight:'bold',
    fontSize:20,
    fontFamily: "Cochin"

  }
});
export default TodoList;