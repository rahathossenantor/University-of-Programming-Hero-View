import { TAcademicDepartment, TAcademicFaculty, TAcademicSemester } from "./academicMangement.types";

export type TName = {
    firstName: string;
    middleName: string;
    lastName: string;
};

export type TParents = {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNo: string;
    motherName: string;
    motherOccupation: string;
    motherContactNo: string;
};

export type TGuardian = {
    name: string;
    occupation: string;
    contactNo: string;
    address: string;
};

export type TStudent = {
    _id: string;
    id: string;
    user: string;
    name: TName;
    gender: string;
    dateOfBirth: string;
    email: string;
    academicSemester: TAcademicSemester;
    academicDepartment: TAcademicDepartment;
    academicFaculty: TAcademicFaculty;
    contactNo: string;
    emergencyContactNo: string;
    bloodGroup: string;
    presentAddress: string;
    permanentAddress: string;
    parents: TParents;
    guardian: TGuardian;
    avatar: string;
    isDeleted: boolean;
    fullName: string;
};
