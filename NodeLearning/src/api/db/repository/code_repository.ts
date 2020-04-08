import { openDb } from "../database";

export class CodeRepository {
  public async add(name: any) {
    let db = openDb();
    let result = await db.run(
      "insert into test(name) values($name)",
      {
        $name: name,
      },
      function (err, result) {
        
      }
    );
    db.close();
    return result;
  }
}
