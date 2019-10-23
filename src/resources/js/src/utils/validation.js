import {EMAIL_REGEXP, FACEBOOK_REGEXP, URL_REGEXP, STR_NUMBER, NAME_REGEXP} from './regexp'

export const rules = {
  email: (value) => !value.toString().match(EMAIL_REGEXP) && value !== '',
  url: (value) => !value.toString().match(URL_REGEXP),
  required: (value) => !value
};
