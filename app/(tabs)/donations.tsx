
import React, { useState } from "react";
import { Stack } from "expo-router";
import { ScrollView, StyleSheet, View, Text, Pressable, Alert, TextInput } from "react-native";
import { IconSymbol } from "@/components/IconSymbol";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, commonStyles } from "@/styles/commonStyles";

export default function DonationsScreen() {
  console.log('DonationsScreen rendered');
  
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedPurpose, setSelectedPurpose] = useState('General');

  const donationAmounts = [25, 51, 101, 201, 501, 1001];
  
  const donationPurposes = [
    { id: 'general', name: 'General', description: 'Support temple operations and maintenance' },
    { id: 'pooja', name: 'Special Pooja', description: 'Sponsor special prayers and ceremonies' },
    { id: 'annadanam', name: 'Annadanam', description: 'Provide free meals to devotees' },
    { id: 'maintenance', name: 'Temple Maintenance', description: 'Help maintain temple facilities' },
    { id: 'festivals', name: 'Festival Celebrations', description: 'Support festival arrangements' },
    { id: 'education', name: 'Religious Education', description: 'Support spiritual learning programs' }
  ];

  const handleDonation = () => {
    const amount = selectedAmount || parseFloat(customAmount);
    if (!amount || amount <= 0) {
      Alert.alert('Invalid Amount', 'Please select or enter a valid donation amount.');
      return;
    }
    
    Alert.alert(
      'Donation',
      `Thank you for your generous donation of $${amount} for ${selectedPurpose}.\n\nTo complete your donation, please contact the temple directly or visit during temple hours.`,
      [{ text: 'OK', onPress: () => console.log('Donation acknowledged') }]
    );
  };

  const renderHeaderRight = () => (
    <Pressable
      onPress={() => Alert.alert('History', 'Donation history coming soon!')}
      style={styles.headerButtonContainer}
    >
      <IconSymbol name="clock" color={colors.primary} size={24} />
    </Pressable>
  );

  return (
    <SafeAreaView style={[commonStyles.container, { backgroundColor: colors.background }]}>
      <Stack.Screen
        options={{
          title: "Donations",
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
          <Text style={commonStyles.title}>🙏 Support Our Temple</Text>
          <Text style={commonStyles.text}>
            Your generous donations help us maintain the temple, conduct religious ceremonies, 
            and serve the community. Every contribution, big or small, is deeply appreciated.
          </Text>
        </View>

        {/* Donation Purpose */}
        <View style={commonStyles.card}>
          <Text style={[commonStyles.subtitle, { marginBottom: 16 }]}>🎯 Donation Purpose</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.purposeScrollContent}
          >
            {donationPurposes.map((purpose) => (
              <Pressable
                key={purpose.id}
                style={[
                  styles.purposeButton,
                  selectedPurpose === purpose.name && styles.selectedPurposeButton
                ]}
                onPress={() => setSelectedPurpose(purpose.name)}
              >
                <Text style={[
                  styles.purposeButtonText,
                  selectedPurpose === purpose.name && styles.selectedPurposeButtonText
                ]}>
                  {purpose.name}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
          
          <View style={styles.purposeDescription}>
            <Text style={commonStyles.textSecondary}>
              {donationPurposes.find(p => p.name === selectedPurpose)?.description}
            </Text>
          </View>
        </View>

        {/* Donation Amount */}
        <View style={commonStyles.card}>
          <Text style={[commonStyles.subtitle, { marginBottom: 16 }]}>💰 Select Amount</Text>
          
          <View style={styles.amountGrid}>
            {donationAmounts.map((amount) => (
              <Pressable
                key={amount}
                style={[
                  styles.amountButton,
                  selectedAmount === amount && styles.selectedAmountButton
                ]}
                onPress={() => {
                  setSelectedAmount(amount);
                  setCustomAmount('');
                }}
              >
                <Text style={[
                  styles.amountButtonText,
                  selectedAmount === amount && styles.selectedAmountButtonText
                ]}>
                  ${amount}
                </Text>
              </Pressable>
            ))}
          </View>

          <View style={styles.customAmountContainer}>
            <Text style={[commonStyles.textSecondary, { marginBottom: 8 }]}>
              Or enter custom amount:
            </Text>
            <TextInput
              style={styles.customAmountInput}
              placeholder="Enter amount"
              placeholderTextColor={colors.textSecondary}
              value={customAmount}
              onChangeText={(text) => {
                setCustomAmount(text);
                setSelectedAmount(null);
              }}
              keyboardType="numeric"
            />
          </View>
        </View>

        {/* Donation Benefits */}
        <View style={commonStyles.card}>
          <Text style={[commonStyles.subtitle, { marginBottom: 16 }]}>🌟 Your Impact</Text>
          <View style={styles.benefitItem}>
            <IconSymbol name="heart.fill" color={colors.primary} size={20} />
            <Text style={[commonStyles.textSecondary, { marginLeft: 12, flex: 1 }]}>
              Support daily temple operations and maintenance
            </Text>
          </View>
          <View style={styles.benefitItem}>
            <IconSymbol name="star.fill" color={colors.secondary} size={20} />
            <Text style={[commonStyles.textSecondary, { marginLeft: 12, flex: 1 }]}>
              Enable special festivals and celebrations
            </Text>
          </View>
          <View style={styles.benefitItem}>
            <IconSymbol name="hands.sparkles" color={colors.accent} size={20} />
            <Text style={[commonStyles.textSecondary, { marginLeft: 12, flex: 1 }]}>
              Provide free meals and services to devotees
            </Text>
          </View>
          <View style={styles.benefitItem}>
            <IconSymbol name="book" color={colors.primary} size={20} />
            <Text style={[commonStyles.textSecondary, { marginLeft: 12, flex: 1 }]}>
              Support religious education and cultural programs
            </Text>
          </View>
        </View>

        {/* Donation Button */}
        <Pressable 
          style={styles.donateButton}
          onPress={handleDonation}
        >
          <IconSymbol name="heart.fill" color={colors.card} size={24} />
          <Text style={styles.donateButtonText}>Make Donation</Text>
        </Pressable>

        {/* Alternative Donation Methods */}
        <View style={commonStyles.highlightCard}>
          <Text style={[commonStyles.subtitle, { marginBottom: 16 }]}>💳 Other Ways to Donate</Text>
          
          <View style={styles.alternativeMethod}>
            <IconSymbol name="building.columns" color={colors.accent} size={20} />
            <View style={styles.methodInfo}>
              <Text style={[commonStyles.text, { fontWeight: '600', marginBottom: 4 }]}>
                Bank Transfer
              </Text>
              <Text style={commonStyles.textSecondary}>
                Contact temple for bank details
              </Text>
            </View>
          </View>

          <View style={styles.alternativeMethod}>
            <IconSymbol name="envelope" color={colors.accent} size={20} />
            <View style={styles.methodInfo}>
              <Text style={[commonStyles.text, { fontWeight: '600', marginBottom: 4 }]}>
                Check/Money Order
              </Text>
              <Text style={commonStyles.textSecondary}>
                Mail to temple address
              </Text>
            </View>
          </View>

          <View style={styles.alternativeMethod}>
            <IconSymbol name="person.2" color={colors.accent} size={20} />
            <View style={styles.methodInfo}>
              <Text style={[commonStyles.text, { fontWeight: '600', marginBottom: 4 }]}>
                In Person
              </Text>
              <Text style={commonStyles.textSecondary}>
                Visit during temple hours
              </Text>
            </View>
          </View>
        </View>

        {/* Tax Information */}
        <View style={commonStyles.card}>
          <Text style={[commonStyles.subtitle, { marginBottom: 16 }]}>📋 Tax Information</Text>
          <Text style={[commonStyles.textSecondary, { textAlign: 'left', marginBottom: 8 }]}>
            • Tampa Ayyappa Temple is a registered 501(c)(3) organization
          </Text>
          <Text style={[commonStyles.textSecondary, { textAlign: 'left', marginBottom: 8 }]}>
            • All donations are tax-deductible to the extent allowed by law
          </Text>
          <Text style={[commonStyles.textSecondary, { textAlign: 'left' }]}>
            • Receipt will be provided for all donations
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
  purposeScrollContent: {
    paddingHorizontal: 4,
  },
  purposeButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 4,
    borderRadius: 16,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.secondary,
    minWidth: 100,
    alignItems: 'center',
  },
  selectedPurposeButton: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  purposeButtonText: {
    color: colors.text,
    fontSize: 12,
    fontWeight: '600',
  },
  selectedPurposeButtonText: {
    color: colors.card,
  },
  purposeDescription: {
    marginTop: 12,
    padding: 12,
    backgroundColor: colors.highlight,
    borderRadius: 8,
  },
  amountGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  amountButton: {
    width: '30%',
    paddingVertical: 16,
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: colors.background,
    borderWidth: 2,
    borderColor: colors.secondary,
    alignItems: 'center',
  },
  selectedAmountButton: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  amountButtonText: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '600',
  },
  selectedAmountButtonText: {
    color: colors.card,
  },
  customAmountContainer: {
    marginTop: 8,
  },
  customAmountInput: {
    borderWidth: 2,
    borderColor: colors.secondary,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: colors.text,
    backgroundColor: colors.background,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  donateButton: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginVertical: 20,
  },
  donateButtonText: {
    color: colors.card,
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 12,
  },
  alternativeMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  methodInfo: {
    marginLeft: 12,
    flex: 1,
  },
});
