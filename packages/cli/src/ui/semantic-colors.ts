/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { themeManager } from './themes/theme-manager.js';
import type { SemanticColors, UIStyles } from './themes/semantic-tokens.js';

export const theme: SemanticColors = {
  get text() {
    return themeManager.getSemanticColors().text;
  },
  get background() {
    return themeManager.getSemanticColors().background;
  },
  get border() {
    return themeManager.getSemanticColors().border;
  },
  get ui() {
    return themeManager.getSemanticColors().ui;
  },
  get status() {
    return themeManager.getSemanticColors().status;
  },
  get uiStyles() {
    return themeManager.getSemanticColors().uiStyles;
  },
};

/**
 * Gets the UI styles for a specific category.
 * This provides a convenient way to access UI style properties without
 * dealing with the full UIStyles interface.
 */
export function getUIStyle<K extends keyof UIStyles>(category: K): UIStyles[K] {
  // Note: uiStyles is guaranteed to exist in practice (defaults are provided)
  // TypeScript types don't reflect this, so we use non-null assertion
  return theme.uiStyles![category];
}
