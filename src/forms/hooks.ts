import { FieldValues, useForm as useFormHook, UseFormMethods, UseFormOptions } from 'react-hook-form'

interface UseFormReturn<TFieldValues extends FieldValues = FieldValues> extends UseFormMethods<TFieldValues>  {
  getError(name: keyof TFieldValues): string | undefined
}//& { getError(name: keyof TFieldValues): string | undefined } 
export const useForm = <TFieldValues extends FieldValues = FieldValues, TFormContext extends object = object>(args: UseFormOptions<TFieldValues, TFormContext>): UseFormReturn<TFieldValues> => {
  const useFormReturn = useFormHook<TFieldValues, TFormContext>(args)

  const getError = (name: keyof TFieldValues): string | undefined => {
    if (useFormReturn.formState.touched[name]) {
      if (useFormReturn.errors[name] !== undefined && Object.keys(useFormReturn.errors[name]!).includes('message')) {
        return (useFormReturn.errors[name] as any).message
      }
    }
    return undefined
  }

  return { ...useFormReturn, getError}
}