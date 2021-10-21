import React, {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, Text, View } from "react-native";

const Register = ({ setFormType }) => {
  const [form, setForm] = useState({ fullName: "", email: "", password: "" });

  const generateUsername = (email) => {
      return email.substring(0, email.indexOf('@'))
  } 
  
  const onRegister = () => {
      console.log({
          ...form,
          username: generateUsername(form.email)
      });
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.form}>
        <Text style={styles.label}> Full Name </Text>
        <TextInput
            style={styles.input}
            onChange={e => setForm({...form, fullName: e.target.value })}
            value={form.fullName}
            placeholder="Full Name"
        />

        <Text style={styles.label}> Email </Text>
        <TextInput
            style={styles.input}
            onChange={e => setForm({...form, email: e.target.value })}
            value={form.email}
            placeholder="Email"
        />
        
        <Text style={styles.label}> Password </Text>
        <TextInput
            style={styles.input}
            onChange={e => setForm({...form, password: e.target.value })}
            value={form.password}
            placeholder="Password"
        />
        <Button
            style={styles.button}
            title="Register"
            onPress={onRegister}
        />
      </View>
      <Text style={styles.link} onPress={() => setFormType('login')}> Login </Text>
    </SafeAreaView>
  );
};

const Login = ({ setFormType }) => {
    const [form, setForm] = useState({ email: "", password: "" });
    
    const onLogin = () => {
        console.log(form)
    }
  
    return (
      <SafeAreaView style={styles.container}>
  
        <View style={styles.form}>
          <Text style={styles.label}> Email </Text>
          <TextInput
              style={styles.input}
              onChange={e => setForm({...form, email: e.target.value })}
              value={form.email}
              placeholder="Email"
          />
          
          <Text style={styles.label}> Password </Text>
          <TextInput
              style={styles.input}
              onChange={e => setForm({...form, password: e.target.value })}
              value={form.password}
              placeholder="Password"
          />
          <Button
              style={styles.button}
              title="Login"
              onPress={onLogin}
          />
        </View>
        <Text style={styles.link} onPress={() => setFormType('register')}> Register </Text>
      </SafeAreaView>
    );
};

const AuthForm = () => {
    const [formType, setFormType] = useState("login");
    return( 
        formType === "login" ? <Login setFormType={setFormType} /> : <Register setFormType={setFormType} />
    )
};

const styles = StyleSheet.create({
  container: {
      width: 300,
      justifyContent: "center",
      alignItems: "center"
  },
  form: {
    flex: 1, 
    alignItems: 'flex-start',
    justifyContent: 'center',  
  },
  input: {
    height: 40,
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 3
  },
  button: {
    color: "dodgerblue",
    borderRadius: 4,
    height: 40,
  },
  label: {
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 5
  },
  link: {
    textAlign: "center",
    marginTop: 5,
    fontWeight: "600",
    fontSize: 16,
    color: "dodgerblue"
  }
});

export default AuthForm;