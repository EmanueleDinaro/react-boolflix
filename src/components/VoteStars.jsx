export default function StarsVote({ vote }) {
  // Funzione per convertire un voto in stelle dividendo il voto per 2 e arrotonda il risultato usando Math.round
  function convertVoteToStars(vote) {
    return Math.round(vote / 2);
  }

  // Calcola il numero di stelle piene
  const stars = convertVoteToStars(vote);

  // Creo una stringa HTML con le stelle
  const starsHtml = "★".repeat(stars) + "☆".repeat(5 - stars);

  return starsHtml;
}
