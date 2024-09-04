import { useGetAllAcademicFacultiesQuery } from "../redux/features/admin/academicManagement.api";
import { TQueryParam } from "../types/types.global";

const useAcademicFaculties = (queryParams?: TQueryParam[]) => {
    const { data: academicFaculties, isLoading: isAcademicFacultyLoading } = useGetAllAcademicFacultiesQuery(queryParams);

    const academicFacultyOptions = academicFaculties?.data?.map(faculty => ({
        label: faculty.name,
        value: faculty._id,
    }));

    return {
        academicFaculties,
        academicFacultyOptions,
        isAcademicFacultyLoading,
    };
};

export default useAcademicFaculties;
