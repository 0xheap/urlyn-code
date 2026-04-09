/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

export const SERVICE_NAME = 'urlyn-code';

export const EVENT_USER_PROMPT = 'urlyn-code.user_prompt';
export const EVENT_USER_RETRY = 'urlyn-code.user_retry';
export const EVENT_TOOL_CALL = 'urlyn-code.tool_call';
export const EVENT_API_REQUEST = 'urlyn-code.api_request';
export const EVENT_API_ERROR = 'urlyn-code.api_error';
export const EVENT_API_CANCEL = 'urlyn-code.api_cancel';
export const EVENT_API_RESPONSE = 'urlyn-code.api_response';
export const EVENT_CLI_CONFIG = 'urlyn-code.config';
export const EVENT_EXTENSION_DISABLE = 'urlyn-code.extension_disable';
export const EVENT_EXTENSION_ENABLE = 'urlyn-code.extension_enable';
export const EVENT_EXTENSION_INSTALL = 'urlyn-code.extension_install';
export const EVENT_EXTENSION_UNINSTALL = 'urlyn-code.extension_uninstall';
export const EVENT_EXTENSION_UPDATE = 'urlyn-code.extension_update';
export const EVENT_FLASH_FALLBACK = 'urlyn-code.flash_fallback';
export const EVENT_RIPGREP_FALLBACK = 'urlyn-code.ripgrep_fallback';
export const EVENT_NEXT_SPEAKER_CHECK = 'urlyn-code.next_speaker_check';
export const EVENT_SLASH_COMMAND = 'urlyn-code.slash_command';
export const EVENT_IDE_CONNECTION = 'urlyn-code.ide_connection';
export const EVENT_CHAT_COMPRESSION = 'urlyn-code.chat_compression';
export const EVENT_INVALID_CHUNK = 'urlyn-code.chat.invalid_chunk';
export const EVENT_CONTENT_RETRY = 'urlyn-code.chat.content_retry';
export const EVENT_CONTENT_RETRY_FAILURE =
  'urlyn-code.chat.content_retry_failure';
export const EVENT_CONVERSATION_FINISHED = 'urlyn-code.conversation_finished';
export const EVENT_MALFORMED_JSON_RESPONSE =
  'urlyn-code.malformed_json_response';
export const EVENT_FILE_OPERATION = 'urlyn-code.file_operation';
export const EVENT_MODEL_SLASH_COMMAND = 'urlyn-code.slash_command.model';
export const EVENT_SUBAGENT_EXECUTION = 'urlyn-code.subagent_execution';
export const EVENT_SKILL_LAUNCH = 'urlyn-code.skill_launch';
export const EVENT_AUTH = 'urlyn-code.auth';
export const EVENT_USER_FEEDBACK = 'urlyn-code.user_feedback';

// Prompt Suggestion Events
export const EVENT_PROMPT_SUGGESTION = 'urlyn-code.prompt_suggestion';
export const EVENT_SPECULATION = 'urlyn-code.speculation';

// Arena Events
export const EVENT_ARENA_SESSION_STARTED = 'urlyn-code.arena_session_started';
export const EVENT_ARENA_AGENT_COMPLETED = 'urlyn-code.arena_agent_completed';
export const EVENT_ARENA_SESSION_ENDED = 'urlyn-code.arena_session_ended';

// Performance Events
export const EVENT_STARTUP_PERFORMANCE = 'urlyn-code.startup.performance';
export const EVENT_MEMORY_USAGE = 'urlyn-code.memory.usage';
export const EVENT_PERFORMANCE_BASELINE = 'urlyn-code.performance.baseline';
export const EVENT_PERFORMANCE_REGRESSION = 'urlyn-code.performance.regression';
