const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_cc_messaging.clas.abap
class z2ui5_cl_cc_messaging {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_CC_MESSAGING';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"GET_JS": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async get_js() {
    return z2ui5_cl_cc_messaging.get_js();
  }
  static async get_js() {
    let result = new abap.types.String({qualifiedName: "STRING"});
    result.set(abap.operators.concat(new abap.types.String().set(`try { jQuery.sap.require("sap.ui.core.Messaging"); jQuery.sap.declare("z2ui5.Messaging");`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`sap.ui.require([`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`   "sap/ui/core/Control",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`   "sap/ui/core/Messaging",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`], (Control, Messaging) => {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`   "use strict";`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`   return Control.extend("z2ui5.Messaging", {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`       metadata: {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`           properties: {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`               items: { type: "Array" }`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`           }`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`       },`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`       init() {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`         if (!sap.z2ui5.oMessaging){`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`         sap.z2ui5.oMessaging = {};`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`         sap.z2ui5.oMessaging.oMessageProcessor = new sap.ui.core.message.ControlMessageProcessor();`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`          sap.z2ui5.oMessaging.oMessageManager = sap.ui.getCore().getMessageManager();`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`          sap.z2ui5.oMessaging.oMessageManager.registerMessageProcessor(sap.z2ui5.oMessaging.oMessageProcessor);`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`        }`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`       },`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`       onModelChange(oEvent) {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`           this.Messaging2Model();`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`       },`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`       Messaging2Model( ){`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`           var oData = Messaging.getMessageModel().getData();`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`           var Model = [];`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`           oData.forEach(element => {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`               Model.push( { `),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                       MESSAGE : element.message , `),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                       DESCRIPTION : element.description , `),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                       TYPE : element.type, `),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                       TARGET : element.aTargets[0] , `),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                       ADDITIONALTEXT : element.additionalText , `),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                       DATE : element.date , `),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                       DESCRIPTIONURL : element.descriptionUrl, `),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                       PERSISTENT : element.persistent } );`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`           });`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`           this.setProperty("items", Model );`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`       },`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`       Model2Messaging( ){`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`           var Model = this.getProperty("items");`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`           if(!Model) { return; }`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`           Model.forEach(element => {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`               var target = element.TARGET.split("--")[1];`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`               if ( target == undefined ) { target = element.TARGET }`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`               var oMessage = new sap.ui.core.message.Message({`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                   message: element.MESSAGE,`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                   description: element.DESCRIPTION,`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                   type: element.TYPE,`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                   target : sap.z2ui5.oView.getId( 'testINPUT' ) + '--' + target,`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                   additionalText : element.ADDITIONALTEXT , `),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                   date : element.DATE , `),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                   descriptionUrl : element.DESCRIPTIONURL, `),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                   persistent : element.PERSISTENT,`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                   processor : this.oMessageProcessor`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                 });`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                Messaging.addMessages(oMessage) ;`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`           });`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`           var resBinding = new sap.ui.model.ListBinding(Messaging.getMessageModel(), "/" );`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`           resBinding.attachChange(this.onModelChange.bind(this));`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`       },`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`       renderer(oRm, oControl) {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`           if(oControl.isInitialized) { return; }`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`               oControl.Model2Messaging();`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                Messaging.registerObject(sap.z2ui5.oView, true);`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`           oControl.isInitialized = true;`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`           setTimeout( (oControl) => { `),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                   `),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`   `),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`               }, 50 , oControl );`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`       }`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`   });`),abap.operators.concat(new abap.types.String().set(`\n`),new abap.types.String().set(`}); } catch (e) { }`))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))));
    return result;
  }
}
abap.Classes['Z2UI5_CL_CC_MESSAGING'] = z2ui5_cl_cc_messaging;
z2ui5_cl_cc_messaging.ty_s_item = new abap.types.Structure({"message": new abap.types.String({qualifiedName: "Z2UI5_CL_CC_MESSAGING=>TY_S_ITEM-MESSAGE"}), "description": new abap.types.String({qualifiedName: "Z2UI5_CL_CC_MESSAGING=>TY_S_ITEM-DESCRIPTION"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_CC_MESSAGING=>TY_S_ITEM-TYPE"}), "target": new abap.types.String({qualifiedName: "Z2UI5_CL_CC_MESSAGING=>TY_S_ITEM-TARGET"}), "additionaltext": new abap.types.String({qualifiedName: "Z2UI5_CL_CC_MESSAGING=>TY_S_ITEM-ADDITIONALTEXT"}), "date": new abap.types.String({qualifiedName: "Z2UI5_CL_CC_MESSAGING=>TY_S_ITEM-DATE"}), "descriptionurl": new abap.types.String({qualifiedName: "Z2UI5_CL_CC_MESSAGING=>TY_S_ITEM-DESCRIPTIONURL"}), "persistent": new abap.types.String({qualifiedName: "Z2UI5_CL_CC_MESSAGING=>TY_S_ITEM-PERSISTENT"})}, "z2ui5_cl_cc_messaging=>ty_s_item", undefined, {}, {});
z2ui5_cl_cc_messaging.ty_t_items = abap.types.TableFactory.construct(new abap.types.Structure({"message": new abap.types.String({qualifiedName: "Z2UI5_CL_CC_MESSAGING=>TY_S_ITEM-MESSAGE"}), "description": new abap.types.String({qualifiedName: "Z2UI5_CL_CC_MESSAGING=>TY_S_ITEM-DESCRIPTION"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_CC_MESSAGING=>TY_S_ITEM-TYPE"}), "target": new abap.types.String({qualifiedName: "Z2UI5_CL_CC_MESSAGING=>TY_S_ITEM-TARGET"}), "additionaltext": new abap.types.String({qualifiedName: "Z2UI5_CL_CC_MESSAGING=>TY_S_ITEM-ADDITIONALTEXT"}), "date": new abap.types.String({qualifiedName: "Z2UI5_CL_CC_MESSAGING=>TY_S_ITEM-DATE"}), "descriptionurl": new abap.types.String({qualifiedName: "Z2UI5_CL_CC_MESSAGING=>TY_S_ITEM-DESCRIPTIONURL"}), "persistent": new abap.types.String({qualifiedName: "Z2UI5_CL_CC_MESSAGING=>TY_S_ITEM-PERSISTENT"})}, "z2ui5_cl_cc_messaging=>ty_s_item", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_cc_messaging=>ty_t_items");
export {z2ui5_cl_cc_messaging};
//# sourceMappingURL=z2ui5_cl_cc_messaging.clas.mjs.map