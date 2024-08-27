export type TAcademicSemesterRes = {
    _id: string;
    name: string;
    code: string;
    year: string;
    startMonth: string;
    endMonth: string;
};

export type TAcademicFacultyRes = {
    _id: string;
    name: string;
};

export type TAcademicDepartmentRes = {
    _id: string;
    name: string;
    academicFaculty: string;
};
