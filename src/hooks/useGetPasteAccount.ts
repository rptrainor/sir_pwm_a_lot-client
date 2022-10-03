import { useLazyQuery } from '@apollo/client';
import { gql } from '@apollo/client'

const GET_BREACH = gql`
  query($email: String!) {
    pasteAccount(email: $email) {
      Source,
      Id,
      Title,
      Date,
      EmailCount
    }
  }
`;

export const useGetPasteAccount = (value: string) => {
  const [load, { called, loading, data, error }] = useLazyQuery(GET_BREACH, {
    variables: { email: value },
  });
  return { data: data?.pasteAccount, loading, error, called, load };
}