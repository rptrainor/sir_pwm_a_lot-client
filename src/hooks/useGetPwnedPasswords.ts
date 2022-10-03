import { useLazyQuery } from '@apollo/client';
import { gql } from '@apollo/client'
var sha1 = require('sha1');

const GET_BREACH = gql`
  query($passwordHashFirstFiveChar: String!) {
    pwnedPasswords(passwordHashFirstFiveChar: $passwordHashFirstFiveChar)
  }
`;

export const useGetPwnedPasswords = (value: string) => {
  const [load, { called, loading, data, error }] = useLazyQuery(GET_BREACH, {
    variables: { passwordHashFirstFiveChar: value },
  });
  console.log({ value, data: data?.pwnedPasswords })
  return { data: data?.pwnedPasswords, loading, error, called, load };
}