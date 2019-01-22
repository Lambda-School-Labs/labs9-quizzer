import { Query } from "react-apollo";
import gql from "graphql-tag";
import StudentBar from "../../components/Students/StudentBar";
import Layout from "../../components/Layout";
import AddStudent from "../../components/forms/AddStudent";
import {StudentHolder, SectionContainer, Text, QuizHolder} from "../../components/design-system/primitives";

const ClassPage = ({title}) => {
    const ALL_STUDENTS_QUERY = gql`
  query ALL_STUDENTS_QUERY {
    class (where: {id: {_eq: ${title}}}){
      id
      students {
        id
        class_id
        last_name
        first_name
        email
      }
    }
  }
`;

  return (
  <Layout>
    <Text>Add a Student</Text>
    <AddStudent />
    <SectionContainer>
    <Query query={ALL_STUDENTS_QUERY}>
      {({ loading, error, data }) => {
        if (error) return <p>{error.message}</p>;
        if (loading) return <p>...loading</p>;
        if (data) {
          console.log(data);
          return (
            <StudentHolder>
              {data.class[0].students.map(student => (
                                <StudentBar id={student.id} key={student.id} student={student} />
                            ))}
            </StudentHolder>
          );
        }
      }}
    </Query>
    </SectionContainer>
    <SectionContainer>
      <QuizHolder>
      </QuizHolder>
    </SectionContainer>
  </Layout>
  )
};
ClassPage.getInitialProps = async function(context) {
  const { title } = context.query;
  return { title };
};
export default ClassPage;
