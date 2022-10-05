import { frostings, useFrosting } from "..";
import Logo from "./Logo";

export default function Layout({ children }) {
  const { frosting, setFrosting } = useFrosting();

  return (
    <div className="w-screen min-h-100vh text-white bg-slate-800 max-w-full">
      <div className="min-h-screen w-[500px] max-w-full p-8 pt-0 mx-auto">
        <div className="h-[400px]"> {children}</div>
        <section>
          <div className="flex gap-4">
            <Logo />
            <div className="flex flex-col gap-1">
              <span className="font-[600]">Pycakes</span>
              <span style={{ color: "rgba(241, 241, 241, 0.71)" }}>1.2km</span>
            </div>
          </div>
          <h1 className="font-bold text-[34px] mt-2">Cupcake</h1>
          <p className="font-bold text-[22px]">
            <span className="text-[#ECA68D] text-[10px]">$</span>2.50
          </p>
          <p className="text-center mt-10 mb-10">
            Pycakes has the best cupcakes in town. Made with love and grassfed
            so you can always enjoy a new one
          </p>
          <fieldset>
            <legend className="text-lg font-medium text-gray-100">
              Frosting
            </legend>
            <div className="mt-4 shadow divide-y divide-slate-700 bg-slate-900 px-4 rounded-lg">
              {frostings.map((option, optionIdx) => (
                <div key={optionIdx} className="relative flex items-start py-3">
                  <div className="min-w-0 flex-1 text-sm">
                    <label
                      htmlFor={`option-${option.id}`}
                      className="font-medium text-gray-300 select-none cursor-pointer w-full block"
                    >
                      {option.name}
                    </label>
                  </div>
                  <div className="ml-3 flex items-center h-5">
                    <input
                      onChange={(e) => setFrosting(e.target.value)}
                      value={option.id}
                      name={`option-${option.id}`}
                      id={`option-${option.id}`}
                      type="radio"
                      checked={option.id === frosting?.id}
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </fieldset>
          <button
            className="rounded-xl h-[64px] w-full text-white mt-12 hover:shadow-2xl hover:scale-105 transition"
            style={{
              background:
                "linear-gradient(90.09deg, #D68E55 0.08%, rgba(240, 138, 115, 0.9) 99.62%)",
            }}
          >
            Buy
          </button>
        </section>
      </div>
    </div>
  );
}
