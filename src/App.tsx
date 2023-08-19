import { Form, Result } from './components';
import { FormProvider } from './components/form.context';

function App() {
    return (
        <FormProvider>
            <div className="min-h-screen bg-slate-900">
                <div className="max-w-[100rem] text-gray-300 flex flex-col 2xl:flex-row gap-10 mx-auto px-5 md:px-10 py-10 min-h-screen bg-slate-900">
                    <Form />
                    <Result />
                </div>
            </div>
        </FormProvider>
    );
}

export default App;
