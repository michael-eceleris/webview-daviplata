const sendPostMessage = (isIphone, type = "", data = "") => {
  let message = {
    name: type,
    body: data,
  };
  if (isIphone) {
    window.webkit.messageHandlers.toggleMessageHandler.postMessage(message);
  } else {
    window.toggleMessageHandler.postMessage(JSON.stringify(message));
  }
};

export const usePostMessage = () => {
  const handlePostMessage = sendPostMessage;
  return { handlePostMessage };
};
