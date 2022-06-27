import {gql} from '@apollo/client'

export const GET_LEADER_BOARD = gql`
  query MyQuery   {
    getLeaderBoardList {
      created_at
      gameSize
      id
      playerName
      score
    }
  }`;


export const GET_LEADER_BOARD_BY_GAME = gql`
  query MyQuery ($gameSize: Int!) {
    getLeaderBoardListByGame(gameSize: $gameSize) {
      created_at
      gameSize
      id
      playerName
      score
    }
  }`;

  

