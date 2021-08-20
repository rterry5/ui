export class Game {
  public gameTitle: string;
  public yearPublished: string;
  public genre: string;
  public imageUrl: string;

  constructor(title: string, year: string, genre: string, url: string) {
    this.gameTitle = title;
    this.yearPublished = year;
    this.genre = genre;
    this.imageUrl = url;
  }
}
