import request from '../../utils/request';

export const MESSAGE_SEND_ACTION = 'MESSAGE_SEND_ACTION';
export const GET_MESSAGE_ACTION = 'GET_MESSAGE_ACTION';

export const messageSendAction = () => {
  return {
    type: MESSAGE_SEND_ACTION,

  };
}
export const messageGetAction = (message) => {
  return {
    type: GET_MESSAGE_ACTION,
    message:message

  };
}

export const sendMessage = (r) => {
  console.log(r)
  return (dispatch) => {
    request('/message', 'POST',r)
    .then(r => dispatch(messageSendAction()))
    .then(r=>dispatch(getMessage()))
  }
}

export const getMessage = (r) => {
  return (dispatch) => {
    request('/message', 'GET',r)
    .then(r => dispatch(messageGetAction(r)))
  }
}
 

export const updateCategory = (id,s) => {
  console.log(id,s)
  return (dispatch) => {
    request('/message/'+id+'/', 'PATCH',{state:s})
    .then(r => dispatch(getMessage()))
  }
}

export const deleteMessage = (id,s) => {
  console.log(id,s)
  return (dispatch) => {
    request('/message/'+id+'/', 'DELETE')
    .then(r => dispatch(getMessage()))
  }
}
  export default {
    sendMessage,
    getMessage,
    updateCategory,
    deleteMessage,
  }
