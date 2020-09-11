import { StatusBar } from 'expo-status-bar';
import React, { Component } from "react";
import { View, Button, Text, TouchableOpacity,StyleSheet,Alert, } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true
    };
  }



  ToggleFunction1 = () => {
    this.setState(state => ({
      toggle1: !state.toggle1
    }));
  };

  ToggleFunction2 = () => {
    this.setState(state => ({
      toggle2: !state.toggle2
    }));
  };

  ToggleFunction3 = () => {
    this.setState(state => ({
      toggle3: !state.toggle3
    }));
  };

  ToggleFunction4 = () => {
    this.setState(state => ({
      toggle4: !state.toggle4
    }));
  };

  

  render() {
    return (
      <View style={styles.container}>

         <TouchableOpacity>
        
         <Button 
         onPress={() => this.ToggleFunction1()}
         title="Software Services"
 
/>

<view>
        {" "}
          
            {this.state.toggle1 ?
            
           <>

           <Text style={styles.child}>

           Web Design And Hosting 
          <br/>
           Enterprise Applications
          <br/>
           Android Apps
          <br/>
           IOS Apps
           </Text>
          
          </>
          : null }
           
           {" "}


         </view>

<Button 
         onPress={() => this.ToggleFunction2()}
  
  title="Engineering Services"
 
/>

<view>
            {" "}

            {this.state.toggle2 ? 

            <>
               <Text style={styles.child}>3D Design And Drawing
               <br/>
               Concept Design And Dev.
               <br/>
               Body Structure Design
               <br/>
               Exterior Design
               <br/>
               Tool Design
               </Text>

              </>

              : null }
              {" "}
          </view>

<Button 
         onPress={() => this.ToggleFunction3()}
  
  title="Products"
 
/>
<view>
            {" "}
            {this.state.toggle3 ?

             <>
            <Text style={styles.child}>CM Tracking Software
            <br/>
            PMS Software</Text>
            </>

              :null}{" "}
          </view>

<Button 
         onPress={() => this.ToggleFunction4()}
  
  title="Personal Recruitment"
 
/>

<view>
          
          {this.state.toggle4 ?
          
          <>
          <Text style={styles.child}>
          For Employers
          <br/>
          For Applicants 
         </Text>
        
         </>

          
          : null}
        </view>

       </TouchableOpacity>
      </View>

      

    );
  };
};



const styles = StyleSheet.create({
  container: {
   flex:1,
    padding:'100',
    backgroundColor:'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
   
   
   },
  child: {
    fontSize: '15px',
    fontWeight: 'bold',
    color:'blue',
 
    
  },


 
 
});

