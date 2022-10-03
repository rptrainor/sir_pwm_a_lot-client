import { useLazyQuery } from '@apollo/client';
import { gql } from '@apollo/client'

const GET_BREACH = gql`
  query($email: String!) {
    breachedAccount(email: $email) {
      Name,
      Title,
      Domain,
      BreachDate,
      AddedDate,
      ModifiedDate,
      PwnCount,
      Description,
      LogoPath,
      DataClasses,
      IsVerified,
      IsFabricated,
      IsSensitive,
      IsRetired,
      IsSpamList,
      IsMalware
    }
  }
`;

export const useGetBreachedAccount = (value: string) => {
  const [load, { called, loading, data, error }] = useLazyQuery(GET_BREACH, {
    variables: { email: value },
  });
  console.log({ value, data: data?.breachedAccount })
  return { data: data?.breachedAccount, loading, error, called, load };
}