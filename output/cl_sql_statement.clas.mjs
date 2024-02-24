const {cx_root} = await import("./cx_root.clas.mjs");
// cl_sql_statement.clas.abap
class cl_sql_statement {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CL_SQL_STATEMENT';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"CONSTRUCTOR": {"visibility": "U", "parameters": {"CON_REF": {"type": () => {return new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});}, "is_optional": " "}}},
  "EXECUTE_UPDATE": {"visibility": "U", "parameters": {"STATEMENT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "EXECUTE_QUERY": {"visibility": "U", "parameters": {"RESULT_SET": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_SQL_RESULT_SET", RTTIName: "\\CLASS=CL_SQL_RESULT_SET"});}, "is_optional": " "}, "STATEMENT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "EXECUTE_DDL": {"visibility": "U", "parameters": {"STATEMENT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    let con_ref = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
    if (INPUT && INPUT.con_ref) {con_ref.set(INPUT.con_ref);}
    abap.statements.assert(abap.compare.initial(con_ref));
    return this;
  }
  async execute_ddl(INPUT) {
    let statement = INPUT?.statement;
    if (statement?.getQualifiedName === undefined || statement.getQualifiedName() !== "STRING") { statement = undefined; }
    if (statement === undefined) { statement = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.statement); }
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(13).set('not supported')));
  }
  async execute_update(INPUT) {
    let statement = INPUT?.statement;
    if (statement?.getQualifiedName === undefined || statement.getQualifiedName() !== "STRING") { statement = undefined; }
    if (statement === undefined) { statement = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.statement); }
    let lv_sql_message = new abap.types.String({qualifiedName: "STRING"});
    abap.statements.assert(abap.compare.initial(statement) === false);
    if (abap.context.databaseConnections["DEFAULT"] === undefined) {
      lv_sql_message.set(new abap.types.Character(19).set('not connected to db'));
    }
    if (abap.compare.initial(lv_sql_message) === false) {
      const unique201 = await (new abap.Classes['CX_SQL_EXCEPTION']()).constructor_();
      unique201.EXTRA_CX = {"INTERNAL_FILENAME": "cl_sql_statement.clas.abap","INTERNAL_LINE": 48};
      throw unique201;
    }
    try {
        await abap.context.databaseConnections["DEFAULT"].execute(statement.get());
    } catch(e) {
        lv_sql_message.set(e + "");
    }
    if (abap.compare.initial(lv_sql_message) === false) {
      const unique202 = await (new abap.Classes['CX_SQL_EXCEPTION']()).constructor_();
      unique202.EXTRA_CX = {"INTERNAL_FILENAME": "cl_sql_statement.clas.abap","INTERNAL_LINE": 57};
      throw unique202;
    }
  }
  async execute_query(INPUT) {
    let result_set = new abap.types.ABAPObject({qualifiedName: "CL_SQL_RESULT_SET", RTTIName: "\\CLASS=CL_SQL_RESULT_SET"});
    let statement = INPUT?.statement;
    if (statement?.getQualifiedName === undefined || statement.getQualifiedName() !== "STRING") { statement = undefined; }
    if (statement === undefined) { statement = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.statement); }
    let lv_sql_message = new abap.types.String({qualifiedName: "STRING"});
    abap.statements.assert(abap.compare.initial(statement) === false);
    if (abap.context.databaseConnections["DEFAULT"] === undefined) {
      lv_sql_message.set(new abap.types.Character(19).set('not connected to db'));
    }
    if (abap.compare.initial(lv_sql_message) === false) {
      const unique203 = await (new abap.Classes['CX_SQL_EXCEPTION']()).constructor_();
      unique203.EXTRA_CX = {"INTERNAL_FILENAME": "cl_sql_statement.clas.abap","INTERNAL_LINE": 71};
      throw unique203;
    }
    result_set.set(await (new abap.Classes['CL_SQL_RESULT_SET']()).constructor_());
    try {
        const res = await abap.context.databaseConnections["DEFAULT"].select({select: statement.get()});
        result_set.get().mv_magic = res.rows;
    } catch(e) {
        lv_sql_message.set(e + "");
    }
    if (abap.compare.initial(lv_sql_message) === false) {
      const unique204 = await (new abap.Classes['CX_SQL_EXCEPTION']()).constructor_();
      unique204.EXTRA_CX = {"INTERNAL_FILENAME": "cl_sql_statement.clas.abap","INTERNAL_LINE": 84};
      throw unique204;
    }
    return result_set;
  }
}
abap.Classes['CL_SQL_STATEMENT'] = cl_sql_statement;
export {cl_sql_statement};
//# sourceMappingURL=cl_sql_statement.clas.mjs.map