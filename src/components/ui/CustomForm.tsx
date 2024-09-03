import { Form } from "antd";
import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TFormConfig = {
    defaultValues?: Record<string, any>;
    resolver?: any;
};

type TFormProps = {
    children: ReactNode;
    onSubmit: SubmitHandler<FieldValues>;
} & TFormConfig;

const CustomForm = ({ children, onSubmit, defaultValues, resolver }: TFormProps) => {
    const formConfig: TFormConfig = {};
    const methods = useForm(formConfig);

    if (defaultValues) {
        formConfig["defaultValues"] = defaultValues;
    }
    if (resolver) {
        formConfig["resolver"] = resolver;
    }

    return (
        <FormProvider {...methods} >
            <Form
                layout="vertical"
                onFinish={methods.handleSubmit((data) => {
                    onSubmit(data);
                    methods.reset();
                })}
            >
                {children}
            </Form>
        </FormProvider>
    );
};

const Title = ({ children }: { children: ReactNode }) => {
    return (
        <h3 style={{ textAlign: "center", margin: "8px 0", fontSize: "25px" }}>{children}</h3>
    );
};
CustomForm.Title = Title;

export default CustomForm;
