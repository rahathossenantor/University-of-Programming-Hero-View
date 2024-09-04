import { useGetAllAcademicSemestersQuery } from "../redux/features/admin/academicManagement.api";
import { TQueryParam } from "../types/types.global";

const useAcademicSemesters = (queryParams?: TQueryParam[]) => {
    const { data: academicSemesters, isLoading: isAcademicSemesterLoading } = useGetAllAcademicSemestersQuery(queryParams);

    const academicSemesterOptions = academicSemesters?.data?.map(academicSemester => ({
        label: `${academicSemester.name} ${academicSemester.year}`,
        value: academicSemester._id,
    }));

    return {
        academicSemesters,
        academicSemesterOptions,
        isAcademicSemesterLoading,
    };
};

export default useAcademicSemesters;
