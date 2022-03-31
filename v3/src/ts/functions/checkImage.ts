import { useApiSystem, useApiRemote } from "@/store/api/core";
import axios from "axios";

export const checkImageURL = (url: string) => {
  axios.get(url).then(function (response) {
    if (response.status == 200) {
      return url;
    } else {
      return "@/assets/brokenimage.png";
    }
  });
};

export const chooseImageUrl = (url: string) => {
  if (url.indexOf("http")) {
    return useApiRemote().assets + url;
  } else {
    return url;
  }
};
