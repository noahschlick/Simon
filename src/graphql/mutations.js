import {gql} from '@apollo/client'

export const ADD_LEADER = gql`
    mutation MyMutation(
        $playerName: String!
        $gameSize: Int!
        $score: Int!
    ){
        insertLeader(
            playerName: $playerName
            gameSize: $gameSize
            score: $score
        ){
            playerName
            gameSize
            score
        }
    }
`

