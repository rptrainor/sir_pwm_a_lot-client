import { useLazyQuery } from '@apollo/client';
import { gql } from '@apollo/client'

const GET_BREACH = gql`
  query($passwordHashFirstFiveChar: String!) {
    pwnedPasswords(passwordHashFirstFiveChar: $passwordHashFirstFiveChar)
  }
`;

export const useGetPwnedPasswords = (value: string) => {
  const [load, { called, loading, data, error }] = useLazyQuery(GET_BREACH, {
    variables: { passwordHashFirstFiveChar: value },
  });
  return { data: data?.pwnedPasswords, loading, error, called, load };
}