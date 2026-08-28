const StudentDetails = async ({ params }) => {
    const { student } = await params;

    return (
        <div>
            <h1>Student Details</h1>
            <p>Student ID: {student}</p>
        </div>
    );
};

export default StudentDetails;