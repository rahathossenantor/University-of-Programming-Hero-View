import { useGetFacultyCoursesQuery } from "../../../redux/features/faculty/course.api";

const MyCourses = () => {
    const { data } = useGetFacultyCoursesQuery(undefined);
    console.log(data);

    return (
        <div>
            <h2>My Courses</h2>
        </div>
    );
};

export default MyCourses;
