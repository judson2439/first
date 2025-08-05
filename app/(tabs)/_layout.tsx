import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Typography } from '../../constants/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
export default function TabLayout() {
  const insets = useSafeAreaInsets();
  
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.gray[500],
        tabBarStyle: {
          backgroundColor: Colors.white,
          borderTopWidth: 1,
          borderTopColor: Colors.gray[200],
          paddingBottom: insets.bottom + 12,
          paddingTop: 12,
          height: 70 + insets.bottom,
        },
        tabBarLabelStyle: {
          fontSize: Typography.fontSize.xs,
          fontWeight: '600',
          marginTop: 4,
          marginBottom: 2,
        },
        tabBarIconStyle: {
          marginBottom: 2,
        },
      }}
    >
      <Tabs.Screen
        name="run"
        options={{
          title: 'Run',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="walk-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="plan"
        options={{
          title: 'Plan',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="coach"
        options={{
          title: 'Coach',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="track"
        options={{
          title: 'Track',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="analytics-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}