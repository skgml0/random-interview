import { CATEGORIES } from '@constants/categories';
import { QUESTIONS } from '@constants/questions';
import styled from '@emotion/styled';
import { pxToRem } from '@utils/pxToRem';
import React from 'react';
import Question from './Question';

interface QuestionListProps {
  selection: boolean[];
}

const QuestionList = ({ selection }: QuestionListProps) => {
  const categories = selection.every((isSelected) => !isSelected)
    ? CATEGORIES
    : CATEGORIES.filter((_, i) => selection[i]);

  return (
    <QuestionContainer>
      {QUESTIONS.filter(({ category }) => categories.includes(category)).map(
        ({ question, answer }) => (
          <Question key={question} question={question} answer={answer} />
        ),
      )}
    </QuestionContainer>
  );
};

const QuestionContainer = styled.ul`
  padding: ${pxToRem(10)} ${pxToRem(20)};

  & li:not(:last-of-type) {
    margin-bottom: ${pxToRem(30)};
  }
`;

export default React.memo(QuestionList);
