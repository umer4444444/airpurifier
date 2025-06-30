import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ProgressBar, Switch } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function DashboardScreen() {
  const [isOn, setIsOn] = React.useState(true);
  const [autoMode, setAutoMode] = React.useState(true);
  const [fanSpeed, setFanSpeed] = React.useState(0.6);
  const airQuality = { aqi: 42, status: 'Good' };

  return (
    <View style={styles.container}>
      {/* Room/Device Title */}
      <Text style={styles.roomText}>Living Room</Text>

      {/* AQI Circle */}
      <View style={styles.circleContainer}>
        <View style={styles.circle}>
          <Text style={styles.aqiText}>{airQuality.aqi}</Text>
          <Text style={styles.statusText}>{airQuality.status}</Text>
        </View>
      </View>

      {/* Auto Mode + Power Switch */}
      <View style={styles.switchRow}>
        <Text style={styles.label}>Auto Mode</Text>
        <Switch value={autoMode} onValueChange={() => setAutoMode(!autoMode)} />
        <Text style={styles.label}>Power</Text>
        <Switch value={isOn} onValueChange={() => setIsOn(!isOn)} />
      </View>

      {/* Fan Speed Control */}
      <View style={styles.fanContainer}>
        <Text style={styles.label}>Fan Speed</Text>
        <ProgressBar progress={fanSpeed} color="#1e88e5" style={styles.progress} />
        <View style={styles.fanButtons}>
          <TouchableOpacity onPress={() => setFanSpeed(Math.max(0, fanSpeed - 0.2))}>
            <MaterialCommunityIcons name="fan-minus" size={32} color="#1e88e5" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setFanSpeed(Math.min(1, fanSpeed + 0.2))}>
            <MaterialCommunityIcons name="fan-plus" size={32} color="#1e88e5" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Filter Health */}
      <View style={styles.filterCard}>
        <Text style={styles.label}>Filter Health</Text>
        <ProgressBar progress={0.8} color="#43a047" style={{ height: 8, borderRadius: 4 }} />
        <Text style={styles.filterText}>Healthy – 80%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f5faff',
  },
  roomText: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 16,
    color: '#2c3e50',
  },
  circleContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  circle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#e3f2fd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  aqiText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#1e88e5',
  },
  statusText: {
    fontSize: 18,
    color: '#4caf50',
    marginTop: 4,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 24,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginRight: 8,
  },
  fanContainer: {
    marginTop: 32,
    paddingHorizontal: 12,
  },
  progress: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#cfd8dc',
    marginVertical: 8,
  },
  fanButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 8,
  },
  filterCard: {
    marginTop: 40,
    padding: 16,
    backgroundColor: '#e8f5e9',
    borderRadius: 10,
  },
  filterText: {
    marginTop: 4,
    textAlign: 'center',
    color: '#388e3c',
  },
});
