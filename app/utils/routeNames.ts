export function getRouteName(path:string):string {
  if (!path) {
    return '';
  }
  switch (path.toLowerCase()) {
    case '/register':
      return 'הרשמה';
    case '/tools':
      return 'כלים פרלמנטריים';
    case '/':
      return 'עמוד הבית';
    case 'one-minute-speech':
      return 'שאילתות ונאומים בני דקה';
    case 'genreal-agenda':
      return 'הצעות לסדר יום';
    default:
      return path.toLowerCase()
        .split('-')
        .map(s => s.charAt(0).toUpperCase() + s.slice(1))
        .join(' ');
  }
}
