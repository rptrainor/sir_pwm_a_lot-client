import { useLazyQuery } from '@apollo/client';
import { gql } from '@apollo/client'

const GET_BREACH = gql`
  query($domain: String!) {
    breaches(domain: $domain) {
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

export const useGetBreaches = (value: string) => {
  const [load, { called, loading, data, error }] = useLazyQuery(GET_BREACH, {
    variables: { domain: value },
  });
  return { data: data?.breaches, loading, error, called, load };
}