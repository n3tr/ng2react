export class Repo {
  id: number;
  name: string;
  full_name: string;
  stargazers_count: number;
  avatar_url: string;
  html_url: string;

  constructor(json: any) {
    this.html_url = json.html_url;
    this.id = json.id;
    this.name = json.name;
    this.full_name = json.full_name;
    this.stargazers_count = json.stargazers_count;
    this.avatar_url = json.owner.avatar_url;
  }
}