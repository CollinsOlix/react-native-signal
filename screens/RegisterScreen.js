import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useState, useRef } from "react";
import Signal from "../assets/signal.svg";
import { Icon } from "@rneui/themed";

const filter =
  /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
const isMail = (str) => str.search(filter) == 0;

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const eAddress = useRef();
  const fName = useRef();
  const lName = useRef();
  const passkey = useRef();
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text
        style={{
          color: "#4477eb",
          fontWeight: "bold",
          fontSize: 23,
          margin: 20,
        }}
      >
        Welcome to Signal!
      </Text>
      <Signal width="150" height="150" />
      <Text
        style={{
          color: "#4477eb",
          fontWeight: "bold",
          fontSize: 23,
          marginTop: 20,
        }}
      >
        Create an account
      </Text>
      <View style={styles.inputAreas}>
        <View
          style={{
            padding: 5,
            flexDirection: "row",
            justifyContent: "space-between",
            borderStyle: "solid",
            borderWidth: 2,
            borderColor: "#4477eb",
            borderRadius: 7,
            marginVertical: 5,
          }}
        >
          <TextInput
            ref={fName}
            placeholder="First Name"
            value={firstName}
            enterKeyHint="next"
            returnKeyType="next"
            textContentType="givenName"
            style={{ fontSize: 18 }}
            onChangeText={(text) => {
              setFirstName(text);
            }}
            onSubmitEditing={(e) => {
              e.preventDefault();
              lName.current.focus();
            }}
          />
        </View>
        <View
          style={{
            padding: 5,
            flexDirection: "row",
            justifyContent: "space-between",
            borderStyle: "solid",
            borderWidth: 2,
            borderColor: "#4477eb",
            borderRadius: 7,
            marginVertical: 5,
          }}
        >
          <TextInput
            ref={lName}
            placeholder="Last Name"
            value={lastName}
            enterKeyHint="next"
            returnKeyType="next"
            textContentType="familyName"
            style={{ fontSize: 18 }}
            onChangeText={(text) => {
              setLastName(text);
            }}
            onSubmitEditing={(e) => {
              e.preventDefault();
              eAddress.current.focus();
            }}
          />
        </View>
        <View
          style={{
            padding: 5,
            flexDirection: "row",
            justifyContent: "space-between",
            borderStyle: "solid",
            borderWidth: 2,
            borderColor: "#4477eb",
            borderRadius: 7,
            marginVertical: 5,
          }}
        >
          <TextInput
            ref={eAddress}
            placeholder="Email"
            value={email}
            enterKeyHint="next"
            returnKeyType="next"
            textContentType="emailAddress"
            style={{ fontSize: 18 }}
            onChangeText={(text) => {
              text = text.toLowerCase();
              console.log(text);
              setEmail(text);
            }}
            onSubmitEditing={(e) => {
              e.preventDefault();
              isMail(email)
                ? passkey.current.focus()
                : eAddress.current.focus();
            }}
          />
        </View>
        <View
          style={{
            padding: 5,
            flexDirection: "row",
            justifyContent: "space-between",
            borderStyle: "solid",
            borderWidth: 2,
            borderColor: "#4477eb",
            borderRadius: 7,
            marginVertical: 5,
          }}
        >
          <TextInput
            maxLength={12}
            ref={passkey}
            secureTextEntry={showPassword}
            placeholder="Password"
            textContentType="password"
            style={{ fontSize: 18 }}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <View>
            {showPassword ? (
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Icon name="eye" type="ionicon" size={30} color={"#4477eb"} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Icon
                  name="eye-off"
                  type="ionicon"
                  size={30}
                  color={"#4477eb"}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
      <View style={styles.loginBtn}>
        <View style={{ width: 200 }}>
          <Button title="Sign up" color={"#4477E8"} />
        </View>
        <View style={styles.signUp}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.replace("Login")}>
            <Text style={{ color: "#4477eb", fontWeight: "bold" }}>
              {" "}
              Log in
            </Text>
          </TouchableOpacity>
          <Text> instead</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginBtn: {
    width: 200,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  signUp: {
    flexDirection: "row",
    marginTop: 20,
  },
  inputAreas: {
    marginTop: 20,
    width: 200,
  },
});

export default RegisterScreen;
