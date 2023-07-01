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
import { useFonts } from "expo-font";

export default function Login() {
  const [fontsLoaded] = useFonts({
    "Urbanist-Bold": require("../assets/fonts/Urbanist-Bold.ttf"),
    "Urbanist-SemiBold": require("../assets/fonts/Urbanist-SemiBold.ttf"),
    "Urbanist-Medium": require("../assets/fonts/Urbanist-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.contentLoginForm}>
        <View>
          <TouchableOpacity style={styles.btnBack}>
            <FontAwesome5 name="chevron-left" size={19} color="#1E232C" />
          </TouchableOpacity>
          <Text style={styles.txtWelcome}>Welcome back!</Text>

          <TextInput style={styles.inputEmail} placeholder="Enter your email" />
          <TextInput
            style={styles.inputPassword}
            placeholder="Enter your password"
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.txtForgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.txtLogin}>Sign in</Text>
          </TouchableOpacity>
          <View style={styles.loginOther}>
            <View style={styles.loginWith}>
              <View style={styles.line}></View>
              <Text style={styles.txtOrLoginWith}>Or Login with</Text>
              <View style={styles.line}></View>
            </View>
            <TouchableOpacity style={styles.btnLoginWithGoogle}>
              <FontAwesome5 name="google" size={26} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.txtRegisterLink}>
          Don't have an account?{" "}
          <TouchableOpacity>
            <Text style={styles.txtRegisterNow}>Register Now</Text>
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
  fontFamily: "Urbanist-Medium",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  contentLoginForm: {
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
  txtWelcome: {
    fontSize: 30,
    // fontWeight: "bold",
    fontFamily: "Urbanist-Bold",
    marginBottom: 32,
  },
  inputEmail: {
    ...textInput,
    marginBottom: 15,
  },
  inputPassword: {
    ...textInput,
    marginBottom: 15,
  },
  forgotPassword: {
    alignItems: "flex-end",
    marginBottom: 30,
  },
  txtForgotPassword: {
    fontSize: 14,
    color: "#6A707C",
    fontFamily: "Urbanist-SemiBold",
  },
  btnLogin: {
    height: 56,
    borderRadius: 8,
    backgroundColor: "#1E232C",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 35,
  },
  txtLogin: {
    fontSize: 15,
    color: "#FFFFFF",
    fontFamily: "Urbanist-SemiBold",
  },
  loginOther: {
    alignItems: "center",
  },
  loginWith: {
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
  txtOrLoginWith: {
    fontSize: 14,
    marginHorizontal: 12,
    color: "#6A707C",
    fontFamily: "Urbanist-SemiBold",
  },
  btnLoginWithGoogle: {
    width: 105,
    height: 56,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8ECF4",
    justifyContent: "center",
    alignItems: "center",
  },
  txtRegisterLink: {
    textAlign: "center",
    fontSize: 15,
    color: "#1E232C",
    marginBottom: 26,
    fontFamily: "Urbanist-Medium",
  },
  txtRegisterNow: {
    color: "#35C2C1",
    fontFamily: "Urbanist-Bold",
  },
});
