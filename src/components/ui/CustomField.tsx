import { Input } from "antd";
import { Controller } from "react-hook-form";

type TCustomFieldProps = {
    type: string,
    name: string,
    label: string
};

const CustomField = ({ type, name, label }: TCustomFieldProps) => {
    return (
        <div style={{ marginBottom: "15px" }}>
            <label style={{ fontSize: "20px" }} htmlFor={name}>{label}:</label>
            <Controller
                name={name}
                render={({ field }) => <Input
                    {...field}
                    type={type}
                    id={name}
                    style={{ fontSize: "15px" }}
                />}
            />
        </div>
    );
};

export default CustomField;
