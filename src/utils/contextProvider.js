import { useState, createContext, useContext } from "react";

const FormDataContext = createContext({
  formData: {},
  setFormData: {},
});

const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    amount: "",
    frequency: "",
    type: "net",
    submitted: false,
  });
  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

const useFormData = () => {
  const context = useContext(FormDataContext);
  return context;
};

export { useFormData, FormDataProvider };
