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
    gender: z.enum(["Male", "Female", "Other"]),
    dateOfBirth: z.string(),
    bloodGroup: z.enum(["A", "B", "AB", "O", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]).optional(),
    email: z.string().email(),
    contactNo: z.string(),
    emergencyContactNo: z.string(),
    presentAddress: z.string().optional(),
    permanentAddress: z.string(),
    parents: parentsSchema,
    guardian: guardianSchema,
    academicSemester: z.string(),
    academicDepartment: z.string(),
});
