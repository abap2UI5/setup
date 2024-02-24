const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_cc_spreadsheet.clas.abap
class z2ui5_cl_cc_spreadsheet {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_CC_SPREADSHEET';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"GET_JS": {"visibility": "U", "parameters": {"R_JS": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "I_COLUMNCONFIG": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async get_js(INPUT) {
    return z2ui5_cl_cc_spreadsheet.get_js(INPUT);
  }
  static async get_js(INPUT) {
    let r_js = new abap.types.String({qualifiedName: "STRING"});
    let i_columnconfig = INPUT?.i_columnconfig;
    r_js.set(abap.operators.concat(new abap.types.String().set(`        sap.ui.define("z2ui5/ExportSpreadsheet" , [`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`            "sap/ui/core/Control",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`            "sap/m/Button",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`            "sap/ui/export/Spreadsheet"`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`        ], function (Control, Button, Spreadsheet) {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`            "use strict";`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`            return Control.extend("z2ui5.ExportSpreadsheet", {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                metadata: {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    properties: {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        tableId: {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            type: "string",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            defaultValue: ""`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        },`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        type: {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            type: "string",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            defaultValue: ""`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        },`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        icon: {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            type: "string",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            defaultValue: ""`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        },`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        text: {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            type: "string",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            defaultValue: ""`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        }`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    },`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    aggregations: {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    },`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    events: { },`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    renderer: null`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                },`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                renderer: function (oRm, oControl) {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    oControl.oExportButton = new Button({`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        text: oControl.getProperty("text"),`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        icon: oControl.getProperty("icon"), `),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        type: oControl.getProperty("type"), `),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        press: function (oEvent) { `),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                             var aCols =`),abap.operators.concat(i_columnconfig,abap.operators.concat(new abap.types.String().set(`;`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                             var oBinding, oSettings, oSheet, oTable, vTableId, vViewPrefix,vPrefixTableId;`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                             vTableId = oControl.getProperty("tableId")`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                          //   vViewPrefix = sap.z2ui5.oView.sId;`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                           //  vPrefixTableId = vViewPrefix + "--" + vTableId;`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                             vPrefixTableId = sap.z2ui5.oView.createId( vTableId );`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                             oTable = sap.ui.getCore().byId(vPrefixTableId);`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                             oBinding = oTable.getBinding("rows");`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                             if (oBinding == null) {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                               oBinding = oTable.getBinding("items");`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                             };`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                             oSettings = {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                               workbook: { columns: aCols },`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                               dataSource: oBinding`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                             };`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                             oSheet = new Spreadsheet(oSettings);`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                             oSheet.build()`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                               .then(function() {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                               }).finally(function() {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                                 oSheet.destroy();`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                               });`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                         }.bind(oControl)`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                  });`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    oRm.renderControl(oControl.oExportButton);`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                }`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`            });`),abap.operators.concat(new abap.types.String().set(`\n`),new abap.types.String().set(`        });`)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))));
    return r_js;
  }
}
abap.Classes['Z2UI5_CL_CC_SPREADSHEET'] = z2ui5_cl_cc_spreadsheet;
export {z2ui5_cl_cc_spreadsheet};
//# sourceMappingURL=z2ui5_cl_cc_spreadsheet.clas.mjs.map