import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";

type TCustomDatePickerProps = {
    name: string;
    label: string;
    isRequired?: boolean;
};

const CustomDatePicker = ({ name, label, isRequired = false }: TCustomDatePickerProps) => {
    return (
        <Controller
            name={name}
            render={({ field, fieldState: { error } }) =>
                <Form.Item label={`${label}: ${isRequired ? "*" : ""}`}>
                    <DatePicker
                        {...field}
                        size="large"
                        style={{ width: "100%" }}
                        required={isRequired}
                    />
                    {error && <small style={{ color: "red" }}>{error.message}</small>}
                </Form.Item>
            }
        />
    );
};

export default CustomDatePicker;
