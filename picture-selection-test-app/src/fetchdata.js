const ENDPOINT_URL = "https://legible-seal-72.hasura.app/v1/graphql";
const STUDENT_PROGRESS = `
    query {
        student_progress {
            Exercise_No
            Score_Progress
            Student_Id
            Student_Name
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
