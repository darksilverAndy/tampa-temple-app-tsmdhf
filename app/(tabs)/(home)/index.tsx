
import React from "react";
import { Stack } from "expo-router";
import { ScrollView, StyleSheet, View, Text, Image, Pressable } from "react-native";
import { IconSymbol } from "@/components/IconSymbol";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, commonStyles } from "@/styles/commonStyles";

export default function HomeScreen() {
  console.log('HomeScreen rendered');

  const upcomingEvents = [
    {
      title: "Mandala Pooja",
      date: "December 17, 2024",
      time: "6:00 AM - 8:00 PM",
      description: "Special prayers and offerings during the sacred Mandala period"
    },
    {
      title: "Makaravilakku",
      date: "January 14, 2025",
      time: "5:30 AM - 9:00 PM",
      description: "Celebration of the divine light at Sabarimala"
    },
    {
      title: "Monthly Abhishekam",
      date: "Every First Saturday",
      time: "7:00 AM - 12:00 PM",
      description: "Special abhishekam for Lord Ayyappa"
    }
  ];

  const prayerTimings = [
    { time: "6:00 AM", prayer: "Morning Prayers" },
    { time: "12:00 PM", prayer: "Noon Prayers" },
    { time: "7:00 PM", prayer: "Evening Prayers" }
  ];

  const renderHeaderRight = () => (
    <Pressable
      onPress={() => console.log('Notifications pressed')}
      style={styles.headerButtonContainer}
    >
      <IconSymbol name="bell" color={colors.primary} size={24} />
    </Pressable>
  );

  const renderHeaderLeft = () => (
    <Pressable
      onPress={() => console.log('Menu pressed')}
      style={styles.headerButtonContainer}
    >
      <IconSymbol name="line.horizontal.3" color={colors.primary} size={24} />
    </Pressable>
  );

  return (
    <SafeAreaView style={[commonStyles.container, { backgroundColor: colors.background }]}>
      <Stack.Screen
        options={{
          title: "Tampa Ayyappa Temple",
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.primary,
          headerTitleStyle: { fontWeight: '600' },
          headerRight: renderHeaderRight,
          headerLeft: renderHeaderLeft,
        }}
      />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Welcome Section */}
        <View style={commonStyles.highlightCard}>
          <Text style={commonStyles.title}>🕉️ Welcome Devotees</Text>
          <Text style={commonStyles.text}>
            Tampa Ayyappa Temple - A sacred place of worship dedicated to Lord Ayyappa. 
            Join us in our spiritual journey and community celebrations.
          </Text>
        </View>

        {/* Daily Prayer Timings */}
        <View style={commonStyles.card}>
          <Text style={[commonStyles.subtitle, { marginBottom: 16 }]}>🙏 Daily Prayer Timings</Text>
          {prayerTimings.map((timing, index) => (
            <View key={index} style={styles.timingRow}>
              <Text style={[commonStyles.text, { fontWeight: '600', color: colors.primary }]}>
                {timing.time}
              </Text>
              <Text style={commonStyles.text}>{timing.prayer}</Text>
            </View>
          ))}
        </View>

        {/* Upcoming Events */}
        <View style={commonStyles.card}>
          <Text style={[commonStyles.subtitle, { marginBottom: 16 }]}>📅 Upcoming Events</Text>
          {upcomingEvents.map((event, index) => (
            <View key={index} style={styles.eventCard}>
              <Text style={[commonStyles.text, { fontWeight: '600', color: colors.primary, marginBottom: 4 }]}>
                {event.title}
              </Text>
              <Text style={[commonStyles.textSecondary, { marginBottom: 2 }]}>
                📅 {event.date} • ⏰ {event.time}
              </Text>
              <Text style={commonStyles.textSecondary}>
                {event.description}
              </Text>
              {index < upcomingEvents.length - 1 && <View style={commonStyles.divider} />}
            </View>
          ))}
        </View>

        {/* Temple Information */}
        <View style={commonStyles.card}>
          <Text style={[commonStyles.subtitle, { marginBottom: 16 }]}>🏛️ Temple Information</Text>
          <View style={styles.infoRow}>
            <IconSymbol name="location" color={colors.accent} size={20} />
            <Text style={[commonStyles.textSecondary, { marginLeft: 8, flex: 1 }]}>
              Tampa, Florida
            </Text>
          </View>
          <View style={styles.infoRow}>
            <IconSymbol name="phone" color={colors.accent} size={20} />
            <Text style={[commonStyles.textSecondary, { marginLeft: 8, flex: 1 }]}>
              Contact for more information
            </Text>
          </View>
          <View style={styles.infoRow}>
            <IconSymbol name="globe" color={colors.accent} size={20} />
            <Text style={[commonStyles.textSecondary, { marginLeft: 8, flex: 1 }]}>
              www.tampaayyappatemple.org
            </Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={commonStyles.card}>
          <Text style={[commonStyles.subtitle, { marginBottom: 16 }]}>⚡ Quick Actions</Text>
          <View style={styles.quickActionsGrid}>
            <Pressable 
              style={styles.quickActionButton}
              onPress={() => console.log('Deities pressed')}
            >
              <IconSymbol name="star" color={colors.card} size={24} />
              <Text style={styles.quickActionText}>Deities</Text>
            </Pressable>
            <Pressable 
              style={styles.quickActionButton}
              onPress={() => console.log('Events pressed')}
            >
              <IconSymbol name="calendar" color={colors.card} size={24} />
              <Text style={styles.quickActionText}>Events</Text>
            </Pressable>
            <Pressable 
              style={styles.quickActionButton}
              onPress={() => console.log('Donations pressed')}
            >
              <IconSymbol name="heart" color={colors.card} size={24} />
              <Text style={styles.quickActionText}>Donate</Text>
            </Pressable>
            <Pressable 
              style={styles.quickActionButton}
              onPress={() => console.log('Contact pressed')}
            >
              <IconSymbol name="phone" color={colors.card} size={24} />
              <Text style={styles.quickActionText}>Contact</Text>
            </Pressable>
          </View>
        </View>

        {/* Announcements */}
        <View style={commonStyles.highlightCard}>
          <Text style={[commonStyles.subtitle, { marginBottom: 16 }]}>📢 Announcements</Text>
          <Text style={commonStyles.textSecondary}>
            • Temple will remain open during all festival days
          </Text>
          <Text style={commonStyles.textSecondary}>
            • Special parking arrangements during major events
          </Text>
          <Text style={commonStyles.textSecondary}>
            • Prasadam distribution after evening prayers
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 100, // Extra padding for floating tab bar
  },
  headerButtonContainer: {
    padding: 8,
  },
  timingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  eventCard: {
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickActionButton: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
    marginBottom: 12,
  },
  quickActionText: {
    color: colors.card,
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
  },
});
