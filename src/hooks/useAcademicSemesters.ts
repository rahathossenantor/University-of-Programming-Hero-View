import { useGetAllAcademicSemestersQuery } from "../redux/features/admin/academicManagement.api";
import { TQueryParam } from "../types/types.global";

const useAcademicSemesters = (queryParams?: TQueryParam[]) => {
    const { data: academicSemesters, isFetching: isAcademicSemesterFetching } = useGetAllAcademicSemestersQuery(queryParams);

    const academicSemesterOptions = academicSemesters?.data?.map(academicSemester => ({
        label: `${academicSemester.name} ${academicSemester.year}`,
        value: academicSemester._id,
    }));

    return {
        academicSemesters,
        academicSemesterOptions,
        isAcademicSemesterFetching,
    };
};

export default useAcademicSemesters;
