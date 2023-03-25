import Xcbutton from './button/xc-button.vue';
import XCInputMoney from './inputMoney/xc-inputmoney.vue';
import XcResult from './ResultPage/resultPage.vue';
import XcDetailCard from './detailCard/xc-detailCard.vue';
import XcStep from './step/xc-step.vue';
import XcStepCol from './step/xc-stepcol.vue';
import xcSearch from './search/xc-search.vue'
import XcDynamicForm from './dynamicForm/xc-dynamicform.vue';
import creatDialog from './dialog/index'
import basicInput from './BasicInput/xc-basicInput.vue';
import xcDropdownMenu from './dropdownMenu/xc-dropdownMenu.vue';
import XCDownAccount from "./downAccount/xc-downAccount.vue"
import XCDownAccountT from "./downAccountT/xc-downAccountT.vue"
import XCSearchCondition from "./searchCondition/xc-searchCondition.vue"
import xcRemarks from './remarks/xc-remarks.vue'
import xcSelectHead from './selectHead/xc-selectHead.vue'
import xcDateRange from "./DatePickerRange/datePickerRange.vue"
import xcCheckboxProtocol from "./CheckboxProtocol/xc-checkboxProtocol.vue"

const components = {
  'xcButton': Xcbutton,
  'xc-inputmoney': XCInputMoney,
  'xc-result-page': XcResult,
  'xc-basicInput': basicInput,
  'xc-detail-card': XcDetailCard,
  'xc-step': XcStep,
  'xc-stepcol': XcStepCol,
  'xc-dropdownMenu': xcDropdownMenu,
  'xc-down-account': XCDownAccount,
  'xc-down-accountT': XCDownAccountT,
  'xc-dynamicForm': XcDynamicForm,
  'xc-search': xcSearch,
  'xc-search-condition':XCSearchCondition,
  'xc-remarks': xcRemarks,
  'xc-selectHead': xcSelectHead,
  'xc-date-range': xcDateRange,
  'xc-checkboxProtocol':xcCheckboxProtocol
};
export default {
  install(app) {
    app.config.globalProperties.$dialog = creatDialog //全局挂载dialog弹窗
    // components.map((item) => app.component(item.name, item));

    Object.keys(components).forEach(key => {
      app.component(key, components[key]);
    });
  }

};
