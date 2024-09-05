import { useGetAllSemesterRegistrationsQuery } from "../redux/features/admin/courseManagement.api";
import { TQueryParam } from "../types/types.global";

const useSemesterRagistrations = (queryParams?: TQueryParam[]) => {
    const { data: semesterRegistrations, isFetching: isSemesterRegistrationFetching } = useGetAllSemesterRegistrationsQuery(queryParams);

    const semesterRegistrationOptions = semesterRegistrations?.data?.map(semesterRegistration => {
        return {
            label: `${semesterRegistration.academicSemester.name}-${semesterRegistration.academicSemester.year}`,
            value: semesterRegistration._id,
        };
    });

    return {
        semesterRegistrations,
        semesterRegistrationOptions,
        isSemesterRegistrationFetching,
    };
};

export default useSemesterRagistrations;
