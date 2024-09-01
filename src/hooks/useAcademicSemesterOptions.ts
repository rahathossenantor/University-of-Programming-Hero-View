import { useGetAllAcademicSemestersQuery } from "../redux/features/admin/academicManagement.api";

const useAcademicSemesterOptions = () => {
    const { data: academicSemesters, isLoading: isAcademicSemesterLoading } = useGetAllAcademicSemestersQuery(undefined);

    const academicSemesterOptions = academicSemesters?.data?.map(academicSemester => ({
        label: `${academicSemester.name} ${academicSemester.year}`,
        value: academicSemester._id,
    }));

    return {
        academicSemesterOptions,
        isAcademicSemesterLoading,
    };
};

export default useAcademicSemesterOptions;
