export const activeIndicator_Text = (target: any, current: any) => {
  if (target == current) {
    return "color-accent";
  } else {
    return "";
  }
};

export const activeIndicator_Bg = (target: any, current: any) => {
  if (target == current) {
    return "bg-accent";
  } else {
    return "bg-none";
  }
};
