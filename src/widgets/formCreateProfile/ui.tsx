import React, { useMemo, type FC } from "react";
import { styles } from "./styles";
import { Keyboard, View } from "react-native";
import { 
  Field, 
  CHAR_LIMIT, 
  IS_REQUIRED, 
  NICKNAME_VALIDATION, 
  VALID_EMPTY_FIELD 
} from "@/shared/ui/field";
import { Controller, useForm } from "react-hook-form";
import { CustomButton } from "@/shared/ui/customButton";

interface ICreateProfile {
  nickname: string;
  name: string;
  description: string;
};

const FormCreateProfile: FC = () => {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitted }
  } = useForm<ICreateProfile>();

  const valuesRequired = watch(['nickname', 'name']);


  // const [isHiddenRecoveryPassword, setIsHiddenRecoveryPassword] = useState(true);
  

  const submit = async (data: ICreateProfile) => {
    console.log("🚀 ~ submit ~ data:", data)
    Keyboard.dismiss();
  
    reset();
  };

  const disabledSubmit = useMemo(() => {
    return !(
      valuesRequired.every(v => v) && 
      Object.values(errors).length === 0)
  }, [valuesRequired, errors]);

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