import * as React from 'react';
import { Button, TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';


// ------------ Stack A Screens ------------
function HomeScreen({ navigation }) {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');

  return (
    <View style={styles.stackA}>
      <Text style={styles.text}>Ingrese sus datos:</Text>
      <TextInput placeholder="Nombre" style={styles.input} onChangeText={setName} />
      <TextInput placeholder="Teléfono" style={styles.input} onChangeText={setPhone} keyboardType="phone-pad" />
      <Button title="Enviar" onPress={() => navigation.navigate('Confirmación', { name, phone })} />
    </View>
  );
}

function ConfirmationScreen({ route }) {
  const { name, phone } = route.params || {};
  return (
    <View style={styles.stackA}>
      <Text style={styles.text}>Nombre: {name}</Text>
      <Text style={styles.text}>Teléfono: {phone}</Text>
    </View>
  );
}

// ------------ Stack B Screens ------------
function SearchScreen() {
  return (
    <View style={styles.stackB}>
      <Text style={styles.text}>Buscar contenido</Text>
      <TextInput placeholder="Buscar..." style={styles.input} />
      <Button title="Buscar" onPress={() => {}} />
    </View>
  );
}

function SearchResultScreen() {
  return (
    <View style={styles.stackB}>
      <Text style={styles.text}>Resultados de la búsqueda</Text>
    </View>
  );
}

// ------------ Stack C Screens ------------
function ProfileScreen() {
  return (
    <View style={styles.stackC}>
      <Text style={styles.text}>Perfil de Usuario</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.stackC}>
      <Text style={styles.text}>Configuración</Text>
      <Button title="Cambiar Contraseña" onPress={() => {}} />
    </View>
  );
}

// ------------ Stack D Screens ------------
function InfoScreen() {
  return (
    <View style={styles.stackD}>
      <Text style={styles.text}>Información</Text>
    </View>
  );
}

function ContactScreen() {
  return (
    <View style={styles.stackD}>
      <Text style={styles.text}>Contáctanos</Text>
    </View>
  );
}

// ------------ Navigators ------------
const Stack = createNativeStackNavigator();

function StackANavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={HomeScreen} />
      <Stack.Screen name="Confirmación" component={ConfirmationScreen} />
    </Stack.Navigator>
  );
}

function StackBNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Buscador" component={SearchScreen} />
      <Stack.Screen name="Resultados" component={SearchResultScreen} />
    </Stack.Navigator>
  );
}

function StackCNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Perfil" component={ProfileScreen} />
      <Stack.Screen name="Configuración" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

function StackDNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Info" component={InfoScreen} />
      <Stack.Screen name="Contacto" component={ContactScreen} />
    </Stack.Navigator>
  );
}

// ------------ Bottom Tabs ------------
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        switch (route.name) {
          case 'Inicio': iconName = 'home'; break;
          case 'Buscar': iconName = 'search'; break;
          case 'Perfil': iconName = 'person'; break;
          case 'Info': iconName = 'information-circle'; break;
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      }
    })}>
      <Tab.Screen name="Inicio" component={StackANavigator} />
      <Tab.Screen name="Buscar" component={StackBNavigator} />
      <Tab.Screen name="Perfil" component={StackCNavigator} />
      <Tab.Screen name="Info" component={StackDNavigator} />
    </Tab.Navigator>
  );
}

// ------------ App Container ------------
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

// ------------ Estilos Compartidos ------------
const styles = StyleSheet.create({
  stackA: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffcccc' },
  stackB: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ccffcc' },
  stackC: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ccccff' },
  stackD: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffcc' },
  text: { fontSize: 20, color: '#333', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#999', padding: 8, margin: 10, width: 200, borderRadius: 5 },
  image: { width: 200, height: 200, marginTop: 20 }
});
