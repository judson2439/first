import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import TopNavigation from '../../components/TopNavigation';
import { Colors, Typography, Spacing } from '../../constants/theme';
import { useAppContext } from '../../context/AppContext';

export default function CoachScreen() {
  const { state } = useAppContext();

  const handleProfilePress = () => {
    console.log('Profile pressed');
  };

  const handleNotificationsPress = () => {
    console.log('Notifications pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation 
        onProfilePress={handleProfilePress}
        onNotificationsPress={handleNotificationsPress}
      />
      
      <View style={styles.content}>
        <Text style={styles.title}>Coach</Text>
        <Text style={styles.subtitle}>
          Get personalized coaching insights and recommendations
        </Text>
        
        <View style={styles.coachCard}>
          <Text style={styles.coachTitle}>AI Coach</Text>
          <Text style={styles.coachMessage}>
            Ready to help you achieve your running goals. 
            Let's analyze your recent performance!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  content: {
    flex: 1,
    padding: Spacing.md,
  },
  title: {
    fontSize: Typography.fontSize['3xl'],
    fontWeight: 'bold',
    color: Colors.gray[900],
    marginBottom: Spacing.xs,
  },
  subtitle: {
    fontSize: Typography.fontSize.base,
    color: Colors.gray[600],
    marginBottom: Spacing.lg,
  },
  coachCard: {
    backgroundColor: Colors.secondary,
    padding: Spacing.md,
    borderRadius: 12,
    marginTop: Spacing.md,
  },
  coachTitle: {
    fontSize: Typography.fontSize.lg,
    color: Colors.white,
    fontWeight: 'bold',
    marginBottom: Spacing.xs,
  },
  coachMessage: {
    fontSize: Typography.fontSize.base,
    color: Colors.white,
    lineHeight: Typography.lineHeight.relaxed,
  },
});