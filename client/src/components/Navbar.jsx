function Navbar() {
  return (
    <header className="border-b border-emerald-100 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5 sm:px-6 opacity-80"
      
      style={{
      backgroundImage:
        "url('https://plus.unsplash.com/premium_photo-1712828731398-ad18ac5a9748?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFwc3xlbnwwfHwwfHx8MA%3D%3D')",
    }}>
        <div>
          <p className="text-sm font-medium text-emerald-700">Prototype</p>
          <h1 className="text-5xl font-bold tracking-normal text-yellow-50 sm:text-4xl">
            Bangalore Pincode Explorer
          </h1>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
