import { Form, TimePicker } from 'antd';
import { Controller } from 'react-hook-form';

type TCustomDatePickerProps = {
    name: string;
    label: string;
    isRequired?: boolean;
};

const CustomTimePicker = ({ name, label, isRequired = false }: TCustomDatePickerProps) => {
    return (
        <Controller
            name={name}
            render={({ field, fieldState: { error } }) =>
                <Form.Item label={`${label}: ${isRequired ? "*" : ""}`}>
                    <TimePicker
                        {...field}
                        size="large"
                        format="HH:mm"
                        style={{ width: "100%" }}
                    />
                    {error && <small style={{ color: "red" }}>{error.message}</small>}
                </Form.Item>
            }
        />
    );
};

export default CustomTimePicker;
