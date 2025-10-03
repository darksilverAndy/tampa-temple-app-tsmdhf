
import React from "react";
import { Stack } from "expo-router";
import { ScrollView, StyleSheet, View, Text, Image, Pressable } from "react-native";
import { IconSymbol } from "@/components/IconSymbol";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, commonStyles } from "@/styles/commonStyles";

export default function DeitiesScreen() {
  console.log('DeitiesScreen rendered');

  const deities = [
    {
      name: "Lord Ayyappa",
      title: "Dharma Sastha",
      description: "The presiding deity of Sabarimala, Lord Ayyappa is revered as the embodiment of dharma and righteousness. He is the son of Lord Shiva and Mohini (Lord Vishnu's female form).",
      significance: "Protector of devotees, granter of wishes, and guide on the spiritual path",
      imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&h=300&fit=crop"
    },
    {
      name: "Lord Ganesha",
      title: "Vighna Harta",
      description: "The remover of obstacles and the lord of beginnings. Lord Ganesha is worshipped before starting any new venture or prayer.",
      significance: "Removes obstacles, brings good fortune, and blesses new beginnings",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
    },
    {
      name: "Goddess Durga",
      title: "Divine Mother",
      description: "The divine mother who protects her devotees from evil forces. She represents the power of good over evil.",
      significance: "Protection from negative forces, strength, and maternal blessings",
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    },
    {
      name: "Lord Hanuman",
      title: "Sankat Mochan",
      description: "The devoted follower of Lord Rama, known for his strength, courage, and unwavering devotion.",
      significance: "Strength, courage, protection, and devotion",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
    }
  ];

  const renderHeaderRight = () => (
    <Pressable
      onPress={() => console.log('Search pressed')}
      style={styles.headerButtonContainer}
    >
      <IconSymbol name="magnifyingglass" color={colors.primary} size={24} />
    </Pressable>
  );

  return (
    <SafeAreaView style={[commonStyles.container, { backgroundColor: colors.background }]}>
      <Stack.Screen
        options={{
          title: "Sacred Deities",
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
          <Text style={commonStyles.title}>🕉️ Divine Presence</Text>
          <Text style={commonStyles.text}>
            Discover the sacred deities worshipped at Tampa Ayyappa Temple. 
            Each deity represents different aspects of the divine and offers unique blessings to devotees.
          </Text>
        </View>

        {/* Deities List */}
        {deities.map((deity, index) => (
          <View key={index} style={commonStyles.card}>
            <View style={styles.deityHeader}>
              <View style={styles.deityImageContainer}>
                <Image 
                  source={{ uri: deity.imageUrl }}
                  style={styles.deityImage}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.deityInfo}>
                <Text style={[commonStyles.subtitle, { textAlign: 'left', marginBottom: 4 }]}>
                  {deity.name}
                </Text>
                <Text style={[commonStyles.textSecondary, { fontStyle: 'italic', marginBottom: 8 }]}>
                  {deity.title}
                </Text>
              </View>
            </View>
            
            <Text style={[commonStyles.text, { textAlign: 'left', marginBottom: 12 }]}>
              {deity.description}
            </Text>
            
            <View style={styles.significanceContainer}>
              <Text style={[commonStyles.textSecondary, { fontWeight: '600', marginBottom: 4 }]}>
                🙏 Significance:
              </Text>
              <Text style={[commonStyles.textSecondary, { textAlign: 'left' }]}>
                {deity.significance}
              </Text>
            </View>

            <Pressable 
              style={styles.learnMoreButton}
              onPress={() => console.log(`Learn more about ${deity.name}`)}
            >
              <Text style={styles.learnMoreText}>Learn More</Text>
              <IconSymbol name="chevron.right" color={colors.primary} size={16} />
            </Pressable>
          </View>
        ))}

        {/* Prayer Guidelines */}
        <View style={commonStyles.highlightCard}>
          <Text style={[commonStyles.subtitle, { marginBottom: 16 }]}>📿 Prayer Guidelines</Text>
          <Text style={[commonStyles.textSecondary, { textAlign: 'left', marginBottom: 8 }]}>
            • Maintain cleanliness and purity while visiting
          </Text>
          <Text style={[commonStyles.textSecondary, { textAlign: 'left', marginBottom: 8 }]}>
            • Offer prayers with devotion and sincerity
          </Text>
          <Text style={[commonStyles.textSecondary, { textAlign: 'left', marginBottom: 8 }]}>
            • Respect the sanctity of the temple premises
          </Text>
          <Text style={[commonStyles.textSecondary, { textAlign: 'left' }]}>
            • Follow temple timings and guidelines
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
  deityHeader: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  deityImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
    marginRight: 16,
    backgroundColor: colors.highlight,
  },
  deityImage: {
    width: '100%',
    height: '100%',
  },
  deityInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  significanceContainer: {
    backgroundColor: colors.highlight,
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  learnMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: colors.background,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  learnMoreText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
});
