import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PaperProvider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Screens
import DashboardScreen from './screens/DashboardScreen';
import AQIComparisonScreen from './screens/AQIComparisonScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: '#1e88e5',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              backgroundColor: '#fff',
              borderTopWidth: 0.5,
              borderTopColor: '#ccc',
              paddingBottom: 4,
              height: 60,
            },
            tabBarIcon: ({ color, size }) => {
              let iconName: keyof typeof MaterialCommunityIcons.glyphMap;

              if (route.name === 'Dashboard') {
                iconName = 'air-filter';
              } else if (route.name === 'Comparison') {
                iconName = 'chart-bar';
              } else {
                iconName = 'menu';
              }

              return (
                <MaterialCommunityIcons
                  name={iconName}
                  color={color}
                  size={size}
                />
              );
            },
          })}
        >
          <Tab.Screen name="Dashboard" component={DashboardScreen} />
          <Tab.Screen name="Comparison" component={AQIComparisonScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
