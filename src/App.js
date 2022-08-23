import Form from "./components/Form";
import Header from "./components/Header";
import { FormDataProvider } from "./utils/contextProvider";

const App = () => {
  return (
    <FormDataProvider>
      <div className="h-screen bg-gray-50">
        <div className="p-8 md:p-16 grid grid-flow-col">
          <div className="bg-white rounded-xl shadow-md p-8">
            <Header />
            <Form />
          </div>
          <div className="col-span-4"></div>
        </div>
      </div>
    </FormDataProvider>
  );
};

export default App;
