import { Form, Select } from "antd";
import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";

type TCustomSelectProps = {
    mode?: "multiple",
    name: string,
    label: string,
    options: {
        value: string;
        label: string;
        disabled?: boolean;
    }[];
    disabled?: boolean;
    onSelect: React.Dispatch<React.SetStateAction<string>>;
    isRequired?: boolean;
};

const CustomSelectWithWatch = ({ mode, name, label, options, disabled, onSelect, isRequired = false }: TCustomSelectProps) => {
    const { control } = useFormContext();
    const inputValue = useWatch({
        control,
        name
    });
    
    useEffect(() => {
        onSelect(inputValue);
    }, [onSelect, inputValue]);

    return (
        <Controller
            name={name}
            render={({ field, fieldState: { error } }) =>
                <Form.Item label={`${label}: ${isRequired ? "*" : ""}`}>
                    <Select
                        {...field}
                        mode={mode}
                        disabled={disabled}
                        size="large"
                        style={{ width: "100%" }}
                        options={options}
                    />
                    {error && <small style={{ color: "red" }}>{error.message}</small>}
                </Form.Item>
            }
        />
    );
};

export default CustomSelectWithWatch;
