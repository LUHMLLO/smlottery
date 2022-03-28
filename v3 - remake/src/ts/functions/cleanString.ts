const cleanString = (string: string): string => {
  const clean = string.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "");
  return clean.replace(/\s+/g, "-").toLowerCase();
};

export { cleanString };
