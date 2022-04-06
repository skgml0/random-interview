import styled from '@emotion/styled';

interface WrapperProps {
  children: React.ReactElement[];
}

const WrapperQuestion = ({ children }: WrapperProps) => {
  return <Flex>{children}</Flex>;
};

const Flex = styled.section`
  display: flex;

  & > * {
    flex: 1;
  }
`;

export default WrapperQuestion;
