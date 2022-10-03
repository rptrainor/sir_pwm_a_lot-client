import { gql } from '@apollo/client'

export const GET_BREACH = gql`
  query GetBreach($name: String!) {
    breach(name: $name) {
      name
      title
      domain
      breachDate
      addedDate
      modifiedDate
      pwnCount
      description
      logoPath
      dataClasses
      isVerified
      isFabricated
      isSensitive
      isRetired
      isSpamList
    }
  }
`