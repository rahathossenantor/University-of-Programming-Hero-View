import { useGetAllAcademicSemestersQuery } from "../../../redux/features/admin/academicManagement.api";

const AcademicSemesters = () => {
    const { data } = useGetAllAcademicSemestersQuery(undefined);
    console.log(data);

    return (
        <div>
            <h2>Academic Semesters</h2>
        </div>
    );
};

export default AcademicSemesters;
