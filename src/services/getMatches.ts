export const getMatches = async () => {
    const res = await fetch('https://notion-football-widget-production.up.railway.app/matches')

    const data = res.json()

    return data
}