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
};

const CustomSelect = ({ name, label, options }: TCustomSelectProps) => {
    return (
        <Controller
            name={name}
            render={({ field }) =>
                <Form.Item label={label}>
                    <Select
                        {...field}
                        size="large"
                        style={{ width: "100%" }}
                        options={options}
                    />
                </Form.Item>
            }
        />
    );
};

export default CustomSelect;
