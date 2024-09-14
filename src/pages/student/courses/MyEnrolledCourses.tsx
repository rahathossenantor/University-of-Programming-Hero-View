import { useGetMyEnrolledCoursesQuery } from "../../../redux/features/student/course.api";

const MyEnrolledCourses = () => {
    const { data: enrolledCourses, isLoading } = useGetMyEnrolledCoursesQuery(undefined);
    console.log(enrolledCourses);

    if (isLoading) return <p>Loading...</p>;

    return (
        <div>
            <h2>My enrolled courses</h2>
        </div>
    );
};

export default MyEnrolledCourses;
