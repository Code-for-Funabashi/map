import axios from "axios";

export const loadFeature = async <T>(url: string) => {
  const res = await axios.get<T>(url);
  return res.data;
};

export const loadFeatures = async <T>(url: string) => {
  const res = await axios.get<[T]>(url);
  return res.data;
};
