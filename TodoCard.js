import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    card:{
        backgroundColor:'#fff',
        flex:1,
        padding:10,
        paddingTop:10,
        paddingBottom:20,
        margin:10,
        marginTop:5,
        marginBottom:5,
    },
    title: {
        fontSize: 15,
        fontWeight: '300',
        marginLeft: 7,
        textAlign: 'left',
      },
    cardHeader: {
        flex: 1,
        flexDirection: 'row',
      }
})
export default function TodoCard({todo}){
        return(
            <View style={styles.card}>
                <View style ={styles.cardHeader}>
                        <Text style={styles.title}>{todo.title}</Text>
                </View>
            </View>
        
        );
}
TodoCard.prototype = {
    todo:PropTypes.shape({
        title:PropTypes.string.isRequired
    })
}