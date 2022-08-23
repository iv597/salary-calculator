import Form from "./components/Form";
import Header from "./components/Header";
import SalaryTable from "./components/SalaryTable";
import { FormDataProvider } from "./utils/contextProvider";

const App = () => {
  return (
    <FormDataProvider>
      <div className="min-h-full bg-gray-50">
        <div className="p-8 md:p-16 flex flex-col lg:flex-row">
          <div className="bg-white rounded-xl shadow-md p-8 flex-1">
            <Header />
            <Form />
          </div>
          <div className="flex-[2_2_0%]">
            <SalaryTable />
          </div>
        </div>
      </div>
    </FormDataProvider>
  );
};

export default App;
