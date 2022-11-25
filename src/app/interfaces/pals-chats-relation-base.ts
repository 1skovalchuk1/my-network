export interface IPalsChatRelation {
  [id:string]: {
    palsId: Array<string>,
    chatId: string
  }
}