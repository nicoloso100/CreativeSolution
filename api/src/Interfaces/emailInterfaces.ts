export interface EmailInfo {
  from: String;
  to: String;
  subject: String;
  text?: String;
  html?: String;
}

export interface ContactEmailInfo {
  name: String;
  email: String;
  subject: String;
  message: String;
}
