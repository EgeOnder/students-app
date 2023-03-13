import { Ref } from 'react';
import {
  Platform,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewProps,
} from 'react-native';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { useStylesheet } from '@lib/ui/hooks/useStylesheet';
import { Theme } from '@lib/ui/types/theme';

import { IS_IOS } from '../../../src/core/constants';
import { useTheme } from '../hooks/useTheme';

export interface Props extends Omit<TextInputProps, 'placeholder'> {
  inputRef?: Ref<TextInput>;
  label: string;
  type?: 'text' | 'password';
  icon?: IconDefinition;
  style?: ViewProps['style'];
  inputStyle?: TextInputProps['style'];
}

/**
 * A text input field
 */
export const TextField = ({
  inputRef,
  label,
  type,
  style,
  inputStyle,
  ...rest
}: TextInputProps & Props) => {
  const { colors } = useTheme();
  const styles = useStylesheet(createStyles);

  const textInputProps = ((): TextInputProps => {
    switch (type) {
      case 'password':
        return {
          autoComplete: 'password',
          secureTextEntry: true,
        };
      default:
        return {};
    }
  })();

  return (
    <View
      style={[
        styles.container,
        rest.editable === false && styles.disabled,
        style,
      ]}
    >
      <TextInput
        ref={inputRef}
        autoCapitalize="none"
        selectionColor={colors.link}
        placeholder={label}
        placeholderTextColor={colors.secondaryText}
        style={[
          styles.input,
          {
            minHeight: IS_IOS ? (rest.numberOfLines ?? 1) * 17 : undefined,
          },
          inputStyle,
        ]}
        {...textInputProps}
        {...rest}
      />
    </View>
  );
};

const createStyles = ({ colors, fontSizes, spacing, fontFamilies }: Theme) =>
  StyleSheet.create({
    container: {
      paddingVertical: spacing[2],
    },
    disabled: {
      opacity: 0.5,
    },
    input: {
      textAlignVertical: 'top',
      fontFamily: fontFamilies.body,
      fontSize: fontSizes.md,
      borderBottomWidth: Platform.select({ android: 1 }),
      borderColor: colors.secondaryText,
      color: colors.prose,
      paddingHorizontal: spacing[5],
      paddingVertical: spacing[2],
    },
  });
