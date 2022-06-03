import Logo from './Logo'

export default function Layout({ children }) {
  return (
    <div className="w-screen h-screen bg-[#1D1D1D] w-[500px] m-auto p-8 text-white">
      <div className="h-[400px]">{children}</div>
      <section>
        <div>
          <Logo />
          <div>
            <span>Pycakes</span>
            <span>1.2km</span>
          </div>
        </div>
        <h1>Cupcake</h1>
        <p>$2.5</p>
        <p className="text-center mt-10 mb-10">Pycakes has the best cupcakes in town. You will love them and keep asking for more.</p>
        <button className="rounded-xl h-[64px] w-full text-white" style={{
          background: "linear-gradient(90.09deg, #D68E55 0.08%, rgba(240, 138, 115, 0.9) 99.62%)"
        }}>
          Buy
        </button>
      </section>
    </div>
  );
}
