import * as React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import {BoxHolder, Emblem, BoxText, UpperCase} from "../../design-system/primitives";

// const BoxHolder = styled(Box)`
//   border-bottom: 10px solid #ffe88c; 
//   border-radius: 2px; 
//   width: 200px;
//   height: 200px;
//   margin: 5px;
//   background: white; 
//   display: flex; 
//   flex-direction: column; 
//   justify-content: center; 
//   align-items: center; 
//   cursor:pointer;
//   transition: border-bottom-color 1s ease-out;
//   &:hover{
//     border-bottom:10px solid #ffda49;
//   }
// `;
// const Emblem = styled(Box)`
// width: 70px;
// height: 70px;
// background: #ffe88c; 
// clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
// transition: background-color 1s ease-out;
// &:hover{
//     background: #ffda49;
//   }
// `;

// const BoxText = styled.a`
//   font-family: system-ui; 
//   padding: 15px;
// `;
const ClassBox: React.SFC<{ className: object }> = ({className }) => {
  return (
    <>
    <Link href={`/classes/class?id=${className.id}`}>
      <BoxHolder>
        {/* what we will want is for the title of the class and also the 
                number of students in the class, the average grade of the class
                and the number of quizzes the class has and will take */}
          <Emblem />
          <UpperCase fontSize={3}>{className.name}</UpperCase>
          <BoxText>Students: 14</BoxText>
          <BoxText>Quizzes: 2</BoxText>
      </BoxHolder>
      </Link>
    </>
  );
};
export default ClassBox;
