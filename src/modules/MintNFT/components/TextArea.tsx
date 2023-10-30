import { AreaHTMLAttributes, FC, memo } from "react";
import { Controller, useFormContext } from "react-hook-form";

type Props = AreaHTMLAttributes<HTMLTextAreaElement> & {
  name: string;
  label?: any;
  defaultValue?: string;
};

const TextField: FC<Props> = ({
  name,
  defaultValue = "",
  label,
  className,
  ...props
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      defaultValue={defaultValue}
      control={control}
      name={name}
      render={({ field }) => (
        <div className="mb-6 w-full">
          <label
            htmlFor={name}
            className="block mb-2 text-md font-medium text-white"
          >
            {label}
          </label>
          <textarea
            name="name"
            rows={3}
            value={field.value}
            onChange={field.onChange}
            className={`ring-blue-500 ring-2 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 bg-gray-500 placeholder-gray-300 text-white ${className}`}
            {...props}
          />
        </div>
      )}
    />
  );
};

export default memo(TextField);
