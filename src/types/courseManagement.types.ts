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
