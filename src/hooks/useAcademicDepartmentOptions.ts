import { useGetAllAcademicDepartmentsQuery } from "../redux/features/admin/academicManagement.api";

const useAcademicDepartmentOptions = () => {
    const { data: academicDepartments, isLoading: isAcademicDepartmentLoading } = useGetAllAcademicDepartmentsQuery(undefined);

    const academicDepartmentOptions = academicDepartments?.data?.map(academicDepartment => ({
        label: academicDepartment.name,
        value: academicDepartment._id,
    }));

    return {
        academicDepartmentOptions,
        isAcademicDepartmentLoading,
    };
};

export default useAcademicDepartmentOptions;
