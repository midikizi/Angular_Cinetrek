export class User {
    id:number
    username: string;
    password:string;
    email:string;
    first_name:string;
    last_name:string;

    constructor(){
      this.id = 0;
      this.username = "";
      this.password = "";
      this.email = "";
      this.first_name = ""; 
      this.last_name = "";
    }
}
