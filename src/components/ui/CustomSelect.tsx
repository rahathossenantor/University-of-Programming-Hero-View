import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TCustomSelectProps = {
    name: string,
    label: string,
    options: {
        value: string;
        label: string;
        disabled?: boolean;
    }[];
    disabled?: boolean;
};

const CustomSelect = ({ name, label, options, disabled }: TCustomSelectProps) => {
    return (
        <Controller
            name={name}
            render={({ field, fieldState: { error } }) =>
                <Form.Item label={label}>
                    <Select
                        {...field}
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
