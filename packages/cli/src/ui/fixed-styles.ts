/**
 * @license
 * Copyright 2025 Qwen Team
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Fixed styles for UI components that should NOT change with theme.
 * These styles are independent of the /theme command and provide consistent
 * appearance across all themes.
 *
 * Components using fixed styles:
 * - Header (logo and info panel)
 * - Input box borders
 * - Suggestions/command menu
 */

/**
 * Fixed colors for header and UI chrome.
 * Using a pleasant blue/cyan palette that works on both light and dark terminals.
 */
export const fixedColors = {
  // Header gradient colors (for ASCII logo)
  gradient: ['#2a9d8f', '#2a9d8f', '#2a9d8f'],

  // Header text and border
  headerTitle: '#2a9d8f', // Teal for ">_ Urlyn Code"
  headerText: '#6C7086', // Gray for secondary text
  headerBorder: '#6C7086', // Gray border for info panel

  // Input box border
  inputBorderFocused: '#2a9d8f', // Teal when focused
  inputBorderDefault: '#6C7086', // Gray when not focused

  // Suggestions menu
  suggestionSelected: '#89B4FA', // Light blue for selected item
  suggestionText: '#6C7086', // Gray for unselected items
  suggestionDescription: '#6C7086', // Gray for descriptions
  suggestionArrow: 'gray', // Arrow indicators
  suggestionLoading: 'gray', // Loading text

  // Prompt prefix
  promptPrefix: '#89B4FA', // Light blue for ">" prompt
} as const;

/**
 * Fixed UI styles for input panel.
 */
export const fixedInputPanelStyle = {
  borderStyle: 'single' as const,
  showTopBorder: true,
  showBottomBorder: true,
};

/**
 * Fixed UI styles for suggestions.
 */
export const fixedSuggestionsStyle = {
  selectionColor: fixedColors.suggestionSelected,
  descriptionColor: fixedColors.suggestionDescription,
  arrowColor: fixedColors.suggestionArrow,
  loadingColor: fixedColors.suggestionLoading,
};
