
import React, { useState } from "react";
import { Stack } from "expo-router";
import { ScrollView, StyleSheet, View, Text, Pressable, Alert } from "react-native";
import { IconSymbol } from "@/components/IconSymbol";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, commonStyles } from "@/styles/commonStyles";

export default function EventsScreen() {
  console.log('EventsScreen rendered');
  
  const [selectedMonth, setSelectedMonth] = useState('December');

  const months = ['November', 'December', 'January', 'February', 'March'];

  const events = {
    'November': [
      {
        title: "Karthika Deepam",
        date: "November 27, 2024",
        time: "6:00 PM - 9:00 PM",
        type: "Festival",
        description: "Lighting of lamps to celebrate Lord Shiva",
        location: "Main Temple Hall"
      }
    ],
    'December': [
      {
        title: "Mandala Pooja - Opening",
        date: "December 17, 2024",
        time: "6:00 AM - 8:00 PM",
        type: "Special Pooja",
        description: "Beginning of the sacred 41-day Mandala period with special prayers and offerings",
        location: "Main Temple Hall"
      },
      {
        title: "Gita Jayanti",
        date: "December 22, 2024",
        time: "7:00 AM - 12:00 PM",
        type: "Celebration",
        description: "Celebration of the birth of Bhagavad Gita with recitations and discourse",
        location: "Community Hall"
      }
    ],
    'January': [
      {
        title: "Makaravilakku",
        date: "January 14, 2025",
        time: "5:30 AM - 9:00 PM",
        type: "Major Festival",
        description: "Grand celebration of the divine light at Sabarimala with special abhishekam and prasadam",
        location: "Main Temple Hall"
      },
      {
        title: "Pongal Celebration",
        date: "January 15, 2025",
        time: "10:00 AM - 2:00 PM",
        type: "Cultural Event",
        description: "Traditional harvest festival celebration with cultural programs",
        location: "Temple Grounds"
      }
    ],
    'February': [
      {
        title: "Maha Shivaratri",
        date: "February 26, 2025",
        time: "6:00 PM - 6:00 AM",
        type: "Night Festival",
        description: "All-night vigil with continuous prayers and abhishekam to Lord Shiva",
        location: "Main Temple Hall"
      }
    ],
    'March': [
      {
        title: "Holi Celebration",
        date: "March 13, 2025",
        time: "4:00 PM - 7:00 PM",
        type: "Festival",
        description: "Festival of colors with community celebration and prasadam",
        location: "Temple Grounds"
      }
    ]
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Major Festival': return colors.primary;
      case 'Special Pooja': return colors.secondary;
      case 'Night Festival': return colors.accent;
      case 'Cultural Event': return '#8B4513';
      default: return colors.textSecondary;
    }
  };

  const renderHeaderRight = () => (
    <Pressable
      onPress={() => Alert.alert('Calendar', 'Calendar view coming soon!')}
      style={styles.headerButtonContainer}
    >
      <IconSymbol name="calendar" color={colors.primary} size={24} />
    </Pressable>
  );

  return (
    <SafeAreaView style={[commonStyles.container, { backgroundColor: colors.background }]}>
      <Stack.Screen
        options={{
          title: "Temple Events",
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.primary,
          headerTitleStyle: { fontWeight: '600' },
          headerRight: renderHeaderRight,
        }}
      />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <View style={commonStyles.highlightCard}>
          <Text style={commonStyles.title}>📅 Upcoming Events</Text>
          <Text style={commonStyles.text}>
            Stay updated with all temple events, festivals, and special celebrations. 
            Join us in our spiritual journey and community gatherings.
          </Text>
        </View>

        {/* Month Selector */}
        <View style={styles.monthSelector}>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.monthScrollContent}
          >
            {months.map((month) => (
              <Pressable
                key={month}
                style={[
                  styles.monthButton,
                  selectedMonth === month && styles.selectedMonthButton
                ]}
                onPress={() => setSelectedMonth(month)}
              >
                <Text style={[
                  styles.monthButtonText,
                  selectedMonth === month && styles.selectedMonthButtonText
                ]}>
                  {month}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* Events List */}
        <View style={styles.eventsContainer}>
          {events[selectedMonth as keyof typeof events]?.map((event, index) => (
            <View key={index} style={commonStyles.card}>
              <View style={styles.eventHeader}>
                <View style={styles.eventTitleContainer}>
                  <Text style={[commonStyles.subtitle, { textAlign: 'left', marginBottom: 4 }]}>
                    {event.title}
                  </Text>
                  <View style={[styles.eventTypeTag, { backgroundColor: getEventTypeColor(event.type) }]}>
                    <Text style={styles.eventTypeText}>{event.type}</Text>
                  </View>
                </View>
              </View>

              <View style={styles.eventDetails}>
                <View style={styles.eventDetailRow}>
                  <IconSymbol name="calendar" color={colors.accent} size={16} />
                  <Text style={[commonStyles.textSecondary, { marginLeft: 8 }]}>
                    {event.date}
                  </Text>
                </View>
                <View style={styles.eventDetailRow}>
                  <IconSymbol name="clock" color={colors.accent} size={16} />
                  <Text style={[commonStyles.textSecondary, { marginLeft: 8 }]}>
                    {event.time}
                  </Text>
                </View>
                <View style={styles.eventDetailRow}>
                  <IconSymbol name="location" color={colors.accent} size={16} />
                  <Text style={[commonStyles.textSecondary, { marginLeft: 8 }]}>
                    {event.location}
                  </Text>
                </View>
              </View>

              <Text style={[commonStyles.text, { textAlign: 'left', marginTop: 12, marginBottom: 16 }]}>
                {event.description}
              </Text>

              <View style={styles.eventActions}>
                <Pressable 
                  style={styles.actionButton}
                  onPress={() => Alert.alert('Reminder', `Reminder set for ${event.title}`)}
                >
                  <IconSymbol name="bell" color={colors.primary} size={16} />
                  <Text style={styles.actionButtonText}>Remind Me</Text>
                </Pressable>
                <Pressable 
                  style={styles.actionButton}
                  onPress={() => Alert.alert('Share', `Sharing ${event.title}`)}
                >
                  <IconSymbol name="square.and.arrow.up" color={colors.primary} size={16} />
                  <Text style={styles.actionButtonText}>Share</Text>
                </Pressable>
              </View>
            </View>
          )) || (
            <View style={commonStyles.card}>
              <Text style={[commonStyles.text, { fontStyle: 'italic' }]}>
                No events scheduled for {selectedMonth}
              </Text>
            </View>
          )}
        </View>

        {/* Event Guidelines */}
        <View style={commonStyles.highlightCard}>
          <Text style={[commonStyles.subtitle, { marginBottom: 16 }]}>📋 Event Guidelines</Text>
          <Text style={[commonStyles.textSecondary, { textAlign: 'left', marginBottom: 8 }]}>
            • Arrive 15 minutes early for special events
          </Text>
          <Text style={[commonStyles.textSecondary, { textAlign: 'left', marginBottom: 8 }]}>
            • Dress modestly and appropriately for temple events
          </Text>
          <Text style={[commonStyles.textSecondary, { textAlign: 'left', marginBottom: 8 }]}>
            • Maintain silence during prayers and ceremonies
          </Text>
          <Text style={[commonStyles.textSecondary, { textAlign: 'left' }]}>
            • Follow volunteer instructions for seating and participation
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
  monthSelector: {
    marginBottom: 20,
  },
  monthScrollContent: {
    paddingHorizontal: 4,
  },
  monthButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 4,
    borderRadius: 20,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.secondary,
  },
  selectedMonthButton: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  monthButtonText: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '600',
  },
  selectedMonthButtonText: {
    color: colors.card,
  },
  eventsContainer: {
    marginBottom: 20,
  },
  eventHeader: {
    marginBottom: 12,
  },
  eventTitleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  eventTypeTag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 8,
  },
  eventTypeText: {
    color: colors.card,
    fontSize: 12,
    fontWeight: '600',
  },
  eventDetails: {
    marginBottom: 8,
  },
  eventDetailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  eventActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: colors.secondary,
    paddingTop: 16,
    opacity: 0.3,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  actionButtonText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 6,
  },
});
