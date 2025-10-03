
import React from 'react';
import { Platform } from 'react-native';
import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';
import { Stack } from 'expo-router';
import FloatingTabBar, { TabBarItem } from '@/components/FloatingTabBar';
import { colors } from '@/styles/commonStyles';

export default function TabLayout() {
  console.log('TabLayout rendered');
  
  // Define the tabs configuration for the temple app
  const tabs: TabBarItem[] = [
    {
      name: '(home)',
      route: '/(tabs)/(home)/',
      icon: 'house.fill',
      label: 'Home',
    },
    {
      name: 'deities',
      route: '/(tabs)/deities',
      icon: 'star.fill',
      label: 'Deities',
    },
    {
      name: 'events',
      route: '/(tabs)/events',
      icon: 'calendar',
      label: 'Events',
    },
    {
      name: 'donations',
      route: '/(tabs)/donations',
      icon: 'heart.fill',
      label: 'Donate',
    },
  ];

  // Use NativeTabs for iOS, custom FloatingTabBar for Android and Web
  if (Platform.OS === 'ios') {
    return (
      <NativeTabs>
        <NativeTabs.Trigger name="(home)">
          <Icon sf="house.fill" drawable="ic_home" />
          <Label>Home</Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="deities">
          <Icon sf="star.fill" drawable="ic_star" />
          <Label>Deities</Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="events">
          <Icon sf="calendar" drawable="ic_calendar" />
          <Label>Events</Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="donations">
          <Icon sf="heart.fill" drawable="ic_heart" />
          <Label>Donate</Label>
        </NativeTabs.Trigger>
      </NativeTabs>
    );
  }

  // For Android and Web, use Stack navigation with custom floating tab bar
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'none', // Remove fade animation to prevent black screen flash
        }}
      >
        <Stack.Screen name="(home)" />
        <Stack.Screen name="deities" />
        <Stack.Screen name="events" />
        <Stack.Screen name="donations" />
      </Stack>
      <FloatingTabBar tabs={tabs} />
    </>
  );
}
