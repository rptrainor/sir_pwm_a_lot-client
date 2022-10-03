import { useLazyQuery } from '@apollo/client';
import { gql } from '@apollo/client'

const GET_BREACH = gql`
  query($name: String!) {
    breach(name: $name) {
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

export const useGetBreach = (value: string) => {
  const [load, { called, loading, data, error }] = useLazyQuery(GET_BREACH, {
    variables: { name: value },
  });
  return { data: data?.breach, loading, error, called, load };
}