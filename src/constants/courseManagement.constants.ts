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
