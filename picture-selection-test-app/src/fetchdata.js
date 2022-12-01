const ENDPOINT_URL = "https://legible-seal-72.hasura.app/v1/graphql";
const STUDENT_PROGRESS = `
    query {
        student_progress {
            Student_Name
            Student_Id
            Exercise_No
            Score_Progress
            Date
            Time
        }
    }
`;
export const fetchStudentProgress = async () => {
    const response = await fetch(ENDPOINT_URL, {
        method: "POST",
        body: JSON.stringify({
            query: STUDENT_PROGRESS
        })
    });
    return await response.json();
};
