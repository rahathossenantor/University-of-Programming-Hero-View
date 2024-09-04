import { useGetAllAcademicDepartmentsQuery } from "../redux/features/admin/academicManagement.api";
import { TQueryParam } from "../types/types.global";

const useAcademicDepartments = (queryParams?: TQueryParam[]) => {
    const { data: academicDepartments, isLoading: isAcademicDepartmentLoading } = useGetAllAcademicDepartmentsQuery(queryParams);

    const academicDepartmentOptions = academicDepartments?.data?.map(academicDepartment => ({
        label: academicDepartment.name,
        value: academicDepartment._id,
    }));

    return {
        academicDepartments,
        academicDepartmentOptions,
        isAcademicDepartmentLoading,
    };
};

export default useAcademicDepartments;
