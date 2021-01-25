export interface Article {
  code: string;
  name: string;
  adress: string,
  population: number,
  postalCode: string,
  city: string,
  phone: string,
  email: string
}

export function makeArticle(data: Partial<Article>): Article {
  const defaultValue: Article = {
    code: '',
    name: '',
    adress: '',
    population: 0,
    postalCode: '',
    city: '',
    phone: '',
    email: ''
  };

  return { ...defaultValue, ...data };
}
