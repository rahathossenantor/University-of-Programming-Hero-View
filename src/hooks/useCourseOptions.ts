import { useGetAllCoursesQuery } from "../redux/features/admin/courseManagement.api";

const useCourseOptions = () => {
    const { data: courses, isLoading: isCoursesLoading } = useGetAllCoursesQuery(undefined);

    const coursesOptions = courses?.data?.map(course => ({
        label: course.name,
        value: course._id,
    }));

    return {
        coursesOptions,
        isCoursesLoading,
    };
};

export default useCourseOptions;
