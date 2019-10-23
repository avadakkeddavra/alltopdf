import {EMAIL_REGEXP, FACEBOOK_REGEXP, URL_REGEXP, STR_NUMBER, NAME_REGEXP} from './regexp'

export const rules = {
  email: (value) => !value.toString().match(EMAIL_REGEXP) && value !== '',
  facebook_url: (value) => !value || !value.toString().match(FACEBOOK_REGEXP),
  url: (value) => !value.toString().match(URL_REGEXP),
  str_number: (value) => !value.toString().match(STR_NUMBER),
  username: (value) => !value.toString().match(NAME_REGEXP),
  full_name: (value) => value === '',
  phone_number: (value) => value === '',
  password: (value) => value === '',
  date: (value) => value === '',
  string: (value) => value === '',
}
