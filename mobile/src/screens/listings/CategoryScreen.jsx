import { View, Text, StyleSheet } from 'react-native'
import { colors, typography } from '../../theme'

export default function CategoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Category Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: typography.fonts.bold,
    fontSize: typography.sizes.heading1,
    color: colors.textPrimary,
  }
})
