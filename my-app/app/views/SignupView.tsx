import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // Updated import
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface SignupViewProps {
  onBackPress?: () => void;
}

const SignupView: React.FC<SignupViewProps> = () => {
  const router = useRouter(); // Updated hook

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}> {/* Updated onPress */}
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>

        <Text style={styles.title}>Create Account</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>FULL NAME</Text>
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
            placeholder="Enter your full name"
            placeholderTextColor="#666"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>EMAIL</Text>
          <MaterialCommunityIcons 
                name="email" 
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
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>CONFIRM PASSWORD</Text>
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
            placeholder="Confirm your password"
            placeholderTextColor="#666"
          />
        </View>

        <TouchableOpacity style={styles.signupButton}
          onPress={() => console.log('Sign up pressed')}>
          <Text style={styles.signupButtonText}>SIGN UP</Text>
        </TouchableOpacity>

        <View style={styles.signinContainer}>
          <Text style={styles.signinText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/login')}>
            <Text style={styles.signinLink}>Sign in</Text>
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
  backButton: {
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
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
  signupButton: {
    backgroundColor: '#FFA500',
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 32,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  signinText: {
    color: '#666',
  },
  signinLink: {
    color: '#FFA500',
  },
});

export default SignupView;