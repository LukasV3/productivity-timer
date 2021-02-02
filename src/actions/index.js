export const updateSettings = (settings) => {
  return {
    type: "UPDATE_SETTINGS",
    payload: settings,
  };
};

export const updateActiveMenu = (activeMenu) => {
  return {
    type: "UPDATE_ACTIVE_MENU",
    payload: activeMenu,
  };
};
