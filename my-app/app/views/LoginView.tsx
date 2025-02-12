import { router } from 'expo-router';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

interface LoginViewProps {
  onSignupPress?: () => void;
}

const LoginView: React.FC<LoginViewProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Please sign in to continue.</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>EMAIL</Text>
          <MaterialCommunityIcons 
                name="account" 
                size={20} 
                color="#666" 
                style={{
                  position: 'absolute',
                  left: 10,
                  top: 30
                }}
              />
          <TextInput
            style={[styles.input, { paddingLeft: 40 }]}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="Enter your email"
            placeholderTextColor="#666"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>PASSWORD</Text>
          <MaterialCommunityIcons 
                name="lock" 
                size={20} 
                color="#666" 
                style={{
                  position: 'absolute',
                  left: 10,
                  top: 30
                }}
              />
          <TextInput
            style={[styles.input, { paddingLeft: 40 }]}
            secureTextEntry
            placeholder="Enter your password"
            placeholderTextColor="#666"
          />
          <TouchableOpacity style={styles.forgotButton}
            onPress={() => console.log('Forgot password pressed')}>
            <Text style={styles.forgotPassword}>Forgot?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/signup')}>
            <Text style={styles.signupLink}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 8,
    fontSize: 16,
    paddingLeft: 40,
  },
  forgotButton: {
    position: 'absolute',
    right: 0,
    top: 30,
  },
  forgotPassword: {
    color: '#FFA500',
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  loginButton: {
    backgroundColor: '#FFA500',
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 32,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  signupText: {
    color: '#666',
  },
  signupLink: {
    color: '#FFA500',
  },
});

export default LoginView;