/**
 * @license
 * Copyright 2025 Qwen Team
 * SPDX-License-Identifier: Apache-2.0
 *
 * Prompt Suggestion Subpath Entry
 *
 * Separated from the root entry to avoid forcing all @urlyn-code/webui
 * consumers to install @urlyn-code/urlyn-code-core as a dependency.
 *
 * Usage: import { useFollowupSuggestions } from '@urlyn-code/webui/followup';
 */

export { useFollowupSuggestions } from './hooks/useFollowupSuggestions';
export type {
  FollowupState,
  UseFollowupSuggestionsOptions,
  UseFollowupSuggestionsReturn,
} from './hooks/useFollowupSuggestions';
