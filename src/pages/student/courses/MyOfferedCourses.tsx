import { useGetMyOfferedCoursesQuery } from "../../../redux/features/student/course.api";

const MyOfferedCourses = () => {
    const { data: offeredCourses, isLoading } = useGetMyOfferedCoursesQuery(undefined);

    if (!isLoading) {
        console.log(offeredCourses);
    };

    if (isLoading) return <p>Loading...</p>;

    return (
        <div>
            <h2>My Offered Courses</h2>
        </div>
    );
};

export default MyOfferedCourses;
