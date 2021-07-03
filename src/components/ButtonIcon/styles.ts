import { StyleSheet } from 'react-native';
import { theme } from '../../shared/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 18,
  },
  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 2,
    borderRightColor: theme.colors.primaryDark,
  },
  title: {
    flex: 1,
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: 'center',
  },
});