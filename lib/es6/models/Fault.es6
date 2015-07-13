import _ from 'underscore';

/**
 * @class Fault
 */
class Fault {

  constructor(faultObj) {
    let responseName = Object.keys(faultObj)[0];

    let messages = [];
    if (_.isArray(faultObj[responseName].sccFaultResp.detail.msgs.msg)) {
      _.each(faultObj[responseName].sccFaultResp.detail.msgs.msg, (faultMessage) => {
        messages.push(faultMessage);
      });
    } else {
      messages.push(faultObj[responseName].sccFaultResp.detail.msgs.msg);
    }

    this.responseName = responseName;
    this.faultMessages = messages;
  }
}

export default Fault;