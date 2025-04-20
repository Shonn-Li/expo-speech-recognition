import { ExpoSpeechRecognitionModule } from "./ExpoSpeechRecognitionModule";

// Export the SpeechRecognition APIs
export {
  ExpoWebSpeechGrammar,
  ExpoWebSpeechGrammarList,
  ExpoWebSpeechRecognition,
} from "./ExpoWebSpeechRecognition";

// Native module
export { ExpoSpeechRecognitionModule } from "./ExpoSpeechRecognitionModule";

// Hooks
export { useSpeechRecognitionEvent } from "./useSpeechRecognitionEvent";

// Constants
export {
  AudioEncodingAndroid,
  AVAudioSessionCategory,
  AVAudioSessionCategoryOptions,
  AVAudioSessionMode,
  RecognizerIntentEnableLanguageSwitch,
  RecognizerIntentExtraLanguageModel,
  TaskHintIOS,
} from "./constants";
export type {
  AndroidIntentOptions,
  AudioEncodingAndroidValue,
  AudioSourceOptions,
  AVAudioSessionCategoryOptionsValue,
  AVAudioSessionCategoryValue,
  AVAudioSessionModeValue,
  ExpoSpeechRecognitionErrorCode,
  ExpoSpeechRecognitionErrorEvent,
  ExpoSpeechRecognitionNativeEventMap,
  ExpoSpeechRecognitionOptions,
  ExpoSpeechRecognitionResult,
  ExpoSpeechRecognitionResultEvent,
  ExpoSpeechRecognitionResultSegment,
  IOSTaskHintValue,
  RecordingOptions,
  SetCategoryOptions,
} from "./ExpoSpeechRecognitionModule.types";

export const getSupportedLocales = (options?: {
  androidRecognitionServicePackage?: string;
}) => ExpoSpeechRecognitionModule.getSupportedLocales(options ?? {});

export const getSpeechRecognitionServices =
  ExpoSpeechRecognitionModule.getSpeechRecognitionServices;

export const supportsOnDeviceRecognition =
  ExpoSpeechRecognitionModule.supportsOnDeviceRecognition;

export const supportsRecording = ExpoSpeechRecognitionModule.supportsRecording;

export const setCategoryIOS = ExpoSpeechRecognitionModule.setCategoryIOS;

export const getAudioSessionCategoryAndOptionsIOS =
  ExpoSpeechRecognitionModule.getAudioSessionCategoryAndOptionsIOS;

export const setAudioSessionActiveIOS =
  ExpoSpeechRecognitionModule.setAudioSessionActiveIOS;

export const androidTriggerOfflineModelDownload =
  ExpoSpeechRecognitionModule.androidTriggerOfflineModelDownload;

export const isRecognitionAvailable =
  ExpoSpeechRecognitionModule.isRecognitionAvailable;

export const getDefaultRecognitionService =
  ExpoSpeechRecognitionModule.getDefaultRecognitionService;

export const getAssistantService =
  ExpoSpeechRecognitionModule.getAssistantService;

export const addSpeechRecognitionListener =
  ExpoSpeechRecognitionModule.addListener;

export const pauseSpeechRecognition = () => ExpoSpeechRecognitionModule.pause();
export const resumeSpeechRecognition = () =>
  ExpoSpeechRecognitionModule.resume();
