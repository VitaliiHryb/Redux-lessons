// опишите action creator setLanguage, который будет устанавливать текущий язык интерфейса (строка 'en', 'es' и т.д.) (пример использования setLanguage('jp'))

export const SET_LANGUAGE = 'SET_LANGUAGE';

export function setLanguage(language) {
  return {
    type: SET_LANGUAGE,
    payload: { language },
  };
}
