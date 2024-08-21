import { useGetAllAcademicSemestersQuery } from "../../../redux/features/academicSemester/academicSemester.api";

const AcademicSemesters = () => {
    const { data } = useGetAllAcademicSemestersQuery(undefined);
    console.log(data);
    // console.log(error);

    return (
        <div>
            <h2>Academic Semesters</h2>
        </div>
    );
};

export default AcademicSemesters;
