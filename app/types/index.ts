export interface Author {
    id:number;
    name:string;
    email:string;
    website:string;
    company:{
        name:string;
    };
}

export interface BlogPost {
  id: number;
  title: string;
  body: string;
  userId: number;
  category: string;
}

export interface BlogCategory {
  id: number;
  name: string;
  slug: string;
}