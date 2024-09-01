import { useGetAllAcademicFacultiesQuery } from "../redux/features/admin/academicManagement.api";

const useAcademicFacultyOptions = () => {
    const { data: academicFaculties, isLoading: isAcademicFacultyLoading } = useGetAllAcademicFacultiesQuery(undefined);

    const academicFacultyOptions = academicFaculties?.data?.map(faculty => ({
        label: faculty.name,
        value: faculty._id,
    }));

    return {
        academicFacultyOptions,
        isAcademicFacultyLoading,
    };
};

export default useAcademicFacultyOptions;
