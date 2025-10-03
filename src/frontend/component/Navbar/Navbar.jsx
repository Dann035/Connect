
function Navbar() {
  return (
    <nav>
      <div>
        <h2>Connect</h2>
        <a href="#">Home</a>
        <a href="#">Explore</a>
        <a href="#">Notifications</a>
      </div>
      <div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width={25} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-60">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input type="text" placeholder="Search..." />
        </div>
        <button>+</button>
        <button>
          Call
        </button>
        <img src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" alt="Profile" width={30}/>
      </div>
    </nav>
  )
}

export default Navbar