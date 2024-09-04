import { useGetAllCoursesQuery } from "../redux/features/admin/courseManagement.api";
import { TQueryParam } from "../types/types.global";

const useCourses = (queryParams?: TQueryParam[]) => {
    const { data: courses, isLoading: isCoursesLoading } = useGetAllCoursesQuery(queryParams);

    const coursesOptions = courses?.data?.map(course => ({
        label: course.name,
        value: course._id,
    }));

    return {
        courses,
        coursesOptions,
        isCoursesLoading,
    };
};

export default useCourses;
