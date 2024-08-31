import { useParams } from "react-router-dom";
import { useGetSingleStudentQuery } from "../../../redux/features/admin/userManagement.api";

const StudentDetails = () => {
    const { id } = useParams();
    const { data } = useGetSingleStudentQuery(id as string);

    return (
        <div>
            <div style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <img src={data?.data?.avatar} style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }} />
            </div>
            <h2>{data?.data?.fullName}</h2>
        </div>
    );
};

export default StudentDetails;
