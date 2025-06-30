import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LineChart, Grid } from 'react-native-svg-charts';
import { Circle, G, Text as SvgText } from 'react-native-svg';

const screenWidth = Dimensions.get('window').width;
const chartHeight = 180;

export default function AQIComparisonScreen() {
  const indoorData = [38, 42, 40, 45, 41, 39, 38];
  const outdoorData = [90, 85, 95, 100, 102, 97, 95];
  const times = ['8AM', '10AM', '12PM', '2PM', '4PM', '6PM', '8PM'];
  const AQIRange = Array.from({ length: 11 }, (_, i) => i * 100).reverse();

  const Decorator = (data: number[]) => ({ x, y }: any) =>
    data.map((value, index) => (
      <G key={index}>
        <Circle cx={x(index)} cy={y(value)} r={4} fill="#000" />
        <SvgText
          x={x(index)}
          y={y(value) - 10}
          fontSize="10"
          fill="#333"
          alignmentBaseline="middle"
          textAnchor="middle"
        >
          {value}
        </SvgText>
      </G>
    ));

  const renderChartBlock = (label: string, data: number[], color: string) => (
    <View style={styles.chartRow}>
      <View style={styles.yAxis}>
        {AQIRange.map((v, i) => (
          <Text key={i} style={styles.yAxisLabel}>
            {v}
          </Text>
        ))}
      </View>
      <View>
        <Text style={[styles.chartLabel, { color }]}>{label}</Text>
        <LineChart
          style={styles.chart}
          data={data}
          svg={{ stroke: color, strokeWidth: 2 }}
          contentInset={{ top: 20, bottom: 20 }}
          yMin={0}
          yMax={1000}
        >
          <Grid />
          {Decorator(data)}
        </LineChart>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Indoor vs Outdoor AQI</Text>
      {renderChartBlock('Indoor Air Quality', indoorData, '#4caf50')}
      {renderChartBlock('Outdoor Air Quality', outdoorData, '#f44336')}

      <View style={styles.timeLabels}>
        {times.map((t, i) => (
          <Text key={i} style={styles.timeLabel}>
            {t}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5faff',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 16,
  },
  chartRow: {
    flexDirection: 'row',
    marginBottom: 28,
  },
  yAxis: {
    width: 40,
    justifyContent: 'space-between',
    height: chartHeight,
    marginRight: 8,
  },
  yAxisLabel: {
    fontSize: 10,
    color: '#666',
    textAlign: 'right',
  },
  chartLabel: {
    fontSize: 14,
    marginBottom: 4,
    fontWeight: '600',
    marginLeft: 8,
  },
  chart: {
    height: chartHeight,
    width: screenWidth - 80,
  },
  timeLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -10,
    paddingHorizontal: 5,
  },
  timeLabel: {
    fontSize: 11,
    color: '#666',
  },
});
