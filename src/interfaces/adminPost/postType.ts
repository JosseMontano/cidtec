export interface PostType {
    id: number
    title: string
    description: string
    author: AuthorType
    authorId: number
  }
  
  export interface AuthorType {
    id: number
    email: string
    photo: string
    name: string
    roleId: number
  }
  