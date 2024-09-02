import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

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
    isRequired?: boolean;
};

const CustomSelect = ({ mode, name, label, options, disabled, isRequired = false }: TCustomSelectProps) => {
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

export default CustomSelect;
