import { useEffect, useRef, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  PreferencesContext,
  PreferencesContextProps,
  storageKeys,
  storageObjectKeys,
} from '../contexts/PreferencesContext';

export const PreferencesProvider = ({ children }) => {
  const [preferencesContext, setPreferencesContext] =
    useState<PreferencesContextProps>({
      colorScheme: null,
      courses: {},
      language: null,
      updatePreference: () => {},
    });

  const preferencesInitialized = useRef(false);

  const updatePreference = (key: string, value: any) => {
    if (!storageKeys.includes(key))
      throw new Error('You are trying to update an invalid preference');

    if (value === null) {
      AsyncStorage.removeItem(key).then(() =>
        setPreferencesContext(oldP => {
          oldP[key] = value;
          return oldP;
        }),
      );
    } else {
      const storedValue = storageObjectKeys.includes(key)
        ? JSON.stringify(value)
        : value;
      AsyncStorage.setItem(key, storedValue).then(() =>
        setPreferencesContext(oldP => {
          oldP[key] = value;
          return oldP;
        }),
      );
    }
  };

  // Initialize preferences from AsyncStorage
  useEffect(() => {
    AsyncStorage.multiGet(storageKeys).then(storagePreferences => {
      const preferences = {
        updatePreference,
      };
      storagePreferences.map(([key, value]) => {
        preferences[key] = storageObjectKeys.includes(key)
          ? JSON.parse(value) ?? {}
          : value;
      });

      setPreferencesContext(oldP => {
        return { ...oldP, ...preferences };
      });
    });
  }, []);

  // Preferences are loaded
  useEffect(() => {
    preferencesInitialized.current = true;
  }, [preferencesContext]);

  return (
    <PreferencesContext.Provider value={preferencesContext}>
      {preferencesInitialized.current && children}
    </PreferencesContext.Provider>
  );
};