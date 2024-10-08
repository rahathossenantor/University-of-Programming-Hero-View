import { TAcademicSemester } from "./academicMangement.types";

export type TSemesterRegistration = {
    _id: string;
    status: string;
    minCredit: number;
    maxCredit: number;
    startDate: string;
    endDate: string;
    academicSemester: TAcademicSemester;
    createdAt: string;
    updatedAt: string;
};

type TPreRequisiteCourse = {
    course: TPreReqCourse;
    isDeleted: boolean;
};

type TPreReqCourse = {
    _id: string;
    name: string;
    prefix: string;
    code: number;
    credits: number;
    isDeleted: boolean;
    preRequisiteCourses: any[];
    createdAt: string;
    updatedAt: string;
    __v: number;
};

export type TCourse = {
    _id: string;
    name: string;
    prefix: string;
    code: number;
    credits: number;
    preRequisiteCourses: TPreRequisiteCourse[] | [];
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
};

export type TOfferedCourse = {
    _id: string;
    semesterRegistration: string;
    academicSemester: string;
    academicFaculty: string;
    academicDepartment: string;
    course: TCourse;
    faculty: string;
    maxCapacity: number;
    section: number;
    days: string[];
    startTime: string;
    endTime: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
};
