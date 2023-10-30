import Image from "next/image";
import type { BaseSyntheticEvent } from "react";
import React, { useRef } from "react";
import {
  Control,
  Controller,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import { BsFillImageFill } from "react-icons/bs";
import { FCC } from "@/types";

interface Props {
  label?: string;
  title?: string;
  name: string;
  hideError?: boolean;
  onToggle: (file: File) => void;
  disabled?: boolean;
  control: Control<FieldValues, any>;
}

const ChooseImageField: FCC<Props> = ({
  name,
  hideError,
  title,
  label,
  disabled = false,
  onToggle,
  control,
  ...props
}) => {
  const { setValue } = useFormContext();
  const refFile = useRef<HTMLInputElement>(null);

  const onChooseFile = (e: BaseSyntheticEvent) => {
    const { files } = e.target;
    if (files.length > 0) {
      onToggle(files[0]);
      setValue(name, URL.createObjectURL(files[0]), { shouldValidate: true });
    }

    e.target.value = null;
  };

  const onToggleChooseFile = () => {
    if (!disabled) {
      refFile.current?.click();
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div className="w-full">
          <div className="w-full max-w-full aspect-square flex flex-col gap-8 items-center justify-center rounded-2xl bg-[#9ecaff38] border-[2px] border-white border-dashed">
            {field.value ? (
              <div className="w-full h-full p-1 shadow-[rgba(149,157,165,0.2)0px8px24px] relative">
                <div className="relative w-full h-full block">
                  <Image
                    fill
                    alt={name}
                    src={field.value}
                    className="object-cover rounded-xl"
                    draggable={false}
                    priority
                  />
                </div>
                {!disabled && (
                  <div className="absolute self-center">
                    <button
                      className="bg-transparent"
                      onClick={onToggleChooseFile}
                    >
                      reload
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div
                onClick={onToggleChooseFile}
                className="flex w-full h-full rounded-2xl justify-center flex-col gap-4 items-center cursor-pointer hover:bg-[#E05BFF10]"
              >
                <BsFillImageFill size={48} className="text-[#343434]" />
                <span className="text-2xl font-bold lg:text-3xl text-white">
                  Drop file here
                </span>
                <p className="text-lg font-medium lg:text-xl text-[#343434]">
                  Accept PNG, JPG, GIF, WEBP
                </p>
                <p className="text-lg font-medium lg:text-xl text-[#343434]">
                  Or choose file here
                </p>
                <button className="bg-white hover:bg-[#9ecaff35] text-[#202020] rounded-md px-4 py-2 font-semibold">
                  Bowse
                </button>
              </div>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            ref={refFile}
            onChange={onChooseFile}
          />
        </div>
      )}
    />
  );
};

export default ChooseImageField;
