import { openDb } from "../database";

export class CodeRepository {
  public add(name: any) {
    let db = openDb();
    var res=db.run(
      "insert into test(name) values($name)",
      {
        $name: name,
      },
      function (err, result) {
        if(err){
          console.log('error with insert');
        }
        db.close();                 
      }
    );
    return res;
  }
}
