export interface IMatches {
  homeTeam: number;
  awayTeam: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
}

export type IMatchScore = Pick<IMatches, 'homeTeamGoals' | 'awayTeamGoals'>;
