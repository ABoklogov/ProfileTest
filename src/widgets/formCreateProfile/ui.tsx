import React, { useMemo, useState, type FC } from "react";
import { styles } from "./styles";
import { Keyboard, View } from "react-native";
import { 
  Field, 
  CHAR_LIMIT, 
  IS_REQUIRED, 
  NICKNAME_VALIDATION, 
  VALID_EMPTY_FIELD, 
  CHAR_MAX
} from "@/shared/ui/field";
import { Controller, useForm } from "react-hook-form";
import { CustomButton } from "@/shared/ui/customButton";
import { COLORS } from "@/shared/constants";
import { Switch } from "react-native-switch";
import { CustomSwitch } from "@/shared/ui/customSwitch";

interface ICreateProfile {
  nickname: string;
  name: string;
  description: string;
};
const MAX_LENGTH_DESCRIPTION = 600;

const FormCreateProfile: FC<ICreateProfile> = ({
  nickname = '',
  name = '',
  description = ''
}) => {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitted }
  } = useForm<ICreateProfile>({
    defaultValues: {
      nickname,
      name,
      description
    }
  });

  const valuesRequired = watch(['nickname', 'name']);
  const [agreement, setAgreement] = useState(true);
  
  const submit = async (data: ICreateProfile) => {
    console.log("🚀 ~ submit ~ data:", data)
    Keyboard.dismiss();
  
    reset();
  };

  const disabledSubmit = useMemo(() => !(
    valuesRequired.every(v => v) &&
    Object.values(errors).length === 0 &&
    agreement
  ), [valuesRequired, errors, agreement]);

  const toggleSwitch = () => setAgreement(!agreement);

  return (
    <View style={styles.container}>
      <View>
        <Controller
          name='nickname'
          control={control}
          render={({field: { onChange, value }}) => (
            <Field 
              label='Никнейм'
              placeholder='@Создайте никнейм'
              autoComplete='nickname'
              value={value}
              onChange={onChange}
              isSubmitted={isSubmitted}
              required={true}
              errorMessage={errors.nickname?.message}
            />
          )}
          rules={{ 
            validate: VALID_EMPTY_FIELD,
            pattern: NICKNAME_VALIDATION,
            required: IS_REQUIRED, 
            minLength: CHAR_LIMIT(2),
          }}
        />

        <View style={styles.field}>
          <Controller
            name='name'
            control={control}
            render={({field: { onChange, value }}) => (
              <Field 
                label='Имя'
                placeholder='Введите имя'
                autoComplete='username'
                value={value}
                onChange={onChange}
                isSubmitted={isSubmitted}
                required={true}
                errorMessage={errors.name?.message}
              />
            )}
            rules={{ 
              validate: VALID_EMPTY_FIELD,
              required: IS_REQUIRED, 
              minLength: CHAR_LIMIT(2),
            }}
          />
        </View>

        <View style={styles.field}>
          <Controller
            name='description'
            control={control}
            render={({field: { onChange, value }}) => (
              <Field 
                label='Описание'
                placeholder='Расскажите о себе'
                autoComplete='username'
                value={value}
                onChange={onChange}
                multiline
                stylesInput={{ height: 120 }}
                rightLabel={`${value?.length || 0}/${MAX_LENGTH_DESCRIPTION}`}
                isSubmitted={isSubmitted}
                errorMessage={errors.description?.message}
              />
            )}
            rules={{ 
              minLength: CHAR_LIMIT(2),
              maxLength: CHAR_MAX(MAX_LENGTH_DESCRIPTION),
            }}
          />
        </View>

        <View style={styles.switch}>
          <CustomSwitch 
            label="Я согласен с условиями пользовательского соглашения"
            value={agreement}
            onChange={toggleSwitch}
          />
        </View>
      </View>
     
      <View style={styles.button}>
        <CustomButton 
          text='Продолжить'
          onPress={handleSubmit(submit)}
          disabled={disabledSubmit}
        />
      </View>
    </View>
  )
};

export { FormCreateProfile };