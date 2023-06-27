import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Constants from "expo-constants";
import { FontAwesome5 } from "@expo/vector-icons";
import * as Font from "expo-font";

export default function Register() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.contentRegisterForm}>
        <View>
          <TouchableOpacity style={styles.btnBack}>
            <FontAwesome5 name="chevron-left" size={19} color="#1E232C" />
          </TouchableOpacity>
          <Text style={styles.txtRegistrationTitle}>
            Register to get started
          </Text>
          <TextInput style={styles.inputUsername} placeholder="Username" />
          <TextInput style={styles.inputEmail} placeholder="Email" />
          <TextInput
            style={styles.inputPassword}
            placeholder="Password"
            secureTextEntry={true}
          />
          <TextInput
            style={styles.inputConfirmPassword}
            placeholder="Confirm password"
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.btnRegister}>
            <Text style={styles.txtRegister}>Register</Text>
          </TouchableOpacity>
          <View style={styles.registerOther}>
            <View style={styles.registerWith}>
              <View style={styles.line}></View>
              <Text style={styles.txtOrRegisterWith}>Or Register with</Text>
              <View style={styles.line}></View>
            </View>
            <TouchableOpacity style={styles.btnRegisterWithGoogle}>
              <FontAwesome5 name="google" size={26} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.txtLoginLink}>
          Already have an account?{" "}
          <TouchableOpacity>
            <Text style={styles.txtLoginNow}>Login Now</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}

const textInput = {
  height: 56,
  fontSize: 15,
  borderColor: "#E8ECF4",
  borderWidth: 1,
  borderRadius: 8,
  backgroundColor: "#F7F8F9",
  padding: 18,
  marginBottom: 12,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  contentRegisterForm: {
    flex: 1,
    paddingHorizontal: 22,
    justifyContent: "space-between",
  },
  btnBack: {
    width: 41,
    height: 41,
    marginTop: 12,
    marginBottom: 28,
    padding: 10,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#E8ECF4",
    justifyContent: "center",
    alignItems: "center",
  },
  txtRegistrationTitle: {
    fontSize: 30,
    fontWeight: "bold",
    // fontFamily: "Urbanist",
    marginBottom: 32,
  },
  inputUsername: {
    ...textInput,
  },
  inputEmail: {
    ...textInput,
  },
  inputPassword: {
    ...textInput,
  },
  inputConfirmPassword: {
    ...textInput,
    marginBottom: 30,
  },
  btnRegister: {
    height: 56,
    borderRadius: 8,
    backgroundColor: "#1E232C",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 35,
  },
  txtRegister: {
    fontSize: 15,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  registerOther: {
    alignItems: "center",
  },
  registerWith: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
  },
  line: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#E8ECF4",
    height: 1,
  },
  txtOrRegisterWith: {
    fontSize: 14,
    fontWeight: "600",
    marginHorizontal: 12,
    color: "#6A707C",
  },
  btnRegisterWithGoogle: {
    width: 105,
    height: 56,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8ECF4",
    justifyContent: "center",
    alignItems: "center",
  },
  txtLoginLink: {
    textAlign: "center",
    fontSize: 15,
    color: "#1E232C",
    marginBottom: 26,
  },
  txtLoginNow: {
    color: "#35C2C1",
    fontWeight: "bold",
  },
});
