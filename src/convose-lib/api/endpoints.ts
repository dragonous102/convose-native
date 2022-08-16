export enum ENDPOINTS {
  CHAT = "/chat/",
  CHAT_PARTICIPANTS = "chat_participants",
  CHAT_SETTING = "chat_settings.json",
  PARTNERS = "partners",
  CREATE_GROUP = "chat.json",
  USER_PROFILE = "/profile.json",
  UPDATE_PROFILE = `profile/upload.json`,
  USER_ACTIVE = `user/active`,
  USER_INACTIVE = `user/inactive`,
  BLACKLIST_USER = `blacklist`,
  EXPO_TOKEN = "push/add_token.json",
  CREATE_GUEST = `users/guest`,
  SIGN_UP = "users/from_guest.json",
  SIGN_IN = "users/sign_in.json",
  SIGN_OUT = "users/sign_out",
  FACEBOOK_LOGIN = "auth/mobile/facebook.json",
  APPLE_LOGIN = "auth/mobile/apple.json",
  GOOGLE_LOGIN = "/auth/mobile/google.json",
  GET_GUEST = "/users/guest",
  PAGINATION = `channels/suggestions/set_pagination`,
  FORGET_PASSWORD = `password/lost`,
  PUSH_ENDPOINT = "push/add_token.json",
}
