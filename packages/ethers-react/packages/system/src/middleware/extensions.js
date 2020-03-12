export const extensionsInitialize = (extensions, state, dispatch) => {
  if (Array.isArray(extensions) && extensions.length > 0) {
    return extensions.map(extension => {
      return Object.values(extension.hooks).map(effect =>
        effect(state, dispatch)
      );
    });
  } else {
    return null;
  }
};
