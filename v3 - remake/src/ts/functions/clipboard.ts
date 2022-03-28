const copyToClipboard = (StringToCopy: any) => {
  navigator.clipboard.writeText(StringToCopy).catch((error) => {
    console.log(error);
  });
};

export { copyToClipboard };
