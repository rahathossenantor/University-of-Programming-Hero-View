import { Button, Col, Row } from "antd";
import { useGetMyOfferedCoursesQuery } from "../../../redux/features/student/course.api";

const sectionElementStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const MyOfferedCourses = () => {
    const { data, isLoading } = useGetMyOfferedCoursesQuery(undefined);

    let offeredCourses;
    if (!isLoading) {
        offeredCourses = data?.data?.reduce((acc, offeredCourse) => {
            const courseTitle: string = offeredCourse?.course?.name;

            acc[courseTitle] = acc[courseTitle] || { name: courseTitle, sections: [], _id: offeredCourse?._id };
            acc[courseTitle].sections?.push({
                section: offeredCourse?.section,
                _id: offeredCourse?._id,
                days: offeredCourse?.days,
                startTime: offeredCourse?.startTime,
                endTime: offeredCourse?.endTime,
            });

            return acc;
        }, {});
        offeredCourses = Object.values(offeredCourses!);
    };

    if (isLoading) return <p>Loading...</p>;

    const handleEnroll = async (courseId: string) => {
        console.log(courseId);
    };

    return (
        <>
            <h2 style={{ textAlign: "center" }}>Courses to enroll</h2>
            <Row>
                {offeredCourses?.map((course: any, idx: number) => (
                    <Col key={course?._id} span={24} style={{
                        border: "1px solid lightgray",
                        padding: "10px",
                        margin: "5px",
                        borderRadius: "5px",
                    }}>
                        <h3 style={{ borderBottom: "1px solid lightgray", paddingBottom: "5px" }}>{idx + 1}. {course?.name}</h3>
                        {course?.sections.map((section: any) => (
                            <Row key={section._id} justify="space-between" align="middle" style={{ margin: "5px 0" }}>
                                <Col style={sectionElementStyle}>Section: {section.section}</Col>
                                <Col style={sectionElementStyle}>
                                    <div>
                                        Days: {section.days.map((day: any, idx: number) => (
                                            <span key={idx}> {day} </span>
                                        ))}
                                    </div>
                                </Col>
                                <Col style={sectionElementStyle}>Time: {`${section.startTime} - ${section.endTime}`}</Col>
                                <Button onClick={() => handleEnroll(section._id)}>Enroll</Button>
                            </Row>
                        ))}
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default MyOfferedCourses;
