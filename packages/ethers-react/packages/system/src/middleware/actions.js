/**
 * @summary Insert documentation for enhanceActions middleware
 * @param {Object} state the state object
 * @param {React.Dispatch} dispatch
 */
export const enhanceActions = (actions, state, dispatch) => {
  let enhanced = {};
  const keys = Object.keys(actions);
  keys.forEach(action => {
    enhanced[action] = actions[action](state, dispatch);
  });
  return enhanced;
};

/**
 * @function enhanceExtensionActions
 * @description Wrap extenion actions with dispatch
 */
export const enhanceExtensionActions = (extensions, dispatch) => {
  if (Array.isArray(extensions) && extensions.length > 0) {
    let actions = {};
    extensions.map(extension => {
      if (extension.actions) {
        return Object.keys(extension.actions).forEach(action => {
          actions[action] = extension.actions[action](dispatch);
        });
      }
      return actions;
    });
  } else {
  }
};
