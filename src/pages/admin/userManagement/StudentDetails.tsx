import { useParams } from "react-router-dom";

const StudentDetails = () => {
    const { id } = useParams();

    return (
        <div>
            <h2>Details of {id}</h2>
        </div>
    );
};

export default StudentDetails;
