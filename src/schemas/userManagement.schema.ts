import { z } from "zod";

const nameSchema = z.object({
    firstName: z.string({ required_error: "First name is required!" }),
    middleName: z.string().optional(),
    lastName: z.string({ required_error: "Last name is required!" })
});

const parentsSchema = z.object({
    fatherName: z.string({ required_error: "Father's name is required!" }),
    fatherOccupation: z.string({ required_error: "Father's occupation is required!" }),
    fatherContactNo: z.string({ required_error: "Father's contact no is required!" }),
    motherName: z.string({ required_error: "Mother's name is required!" }),
    motherOccupation: z.string({ required_error: "Mother's occupation is required!" }),
    motherContactNo: z.string({ required_error: "Mother's contact no is required!" })
});

const guardianSchema = z.object({
    name: z.string({ required_error: "Name is required!" }),
    occupation: z.string({ required_error: "Occupation is required!" }),
    contactNo: z.string({ required_error: "Contact no is required!" }),
    address: z.string({ required_error: "Address is required!" })
});

export const studentSchema = z.object({
    name: nameSchema,
    gender: z.enum(["Male", "Female", "Other"], { required_error: "Gender is required!" }),
    dateOfBirth: z.string({ required_error: "Date of birth is required!" }),
    bloodGroup: z.enum(["A", "B", "AB", "O", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]).optional(),
    email: z.string({ required_error: "Email is required!" }).email({ message: "Invalid email!" }),
    contactNo: z.string({ required_error: "Contact no is required!" }),
    emergencyContactNo: z.string({ required_error: "Emergency contact no is required!" }),
    presentAddress: z.string().optional(),
    permanentAddress: z.string({ required_error: "Present address is required!" }),
    parents: parentsSchema,
    guardian: guardianSchema,
    academicDepartment: z.string({ required_error: "Academic department is required!" }),
    academicSemester: z.string({ required_error: "Academic semester is required!" }),
});
