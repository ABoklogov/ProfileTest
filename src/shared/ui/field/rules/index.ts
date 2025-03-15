const IS_REQUIRED = {
  value: true,
  message: 'Заполните обязательное поле'
};

const VALID_EMPTY_FIELD = (v: string) => String(v).trim() !== "" || "Заполните обязательное поле";

const CHAR_LIMIT = (limit: number) => ({
  value: limit,
  message: `Минимум ${limit} символов`
});

const CHAR_MAX = (limit: number) => ({
  value: limit,
  message: `Максимум ${limit} символов`
});

const NICKNAME_VALIDATION = {
  value: /^@/,
  message: 'Первым символом должен быть @'
};

export {
  IS_REQUIRED,
  VALID_EMPTY_FIELD,
  CHAR_LIMIT,
  CHAR_MAX,
  NICKNAME_VALIDATION,
};