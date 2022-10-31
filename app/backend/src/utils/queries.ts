export const hQuery = `SELECT 
tea.team_name as name,
(sum(home_team_goals>away_team_goals) * 3) + sum(home_team_goals=away_team_goals) as totalPoints,
count(*) as totalGames,
sum(home_team_goals>away_team_goals) as totalVictories,
sum(home_team_goals=away_team_goals) as totalDraws,
sum(home_team_goals<away_team_goals) as totalLosses,
sum(home_team_goals) as goalsFavor,
sum(away_team_goals) as goalsOwn,
sum(home_team_goals) - sum(away_team_goals) as goalsBalance,
ROUND((((sum(home_team_goals>away_team_goals) * 3) 
+ sum(home_team_goals=away_team_goals)) / ((count(*) * 3))) * 100, 2) as efficiency
FROM TRYBE_FUTEBOL_CLUBE.matches AS mat
INNER JOIN TRYBE_FUTEBOL_CLUBE.teams AS tea ON mat.home_team = tea.id
where in_progress = 0
group by tea.team_name
order by totalPoints desc, totalVictories desc, goalsBalance desc, goalsFavor desc, goalsOwn desc
`;

// Away Query
export const aQuery = `SELECT  tea.team_name as name, 
(sum(home_team_goals<away_team_goals) * 3) + sum(home_team_goals=away_team_goals) as totalPoints, 
count(*) as totalGames, sum(home_team_goals<away_team_goals) as totalVictories, 
sum(home_team_goals=away_team_goals) as totalDraws, 
sum(home_team_goals>away_team_goals) as totalLosses, 
sum(away_team_goals) as goalsFavor, sum(home_team_goals) as goalsOwn, 
sum(away_team_goals) - sum(home_team_goals) as goalsBalance, 
ROUND((((sum(home_team_goals<away_team_goals) * 3) + 
sum(home_team_goals=away_team_goals)) / ((count(*) * 3))) * 100, 2) as efficiency 
FROM TRYBE_FUTEBOL_CLUBE.matches AS mat 
INNER JOIN TRYBE_FUTEBOL_CLUBE.teams AS tea ON mat.away_team = tea.id 
where in_progress = 0 
group by tea.team_name 
order by totalPoints desc, totalVictories desc, goalsBalance desc, goalsFavor desc, goalsOwn desc
`;
